// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/lang ../../core/accessorSupport/decorators ./Content".split(" "),function(h,k,b,f,c,g){return function(e){function a(a){a=e.call(this,a)||this;a.creator=null;a.destroyer=null;a.outFields=null;a.type="custom";return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?f.clone(this.outFields):null})};var d;b.__decorate([c.property()],a.prototype,"creator",void 0);
b.__decorate([c.property()],a.prototype,"destroyer",void 0);b.__decorate([c.property()],a.prototype,"outFields",void 0);b.__decorate([c.property({type:["custom"],readOnly:!0})],a.prototype,"type",void 0);return a=d=b.__decorate([c.subclass("esri.popup.content.CustomContent")],a)}(g)});