// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,a){Object.defineProperty(a,"__esModule",{value:!0});(function(a){function b(a,c,b){a.setUniform3f("camPos",b[3]-c[0],b[7]-c[1],b[11]-c[2])}a.bindUniformsCustomOrigin=b;a.bindUniforms=function(a,c){b(a,c.origin,c.viewInvTransp)}})(a.Camera||(a.Camera={}));(function(a){a.bindUniforms=function(a,d){a.setUniform1f("pixelRatio",d.pixelRatio||1);a.setUniform4fv("viewport",d.viewport)}})(a.Viewport||(a.Viewport={}))});