{% for file in site.static_files | where: "page", true %}
  <a href="{{ file.path }}">{{ file.basename }}</a> <br/>
{% endfor %}
