{% assign pages = site.documents | concat: site.pages %}
{% for p in pages %}
  {% if p.url contains "/tests/" or pagesWithoutContent contains p.title %}{% continue %}{% endif %}
  "{{ p.url | slugify }}": {
      "type": "{{ p.collection | default: 'pages' }}",
      "title": {{ p.title | markdownify | strip_html | normalize_whitespace | jsonify }},
      "description": {{ p.description | markdownify | strip_html | normalize_whitespace | jsonify }},
      "tags": {{ p.tags | default: emptylist | unshift: p.course | jsonify }},
      "url": "{{ p.url }}"
  }
  {% unless forloop.last %},{% endunless %}
{% endfor %}
