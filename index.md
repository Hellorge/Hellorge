{% for file in site.static_files %}
  {% if file.extname == ".html" %}
  <a href="/void{{ file.path }}">{{ file.basename }}</a>
  {% endif %}
{% endfor %}
