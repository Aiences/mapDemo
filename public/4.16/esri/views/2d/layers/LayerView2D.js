// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Collection ../../../core/collectionUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../engine ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),function(r,e,c,h,k,f,d,l,m,n,p,q){Object.defineProperty(e,"__esModule",{value:!0});var g=h.ofType({key:"type",base:m,typeMap:{rect:n,path:q,geometry:p}});e.LayerView2DMixin=function(e){return function(e){function a(){var b=
null!==e&&e.apply(this,arguments)||this;b.clips=new g;b.moving=!1;b.attached=!1;b.lastUpdateId=-1;b.updateRequested=!1;return b}c.__extends(a,e);a.prototype.initialize=function(){var b=this,a;this.container||(this.container=new l.Container);this.handles.add([f.init(this,"suspended",function(a){b.container&&(b.container.visible=!a);b.view&&!a&&b.updateRequested&&b.view.requestUpdate()},!0),f.init(this,["layer.opacity","container"],function(){var a,c;b.container&&(b.container.opacity=null!==(c=null===
(a=b.layer)||void 0===a?void 0:a.opacity)&&void 0!==c?c:1)},!0),f.init(this,["layer.blendMode"],function(a){b.container&&(b.container.blendMode=a)},!0),this.clips.on("change",function(){b.container.clips=b.clips;b.notifyChange("clips")})]);this.container.clips=this.clips;(null===(a=this.view)||void 0===a?0:a.whenLayerView)?this.view.whenLayerView(this.layer).then(function(a){a!==b||b.attached||b.destroyed||(b.attach(),b.requestUpdate(),b.attached=!0)},function(){}):this.when().then(function(){b.attached||
b.destroyed||(b.attach(),b.requestUpdate(),b.attached=!0)},function(){})};a.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1);this.handles.remove("initialize");this.updateRequested=!1;this.view=this.layer=null};Object.defineProperty(a.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0});a.prototype.isVisibleAtScale=function(b){var a=!0,c=this.layer,d=c.minScale,c=c.maxScale;
if(null!=d&&null!=c){var a=!d,e=!c;!a&&b<=d&&(a=!0);!e&&b>=c&&(e=!0);a=a&&e}return a};a.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};a.prototype.processUpdate=function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(a)))};a.prototype.isUpdating=function(){return!1};a.prototype.isRendering=function(){return!1};
a.prototype.canResume=function(){return e.prototype.canResume.call(this)?this.isVisibleAtScale(this.view.scale):!1};c.__decorate([d.property({type:g,set:function(a){a=k.referenceSetter(a,this._get("clips"),g);this._set("clips",a)}})],a.prototype,"clips",void 0);c.__decorate([d.property()],a.prototype,"moving",void 0);c.__decorate([d.property()],a.prototype,"attached",void 0);c.__decorate([d.property()],a.prototype,"container",void 0);c.__decorate([d.property({dependsOn:["view.scale","layer.minScale",
"layer.maxScale"]})],a.prototype,"suspended",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"updateParameters",void 0);c.__decorate([d.property()],a.prototype,"updateRequested",void 0);c.__decorate([d.property({dependsOn:["attached","updateRequested","suspended"]})],a.prototype,"updating",null);c.__decorate([d.property()],a.prototype,"view",void 0);return a=c.__decorate([d.subclass("esri.views.2d.layers.LayerView2D")],a)}(e)}});