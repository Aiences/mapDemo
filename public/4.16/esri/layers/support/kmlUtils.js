// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../config ../../PopupTemplate ../../request ../../core/lang ../../geometry/SpatialReference ../../geometry/support/aaBoundingBox ../../geometry/support/boundsUtils ../../renderers/support/jsonUtils ../../tasks/support/FeatureSet".split(" "),function(D,m,t,u,v,w,n,x,l,p,y,z){function q(d,b,a){a.forEach(function(a){d.set(a.attributes[b],a)})}function A(d,b){var a;b.some(function(b){return b.id===d?(a=b,!0):!1});return a}function r(d){for(var b=l.create(),a=l.create(l.NEGATIVE_INFINITY),
f=0;f<d.length;f++){var c=d[f];if(c.polygons&&c.polygons.featureSet&&c.polygons.featureSet.features)for(var e=0,h=c.polygons.featureSet.features;e<h.length;e++){var k=h[e];p.getBoundsXYZ(b,k.geometry);l.expand(a,b,a)}if(c.polylines&&c.polylines.featureSet&&c.polylines.featureSet.features)for(e=0,h=c.polylines.featureSet.features;e<h.length;e++)k=h[e],p.getBoundsXYZ(b,k.geometry),l.expand(a,b,a);if(c.points&&c.points.featureSet&&c.points.featureSet.features)for(e=0,h=c.points.featureSet.features;e<
h.length;e++)k=h[e],p.getBoundsXYZ(b,k.geometry),l.expand(a,b,a);if(c.mapImages)for(e=0,c=c.mapImages;e<c.length;e++)k=c[e],p.getBoundsXYZ(b,k.extent),l.expand(a,b,a)}return l.equals(a,l.NEGATIVE_INFINITY)?null:{xmin:a[0],ymin:a[1],zmin:a[2],xmax:a[3],ymax:a[4],zmax:a[5],spatialReference:x.WGS84}}Object.defineProperty(m,"__esModule",{value:!0});var B={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};m.parseKML=function(d){var b=d.folders||[],a=b.slice(),
f=new Map,c=new Map,e=new Map,h=new Map,k=new Map,C={esriGeometryPoint:c,esriGeometryPolyline:e,esriGeometryPolygon:h};(d.featureCollection&&d.featureCollection.layers||[]).forEach(function(a){var b=n.clone(a);b.featureSet.features=[];var d=a.featureSet.geometryType;f.set(d,b);b=a.layerDefinition.objectIdField;"esriGeometryPoint"===d?q(c,b,a.featureSet.features):"esriGeometryPolyline"===d?q(e,b,a.featureSet.features):"esriGeometryPolygon"===d&&q(h,b,a.featureSet.features)});d.groundOverlays&&d.groundOverlays.forEach(function(a){k.set(a.id,
a)});b.forEach(function(b){b.networkLinkIds.forEach(function(c){var e=b.id;if(c=A(c,d.networkLinks))c.parentFolderId=e,c.networkLink=c;c&&a.push(c)})});a.forEach(function(a){a.featureInfos&&(a.points=n.clone(f.get("esriGeometryPoint")),a.polylines=n.clone(f.get("esriGeometryPolyline")),a.polygons=n.clone(f.get("esriGeometryPolygon")),a.mapImages=[],a.featureInfos.map(function(b){switch(b.type){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryPolygon":var c=C[b.type].get(b.id);
c&&a[B[b.type]].featureSet.features.push(c);break;case "GroundOverlay":(b=k.get(b.id))&&a.mapImages.push(b)}}),a.fullExtent=r([a]))});var g=r(a);return{folders:b,sublayers:a,extent:g}};m.fetchService=function(d,b,a,f){return w(u.kmlServiceUrl,{query:{url:d,model:"simple",folders:"",refresh:0!==a?!0:void 0,outSR:JSON.stringify(b)},responseType:"json",signal:f})};m.sublayersFromJSON=function(d,b,a,f){void 0===a&&(a=null);void 0===f&&(f=[]);var c=[],e={},h=b.sublayers,k=b.folders.map(function(a){return a.id});
h.forEach(function(b){var g=new d;a?g.read(b,a):g.read(b);f.length&&-1<k.indexOf(g.id)&&(g.visible=-1!==f.indexOf(g.id));e[b.id]=g;null!=b.parentFolderId&&-1!==b.parentFolderId?(b=e[b.parentFolderId],b.sublayers||(b.sublayers=[]),b.sublayers.unshift(g)):c.unshift(g)});return c};m.getGraphics=function(d){return t.__awaiter(this,void 0,void 0,function(){var b,a,f,c,e,h,k,l,g,m;return t.__generator(this,function(n){switch(n.label){case 0:b=z.fromJSON(d.featureSet),a=b.features,f=d.layerDefinition,c=
y.fromJSON(f.drawingInfo.renderer),e=v.fromJSON(d.popupInfo),h=[],k=0,l=a,n.label=1;case 1:if(!(k<l.length))return[3,4];g=l[k];return[4,c.getSymbolAsync(g)];case 2:m=n.sent(),g.symbol=m,g.popupTemplate=e,g.visible=g.attributes.visibility?!0:!1,h.push(g),n.label=3;case 3:return k++,[3,1];case 4:return[2,h]}})})};m.computeExtent=r});