// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(g,h,b,e,f,c){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.value=null;a.label=null;a.color=null;return a}b.__extends(a,d);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:e,json:{write:!0}})],
a.prototype,"color",void 0);return a=b.__decorate([c.subclass("esri.renderers.support.ColormapInfo")],a)}(f.JSONSupport)});