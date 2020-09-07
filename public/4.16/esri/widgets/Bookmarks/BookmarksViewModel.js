// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Collection ../../core/Error ../../core/Evented ../../core/Logger ../../core/promiseUtils ../../core/accessorSupport/decorators ../../webmap/Bookmark ../support/GoTo".split(" "),function(v,w,d,m,g,n,p,h,e,l,q){var k=p.getLogger("esri.widgets.Bookmarks.BookmarksViewModel"),r=m.ofType(l),t={width:128,height:128},u={takeScreenshot:!0,captureExtent:!0};return function(f){function b(a){a=f.call(this,a)||this;a.activeBookmark=null;return a}d.__extends(b,f);b.prototype.destroy=
function(){this.view=null;this._set("activeBookmark",null)};Object.defineProperty(b.prototype,"bookmarks",{get:function(){return this.get("view.map.bookmarks")},set:function(a){void 0===a?this._clearOverride("bookmarks"):this._override("bookmarks",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return a&&!a.ready?"loading":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{get:function(){return this._get("view")},
set:function(a){a&&"2d"!==a.type&&k.error(new g("view:invalid-view","SceneView is not supported",{view:a}));this._set("view",a)},enumerable:!0,configurable:!0});b.prototype.createBookmark=function(a){var b=this.view,c=d.__assign(d.__assign({},u),a);a=c.takeScreenshot;var e=c.screenshotSettings,c=c.captureExtent;if(a&&!b)return b=new g("create-bookmark:invalid-view","Cannot create a bookmark without a view.",{view:b}),k.error(b),h.reject(b);a=a?b.takeScreenshot(d.__assign(d.__assign({},t),e)).then(function(a){return a.dataUrl}):
h.resolve();var f=c?b.extent.clone():void 0;return a.then(function(a){return new l({extent:f,thumbnail:a})})};b.prototype.goTo=function(a){var b=this,c=this.view;if(!c||!a||!a.extent)return a=new g("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:a,view:c}),k.error(a),h.reject(a);this._set("activeBookmark",a);c=this.callGoTo({target:{target:a.extent}});this.emit("select-bookmark",{bookmark:a});c.catch(function(){}).then(function(){return b._set("activeBookmark",
null)});return c};d.__decorate([e.property({readOnly:!0})],b.prototype,"activeBookmark",void 0);d.__decorate([e.property({type:r,dependsOn:["view.map.bookmarks"]})],b.prototype,"bookmarks",null);d.__decorate([e.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);d.__decorate([e.property({value:null})],b.prototype,"view",null);return b=d.__decorate([e.subclass("esri.widgets.Bookmarks.BookmarksViewModel")],b)}(q.GoToMixin(n.EventedAccessor))});