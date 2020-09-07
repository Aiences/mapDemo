// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../intl ../../../core/Handles ../../../core/maybe ../../../core/accessorSupport/decorators ../SmartMappingSliderViewModel ../support/utils".split(" "),function(p,q,e,f,l,h,d,m,n){return function(k){function c(a){var b=k.call(this,a)||this;b._handles=new l;b._initialRatios=[];b.hasTimeData=!1;b.labelFormatFunction=function(a,c){return"min"===c?b.messages.bottomLabel:"max"===c?b.messages.topLabel:a.toString()};b.max=1;b.messages=null;b.min=0;b.zoomingEnabled=!1;return b}
e.__extends(c,k);c.prototype.initialize=function(){var a=this,b=function(){return e.__awaiter(a,void 0,void 0,function(){var a;return e.__generator(this,function(b){switch(b.label){case 0:return a=this,[4,f.loadMessageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider")];case 1:return[2,a.messages=b.sent()]}})})};b();this._handles.add(f.onLocaleChange(b))};Object.defineProperty(c.prototype,"state",{get:function(){var a=this.max,b=this.min;return this.messages&&h.isSome(a)&&h.isSome(b)?
"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"stops",{set:function(a){this._initialRatios=a.map(function(a){return a.ratio});this._set("stops",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"values",{get:function(){var a=this.stops;return!a||!a.length||2>a.length?[]:[a[0].ratio,a[a.length-1].ratio]},enumerable:!0,configurable:!0});c.prototype.setValue=function(a,b){var c=this.max,e=this.min,d=this.stops;if(!(b>c||b<e)&&b!==d[a].ratio){var g=
this.values,f=0===a?0:d.length-1;a=Math.max(Math.min(b,a===g.length-1?c:g[a+1]),0===a?e:g[a-1]);n.getStopChanges(0===f?a:d[0].ratio,0===f?d[d.length-1].ratio:a,this._initialRatios).forEach(function(a,b){d[b].ratio=a.value});this.notifyChange("values");this.notifyChange("labels")}};c.prototype.getStopInfo=function(){var a=this.stops;return a&&a.length?a.map(function(a){return{color:a.color,offset:1-a.ratio}}):[]};e.__decorate([d.property({readOnly:!0})],c.prototype,"hasTimeData",void 0);e.__decorate([d.property({dependsOn:["messages"],
readOnly:!0})],c.prototype,"labelFormatFunction",void 0);e.__decorate([d.property({readOnly:!0})],c.prototype,"max",void 0);e.__decorate([d.property()],c.prototype,"messages",void 0);e.__decorate([d.property({readOnly:!0})],c.prototype,"min",void 0);e.__decorate([d.property({dependsOn:["max","messages","min"],readOnly:!0})],c.prototype,"state",null);e.__decorate([d.property()],c.prototype,"stops",null);e.__decorate([d.property({dependsOn:["stops"],readOnly:!0})],c.prototype,"values",null);e.__decorate([d.property({readOnly:!0})],
c.prototype,"zoomingEnabled",void 0);return c=e.__decorate([d.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],c)}(m)});