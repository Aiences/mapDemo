// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Error ../../../../core/maybe ../../../../core/libs/earcut/earcut ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../renderers/support/renderingInfoUtils ./elevationAlignmentUtils ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./polygonUtils ../support/edgeUtils ../../support/projectionUtils ../../support/buffer/BufferView ../../support/buffer/math/vec3 ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Util ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(O,R,S,ja,L,ka,la,ma,V,P,A,q,Q,na,oa,pa,W,qa,ra,sa,X,Y,ta,ua,Z,aa,va,wa,xa,B,ya){function za(e,c,a,b,f,d,g,t,x,v,E,k,l,q){var y=a.length/3,m=0;E+=2*b.count;var h=b.index,z=b.count,n=x,u=E;A.vec3.copy(r,l);var p=0<k?1:-1,h=3*h,T=n;l=3*T;for(var C=n+z,n=3*C,D=0;D<z;++D)q&&(r[0]=e[h+0],r[1]=e[h+1],r[2]=e[h+2],A.vec3.normalize(r,r)),f[l+0]=e[h+0],f[l+1]=e[h+1],f[l+2]=e[h+2],d[l+0]=c[h+0],d[l+1]=c[h+1],d[l+2]=c[h+2],g[l+0]=-p*r[0],g[l+1]=-p*r[1],g[l+2]=-p*r[2],t[T]=0,f[n+0]=e[h+0]+k*r[0],f[n+1]=
e[h+1]+k*r[1],f[n+2]=e[h+2]+k*r[2],d[n+0]=c[h+0],d[n+1]=c[h+1],d[n+2]=c[h+2],g[n+0]=p*r[0],g[n+1]=p*r[1],g[n+2]=p*r[2],t[C]=k,l+=3,n+=3,h+=3,T+=1,C+=1;h=0;l=3*u;n=3*(u+y);l=3*(u+y);n=3*u;e=ba;c=ca;0>k&&(e=ca,c=ba);for(D=0;D<y;++D)v[l+0]=a[h+e[0]],v[l+1]=a[h+e[1]],v[l+2]=a[h+e[2]],v[n+0]=a[h+c[0]]+z,v[n+1]=a[h+c[1]]+z,v[n+2]=a[h+c[2]]+z,l+=3,n+=3,h+=3;x+=2*b.count;E=E+2*y-(2*b.count+2*y);da(f,d,t,g,m,b.pathLengths[0],b.count,x,v,E,k);x+=4*b.pathLengths[0];E+=2*b.pathLengths[0];m+=b.pathLengths[0];
for(a=1;a<b.pathLengths.length;++a)da(f,d,t,g,m,b.pathLengths[a],b.count,x,v,E,k),x+=4*b.pathLengths[a],E+=2*b.pathLengths[a],m+=b.pathLengths[a]}function M(e,c,a,b,f,d,g){b[d]=b[g];g*=3;d*=3;e[d+0]=e[g+0];e[d+1]=e[g+1];e[d+2]=e[g+2];c[d+0]=c[g+0];c[d+1]=c[g+1];c[d+2]=c[g+2];a[d+0]=f[0];a[d+1]=f[1];a[d+2]=f[2]}function da(e,c,a,b,f,d,g,t,x,v,E){var k=f,l=f+1,r=f+g,y=f+g+1,m=t,h=t+1,z=t+2*d;t=t+2*d+1;0>E&&(k=f+g+1,y=f);v*=3;for(var n=0;n<d;++n){n===d-1&&(0<E?(l=f,y=f+g):(l=f,k=f+g));var u=e,p=k,q=
l,C=r,D=G,p=3*p,q=3*q,C=3*C;A.vec3.set(U,u[p++],u[p++],u[p++]);A.vec3.set(ea,u[q++],u[q++],u[q++]);A.vec3.set(fa,u[C++],u[C++],u[C++]);A.vec3.subtract(ga,ea,U);A.vec3.subtract(ha,fa,U);A.vec3.cross(D,ha,ga);A.vec3.normalize(D,D);M(e,c,b,a,G,m,k);M(e,c,b,a,G,h,l);M(e,c,b,a,G,z,r);M(e,c,b,a,G,t,y);x[v++]=m;x[v++]=z;x[v++]=t;x[v++]=m;x[v++]=t;x[v++]=h;k++;l++;r++;y++;m+=2;h+=2;z+=2;t+=2}}function Aa(e,c,a,b){e=e.stageObject;H.spatialReference=a.spatialReference;for(var f=e.geometryRecords,d=f.length,
g="absolute-height"!==c.mode,t=0,x=e.objectTransformation,v=V.mat4.invert(P.mat4f64.create(),x),q=0;q<d;q++){var k=f[q].geometry;k.invalidateBoundingInfo();for(var l=k.data.getVertexAttr(),k=l[B.VertexAttrConstants.POSITION].data,r=l[B.VertexAttrConstants.SIZE].data,l=l.mapPos.data,y=k.length/3,m=0,h=0,z=!1,n=0,u=0;u<y;u++){H.x=l[h];H.y=l[h+1];H.z=l[h+2];F[0]=k[m];F[1]=k[m+1];F[2]=k[m+2];var p=pa.evaluateElevationAlignmentAtPoint(H,a,c,b,g?ia:null);g&&(n+=ia.sampledElevation);A.vec3.set(w,k[m+0],
k[m+1],k[m+2]);A.vec3.transformMat4(w,w,x);b.setAltitude(p+r[m/3],w);A.vec3.transformMat4(w,w,v);k[m]=w[0];k[m+1]=w[1];k[m+2]=w[2];p=.01/b.unitInMeters;if(Math.abs(F[0]-k[m])>p||Math.abs(F[1]-k[m+1])>p||Math.abs(F[2]-k[m+2])>p)z=!0;h+=3;m+=3}z&&e.geometryVertexAttrsUpdated(q);t+=n/y}return t/d}Object.defineProperty(R,"__esModule",{value:!0});O=function(e){function c(a,b,f,d){a=e.call(this,a,b,f,d)||this;a.ensureDrapedStatus(!1);return a}S.__extends(c,e);c.prototype.doLoad=function(){return S.__awaiter(this,
void 0,void 0,function(){var a,b,f,d,g,c;return S.__generator(this,function(e){if(!this._drivenProperties.size&&(a=X.validateSymbolLayerSize(this._getSymbolSize())))throw new ja("graphics3dextrudesymbollayer:invalid-size",a);b=L.get(this.symbolLayer,"material","color");f=this._getCombinedOpacityAndColor(b);d=q.vec3f64.fromArray(f);g=f[3];c={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:d,ambient:d,opacity:g,transparent:1>g||this.needsDrivenTransparentPass,vertexColors:!0,
slicePlaneEnabled:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!0};this._material=new ya(c,this._getIdHint("_3dlinemat"));this._context.stage.add(3,this._material);return[2]})})};c.prototype.destroy=function(){e.prototype.destroy.call(this);this._material&&this._context.stage.remove(3,this._material.id)};c.prototype.createGraphics3DGraphic=function(a){var b=a.graphic;if(!this._validateGeometryType(b.geometry,c.validGeometryTypes,this.symbolLayer.type)||
!this._validateGeometry(b.geometry))return null;var f="graphic"+b.uid,d=this._getVertexOpacityAndColor(a.renderingInfo,Float32Array,255),g=this.setGraphicElevationContext(b,new qa.ElevationContext);return this._createAs3DShape(b,a.renderingInfo,d,g,f,b.uid)};c.prototype.layerOpacityChanged=function(a,b){var c=this,d=L.get(this.symbolLayer,"material","color"),d=this._getCombinedOpacity(d);this._material.setParameterValues({opacity:d,transparent:1>d||this.needsDrivenTransparentPass});var g=this._getLayerOpacity();
a.forEach(function(a){a=b(a);L.isSome(a)&&a.layerOpacityChanged(g,c._context.isAsync)});return!0};c.prototype.layerElevationInfoChanged=function(a,b){return this.updateGraphics3DGraphicElevationInfo(a,b,W.needsElevationUpdates3D)};c.prototype.slicePlaneEnabledChanged=function(a,b){var c=this;this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});a.forEach(function(a){a=b(a);L.isSome(a)&&a.slicePlaneEnabledChanged(c._context.slicePlaneEnabled,c._context.isAsync)});return!0};
c.prototype.physicalBasedRenderingChanged=function(){this._material.setParameterValues({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});return!0};c.prototype.pixelRatioChanged=function(){return!0};c.prototype._getExtrusionSize=function(a){var b;a=a.size&&this._drivenProperties.size?null!==(b=oa.getDriverAxisSizeValue(a.size,2))&&void 0!==b?b:0:this._getSymbolSize();return a/=this._context.renderCoordsHelper.unitInMeters};c.prototype._getSymbolSize=function(){var a;return null!==
(a=this.symbolLayer.size)&&void 0!==a?a:1};c.prototype._createAs3DShape=function(a,b,c,d,g,e){var f=Y.geometryAsPolygon(a.geometry);if(L.isNone(f))return null;a=[];var t=[],r=[],k=Q.create(),l="global"===this._context.renderCoordsHelper.type,A=this._getExtrusionSize(b),y=q.vec3f64.create();l||this._context.renderCoordsHelper.worldUpAtPosition(null,y);b=Y.geometryToRenderInfo(f,this._context.elevationProvider,this._context.renderCoordsHelper,d);this._logGeometryCreationWarnings(b,f.rings,"rings","ExtrudeSymbol3DLayer");
if(0===f.rings.length||!f.rings.some(function(a){return 0<a.length}))return null;var m=X.computeCentroid(f);if(L.isNone(m))return null;var h=P.mat4f64.create();ua.computeLinearTransformation(f.spatialReference,[m.x,m.y,0],h,this._context.renderCoordsHelper.spatialReference);f=P.mat4f64.create();V.mat4.invert(f,h);m=ma.mat3f64.create();la.mat3.normalFromMat4(m,f);for(var z=b.polygons,n=b.mapPosition,u=b.position,p=u.length/3,B=new Float64Array(18*p),C=new Float64Array(18*p),D=new Float64Array(18*p),
p=new Float64Array(6*p),w=0,F=0;F<z.length;++F){var I=z[F],G=I.count;if(this._context.clippingExtent&&(Q.empty(k),Q.expandWithBuffer(k,I.mapPosition),!Q.intersectsClippingArea(k,this._context.clippingExtent)))continue;var H=ka.earcut(I.mapPosition,I.holeIndices,3);if(0!==H.length){var M=new Uint32Array(6*G+2*H.length),N=6*G,J=3*B.BYTES_PER_ELEMENT,J=new Z.BufferViewVec3f64(B.buffer,w*J,J,(w+N)*J),K=3*C.BYTES_PER_ELEMENT,K=new Z.BufferViewVec3f64(C.buffer,w*K,K,(w+N)*K),O=new Float64Array(D.buffer,
3*w*D.BYTES_PER_ELEMENT,3*N),N=new Float64Array(p.buffer,1*w*p.BYTES_PER_ELEMENT,1*N);za(u,n,H,I,J.typedBuffer,O,K.typedBuffer,N,0,M,0,A,y,l);aa.transformMat4(J,J,f);aa.transformMat3(K,K,m);w+=6*G;I=this._createExtrudeGeometry(M,{positions:J.typedBuffer,elevation:O,normals:K.typedBuffer,heights:N},c);I=new va(I,g+"path"+F);a.push(I);t.push(this._material);r.push(P.mat4f64.IDENTITY)}}if(0===a.length)return null;c=new xa({geometries:a,materials:t,transformations:r,castShadow:!0,metadata:{layerUid:this._context.layer.uid,
graphicUid:e,isElevationSource:!0},idHint:g});c.objectTransformation=h;g=this._createEdgeMaterial();g=L.isSome(g)?{baseMaterial:this._material,edgeMaterials:[g],slicePlaneEnabled:this._context.slicePlaneEnabled}:null;a=new ra(this,c,a,null,null,Aa,d,g);a.alignedSampledElevation=b.sampledElevation;a.needsElevationUpdates=W.needsElevationUpdates3D(d.mode);return a};c.prototype._createExtrudeGeometry=function(a,b,c){for(var d=a.length,f=new Uint32Array(d),e=0;e<d;e++)f[e]=0;d={};e={};d[B.VertexAttrConstants.POSITION]=
a;d[B.VertexAttrConstants.NORMAL]=a;d[B.VertexAttrConstants.COLOR]=f;e[B.VertexAttrConstants.POSITION]={size:3,data:b.positions};e[B.VertexAttrConstants.NORMAL]={size:3,data:b.normals};e[B.VertexAttrConstants.COLOR]={size:4,data:c};e[B.VertexAttrConstants.SIZE]={size:1,data:b.heights};b.elevation&&(e.mapPos={size:3,data:b.elevation},d.mapPos=a);return new wa.GeometryData(e,d)};c.prototype._createEdgeMaterial=function(){var a={opacity:this._getLayerOpacity()};return ta.createMaterial(this.symbolLayer,
a)};c.validGeometryTypes=["polygon","extent"];return c}(sa.default);R.Graphics3DExtrudeSymbolLayer=O;var G=q.vec3f64.create(),U=q.vec3f64.create(),ea=q.vec3f64.create(),fa=q.vec3f64.create(),ga=q.vec3f64.create(),ha=q.vec3f64.create(),F=q.vec3f64.create(),w=q.vec3f64.create(),r=q.vec3f64.create(),ba=[0,2,1],ca=[0,1,2],H=na.makeDehydratedPoint(0,0,0,null),ia={verticalDistanceToGround:0,sampledElevation:0};R.default=O});