// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../input/DragEventSeparator","../../../input/InputHandler"],function(d,f,g,h,k){Object.defineProperty(f,"__esModule",{value:!0});d=function(d){function a(a){var b=d.call(this,!0)||this;b.view=a;b.registerIncoming("drag",function(a){return b._handleDrag(a)});b.registerIncoming("pointer-down",function(){return b.stopMomentumNavigation()});var e=b.view.mapViewNavigation;b.dragEventSeparator=new h.DragEventSeparator({start:function(a,c){e.pinch.begin(b.view,
c.data);c.stopPropagation()},update:function(a,c){e.pinch.update(b.view,c.data);c.stopPropagation()},end:function(a,c){e.pinch.end(b.view);c.stopPropagation()},condition:function(a){return 2<=a}});return b}g.__extends(a,d);a.prototype._handleDrag=function(a){this.dragEventSeparator.handle(a)};a.prototype.stopMomentumNavigation=function(){this.view.mapViewNavigation.pinch.stopMomentumNavigation()};return a}(k.InputHandler);f.PinchRotateAndZoom=d});