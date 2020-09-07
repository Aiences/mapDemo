// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/domUtils ../../core/accessorSupport/decorators ../../libs/popper/index ../Widget ./widget".split(" "),function(p,q,c,g,d,l,m,e){var n="bottom bottom-start bottom-end left left-start left-end right right-start right-end top top-start top-end".split(" "),h={position:"absolute",top:"-9999px",left:9999*(e.isRTL()?1:-1)+"px","z-index":""};return function(k){function a(f,a){var b=k.call(this,f,a)||this;b._renderAttached=!1;b.anchorElement=null;b.offset=[0,0];b.open=
!1;b.renderContentFunction=null;b._afterRootCreate=function(a){b._rootNode=a;b._updatePosition(a)};b._updatePosition=function(a){var f=b.renderContentFunction;if(b.open&&f){if(f=b._getAnchor())b.popper=l.createPopper(f,a.firstElementChild,{placement:b.placement,modifiers:[{name:"offset",options:{offset:b.offset}}]}),a.style.zIndex="1000"}else a.style.zIndex=h["z-index"]};return b}c.__extends(a,k);a.prototype.initialize=function(){var a=this;this.when(function(){a._projector.append(document.body,a.render);
a._renderAttached=!0})};a.prototype.destroy=function(){this.renderContentFunction=this.anchorElement=this.owner=null;this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1);this._rootNode&&(g.remove(this._rootNode),this._rootNode=null);this.popper&&this.popper.destroy()};Object.defineProperty(a.prototype,"container",{set:function(a){},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"owner",{set:function(a){this._set("owner",a)},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"placement",{get:function(){return"top"},set:function(a){-1===n.indexOf(a)?this._clearOverride("placement"):this._override("placement",a)},enumerable:!0,configurable:!0});a.prototype.render=function(){var a=this.open,c=this.owner,b=this.renderContentFunction;return e.tsx("div",{class:this.classes("esri-popover",a?"esri-popover--open":null),styles:h,afterCreate:this._afterRootCreate,afterUpdate:this._updatePosition},a&&b&&b.call(c))};a.prototype._getAnchor=function(){var a=
this.anchorElement;return g.byId("function"===typeof a?a():a)};c.__decorate([d.property(),e.renderable()],a.prototype,"anchorElement",void 0);c.__decorate([d.property()],a.prototype,"container",null);c.__decorate([d.property(),e.renderable()],a.prototype,"offset",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"open",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"owner",null);c.__decorate([d.property(),e.renderable()],a.prototype,"placement",null);c.__decorate([d.property(),
e.renderable()],a.prototype,"renderContentFunction",void 0);return a=c.__decorate([d.subclass("esri.widgets.support.Popover")],a)}(m)});