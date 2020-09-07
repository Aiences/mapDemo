// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/arrayUtils ../../core/Collection ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/Logger ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/GraphicsLayer ../../layers/graphics/editingSupport ../Attachments/AttachmentsViewModel ./CreateWorkflow ./UpdateWorkflow ../FeatureForm/FeatureFormViewModel ../FeatureTemplates/FeatureTemplatesViewModel ../Sketch/SketchViewModel ../Spinner/SpinnerViewModel".split(" "),function(I,
J,b,k,q,r,t,u,v,l,e,w,x,y,z,A,B,C,D,E){function f(b,c,a){F.error(new r(b,c,a))}function G(b){return b&&x.isEditableLayer(b.layer)}function H(b,c){return b&&k.find(b,function(a){return a.layer===c})}var F=v.getLogger("esri.widgets.Editor.EditorViewModel"),p=["create","update"];return function(n){function c(a){a=n.call(this,a)||this;a._sketchGraphicsLayer=new w({listMode:"hide"});a.activeWorkflow=null;a.activityQueue=[];a.failures=[];a.attachmentsViewModel=new y({abilities:{editing:!0}});a.featureFormViewModel=
new B;a.featureTemplatesViewModel=new C;a.layerInfos=null;a.sketchViewModel=new D({layer:a._sketchGraphicsLayer});a.spinnerViewModel=new E;return a}b.__extends(c,n);c.prototype.initialize=function(){var a=this;this.handles.add([l.on(this,"activeWorkflow","cancel",function(){return a.emit("workflow-cancel")}),l.on(this,"activeWorkflow","commit",function(){return a.emit("workflow-commit")}),l.on(this,"view.allLayerViews","change",function(){return a.notifyChange("editableItems")}),l.watch(this,"editableItems",
function(){var d=a.activeWorkflow;if(d){var b=d.stepId;"create"===d.type?(a.refreshCreationTemplates(),"awaiting-feature-creation-info"!==b||a.canCreate||a._cancelWorkflow()):"update"===d.type&&("awaiting-feature-to-update"===b&&!a.canUpdate||"awaiting-update-feature-candidate"===b&&!d.data.candidates.some(function(d){var b=a.editableItems.find(function(a){return a.layer===d.layer});return b&&-1<b.supports.indexOf("update")}))&&a._cancelWorkflow()}})])};c.prototype.destroy=function(){var a=this;this._cancelWorkflow().then(function(){return a.view=
null})};Object.defineProperty(c.prototype,"allowedWorkflows",{get:function(){return this._get("allowedWorkflows")},set:function(a){a&&0!==a.length||(a=b.__spreadArrays(p));this._set("allowedWorkflows",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"canCreate",{get:function(){return this.editableItems.some(function(a){return-1<a.supports.indexOf("create")})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"canUpdate",{get:function(){return this.editableItems.some(function(a){return-1<
a.supports.indexOf("update")})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"editableItems",{get:function(){var a=this,d=this.get("view.allLayerViews");if(!d)return new q;this.handles.remove("layer-view-property-watchers");var b=function(){return a.notifyChange("editableItems")};return d.filter(G).map(function(d){a.handles.add(l.watch(d,["suspended","suspendInfo"],b),"layer-view-property-watchers");var c=d.layer,g=d.suspendInfo;d=[];var m=a.allowedWorkflows,e=c.capabilities,
f=e.data,e=e.operations,h=H(a.layerInfos,c),f=f.supportsAttachment&&(!h||!1!==h.allowAttachments),m=m.filter(function(a){return h?!1!==h.enabled&&("create"===a&&!1!==h.addEnabled||"update"===a&&!1!==h.updateEnabled):!0}),g=g.layerInvisible||g.layerNotLoaded||g.outsideScaleRange||g.viewNotReady;!g&&k.find(m,function(a){return"create"===a})&&e.supportsAdd&&d.push("create");!g&&k.find(m,function(a){return"update"===a})&&e.supportsUpdate&&d.push("update");!g&&!1!==(h&&h.deleteEnabled)&&e.supportsDelete&&
d.push("delete");return{hasAttachments:f,layer:c,supports:d}}).reverse()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";var a=this.attachmentsViewModel.mode;return"add"===a?"adding-attachment":"edit"===a?"editing-attachment":(a=this.activeWorkflow)?a.stepId:"ready"},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"syncing",{get:function(){return 0<this.activityQueue.length},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"view",{set:function(a){this.sketchViewModel.view=a;this.spinnerViewModel.view=a;this._set("view",a)},enumerable:!0,configurable:!0});c.prototype.startCreateWorkflowAtFeatureTypeSelection=function(){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(d){switch(d.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Create workflow is unsupported or disabled."),
[2]);case 1:return d.sent(),a=this._createCreateWorkflow(),[4,a.start()];case 2:return d.sent(),this._set("activeWorkflow",a),[2]}})})};c.prototype.startCreateWorkflowAtFeatureCreation=function(a){return b.__awaiter(this,void 0,void 0,function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),d=this._createCreateWorkflow("awaiting-feature-to-create"),
d.data.creationInfo=a,[4,d.start()];case 2:return b.sent(),this._set("activeWorkflow",d),[2]}})})};c.prototype.startCreateWorkflowAtFeatureEdit=function(a){return b.__awaiter(this,void 0,void 0,function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),d=this._createCreateWorkflow("editing-new-feature"),d.data.edits.feature=
a,[4,d.start()];case 2:return b.sent(),this._set("activeWorkflow",d),[2]}})})};c.prototype.startUpdateWorkflowAtFeatureSelection=function(){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(d){switch(d.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return d.sent(),a=this._createUpdateWorkflow(),[4,a.start()];case 2:return d.sent(),this._set("activeWorkflow",
a),[2]}})})};c.prototype.startUpdateWorkflowAtMultipleFeatureSelection=function(a){return b.__awaiter(this,void 0,void 0,function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),d=this._createUpdateWorkflow("awaiting-update-feature-candidate"),d.data.candidates=a,[4,d.start()];case 2:return b.sent(),this._set("activeWorkflow",
d),[2]}})})};c.prototype.startUpdateWorkflowAtFeatureEdit=function(a){return b.__awaiter(this,void 0,void 0,function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(f("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),d=this._createUpdateWorkflow("editing-existing-feature"),d.data.edits.feature=a,[4,d.start()];case 2:return b.sent(),this._set("activeWorkflow",d),[2]}})})};
c.prototype.deleteFeatureFromWorkflow=function(){return b.__awaiter(this,void 0,void 0,function(){var a;return b.__generator(this,function(b){switch(b.label){case 0:return a=this.activeWorkflow,a&&"create"!==a.type?[4,this._delete(a.data.edits.feature)]:(f("editing:unsupported-workflow","Deleting requires an active update workflow."),[2]);case 1:return b.sent(),[4,a.reset()];case 2:return b.sent(),[2]}})})};c.prototype.cancelWorkflow=function(a){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,
function(d){return[2,this._cancelWorkflow(b.__assign({warn:!0},a))]})})};c.prototype.refreshCreationTemplates=function(){this.featureTemplatesViewModel.layers=this.editableItems.filter(function(a){return-1<a.supports.indexOf("create")}).map(function(a){return a.layer}).toArray()};c.prototype._cancelWorkflow=function(a){return b.__awaiter(this,void 0,void 0,function(){var d,c;return b.__generator(this,function(b){switch(b.label){case 0:d=this.activeWorkflow;if(!d)return a&&a.warn&&f("editing:no-active-workflow",
"There is no active workflow to cancel."),[2];c=!a||!1!==a.force;if(!c)return[3,2];this.emit("workflow-cancel");this._set("activeWorkflow",null);return[4,d.cancel(a)];case 1:return b.sent(),[2];case 2:return[4,d.cancel(a)];case 3:return b.sent(),this._set("activeWorkflow",null),[2]}})})};c.prototype._createCreateWorkflow=function(a){var b=this;return z.create(this,a,function(a){return b._create(a)})};c.prototype._createUpdateWorkflow=function(a){var b=this;return A.create(this,a,function(a){return b._update(a)})};
c.prototype._create=function(a){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:return[4,this._applyEdits(a.layer,{addFeatures:[a]})];case 1:return b.sent(),[2]}})})};c.prototype._delete=function(a){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:return[4,this._applyEdits(a.layer,{deleteFeatures:[a]})];case 1:return b.sent(),[2]}})})};c.prototype._update=function(a){return b.__awaiter(this,
void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:return[4,this._applyEdits(a.layer,{updateFeatures:[a]})];case 1:return b.sent(),[2]}})})};c.prototype._applyEdits=function(a,d){return b.__awaiter(this,void 0,void 0,function(){var c;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this._queueOperation(function(){return a.applyEdits(d)})];case 1:return b.sent(),[4,this.view.whenLayerView(a)];case 2:return c=b.sent(),[4,l.whenFalseOnce(c,"updating")];
case 3:return b.sent(),[2]}})})};c.prototype._queueOperation=function(a){var d=this;this.activityQueue.push(a);this.notifyChange("syncing");var c=function(a,b){a=b.indexOf(a);-1<a&&b.splice(a,1)};return a().then(function(a){var b=a.deleteFeatureResults,c=a.updateFeatureResults;if(a=k.find(a.addFeatureResults,function(a){return!!a.error})||k.find(c,function(a){return!!a.error})||k.find(b,function(a){return!!a.error}))throw a.error;}).catch(function(e){f("editing:operation-error","An error occurred.",
{error:e});var g={error:e,retry:function(){c(g,d.failures);return d._queueOperation(a)},cancel:function(){c(g,d.failures)}};d._set("failures",b.__spreadArrays(d.failures,[g]))}).then(function(){c(a,d.activityQueue);d.notifyChange("syncing")})};b.__decorate([e.property({readOnly:!0})],c.prototype,"activeWorkflow",void 0);b.__decorate([e.property({readOnly:!0})],c.prototype,"activityQueue",void 0);b.__decorate([e.property({value:b.__spreadArrays(p)})],c.prototype,"allowedWorkflows",null);b.__decorate([e.property({readOnly:!0,
dependsOn:["editableItems"]})],c.prototype,"canCreate",null);b.__decorate([e.property({readOnly:!0,dependsOn:["editableItems"]})],c.prototype,"canUpdate",null);b.__decorate([e.property({dependsOn:["allowedWorkflows","layerInfos","view.allLayerViews","view.ready"],readOnly:!0})],c.prototype,"editableItems",null);b.__decorate([e.property({readOnly:!0})],c.prototype,"failures",void 0);b.__decorate([e.property()],c.prototype,"attachmentsViewModel",void 0);b.__decorate([e.property()],c.prototype,"featureFormViewModel",
void 0);b.__decorate([e.property()],c.prototype,"featureTemplatesViewModel",void 0);b.__decorate([e.property()],c.prototype,"layerInfos",void 0);b.__decorate([e.property()],c.prototype,"sketchViewModel",void 0);b.__decorate([e.property()],c.prototype,"spinnerViewModel",void 0);b.__decorate([e.property({dependsOn:["attachmentsViewModel.mode","editableItems","activeWorkflow.stepId","view.ready"]})],c.prototype,"state",null);b.__decorate([e.property({readOnly:!0})],c.prototype,"syncing",null);b.__decorate([e.property()],
c.prototype,"view",null);return c=b.__decorate([e.subclass("esri.widgets.Editor.EditorViewModel")],c)}(u.HandleOwnerMixin(t.EventedAccessor))});