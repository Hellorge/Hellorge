{% for file in site.static_files %}
	{% if file.path contains "works" %}
	  {% include window.html path=file.path name=file.name base=file.basename %}
	{% endif %}
{% endfor %}
