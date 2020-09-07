// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/arrayUtils ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/promiseUtils ../../core/accessorSupport/decorators".split(" "),function(p,q,b,h,k,l,m,n,d){return function(g){function c(a){a=g.call(this,a)||this;a._indexHistory=[];a._lastStepIndex=-1;a._stepIndex=-1;a._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"};a.data=null;a.started=!1;a.steps=null;a.type=null;return a}b.__extends(c,g);Object.defineProperty(c.prototype,
"hasNextStep",{get:function(){var a=this.steps;return!!(a&&this._stepIndex<a.filter(function(a){return!a.parent}).length-1)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"hasPreviousStep",{get:function(){return 0<this._stepIndex},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"stepId",{get:function(){var a=this.steps;return(a=a&&a[this._stepIndex])&&a.id},enumerable:!0,configurable:!0});c.prototype.cancel=function(a){void 0===a&&(a={force:!0});return b.__awaiter(this,
void 0,void 0,function(){var c=this;return b.__generator(this,function(b){return!1!==a.force?[2,this._cancel()]:[2,n.create(function(a,b){c.emit("cancel-request",{controller:{allow:function(){c._cancel().then(a)},deny:function(){return b(new k("workflow:cancel-denied","Request to cancel workflow was denied."))}}})})]})})};c.prototype.commit=function(){return b.__awaiter(this,void 0,void 0,function(){var a,c,d,e,f;return b.__generator(this,function(b){switch(b.label){case 0:return a=this.data,this.handles.remove(this._handleKeys.beforeCommit),
c=a.edits.feature,d=c.clone(),a.edits.attributesModified||(e=c.layer.objectIdField,d.attributes=(f={},f[e]=c.getAttribute(e),f)),a.edits.geometryModified||(d.geometry=null),[4,this.afterCommit(d)];case 1:return b.sent(),this.handles.remove(this._handleKeys.afterCommit),[4,this.reset()];case 2:return b.sent(),this.emit("commit"),[2]}})})};c.prototype.go=function(a){return b.__awaiter(this,void 0,void 0,function(){var c,d;return b.__generator(this,function(b){switch(b.label){case 0:return c=this.steps,
d=h.findIndex(c,function(b){return b.id===a}),this._indexHistory.push(this._stepIndex),[4,this._go(d)];case 1:return b.sent(),[2]}})})};c.prototype.next=function(){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(a){switch(a.label){case 0:return this._indexHistory.push(this._stepIndex),[4,this._go(this._stepIndex+1)];case 1:return a.sent(),[2]}})})};c.prototype.previous=function(){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(a){switch(a.label){case 0:return[4,
this._go(this._indexHistory.pop())];case 1:return a.sent(),[2]}})})};c.prototype.reset=function(){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(a){switch(a.label){case 0:return[4,this._cancel(!1)];case 1:return a.sent(),[4,this.start()];case 2:return a.sent(),[2]}})})};c.prototype.start=function(){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){switch(b.label){case 0:return this._set("started",!0),a=-1===this._stepIndex?
0:this._stepIndex,[4,this._go(a)];case 1:return b.sent(),[2]}})})};c.prototype._cancel=function(a){void 0===a&&(a=!0);return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:if(!this.started)return[3,2];this._set("started",!1);return[4,this.steps[this._stepIndex].tearDown()];case 1:b.sent(),b.label=2;case 2:return this.handles.remove([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]),this._resetIndexing(a),a&&this.emit("cancel"),[2]}})})};
c.prototype._go=function(a){void 0===a&&(a=-1);return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:return-1>=a||a>=this.steps.length?[2]:this.started?-1<this._lastStepIndex?[4,this.steps[this._lastStepIndex].tearDown()]:[3,2]:(this._stepIndex=a,this._notifyStepProps(),[2]);case 1:b.sent(),b.label=2;case 2:return[4,this.steps[a].setUp()];case 3:return b.sent(),this._stepIndex=this._lastStepIndex=a,this._notifyStepProps(),[2]}})})};c.prototype._resetIndexing=
function(a){void 0===a&&(a=!0);this._lastStepIndex=this._stepIndex=-1;this._indexHistory.length=0;a&&this._notifyStepProps()};c.prototype._notifyStepProps=function(){this.notifyChange("stepId");this.notifyChange("hasPreviousStep");this.notifyChange("hasNextStep")};b.__decorate([d.property()],c.prototype,"afterCommit",void 0);b.__decorate([d.property()],c.prototype,"data",void 0);b.__decorate([d.property()],c.prototype,"hasNextStep",null);b.__decorate([d.property()],c.prototype,"hasPreviousStep",null);
b.__decorate([d.property()],c.prototype,"started",void 0);b.__decorate([d.property({readOnly:!0,dependsOn:["steps"]})],c.prototype,"stepId",null);b.__decorate([d.property()],c.prototype,"steps",void 0);b.__decorate([d.property()],c.prototype,"type",void 0);b.__decorate([d.property()],c.prototype,"commit",null);return c=b.__decorate([d.subclass("esri.widgets.Editor.Workflow")],c)}(m.HandleOwnerMixin(l.EventedAccessor))});