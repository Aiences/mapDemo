// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../webgl","./WGLContainer"],function(g,h,e,l,m){Object.defineProperty(h,"__esModule",{value:!0});g=function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a._lastWidth=0;a._lastHeight=0;return a}e.__extends(b,f);b.prototype.dispose=function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)};b.prototype.doRender=function(a){a=this.createRenderParams(a);var c=a.context,d=a.painter,k=a.profiler;this._prevFBO=c.getBoundFramebufferObject();
k.recordContainerStart(this.name);var b=this._getFbo(a),f=d.getRenderTarget();c.bindFramebuffer(b);d.setRenderTarget(b);c.setDepthWriteEnabled(!0);c.setClearColor(0,0,0,0);c.setClearDepth(1);c.clear(c.gl.COLOR_BUFFER_BIT|c.gl.DEPTH_BUFFER_BIT);c.setDepthWriteEnabled(!1);for(var e=0,g=this.children;e<g.length;e++)g[e].processRender(a);d.setRenderTarget(f);c.bindFramebuffer(this._prevFBO);d.beforeRenderLayer(a,this._clippingInfos?255:0,this.opacity);c.setStencilTestEnabled(!1);c.setStencilWriteMask(0);
d.blitTexture(c,b.colorTexture,9728);d.compositeLayer(a,this.opacity);k.recordContainerEnd()};b.prototype.createRenderParams=function(a){return e.__assign(e.__assign({},f.prototype.createRenderParams.call(this,a)),{blendMode:this.blendMode,globalOpacity:1})};b.prototype._getFbo=function(a){var c=a.context;a=a.painter;var d=c.getViewport(),b=d.width,d=d.height;if(b!==this._lastWidth||d!==this._lastHeight)this._lastWidth=b,this._lastHeight=d,this._renderTarget?this._renderTarget.resize(b,d):(b={target:3553,
pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:b,height:d},a=a.getSharedStencilBuffer(),this._renderTarget=new l.FramebufferObject(c,{colorTarget:0,depthStencilTarget:3},b,a));return this._renderTarget};return b}(m.default);h.GroupContainer=g});