// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./SearchLayerField".split(" "),function(l,m,b,f,g,c,h,k){return function(e){function a(a){a=e.call(this,a)||this;a.field=null;a.id=null;a.subLayer=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d(g.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};var d;b.__decorate([c.property({type:k,json:{write:{enabled:!0,isRequired:!0}}})],
a.prototype,"field",void 0);b.__decorate([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:h.Integer,json:{write:!0}})],a.prototype,"subLayer",void 0);return a=d=b.__decorate([c.subclass("esri.webdoc.applicationProperties.SearchLayer")],a)}(f.JSONSupport)});