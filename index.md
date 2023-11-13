{% raw%} {% for file in site.static_files %}
  {% if file.path contains "works" %}
    <a href="/void{{ file.path }}">{{ file.basename }}</a>
    <iframe src="/void{{ file.path }}"></iframe>
  {% endif %}
{% endfor %}
