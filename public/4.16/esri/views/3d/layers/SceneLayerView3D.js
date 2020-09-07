// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../Graphic ../../../core/arrayUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/unitUtils ../../../core/accessorSupport/decorators ../../../core/sql/WhereClause ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/webMercatorUtils ../../../layers/support/fieldUtils ../../../tasks/support/Query ./I3SMeshView3D ./LayerView3D ./i3s/I3SGeometryUtil ./i3s/I3SQueryEngine ./i3s/I3SQueryFeatureAdapter ./i3s/I3SQueryFeatureStore ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../support/projectionUtils ../../layers/LayerView ../../layers/support/FeatureFilter ../../support/Scheduler".split(" "),
function(W,X,h,u,D,E,F,m,G,H,I,d,J,r,t,v,w,x,K,L,l,M,N,O,z,P,Q,R,S,A,T,U,V){var p=F.getLogger("esri.views.3d.layers.SceneLayerView3D"),B=Q.defineFieldProperties(),C=[0,0,0,0];return function(n){function a(){var b=null!==n&&n.apply(this,arguments)||this;b._queryEngine=null;b.requiredFields=[];b.lodFactor=1;b.progressiveLoadFactor=1;b._elevationContext="scene";b._isIntegratedMesh=!1;b._supportsLabeling=!0;b._asyncModuleLoading=0;b._projectionEngineLoaded=!1;return b}h.__extends(a,n);Object.defineProperty(a.prototype,
"filter",{set:function(b){if(m.isNone(b))this._set("filter",null);else{var c=["contains","intersects","disjoint"];b.timeExtent?(p.warn("Filters with a timeExtent are not supported for mesh scene layers"),b=null):b.spatialRelationship&&-1===c.indexOf(b.spatialRelationship)&&(p.warn("Filters with spatialRelationship other than "+c.join(", ")+" are not supported for mesh scene layers"),b=null);this._set("filter",b)}},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterWhereClause",
{get:function(){var b=m.isSome(this.filter)?this.filter.where:null;if(!b)return null;try{return J.WhereClause.create(b,this.layer.fieldsIndex)}catch(c){p.error("Failed to parse filter where clause: "+c)}return null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"filterSpatialRelationship",{get:function(){return m.isSome(this.filter)?this.filter.spatialRelationship:"intersects"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterGeometry",{get:function(){var b=
this;if(m.isNone(this.filter)||!this._geometryEngine)return null;var c=this.filter.geometry,a=this.filter,e=a.distance,k=a.units,a=this.filterSpatialRelationship,c="mesh"===c.type?c.extent:c;if(!e)return l.processFilterGeometry(c,a);k=k||I.getUnitString(c.spatialReference);if(c.spatialReference.isWGS84)return e=this._geometryEngine.geodesicBuffer(c,e,k),l.processFilterGeometry(e,a);if(v.canProject(c,u.SpatialReference.WGS84))return e=v.project(this._geometryEngine.geodesicBuffer(v.project(c,u.SpatialReference.WGS84),
e,k),c.spatialReference),l.processFilterGeometry(e,a);if(!r.isSupported())return p.error("Filter by geodesic buffer (distance) unsupported due to lack of projection support."),null;if(!this._projectionEngineLoaded&&(this._loadAsyncModule(r.load()).then(function(){b._set("_projectionEngineLoaded",!0)}),!this._projectionEngineLoaded))return null;var g=null;try{g=r.project(c,u.SpatialReference.WGS84)}catch(q){}if(g)try{g=r.project(this._geometryEngine.geodesicBuffer(g,e,k),c.spatialReference)}catch(q){g=
null}g||p.error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry ("+c.spatialReference.wkid+") to WGS84.");return l.processFilterGeometry(g,a)},enumerable:!0,configurable:!0});a.prototype.initialize=function(){for(var b=this,c=0,a=["layer.renderer","layer.labelingInfo","layer.labelsVisible","definitionExpressionFields","filter"];c<a.length;c++){var e=a[c];this.updatingHandles.add(this,e,function(){return b.updatingHandles.addPromise(b._updateRequiredFields())})}this._updateRequiredFields();
this.updatingHandles.add(this.layer,"rangeInfos",function(c){return b._rangeInfosChanged(c)},2);this.updatingHandles.add(this.layer,"renderer",function(c){return b.updatingHandles.addPromise(b._rendererChange(c))},2);c=0;for(a=["parsedDefinitionExpression","layer.objectIdFilter","filter","parsedFilterWhereClause","parsedFilterGeometry"];c<a.length;c++)e=a[c],this.updatingHandles.add(this,e,function(){return b._filterChange()})};a.prototype.destroy=function(){};a.prototype._updateRequiredFields=function(){return h.__awaiter(this,
void 0,void 0,function(){var b,c,a,e,k,g,q,d,l,n,y;return h.__generator(this,function(f){switch(f.label){case 0:return b=this,a=c=b.layer,e=a.fields,k=a.renderer,g=b.definitionExpressionFields,q=new Set,[4,G.eachAlways([k?k.collectRequiredFields(q,e):null,w.collectLabelingFields(q,c),m.isSome(this.filter)?w.collectFilterFields(q,c,this.filter):null])];case 1:d=f.sent();l=0;for(n=d;l<n.length;l++)y=n[l],y.error&&p.error(y.error);w.collectFields(q,e,g);this._set("requiredFields",H.valuesOfSet(q).sort());
return[2]}})})};a.prototype._rangeInfosChanged=function(b){null!=b&&0<b.length&&p.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};a.prototype.createQuery=function(){var b={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return m.isSome(this.filter)?this.filter.createQuery(b):new x(b)};a.prototype.queryExtent=function(b){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(b))};
a.prototype.queryFeatureCount=function(b){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(b))};a.prototype.queryFeatures=function(b){return this._ensureQueryEngine().executeQuery(this._ensureQuery(b))};a.prototype.queryObjectIds=function(b){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(b))};a.prototype._ensureQueryEngine=function(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine};a.prototype._createQueryEngine=
function(){var b=this,c=this._createGetFeatureExtent();return new M.default({layerView:this,task:V.Task.FEATURE_QUERY_ENGINE,spatialIndex:new O.default({featureAdapter:new N.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:c}),forAllFeatures:function(c,a){return b._forAllFeatures(function(b,a,e){return c({id:b,index:a,meta:e})},a,2)},getFeatureExtent:c,sourceSpatialReference:z.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})};
a.prototype._createGetFeatureExtent=function(){var b=this,a=new Float64Array(24),f=this.view.renderSpatialReference,e=this.view.spatialReference;return function(c){if(!c.meta.featureExtents){var g=new Float64Array(6*c.meta.featureIds.length);c.meta.featureExtents=g;for(var k=0;k<g.length;k+=6)g[k]=Number.POSITIVE_INFINITY}g=new Float64Array(c.meta.featureExtents.buffer,6*c.index*Float64Array.BYTES_PER_ELEMENT,6);return g[0]===Number.POSITIVE_INFINITY?(l.boundingBoxCornerPoints(c.index,b._collection,
c.meta.objectHandle,a),A.bufferToBuffer(a,f,0,a,e,0,8)?t.expandWithBuffer(t.NEGATIVE_INFINITY,a,0,8,g):t.set(g,t.ZERO)):g}};a.prototype.highlight=function(b){var a=this._highlights;if(b instanceof x){var f=a.acquireSet(),e=f.set,f=f.handle;this.queryObjectIds(b).then(function(b){return a.setFeatureIds(e,b)});return f}return n.prototype.highlight.call(this,b)};a.prototype._createLayerGraphic=function(b){b=new D(null,null,b);b.layer=this.layer;b.sourceLayer=this.layer;return b};a.prototype.canResume=
function(){return n.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};a.prototype.isUpdating=function(){return this.updatingMeshView3D||0<this._asyncModuleLoading};a.prototype.getFilters=function(){var b=this,a=n.prototype.getFilters.call(this);if(this.layer.objectIdFilter){var f=new Float64Array(this.layer.objectIdFilter.ids),e="include"===this.layer.objectIdFilter.method;f.sort();a.push(function(a){return b._objectIdFilter(f,e,a)})}this.addSqlFilter(a,this.parsedDefinitionExpression,
this.definitionExpressionFields,this.logError);if(m.isSome(this.filter)){var k=this.parsedFilterGeometry;m.isSome(k)&&a.push(function(a,c){return b._geometryFilter(a,c,k,b.filterSpatialRelationship)});if(this.filter.objectIds){var g=new Float64Array(this.filter.objectIds);g.sort();a.push(function(a){return b._objectIdFilter(g,!0,a)})}}m.isSome(this.parsedFilterWhereClause)&&this.addSqlFilter(a,this.parsedFilterWhereClause,this.parsedFilterWhereClause.fieldNames,this.logError);return a};a.prototype._geometryFilter=
function(a,c,f,e){var b=f[0].spatialReference||this.view.spatialReference;if(A.mbsToMbs(c.node.mbs,this._controller.crsIndex,C,b))for(var g=l.acquireMaskFilterContext(e,this.view,b,this._collection,c.objectHandle),h=l.computeMaskNodeMBS(C,g),b=function(b){if(0===a.length)return{value:void 0};switch(l.testMaskWithGeometry(b,h,e)){case 1:return a.length=0,{value:void 0};case 0:return"continue"}z.filterInPlace(a,c.featureIds,function(a){return l.filterWithMask(b,a,g)})},d=0;d<f.length;d++){var m=b(f[d]);
if("object"===typeof m)return m.value}else p.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")};a.prototype._filterChange=function(){var a=this;m.isSome(this.filter)&&this.filter.geometry&&!this._geometryEngine?this._loadAsyncModule(l.loadGeometryEngine()).then(function(b){a.destroyed||(a._set("_geometryEngine",b),a._applyFilters(!0))}):n.prototype._filterChange.call(this)};a.prototype._loadAsyncModule=function(a){var b=this;this._set("_asyncModuleLoading",
this._asyncModuleLoading+1);var f=function(){return b._set("_asyncModuleLoading",b._asyncModuleLoading-1)};return a.then(function(a){f();return a},function(a){f();throw a;})};a.prototype._objectIdFilter=function(a,c,f){for(var b=0,d=0;b<f.length;)0<=E.binaryIndexOf(a,f[b])===c&&(f[d]=f[b],d++),b++;f.length=d};a.prototype._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(m.isNone(a)?this.createQuery():x.from(a))};h.__decorate([d.property()],a.prototype,"layer",void 0);h.__decorate([d.property({dependsOn:["updatingMeshView3D",
"_asyncModuleLoading"]})],a.prototype,"updating",void 0);h.__decorate([d.property({dependsOn:["_controller.rootNodeVisible"]})],a.prototype,"suspended",void 0);h.__decorate([d.property(R.updatingProgress)],a.prototype,"updatingProgress",void 0);h.__decorate([d.property({type:U})],a.prototype,"filter",null);h.__decorate([d.property({readOnly:!0,dependsOn:["filter.where"]})],a.prototype,"parsedFilterWhereClause",null);h.__decorate([d.property({readOnly:!0,dependsOn:["filter.spatialRelationship"]})],
a.prototype,"filterSpatialRelationship",null);h.__decorate([d.property({readOnly:!0,dependsOn:"filter.geometry filter.distance filter.units filterSpatialRelationship _geometryEngine _projectionEngineLoaded".split(" ")})],a.prototype,"parsedFilterGeometry",null);h.__decorate([d.property(B.requiredFields)],a.prototype,"requiredFields",void 0);h.__decorate([d.property(B.availableFields)],a.prototype,"availableFields",void 0);h.__decorate([d.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],
a.prototype,"lodFactor",void 0);h.__decorate([d.property({readOnly:!0,aliasOf:"_controller.updatingProgress"})],a.prototype,"updatingProgressValue",void 0);h.__decorate([d.property({readOnly:!0})],a.prototype,"_asyncModuleLoading",void 0);h.__decorate([d.property({readOnly:!0})],a.prototype,"_geometryEngine",void 0);h.__decorate([d.property({readOnly:!0})],a.prototype,"_projectionEngineLoaded",void 0);return a=h.__decorate([d.subclass("esri.views.3d.layers.SceneLayerView3D")],a)}(K.I3SMeshView3D(P.DefinitionExpressionSceneLayerView(S.PopupSceneLayerView(L.LayerView3D(T)))))});