{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="{{ page.url }}/{{ file.path }}">{{ file.basename }}</a> <br/>
  {% endif %}
{% endfor %}
