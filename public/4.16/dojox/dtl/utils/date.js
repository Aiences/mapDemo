//>>built
define(["dojo/_base/lang","dojox/date/php","../_base"],function(d,e,f){var b=d.getObject("utils.date",!0,f);b.DateFormat=e.DateFormat;d.extend(b.DateFormat,e.DateFormat.prototype,{f:function(){return this.date.getMinutes()?this.g()+":"+this.i():this.g()},N:function(){return b._months_ap[this.date.getMonth()]},P:function(){return this.date.getMinutes()||this.date.getHours()?this.date.getMinutes()||12!=this.date.getHours()?this.f()+" "+this.a():"noon":"midnight"}});d.mixin(dojox.dtl.utils.date,{format:function(a,
c){return(new dojox.dtl.utils.date.DateFormat(c)).format(a)},timesince:function(a,c){a instanceof Date||(a=new Date(a.year,a.month,a.day));c||(c=new Date);a=Math.abs(c.getTime()-a.getTime());c=0;for(var b;b=dojox.dtl.utils.date._chunks[c];c++){var d=Math.floor(a/b[0]);if(d)break}return d+" "+b[1](d)},_chunks:[[31536E6,function(a){return 1==a?"year":"years"}],[2592E6,function(a){return 1==a?"month":"months"}],[6048E5,function(a){return 1==a?"week":"weeks"}],[864E5,function(a){return 1==a?"day":"days"}],
[36E5,function(a){return 1==a?"hour":"hours"}],[6E4,function(a){return 1==a?"minute":"minutes"}]],_months_ap:"Jan. Feb. March April May June July Aug. Sept. Oct. Nov. Dec.".split(" ")});return b});