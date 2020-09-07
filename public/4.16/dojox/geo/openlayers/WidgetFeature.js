//>>built
define(["dojo/_base/declare","dojo/dom-style","dojo/_base/lang","dijit/registry","./Feature"],function(h,c,g,k,l){return h("dojox.geo.openlayers.WidgetFeature",l,{_widget:null,_bbox:null,constructor:function(a){this._params=a},setParameters:function(a){this._params=a},getParameters:function(){return this._params},_getWidget:function(){var a=this._params;if(null==this._widget&&null!=a){var b=null;"function"==typeof a.createWidget?b=a.createWidget.call(this):a.dojoType?(dojo.require(a.dojoType),b=new (g.getObject(a.dojoType))(a)):
a.dijitId?b=k.byId(a.dijitId):a.widget&&(b=a.widget);null!=b&&(this._widget=b,"function"==typeof b.startup&&b.startup(),a=b.domNode,null!=a&&c.set(a,{position:"absolute"}));this._widget=b}return this._widget},_getWidgetWidth:function(){var a=this._params;return a.width?a.width:(a=this._getWidget())?c.get(a.domNode,"width"):10},_getWidgetHeight:function(){var a=this._params;return a.height?a.height:(a=this._getWidget())?c.get(a.domNode,"height"):10},render:function(){var a=this.getLayer(),b=this._getWidget();
if(null!=b){var d=this._params,e=d.longitude,d=d.latitude,c=this.getCoordinateSystem(),e=a.getDojoMap().transformXY(e,d,c),f=this._getLocalXY(e),e=this._getWidgetWidth(),d=this._getWidgetHeight(),c=f[0]-e/2,f=f[1]-d/2,b=b.domNode,a=a.olLayer.div;b.parentNode!=a&&(b.parentNode&&b.parentNode.removeChild(b),a.appendChild(b));this._updateWidgetPosition({x:c,y:f,width:e,height:d})}},_updateWidgetPosition:function(a){var b=this._widget;c.set(b.domNode,{position:"absolute",left:a.x+"px",top:a.y+"px",width:a.width+
"px",height:a.height+"px"});b.srcNodeRef&&c.set(b.srcNodeRef,{position:"absolute",left:a.x+"px",top:a.y+"px",width:a.width+"px",height:a.height+"px"});g.isFunction(b.resize)&&b.resize({w:a.width,h:a.height})},remove:function(){var a=this._getWidget();a&&(a=a.domNode,a.parentNode&&a.parentNode.removeChild(a))}})});