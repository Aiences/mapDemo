//>>built
define("dojo/aspect dojo/_base/declare dojo/_base/Deferred dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/topic dojo/on dojo/parser dojo/query dojo/fx/easing dojo/NodeList-dom".split(" "),function(w,r,x,h,n,y,z,k,p,t,l,u,B,A,v){r=r("dojox.widget.Rotator",null,{transition:"dojox.widget.rotator.swap",transitionParams:"duration:500",panes:null,constructor:function(a,c){h.mixin(this,a);var b=this;a=b.transition;var d=b._transitions=
{};b._idMap={};var e=b.transitionParams=eval("({ "+b.transitionParams+" })");c=b._domNode=z.byId(c);b._domNodeContentBox=t.getContentBox(c);b.id=c.id||(new Date).getTime();"static"==l.get(c,"position")&&l.set(c,"position","relative");d[a]=h.getObject(a);d[a]||(this._transitionWarn(a,"dojox.widget.rotator.swap"),d[b.transition="dojox.widget.rotator.swap"]=h.getObject("dojox.widget.rotator.swap"));e.duration||(e.duration=500);n.forEach(b.panes,function(b){p.create("div",b,c)});b.panes=[];v("\x3e *",
c).forEach(function(a,c){b._initializePane(a,c)});b._controlSub=u.subscribe(b.id+"/rotator/control",h.hitch(b,this.control))},insert:function(a,c){var b;b=this.panes;null==c&&(c=b.length);c<b.length?(b=b[c],p.place(a,b.node,"before")):p.place(a,this._domNode,"last");this._initializePane(a,c)},remove:function(a){function c(b){var a=e.splice(b,1)[0];a&&(a.id&&(d._idMap[a.id]=void 0),d._domNode.removeChild(a.node));d.idx>b&&d.idx--}var b,d=this,e=this.panes;if("number"===typeof a)b=a;else{for(var f=
0;f<e.length;f++)if(e[f].node===a){b=f;break}if(null==b)return}if(b===this.idx&&(a=this.go(this.idx-1)))return a.then(function(){c(b)});c(b)},destroy:function(){n.forEach([this._controlSub,this.wfe],function(a){a&&a.remove()});p.destroy(this._domNode);this.panes=[]},next:function(){return this.go(this.idx+1)},prev:function(){return this.go(this.idx-1)},go:function(a){var c=this,b=c.idx,d=c.panes,e=d.length,f=c._idMap[a];c._resetWaitForEvent();a=null!=f?f:a||0;a=a<e?0>a?e-1:a:0;if(a==b||c.anim)return null;
var g=d[b],m=d[a];l.set(g.node,"zIndex",2);l.set(m.node,"zIndex",1);var q={current:g,next:m,rotator:c};if(b=c.anim=c._transitions[m.trans](h.mixin({rotatorBox:c._domNodeContentBox},q,m.params))){var k=new x,n=m.waitForEvent,p=w.after(b,"onEnd",function(){l.set(g.node,{display:"none",left:0,opacity:1,top:0,zIndex:0});p.remove();c.anim=null;c.idx=a;if(g.onAfterOut)g.onAfterOut(q);if(m.onAfterIn)m.onAfterIn(q);c.onUpdate("onAfterTransition");n||(c._resetWaitForEvent(),k.callback())},!0);c.wfe=n?u.subscribe(n,
function(){c._resetWaitForEvent();k.callback(!0)}):null;c.onUpdate("onBeforeTransition");if(g.onBeforeOut)g.onBeforeOut(q);if(m.onBeforeIn)m.onBeforeIn(q);b.play();return k}},onUpdate:function(a,c){u.publish(this.id+"/rotator/update",a,this,c||{})},_initializePane:function(a,c){var b={node:a,idx:c,params:h.mixin({},this.transitionParams,eval("({ "+(k.get(a,"transitionParams")||"")+" })"))},d=b.trans=k.get(a,"transition")||this.transition,e=this._transitions,f=this.panes,g={left:0,top:0,position:"absolute",
display:"none"};n.forEach(["id","title","duration","waitForEvent"],function(c){b[c]=k.get(a,c)});b.id&&(this._idMap[b.id]=c);e[d]||(e[d]=h.getObject(d))||this._transitionWarn(d,b.trans=this.transition);if(null==this.idx||k.get(a,"selected"))null!=this.idx&&l.set(f[this.idx].node,"display","none"),this.idx=c,g.display="";l.set(a,g);v("\x3e script[type^\x3d'dojo/method']",a).orphan().forEach(function(a){var c=k.get(a,"event");c&&(b[c]=A._functionFromScript(a))});f.splice(c,0,b)},_resetWaitForEvent:function(){this.wfe&&
(this.wfe.remove(),delete this.wfe)},control:function(a){var c=h._toArray(arguments),b=this;c.shift();b._resetWaitForEvent();b[a]?((c=b[a].apply(b,c))&&c.addCallback(function(){b.onUpdate(a)}),b.onManualChange(a)):console.warn(b.declaredClass,' - Unsupported action "',a,'".')},resize:function(a,c){var b=this._domNodeContentBox={w:a,h:c};t.setContentSize(this._domNode,b);n.forEach(this.panes,function(a){t.setContentSize(a.node,b)})},onManualChange:function(){},_transitionWarn:function(a,c){console.warn(this.declaredClass,
' - Unable to find transition "',a,'", defaulting to "',c,'".')}});h.setObject("dojox.widget.rotator.swap",function(a){return new y.Animation({play:function(){l.set(a.current.node,"display","none");l.set(a.next.node,"display","");this._fire("onEnd")}})});return r});