// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ./FeatureLayer ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer".split(" "),function(p,q,b,g,h,k,d,e,l,m,n){return function(f){function a(c){c=f.call(this,c)||this;c.type="map-notes";return c}b.__extends(a,f);Object.defineProperty(a.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(c,a){return c?c.union(a.fullExtent):
a.fullExtent},null):null},enumerable:!0,configurable:!0});a.prototype.readFeatureCollectionsFromItem=function(c,a,b){return a.layers.map(function(c){var a=new e;a.read(c,b);return a})};a.prototype.readFeatureCollectionsFromWebMap=function(a,b,d){return b.featureCollection.layers.map(function(a){var c=new e;c.read(a,d);return c})};Object.defineProperty(a.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.minScale:Math.min(a,
b.minScale)},null):0},set:function(a){this.featureCollections.forEach(function(c){c.minScale=a});this._set("minScale",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(a,b){return null==a?b.maxScale:Math.min(a,b.maxScale)},null):0},set:function(a){this.featureCollections.forEach(function(b){b.maxScale=a});this._set("maxScale",a)},enumerable:!0,configurable:!0});a.prototype.load=function(a){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},
a));return k.resolve(this)};b.__decorate([d.property({dependsOn:["featureCollections"],readOnly:!0})],a.prototype,"fullExtent",null);b.__decorate([d.property({type:["show","hide"]})],a.prototype,"listMode",void 0);b.__decorate([d.property({type:g.ofType(e)})],a.prototype,"featureCollections",void 0);b.__decorate([d.reader("portal-item","featureCollections",["layers"])],a.prototype,"readFeatureCollectionsFromItem",null);b.__decorate([d.reader("web-map","featureCollections",["featureCollection.layers"])],
a.prototype,"readFeatureCollectionsFromWebMap",null);b.__decorate([d.property({dependsOn:["featureCollections"]})],a.prototype,"minScale",null);b.__decorate([d.property({dependsOn:["featureCollections"]})],a.prototype,"maxScale",null);b.__decorate([d.property({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0);return a=b.__decorate([d.subclass("esri.layers.MapNotesLayer")],a)}(m.OperationalLayer(n.PortalLayer(h.MultiOriginJSONMixin(l))))});