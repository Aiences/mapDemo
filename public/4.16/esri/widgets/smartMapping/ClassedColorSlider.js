// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/accessorSupport/decorators ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedColorSlider/ClassedColorSliderViewModel ./../support/widget".split(" "),function(n,p,d,f,k,l,m,e){return function(h){function b(a,c){a=h.call(this,a,c)||this;a._bgFillId=null;a._rampFillId=null;a.breaks=null;a.label=void 0;a.messages=null;a.viewModel=new m;a._bgFillId=a.id+"-bg-fill";a._rampFillId=a.id+"-linear-gradient";return a}d.__extends(b,h);g=b;b.fromRendererResult=
function(a,c){a=a.renderer.classBreakInfos.map(function(a){return{min:a.minValue,max:a.maxValue,color:a.symbol.color}});return new g({breaks:a,histogramConfig:{bins:c?c.bins:[]}})};b.prototype.updateClassBreakInfos=function(a){var c=this.breaks;if(c.length!==a.length)console.error("Number of input breakInfos must match number of slider breaks: "+c.length);else return a.map(function(a,b){a=a.symbol;a.color=c[b].color;return new k({minValue:c[b].min,maxValue:c[b].max,symbol:a})})};b.prototype.updateFromRendererResult=
function(a,c){a=a.renderer.classBreakInfos.map(function(a){return{min:a.minValue,max:a.maxValue,color:a.symbol.color}});this.set({breaks:a,histogramConfig:{bins:c?c.bins:[]}})};b.prototype.render=function(){var a,c=this.label,b="disabled"===this.state,d=this.classes("esri-classed-color-slider","esri-widget","esri-widget--panel",(a={},a["esri-disabled"]=b,a));return e.tsx("div",{"aria-label":c,class:d},b?null:this.renderContent(this.renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))};
b.prototype.renderRamp=function(){var a=this._bgFillId,b=this._rampFillId,d=this.viewModel.getStopInfo();return e.tsx("div",{class:"esri-classed-color-slider__ramp"},e.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},e.tsx("defs",null,this.renderRampFillDefinition(b,d),this.renderBackgroundFillDefinition(a)),e.tsx("rect",{x:"0",y:"0",fill:"url(#"+a+")",height:"100%",width:"100%"}),e.tsx("rect",{x:"0",y:"0",fill:"url(#"+b+")",height:"100%",width:"100%"})))};var g;d.__decorate([f.aliasOf("viewModel.breaks")],
b.prototype,"breaks",void 0);d.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);d.__decorate([f.property(),e.renderable(),e.messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],b.prototype,"messages",void 0);d.__decorate([f.property(),e.renderable("viewModel.breaks viewModel.hasTimeData viewModel.inputFormatFunction viewModel.inputParseFunction viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.values".split(" "))],
b.prototype,"viewModel",void 0);return b=g=d.__decorate([f.subclass("esri.widgets.smartMapping.ClassedColorSlider")],b)}(l.SmartMappingSliderBase)});