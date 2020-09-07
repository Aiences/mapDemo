// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/accessorSupport/decorators ../../Widget ../../support/widget".split(" "),function(f,g,d,h,e,k,c){Object.defineProperty(g,"__esModule",{value:!0});f=function(f){function a(b,a){b=f.call(this,b,a)||this;b.level=null;b.active=!1;b.hovering=!1;b.messages={clearLevel:"",selectLevel:""};b.onClear=function(){};return b}d.__extends(a,f);a.prototype.render=function(){var b;if(h.isNone(this.level))return c.tsx("div",{class:"esri-building-level-picker-label--empty",
title:this.messages.selectLevel},this.messages.selectLevel);var a=this.messages.clearLevel;return c.tsx("div",{bind:this,class:this.classes("esri-building-level-picker-label",(b={},b["esri-building-level-picker-label--active"]=this.active,b["esri-building-level-picker-label--hover"]=this.hovering,b)),onclick:this.onClear,title:a,"aria-label":a},c.tsx("span",null,this.level),c.tsx("button",{bind:this,class:this.classes("esri-building-level-picker-label__clear-button","esri-icon-close"),disabled:!this.active,
onclick:this.onClear}))};d.__decorate([e.property(),c.renderable()],a.prototype,"level",void 0);d.__decorate([e.property({nonNullable:!0}),c.renderable()],a.prototype,"active",void 0);d.__decorate([e.property({nonNullable:!0}),c.renderable()],a.prototype,"hovering",void 0);d.__decorate([e.property(),c.renderable()],a.prototype,"messages",void 0);d.__decorate([e.property({nonNullable:!0})],a.prototype,"onClear",void 0);return a=d.__decorate([e.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],
a)}(k);g.Label=f});