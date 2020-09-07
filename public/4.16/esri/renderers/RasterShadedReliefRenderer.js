// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../tasks/support/colorRamps".split(" "),function(k,l,b,g,h,c,e){return function(f){function a(a){a=f.call(this,a)||this;a.altitude=45;a.azimuth=315;a.colorRamp=null;a.hillshadeType="multi-directional";a.pixelSizePower=.664;a.pixelSizeFactor=.024;a.scalingType="none";a.type="raster-shaded-relief";a.zFactor=1;return a}b.__extends(a,f);d=a;a.prototype.readColorRamp=function(a){return e.fromJSON(a)};a.prototype.clone=
function(){return new d({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:h.clone(this.colorRamp)})};var d;b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"altitude",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"azimuth",void 0);b.__decorate([c.property({types:e.types,json:{write:!0}})],
a.prototype,"colorRamp",void 0);b.__decorate([c.reader("colorRamp")],a.prototype,"readColorRamp",null);b.__decorate([c.property({type:["traditional","multi-directional"],json:{write:!0}})],a.prototype,"hillshadeType",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pixelSizePower",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pixelSizeFactor",void 0);b.__decorate([c.property({type:["none","adjusted"],json:{write:!0}})],a.prototype,"scalingType",
void 0);b.__decorate([c.enumeration({rasterShadedRelief:"raster-shaded-relief"})],a.prototype,"type",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"zFactor",void 0);return a=d=b.__decorate([c.subclass("esri.renderers.RasterShadedReliefRenderer")],a)}(g.JSONSupport)});