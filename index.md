{% assign pages = site.documents | concat: site.pages %}
{% for p in pages %}
  {{ p }}
{% endfor %}
