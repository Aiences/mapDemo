// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(l,m,b,g,h,k,d){function e(b){return k.isNone(b)?null:JSON.stringify(b)}return function(f){function a(c){c=f.call(this,c)||this;c._baselineAttributesJSON=null;c._baselineGeometryJSON=null;c.feature=null;return c}b.__extends(a,f);Object.defineProperty(a.prototype,"attributesModified",{get:function(){var c=this._baselineAttributesJSON,a=this.feature;return!(!a||
c===e(a.attributes))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"geometryModified",{get:function(){var a=this._baselineGeometryJSON,b=this.feature;return!(!b||a===e(b.geometry))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"modified",{get:function(){return this.attributesModified||this.geometryModified},enumerable:!0,configurable:!0});a.prototype.trackChanges=function(){this.feature&&(this._baselineAttributesJSON=e(this.feature.attributes),this._baselineGeometryJSON=
e(this.feature.geometry),this.notifyChange("attributesModified"),this.notifyChange("geometryModified"))};a.prototype.updateAttributes=function(a){this.feature.attributes=a;this.notifyChange("attributesModified")};a.prototype.updateGeometry=function(a){this.feature.geometry=a;this.notifyChange("geometryModified")};b.__decorate([d.property()],a.prototype,"attributesModified",null);b.__decorate([d.property()],a.prototype,"feature",void 0);b.__decorate([d.property()],a.prototype,"geometryModified",null);
b.__decorate([d.property({dependsOn:["attributesModified","geometryModified"]})],a.prototype,"modified",null);return a=b.__decorate([d.subclass("esri.widgets.Editor.Edits")],a)}(h.HandleOwnerMixin(g))});