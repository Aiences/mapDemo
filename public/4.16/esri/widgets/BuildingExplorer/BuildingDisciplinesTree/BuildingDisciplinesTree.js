// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../Widget ../BuildingDisciplinesViewModel ./BuildingDisciplinesNode ../../support/widget".split(" "),function(n,p,c,f,d,k,g,l,e){var m={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"};return function(h){function a(a){var b=h.call(this,a)||this;b._defaultViewModel=new g;b.viewModel=b._defaultViewModel;b.messages=m;b._childWidgets=[];b._updateChildWidgets=function(){b._destroyChildWidgets();
b.viewModel&&(b._childWidgets=b.viewModel.root.children.toArray().reverse().map(function(a){return new l({node:a,messages:b.messages})}))};return b}c.__extends(a,h);a.prototype.initialize=function(){this.own(f.on(this,"viewModel.root.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),f.init(this,"messages",this._updateChildWidgets))};a.prototype.destroy=function(){this._destroyChildWidgets();this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()};
a.prototype.render=function(){return e.tsx("div",{role:"tree",class:"esri-building-disciplines-tree"},this._childWidgets.map(function(a){return a.render()}))};a.prototype._destroyChildWidgets=function(){this._childWidgets.forEach(function(a){return a.destroy()});this._childWidgets=[]};c.__decorate([d.property({type:g}),e.renderable()],a.prototype,"viewModel",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"messages",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"_childWidgets",
void 0);return a=c.__decorate([d.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],a)}(k)});