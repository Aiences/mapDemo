// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../CIMPlacements"],function(d,e,f,g,h){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function a(){}a.local=function(){null===a.instance&&(a.instance=new a);return a.instance};a.prototype.execute=function(a,b,c){return new k(a,b,c)};a.instance=null;return a}();e.PlacementPolygonCenter=d;var k=function(){function a(a,b,c){this._geometry=a;this._offsetX=void 0!==b.offsetX?b.offsetX*
c:0;this._offsetY=void 0!==b.offsetY?b.offsetY*c:0;this._method=b.method;this._clipping=b.clipAtBoundary;this._internalPlacement=new h.Placement;this._clipping}a.prototype.next=function(){var a=this._geometry;this._geometry=null;return a&&void 0!==a.rings?this._polygonCenter(a):null};a.prototype._polygonCenter=function(a){switch(this._method){default:case "CenterOfMass":case "BoundingBoxCenter":var b=f.create();g.getBoundsXY(b,a);this._internalPlacement.setTranslate((b[2]+b[0])/2+this._offsetX,(b[3]+
b[1])/2-this._offsetY)}return this._internalPlacement};return a}()});