{% for file in site.static_files %}
  <a href="{{ file.path }}">{{ file.basename }}</a> <br/>
{% endfor %}
