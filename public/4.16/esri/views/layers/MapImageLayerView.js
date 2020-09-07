// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils ../../support/arcadeOnDemand ./support/popupUtils".split(" "),function(z,d,a,w,r,g,f,x,y,t){Object.defineProperty(d,"__esModule",{value:!0});d.MapImageLayerView=function(d){return function(d){function e(){return null!==d&&d.apply(this,arguments)||this}a.__extends(e,d);e.prototype.fetchPopupFeatures=function(d,e){return a.__awaiter(this,
void 0,void 0,function(){var c,f,k,h,m,n,u,v=this;return a.__generator(this,function(l){switch(l.label){case 0:c=this.layer;if(!d)return[2,g.reject(new w("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:c}))];f=this.get("view.scale");k=[];h=function(b){return a.__awaiter(v,void 0,void 0,function(){var d,c,q;return a.__generator(this,function(p){d=0===b.minScale||f<=b.minScale;c=0===b.maxScale||f>=b.maxScale;b.visible&&d&&c&&(b.sublayers?b.sublayers.forEach(h):b.popupEnabled&&
(q=t.getFetchPopupTemplate(b,a.__assign(a.__assign({},e),{defaultPopupTemplateEnabled:!1})),r.isSome(q)&&k.push({sublayer:b,popupTemplate:q})));return[2]})})};m=c.sublayers.toArray().map(h);return[4,g.all(m)];case 1:return l.sent(),n=k.map(function(b){var c=b.sublayer,f=b.popupTemplate;return a.__awaiter(v,void 0,void 0,function(){var b,k,g,h,l,p,m,n;return a.__generator(this,function(a){switch(a.label){case 0:return[4,c.load().catch(function(){})];case 1:return a.sent(),b=c.createQuery(),k=r.isSome(e)?
e.event:null,g=x.calculateTolerance({renderer:c.renderer,event:k}),h=this.createFetchPopupFeaturesQueryGeometry(d,g),b.geometry=h,l=b,[4,t.getRequiredFields(c,f)];case 2:return l.outFields=a.sent(),[4,this._loadArcadeModules(f)];case 3:return m=(p=a.sent())&&p.arcadeUtils.hasGeometryOperations(f),m||(b.maxAllowableOffset=h.width/g),[4,c.queryFeatures(b)];case 4:return n=a.sent(),[2,n.features]}})})}),[4,g.eachAlways(n)];case 2:return u=l.sent(),[2,u.reduce(function(b,c){return c.value?a.__spreadArrays(b,
c.value):b},[]).filter(function(b){return null!=b})]}})})};e.prototype.canResume=function(){var c,a;return!d.prototype.canResume.call(this)||(null===(a=null===(c=this.imageParameters)||void 0===c?void 0:c.timeExtent)||void 0===a?0:a.isEmpty)?!1:!0};e.prototype._loadArcadeModules=function(a){if(a.get("expressionInfos.length"))return y.loadArcade()};a.__decorate([f.property()],e.prototype,"imageParameters",void 0);a.__decorate([f.property()],e.prototype,"layer",void 0);a.__decorate([f.property({dependsOn:["imageParameters.timeExtent"]})],
e.prototype,"suspended",void 0);return e=a.__decorate([f.subclass("esri.views.layers.MapImageLayerView")],e)}(d)}});