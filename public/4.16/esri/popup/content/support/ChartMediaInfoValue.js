// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators ./ChartMediaInfoValueSeries".split(" "),function(k,l,b,f,g,c,h){return function(e){function a(a){a=e.call(this,a)||this;a.fields=[];a.normalizeField=null;a.series=[];a.tooltipField=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({fields:g.clone(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})};var d;b.__decorate([c.property({type:[String],
json:{write:!0}})],a.prototype,"fields",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"normalizeField",void 0);b.__decorate([c.property({type:[h],json:{read:!1}})],a.prototype,"series",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"tooltipField",void 0);return a=d=b.__decorate([c.subclass("esri.popup.content.support.ChartMediaInfoValue")],a)}(f.JSONSupport)});