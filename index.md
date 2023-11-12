{% assign pages = site.documents | concat: site.pages %}
{% for p in pages %}
  {{ p }}
{% endfor %}


{{ site.static_files }}

{{ site.html_pages }}

{{ site.html_files }}
