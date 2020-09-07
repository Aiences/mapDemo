// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Collection ../../core/collectionUtils ../../core/accessorSupport/decorators ./LayerView".split(" "),function(k,l,c,g,e,d,h){return function(f){function b(a){a=f.call(this,a)||this;a.layerViews=new g;return a}c.__extends(b,f);b.prototype.initialize=function(){var a=this;this.handles.add([this.layerViews.on("change",function(b){return a._layerViewsChangeHandler(b)}),this.layerViews.on("after-changes",function(){return a._layerViewsAfterChangesHandler()}),this.layer.watch("visibilityMode",
function(){return a._visibilityModeHandler()},!0),this.watch("visible",function(){return a._visibleHandler()},!0)],"grouplayerview");this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});this._layerViewsAfterChangesHandler()};Object.defineProperty(b.prototype,"layerViews",{set:function(a){this._set("layerViews",e.referenceSetter(a,this._get("layerViews")))},enumerable:!0,configurable:!0});b.prototype.isUpdating=function(){return this.layerViews.some(function(a){return a.updating})};
b.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(a){return a._isOverridden("visible")})};b.prototype._findLayerViewForLayer=function(a){return a&&this.layerViews.find(function(b){return b.layer===a})};b.prototype._firstVisibleOnLayerOrder=function(){var a=this,b=this.layer.layers.find(function(b){return(b=a._findLayerViewForLayer(b))&&b.visible});return b&&this._findLayerViewForLayer(b)};b.prototype._enforceExclusiveVisibility=function(a){this._hasLayerViewVisibleOverrides()&&
(a||(a=this._firstVisibleOnLayerOrder(),!a&&0<this.layerViews.length&&(a=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(function(b){b.visible=b===a}))};b.prototype._layerViewsChangeHandler=function(a){var b=this;this.handles.remove("grouplayerview:visible");this.handles.add(this.layerViews.map(function(a){return a.watch("visible",function(c){return b._layerViewVisibleHandler(c,a)},!0)}).toArray(),"grouplayerview:visible");a=a.added[a.added.length-1];var c=null;
a&&a.visible&&(c=a);this._enforceVisibility(c)};b.prototype._layerViewsAfterChangesHandler=function(){var a=this;this.handles.remove("grouplayerview:updating");this.handles.add(this.layerViews.map(function(b){return b.watch("updating",function(){return a._updateUpdating()},!0)}).toArray(),"grouplayerview:updating");this._updateUpdating()};b.prototype._enforceVisibility=function(a){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":var b=this.visible;this.layerViews.forEach(function(a){a.visible=
b});break;case "exclusive":this._enforceExclusiveVisibility(a)}};b.prototype._visibilityModeHandler=function(){this._enforceVisibility()};b.prototype._layerViewVisibleHandler=function(a,b){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":a!==this.visible&&(b.visible=this.visible);break;case "exclusive":this._enforceExclusiveVisibility(a&&b)}};b.prototype._visibleHandler=function(){var a;this._hasLayerViewVisibleOverrides()&&"inherited"===(null===(a=this.layer)||
void 0===a?void 0:a.visibilityMode)&&this._enforceVisibility()};b.prototype._updateUpdating=function(){this.notifyChange("updating")};c.__decorate([d.property({cast:e.castForReferenceSetter})],b.prototype,"layerViews",null);c.__decorate([d.property()],b.prototype,"view",void 0);return b=c.__decorate([d.subclass("esri.views.layers.GroupLayerView")],b)}(h)});