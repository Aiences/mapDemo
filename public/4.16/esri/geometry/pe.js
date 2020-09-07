// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../assets ../core/has ../core/promiseUtils @dojo/framework/shim/Promise".split(" "),function(A,b,B,C,D,E){function u(a){function c(b,a,c){b[a]=c(b[a])}b._pe=a;h.init();v.init();w.init();x.init();y.init();b.PeGCSExtent=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}B.__extends(a,e);a.prototype.destroy=function(){b._pe.destroy(this)};return a}(b._pe.PeGCSExtent);for(var f=0,d=[b._pe.PeDatum,b._pe.PeGeogcs,b._pe.PeGeogtran,b._pe.PeObject,b._pe.PeParameter,
b._pe.PePrimem,b._pe.PeProjcs,b._pe.PeSpheroid,b._pe.PeUnit];f<d.length;f++)a=d[f],c(a.prototype,"getName",function(b){return function(){return b.call(this,Array(h.PE_NAME_MAX))}});f=0;for(d=[b._pe.PeGeogtran,b._pe.PeProjcs];f<d.length;f++)a=d[f],c(a.prototype,"getParameters",function(e){return function(){for(var a=Array(h.PE_PARM_MAX),c=e.call(this),d=0;d<a.length;d++){var g=b._pe.getValue(c,"*");a[d]=g?b._pe.wrapPointer(g,b._pe.PeParameter):null;c+=Int32Array.BYTES_PER_ELEMENT}return a}});c(b._pe.PeHorizon.prototype,
"getCoord",function(b){return function(){var a=this.getSize();if(!a)return null;var e=[],c=b.call(this);n(e,a,c);return e}});c(b._pe.PeGTlistExtendedEntry.prototype,"getEntries",function(a){var e=b._pe._pe_getPeGTlistExtendedGTsSize();return function(){var c=null,d=a.call(this);if(!b._pe.compare(d,b._pe.NULL)){var c=[d],g=this.getSteps();if(1<g)for(var d=b._pe.getPointer(d),m=1;m<g;m++)c.push(b._pe.wrapPointer(d+e*m,b._pe.PeGTlistExtendedGTs))}return c}});var g=b._pe._pe_getPeHorizonSize();a=function(a){return function(){var e=
this._cache;e||(this._cache=e=new Map);if(e.has(a))return e.get(a);var c=null,d=a.call(this);if(!b._pe.compare(d,b._pe.NULL)){var c=[d],f=d.getNump();if(1<f)for(var d=b._pe.getPointer(d),h=1;h<f;h++)c.push(b._pe.wrapPointer(d+g*h,b._pe.PeHorizon))}e.set(a,c);return c}};c(b._pe.PeProjcs.prototype,"horizonGcsGenerate",a);c(b._pe.PeProjcs.prototype,"horizonPcsGenerate",a);b._pe.PeObject.prototype.toString=function(a){void 0===a&&(a=h.PE_STR_OPTS_NONE);b._pe.ensureCache.prepare();var e=b._pe.getPointer(this),
c=b._pe.ensureInt8(Array(h.PE_BUFFER_MAX));return b._pe.UTF8ToString(b._pe._pe_object_to_string_ext(e,a,c))}}function l(a){if(a){var c=b._pe.getClass(a);c&&(c=b._pe.getCache(c))&&(a=b._pe.getPointer(a))&&delete c[a]}}function r(a,c){var f=[];c=Array(c);for(var d=0;d<a;d++)f.push(b._pe.ensureInt8(c));return f}function p(b){var a;Array.isArray(b[0])?(a=[],b.forEach(function(b){a.push(b[0],b[1])})):a=b;return a}function n(a,c,f,d){void 0===d&&(d=!1);if(d)for(d=0;d<2*c;d++)a[d]=b._pe.getValue(f+d*Float64Array.BYTES_PER_ELEMENT,
"double");else{var g=0===a.length;for(d=0;d<c;d++)g&&(a[d]=Array(2)),a[d][0]=b._pe.getValue(f,"double"),a[d][1]=b._pe.getValue(f+Float64Array.BYTES_PER_ELEMENT,"double"),f+=2*Float64Array.BYTES_PER_ELEMENT}}Object.defineProperty(b,"__esModule",{value:!0});var t;b._pe=null;b.isLoaded=function(){return!!b._pe};b.isSupported=function(){return!!D("esri-wasm")};b.load=function(){return t?t:t=E.create(function(b,c){(new Promise(function(b,a){A(["./support/pe-wasm"],b,a)})).then(function(a){a({locateFile:function(b){return C.getAssetUrl("esri/geometry/support/"+
b)},onAbort:function(b){c(Error(b))}}).then(function(a){u(a);b()})})})};(function(a){function c(a,e,c){b._pe.ensureCache.prepare();var d=p(c),g=c===d,d=b._pe.ensureFloat64(d);(a=b._pe._pe_geog_to_proj(b._pe.getPointer(a),e,d))&&n(c,e,d,g);return a}function f(b,a,c){return d(b,a,c,0)}function d(a,e,c,d){b._pe.ensureCache.prepare();var g=p(c),m=c===g,g=b._pe.ensureFloat64(g);(a=b._pe._pe_proj_to_geog_center(b._pe.getPointer(a),e,g,d))&&n(c,e,g,m);return a}a.geogToProj=c;a.projGeog=function(b,a,d,k){switch(k){case h.PE_TRANSFORM_P_TO_G:return f(b,
a,d);case h.PE_TRANSFORM_G_TO_P:return c(b,a,d)}return 0};a.projToGeog=f;a.projToGeogCenter=d})(b.PeCSTransformations||(b.PeCSTransformations={}));var h;(function(a){a.init=function(){a.PE_BUFFER_MAX=b._pe.PeDefs.prototype.PE_BUFFER_MAX;a.PE_NAME_MAX=b._pe.PeDefs.prototype.PE_NAME_MAX;a.PE_MGRS_MAX=b._pe.PeDefs.prototype.PE_MGRS_MAX;a.PE_USNG_MAX=b._pe.PeDefs.prototype.PE_USNG_MAX;a.PE_DD_MAX=b._pe.PeDefs.prototype.PE_DD_MAX;a.PE_DDM_MAX=b._pe.PeDefs.prototype.PE_DDM_MAX;a.PE_DMS_MAX=b._pe.PeDefs.prototype.PE_DMS_MAX;
a.PE_UTM_MAX=b._pe.PeDefs.prototype.PE_UTM_MAX;a.PE_PARM_MAX=b._pe.PeDefs.prototype.PE_PARM_MAX;a.PE_TYPE_NONE=b._pe.PeDefs.prototype.PE_TYPE_NONE;a.PE_TYPE_GEOGCS=b._pe.PeDefs.prototype.PE_TYPE_GEOGCS;a.PE_TYPE_PROJCS=b._pe.PeDefs.prototype.PE_TYPE_PROJCS;a.PE_TYPE_GEOGTRAN=b._pe.PeDefs.prototype.PE_TYPE_GEOGTRAN;a.PE_TYPE_COORDSYS=b._pe.PeDefs.prototype.PE_TYPE_COORDSYS;a.PE_TYPE_UNIT=b._pe.PeDefs.prototype.PE_TYPE_UNIT;a.PE_STR_OPTS_NONE=b._pe.PeDefs.prototype.PE_STR_OPTS_NONE;a.PE_STR_AUTH_NONE=
b._pe.PeDefs.prototype.PE_STR_AUTH_NONE;a.PE_STR_AUTH_TOP=b._pe.PeDefs.prototype.PE_STR_AUTH_TOP;a.PE_STR_NAME_CANON=b._pe.PeDefs.prototype.PE_STR_NAME_CANON;a.PE_PARM_X0=b._pe.PeDefs.prototype.PE_PARM_X0;a.PE_PARM_ND=b._pe.PeDefs.prototype.PE_PARM_ND;a.PE_TRANSFORM_1_TO_2=b._pe.PeDefs.prototype.PE_TRANSFORM_1_TO_2;a.PE_TRANSFORM_2_TO_1=b._pe.PeDefs.prototype.PE_TRANSFORM_2_TO_1;a.PE_TRANSFORM_P_TO_G=b._pe.PeDefs.prototype.PE_TRANSFORM_P_TO_G;a.PE_TRANSFORM_G_TO_P=b._pe.PeDefs.prototype.PE_TRANSFORM_G_TO_P;
a.PE_HORIZON_RECT=b._pe.PeDefs.prototype.PE_HORIZON_RECT;a.PE_HORIZON_POLY=b._pe.PeDefs.prototype.PE_HORIZON_POLY;a.PE_HORIZON_LINE=b._pe.PeDefs.prototype.PE_HORIZON_LINE;a.PE_HORIZON_DELTA=b._pe.PeDefs.prototype.PE_HORIZON_DELTA}})(h=b.PeDefs||(b.PeDefs={}));(function(a){function c(a,c){var e=null,g=d[a];g||(g={},d[a]=g);g.hasOwnProperty(String(c))?e=g[c]:(a=b._pe.PeFactory.prototype.factoryByType(a,c),b._pe.compare(a,b._pe.NULL)||(e=a,g[c]=e));return e=f(e)}function f(a){if(a){var c=a.getType();
switch(c){case h.PE_TYPE_GEOGCS:a=b._pe.castObject(a,b._pe.PeGeogcs);break;case h.PE_TYPE_PROJCS:a=b._pe.castObject(a,b._pe.PeProjcs);break;case h.PE_TYPE_GEOGTRAN:a=b._pe.castObject(a,b._pe.PeGeogtran);break;default:c&h.PE_TYPE_UNIT&&(a=b._pe.castObject(a,b._pe.PeUnit))}}return a}var d={},g={};a.initialize=function(){b._pe.PeFactory.prototype.initialize(null)};a.coordsys=function(b){return c(h.PE_TYPE_COORDSYS,b)};a.factoryByType=c;a.fromString=function(a,c){var d=null,e=g[a];e||(e={},g[a]=e);e.hasOwnProperty(c)?
d=e[c]:(a=b._pe.PeFactory.prototype.fromString(a,c),b._pe.compare(a,b._pe.NULL)||(d=a,e[c]=d));return d=f(d)};a.geogcs=function(b){return c(h.PE_TYPE_GEOGCS,b)};a.geogtran=function(b){return c(h.PE_TYPE_GEOGTRAN,b)};a.getCode=function(a){return b._pe.PeFactory.prototype.getCode(a)};a.projcs=function(b){return c(h.PE_TYPE_PROJCS,b)};a.unit=function(b){return c(h.PE_TYPE_UNIT,b)}})(b.PeFactory||(b.PeFactory={}));b.PeGCSExtent=null;var v;(function(a){var c;a.init=function(){a.PE_GTLIST_OPTS_COMMON=b._pe.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON;
c=b._pe._pe_getPeGTlistExtendedEntrySize()};a.getGTlist=function(a,d,g,e,m,k){var f=null,h=new b._pe.PeInteger(k);try{var z=b._pe.PeGTlistExtended.prototype.getGTlist(a,d,g,e,m,h);if(k=h.val)if(f=[z],1<k){var l=b._pe.getPointer(z);for(a=1;a<k;a++)f.push(b._pe.wrapPointer(l+c*a,b._pe.PeGTlistExtendedEntry))}}finally{b._pe.destroy(h)}return f}})(v=b.PeGTlistExtended||(b.PeGTlistExtended={}));(function(a){a.destroy=function(a){if(a&&a.length){for(var c=0;c<a.length;c++){var d=a[c];l(d);d.getEntries().forEach(function(b){l(b);
b=b.getGeogtran();l(b);b.getParameters().forEach(l);[b.getGeogcs1(),b.getGeogcs2()].forEach(function(b){l(b);var a=b.getDatum();l(a);l(a.getSpheroid());l(b.getPrimem());l(b.getUnit())})})}b._pe.PeGTlistExtendedEntry.prototype.Delete(a[0])}}})(b.PeGTlistExtendedEntry||(b.PeGTlistExtendedEntry={}));(function(a){a.geogToGeog=function(a,f,d,g,e){b._pe.ensureCache.prepare();var c=p(d),h=d===c,c=b._pe.ensureFloat64(c),q=0;g&&(q=b._pe.ensureFloat64(g));(a=b._pe._pe_geog_to_geog(b._pe.getPointer(a),f,c,q,
e))&&n(d,f,c,h);return a}})(b.PeGTTransformations||(b.PeGTTransformations={}));(function(a){function c(a,c,e,f,k,q){b._pe.ensureCache.prepare();var d,g;switch(a){case "dd":d=b._pe._pe_geog_to_dd;g=h.PE_DD_MAX;break;case "ddm":d=b._pe._pe_geog_to_ddm;g=h.PE_DDM_MAX;break;case "dms":d=b._pe._pe_geog_to_dms,g=h.PE_DMS_MAX}a=0;c&&(a=b._pe.getPointer(c));c=p(f);c=b._pe.ensureFloat64(c);g=r(e,g);f=b._pe.ensureInt32(g);if(k=d(a,e,c,k,f))for(d=0;d<e;d++)q[d]=b._pe.UTF8ToString(g[d]);return k}function f(a,
c,e,f,h){b._pe.ensureCache.prepare();var d;switch(a){case "dd":d=b._pe._pe_dd_to_geog;break;case "ddm":d=b._pe._pe_ddm_to_geog;break;case "dms":d=b._pe._pe_dms_to_geog}a=0;c&&(a=b._pe.getPointer(c));c=f.map(function(a){return b._pe.ensureString(a)});f=b._pe.ensureInt32(c);c=b._pe.ensureFloat64(Array(2*e));(d=d(a,e,f,c))&&n(h,e,c);return d}a.geog_to_dms=function(b,a,e,f,h){return c("dms",b,a,e,f,h)};a.dms_to_geog=function(b,a,c,h){return f("dms",b,a,c,h)};a.geog_to_ddm=function(b,a,e,f,h){return c("ddm",
b,a,e,f,h)};a.ddm_to_geog=function(b,a,c,h){return f("ddm",b,a,c,h)};a.geog_to_dd=function(b,a,e,f,h){return c("dd",b,a,e,f,h)};a.dd_to_geog=function(b,a,c,h){return f("dd",b,a,c,h)}})(b.PeNotationDms||(b.PeNotationDms={}));var w;(function(a){a.init=function(){a.PE_MGRS_STYLE_NEW=b._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW;a.PE_MGRS_STYLE_OLD=b._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD;a.PE_MGRS_STYLE_AUTO=b._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO;a.PE_MGRS_180_ZONE_1_PLUS=b._pe.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS;
a.PE_MGRS_ADD_SPACES=b._pe.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES};a.geog_to_mgrs_extended=function(a,f,d,g,e,m,k){b._pe.ensureCache.prepare();var c=0;a&&(c=b._pe.getPointer(a));a=p(d);d=b._pe.ensureFloat64(a);a=r(f,h.PE_MGRS_MAX);var l=b._pe.ensureInt32(a);if(g=b._pe._pe_geog_to_mgrs_extended(c,f,d,g,e,m,l))for(e=0;e<f;e++)k[e]=b._pe.UTF8ToString(a[e]);return g};a.mgrs_to_geog_extended=function(a,f,d,g,e){b._pe.ensureCache.prepare();var c=0;a&&(c=b._pe.getPointer(a));a=d.map(function(a){return b._pe.ensureString(a)});
d=b._pe.ensureInt32(a);a=b._pe.ensureFloat64(Array(2*f));(g=b._pe._pe_mgrs_to_geog_extended(c,f,d,g,a))&&n(e,f,a);return g}})(w=b.PeNotationMgrs||(b.PeNotationMgrs={}));(function(a){a.geog_to_usng=function(a,f,d,g,e,m,k){b._pe.ensureCache.prepare();var c=0;a&&(c=b._pe.getPointer(a));a=p(d);d=b._pe.ensureFloat64(a);a=r(f,h.PE_MGRS_MAX);var l=b._pe.ensureInt32(a);if(g=b._pe._pe_geog_to_usng(c,f,d,g,e,m,l))for(e=0;e<f;e++)k[e]=b._pe.UTF8ToString(a[e]);return g};a.usng_to_geog=function(a,f,d,g){b._pe.ensureCache.prepare();
var c=0;a&&(c=b._pe.getPointer(a));a=d.map(function(a){return b._pe.ensureString(a)});d=b._pe.ensureInt32(a);a=b._pe.ensureFloat64(Array(2*f));(c=b._pe._pe_usng_to_geog(c,f,d,a))&&n(g,f,a);return c}})(b.PeNotationUsng||(b.PeNotationUsng={}));var x;(function(a){a.init=function(){a.PE_UTM_OPTS_NONE=b._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NONE;a.PE_UTM_OPTS_ADD_SPACES=b._pe.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES;a.PE_UTM_OPTS_NS=b._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NS};a.geog_to_utm=function(a,
f,d,g,e){b._pe.ensureCache.prepare();var c=0;a&&(c=b._pe.getPointer(a));a=p(d);d=b._pe.ensureFloat64(a);a=r(f,h.PE_UTM_MAX);var k=b._pe.ensureInt32(a);if(g=b._pe._pe_geog_to_utm(c,f,d,g,k))for(c=0;c<f;c++)e[c]=b._pe.UTF8ToString(a[c]);return g};a.utm_to_geog=function(a,f,d,g,e){b._pe.ensureCache.prepare();var c=0;a&&(c=b._pe.getPointer(a));a=d.map(function(a){return b._pe.ensureString(a)});d=b._pe.ensureInt32(a);a=b._pe.ensureFloat64(Array(2*f));(g=b._pe._pe_utm_to_geog(c,f,d,g,a))&&n(e,f,a);return g}})(x=
b.PeNotationUtm||(b.PeNotationUtm={}));var y;(function(a){var c=new Map;a.init=function(){a.PE_PCSINFO_OPTION_NONE=b._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE;a.PE_PCSINFO_OPTION_DOMAIN=b._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN;a.PE_POLE_OUTSIDE_BOUNDARY=b._pe.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY;a.PE_POLE_POINT=b._pe.PePCSInfo.prototype.PE_POLE_POINT};a.generate=function(f,d){void 0===d&&(d=a.PE_PCSINFO_OPTION_DOMAIN);var g,e;c.has(f)&&(e=c.get(f),e[d]&&(g=e[d]));g||(g=b._pe.PePCSInfo.prototype.generate(f,
d),e||(e=[],c.set(f,e)),e[d]=g);return g}})(y=b.PePCSInfo||(b.PePCSInfo={}));(function(a){a.version_string=function(){return b._pe.PeVersion.prototype.version_string()}})(b.PeVersion||(b.PeVersion={}));b._init=u});