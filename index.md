{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    hello
  {% endif %}
{% endfor %}
