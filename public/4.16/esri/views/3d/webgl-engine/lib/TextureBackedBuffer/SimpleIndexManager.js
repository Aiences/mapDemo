// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,c){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(a){this.maxCount=a;this._nextIndex=0;this.recycledIndices=[]}Object.defineProperty(a.prototype,"activeCount",{get:function(){return this._nextIndex-this.recycledIndices.length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"availableCount",{get:function(){return this.recycledIndices.length+this.maxCount-this._nextIndex},enumerable:!0,configurable:!0});a.prototype.acquire=
function(){if(0<this.recycledIndices.length)return this.recycledIndices.pop();if(this.availableCount)return this._nextIndex++};a.prototype.release=function(a){this.recycledIndices.push(a)};return a}();c.SimpleIndexManager=b});