// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./Widget ./Home/HomeViewModel ./support/widget".split(" "),function(k,l,b,d,h,f,e){return function(g){function a(c,a){c=g.call(this,c,a)||this;c.goToOverride=null;c.iconClass="esri-icon-home";c.label=void 0;c.messages=null;c.messagesCommon=null;c.view=null;c.viewModel=new f;c.viewpoint=null;return c}b.__extends(a,g);Object.defineProperty(a.prototype,"homeTitle",{get:function(){var c,a=null===(c=this.viewModel)||void 0===c?void 0:c.state;
c=this.messagesCommon;var b=this.messages;return"going-home"===a?c.cancel:b.title},enumerable:!0,configurable:!0});a.prototype.cancelGo=function(){return null};a.prototype.go=function(){return null};a.prototype.render=function(){var c,a,b=null===(a=this.viewModel)||void 0===a?void 0:a.state;a=this.homeTitle;b=(c={},c["esri-disabled"]="disabled"===b,c);return e.tsx("div",{bind:this,class:this.classes("esri-home esri-widget--button esri-widget",b),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,
"aria-label":a,title:a},this.renderIcon(),this.renderText())};a.prototype.renderIcon=function(){var a,b,d=null===(b=this.viewModel)||void 0===b?void 0:b.state;b=(a={},a["esri-icon-loading-indicator"]="going-home"===d,a["esri-rotating"]="going-home"===d,a);return e.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon esri-icon-home",b)})};a.prototype.renderText=function(){return e.tsx("span",{class:"esri-icon-font-fallback-text"},this.messages.button)};a.prototype._go=function(){var a=this.viewModel;
"going-home"===a.state?a.cancelGo():a.go()};b.__decorate([d.aliasOf("viewModel.goToOverride")],a.prototype,"goToOverride",void 0);b.__decorate([d.property({readOnly:!0,dependsOn:["viewModel.state","messages","messagesCommon"]}),e.renderable()],a.prototype,"homeTitle",null);b.__decorate([d.property()],a.prototype,"iconClass",void 0);b.__decorate([d.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0);b.__decorate([d.property(),e.renderable(),e.messageBundle("esri/widgets/Home/t9n/Home")],
a.prototype,"messages",void 0);b.__decorate([d.property(),e.renderable(),e.messageBundle("esri/t9n/common")],a.prototype,"messagesCommon",void 0);b.__decorate([d.aliasOf("viewModel.view"),e.renderable()],a.prototype,"view",void 0);b.__decorate([d.property({type:f}),e.renderable("viewModel.state"),e.vmEvent("go")],a.prototype,"viewModel",void 0);b.__decorate([d.aliasOf("viewModel.viewpoint")],a.prototype,"viewpoint",void 0);b.__decorate([d.aliasOf("viewModel.cancelGo")],a.prototype,"cancelGo",null);
b.__decorate([d.aliasOf("viewModel.go")],a.prototype,"go",null);b.__decorate([e.accessibleHandler()],a.prototype,"_go",null);return a=b.__decorate([d.subclass("esri.widgets.Home")],a)}(h)});