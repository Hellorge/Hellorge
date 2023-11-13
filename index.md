---
layout: default
---

{% for file in site.static_files | where file.path contains "works" %}
	<div markdown="0">
		<iframe class="demo-frame" src="/void{{ file.path }}"></iframe>
		<a href="{{ file.path | absolute_url }}">{{ file.basename }}</a>
	</div>
 {% endfor %}
