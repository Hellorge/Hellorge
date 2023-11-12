{% for file in site.html_files %}
  <a href="{{ file.path }}">{{ file.basename }}</a> <br/>
{% endfor %}
