// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Logger","../../../../../core/libs/libtess/libtess"],function(d,e,f,c){Object.defineProperty(e,"__esModule",{value:!0});var g=f.getLogger("esri.views.2d.engine.webgl.mesh.templates.Tesselator");d=function(){function a(){this._indexCounter=this._currentVertexIndex=0;this._triangleIndices=[-1,-1,-1];this.glu=new c.GluTesselator;this.glu.gluTessCallback(c.gluEnum.GLU_TESS_BEGIN,this._begincallback.bind(this));this.glu.gluTessCallback(c.gluEnum.GLU_TESS_VERTEX_DATA,
this._vertexCallback.bind(this));this.glu.gluTessCallback(c.gluEnum.GLU_TESS_END,this._endcallback.bind(this));this.glu.gluTessCallback(c.gluEnum.GLU_TESS_COMBINE,this._combinecallback.bind(this));this.glu.gluTessCallback(c.gluEnum.GLU_TESS_ERROR,this._errorcallback.bind(this));this.glu.gluTessCallback(c.gluEnum.GLU_TESS_EDGE_FLAG,this._edgeCallback.bind(this));this.glu.gluTessProperty(c.gluEnum.GLU_TESS_WINDING_RULE,c.windingRule.GLU_TESS_WINDING_ODD)}a.prototype.beginPolygon=function(b,a){this._triangleIndices[0]=
-1;this._triangleIndices[1]=-1;this._triangleIndices[2]=-1;this._indexCounter=this._currentVertexIndex=0;this.glu.gluTessBeginPolygon(b);this._indices=a};a.prototype.endPolygon=function(){this.glu.gluTessEndPolygon()};a.prototype.beginContour=function(){this.glu.gluTessBeginContour()};a.prototype.endContour=function(){this.glu.gluTessEndContour()};a.prototype.addVertex=function(b,a){this.glu.gluTessVertex(b,a)};a.prototype._vertexCallback=function(b,a){a[a.length]=b[0];a[a.length]=b[1];this._triangleIndices[this._currentVertexIndex]=
-1;if(2<=this._currentVertexIndex){for(b=0;3>b;b++)-1===this._triangleIndices[b]&&(this._triangleIndices[b]=this._indexCounter++),this._indices[this._indices.length]=this._triangleIndices[b];this._currentVertexIndex=0}else this._currentVertexIndex++};a.prototype._begincallback=function(){this._triangleIndices[0]=-1;this._triangleIndices[1]=-1;this._triangleIndices[2]=-1;this._currentVertexIndex=0};a.prototype._endcallback=function(){this._currentVertexIndex=0};a.prototype._errorcallback=function(a){g.error("Encountered error during tesselation: "+
a)};a.prototype._combinecallback=function(a){return[a[0],a[1],a[2]]};a.prototype._edgeCallback=function(){};return a}();e.default=d});