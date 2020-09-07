// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Color ../../../../symbols ../../../../core/asyncUtils ../../../../core/compilerUtils ../../../../core/Error ../../../../core/has ../../../../core/lang ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/urlUtils ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../support/arcadeOnDemand ../../../../symbols/cim/CIMSymbolRasterizer ../../../../symbols/support/IconSymbol3DLayerResource ../../../../symbols/support/utils ../../../2d/arcade/utils ./constants ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./pointUtils ./sdfPrimitives ../support/FastSymbolUpdates ../../support/projectionUtils ../../terrain/OverlayRenderer ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/HUDMaterial".split(" "),
function(q,y,k,K,L,M,N,z,O,P,f,E,u,F,Q,A,p,R,S,T,U,V,W,X,Y,Z,r,aa,ba,ca,da,w,B,t,x,ea,fa,ga,G,ha,H,I){function C(k){return f.isSome(k)?"cross"===k||"x"===k:!1}Object.defineProperty(y,"__esModule",{value:!0});var ia=Q.mat4f64.create(),J=p.vec3f64.fromValues(0,0,1),ja=[.25,.25,.75,.75],ka=[64,64];q=function(q){function d(a,b,c,e){a=q.call(this,a,b,c,e)||this;a._cimLayers=null;a._cimSymbolMaterials=new Map;a._cimSymbolTextures=new Map;a._cimMaterialParametersInfo=null;a._cimRequiredFields=null;a._cimScaleFactorOrFunction=
null;a._size=null;a._symbolTextureRatio=1;a._outlineSize=0;a._texture=null;a._releaseTexture=null;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0};return a}k.__extends(d,q);d.prototype.getCachedSize=function(){return{size:this._getIconSize()}};d.prototype.doLoad=function(a){return k.__awaiter(this,void 0,void 0,function(){var b,c,e,d;return k.__generator(this,function(g){switch(g.label){case 0:this._validateOrThrow();b=this._prepareMaterialParameters();c=this._getPrimitive();
if(!f.isSome(c))return[3,1];this._prepareResourcesPrimitive(b,c);return[3,5];case 1:return e=W.getIconHref(this.symbol,this.symbolLayer),(d=F.dataComponents(e))&&"application/json"===d.mediaType?[4,this._prepareResourcesCIM(b,JSON.parse(d.data),a)]:[3,3];case 2:return g.sent(),[3,5];case 3:return[4,this._prepareResourcesHref(b,e,a)];case 4:g.sent(),g.label=5;case 5:return[2]}})})};d.prototype._validateOrThrow=function(){if(!this._drivenProperties.size){var a=w.validateSymbolLayerSize(this._getIconSize());
if(a)throw new z("graphics3diconsymbollayer:invalid-size",a);}};d.prototype._getIconSize=function(){var a=this.symbolLayer,a=Math.round(null!=a.size?u.pt2px(a.size):16);return this._drivenProperties.size?Math.max(a,64):a};d.prototype._generateTextureCIM=function(a){var b=this._getGraphicHash(a),c=""===b?null:this._cimSymbolTextures.get(b);c||(a=this._context.sharedResources.cimSymbolRasterizer.rasterizeCIMSymbol(this._cimLayers,a,"esriGeometryPoint",{scaleFactor:this._cimScaleFactorOrFunction},null,
null),this._cimMaterialParametersInfo.anchorPos=this._getAnchorPos("relative",a.anchorPosition),c=new H(a.imageData,"symbol",{width:a.imageData.width,height:a.imageData.height,powerOfTwoResizeMode:2}),this._cimSymbolTextures.set(b,c),this._context.stage.add(4,c));return c};d.prototype._computeSize=function(a,b){a=a.width/a.height;return 1<a?[b,Math.round(b/a)]:[Math.round(b*a),b]};d.prototype._prepareMaterialParameters=function(){var a={anchorPos:this._getAnchorPos(this.symbolLayer.anchor,this.symbolLayer.anchorPosition)},
b=this.symbol;if(b&&"point-3d"===b.type&&b.hasVisibleVerticalOffset()){var b=b.verticalOffset,c=b.minWorldLength,e=b.maxWorldLength;a.verticalOffset={screenLength:u.pt2px(b.screenLength),minWorldLength:c||0,maxWorldLength:null!=e?e:Infinity}}this._context.screenSizePerspectiveEnabled&&(a.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);a.occlusionTest=!0;a.slicePlaneEnabled=this._context.slicePlaneEnabled;return a};d.prototype._prepareResourcesPrimitive=function(a,
b){var c=this,e=this._getOutlineSize();if(C(b)&&0===e)throw Error("Nothing to render");this._outlineSize=e;a.color=this._getFillColor();a.outlineColor=this._getOutlineColor();a.outlineSize=this._outlineSize;var d=this._context.sharedResources.textures.fromData(b,function(){var a;switch(b){case "circle":a=t.createCircle(128,64);break;case "square":a=t.createSquare(128,64);break;case "kite":a=t.createKite(128,64);break;case "cross":a=t.createCross(128,64);break;case "x":a=t.createX(128,64);break;case "triangle":a=
t.createTriangle(128,64);break;default:N.neverReached(b)}return new H(a,"sdf_"+b,{mipmap:!1,wrap:{s:33071,t:33071},width:128,height:128,components:4,noUnpackFlip:!0})});this._texture=d.texture;this._releaseTexture=function(){return c._context.sharedResources.textures.release(d.uid)};a.textureIsSignedDistanceField=!0;a.distanceFieldBoundingBox=ja;a.textureId=this._texture.id;e=this._getIconSize();this._size=[e,e];this._symbolTextureRatio=2;this._createMaterialAndAddToStage(a,this._context.stage)};
d.prototype._prepareResourcesHref=function(a,b,c){return k.__awaiter(this,void 0,void 0,function(){var e,d,g,n,m,h,D,v,f=this;return k.__generator(this,function(l){switch(l.label){case 0:if(!O("esri-canvas-svg-support")&&F.isSVG(b))throw e="IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)",new z("graphics3diconsymbollayer:unsupported-image-format",e);this._outlineSize=this._getOutlineSize();a.color=this._getFillColor();a.outlineColor=this._getOutlineColor();a.outlineSize=this._outlineSize;
a.textureIsSignedDistanceField=!1;d=this._getIconSize();g=d*this._context.layerView.view.pixelRatio;return[4,M.result(this._context.sharedResources.textures.fromUrl(b,g,{signal:c}))];case 1:n=l.sent();if(!1===n.ok)throw E.throwIfAbortError(n.error),e="Failed to load (Request for icon resource failed: "+b+")",new z("graphics3diconsymbollayer:request-failed",e);m=n.value;h=m.uid;D=m.texture;this._releaseTexture=function(){return f._context.sharedResources.textures.release(h)};v=D.params;this._size=
this._computeSize(v,d);a.textureId=D.id;this._createMaterialAndAddToStage(a,this._context.stage);return[2]}})})};d.prototype._prepareResourcesCIM=function(a,b,c){return k.__awaiter(this,void 0,void 0,function(){var e,d,g,n,m,h,f,v,q,p,r;return k.__generator(this,function(l){switch(l.label){case 0:return e=new L.CIMSymbol({data:b}),this._context.sharedResources.cimSymbolRasterizer||(this._context.sharedResources.cimSymbolRasterizer=new U.CIMSymbolRasterizer(this._context.renderCoordsHelper.spatialReference,
!0)),d=this._context.layer.fields?this._context.layer.fields.map(function(a){return a.toJSON()}):null,g=this,[4,this._context.sharedResources.cimSymbolRasterizer.analyzeCIMSymbol(e,d,this._context.renderer&&"dictionary"===this._context.renderer.type?this._context.renderer.fieldMap:null,"esriGeometryPoint",{signal:c})];case 1:g._cimLayers=l.sent();if(!this._context.renderer||"dictionary"!==this._context.renderer.type||!this._context.renderer.scaleExpression)return[3,4];h=this._context.renderer;if(!isNaN(h.scaleExpression))return[3,
3];f=h.scaleExpression;return[4,T.createRendererExpression(f,this._context.layer.spatialReference,d)];case 2:return v=l.sent(),m=function(a,b,c){a=X.callWithFeature(v,a,{$view:c},"esriGeometryPoint",b);return null!==a?a:1},[3,4];case 3:n=Number(h.scaleExpression),l.label=4;case 4:this._cimScaleFactorOrFunction=n||m||1;if(this._context.renderer)return[3,5];p=[];return[3,7];case 5:return[4,this._context.renderer.getRequiredFields(this._context.layer.fields)];case 6:p=l.sent(),l.label=7;case 7:return q=
p,E.throwIfAborted(c),r=this._context.layer.fieldsIndex,this._cimRequiredFields=q.map(function(a){return r.get(a).name}),this._cimMaterialParametersInfo=a,this._cimMaterialParametersInfo.color=this._getFillColor(),this._cimMaterialParametersInfo.outlineColor=[0,0,0,0],this._cimMaterialParametersInfo.outlineSize=0,this._cimMaterialParametersInfo.textureIsSignedDistanceField=!1,[2]}})})};d.prototype._getPrimitive=function(){return this.symbolLayer.resource&&this.symbolLayer.resource.href?null:this.symbolLayer.resource&&
this.symbolLayer.resource.primitive||V.defaultPrimitive};d.prototype._getOutlineSize=function(){var a=0,a=this.symbolLayer;if(f.isSome(a.outline)&&null!=a.outline.size)return Math.max(u.pt2px(a.outline.size),0);a=this._getPrimitive();a=C(a)?1.5:0;return Math.max(a,0)};d.prototype._getOutlineColor=function(){var a=this._getLayerOpacity(),b=f.get(this.symbolLayer,"outline","color");if(f.isSome(b)){var c=K.toUnitRGB(b);return[c[0],c[1],c[2],b.a*a]}return[0,0,0,0]};d.prototype._getFillColor=function(){if(C(this._getPrimitive()))return Y.TRANSPARENT_UNIT;
var a=f.isNone(this._getPrimitive()),b=f.get(this.symbolLayer,"material","color");return this._getCombinedOpacityAndColor(b,{hasIntrinsicColor:a})};d.prototype._getAnchorPos=function(a,b){return"relative"===a?A.vec2f64.fromValues((b.x||0)+.5,-(b.y||0)+.5):a in w.namedAnchorToHUDMaterialAnchorPos?w.namedAnchorToHUDMaterialAnchorPos[a]:w.namedAnchorToHUDMaterialAnchorPos.center};d.prototype._createMaterialAndAddToStage=function(a,b){this._fastUpdates=this._cimLayers?{enabled:!1}:x.initFastSymbolUpdatesState(this._context.renderer,
this._fastVisualVariableConvertOptions());this._fastUpdates.enabled&&P.mixin(a,this._fastUpdates.materialParameters);if(this._cimLayers){var c=this._cimSymbolMaterials.get(a.textureId);c||(c=new I.default(a,this._getIdHint("_icon")),this._cimSymbolMaterials.set(a.textureId,c),b.add(3,c));return c}this._material=new I.default(a,this._getIdHint("_icon"));b.add(3,this._material);return this._material};d.prototype._setDrapingDependentMaterialParameters=function(){this.draped&&(this._forEachMaterial(function(a){a.setParameterValues({verticalOffset:null,
screenSizePerspective:null,occlusionTest:!1,slicePlaneEnabled:!1,shaderPolygonOffset:0})}),this.layerOpacityChanged())};d.prototype.destroy=function(){var a=this;q.prototype.destroy.call(this);this._forEachMaterial(function(b){a._context.stage.remove(3,b.id)});f.isSome(this._material)&&(this._material=null);this._cimSymbolMaterials.clear();this._cimSymbolTextures.forEach(function(b){a._context.stage.remove(4,b.id)});this._cimSymbolTextures.clear();this._releaseTexture&&(this._releaseTexture(),this._releaseTexture=
null)};d.prototype._getScaleFactor=function(a,b){if(this._drivenProperties.size&&a.size){for(var c=0;3>c;c++){var e=a.size[c];e&&"symbol-value"!==e&&"proportional"!==e&&(a.size[c]=u.pt2px(e))}if("symbol-value"===a.size[0])return 1;if(isFinite(+a.size[0]))return+a.size[0]/b;if(isFinite(+a.size[2]))return+a.size[2]/b}return 1};d.prototype.createGraphics3DGraphic=function(a){var b=a.renderingInfo,c=a.graphic,e,d;if(this._cimLayers){if(!this._cimLayers.length)return null;var g=this._generateTextureCIM(c);
d=k.__assign({textureId:g.id},this._cimMaterialParametersInfo);d=this._createMaterialAndAddToStage(d,this._context.stage);e=[g.params.width,g.params.height]}else e=this._size,d=f.unwrap(this._material);if(!this._validateGeometry(c.geometry))return null;g=B.placePointOnGeometry(c.geometry);if(f.isNone(g))return this.logger.warn("unsupported geometry type for icon symbol: "+c.geometry.type),null;var n="graphic"+c.uid,m=this._getVertexOpacityAndColor(b),h=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||
(h=this._getScaleFactor(b,e[0]>e[1]?e[0]:e[1]));h*=this._symbolTextureRatio;b=[e[0]*h,e[1]*h];e=this.setGraphicElevationContext(c,new aa.ElevationContext);this.ensureDrapedStatus("on-the-ground"===e.mode)&&this._setDrapingDependentMaterialParameters();return this.draped?this._createAsOverlay(c,g,d,m,b,a.layer.uid):this._createAs3DShape(c,g,d,m,b,e,n,c.uid)};d.prototype.layerOpacityChanged=function(){var a=this._getFillColor(),b=this._getOutlineColor();this._forEachMaterial(function(c){c.setParameterValues({color:a});
c.setParameterValues({outlineColor:b})});return!0};d.prototype.layerElevationInfoChanged=function(a,b,c){var e=this._elevationContext.mode;c=r.elevationModeChangeUpdateType(d.elevationModeChangeTypes,c,e);if(c!==r.SymbolUpdateType.UPDATE)return c;var l=r.needsElevationUpdates2D(e)||"absolute-height"===e;return this.updateGraphics3DGraphicElevationInfo(a,b,function(){return l})};d.prototype.slicePlaneEnabledChanged=function(){var a=this;this.draped||this._forEachMaterial(function(b){b.setParameterValues({slicePlaneEnabled:a._context.slicePlaneEnabled})});
return!0};d.prototype.physicalBasedRenderingChanged=function(){return!0};d.prototype.pixelRatioChanged=function(){return this._getPrimitive()?!0:!1};d.prototype.applyRendererDiff=function(a,b){for(var c in a.diff)switch(c){case "visualVariables":if(x.updateFastSymbolUpdatesState(this._fastUpdates,b,this._fastVisualVariableConvertOptions()))f.isSome(this._material)&&this._material.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};d.prototype._defaultElevationInfoNoZ=
function(){return la};d.prototype._createAs3DShape=function(a,b,c,e,d,g,n,m){var h=this,l=this.getFastUpdateAttrValues(a);a=l?function(a){return x.evaluateModelTransform(h._fastUpdates.materialParameters,l,a)}:null;e=G.createPointGeometry(J,null,e,d,ma,null,l);e=[new ga(e,n)];n=B.createStageObjectForHUD(this._context,b,e,[c],null,null,g,n,this._context.layer.uid,m,a);if(null===n)return null;var f=new ca(this,n.object,e,null,null,Z.perObjectElevationAligner,g);f.alignedSampledElevation=n.sampledElevation;
f.needsElevationUpdates=r.needsElevationUpdates2D(g.mode)||"absolute-height"===g.mode;f.getScreenSize=this._createScreenSizeGetter(d,a);f.calculateRelativeScreenBounds=function(a){return c.calculateRelativeScreenBounds(f.getScreenSize(),1,a)};B.extendPointGraphicElevationContext(f,b,this._context.elevationProvider);return f};d.prototype._createAsOverlay=function(a,b,c,e,d,g){var l=this;c.renderPriority=this._renderPriority;var m=p.vec3f64.create();ea.pointToVector(b,m,this._context.overlaySR);m[2]=
fa.DRAPED_Z;b=this._context.clippingExtent;if(f.isSome(b)&&!S.containsPoint(b,m))return null;var h=this.getFastUpdateAttrValues(a);b=h?function(a){return x.evaluateModelTransform(l._fastUpdates.materialParameters,h,a)}:null;e=G.createPointGeometry(J,m,e,d,null,null,h);e=new ha(e);e.material=c;e.center=m;e.bsRadius=0;e.data.layerUid=g;e.data.graphicUid=a.uid;e.calculateShaderTransformation=b;var k=new ba(this,[e],null);k.getScreenSize=this._createScreenSizeGetter(d,b);k.calculateRelativeScreenBounds=
function(a){return c.calculateRelativeScreenBounds(k.getScreenSize(),1,a)};return k};d.prototype._createScreenSizeGetter=function(a,b){var c=this._outlineSize+2;if(this._fastUpdates.enabled){var e=a[0]/this._symbolTextureRatio,d=a[1]/this._symbolTextureRatio;return function(a){void 0===a&&(a=A.vec2f64.create());var f=b(ia);a[0]=f[0]*e+c;a[1]=f[5]*d+c;return a}}var g=a[0]/this._symbolTextureRatio+c,f=a[1]/this._symbolTextureRatio+c;return function(a){void 0===a&&(a=A.vec2f64.create());a[0]=g;a[1]=
f;return a}};d.prototype._fastVisualVariableConvertOptions=function(){var a=this._size[0]>this._size[1]?this._size[0]:this._size[1],b=p.vec3f64.fromValues(a,a,a),c=u.px2pt(1),a=a*c,a=p.vec3f64.fromValues(a,a,a);return{modelSize:b,symbolSize:a,unitInMeters:c,transformation:{anchor:p.vec3f64.ZEROS,scale:p.vec3f64.ONES,rotation:p.vec3f64.ZEROS}}};d.prototype._getGraphicHash=function(a){for(var b="",c=0,d=this._cimRequiredFields;c<d.length;c++)var f=d[c],b=b+(f+a.attributes[f]);return b};d.prototype._forEachMaterial=
function(a){f.isSome(this._material)&&a(this._material);this._cimSymbolMaterials.forEach(a)};d.PRIMITIVE_SIZE=ka;d.elevationModeChangeTypes={definedChanged:r.SymbolUpdateType.UPDATE,staysOnTheGround:r.SymbolUpdateType.NONE,onTheGroundChanged:r.SymbolUpdateType.RECREATE};return d}(da.default);y.Graphics3DIconSymbolLayer=q;var la={mode:"relative-to-ground",offset:0},ma=R.vec4f64.fromValues(0,0,0,1);y.default=q});