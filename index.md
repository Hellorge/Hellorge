{{ page.path }}
0
{{ page.url }}
1
{{ site.url }}
2
{{ site.html_files }}
3
{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="{{ file.path }}">{{ file.basename }}</a> <br/>
  {% endif %}
{% endfor %}
