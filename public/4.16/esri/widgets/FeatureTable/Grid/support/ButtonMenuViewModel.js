// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../../../core/accessorSupport/decorators/cast ./ButtonMenuItem".split(" "),function(k,l,c,g,d,h,e){return function(f){function b(a){a=f.call(this,a)||this;a.items=null;a.open=!1;return a}c.__extends(b,f);b.prototype.castItems=function(a){return a?a.map(function(a){return a instanceof e?a:new e(a)}):null};c.__decorate([d.property()],b.prototype,"items",void 0);c.__decorate([h.cast("items")],b.prototype,
"castItems",null);c.__decorate([d.property()],b.prototype,"open",void 0);return b=c.__decorate([d.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],b)}(g)});