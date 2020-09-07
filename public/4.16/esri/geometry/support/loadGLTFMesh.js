// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/maybe ../../core/libs/gl-matrix-2/mat3 ../../core/libs/gl-matrix-2/mat3f64 ../../core/libs/gl-matrix-2/vec3f64 ../../core/libs/gl-matrix-2/vec4f64 ./MeshMaterialMetallicRoughness ./MeshTexture ./meshUtils/georeference ../../views/3d/glTF/DefaultLoadingContext ../../views/3d/glTF/loader ../../views/3d/glTF/internal/indexUtils ../../views/3d/support/buffer/BufferView ../../views/3d/support/buffer/math ../../views/3d/support/buffer/utils ../../views/3d/webgl-engine/materials/DefaultMaterial".split(" "),
function(M,u,n,b,v,w,y,z,A,B,C,D,E,q,d,e,f,F){function G(a,g){var c=H(a.color,a.opacity),d=a.emissiveFactor?I(a.emissiveFactor):null,f=b.unwrap(b.applySome(a.textureColor,function(a){return g.get(a)})),r=b.unwrap(b.applySome(a.textureNormal,function(a){return g.get(a)})),e=b.unwrap(b.applySome(a.textureEmissive,function(a){return g.get(a)})),t=b.unwrap(b.applySome(a.textureOcclusion,function(a){return g.get(a)})),k;a:{switch(a.alphaMode){case "OPAQUE":k="opaque";break a;case "MASK":k="mask";break a;
case "BLEND":k="blend";break a}k=void 0}a={color:c,colorTexture:f,normalTexture:r,emissiveColor:d,emissiveTexture:e,occlusionTexture:t,alphaMode:k,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,metallic:a.metallicFactor,roughness:a.roughnessFactor,metallicRoughnessTexture:b.unwrap(b.applySome(a.textureMetallicRoughness,function(a){return g.get(a)}))};return new A(a)}function J(a,g,c,m){var p=f.createBuffer(d.BufferViewVec3f64,c.attributes.position.count);e.vec3.transformMat4(p,c.attributes.position,
c.transform);var r=b.applySome(c.attributes.normal,function(a){var h=f.createBuffer(d.BufferViewVec3f,a.count),b=v.mat3.normalFromMat4(w.mat3f64.create(),c.transform);e.vec3.transformMat3(h,a,b);return h.typedBuffer}),l=b.applySome(c.attributes.tangent,function(a){var h=f.createBuffer(d.BufferViewVec4f,a.count),b=v.mat3.normalFromMat4(w.mat3f64.create(),c.transform);e.vec4.transformMat3(h,a,b);return h.typedBuffer}),t=b.applySome(c.attributes.texCoord0,function(a){var h=f.createBuffer(d.BufferViewVec2f,
a.count);f.vec2.normalizeIntegerBuffer(h,a);return h.typedBuffer}),k=b.applySome(c.attributes.color,function(a){var b=f.createBuffer(d.BufferViewVec4u8,a.count);if(4===a.elementCount)a instanceof d.BufferViewVec4f?e.vec4.scale(b,a,255):a instanceof d.BufferViewVec4u8?f.vec4.copy(b,a):a instanceof d.BufferViewVec4u16&&e.vec4.shiftRight(b,a,8);else{f.vec4.fill(b,255,255,255,255);var c=new d.BufferViewVec3u8(b.buffer,0,4);a instanceof d.BufferViewVec3f?e.vec3.scale(c,a,255):a instanceof d.BufferViewVec3u8?
f.vec3.copy(c,a):a instanceof d.BufferViewVec3u16&&e.vec3.shiftRight(c,a,8)}return b.typedBuffer});m=C.georeference({position:p.typedBuffer,normal:b.unwrap(r),tangent:b.unwrap(l)},a,n.__assign(n.__assign({},m),{unit:"meters"}));p=K(c.indices||c.attributes.position.count,c.primitiveType);return{vertexAttributes:{position:m.position,normal:m.normal,tangent:m.tangent,uv:b.unwrap(t),color:b.unwrap(k)},components:[{faces:p,material:g.get(c.material),trustSourceNormals:!0}],spatialReference:a.spatialReference}}
function K(a,b){switch(b){case 4:return q.trianglesToTriangles(a);case 5:return q.triangleStripToTriangles(a);case 6:return q.triangleFanToTriangles(a)}}function L(a){return{horizontal:x(a.s),vertical:x(a.t)}}function x(a){switch(a){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function l(a){return 255*Math.pow(a,1/F.COLOR_GAMMA)}function H(a,b){return z.vec4f64.fromValues(l(a[0]),l(a[1]),l(a[2]),b)}function I(a){return y.vec3f64.fromValues(l(a[0]),l(a[1]),l(a[2]))}
Object.defineProperty(u,"__esModule",{value:!0});u.loadGLTFMesh=function(a,b,c){return n.__awaiter(this,void 0,void 0,function(){var d,f,e,l,g,k;return n.__generator(this,function(h){switch(h.label){case 0:return d=new D.DefaultLoadingContext,[4,E.load(d,b,c)];case 1:return f=h.sent(),e=f.model,l=e.lods.shift(),g=new Map,k=new Map,e.textures.forEach(function(a,b){return g.set(b,new B({data:a.data,wrap:L(a.parameters.wrap)}))}),e.materials.forEach(function(a,b){return k.set(b,G(a,g))}),[2,l.parts.map(function(b){return J(a,
k,b,c)})]}})})}});