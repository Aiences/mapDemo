// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/spatialReferenceUtils".split(" "),function(x,f,c,t,g,u,h,v,k,w){function l(b,a){if(a.supported){var m=Infinity,d=-Infinity,e=a.upperBoundX-a.lowerBoundX;b.forEach(function(b){for(var c=
b.pos[0];c<a.lowerBoundX;)c+=e;for(;c>a.upperBoundX;)c-=e;m=Math.min(m,c);d=Math.max(d,c);b.pos[0]=c});var c=d-m;e-c<c&&b.forEach(function(a){0>a.pos[0]&&(a.pos[0]+=e)})}}function n(b,a){b=w.getInfo(b);return"global"===a&&b?{supported:!0,lowerBoundX:b.valid[0],upperBoundX:b.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}Object.defineProperty(f,"__esModule",{value:!0});var q=function(){function b(a,b){this.spatialReference=a;this.viewingMode=b;this._unnormalizationInfo=n(a,b)}b.prototype.createNew=
function(){return g.vec2f64.create()};b.prototype.fromPoint=function(a){return g.vec2f64.fromValues(a.x,a.y)};b.prototype.fromArray=function(a){return g.vec2f64.fromValues(a[0],a[1])};b.prototype.toArray=function(a){return[a[0],a[1]]};b.prototype.toPoint=function(a,b){b.x=a[0];b.y=a[1];b.hasZ=!1;b.hasM=!1;b.spatialReference=this.spatialReference;return b};b.prototype.createPoint=function(a){return new c.Point({x:a[0],y:a[1],z:void 0,m:void 0,spatialReference:this.spatialReference})};b.prototype.createPointFromArray=
function(a){return new c.Point({x:a[0],y:a[1],z:void 0,m:void 0,spatialReference:this.spatialReference})};b.prototype.lerp=function(a,b,d,c){return t.vec2.lerp(c,a,b,d)};b.prototype.addDelta=function(a,b,d){a[0]+=b;a[1]+=d};b.prototype.pointToArray=function(a){return[a.x,a.y]};b.prototype.zFromArray=function(a){};b.prototype.hasZ=function(){return!1};b.prototype.unnormalize=function(a){l(a,this._unnormalizationInfo)};return b}();f.CoordinateHelper2D=q;var p=function(){function b(a,b,d){this.valueType=
a;this.spatialReference=b;this._unnormalizationInfo=n(b,d)}b.prototype.createNew=function(){return h.vec3f64.create()};b.prototype.fromPoint=function(a){return h.vec3f64.fromValues(a.x,a.y,0===this.valueType?a.z:a.m)};b.prototype.fromArray=function(a){return h.vec3f64.fromValues(a[0],a[1],a[2]||0)};b.prototype.toArray=function(a){return[a[0],a[1],a[2]]};b.prototype.toPoint=function(a,b){b.x=a[0];b.y=a[1];0===this.valueType?(b.z=a[2],b.hasZ=!0,b.hasM=!1):(b.m=a[2],b.hasZ=!1,b.hasM=!0);b.spatialReference=
this.spatialReference;return b};b.prototype.createPoint=function(a){return new c.Point({x:a[0],y:a[1],z:0===this.valueType?a[2]:void 0,m:1===this.valueType?a[2]:void 0,spatialReference:this.spatialReference})};b.prototype.createPointFromArray=function(a){return new c.Point({x:a[0],y:a[1],z:0===this.valueType?a[2]:void 0,m:1===this.valueType?a[2]:void 0,spatialReference:this.spatialReference})};b.prototype.lerp=function(a,b,d,c){return u.vec3.lerp(c,a,b,d)};b.prototype.addDelta=function(a,b,d,c){a[0]+=
b;a[1]+=d;0===this.valueType&&(a[2]+=c)};b.prototype.pointToArray=function(a){return 0===this.valueType?[a.x,a.y,a.z]:[a.x,a.y,a.m]};b.prototype.zFromArray=function(a){return 0===this.valueType?a[2]:void 0};b.prototype.hasZ=function(){return 0===this.valueType};b.prototype.unnormalize=function(a){l(a,this._unnormalizationInfo)};return b}();f.CoordinateHelper3D=p;var r=function(){function b(a,b){this.spatialReference=a;this._unnormalizationInfo=n(a,b)}b.prototype.createNew=function(){return k.vec4f64.create()};
b.prototype.fromPoint=function(a){return k.vec4f64.fromValues(a.x,a.y,a.z,a.m)};b.prototype.fromArray=function(a){return k.vec4f64.fromValues(a[0],a[1],a[2]||0,a[3]||0)};b.prototype.toArray=function(a){return[a[0],a[1],a[2],a[3]]};b.prototype.toPoint=function(a,b){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.hasZ=!0;b.hasM=!0;b.spatialReference=this.spatialReference;return b};b.prototype.createPoint=function(a){return new c.Point({x:a[0],y:a[1],z:a[2],m:a[3],spatialReference:this.spatialReference})};b.prototype.createPointFromArray=
function(a){return new c.Point({x:a[0],y:a[1],z:a[2],m:a[3],spatialReference:this.spatialReference})};b.prototype.lerp=function(a,b,c,e){return v.vec4.lerp(e,a,b,c)};b.prototype.addDelta=function(a,b,c,e){a[0]+=b;a[1]+=c;a[2]+=e};b.prototype.pointToArray=function(a){return[a.x,a.y,a.z,a.m]};b.prototype.zFromArray=function(a){return a[2]};b.prototype.hasZ=function(){return!0};b.prototype.unnormalize=function(a){l(a,this._unnormalizationInfo)};return b}();f.CoordinateHelper4D=r;f.createCoordinateHelper=
function(b,a,c,d){return b&&a?new r(c,d):a?new p(1,c,d):b?new p(0,c,d):new q(c,d)}});