// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/accessorSupport/decorators","./ClassificationDefinition"],function(g,h,c,d,f){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.attributeField=null;a.attributeField2=null;a.attributeField3=null;a.fieldDelimiter=null;a.type="unique-value-definition";return a}c.__extends(b,e);Object.defineProperty(b.prototype,"uniqueValueFields",{get:function(){var a=[];this.attributeField&&a.push(this.attributeField);this.attributeField2&&
a.push(this.attributeField2);this.attributeField3&&a.push(this.attributeField3);return a},enumerable:!0,configurable:!0});c.__decorate([d.property()],b.prototype,"attributeField",void 0);c.__decorate([d.property()],b.prototype,"attributeField2",void 0);c.__decorate([d.property()],b.prototype,"attributeField3",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"fieldDelimiter",void 0);c.__decorate([d.property({dependsOn:["attributeField","attributeField2","attributeField3"],json:{write:!0}})],
b.prototype,"uniqueValueFields",null);c.__decorate([d.property()],b.prototype,"type",void 0);return b=c.__decorate([d.subclass("esri.tasks.support.UniqueValueDefinition")],b)}(f)});