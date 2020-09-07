// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/libs/gl-matrix-2/common ../../core/libs/gl-matrix-2/mat2d ../../core/libs/gl-matrix-2/mat2df32 ../../core/libs/gl-matrix-2/mat2df64 ../../core/libs/gl-matrix-2/mat3 ../../core/libs/gl-matrix-2/mat3f32 ../../core/libs/gl-matrix-2/vec2 ../../core/libs/gl-matrix-2/vec2f32 ../../core/libs/gl-matrix-2/vec2f64 ../../core/libs/gl-matrix-2/types/vec2 ./viewpointUtils".split(" "),
function(D,E,f,u,v,y,m,z,n,A,p,l,q,h,w,B,r,k){var e=[0,0];return function(x){function b(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a=x.apply(this,a)||this;a._viewpoint2D={center:B.vec2f64.create(),rotation:0,scale:0,spatialReference:null};a.center=[0,0];a.extent=new u.Extent;a.id=0;a.inverseTransform=p.mat2df64.create();a.resolution=0;a.rotation=0;a.scale=0;a.transform=p.mat2df64.create();a.transformNoRotation=p.mat2df64.create();a.displayMat3=q.mat3f32.create();a.displayViewMat3=
q.mat3f32.create();a.viewMat3=q.mat3f32.create();a.viewMat2d=A.mat2df32.create();a.worldScreenWidth=0;a.size=[0,0];return a}f.__extends(b,x);t=b;Object.defineProperty(b.prototype,"pixelRatio",{set:function(a){this._set("pixelRatio",a);this._update()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{set:function(a){this._set("size",a);this._update()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewpoint",{set:function(a){if(a){var c=this._viewpoint2D,
d=a.targetGeometry;c.center[0]=d.x;c.center[1]=d.y;c.rotation=a.rotation;c.scale=a.scale;c.spatialReference=d.spatialReference}this._update()},enumerable:!0,configurable:!0});b.prototype.copy=function(a){var c=this.size,d=this.viewpoint;d&&c?(this.viewpoint=k.copy(d,a.viewpoint),this._set("size",h.vec2.copy(c,a.size))):(this.viewpoint=a.viewpoint.clone(),this._set("size",[a.size[0],a.size[1]]));this._set("pixelRatio",a.pixelRatio);return this};b.prototype.clone=function(){return new t({size:this.size,
viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})};b.prototype.toMap=function(a,c,d){if(r.isVec2(c))return h.vec2.transformMat2d(a,c,this.inverseTransform);e[0]=c;e[1]=d;return h.vec2.transformMat2d(a,e,this.inverseTransform)};b.prototype.toScreen=function(a,c,d){if(r.isVec2(c))return h.vec2.transformMat2d(a,c,this.transform);e[0]=c;e[1]=d;return h.vec2.transformMat2d(a,e,this.transform)};b.prototype.toScreenNoRotation=function(a,c,d){if(r.isVec2(c))return h.vec2.transformMat2d(a,c,this.transformNoRotation);
e[0]=c;e[1]=d;return h.vec2.transformMat2d(a,e,this.transformNoRotation)};b.prototype.getScreenTransform=function(a,c){var d=this._viewpoint2D.center,C=this._get("pixelRatio")||1,b=this._get("size");k.getMatrix(a,d,b,c,0,C);return a};b.prototype._update=function(){var a=this._viewpoint2D,c=a.center,d=a.spatialReference,b=a.scale,e=a.rotation,a=this._get("pixelRatio")||1,g=this._get("size"),f=new v({targetGeometry:new u.Point(c[0],c[1],d),scale:b,rotation:e});this._set("viewpoint",f);if(g&&d&&b)return this.resolution=
k.getResolution(f),this.rotation=e,this.scale=b,this.spatialReference=d,h.vec2.copy(this.center,c),l.mat3.set(this.displayMat3,0!==g[0]?2/g[0]:0,0,0,0,0!==g[1]?-2/g[1]:0,0,-1,1,1),b=l.mat3.identity(this.viewMat3),c=w.vec2f32.fromValues(g[0]/2,g[1]/2),d=w.vec2f32.fromValues(-g[0]/2,-g[1]/2),e=z.common.toRadian(e),l.mat3.translate(b,b,c),l.mat3.rotate(b,b,e),l.mat3.translate(b,b,d),l.mat3.multiply(this.displayViewMat3,this.displayMat3,b),b=n.mat2d.identity(this.viewMat2d),n.mat2d.translate(b,b,c),n.mat2d.rotate(b,
b,e),n.mat2d.translate(b,b,d),k.getExtent(this.extent,f,g),k.getTransform(this.transform,f,g,a),n.mat2d.invert(this.inverseTransform,this.transform),k.getTransformNoRotation(this.transformNoRotation,f,g,a),this.worldScreenWidth=k.getWorldScreenWidth(this.spatialReference,this.resolution),this._set("id",this.id+1),this};var t;f.__decorate([m.property({readOnly:!0})],b.prototype,"id",void 0);f.__decorate([m.property({value:1,json:{write:!0}})],b.prototype,"pixelRatio",null);f.__decorate([m.property({json:{write:!0}})],
b.prototype,"size",null);f.__decorate([m.property({type:v,json:{write:!0}})],b.prototype,"viewpoint",null);return b=t=f.__decorate([m.subclass("esri.views.2d.ViewState")],b)}(y.JSONSupport)});