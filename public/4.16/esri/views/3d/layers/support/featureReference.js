// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../layers/graphics/dehydratedFeatures"],function(f,g,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function a(c,b){this.highestResolutionVersion=null;this.versions=[];this.ref(c,b)}Object.defineProperty(a.prototype,"isReferenced",{get:function(){return 0!==this.versions.length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isSingle",{get:function(){return 1===this.versions.length&&1===this.versions[0].refCount},enumerable:!0,
configurable:!0});a.prototype.ref=function(c,a){var d=this.feature;b.oldVersion=d;this.feature&&(c.uid=this.feature.uid);for(var h=0,f=this.versions;h<f.length;h++){var e=f[h];if(e.resolution===a){e.refCount++;if((a=this.highestResolutionVersion===e&&!k.equals(c,e.feature))||this.highestResolutionVersion!==e)e.feature=c;b.newVersion=a?c:d;return b}}e={feature:c,resolution:a,refCount:1};this.versions.push(e);!this.highestResolutionVersion||a<this.highestResolutionVersion.resolution?(b.newVersion=c,
this.highestResolutionVersion=e):b.newVersion=d;return b};a.prototype.unref=function(a){for(var c=0;c<this.versions.length;c++){var d=this.versions[c];if(d.resolution===a)return d.refCount--,b.oldVersion=this.feature,0===d.refCount&&(this.versions[c]=this.versions[this.versions.length-1],this.versions.length--,this.highestResolutionVersion===d&&(this.recalculateHighestResolutionVersion(),b.oldVersion=d.feature)),b.newVersion=this.feature,b}return null};Object.defineProperty(a.prototype,"feature",
{get:function(){return this.highestResolutionVersion?this.highestResolutionVersion.feature:null},enumerable:!0,configurable:!0});a.prototype.recalculateHighestResolutionVersion=function(){if(0===this.versions.length)this.highestResolutionVersion=null;else{for(var c=this.versions[0],a=1;a<this.versions.length;a++){var b=this.versions[a];b.resolution<c.resolution&&(c=b)}this.highestResolutionVersion=c}};return a}();g.MultiFeatureReference=f;f=function(){function a(a){this._feature=a;this.refCount=1}
Object.defineProperty(a.prototype,"isReferenced",{get:function(){return 0!==this.refCount},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isSingle",{get:function(){return 1===this.refCount},enumerable:!0,configurable:!0});a.prototype.ref=function(a){++this.refCount;b.oldVersion=this._feature;this.feature&&(a.uid=this.feature.uid);k.equals(this._feature,a)||(this._feature=a);b.newVersion=this._feature;return b};a.prototype.unref=function(){b.oldVersion=this._feature;if(0<this.refCount&&
(this.refCount--,!this.isReferenced))return b.newVersion=null,b;b.newVersion=this._feature;return b};Object.defineProperty(a.prototype,"feature",{get:function(){return this._feature},enumerable:!0,configurable:!0});return a}();g.SingleFeatureReference=f;var b={oldVersion:null,newVersion:null}});