// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function d(a){a=a.toLowerCase().split(" ").join("-");switch(a){case "serif":return"noto-serif";case "sans-serif":return"arial-unicode-ms";case "monospace":return"ubuntu-mono";case "fantasy":return"cabin-sketch";case "cursive":return"redressed";default:return a}}Object.defineProperty(b,"__esModule",{value:!0});b.getFullyQualifiedFontName=function(a){var c;a:{if(a.weight)switch(a.weight.toLowerCase()){case "bold":case "bolder":c="-bold";break a}c=""}var b;
a:{if(a.style)switch(a.style.toLowerCase()){case "italic":case "oblic":b="-italic";break a}b=""}c+=b;return d(a.family)+(0<c.length?c:"-regular")};b.getFontDecorationTop=function(a){switch(a){case "underline":return-26;case "line-through":return-18}return NaN}});