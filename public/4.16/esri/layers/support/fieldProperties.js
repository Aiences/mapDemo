// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports @dojo/framework/shim/array ../../core/Logger ./Field ./fieldUtils".split(" "),function(k,b,e,f,g,d){Object.defineProperty(b,"__esModule",{value:!0});var h=f.getLogger("esri.layers.support.fieldProperties");b.defineFieldProperties=function(){return{fields:{type:[g],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(a){this._userOutFields=a;this.notifyChange("outFields")},get:function(){var a=this._userOutFields;if(!a||!a.length)return null;
if(e.includes(a,"*"))return["*"];if(!this.fields)return a;for(var c=0;c<a.length;c++){var b=a[c];d.hasField(this.fields,b)||h.error("field-attributes-layer:invalid-field","Invalid field "+b+" found in outFields",{layer:this,outFields:a})}return d.fixFields(this.fields,a)}}}}});