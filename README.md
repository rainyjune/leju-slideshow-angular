# leju-slideshow-angular

=========================

A very simple slideshow directive for AngularJS.

# How to use

> First you include it on your app

```html
<script src="angular.slideshow.js"></script>
```

> Then setup your app

```javascript
var myApp = angular.module('MyApp',['lejuslideshow']);
```

> And then just use it by add directive in your HTML

```html
<div  class="y_slider" data-slideshow-container='{"activeTriggerCls": "on", "play": true, "loop": true, "trigger": "#numlist", "callback": "mycallback"}'>
  <div>
    <ul>
      <li><img class="img" src="images/y_bg01.jpg"></li>
      <li><img class="img" src="images/y_bg01.jpg"></li>
      <li><img class="img" src="images/y_bg01.jpg"></li>
    </ul>  
  </div>
  <div class="y_navigater">
    <ul id="numlist">
      <li class="on"></li>
      <li></li>
      <li></li>
    </ul>
  </div>  
</div>
```
