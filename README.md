# tooltipster-discovery
Discovery is a Tooltipster plugin to help browsing through a series of tooltips.

The idea is that if you hover over an element which makes a tooltip appear, and then move to an adjacent element also with a tooltip, there should be no "closing" and "opening" animations. The first tooltip closes and the second one opens immediately. This is useful when you have a row of adjacent elements, and a user wants to "browse" the tooltips of each one.

The behavior offered by this plugin is exactly the one demonstrated on Tooltipster's documentation page in the [Grouped tooltips](http://iamceege.github.io/tooltipster/#grouped) section.

Installation
------------

Include the plugin file in your page AFTER the Tooltipster file.

```html
<html>
    <head>
        ...
        <script type="text/javascript" src="tooltipster/dist/js/tooltipster.bundle.min.js"></script>
        <script type="text/javascript" src="tooltipster.discovery/tooltipster-discovery.min.js"></script>
    </head>
</html>
```

Usage
-----

Add a common class name to the tooltips you wish to group, for example `'grouped'`:
```html
<html>
    <body>
        <span class="tooltip" title="vegetable">Carrot</span>
        
        <span class="tooltip grouped" title="Fruit">Cherries</span>
        <span class="tooltip grouped" title="Fruit">Oranges</span>
        <span class="tooltip grouped" title="Fruit">Apples</span>
    </body>
</html>
```

Initialize your tooltips as usual:
```javascript
$('.tooltip').tooltipster({...});
```

**Note**: this plugin only works for tooltips which use the `'hover'` open trigger.

Discovery will have created a `group` global method. Use it to create a group based on the `'grouped'` class name:
```javascript
$.tooltipster.group('grouped');
```

And that's it, it should work.

To restore the normal behavior of the tooltips, just call the `ungroup` method:
```javascript
$.tooltipster.ungroup('grouped');
```

Note
----

You might be wondering if you have to declare the Discovery plugin in the options of the tooltips, like so:

```javascript
$('.tooltip').tooltipster({
    plugins: ['sideTip', 'discovery']
});
```

The answer is no, because Discovery only creates two global methods, and no instance methods. Plugins only need to be declared in the options of a tooltip when we want it to inherit instance methods from the plugin.

Thanks to [@matthew-dean](https://github.com/matthew-dean) for the idea of this plugin!