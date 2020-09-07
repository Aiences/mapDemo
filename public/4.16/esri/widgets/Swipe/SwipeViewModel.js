// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/Collection ../../core/compilerUtils ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/Layer ../../views/layers/support/ClipRect".split(" "),function(w,x,c,p,q,r,t,k,d,u,h){function v(c,a){a=Math.pow(10,a);return Math.round(c*a)/a}var e=q.ofType(u),f={left:0,right:0,top:0,bottom:0};return function(m){function a(b){b=m.call(this,b)||this;b._handles=new t;b._leadingClips=new Map;b._trailingClips=new Map;
b.direction="horizontal";b.leadingLayers=new e;b.max=100;b.min=0;b.precision=4;b.step=.5;b.stepMultiplier=10;b.trailingLayers=new e;b.view=null;return b}c.__extends(a,m);a.prototype.initialize=function(){var b=this;this._handles.add([k.init(this,["view","view.ready","position","direction"],function(){return b._clipLayers()}),k.on(this,"leadingLayers","change",function(){return b._clipLeadingLayers()}),k.on(this,"trailingLayers","change",function(){return b._clipTrailingLayers()})])};a.prototype.destroy=
function(){this._removeExistingClips();this._handles.destroy();this._handles=null};Object.defineProperty(a.prototype,"position",{get:function(){return 25},set:function(b){this._set("position",v(Math.max(Math.min(b,this.max),this.min),this.precision))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"state",{get:function(){var b=this.view;return b&&b.ready?"ready":"disabled"},enumerable:!0,configurable:!0});a.prototype._clipLayers=function(){this._clipLeadingLayers();this._clipTrailingLayers()};
a.prototype._clipLeadingLayers=function(){var b=this;this._removeClips("leading");this.leadingLayers.forEach(function(a){return b._clipLayer({layer:a,type:"leading"})})};a.prototype._clipTrailingLayers=function(){var b=this;this._removeClips("trailing");this.trailingLayers.forEach(function(a){return b._clipLayer({layer:a,type:"trailing"})})};a.prototype._getLayerView=function(b){return c.__awaiter(this,void 0,void 0,function(){var a,d;return c.__generator(this,function(c){switch(c.label){case 0:return a=
this.view,b&&a?[4,r.typeCast(a)().whenLayerView(b)]:[2,null];case 1:return d=c.sent(),"clips"in d?[2,d]:[2,null]}})})};a.prototype._getVerticalClipRect=function(b){var a=this.position;return"leading"===b?new h(c.__assign(c.__assign({},f),{bottom:100-a+"%"})):"trailing"===b?new h(c.__assign(c.__assign({},f),{top:a+"%"})):null};a.prototype._getHorizontalClipRect=function(b){var a=this.position;return"leading"===b?new h(c.__assign(c.__assign({},f),{right:100-a+"%"})):"trailing"===b?new h(c.__assign(c.__assign({},
f),{left:a+"%"})):null};a.prototype._getClipRect=function(b){var a=this.direction;return"vertical"===a?this._getVerticalClipRect(b):"horizontal"===a?this._getHorizontalClipRect(b):null};a.prototype._clipLayer=function(a){return c.__awaiter(this,void 0,void 0,function(){var b,d,h,n,e,f,g,k,l;return c.__generator(this,function(c){switch(c.label){case 0:return b=this,d=b._leadingClips,h=b._trailingClips,n=a.layer,e=a.type,f="trailing"===e?h:"leading"===e?d:null,[4,this._getLayerView(n)];case 1:g=c.sent();
if(!(g&&"clips"in g&&f&&g.hasOwnProperty("clips")))return[2];(k=f.get(g))&&g.clips.remove(k);if(l=this._getClipRect(e))f.set(g,l),g.clips.add(l);return[2]}})})};a.prototype._removeClips=function(a){var b=this._leadingClips,c=this._trailingClips;if(a="trailing"===a?c:"leading"===a?b:null)a.forEach(function(a,b){b&&b.hasOwnProperty("clips")&&b.clips.remove(a)}),a.clear()};a.prototype._removeExistingClips=function(){this._removeClips("leading");this._removeClips("trailing")};c.__decorate([d.property()],
a.prototype,"direction",void 0);c.__decorate([d.property({type:e})],a.prototype,"leadingLayers",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"max",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"min",void 0);c.__decorate([d.property()],a.prototype,"position",null);c.__decorate([d.property()],a.prototype,"precision",void 0);c.__decorate([d.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"state",null);c.__decorate([d.property()],a.prototype,"step",void 0);
c.__decorate([d.property()],a.prototype,"stepMultiplier",void 0);c.__decorate([d.property({type:e})],a.prototype,"trailingLayers",void 0);c.__decorate([d.property()],a.prototype,"view",void 0);return a=c.__decorate([d.subclass("esri.widgets.Swipe.SwipeViewModel")],a)}(p)});