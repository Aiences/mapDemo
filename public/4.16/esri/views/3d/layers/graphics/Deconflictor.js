// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Accessor ../../../../core/MapUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/PooledArray ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/aaBoundingRect ./deconflictorDebug ../../support/debugFlags ../../support/earthUtils ../../support/geometryUtils ../../support/geometryUtils/sphere ../../webgl-engine/lib/Camera ../../webgl-engine/lib/screenSizePerspectiveUtils ../../webgl-engine/lib/Util ../../webgl-engine/materials/HUDMaterial".split(" "),
function(D,w,h,x,L,E,r,F,y,M,N,O,m,t,u,G,H,n,z,P,Q,p,R,S,T,I,U){function J(e){var b,a,g,c,f;return h.__generator(this,function(d){switch(d.label){case 0:if(!Map.prototype.entries)return[3,5];b=e.entries();a=b.next();d.label=1;case 1:return a.done?[3,4]:[4,a.value[1]];case 2:d.sent(),d.label=3;case 3:return a=b.next(),[3,1];case 4:return[3,9];case 5:g=L.valuesOfMap(e),c=0,f=g,d.label=6;case 6:if(!(c<f.length))return[3,9];a=f[c];return[4,a];case 7:d.sent(),d.label=8;case 8:return c++,[3,6];case 9:return[2]}})}
function V(e,b,a){var g,c;return h.__generator(this,function(f){switch(f.label){case 0:return b.clear(),e.forEach(function(c,g){var d=b.pushNew();d.id=g;d.prio=c.info?-c.info[a].distance:Number.MAX_VALUE}),[4];case 1:f.sent(),g=b.iterableSort(function(a,c){return c.prio-a.prio}),c=g.next(),f.label=2;case 2:return c.done?[3,5]:[4];case 3:f.sent(),f.label=4;case 4:return c=g.next(),[3,2];case 5:return b.forEach(function(a){var c=e.get(a.id);c&&(e.delete(a.id),e.set(a.id,c))}),b.clear(),[2]}})}Object.defineProperty(w,
"__esModule",{value:!0});var k=t.vec3f64.create(),q=G.vec4f64.create(),v=G.vec4f64.create(),A=t.vec3f64.create(),W=N.mat4f64.create(),X=p.sphere.create(),B=p.ray.create(),Y=t.vec3f64.create(),Z=n.create(),aa=function(){return function(){this.aabr=n.create();this.distance=0;this.visible=this.culled=!1}}();D=function(){return function(e,b,a){void 0===a&&(a={});this.graphics3DGraphic=e;this.slicePlaneEnabled=b;this.info=a}}();w.DeconflictorGraphic=D;var ba=function(){function e(){this.active=new Map;
this.visible=new Map}e.prototype.clear=function(){this.active.clear();this.visible.clear()};return e}(),ca=function(){return function(){}}(),da=function(){return function(){this.sortArray=new F({allocator:function(e){return e||new ca}})}}(),K=function(){function e(){this.camera=new S.default;this.slicePlane=p.boundedPlane.create();this.slicePlaneEnabled=!1}e.prototype.copyFrom=function(b){this.camera.copyFrom(b.camera);p.boundedPlane.copy(b.slicePlane,this.slicePlane);this.slicePlaneEnabled=b.slicePlaneEnabled};
return e}();w.DeconflictorViewState=K;x=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a._dirty=!1;a._runningViewState=new K;a._state=0;a.graphics=new ba;a.iterators=new da;a.accBinsNumX=15;a.accBinsNumY=20;a.accBinsSizeX=0;a.accBinsSizeY=0;a.accBins=null;a.accNumTests=0;return a}h.__extends(b,e);Object.defineProperty(b.prototype,"dirty",{get:function(){return this._dirty},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this._state},
enumerable:!0,configurable:!0});b.prototype.destroy=function(){this.graphics.clear();this.iterators=null};b.prototype.setDirty=function(){!this._dirty&&0<this.graphics.active.size&&(this._dirty=!0,this.notifyChange("updating"))};Object.defineProperty(b.prototype,"updating",{get:function(){return 0!==this._state||this._dirty},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updatingProgress",{get:function(){if(!this.updating)return 1;var a=this._state/4;return this._dirty?.5*a:a},
enumerable:!0,configurable:!0});b.prototype.needsUpdate=function(){return this.view.ready&&null!=this.view.state&&this.updating};b.prototype.update=function(a){switch(this._state){case 0:this.startUpdate(),a.madeProgress();case 1:if(this._state=1,!this.processActiveGraphics(a))break;case 2:if(this._state=2,!this.sortVisibleGraphics(a))break;case 3:if(this._state=3,!this.deconflictVisibleGraphics(a))break;default:z.drawAccelerationStruct(this,this.graphics.visible),this._state=0,this.notifyChange("updating")}};
b.prototype.modifyGraphics=function(a,b){var c=this;b?a.forEach(function(a){return c.addToActiveGraphics(a)}):a.forEach(function(a){return c.removeFromActiveGraphics(a)});this.setDirty()};b.prototype.layerSupportsDeconfliction=function(a){if(r.isNone(a)||"object3d"!==a.type)return!1;a=a.stageObject;return 1===(a?a.getNumGeometryRecords():0)&&a.getGeometryRecord(0).material instanceof U.default?!0:!1};b.prototype.startUpdate=function(){z.prepare(this.view);this._dirty=!1;this._runningViewState.copyFrom(this.viewState);
var a=this._runningViewState.camera;this.initBins(a.fullWidth,a.fullHeight);this.resetIterators()};b.prototype.addToActiveGraphics=function(a){a.info[this.visibilityGroup]=new aa;this.graphics.active.set(a.graphics3DGraphic.graphic.uid,a);this.setDirty()};b.prototype.removeFromActiveGraphics=function(a){this.removeFromVisibleGraphics(a);var b=a.graphics3DGraphic;b.destroyed||b.clearVisibilityFlag(3,this.visibilityGroup);delete a.info[this.visibilityGroup];this.graphics.active.delete(a.graphics3DGraphic.graphic.uid);
this.setDirty()};b.prototype.addToVisibleGraphics=function(a){this.graphics.visible.set(a.graphics3DGraphic.graphic.uid,a)};b.prototype.removeFromVisibleGraphics=function(a){this.graphics.visible.delete(a.graphics3DGraphic.graphic.uid)};b.prototype.processActiveGraphics=function(a){var b=this.ensureActiveGraphicsIterator(),c=M.mat4.invert(W,this._runningViewState.camera.projectionMatrix),f="global"===this.view.viewingMode&&1===this.view.map.ground.opacity&&0<this._runningViewState.camera.relativeElevation?
X:null,d=0;r.isSome(f)&&(m.vec3.transformMat4(f.center,H.ZEROS,this._runningViewState.camera.viewMatrix),f.radius=Q.earthRadius,d=p.sphere.distanceToSilhouette(f,H.ZEROS));for(;!a.done;){a.madeProgress();var l=b.next();if(l.done)return this.resetActiveGraphicsIterator(),!0;var e=(l=l.value)&&l.info[this.visibilityGroup];e&&(this.collectGraphics3DGraphics(l,c,f,d),e.culled?this.removeFromVisibleGraphics(l):this.addToVisibleGraphics(l))}return!1};b.prototype.sortVisibleGraphics=function(a){for(var b=
this.ensureSortGraphicsIterator();!a.done;){var c=b.next();a.madeProgress();if(c.done)return this.resetSortGraphicsIterator(),!0}return!1};b.prototype.deconflictVisibleGraphics=function(a){for(var b=this.ensureVisibleGraphicsIterator(),c=1===this.visibilityGroup;!a.done;){a.madeProgress();var f=b.next();if(f.done)return this.resetVisibleGraphicsIterator(),!0;var f=f.value,d=f.info[this.visibilityGroup];if(d&&!d.culled){var l=f.graphics3DGraphic;(l=(!c||l.isVisible())&&!this.isConflicted(f))&&this.addToBins(f);
d.visible=l;this.setGraphicVisibility(f,l);z.drawPoly(d,l)}}return!1};b.prototype.resetIterators=function(){this.iterators.active=null;this.iterators.visible=null;this.iterators.sort=null};b.prototype.ensureActiveGraphicsIterator=function(){this.iterators.active||(this.iterators.active=J(this.graphics.active));return this.iterators.active};b.prototype.resetActiveGraphicsIterator=function(){this.iterators.active=null};b.prototype.ensureVisibleGraphicsIterator=function(){this.iterators.visible||(this.iterators.visible=
J(this.graphics.visible));return this.iterators.visible};b.prototype.resetVisibleGraphicsIterator=function(){this.iterators.visible=null};b.prototype.ensureSortGraphicsIterator=function(){this.iterators.sort||(this.iterators.sort=V(this.graphics.visible,this.iterators.sortArray,this.visibilityGroup));return this.iterators.sort};b.prototype.resetSortGraphicsIterator=function(){this.iterators.sort=null};b.prototype.collectGraphics3DGraphics=function(a,b,c,f){var d=a.graphics3DGraphic;if(!d.destroyed){var g=
a.info[this.visibilityGroup];if(d.isVisible(0,3)){d=this.getGraphicsLayers(d);n.empty(g.aabr);for(var e=null,C=0;C<d.length;C++){var h=d[C];if(this.layerSupportsDeconfliction(h)){var m=h.stageObject.getGeometryRecord(0).material;if(r.isNone(e)){e=this.getProjectionInfo(h,b,ea);if(e.isOutsideScreen||this.isCulledBySlice(a,k)||r.isSome(c)&&this.isCulledByHorizon(e,c,f)){g.culled=!0;return}!P.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET&&g.visible&&(e.distance*=.7)}this.expandBoundingRect(g,h,m,e)}}r.isNone(e)?
g.culled=!0:(g.distance=e.distance,g.culled=!1)}else g.culled=!0}};b.prototype.getProjectionInfo=function(a,b,c){var g=this._runningViewState.camera;a=a.stageObject;var d=a.getGeometryRecord(0),e=d.material,h=a.getCenter();m.vec3.transformMat4(k,h,g.viewMatrix);d=d.geometry.data.getVertexAttr();h=d[I.VertexAttrConstants.AUXPOS1].data;e.applyShaderOffsetsView(k,d[I.VertexAttrConstants.NORMAL].data,a.objectTransformation,h,g,c.scaleInfo,k);u.vec4.set(q,k[0],k[1],k[2],1);u.vec4.transformMat4(v,q,g.projectionMatrix);
m.vec3.scale(c.positionNDC,v,1/v[3]);e.applyShaderOffsetsNDC(c.positionNDC,h,g,c.positionNDC,A);c.distanceWithoutPolygonOffset=g.depthNDCToWorld(A[2]);c.distance=A[2]===c.positionNDC[2]?c.distanceWithoutPolygonOffset:g.depthNDCToWorld(c.positionNDC[2]);u.vec4.set(v,c.positionNDC[0],c.positionNDC[1],c.positionNDC[2],1);u.vec4.transformMat4(q,v,b);u.vec4.scale(q,q,1/q[3]);m.vec3.set(c.positionView,k[0],k[1],k[2]);return c};b.prototype.isCulledByHorizon=function(a,b,c){m.vec3.copy(B.direction,a.positionView);
m.vec3.set(B.origin,0,0,0);return R.intersectRay(b,B,Y)?a.distanceWithoutPolygonOffset>c:!1};b.prototype.isCulledBySlice=function(a,b){return a.slicePlaneEnabled&&this._runningViewState.slicePlaneEnabled&&p.boundedPlane.extrusionContainsPoint(this._runningViewState.slicePlane,b)};b.prototype.expandBoundingRect=function(a,b,c,f){var d=f.positionNDC;f=f.scaleInfo;var g=this._runningViewState.camera;b=b.getScreenSize(fa);T.applyPrecomputedScaleFactor(b,f.factor,b);b[0]*=g.pixelRatio;b[1]*=g.pixelRatio;
c=n.offset(c.calculateRelativeScreenBounds(b,f.factorAlignment.scale,Z),E.lerp(0,g.fullWidth,.5+.5*d[0]),E.lerp(0,g.fullHeight,.5+.5*d[1]));d=this.iconMarginFactor;0!==d&&(d*=Math.min(n.width(c),n.height(c)),c[0]-=d,c[1]-=d,c[2]+=d,c[3]+=d);n.expand(a.aabr,c)};b.prototype.isConflicted=function(a){var b=a.graphics3DGraphic.graphic.uid;a=a.info[this.visibilityGroup];for(var c=Math.floor(a.aabr[0]/this.accBinsSizeX);c<=Math.floor(a.aabr[2]/this.accBinsSizeX);c++)if(!(0>c||c>=this.accBinsNumX))for(var f=
Math.floor(a.aabr[1]/this.accBinsSizeY);f<=Math.floor(a.aabr[3]/this.accBinsSizeY);f++)if(!(0>f||f>=this.accBinsNumY))for(var d=this.accBins[c][f],e=0;e<d.length;e++){var h=d.data[e],k=h.info[this.visibilityGroup];if(k&&k.visible&&h.graphics3DGraphic.graphic.uid!==b&&(this.accNumTests++,n.intersects(k.aabr,a.aabr)))return!0}return!1};b.prototype.initBins=function(a,b){if(null==this.accBins){this.accBins=[];for(var c=0;c<this.accBinsNumX;c++){this.accBins.push([]);for(var e=this.accBins[this.accBins.length-
1],d=0;d<this.accBinsNumY;d++)e.push(new F)}}else for(c=0;c<this.accBinsNumX;c++)for(d=0;d<this.accBinsNumY;d++)this.accBins[c][d].clear();this.accBinsSizeX=a/this.accBinsNumX;this.accBinsSizeY=b/this.accBinsNumY;this.accNumTests=0};b.prototype.addToBins=function(a){for(var b=a.info[this.visibilityGroup],c=Math.floor(b.aabr[2]/this.accBinsSizeX),e=Math.floor(b.aabr[1]/this.accBinsSizeY),d=Math.floor(b.aabr[3]/this.accBinsSizeY),b=Math.floor(b.aabr[0]/this.accBinsSizeX);b<=c;b++)if(!(0>b||b>=this.accBinsNumX))for(var h=
e;h<=d;h++)0>h||h>=this.accBinsNumY||this.accBins[b][h].push(a)};b.prototype.setGraphicVisibility=function(a,b){a=a.graphics3DGraphic;a.destroyed||(a.setVisibilityFlag(3,b,this.visibilityGroup),1===this.visibilityGroup&&this.view.labeler.setLabelGraphicVisibility(a,b))};h.__decorate([y.property({constructOnly:!0})],b.prototype,"view",void 0);h.__decorate([y.property({type:Boolean,readOnly:!0})],b.prototype,"updating",null);return b=h.__decorate([y.subclass("esri.views.3d.layers.graphics.Deconflictor")],
b)}(x);w.Deconflictor=x;var fa=O.vec2f64.create(),ea=new (function(){function e(){this.positionView=t.vec3f64.create();this.positionNDC=t.vec3f64.create();this.distanceWithoutPolygonOffset=this.distance=0;this.scaleInfo={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}}}Object.defineProperty(e.prototype,"isOutsideScreen",{get:function(){var b=this.positionNDC;return-1>b[0]||-1>b[1]||-1>b[2]||1<=b[0]||1<=b[1]},enumerable:!0,
configurable:!0});return e}())});