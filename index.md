---
layout: default
---

{% for file in site.static_files %}
  {% if file.path contains "works" %}
  <iframe class="demo-frame" src="/void{{ file.path }}"></iframe>
  <a href="/{{ site.github.repository_name }}{{ file.path }}">
    {{ file.basename }}
    <br/>
    {{ file.path | append: site.github.build_revision | relative_url }}
    <br/>
    {{ file.path | append: site.github.build_revision }}
  </a>
  {% endif %}
{% endfor %}
