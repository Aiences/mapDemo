// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Color ../../../../core/compilerUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec4f64".split(" "),function(r,c,b,m,n,f,g,e){function d(a,c){if(f.isNone(a))return null;var d=f.isSome(a.color)?e.vec4f64.fromArray(m.toUnitRGBA(a.color)):e.vec4f64.fromValues(0,0,0,0),h=g.pt2px(a.size),k=g.pt2px(a.extensionLength);switch(a.type){case "solid":return l(b.__assign({color:d,size:h,extensionLength:k},c));case "sketch":return a=
b.__assign({color:d,size:h,extensionLength:k},c),b.__assign(b.__assign(b.__assign({},p),a),{type:"sketch"});default:n.neverReached(a)}}function l(a){return b.__assign(b.__assign(b.__assign({},q),a),{type:"solid"})}Object.defineProperty(c,"__esModule",{value:!0});c.createMaterial=function(a,b){return d(a&&a.enabled&&a.edges||null,b)};c.createMaterialFromEdges=d;c.createSolidEdgeMaterial=l;var q={color:e.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},p={color:e.vec4f64.fromValues(0,
0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2}});