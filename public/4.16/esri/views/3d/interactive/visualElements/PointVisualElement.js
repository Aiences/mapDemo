// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ./VisualElementResources ../../layers/graphics/elevationAlignmentUtils ../../layers/graphics/ElevationContext ../../layers/graphics/sdfPrimitives ../../support/projectionUtils ../../support/stack ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Texture ../../webgl-engine/lib/Util ../../webgl-engine/materials/HUDMaterial".split(" "),
function(h,k,l,d,r,t,g,m,u,v,w,x,y,n,p,z,A,B,C,D){Object.defineProperty(k,"__esModule",{value:!0});h=function(){function b(a){var b=this;this._geometry=this.view=null;this._size=3;this._color=m.vec4f64.fromValues(1,0,1,1);this._primitive="square";this._outlineSize=1;this._outlineColor=m.vec4f64.fromValues(1,1,1,1);this._elevationInfo=null;this.resources=new v.VisualElementResources({view:a.view,createResources:function(a){return b.createResources(a)},recreateGeometry:function(a,c){a.geometry=b.recreateGeometry(c,
a.material);return d.isSome(a.geometry)?[a.geometry]:[]}});var c=!0,e;for(e in a)e in this?"attached"===e?c=a[e]:this[e]=a[e]:console.error("Cannot set unknown property",e);this.attached=c}b.prototype.destroy=function(){this.resources.destroy()};Object.defineProperty(b.prototype,"hidden",{get:function(){return this.resources.hidden},set:function(a){this.resources.hidden=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"attached",{get:function(){return this.resources.attached},
set:function(a){this.resources.attached=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"geometry",{get:function(){return this._geometry},set:function(a){this._geometry=a;this.resources.recreateGeometry()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return this._size},set:function(a){if(a!==this._size){var b=this.preferredTextureSize;this._size=a;b<this.preferredTextureSize?d.isSome(this.resources)&&this.resources.recreate():this.updateSizeAttribute()}},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"color",{get:function(){return this._color},set:function(a){g.vec4.exactEquals(a,this._color)||(g.vec4.copy(this._color,a),this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"primitive",{get:function(){return this._primitive},set:function(a){this._primitive!==a&&(this._primitive=a,d.isSome(this.resources)&&this.resources.recreate())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"outlineSize",{get:function(){return this._outlineSize},set:function(a){a!==this._outlineSize&&(this._outlineSize=a,this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"outlineColor",{get:function(){return this._outlineColor},set:function(a){g.vec4.exactEquals(a,this._outlineColor)||(g.vec4.copy(this._outlineColor,a),this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"elevationInfo",{get:function(){return this._elevationInfo},
set:function(a){this._elevationInfo=a;this.resources&&this.resources.recreateGeometry()},enumerable:!0,configurable:!0});b.prototype.updateMaterial=function(){var a=this.resources.resources;d.isNone(a)||a.material.setParameterValues(this.materialParameters(a.texture.id))};b.prototype.updateSizeAttribute=function(){var a=this.resources.resources,b=this.resources.object;if(!d.isNone(a)&&!d.isNone(b)&&(a=a.geometry,!d.isNone(a))){var a=a.data.getVertexAttr()[C.VertexAttrConstants.SIZE].data,c=this.geometrySize;
a[0]=c;a[1]=c;b.geometryVertexAttrsUpdated(0)}};b.prototype.materialParameters=function(a){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:E,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:a,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1}};Object.defineProperty(b.prototype,"geometrySize",{get:function(){return this._size/f},enumerable:!0,configurable:!0});b.prototype.recreateGeometry=function(a,
b){var c=this.createRenderGeometry();d.isSome(c)&&a.addGeometry(c,b);return c};b.prototype.createResources=function(a){var b=this.createTexture(),c=new D.default(this.materialParameters(b.id),"pointVisualElement");c.renderOccluded=8;a=this.recreateGeometry(a,c);return{material:c,texture:b,geometry:a,forEach:function(a){a(b);a(c);d.isSome(this.geometry)&&a(this.geometry)}}};Object.defineProperty(b.prototype,"preferredTextureSize",{get:function(){return l.clamp(l.nextHighestPowerOfTwo(2*this.geometrySize),
16,128)},enumerable:!0,configurable:!0});b.prototype.createTexture=function(){var a=this.preferredTextureSize;return new B(y.createType(this._primitive,a,a*f),"pointVisualElement",{mipmap:!1,wrap:{s:33071,t:33071},width:a,height:a,components:4,noUnpackFlip:!0})};b.prototype.calculateMapBounds=function(a){if(d.isNone(this.resources.resources)||d.isNone(this.resources.resources.geometry))return!1;var b=this.resources.resources.geometry.data.getAttribute("position");n.vectorToVector(b.data,this.view.renderCoordsHelper.spatialReference,
q,this.view.spatialReference);u.expandWithBuffer(a,q);return!0};b.prototype.createRenderGeometry=function(){var a=this.geometry;if(d.isNone(a))return null;var b=this.view.renderCoordsHelper,c=w.evaluateElevationAlignmentAtPoint(a,this.view.elevationProvider,x.ElevationContext.fromElevationInfo(this.elevationInfo),b),e=r.vec3.set(p.sv3d.get(),a.x,a.y,c),c=p.sv3d.get();n.vectorToVector(e,a.spatialReference,c,b.spatialReference);a=this.geometrySize;a=A.createPointGeometry(null,c,null,[a,a],[0,0,0,1]);
return new z(a)};return b}();k.PointVisualElement=h;var f=.5,E=[f/2,f/2,1-f/2,1-f/2],q=t.vec3f64.create()});