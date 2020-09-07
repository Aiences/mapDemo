// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./Layer ./mixins/ScaleRangeLayer ../support/GraphicsCollection ../symbols/support/ElevationInfo".split(" "),function(l,m,c,d,g,h,f,k){return function(e){function b(a){a=e.call(this,a)||this;a.elevationInfo=null;a.graphics=new f.default;a.screenSizePerspectiveEnabled=!0;a.type="graphics";return a}c.__extends(b,e);b.prototype.destroy=function(){this.removeAll()};b.prototype.add=function(a){this.graphics.add(a);return this};b.prototype.addMany=
function(a){this.graphics.addMany(a);return this};b.prototype.removeAll=function(){this.graphics.removeAll();return this};b.prototype.remove=function(a){this.graphics.remove(a)};b.prototype.removeMany=function(a){this.graphics.removeMany(a)};b.prototype.on=function(a,b){return e.prototype.on.call(this,a,b)};b.prototype.graphicChanged=function(a){this.emit("graphic-update",a)};c.__decorate([d.property({type:k})],b.prototype,"elevationInfo",void 0);c.__decorate([d.property(f.graphicsCollectionProperty)],
b.prototype,"graphics",void 0);c.__decorate([d.property({type:["show","hide"]})],b.prototype,"listMode",void 0);c.__decorate([d.property()],b.prototype,"screenSizePerspectiveEnabled",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"type",void 0);return b=c.__decorate([d.subclass("esri.layers.GraphicsLayer")],b)}(h.ScaleRangeLayer(g))});