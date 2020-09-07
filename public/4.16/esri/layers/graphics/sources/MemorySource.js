// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../Graphic ../../../core/Collection ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/workers ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType ../../../tasks/operations/zscale ../../../tasks/support/FeatureSet".split(" "),function(k,t,g,x,B,D,u,E,F,G,y,H,C,I,n,J,z,K){Object.defineProperty(t,"__esModule",
{value:!0});var L=0,A=G.getLogger("esri.layers.graphics.sources.MemorySource");k=function(k){function b(a){a=k.call(this,a)||this;a._idToClientGraphic=null;a.type="memory";return a}g.__extends(b,k);b.prototype.load=function(a){a=y.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return C.resolve(this)};Object.defineProperty(b.prototype,"workerGeometryType",{get:function(){var a=this.layer&&this.layer.geometryType;return a?this._geometryTypeRequiresClientGraphicMapping(a)?"polygon":
a:null},enumerable:!0,configurable:!0});b.prototype.applyEdits=function(a){var c=this;return this.load().then(function(){return c._applyEdits(a)})};b.prototype.openPorts=function(){var a=this;return this.load().then(function(){return a._connection.openPorts()})};b.prototype.queryFeatures=function(a,c){void 0===c&&(c={});return g.__awaiter(this,void 0,void 0,function(){var d,b,p,h,q,f,r,l;return g.__generator(this,function(e){switch(e.label){case 0:return[4,this.load(c)];case 1:return e.sent(),[4,
this._connection.invoke("queryFeatures",a?a.toJSON():null,c)];case 2:d=e.sent();z.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,d);b=K.fromJSON(d);if(!this._requiresClientGraphicMapping())return[2,b];p=this.layer.objectIdField;h=0;for(q=b.features;h<q.length;h++)if(f=q[h],r=f.attributes[p],l=this._idToClientGraphic.get(r))f.geometry=l.geometry;b.geometryType=this.layer.geometryType;return[2,b]}})})};b.prototype.queryFeaturesJSON=function(a,c){void 0===c&&(c={});return g.__awaiter(this,
void 0,void 0,function(){var b;return g.__generator(this,function(d){switch(d.label){case 0:return this._requiresClientGraphicMapping()?[2,C.reject(new u("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)"))]:[4,this.load(c)];case 1:return d.sent(),[4,this._connection.invoke("queryFeatures",a?a.toJSON():null,c)];case 2:return b=d.sent(),z.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b),[2,b]}})})};b.prototype.queryFeatureCount=
function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryFeatureCount",a?a.toJSON():null,c)})};b.prototype.queryObjectIds=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryObjectIds",a?a.toJSON():null,c)})};b.prototype.queryExtent=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryExtent",a?a.toJSON():null,c)}).then(function(a){return{count:a.count,
extent:x.Extent.fromJSON(a.extent)}})};b.prototype._applyEdits=function(a){var c=this;if(!this._connection)throw new u("feature-layer-source:edit-failure","Memory source not loaded");var b=this.layer.objectIdField,e=null,p=[],h=[],g=function(a){return"objectId"in a&&null!=a.objectId?a.objectId:"attributes"in a&&null!=a.attributes[b]?a.attributes[b]:null};a.addFeatures&&(e=this._prepareAddFeatures(a.addFeatures));if(a.deleteFeatures)for(var f=0,r=a.deleteFeatures;f<r.length;f++){var l=r[f],m=g(l);
null!=m&&p.push(m)}var w=a.updateFeatures&&this._idToClientGraphic?new Map:null;if(a.updateFeatures)for(f=0,a=a.updateFeatures;f<a.length;f++)l=a[f],h.push(this._serializeFeature(l)),w&&(m=g(l),null!=m&&w.set(m,l));z.unapplyEditsZUnitScaling(e?e.features:null,h,this.layer.spatialReference);return this._connection.invoke("applyEdits",{adds:e?e.features:[],updates:h,deletes:p}).then(function(a){var b=a.featureEditResults;c.fullExtent=a.fullExtent;e&&e.finish(b.uidToObjectId);if(c._idToClientGraphic){if(w){a=
0;for(var d=b.updateResults;a<d.length;a++){var f=d[a];f.success&&(f=w.get(f.objectId),null!=f&&c._addIdToClientGraphic(f))}}a=0;for(d=b.deleteResults;a<d.length;a++)f=d[a],f.success&&c._idToClientGraphic.delete(f.objectId)}return c._createEditsResult(b)})};b.prototype._createEditsResult=function(a){return{addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?
a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};b.prototype._createFeatureEditResult=function(a){var b=!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new u("feature-layer-source:edit-failure",b.description,{code:b.code}):null}};b.prototype._prepareAddFeatures=function(a){for(var b=new Map,d=Array(a.length),e=null,g=0;g<a.length;g++){var h=
a[g],q=this._serializeFeature(h);!e&&y.isSome(h.geometry)&&(e=h.geometry.type);d[g]=q;b.set(""+q.uid,h)}var f=this;return{features:d,inferredGeometryType:e,finish:function(a){var c=f.sourceJSON.objectIdField,d;for(d in a){var g=a[d],e=b.get(d);e&&(e.attributes||(e.attributes={}),-1===g?delete e.attributes[c]:e.attributes[c]=g,f._addIdToClientGraphic(e))}}}};b.prototype._addIdToClientGraphic=function(a){if(this._idToClientGraphic){var b=this.sourceJSON.objectIdField,b=a.attributes&&a.attributes[b];
null!=b&&this._idToClientGraphic.set(b,a)}};b.prototype._requiresClientGraphicMapping=function(){return this._geometryTypeRequiresClientGraphicMapping(this.layer.geometryType||this.sourceJSON.geometryType)};b.prototype._geometryRequiresClientGraphicMapping=function(a){return this._geometryTypeRequiresClientGraphicMapping(a.type)};b.prototype._geometryTypeRequiresClientGraphicMapping=function(a){return"mesh"===a||"multipatch"===a||"extent"===a};b.prototype._serializeFeature=function(a){var b=a.attributes;
a=this._geometryForSerialization(a);var d=(L++).toString();return a?{uid:d,geometry:a.toJSON(),attributes:b}:{uid:d,attributes:b}};b.prototype._geometryForSerialization=function(a){a=a.geometry;return y.isNone(a)?null:this._geometryRequiresClientGraphicMapping(a)?x.Polygon.fromExtent(a.extent):a};b.prototype._startWorker=function(a){return g.__awaiter(this,void 0,void 0,function(){var b,d,e,p,h,q,f,r,l,m,w,v,k,n,t,u;return g.__generator(this,function(c){switch(c.label){case 0:return b=this,[4,I.open("MemorySourceWorker",
{strategy:E("esri-workers-for-memory-layers")?"dedicated":"local",signal:a})];case 1:return b._connection=c.sent(),d=this.layer,e=d.fields,p=d.spatialReference,h=d.objectIdField,q=d.hasM,f=d.hasZ,r=d.timeInfo,l="defaults"===this.layer.originOf("spatialReference"),m=this._prepareAddFeatures(this.items),this.on("before-changes",function(a){A.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead");a.preventDefault()}),w={features:m.features,fields:e&&
e.map(function(a){return a.toJSON()}),geometryType:x.typeKebabDictionary.toJSON(this.workerGeometryType),hasM:q,hasZ:f,objectIdField:h,spatialReference:l?null:p&&p.toJSON(),timeInfo:r?r.toJSON():null},[4,this._connection.invoke("load",w,{signal:a})];case 2:v=c.sent();k=0;for(n=v.warnings;k<n.length;k++)t=n[k],A.warn(t.message,{layer:this.layer,warning:t});v.featureErrors.length&&A.warn("Encountered "+v.featureErrors.length+" validation errors while loading features",v.featureErrors);u=v.layerDefinition;
this._geometryTypeRequiresClientGraphicMapping(m.inferredGeometryType)&&(u.geometryType=x.typeKebabDictionary.toJSON(m.inferredGeometryType));this.sourceJSON=u;this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map);m.finish(v.assignedObjectIds);return[2]}})})};g.__decorate([n.shared({Type:B,ensureType:J.ensureType(B)})],b.prototype,"itemType",void 0);g.__decorate([n.property()],b.prototype,"type",void 0);g.__decorate([n.property({constructOnly:!0})],b.prototype,"layer",void 0);g.__decorate([n.property({readOnly:!0,
dependsOn:["layer.geometryType"]})],b.prototype,"workerGeometryType",null);g.__decorate([n.property()],b.prototype,"sourceJSON",void 0);return b=g.__decorate([n.subclass("esri.layers.graphics.sources.MemorySource")],b)}(F.LoadableMixin(H.EsriPromiseMixin(D)));t.MemorySource=k;t.default=k});