{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="/void{{ file.path }}">{{ file.basename }}</a>
  {% endif %}
{% endfor %}

||||||||||||||||||||||||||||||||||

{% highlight none %}
{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="/void{{ file.path }}">{{ file.basename }}</a>
  {% endif %}
{% endfor %}
{% endhighlight %}

|||||||||||||||||||||||||||||||||||||

{% highlight html %}
{% for file in site.static_files %}
  {% if file.extname == ".html" %}
    <a href="/void{{ file.path }}">{{ file.basename }}</a>
  {% endif %}
{% endfor %}
{% endhighlight %}
