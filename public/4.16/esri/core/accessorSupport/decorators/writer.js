// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../object","./property"],function(l,d,h,k){Object.defineProperty(d,"__esModule",{value:!0});d.writer=function(a,c,g){var e,f;void 0===c?(f=a,e=[void 0]):"string"!==typeof c?(f=a,e=[void 0],g=c):(f=c,e=Array.isArray(a)?a:[a]);return function(a,c){var d=a.constructor.prototype;e.forEach(function(b){b=k.propertyJSONMeta(a,b,f);b.write&&"object"!==typeof b.write&&(b.write={});g&&h.setDeepValue("write.target",g,b);h.setDeepValue("write.writer",d[c],b)})}}});