{% raw%} {% for file in site.static_files %}
  {% if file.path contains "works" %}
    <a href="/void{{ file.path }}">{{ file.basename }}</a>
  {% endif %}
{% endfor %}
