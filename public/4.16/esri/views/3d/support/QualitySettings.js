// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(l,m,b,f,c){var g=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.minTotalNumberOfFeatures=2E3;a.maxTotalNumberOfFeatures=5E4;a.maxTotalNumberOfPrimitives=17E5;a.polygonLodFactor=1;a.polylineLodFactor=1;return a}b.__extends(a,d);b.__decorate([c.property()],a.prototype,"minTotalNumberOfFeatures",void 0);b.__decorate([c.property()],a.prototype,"maxTotalNumberOfFeatures",
void 0);b.__decorate([c.property()],a.prototype,"maxTotalNumberOfPrimitives",void 0);b.__decorate([c.property()],a.prototype,"polygonLodFactor",void 0);b.__decorate([c.property()],a.prototype,"polylineLodFactor",void 0);return a=b.__decorate([c.subclass("esri.views.3d.support.QualitySettings.Graphics3DSettings")],a)}(f),e=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lodFactor=1;return a}b.__extends(a,d);b.__decorate([c.property()],a.prototype,"lodFactor",void 0);return a=
b.__decorate([c.subclass("esri.views.3d.support.QualitySettings.LoDFactorSettings")],a)}(f),h=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a["3dObject"]=new e;a.point=new e;a.integratedMesh=new e;a.pointCloud=new e;a.uncompressedTextureDownsamplingEnabled=!1;return a}b.__extends(a,d);b.__decorate([c.property({type:e})],a.prototype,"3dObject",void 0);b.__decorate([c.property({type:e})],a.prototype,"point",void 0);b.__decorate([c.property({type:e})],a.prototype,"integratedMesh",
void 0);b.__decorate([c.property({type:e})],a.prototype,"pointCloud",void 0);b.__decorate([c.property()],a.prototype,"uncompressedTextureDownsamplingEnabled",void 0);return a=b.__decorate([c.subclass("esri.views.3d.support.QualitySettings.SceneServiceSettings")],a)}(f),k=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lodBias=0;a.angledSplitBias=1;a.reduceTileLevelDifferences=!0;a.textureFadeDuration=500;return a}b.__extends(a,d);b.__decorate([c.property()],a.prototype,"lodBias",
void 0);b.__decorate([c.property()],a.prototype,"angledSplitBias",void 0);b.__decorate([c.property()],a.prototype,"reduceTileLevelDifferences",void 0);b.__decorate([c.property()],a.prototype,"textureFadeDuration",void 0);return a=b.__decorate([c.subclass("esri.views.3d.support.QualitySettings.TiledSurfaceSettings")],a)}(f);return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.graphics3D=new g;a.sceneService=new h;a.tiledSurface=new k;a.antialiasingEnabled=!0;return a}b.__extends(a,
d);b.__decorate([c.property({type:g})],a.prototype,"graphics3D",void 0);b.__decorate([c.property({type:h})],a.prototype,"sceneService",void 0);b.__decorate([c.property({type:k})],a.prototype,"tiledSurface",void 0);b.__decorate([c.property()],a.prototype,"antialiasingEnabled",void 0);b.__decorate([c.property()],a.prototype,"physicallyBasedRenderingEnabled",void 0);b.__decorate([c.property()],a.prototype,"memoryLimit",void 0);b.__decorate([c.property()],a.prototype,"additionalCacheMemory",void 0);b.__decorate([c.property()],
a.prototype,"frameRate",void 0);b.__decorate([c.property()],a.prototype,"maximumRenderResolution",void 0);b.__decorate([c.property()],a.prototype,"maximumPixelRatio",void 0);return a=b.__decorate([c.subclass("esri.views.3d.support.QualitySettings.QualitySettings")],a)}(f)});