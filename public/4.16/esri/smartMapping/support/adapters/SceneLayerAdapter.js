// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Graphic ../../../core/arrayUtils ../../../core/Error ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/support/fieldUtils ../../statistics/support/utils ./FeatureLayerAdapter ./LayerAdapter ./support/utils ../../../tasks/support/FeatureSet".split(" "),function(F,G,l,v,w,m,k,A,x,u,B,C,D,n,y){return function(z){function c(a){return z.call(this,a)||this}l.__extends(c,z);c.prototype._hasCachedStatistics=
function(a){return this.layer.hasCachedStatistics(a)};c.prototype._fetchFeaturesFromMemory=function(a,b){return a?a.whenLayerView(this.layer).then(function(a){var d=A.whenFalseOnce(a,"updating").then(function(){return a.queryFeatures(b)}).then(function(a){return"esri.tasks.support.FeatureSet"===a.declaredClass?a.features:a});return k.timeout(d,1E4,null)}):k.reject(new m("scene-layer-adapter:insufficient-data","view is required to fetch the features from layerView"))};c.prototype._generateFeatureSetForCachedHistogram=
function(a,b,d,f){void 0===b&&(b=a.minimum);void 0===d&&(d=a.maximum);for(var h=[],g=0;g<f;g++)h[g]=0;for(var e=a.counts.length,q=a.minimum,p=a.maximum,g=0;g<e;g++){var c=(g+.5)/e,c=((1-c)*q+c*p-b)/(d-b)*f;0<=c&&c<=f&&(h[c===f?f-1:Math.floor(c)]+=a.counts[g])}var l=[];h.forEach(function(a,b){var d=new v({attributes:{}});d.attributes.EXPR_1=b+1;d.attributes.countOFExpr=a;l.push(d)});a=new y;a.features=l;return a};c.prototype._getCachedStatistics=function(a,b){var d=this.layer;return a.valueExpression||
a.sqlExpression||a.sqlWhere||a.minValue||a.maxValue?k.reject(new m("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified")):d.queryCachedStatistics(b&&b.name,{signal:a.signal}).then(function(a){var b=a.stats;a=b.min;var d=b.max,e=b.avg,c=b.stddev,f=b.sum,l=b.variance,b=b.count;if(0!==a||0!==d)e=0===e?null:e,f=0===f?null:f,c=0===c?null:c,l=0===l?null:l,b=0===b?null:b;null==b&&
null!=f&&null!=e&&(b=Math.round(f/e));return{avg:e,count:b,max:d,min:a,stddev:c,sum:f,variance:l}})};c.prototype._getSummaryStatisticsFromMemory=function(a,b){return l.__awaiter(this,void 0,void 0,function(){var d,f,c,g,e,q,p,k;return l.__generator(this,function(h){switch(h.label){case 0:if(!a.features)return[3,1];f=a.features;return[3,3];case 1:return[4,this._fetchFeaturesFromMemory(a.view)];case 2:f=h.sent(),h.label=3;case 3:c=(d=f)&&d.length;if(!c)throw new m("scene-layer-adapter:insufficient-data",
"No features are available to calculate statistics");g=u.isDateField(b);e=l.__assign({},a);return"percent-of-total"!==e.normalizationType?[3,5]:[4,n.calculateStatsFromMemory({field:e.field},d)];case 4:q=h.sent();p=q.sum;if(null==p)throw new m("scene-layer-adapter:invalid","invalid normalizationTotal");e.normalizationTotal=p;h.label=5;case 5:return[4,n.calculateStatsFromMemory(e,d,g)];case 6:return k=h.sent(),[2,n.processSummaryStatisticsResult(k)]}})})};c.prototype._getCachedStatisticsForUniqueValues=
function(a,b){var d=this,c=this.layer,h=b&&b.name,g=b&&this.getFieldDomain(a.field);return a.valueExpression||a.sqlExpression||a.sqlWhere?k.reject(new m("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified")):c.queryCachedStatistics(h,{signal:a.signal}).then(function(e){var f=e.stats;e=e.labels&&e.labels.labels;var g={},l=[];if(f.mostFrequentValues){var k="countOF"+h;f.mostFrequentValues.forEach(function(a){var d=
new v({attributes:{}});d.attributes[h]=b&&b.name!==c.objectIdField&&(u.isNumericField(b)||u.isDateField(b))?Number(a.value):a.value;d.attributes[k]=a.count;l.push(d)});e&&e.forEach(function(a){g[a.value]=a.label})}f=new y;f.features=l;return n.getUniqueValuesFromFeatureSet(f,d,a.field,g,a.signal)}).then(function(b){return n.createUVResult(b,g,a.returnAllCodedValues)})};c.prototype._getUniqueValuesFromMemory=function(a,b){var d=b&&this.getFieldDomain(a.field);return(a.features?k.resolve(a.features):
this._fetchFeaturesFromMemory(a.view)).then(function(b){return n.calculateUniqueValuesFromMemory(a,b,d)})};c.prototype._getCachedStatisticsForHistogram=function(a,b){var d=this,c=this.layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.normalizationType?k.reject(new m("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified")):c.queryCachedStatistics(b&&b.name,{signal:a.signal}).then(function(b){b=
b.stats;var c=a.minValue,e=a.maxValue,c=null!=c?c:b.min,e=null!=e?e:b.max,f=a.numBins||10;b=d._generateFeatureSetForCachedHistogram(b.histogram,c,e,f);return n.getHistogramFromFeatureSet(b,c,e,f)})};c.prototype._getClassBreaksFromMemory=function(a){return l.__awaiter(this,void 0,void 0,function(){var b,d,c,h,g,e;return l.__generator(this,function(f){switch(f.label){case 0:if(!a.features)return[3,1];d=a.features;return[3,3];case 1:return[4,this._fetchFeaturesFromMemory(a.view)];case 2:d=f.sent(),f.label=
3;case 3:c=(b=d)&&b.length;if(!c)throw new m("scene-layer-adapter:insufficient-data","No features are available to calculate statistics");h=l.__assign({},a);return"percent-of-total"!==h.normalizationType?[3,5]:[4,n.calculateStatsFromMemory({field:h.field},b)];case 4:g=f.sent();e=g.sum;if(null==e)throw new m("scene-layer-adapter:invalid","invalid normalizationTotal");h.normalizationTotal=e;f.label=5;case 5:return[2,n.calculateClassBreaksFromMemory(h,b)]}})})};c.prototype._getHistogramFromMemory=function(a){var b=
this;return(a.features?k.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(d){if(!d||!d.length)throw new m("scene-layer-adapter:insufficient-data","No features are available to calculate histogram");var c=a.field,h=a.normalizationType,g=a.valueExpression,e=a.classificationMethod,q=a.minValue,p=a.maxValue,E=a.view,t=null!=q&&null!=p,r=null;e&&"equal-interval"!==e||h?(c=l.__assign({},a),c.features=d,r=b._getBinParamsFromMemory(c)):r=t?k.resolve({min:q,max:p}):b.summaryStatistics({field:c,
valueExpression:g,features:d,view:E,signal:a.signal}).then(function(a){return a.count?{min:a.min,max:a.max}:k.reject(new m("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"))});return r.then(function(b){return n.calculateHistogramFromMemory(a,b,d)})})};c.prototype._getBinParamsFromMemory=function(a){return l.__awaiter(this,void 0,void 0,function(){var b,d,c,h,g,e,k,p,m,t,r=this;return l.__generator(this,function(f){b=a.field;d=a.valueExpression;c=a.classificationMethod;
h=a.standardDeviationInterval;g=a.normalizationType;e=a.normalizationField;k=a.minValue;p=a.maxValue;m=a.features;t=a.view;return[2,this._getClassBreaksFromMemory({field:b,valueExpression:d,normalizationType:g,normalizationField:e,classificationMethod:c,standardDeviationInterval:h,minValue:k,maxValue:p,numClasses:a.numBins,features:m,view:t}).then(function(a){var c=a.normalizationTotal;a=a.classBreakInfos;var d=B.getSQLFilterForNormalization({field:b,normalizationType:g,normalizationField:e});return n.generateBinParams({field:b,
normalizationType:g,normalizationField:e,normalizationTotal:c,classBreaks:a,where:d,layer:r})})]})})};c.prototype.getField=function(a){void 0===a&&(a="");return this.layer.getField(a)};c.prototype.getFieldUsageInfo=function(a){a=this.getField(a);if(!a)return null;a=this.layer.getFieldUsageInfo(a.name);return{supportsLabelingInfo:a.supportsLabelingInfo,supportsPopupTemplate:a.supportsPopupTemplate,supportsRenderer:a.supportsRenderer,supportsLayerQuery:a.supportsLayerQuery,supportsStatistics:!0}};c.prototype.getFieldDomain=
function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.getFieldDomain(a,b):null};c.prototype.summaryStatistics=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.summaryStatistics(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatistics(a,c).catch(function(){k.throwIfAborted(a.signal);return b._getSummaryStatisticsFromMemory(a,c)}):this._getSummaryStatisticsFromMemory(a,c)};c.prototype.uniqueValues=function(a){var b=
this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.uniqueValues(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForUniqueValues(a,c).catch(function(){k.throwIfAborted(a.signal);return b._getUniqueValuesFromMemory(a,c)}):this._getUniqueValuesFromMemory(a,c)};c.prototype.histogram=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.histogram(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForHistogram(a,
c).catch(function(){k.throwIfAborted(a.signal);return b._getHistogramFromMemory(a)}):this._getHistogramFromMemory(a)};c.prototype.classBreaks=function(a){var b=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.classBreaks(a):this._hasCachedStatistics(b&&b.name)?k.reject(new m("scene-layer-adapter:not-supported","Cached stats not supported")):this._getClassBreaksFromMemory(a)};c.prototype.queryFeatureCount=function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.queryFeatureCount(a,
b):k.reject(new m("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support count query"))};c.prototype.generateRenderer=function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(a,b):k.reject(new m("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support generateRenderer operation"))};c.prototype.heatmapStatistics=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.heatmapStatistics(a):
k.reject(new m("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support heatmapStatistics operation"))};c.prototype.predominantCategories=function(a){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(b){if(this._featureLayerAdapter)return[2,this._featureLayerAdapter.predominantCategories(a)];throw new m("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support predominantCategories");})})};
c.prototype.getSampleFeatures=function(a){return l.__awaiter(this,void 0,void 0,function(){var b,c,f,h,g,e,k;return l.__generator(this,function(d){switch(d.label){case 0:if("mesh"===this.layer.geometryType)throw new m("scene-layer-adapter:not-supported","getSampleFeatures does not support scene layer with mesh geometry type");b=a.view;c=a.sampleSize;f=1;h=this.layer.createQuery();h.outFields=null;h.returnGeometry=!0;h.where=null;h.num=c;g=[];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this._fetchFeaturesFromMemory(b,
h)];case 2:return g=d.sent(),g.length&&0<c&&c<=g.length?[2,w.pickRandom(g,c,f)]:[3,4];case 3:return d.sent(),[3,4];case 4:e=null;if(!this._featureLayerAdapter)return[3,6];k=l.__assign({},a);delete k.view;return[4,this._featureLayerAdapter.getSampleFeatures(k)];case 5:e=d.sent(),d.label=6;case 6:return e&&e.length?[2,e]:[2,w.pickRandom(g,g.length,f)]}})})};c.prototype.load=function(a){var b=this,c=this.layer.load(a).then(function(c){var d=c.associatedLayer;b.geometryType=c.geometryType;if(d)return b._featureLayerAdapter=
new C({layer:d}),b._featureLayerAdapter.load(a).then(function(){b.objectIdField=b._featureLayerAdapter.objectIdField;b.supportsSQLExpression=b._featureLayerAdapter.supportsSQLExpression;b.minScale=b._featureLayerAdapter.minScale;b.maxScale=b._featureLayerAdapter.maxScale;b.fullExtent=b._featureLayerAdapter.fullExtent});b.objectIdField=c.objectIdField;b.supportsSQLExpression=!1;b.hasQueryEngine=!1;b.fullExtent=c.fullExtent});this.addResolvingPromise(c);return k.resolve(this)};l.__decorate([x.property({constructOnly:!0})],
c.prototype,"layer",void 0);return c=l.__decorate([x.subclass("esri.smartMapping.support.adapters.SceneLayerAdapter")],c)}(D)});