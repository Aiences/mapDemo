// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/compilerUtils ../../core/maybe ../SimpleFillSymbol ../SimpleLineSymbol ../SimpleMarkerSymbol ../TextSymbol ./defaultsJSON".split(" "),function(k,a,f,g,c,d,e,h,b){Object.defineProperty(a,"__esModule",{value:!0});a.defaultPointSymbol2D=e.fromJSON(b.defaultPointSymbolJSON);a.defaultPolylineSymbol2D=d.fromJSON(b.defaultPolylineSymbolJSON);a.defaultPolygonSymbol2D=c.fromJSON(b.defaultPolygonSymbolJSON);a.defaultTextSymbol2D=h.fromJSON(b.defaultTextSymbolJSON);a.getDefaultSymbol2D=
function(b){if(g.isNone(b))return null;switch(b.type){case "mesh":break;case "point":case "multipoint":return a.defaultPointSymbol2D;case "polyline":return a.defaultPolylineSymbol2D;case "polygon":case "extent":return a.defaultPolygonSymbol2D;default:f.neverReached(b)}return null};a.errorPointSymbol2D=e.fromJSON(b.errorPointSymbolJSON);a.errorPolylineSymbol2D=d.fromJSON(b.errorPolylineSymbolJSON);a.errorPolygonSymbol2D=c.fromJSON(b.errorPolygonSymbolJSON)});