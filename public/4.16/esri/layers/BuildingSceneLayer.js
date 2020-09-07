// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/CollectionFlattener ../core/Error ../core/lang ../core/loadAll ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/SpatialReference ./Layer ./buildingSublayers/BuildingComponentSublayer ./buildingSublayers/BuildingGroupSublayer ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/BuildingFilter ./support/BuildingSummaryStatistics ./support/commonProperties".split(" "),
function(K,L,c,r,t,k,l,u,v,w,x,y,z,d,A,B,C,D,f,E,F,G,H,I,J,m,h){var n=v.getLogger("esri.layers.BuildingSceneLayer"),p=r.ofType(J),q=l.clone(f.sublayersProperty);q.json.origins["web-scene"]={type:[D],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}};return function(g){function b(a){a=g.call(this,a)||this;a.operationalLayerType="BuildingSceneLayer";a.allSublayers=new t({root:a,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return"building-group"===a.type?a.sublayers:
null}});a.sublayers=null;a.sublayerOverrides=null;a.filters=new p;a.activeFilterId=null;a.summaryStatistics=null;a.outFields=null;a.type="building-scene";return a}c.__extends(b,g);b.prototype.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};b.prototype.destroy=function(){this.allSublayers.destroy()};b.prototype.readSublayers=function(a,e,b){var c=this;a=f.readSublayers(a,e,b);f.forEachSublayer(a,function(a){return a.layer=c});this.sublayerOverrides&&(this.applySublayerOverrides(a,
this.sublayerOverrides),this.sublayerOverrides=null);return a};b.prototype.applySublayerOverrides=function(a,b){var e=b.overrides,c=b.context;f.forEachSublayer(a,function(a){return a.read(e.get(a.id),c)})};b.prototype.readSublayerOverrides=function(a,b){for(var e=new Map,c=0;c<a.length;c++){var d=a[c];null==d||"object"!==typeof d||"number"!==typeof d.id?b.messages.push(new k("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:d})):
e.set(d.id,d)}return{overrides:e,context:b}};b.prototype.writeSublayerOverrides=function(a,b,c){var e=[];f.forEachSublayer(this.sublayers,function(a){a=a.write({},c);1<Object.keys(a).length&&e.push(a)});0<e.length&&(b.sublayers=e)};b.prototype.writeUnappliedOverrides=function(a,b){b.sublayers=[];a.overrides.forEach(function(a){b.sublayers.push(l.clone(a))})};b.prototype.write=function(a,b){a=g.prototype.write.call(this,a,b);!b||"web-scene"!==b.origin&&"portal-item"!==b.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,
a,b):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,a));return a};b.prototype.read=function(a,b){g.prototype.read.call(this,a,b);b&&("web-scene"===b.origin||"portal-item"===b.origin)&&null!=a&&Array.isArray(a.sublayers)&&(a=this.readSublayerOverrides(a.sublayers,b),this.sublayers?this.applySublayerOverrides(this.sublayers,a):this.sublayerOverrides=a)};b.prototype.readSummaryStatistics=function(a,b){return"string"===typeof b.statisticsHRef?(a=z.join(this.parsedUrl.path,
b.statisticsHRef),new m({url:a})):null};Object.defineProperty(b.prototype,"elevationInfo",{set:function(a){this._set("elevationInfo",a);this._validateElevationInfo()},enumerable:!0,configurable:!0});b.prototype.load=function(a){var b=this,c=w.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).then(function(){return b._fetchService(c)},function(){return b._fetchService(c)});this.addResolvingPromise(a);return y.resolve(this)};b.prototype.loadAll=function(){var a=this;
return u.loadAll(this,function(b){f.forEachSublayer(a.sublayers,function(a){"building-group"!==a.type&&b(a)});a.summaryStatistics&&b(a.summaryStatistics)})};b.prototype.saveAs=function(a,b){return c.__awaiter(this,void 0,void 0,function(){var d=this;return c.__generator(this,function(e){return[2,this._saveAs(a,c.__assign(c.__assign({},b),{getTypeKeywords:function(){return d._getTypeKeywords()},portalItemLayerType:"building-scene"}))]})})};b.prototype.save=function(){return c.__awaiter(this,void 0,
void 0,function(){var a,b=this;return c.__generator(this,function(c){a={getTypeKeywords:function(){return b._getTypeKeywords()},portalItemLayerType:"building-scene"};return[2,this._save(a)]})})};b.prototype.validateLayer=function(a){if(!a.layerType||"Building"!==a.layerType)throw new k("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:a.layerType});};b.prototype._getTypeKeywords=function(){return["Building"]};b.prototype._validateElevationInfo=
function(){var a=this.elevationInfo;a&&("absolute-height"!==a.mode&&n.warn(".elevationInfo\x3d","Building scene layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&n.warn(".elevationInfo\x3d","Building scene layers do not support featureExpressionInfo"))};c.__decorate([d.property({type:["BuildingSceneLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"allSublayers",void 0);c.__decorate([d.property(q)],
b.prototype,"sublayers",void 0);c.__decorate([d.reader("service","sublayers")],b.prototype,"readSublayers",null);c.__decorate([d.property({type:p,nonNullable:!0,json:{write:!0}})],b.prototype,"filters",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"activeFilterId",void 0);c.__decorate([d.property({readOnly:!0,type:m})],b.prototype,"summaryStatistics",void 0);c.__decorate([d.reader("summaryStatistics",["statisticsHRef"])],b.prototype,"readSummaryStatistics",null);c.__decorate([d.property({type:[String],
json:{read:!1}})],b.prototype,"outFields",void 0);c.__decorate([d.property(h.readOnlyService(A))],b.prototype,"fullExtent",void 0);c.__decorate([d.property({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0);c.__decorate([d.property(h.readOnlyService(B))],b.prototype,"spatialReference",void 0);c.__decorate([d.property(h.elevationInfo)],b.prototype,"elevationInfo",null);c.__decorate([d.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);return b=c.__decorate([d.subclass("esri.layers.BuildingSceneLayer")],
b)}(I.SceneService(E.ArcGISService(F.OperationalLayer(G.PortalLayer(H.ScaleRangeLayer(x.MultiOriginJSONMixin(C)))))))});