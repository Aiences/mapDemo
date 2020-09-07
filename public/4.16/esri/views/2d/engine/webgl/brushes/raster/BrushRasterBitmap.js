// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../VertexStream ../WGLBrush ../../../../../webgl/rasterUtils".split(" "),function(l,m,p,r,q,d){Object.defineProperty(m,"__esModule",{value:!0});l=function(g){function e(){var a=null!==g&&g.apply(this,arguments)||this;a._desc={lut:{path:"raster/lut",attributes:{a_position:0,a_texcoord:1}},stretch:{path:"raster/stretch",attributes:{a_position:0,a_texcoord:1}},hillshade:{path:"raster/hillshade",attributes:{a_position:0,a_texcoord:1}}};a._rendererUniformInfos=new Map;
return a}p.__extends(e,g);e.prototype.dispose=function(){this._quad&&this._quad.dispose()};e.prototype.prepareState=function(a,b){a=a.context;a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(1,771,1,771);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);a.setStencilFunction(514,b.stencilRef,255)};e.prototype.draw=function(a,b){if(b.source&&!b.suspended){a.timeline.begin(this.name);var c=a.context,d=this.getShaderVariations(b),d=a.painter.materialManager.getProgram(a,
this._desc[b.symbolizerParameters.type],d);this.drawWithProgram(c,d,b);a.timeline.end(this.name)}};e.prototype.drawWithProgram=function(a,b,c,e,g,k){void 0===e&&(e=1);void 0===g&&(g=[0,0]);void 0===k&&(k=!1);this._quad||(this._quad=new r(a,[0,0,1,0,0,1,1,1]));var f=c.symbolizerParameters,l=c.transformGrid,m=c.width,t=c.height,q=c.opacity,h=f.type;a.bindProgram(b);var n=this.getShaderVariations(c),h=this.getUniformInfos(h,a,b,n),n=c.getTextures();d.setTextures(a,b,n.names,n.textures);a=d.getBasicGridUniforms(e,
g);k=d.getCommonUniforms(l,[m,t],[c.source.width,c.source.height],q,k);d.setUniforms(b,h,p.__assign(p.__assign({u_coordScale:c.coordScale,u_dvsMat3:c.transforms.dvs},a),k));f.colormap&&(c=d.getColormapUniforms(f.colormap,f.colormapOffset),d.setUniforms(b,h,c));"stretch"===f.type?(f=d.getStretchUniforms(f),d.setUniforms(b,h,f)):"hillshade"===f.type&&(f=d.getShadedReliefUniforms(f),d.setUniforms(b,h,f));this._quad.draw()};e.prototype.getUniformInfos=function(a,b,c,e){a=0<e.length?a+"-"+e.join("-"):
a;if(this._rendererUniformInfos.has(a))return this._rendererUniformInfos.get(a);b=d.getUniformLocationInfos(b,c);this._rendererUniformInfos.set(a,b);return b};e.prototype.getShaderVariations=function(a){var b=[];"cubic"===a.interpolation&&b.push("bicubic");a.symbolizerParameters.colormap&&b.push("applyColormap");a.transformGrid&&b.push("applyProjection");return b};return e}(q.default);m.default=l});