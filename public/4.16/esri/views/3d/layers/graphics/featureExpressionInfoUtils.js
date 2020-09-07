// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Logger ../../../../layers/graphics/dehydratedFeatures ../../../../support/arcadeOnDemand".split(" "),function(q,c,d,l,m,n){Object.defineProperty(c,"__esModule",{value:!0});var p=l.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");c.clone=function(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:
null}};c.createContextWithoutExpressionSupport=function(a){a=a&&a.expression;return"string"===typeof a&&(a="0"===a?0:null,null!=a)?{cachedResult:a}:null};c.createContext=function(a,b,c){return d.__awaiter(this,void 0,void 0,function(){var f,g,h,e,k;return d.__generator(this,function(d){switch(d.label){case 0:f=a&&a.expression;if("string"!==typeof f)return[2,null];g="0"===f?0:null;return null!=g?[2,{cachedResult:g}]:[4,n.loadArcade()];case 1:return h=d.sent(),e=h.arcadeUtils,k=e.createSyntaxTree(f),
e.dependsOnView(k)?(null!=c&&c.error("Expressions containing '$view' are not supported on ElevationInfo"),[2,{cachedResult:0}]):[2,{arcade:{func:e.createFunction(k),context:e.createExecContext(null,{sr:b}),modules:h}}]}})})};c.createFeature=function(a,b,c){return a.arcadeUtils.createFeature(b.attributes,b.geometry,c)};c.setContextFeature=function(a,b){null!=a&&null==a.cachedResult&&(b&&a.arcade?(b._geometry&&(b._geometry=m.hydrateGeometry(b._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,
b)):p.errorOncePerTick("Arcade support required but not provided"))};c.execute=function(a){if(null!=a){if(null!=a.cachedResult)return a.cachedResult;var b=a.arcade,b=a.arcade.modules.arcadeUtils.executeFunction(b.func,b.context);"number"!==typeof b&&(b=a.cachedResult=0);return b}return 0};c.extractExpressionInfo=function(a,b){void 0===b&&(b=!1);var c=(a=a&&a.featureExpressionInfo)&&a.expression;b||"0"===c||(a=null);return a};c.zeroContext={cachedResult:0}});