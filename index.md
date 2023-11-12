{{ page.path }}

{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="{{ file.path }}">{{ file.basename }}</a> <br/>
  {% endif %}
{% endfor %}
