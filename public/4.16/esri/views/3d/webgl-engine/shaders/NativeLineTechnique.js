// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/StencilUtils ./NativeLine.glsl ../../../webgl/Program ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(n,l,e,m,p,q,
r,t,f,b,u,h,v,w,g){Object.defineProperty(l,"__esModule",{value:!0});f=function(b){function a(c,a){a=b.call(this,c,a)||this;a.stipplePattern=null;a.stippleTextureBind=null;a.stippleTextureRepository=c.stippleTextureRepository;return a}e.__extends(a,b);a.prototype.initializeProgram=function(c){var k=a.shader.get(),d=this.configuration,k=k.build({output:d.output,attributeColor:d.vertexColors,slicePlaneEnabled:d.slicePlaneEnabled,sliceHighlightDisabled:d.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,
stippleEnabled:d.stippleEnabled,stippleOffColorEnabled:d.stippleOffColorEnabled,stippleUVMaxEnabled:!1,stippleIntegerRepeatsEnabled:d.stippleIntegerRepeatsEnabled});return new w(c.rctx,k.generateSource("vertex"),k.generateSource("fragment"),u.Default3D)};a.prototype.dispose=function(){b.prototype.dispose.call(this);this.stippleTextureRepository.release(this.stipplePattern);this.stippleTextureBind=this.stipplePattern=null};a.prototype.bindPass=function(c,a,d){if(this.stipplePattern!==a.stipplePattern){var b=
a.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,b);this.stipplePattern=b}this.configuration.stippleEnabled&&(b=m.isSome(this.stippleTextureBind)?this.stippleTextureBind(c,0)*d.pixelRatio:1,this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/b),this.program.setUniform2f("ndcToPixel",d.viewport[2]/2,d.viewport[3]/2));0===this.configuration.output?(this.program.setUniform4fv("constantColor",a.color),
this.program.setUniform1f("alphaCoverage",Math.min(1,a.width*d.pixelRatio)),this.configuration.stippleOffColorEnabled&&(c=m.unwrap(a.stippleOffColor),this.program.setUniform4f("stippleOffColor",c[0],c[1],c[2],3<c.length?c[3]:1))):r.OutputHighlight.bindOutputHighlight(c,this.program,d)};a.prototype.bindDraw=function(c){q.Transform.bindUniforms(this.program,c);p.Slice.bindUniformsWithOrigin(this.program,this.configuration,c)};a.prototype.initializePipeline=function(){var c=this.configuration,a=g.separateBlendingParams(770,
1,771,771),b=function(a,b,d){void 0===b&&(b=null);void 0===d&&(d=null);return g.makePipelineState({blending:b,depthTest:h.depthCompareLess,depthWrite:d,colorWrite:g.defaultColorWriteParams,stencilWrite:c.sceneHasOcludees?h.stencilWriteMaskOn:null,stencilTest:c.sceneHasOcludees?a?h.stencilToolMaskBaseParams:h.stencilBaseAllZerosParams:null})};return 0===c.output?(this._occludeeState=b(!0,c.transparent||c.stippleEnabled?a:null,g.defaultDepthWriteParams),b(!1,c.transparent||c.stippleEnabled?a:null,g.defaultDepthWriteParams)):
b(!1)};Object.defineProperty(a.prototype,"primitiveType",{get:function(){return 1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!0,configurable:!0});a.shader=new t.ReloadableShaderModule(v,function(){return new Promise(function(a,b){n(["./NativeLine.glsl"],a,b)})});return a}(f.ShaderTechnique);l.NativeLineTechnique=f;f=function(f){function a(){var a=null!==f&&f.apply(this,arguments)||this;a.output=0;
a.slicePlaneEnabled=!1;a.sliceHighlightDisabled=!1;a.vertexColors=!1;a.transparent=!1;a.stippleEnabled=!1;a.stippleOffColorEnabled=!1;a.stippleIntegerRepeatsEnabled=!1;a.sceneHasOcludees=!1;return a}e.__extends(a,f);e.__decorate([b.parameter({count:7})],a.prototype,"output",void 0);e.__decorate([b.parameter()],a.prototype,"slicePlaneEnabled",void 0);e.__decorate([b.parameter()],a.prototype,"sliceHighlightDisabled",void 0);e.__decorate([b.parameter()],a.prototype,"vertexColors",void 0);e.__decorate([b.parameter()],
a.prototype,"transparent",void 0);e.__decorate([b.parameter()],a.prototype,"stippleEnabled",void 0);e.__decorate([b.parameter()],a.prototype,"stippleOffColorEnabled",void 0);e.__decorate([b.parameter()],a.prototype,"stippleIntegerRepeatsEnabled",void 0);e.__decorate([b.parameter()],a.prototype,"sceneHasOcludees",void 0);return a}(b.ShaderTechniqueConfiguration);l.NativeLineTechniqueConfiguration=f});