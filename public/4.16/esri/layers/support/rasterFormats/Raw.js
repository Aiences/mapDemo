// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(t,u){var n=function(f){var b=1;switch(f){case Uint8Array:case Int8Array:b=1;break;case Uint16Array:case Int16Array:b=2;break;case Uint32Array:case Int32Array:case Float32Array:b=4;break;case Float64Array:b=8}return b};return function(){function f(){}f.decode=function(b,a){var h=a.pixelType,f=[],e=a.width*a.height,k=Math.floor(b.byteLength/(a.width*a.height*n(a.pixelType))),d=a.bandIds,c=a.format;a=d&&d.length||Math.floor(b.byteLength/(a.width*a.height*n(a.pixelType)));
var q=b.byteLength-b.byteLength%(e*n(h)),r=new h(b,0,e*k),l,g,p,m;if("bip"===c)for(c=0;c<a;c++){p=new h(e);m=d?d[c]:c;for(l=0;l<e;l++)p[l]=r[l*k+m];f.push(p)}else if("bsq"===c)for(c=0;c<a;c++)m=d?d[c]:c,f.push(r.subarray(m*e,(m+1)*e));if(q<b.byteLength-1)if(b=b.slice(q),8*b.byteLength<e)g=null;else{b=new Uint8Array(b,0,Math.ceil(e/8));h=new Uint8Array(e);for(g=a=g=d=k=0;g<b.length-1;g++)for(d=b[g],a=7;0<=a;a--)h[k++]=d>>a&1;for(a=7;k<e-1;)d=b[b.length-1],h[k++]=d>>a&1,a--;g=h}return{pixels:f,mask:g}};
return f}()});