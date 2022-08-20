var productId = parseInt(document.currentScript.getAttribute('pid'));
var variantId = parseInt(document.currentScript.getAttribute('vid'));
var userId = parseInt(document.currentScript.getAttribute('uid'));
var collectionId = document.currentScript.getAttribute('cid').split(',').map(e=>parseInt(e));
var currency = document.currentScript.getAttribute('curr');
var getCoupons = new XMLHttpRequest();

getCoupons.onreadystatechange = function () {
  if(getCoupons.readyState === XMLHttpRequest.DONE) {
    var status = getCoupons.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      let response = {};
      try{
      	response = JSON.parse(getCoupons.response);
      } catch {
        console.log('error!!!!!--');
      }
      makeCoupons(response);
    } else {
      console.log('error!!!!!--');
    }
  }
};

function makeCoupons(rules=window.couponRules){
  window.couponRules = rules;
	var box = document.createElement('div');
  	box.classList = 'goofy_offers_box';
  	console.log(variantId,productId,collectionId,box,rules);
    if(rules.price_rules){
      box.innerHTML = rules.price_rules.filter(e=>{
        e.value = Math.abs(e.value);
        e.showCode = false;
        if(e.target_type == 'shipping_line') {
          if(e.prerequisite_subtotal_range) {
            e.text = `Get free shipping on orders above ${formatter.format(e.prerequisite_subtotal_range.greater_than_or_equal_to)}.`;
          } else if(e.prerequisite_quantity_range) {
            e.text = `Buy ${e.prerequisite_quantity_range.greater_than_or_equal_to} items & get free shipping.`;
          } else {
            e.text = `Get free shipping on all orders.`;
          }
          return true;
        } else if(e.target_selection == 'all') {
          e.showCode = true;
        } else if(e.target_selection == 'entitled') {
          let allowedCollections = [].concat(e.entitled_collection_ids).concat(e.prerequisite_collection_ids);
          let allowedProducts = [].concat(e.entitled_product_ids).concat(e.prerequisite_product_ids);
          let allowedVariants = [].concat(e.entitled_variant_ids).concat(e.prerequisite_variant_ids);
          let colSet = new Set([...collectionId, ...allowedCollections]);
          if( (colSet.size < collectionId.length+e.entitled_collection_ids.length) || (allowedProducts.indexOf(productId) >= 0) || (allowedVariants.indexOf(variantId) >= 0) ) {
            e.showCode = true;
          } else {
            console.log('else of colset length',e.title);
          }
        } else {
          console.log('else of target_selection',e.title);
        }
        if(e.showCode){
          if(e.prerequisite_to_entitlement_quantity_ratio.entitled_quantity) {
            let prefix;
            if(e.prerequisite_to_entitlement_quantity_ratio.prerequisite_quantity) {
              prefix = `Buy ${e.prerequisite_to_entitlement_quantity_ratio.prerequisite_quantity} items`;
            } else if(e.prerequisite_to_entitlement_purchase.prerequisite_amount) {
              prefix = `Spend ${formatter.format(e.prerequisite_to_entitlement_purchase.prerequisite_amount)}`;
            }
            if(e.value == '-100.0' && e.value_type == 'percentage') {
              e.text = `${prefix} & get ${e.prerequisite_to_entitlement_quantity_ratio.entitled_quantity} free.`;
            } else {
              if(e.value_type == 'percentage') {
                e.text = `${prefix} & get next ${e.prerequisite_to_entitlement_quantity_ratio.entitled_quantity} at ${e.value}% off.`;
              } else {
                e.text = `${prefix} & get next ${e.prerequisite_to_entitlement_quantity_ratio.entitled_quantity} at ${formatter.format(e.value)} off.`;
              }
            }
          } else if(e.prerequisite_subtotal_range) {
            e.subvalue = e.value_type == 'percentage' ? e.value+'%' : 'flat '+formatter.format(e.value);
            e.text = `Get ${e.subvalue} off ${e.target_selection == 'all'?'on all orders':''} above ${formatter.format(e.prerequisite_subtotal_range.greater_than_or_equal_to)}.`;
          } else if(e.prerequisite_quantity_range && e.prerequisite_quantity_range.greater_than_or_equal_to){
            e.subvalue = e.value_type == 'percentage' ? e.value+'%' : 'flat '+formatter.format(e.value);
            e.text = `Buy ${e.prerequisite_quantity_range.greater_than_or_equal_to} or more items & get ${e.subvalue} off.`;
          } else {
            e.subvalue = e.value_type == 'percentage' ? e.value+'%' : 'flat '+formatter.format(e.value);
            e.text = `Get ${e.subvalue} off.`;
          }
          return true;
        } else {
          console.log('in else block of: if(e.showCode)',e.title);
        }
      }).map(e=>{
        return `<div>${e.text} Use Code: <b>${e.title}</b></div>`;
      }).join('');
      document.querySelector('.goofy_offers_box_root').innerHTML='';
      document.querySelector('.goofy_offers_box_root').appendChild(box);
    }
}

function variantCodes(variant) {
  variantId = parseInt(variant.id);
  makeCoupons();
}

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: currency,
  minimumFractionDigits: 0,
});


getCoupons.open("GET", "https://test-store112112.myshopify.com/admin/api/2022-04/price_rules.json");
getCoupons.setRequestHeader("X-Shopify-Access-Token", "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");
getCoupons.send();
