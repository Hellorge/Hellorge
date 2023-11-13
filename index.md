---
layout: default
---

{% for file in site.static_files %}
  {% if file.path contains "works" %}
  <iframe class="demo-frame" src="/void{{ file.path }}"></iframe>
  <a href="/{{ site.github.repository_name }}{{ file.path }}">
    {{ file.basename }}
    <br/>
    {{ site.github.repository_name | append: file.path}}
    <br/>
    {{ site.github.repository_name | append: file.path | relative_url }}
    <br/>
    {{ site.github.repository_name | append: file.path | absolute_url }}
  </a>
  {% endif %}
{% endfor %}
