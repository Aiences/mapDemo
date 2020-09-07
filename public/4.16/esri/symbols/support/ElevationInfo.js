// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/jsonMap ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators ./FeatureExpressionInfo ./unitConversionUtils".split(" "),function(p,q,b,g,l,m,c,h,n){var d=g.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),k=new g.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function a(){var a=
null!==e&&e.apply(this,arguments)||this;a.offset=null;return a}b.__extends(a,e);f=a;a.prototype.readFeatureExpressionInfo=function(a,b){if(null!=a)return a;if(b.featureExpression&&0===b.featureExpression.value)return{expression:"0"}};a.prototype.writeFeatureExpressionInfo=function(a,b,c,d){b[c]=a.write(null,d);"0"===a.expression&&(b.featureExpression={value:0})};Object.defineProperty(a.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):m.isSome(this.offset)||this.featureExpressionInfo?
"relative-to-ground":"on-the-ground"},set:function(a){this._override("mode",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"unit",{set:function(a){this._set("unit",a)},enumerable:!0,configurable:!0});a.prototype.write=function(a,b){return this.offset||this.mode||this.featureExpressionInfo||this.unit?e.prototype.write.call(this,a,b):null};a.prototype.clone=function(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():
void 0,unit:this.unit})};var f;b.__decorate([c.property({type:h,json:{write:!0}})],a.prototype,"featureExpressionInfo",void 0);b.__decorate([c.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],a.prototype,"readFeatureExpressionInfo",null);b.__decorate([c.writer("featureExpressionInfo",{featureExpressionInfo:{type:h},"featureExpression.value":{type:[0]}})],a.prototype,"writeFeatureExpressionInfo",null);b.__decorate([c.property({type:d.apiValues,dependsOn:["offset","featureExpressionInfo"],
nonNullable:!0,json:{type:d.jsonValues,read:d.read,write:{writer:d.write,isRequired:!0}}})],a.prototype,"mode",null);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"offset",void 0);b.__decorate([c.property({type:n.supportedUnits,json:{type:String,read:k.read,write:k.write}})],a.prototype,"unit",null);return a=f=b.__decorate([c.subclass("esri.layers.support.ElevationInfo")],a)}(l.JSONSupport)});