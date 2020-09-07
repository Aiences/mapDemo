// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../request ../../../core/Error ../../../core/JSONSupport ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators ../commonProperties ../TileInfo ./RawBlockCache ../rasterFormats/RasterCodec ../rasterFunctions/pixelUtils ../rasterFunctions/rasterProjectionHelper".split(" "),function(Z,aa,c,K,S,N,T,O,U,L,V,n,W,X,r,Y,P,p){return function(M){function d(){var a=null!==M&&M.apply(this,
arguments)||this;a.rasterJobHandler=null;a.datasetName=null;a.datasetFormat=null;a.rasterInfo=null;a.ioConfig={sampling:"closest"};return a}c.__extends(d,M);d.prototype.init=function(){return c.__awaiter(this,void 0,void 0,function(){var a;return c.__generator(this,function(e){switch(e.label){case 0:return a=p.load(),this.addResolvingPromise(a),[4,this.when()];case 1:return e.sent(),[2]}})})};d.prototype.normalizeCtorArgs=function(a){a&&a.ioConfig&&(a=c.__assign(c.__assign({},a),{ioConfig:c.__assign({resolution:null,
bandIds:null,sampling:"closest",tileInfo:X.create()},a.ioConfig)}));return a};Object.defineProperty(d.prototype,"url",{set:function(a){a=V.urlToObject(a);this._set("url",a.path)},enumerable:!0,configurable:!0});d.prototype.open=function(a){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(a){throw new N("BaseRaster:open-not-implemented","open() is not implemented");})})};d.prototype.fetchTile=function(a,e,h,g){void 0===g&&(g={});return c.__awaiter(this,void 0,void 0,
function(){var k,f,b,l;return c.__generator(this,function(c){k=g.tileInfo;f=k.lodAt(a);b=new K.Point({x:f.resolution,y:f.resolution,spatialReference:k.spatialReference});l=this._getTileExtent(b,e,h,k);return[2,this.fetchPixels(l,k.size[0],k.size[1],g)]})})};d.prototype.identify=function(a,e){void 0===e&&(e={});return c.__awaiter(this,void 0,void 0,function(){var h,g,k,f,b,l,Q,m,d,x,y,E,t,q,u,v,A,w;return c.__generator(this,function(c){switch(c.label){case 0:h=this.rasterInfo;g=h.spatialReference;
k=h.extent;f=e.datumTransformation;b=p.projectPoint(a,g,f);if(!k.intersects(b))return[2,{location:b,value:null}];l=0;if(!e.srcResolution)return[3,1];Q=p.snapPyramid(e.srcResolution,this.rasterInfo,this.ioConfig.sampling);l=Q.pyramidLevel;return[3,3];case 1:return[4,this.computeBestPyramidLevelForLocation(a,e)];case 2:l=c.sent();if(null==l)return[2,{location:b,value:null}];c.label=3;case 3:m=this.identifyPixelLocation(b,l,null);if(null===m)return[2,{location:b,value:null}];d=m.row;x=m.col;y=m.rowOffset;
E=m.colOffset;t=this.url;q=l+"/"+d+"/"+x;u=r.getBlock(t,null,q);O.isSome(u)||(u=this.fetchRawTile(l,d,x,e),r.putBlock(t,null,q,u));return[4,u];case 4:v=c.sent();if(!(v&&v.pixels&&0<v.pixels.length))return[2,{location:b,value:null}];A=y*this.rasterInfo.storageInfo.blockHeight+E;w=!v.mask||v.mask[A]?v.pixels.map(function(a){return a[A]}):null;return[2,{location:b,value:w,pyramidLevel:l}]}})})};d.prototype.fetchPixels=function(a,e,h,g){void 0===g&&(g={});return c.__awaiter(this,void 0,void 0,function(){var k,
f,b,l,d,m,B,x,y,E,t,q,u,v,A,w,n,R,r,C,D,z,G,H,F,I,J;return c.__generator(this,function(c){switch(c.label){case 0:k=a.clone().normalize();a=k[0];f=this.rasterInfo.spatialReference;b=!a.spatialReference.equals(f);l=g.datumTransformation;d=new K.Point({x:(a.xmax-a.xmin)/e,y:(a.ymax-a.ymin)/h,spatialReference:a.spatialReference});m=g.srcResolution||(b?p.projectResolution(d,f,a,l):d);if(!m)return[2,null];B=p.snapPyramid(m,this.rasterInfo,this.ioConfig.sampling);x=B.pyramidLevel;y=B.pyramidResolution;if(E=
B.excessiveReading)return[2,null];t=this.rasterInfo.storageInfo;q=b?p.projectExtent(a,f,l):a;if(null==q)return[2,null];u={x:Math.floor((q.xmin-t.origin.x)/y.x+.1),y:Math.floor((t.origin.y-q.ymax)/y.y+.1)};v=Math.ceil((q.xmax-q.xmin)/y.x-.1);A=Math.ceil((q.ymax-q.ymin)/y.y-.1);return 8<v/e||8<A/h?[2,null]:[4,this.fetchRawPixels(x,u,{width:v,height:A},g)];case 1:w=c.sent();if(!w)return[2,null];n=0<x?t.pyramidBlockWidth:t.blockWidth;R=0<x?t.pyramidBlockHeight:t.blockHeight;if(r=!b&&1===w.pixelBlocks.length&&
n===e&&R===h&&m.x===d.x&&m.y===d.y)return[2,{extent:a,srcExtent:q,pixelBlock:w.pixelBlocks[0],transformGrid:null}];C=p.getProjectionOffsetGrid(a,w.extent,d,l);z=!g.requestRawData;G={rows:C.spacing[0],cols:C.spacing[1]};H=w.pixelBlocks;F=w.mosaicSize;I=w.isPartiallyFilled;return this.rasterJobHandler?[4,this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:H,srcMosaicSize:F,destDimension:z?{width:e,height:h}:null,coefs:z?C.coefficients:null,sampleSpacing:z?G:null},g)]:[3,3];case 2:return D=c.sent(),
[3,4];case 3:J=P.mosaic(H,F),D=z?P.approximateTransform(J,{width:e,height:h},C.coefficients,G):J,c.label=4;case 4:return[2,{srcExtent:q,pixelBlock:D,transformGrid:C,extent:a,isPartiallyFilled:I}]}})})};d.prototype.fetchRawPixels=function(a,e,d,g){return c.__awaiter(this,void 0,void 0,function(){var k,f,b,l,h,m,B,x,y,E,t,q,u,v,A,w,n,p,r,C,D,z,G,H,F,I,J;return c.__generator(this,function(c){switch(c.label){case 0:k=this.rasterInfo.storageInfo;f=k.origin;b=k.blockBoundary;l=0<a?this.rasterInfo.storageInfo.pyramidBlockWidth:
this.rasterInfo.storageInfo.blockWidth;h=0<a?this.rasterInfo.storageInfo.pyramidBlockHeight:this.rasterInfo.storageInfo.blockHeight;m=Math.floor(e.x/l);B=Math.floor(e.y/h);x=Math.floor((e.x+d.width-1)/l);y=Math.floor((e.y+d.height-1)/h);E=this.rasterInfo;t=E.pixelSize;q=E.spatialReference;u=b[a];if(!u)return[2,null];v=u.minRow;A=u.minCol;w=u.maxCol;n=u.maxRow;if(y<v||x<A||B>n||m>w)return[2,null];p=[];C=!1;for(D=B;D<=y;D++)for(z=m;z<=x;z++)D>=v&&z>=A&&n>=D&&w>=z?(r=this._fetchRawTile(a,D,z,g),this.ioConfig.allowPartialFill&&
(r=L.create(function(a){r.then(function(e){return a(e)}).catch(function(){C=!0;a(null)})})),p.push(r)):p.push(null);return 0===p.length?[2,null]:[4,L.all(p)];case 1:return G=c.sent(),H={height:(y-B+1)*l,width:(x-m+1)*h},F=t.x*Math.pow(2,a),I=t.y*Math.pow(2,a),J=new K.Extent({xmin:f.x+m*l*F,xmax:f.x+(x+1)*l*F,ymin:f.y-(y+1)*h*I,ymax:f.y-B*h*I,spatialReference:q}),[2,{extent:J,pixelBlocks:G,mosaicSize:H,isPartiallyFilled:C}]}})})};d.prototype.fetchRawTile=function(a,e,d,g){return c.__awaiter(this,void 0,
void 0,function(){return c.__generator(this,function(a){throw new N("BaseRaster:read-not-implemented","fetchRawTile() is not implemented");})})};d.prototype.computeExtent=function(a){return p.projectExtent(this.rasterInfo.extent,a)};d.prototype.decodePixelBlock=function(a,e){return this.rasterJobHandler?this.rasterJobHandler.decode({data:a,options:e}):Y.decode(a,e)};d.prototype.request=function(a,e){return c.__awaiter(this,void 0,void 0,function(){var d,g,k,f,b,l,p,m;return c.__generator(this,function(h){switch(h.label){case 0:d=
this.ioConfig.customFetchParameters,g=a.url,k=a.range,f=a.query,b=a.responseType,null==a.retryCount&&this.ioConfig.retryCount&&(a.retryCount=this.ioConfig.retryCount),l=k?{Range:"bytes\x3d"+k.from+"-"+k.to}:null,h.label=1;case 1:return h.trys.push([1,3,,4]),[4,S(g,{query:c.__assign(c.__assign({},f),d),headers:l,responseType:b,signal:e})];case 2:return p=h.sent().data,[2,p];case 3:m=h.sent();if(0<a.retryCount)return a.retryCount--,[2,this.request(a,e)];throw m;case 4:return[2]}})})};d.prototype.getSliceIndex=
function(a){var e=this.rasterInfo.multidimensionalInfo;if(!e||0===a.length)return null;for(var c=0,d=a[0].variableName,k=function(b){b=e.variables[b];var g=b.dimensions;if(b.name!==d)return c+=g.map(function(a){return a.values.length}).reduce(function(a,c){return a+c}),"break";var k=g.map(function(a){return a.values.length}),f=g.length;b=function(e){var b=a.filter(function(a){return a.dimensionName===g[e].name})[0];if(null==b)return{value:null};b=Array.isArray(b.values[0])?b.values[0][0]:b.values[0];
b=g[e].values.indexOf(b);if(-1===b)return{value:null};k.shift();c=e===f-1?c+b:c+b*k.reduce(function(a,b){return a+b})};for(var h=0;h<f;h++){var l=b(h);if("object"===typeof l)return l}},f=0;f<e.variables.length;f++){var b=k(f);if("object"===typeof b)return b.value;if("break"===b)break}return c};d.prototype.computeBestPyramidLevelForLocation=function(a,e){void 0===e&&(e={});return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(a){return[2,0]})})};d.prototype.identifyPixelLocation=
function(a,e,c){var d=this.rasterInfo,k=d.pixelSize,f=d.extent,b=this.rasterInfo.storageInfo,h=b.blockWidth,n=b.blockHeight,m=b.maximumPyramidLevel,r=b.pyramidScalingFactor,b=b.origin;a=p.projectPoint(a,d.spatialReference,c);if(!f.intersects(a)||0>e||e>m)return null;m=Math.pow(r,e);f=(b.y-a.y)/(m*k.y)/n;k=(a.x-b.x)/(m*k.x)/h;return{pyramidLevel:e,row:Math.floor(f),col:Math.floor(k),rowOffset:Math.min(n-1,Math.floor((f-Math.floor(f))*n)),colOffset:Math.min(h-1,Math.floor((k-Math.floor(k))*h)),srcLocation:a}};
d.prototype._getTileExtent=function(a,c,d,g){var e=g.origin,f=g.size[0],b=g.size[1];d=e.x+d*f*a.x;c=e.y-c*b*a.y;return new K.Extent({xmin:d,xmax:d+f*a.x,ymin:c-b*a.y,ymax:c,spatialReference:g.spatialReference})};d.prototype._fetchRawTile=function(a,d,h,g){var e=this.url,f=a+"/"+d+"/"+h,b=r.getBlock(e,g.registryId,f);if(!O.isSome(b)){var l=L.createAbortController(),b=this.fetchRawTile(a,d,h,c.__assign(c.__assign({},g),{signal:l.signal}));r.putBlock(e,g.registryId,f,b,l);b.catch(function(){r.deleteBlock(e,
g.registryId,f)})}if(g.signal)L.onAbort(g,function(){r.decreaseRefCount(e,g.registryId,f)});return b};c.__decorate([n.property(W.url)],d.prototype,"url",null);c.__decorate([n.property({type:String,json:{write:!0}})],d.prototype,"datasetName",void 0);c.__decorate([n.property({type:String,json:{write:!0}})],d.prototype,"datasetFormat",void 0);c.__decorate([n.property()],d.prototype,"rasterInfo",void 0);c.__decorate([n.property()],d.prototype,"ioConfig",void 0);c.__decorate([n.property()],d.prototype,
"sourceJSON",void 0);return d=c.__decorate([n.subclass("esri.layers.support.rasterDatasets.BaseRaster")],d)}(U.EsriPromiseMixin(T.JSONSupport))});