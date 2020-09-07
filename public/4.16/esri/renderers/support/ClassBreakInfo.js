// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils".split(" "),function(k,l,b,f,h,c,d){return function(g){function a(a){a=g.call(this,a)||this;a.description=null;a.label=null;a.minValue=null;a.maxValue=0;a.symbol=null;return a}b.__extends(a,g);e=a;a.prototype.clone=function(){return new e({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():
null})};a.prototype.getMeshHash=function(){var a=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+a};var e;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"classMaxValue"},
write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0);b.__decorate([c.property({types:f.symbolTypesRenderer,json:{origins:{"web-scene":{types:f.symbolTypesRenderer3D,read:d.read,write:d.writeTarget}},read:d.read,write:d.writeTarget}})],a.prototype,"symbol",void 0);return a=e=b.__decorate([c.subclass("esri.renderers.support.ClassBreakInfo")],a)}(h.JSONSupport)});