// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/lang ../core/accessorSupport/decorators ./FillSymbol3DLayer ./Symbol3D".split(" "),function(m,n,b,h,c,d,k,l){var f=h.ofType({base:null,key:"type",typeMap:{fill:k}});return function(g){function a(a){a=g.call(this,a)||this;a.symbolLayers=new f;a.type="mesh-3d";return a}b.__extends(a,g);e=a;a.prototype.clone=function(){return new e({styleOrigin:c.clone(this.styleOrigin),symbolLayers:c.clone(this.symbolLayers),thumbnail:c.clone(this.thumbnail)})};
var e;b.__decorate([d.property({type:f})],a.prototype,"symbolLayers",void 0);b.__decorate([d.enumeration({MeshSymbol3D:"mesh-3d"})],a.prototype,"type",void 0);return a=e=b.__decorate([d.subclass("esri.symbols.MeshSymbol3D")],a)}(l)});