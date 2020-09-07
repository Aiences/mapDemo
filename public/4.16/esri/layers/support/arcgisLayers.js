// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/Error ./arcgisLayerUrl ./lazyLayerLoader @dojo/framework/shim/Promise".split(" "),function(q,h,b,r,t,u,v){function w(c,a){return c.sublayerIds.map(function(d){return new c.Constructor(b.__assign(b.__assign({},a),{layerId:d,sublayerTitleMode:"service-name"}))})}function x(c){return b.__awaiter(this,void 0,void 0,function(){var a,d,f,e,g,p,k,m,n,h;return b.__generator(this,function(b){switch(b.label){case 0:a=u.parse(c);if(!a)throw new t("arcgis-layers:url-mismatch",
"The url '${url}' is not a valid arcgis resource",{url:c});d=a.serverType;f=a.sublayer;g={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(d){case "MapServer":e=null!=f?"FeatureLayer":y(c).then(function(a){return a?"TileLayer":"MapImageLayer"});break;case "ImageServer":e=l(c).then(function(a){var b=a.tileInfo&&a.tileInfo.format;return a.tileInfo?b&&"LERC"===b.toUpperCase()&&a.cacheType&&"elevation"===a.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":
"ImageryLayer"});break;case "SceneServer":e=l(a.url.path).then(function(a){var b={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return a&&Array.isArray(a.layers)&&0<a.layers.length&&(a=a.layers[0].layerType,null!=b[a])?b[a]:"SceneLayer"});break;default:e=g[d]}p={FeatureLayer:!0,SceneLayer:!0};k={parsedUrl:a,Constructor:null,sublayerIds:null};return[4,e];case 1:return m=b.sent(),p[m]&&null==f?[4,z(c)]:[3,
3];case 2:n=b.sent(),1!==n.length&&(k.sublayerIds=n),b.label=3;case 3:return h=k,[4,A(m)];case 4:return h.Constructor=b.sent(),[2,k]}})})}function z(c){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){switch(b.label){case 0:return[4,l(c)];case 1:return(a=b.sent())&&Array.isArray(a.layers)?[2,a.layers.map(function(a){return a.id}).reverse()]:[2,[]]}})})}function A(c){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){a=
v.layerLookupMap[c];return[2,a()]})})}function y(c){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){switch(b.label){case 0:return[4,l(c)];case 1:return a=b.sent(),[2,a.tileInfo]}})})}function l(c){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){switch(b.label){case 0:return[4,r(c,{responseType:"json",query:{f:"json"}})];case 1:return a=b.sent(),[2,a.data]}})})}Object.defineProperty(h,"__esModule",{value:!0});
h.fromUrl=function(c){return b.__awaiter(this,void 0,void 0,function(){var a,d,f,e;return b.__generator(this,function(g){switch(g.label){case 0:return[4,x(c.url)];case 1:return a=g.sent(),d=b.__assign(b.__assign({},c.properties),{url:c.url}),a.sublayerIds?[4,new Promise(function(a,b){q(["../GroupLayer"],a,b)})]:[2,new a.Constructor(d)];case 2:return f=g.sent(),e=new f({title:a.parsedUrl.title}),w(a,d).forEach(function(a){return e.add(a)}),[2,e]}})})}});