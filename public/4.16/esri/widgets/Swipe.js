// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/events ../core/accessorSupport/decorators ../core/libs/pep/pep ./Widget ./support/widget ./Swipe/SwipeViewModel".split(" "),function(t,u,d,p,c,q,r,e,g){var m={handle:!0,divider:!0};return function(n){function b(a,f){a=n.call(this,a,f)||this;a.direction=null;a.disabled=!1;a.dragLabel=void 0;a.iconClass="esri-icon-up-down-arrows";a.label=void 0;a.leadingLayers=null;a.messages=null;a.position=null;a.trailingLayers=null;a.view=null;a.viewModel=new g;a._pointerOffset=
null;a._container=null;a._onContainerPointerDown=a._onContainerPointerDown.bind(a);a._onContainerPointerMove=a._onContainerPointerMove.bind(a);a._onContainerPointerUp=a._onContainerPointerUp.bind(a);return a}d.__extends(b,n);Object.defineProperty(b.prototype,"visibleElements",{get:function(){return this._get("visibleElements")||m},set:function(a){this._set("visibleElements",d.__assign(d.__assign({},m),a))},enumerable:!0,configurable:!0});b.prototype.render=function(){var a,f=this.viewModel,b=f.state,
f=f.direction,l="disabled"===b||this.disabled,f=(a={},a["esri-disabled"]=l,a["esri-swipe--disabled"]=l,a["esri-swipe--vertical"]="vertical"===f,a["esri-swipe--horizontal"]="horizontal"===f,a);return e.tsx("div",{class:this.classes("esri-swipe","esri-widget",f)},"disabled"===b?null:this.renderContainer())};b.prototype.renderHandle=function(){var a,f=this.viewModel.direction,b=this.visibleElements,f=(a={},a["esri-icon-drag-horizontal"]="vertical"===f,a["esri-icon-drag-vertical"]="horizontal"===f,a);
a=this.classes("esri-swipe__handle",!b.handle&&"esri-swipe__handle--hidden");return e.tsx("div",{key:"handle",role:"presentation",class:a},e.tsx("span",{"aria-hidden":"true",class:this.classes("esri-swipe__handle-icon",f)}))};b.prototype.renderDivider=function(){var a=this.visibleElements;return a&&a.divider?e.tsx("div",{key:"divider",role:"presentation",class:"esri-swipe__divider"}):null};b.prototype.renderContent=function(){return[this.renderDivider(),this.renderHandle()]};b.prototype.renderContainer=
function(){var a=this.disabled,f=this.dragLabel,b=this.viewModel,l=b.max,d=b.min,c=b.direction,b=b.position,h=b+"%",k={top:"vertical"===c?h:null,left:"vertical"===c?null:h},g=this.renderContent();return a?e.tsx("div",{key:"container",role:"presentation",styles:k,class:"esri-swipe__container"},g):e.tsx("div",{tabIndex:0,key:"container",bind:this,afterCreate:this._afterContainerCreate,onkeydown:this._onContainerKeyDown,"touch-action":"none",role:"slider",title:f,"aria-label":f,"aria-orientation":c,
"aria-valuemax":""+l,"aria-valuemin":""+d,"aria-valuenow":""+b,"aria-valuetext":h,styles:k,class:"esri-swipe__container"},g)};b.prototype._afterContainerCreate=function(a){q.applyLocal(a);this._container=a;a.addEventListener("pointerdown",this._onContainerPointerDown)};b.prototype._calculatePointerOffset=function(a){var b=this.direction,d=a.target,l=("vertical"===b?d.clientHeight:d.clientWidth)/2,c=d.getBoundingClientRect(),d=a.clientX-c.left;a=a.clientY-c.top;this._pointerOffset="vertical"===b?a-
l:d-l};b.prototype._onContainerPointerDown=function(a){a.preventDefault();this._container&&document.activeElement!==this.container&&this._container.focus();this._calculatePointerOffset(a);document.addEventListener("pointerup",this._onContainerPointerUp);document.addEventListener("pointermove",this._onContainerPointerMove)};b.prototype._onContainerPointerUp=function(a){a.preventDefault();document.removeEventListener("pointerup",this._onContainerPointerUp);document.removeEventListener("pointermove",
this._onContainerPointerMove)};b.prototype._onContainerPointerMove=function(a){a.preventDefault();var b=this._pointerOffset,d=this.direction,c=a.clientX;a=a.clientY;var e=this.container.getBoundingClientRect(),g=e.top,h=e.left,k=e.width,e=e.height;this.position=("vertical"===d?a-g-b:c-h-b)/("vertical"===d?e:k)*100};b.prototype._getKeyPosition=function(a){var b=p.eventKey(a),d=this.position,c=this.viewModel,e=c.max,g=c.min,h=c.step,k=c.direction,c=h*c.stepMultiplier;-1<"ArrowUp ArrowDown ArrowLeft ArrowRight Home End PageUp PageDown".split(" ").indexOf(b)&&
(a.preventDefault(),a.stopPropagation());return("vertical"===k?"ArrowDown"===b||"ArrowRight"===b:"ArrowUp"===b||"ArrowRight"===b)?(a=a.shiftKey?c:h,d+a):("vertical"===k?"ArrowUp"===b||"ArrowLeft"===b:"ArrowDown"===b||"ArrowLeft"===b)?(a=a.shiftKey?c:h,d-a):"Home"===b?g:"End"===b?e:("vertical"===k?"PageDown"===b:"PageUp"===b)?d+c:("vertical"===k?"PageUp"===b:"PageDown"===b)?d-c:null};b.prototype._onContainerKeyDown=function(a){a=this._getKeyPosition(a);"number"===typeof a&&(this.position=a)};d.__decorate([c.aliasOf("viewModel.direction")],
b.prototype,"direction",void 0);d.__decorate([c.property(),e.renderable()],b.prototype,"disabled",void 0);d.__decorate([c.property({aliasOf:{source:"messages.dragLabel",overridable:!0}}),e.renderable()],b.prototype,"dragLabel",void 0);d.__decorate([c.property()],b.prototype,"iconClass",void 0);d.__decorate([c.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);d.__decorate([c.aliasOf("viewModel.leadingLayers")],b.prototype,"leadingLayers",void 0);d.__decorate([c.property(),
e.renderable(),e.messageBundle("esri/widgets/Swipe/t9n/Swipe")],b.prototype,"messages",void 0);d.__decorate([c.aliasOf("viewModel.position")],b.prototype,"position",void 0);d.__decorate([c.aliasOf("viewModel.trailingLayers")],b.prototype,"trailingLayers",void 0);d.__decorate([c.aliasOf("viewModel.view"),e.renderable()],b.prototype,"view",void 0);d.__decorate([c.property({type:g}),e.renderable(["viewModel.state","viewModel.position","viewModel.direction"])],b.prototype,"viewModel",void 0);d.__decorate([c.property(),
e.renderable()],b.prototype,"visibleElements",null);return b=d.__decorate([c.subclass("esri.widgets.Swipe")],b)}(r)});