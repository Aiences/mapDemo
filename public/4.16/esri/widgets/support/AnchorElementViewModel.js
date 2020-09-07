// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/watchUtils ../../core/accessorSupport/decorators".split(" "),function(m,n,d,h,k,l,f,e){return function(g){function a(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];var c=g.apply(this,a)||this;c._anchorHandles=new k;c.location=null;c.screenLocation=null;c.screenLocationEnabled=!1;c.view=null;c._anchorHandles.add([f.watch(c,["screenLocationEnabled","location","view.size","view.stationary"],
function(){return c._updateScreenPointAndHandle()}),f.watch(c,["view","view.ready"],function(){return c._wireUpView()})]);return c}d.__extends(a,g);a.prototype.destroy=function(){this.view=null;this._anchorHandles&&this._anchorHandles.destroy();this._viewpointHandle=this._anchorHandles=null};a.prototype._wireUpView=function(){var a=this;this._anchorHandles.remove("view");this._viewpointHandle=null;if(this.get("view.ready")){this._setScreenLocation();var b=this.view,b=l.pausable(b,"3d"===b.type?"camera":
"viewpoint",function(){return a._viewpointChange()});this._anchorHandles.add(b,"view");this._viewpointHandle=b;this._toggleWatchingViewpoint()}};a.prototype._viewpointChange=function(){this._setScreenLocation();this.emit("view-change")};a.prototype._updateScreenPointAndHandle=function(){this._setScreenLocation();this._toggleWatchingViewpoint()};a.prototype._toggleWatchingViewpoint=function(){var a=this._viewpointHandle,b=this.screenLocationEnabled;a&&(this.location&&b?a.resume():a.pause())};a.prototype._setScreenLocation=
function(){var a=this.location,b=this.view,c=this.screenLocationEnabled,d=this.get("view.ready"),a=c&&a&&d?b.toScreen(a):null;this._set("screenLocation",a)};d.__decorate([e.property()],a.prototype,"location",void 0);d.__decorate([e.property({readOnly:!0})],a.prototype,"screenLocation",void 0);d.__decorate([e.property()],a.prototype,"screenLocationEnabled",void 0);d.__decorate([e.property()],a.prototype,"view",void 0);return a=d.__decorate([e.subclass("esri.widgets.support.AnchorElementViewModel")],
a)}(h.EventedAccessor)});