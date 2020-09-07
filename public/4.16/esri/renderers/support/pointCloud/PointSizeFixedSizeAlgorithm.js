// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","./PointSizeAlgorithm"],function(b,c,d,e,f){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="fixed-size";a.size=0;a.useRealWorldSymbolSizes=null;return a}d.__extends(a,b);c=a;a.prototype.clone=function(){return new c({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})};var c;d.__decorate([e.enumeration({pointCloudFixedSizeAlgorithm:"fixed-size"})],
a.prototype,"type",void 0);d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"size",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"useRealWorldSymbolSizes",void 0);return a=c=d.__decorate([e.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],a)}(f.default);c.PointSizeFixedSizeAlgorithm=b;c.default=b});