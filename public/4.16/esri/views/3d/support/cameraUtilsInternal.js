// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],function(p,e,k,a,c){Object.defineProperty(e,"__esModule",{value:!0});var m=c.vec3f64.create(),l=c.vec3f64.create();e.createDirectionUp=function(){return{direction:c.vec3f64.create(),up:c.vec3f64.create()}};e.directionToHeadingTilt=function(f,d,c,g,e){var b=m;a.vec3.normalize(b,f);var h=a.vec3.dot(b,g),n=0<h,h=Math.abs(h);.99<h&&(h=Math.abs(a.vec3.dot(d,g)),.99>h?(a.vec3.copy(b,
d),n&&a.vec3.scale(b,b,-1)):b=null);d=0;b&&(a.vec3.scale(l,g,a.vec3.dot(g,b)),a.vec3.subtract(b,b,l),d=a.vec3.dot(b,e)/(a.vec3.length(b)*a.vec3.length(e)),a.vec3.cross(l,b,e),d=(0<a.vec3.dot(l,g)?1:-1)*k.rad2deg(k.acosClamped(d)));f=k.rad2deg(k.acosClamped(-a.vec3.dot(g,f)/a.vec3.length(f)));if(!c)return{heading:d,tilt:f};c.heading=d;c.tilt=f;return c}});