(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-890aa2ac"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},2208:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.currentPage,page_cnt:t.pageCount,total:t.totalNumber,"on-page-changed":t.page}})],1),a("div",{staticClass:"three wide right aligned column"},[a("router-link",{staticClass:"ui primary button",attrs:{to:"/admin/contestset/add"}},[t._v(" "+t._s(t.$t("add contest set"))+" ")])],1)])]),a("table",{staticClass:"ui celled structured table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("contest set id")))]),a("th",[t._v(t._s(t.$t("title")))]),a("th",[t._v(t._s(t.$t("create time")))]),a("th",[t._v(t._s(t.$t("copy contest set")))]),a("th",[t._v(t._s(t.$t("available")))]),a("th",[t._v(t._s(t.$t("remove")))])])]),a("tbody",t._l(t.contestSetList,(function(e){return a("tr",{key:e.contestset_id},[a("td",[t._v(" "+t._s(e.contestset_id)+" ")]),a("td",[a("a",{attrs:{href:"/admin/contestset/edit/"+e.contestset_id,targe:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]),a("td",[t._v(" "+t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss"))+" ")]),a("td",{staticClass:"button_size"},[a("router-link",{staticClass:"ui inverted blue tiny labeled icon button",attrs:{to:"/admin/contestset/copy/"+e.contestset_id}},[a("i",{staticClass:"copy icon"}),t._v(" "+t._s(t.$t("copy"))+" ")])],1),a("td",{staticClass:"button_size"},[a("button",{class:"ui inverted tiny labeled icon button "+(t.defunctToBoolean(e.defunct)?"green":"red"),on:{click:function(a){return t.defunct(e.contestset_id)}}},[a("i",{class:(t.defunctToBoolean(e.defunct)?"checkmark":"remove")+" icon"}),t._v(" "+t._s(t.defunctToBoolean(e.defunct)?t.$t("available"):t.$t("unavailable"))+" ")])]),a("td",{staticClass:"button_size"},[a("button",{staticClass:"ui labeled tiny icon black button",on:{click:function(a){return t.remove(e.contestset_id)}}},[a("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)]),a("Pagination",{attrs:{current_page:t.currentPage,page_cnt:t.pageCount,total:t.totalNumber,"on-page-changed":t.page}})],1)},c=[],i=(a("e25e"),a("d4ec")),s=a("bee2"),r=a("99de"),o=a("7e84"),u=a("262e"),l=a("9ab4"),d=a("60a3"),h=a("2cd4"),p=a("9513"),g=a("5a0c"),b=a.n(g),f=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.currentPage=0,t.contestSetList=[],t.dayjs=b.a,t.pageCount=50,t.totalNumber=0,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){var t=this.$route.query;if(Object.prototype.hasOwnProperty.call(t,"page")){var e=parseInt(t.page);isNaN(e)||(this.currentPage=e)}}},{key:"onCurrentPageChanged",value:function(t){this.setQuery(),this.flushData(t)}},{key:"mounted",value:function(){this.flushData(this.currentPage)}},{key:"defunctToBoolean",value:function(t){return"N"===t}},{key:"flushData",value:function(t){var e=this;this.axios.get("/api/admin/contestset/list/".concat(t)).then((function(t){var a=t.data;e.contestSetList=a.data.data,e.totalNumber=a.data.count}))}},{key:"setQuery",value:function(){var t={};t.page=this.currentPage,this.$router.push({path:this.$route.path,query:t})}},{key:"defunct",value:function(t){var e=this;this.axios.post("/api/admin/contestset/defunct",{id:t}).then((function(t){t.data;e.flushData(e.currentPage)}))}},{key:"page",value:function(t,e){this.currentPage=e?this.currentPage+e:t}}]),e}(Object(d["b"])(h["a"]));Object(l["c"])([Object(d["d"])("currentPage")],f.prototype,"onCurrentPageChanged",null),f=Object(l["c"])([Object(d["a"])({components:{Pagination:p["a"]}})],f);var v=f,_=v,y=(a("5df3"),a("2877")),m=Object(y["a"])(_,n,c,!1,null,"158ed7b8",null);e["default"]=m.exports},"2cd4":function(t,e,a){"use strict";var n=a("d4ec"),c=a("bee2"),i=a("99de"),s=a("7e84"),r=a("262e"),o=a("9ab4"),u=a("2b0e"),l=a("60a3"),d=a("f1ed"),h=a("0443"),p=function(t){function e(){return Object(n["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){d["a"].init(this.$store.getters.homepage),document.title=h.title}}]),e}(u["a"]);p=Object(o["c"])([l["a"]],p),e["a"]=p},"4df4":function(t,e,a){"use strict";var n=a("f8c2"),c=a("7b0b"),i=a("9bdd"),s=a("e95a"),r=a("50c4"),o=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,d,h,p=c(t),g="function"==typeof this?this:Array,b=arguments.length,f=b>1?arguments[1]:void 0,v=void 0!==f,_=0,y=u(p);if(v&&(f=n(f,b>2?arguments[2]:void 0,2)),void 0==y||g==Array&&s(y))for(e=r(p.length),a=new g(e);e>_;_++)o(a,_,v?f(p[_],_):p[_]);else for(d=y.call(p),h=d.next,a=new g;!(l=h.call(d)).done;_++)o(a,_,v?i(d,f,[l.value,_],!0):l.value);return a.length=_,a}},5890:function(t,e,a){},"5df3":function(t,e,a){"use strict";var n=a("5890"),c=a.n(n);c.a},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},c=[],i=(a("a630"),a("d81d"),a("b65f"),a("d3b7"),a("e25e"),a("3ca3"),a("ddb0"),a("d4ec")),s=a("bee2"),r=a("99de"),o=a("7e84"),u=a("262e"),l=a("9ab4"),d=a("1157"),h=a.n(d),p=a("60a3"),g=a("2b0e"),b=(h.a,function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.total_menu=0,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){var t=document.body.clientWidth,e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}},{key:"page",value:function(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}},{key:"pageList",get:function(){var t=this.current_page,e=this.page_cnt,a=this.total,n=this.total_menu,c=Array.from(Array(Math.min(Math.ceil(a/e),n)).keys()).map((function(c){return t<n/2?Math.trunc(c+1):t+n/2+1>Math.ceil(a/e)?Math.trunc(Math.ceil(a/e)-n+1+c):Math.trunc(t+c-n/2+1)}));return this.$emit("pageUpdated",c),c}}]),e}(g["a"]));Object(l["c"])([Object(p["c"])()],b.prototype,"total",void 0),Object(l["c"])([Object(p["c"])()],b.prototype,"page_cnt",void 0),Object(l["c"])([Object(p["c"])()],b.prototype,"current_page",void 0),Object(l["c"])([Object(p["c"])()],b.prototype,"onPageChanged",void 0),b=Object(l["c"])([p["a"]],b);var f=b,v=f,_=a("2877"),y=Object(_["a"])(v,n,c,!1,null,"ec841a7a",null);e["a"]=y.exports},a630:function(t,e,a){var n=a("23e7"),c=a("4df4"),i=a("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:c})},b65f:function(t,e,a){var n=a("23e7"),c=Math.ceil,i=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:c)(t)}})}}]);