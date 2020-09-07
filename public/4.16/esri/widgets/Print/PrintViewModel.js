// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../intl ../../request ../../Viewpoint ../../core/arrayUtils ../../core/Error ../../core/Handles ../../core/Loadable ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../tasks/PrintTask ../../tasks/support/fileFormat ../../tasks/support/layoutTemplate ../../tasks/support/PrintParameters ../../views/2d/viewpointUtils".split(" "),function(z,A,b,f,q,r,l,g,t,u,k,e,v,m,n,p,w,x){function y(b){b.layoutOptions||(b.layoutOptions={});b.layoutOptions.customTextElements||
(b.layoutOptions.customTextElements=[]);l.find(b.layoutOptions.customTextElements,function(b){return"date"in b})||b.layoutOptions.customTextElements.push({date:f.formatDate(Date.now(),f.convertDateFormatToIntlOptions("short-date"))})}return function(f){function c(a){a=f.call(this,a)||this;a._handles=new t;a._viewpoint=null;a.allowedFormats="all";a.allowedLayouts="all";a.view=null;a.printServiceUrl=null;a.updateDelay=1E3;a.templatesInfo=null;a.scaleEnabled=!1;a.error=null;a.print=a.print.bind(a);return a}
b.__extends(c,f);c.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(c.prototype,"_printTask",{get:function(){return new m(this.printServiceUrl,{updateDelay:this.updateDelay})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"},enumerable:!0,
configurable:!0});c.prototype.load=function(a){this.addResolvingPromise(this._loadServiceDescription(a));return k.resolve(this)};c.prototype.print=function(a){var b;if(!this.view)return k.reject(new g("print:view-required","view is not set"));this.scaleEnabled?(this._viewpoint||(this._viewpoint=this.view.viewpoint.clone()),b=this._getExtent(this._viewpoint,a.outScale)):(this._viewpoint=null,b=this._getExtent(this.view.viewpoint));y(a);a=new w({view:this.view,template:a,extent:b});return this._printTask.execute(a).catch(function(a){return k.reject(new g("print:export-error",
"print-task:cim-symbol-unsupported"===a.name?a.message:"An error occurred while exporting the web map.",{error:a}))})};c.prototype._loadServiceDescription=function(a){return b.__awaiter(this,void 0,void 0,function(){var c;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this._getPrintTemplatesFromService(a)];case 1:return c=b.sent(),this._set("templatesInfo",c),[2]}})})};c.prototype._getPrintTemplatesFromService=function(a){var c=this;return-1===this.printServiceUrl.toLowerCase().split("/").indexOf("gpserver")?
(this.error=new g("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.printServiceUrl}),k.reject(this.error)):q(this.printServiceUrl,b.__assign(b.__assign({},a),{query:{f:"json"},timeout:6E4})).then(function(a){a=a&&a.data;var b=null,e=null;(a&&a.parameters).forEach(function(a){var d=a.choiceList&&a.choiceList.slice(),h;d&&d.length&&a.defaultValue&&(h=d.indexOf(a.defaultValue));-1<h&&(d.splice(h,1),d.unshift(a.defaultValue));h=function(a,b){var c=
"all"===b?a:a.filter(function(a){return-1<b.indexOf(a)});return 0===c.length?a:c};if("Format"===a.name)d=h(d.map(n.fromJSON),c.allowedFormats),a=n.fromJSON(a.defaultValue),b={defaultValue:l.includes(d,a)?a:d[0],choiceList:d};else if("Layout_Template"===a.name){var d=d.filter(function(a){return"map_only"!==a.toLowerCase()}),f,g=void 0;d.some(function(a,b){a=a.toLowerCase();if(-1<a.indexOf("letter")&&-1<a.indexOf("landscape"))return f=b,!0;-1<a.indexOf("a4")&&-1<a.indexOf("landscape")&&(f=b);return!1});
f&&(g=d[f],d.splice(f,1),d.unshift(g));d=h(d.map(p.fromJSON),c.allowedLayouts);a=p.fromJSON(a.defaultValue);e={defaultValue:l.includes(d,a)?a:d[0],choiceList:d}}});c.error=null;return{format:b,layout:e}}).catch(function(a){c.error=new g("print:unavailable-service-info","Can't fetch templates info from service",{error:a});throw c.error;})};c.prototype._getExtent=function(a,b){b=b||this.view.scale;var c=this.get("view.size");a=a?a.targetGeometry:null;return x.getExtent(new v,new r({scale:b,targetGeometry:a}),
c)};b.__decorate([e.property()],c.prototype,"allowedFormats",void 0);b.__decorate([e.property()],c.prototype,"allowedLayouts",void 0);b.__decorate([e.property()],c.prototype,"view",void 0);b.__decorate([e.property()],c.prototype,"printServiceUrl",void 0);b.__decorate([e.property({dependsOn:["printServiceUrl"],type:m})],c.prototype,"_printTask",null);b.__decorate([e.property({dependsOn:["view.ready","error","loadStatus"],readOnly:!0})],c.prototype,"state",null);b.__decorate([e.property()],c.prototype,
"updateDelay",void 0);b.__decorate([e.property({readOnly:!0})],c.prototype,"templatesInfo",void 0);b.__decorate([e.property()],c.prototype,"scaleEnabled",void 0);b.__decorate([e.property()],c.prototype,"error",void 0);return c=b.__decorate([e.subclass("esri.widgets.Print.PrintViewModel")],c)}(u)});