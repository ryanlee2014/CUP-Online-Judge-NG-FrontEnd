(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3d9ebfa"],{"01f2":function(t,e,n){},2911:function(t,e,n){},3424:function(t,e,n){t.exports=function(){return new Worker(n.p+"2c031d35b688987c75f4.worker.js")}},3426:function(t,e,n){"use strict";var a=n("01f2"),i=n.n(a);i.a},"97d6":function(t,e,n){"use strict";var a=n("2911"),i=n.n(a);i.a},"9edc":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"read time cost":"阅读本文需要大约{n}分钟"},"en":{"read time cost":"It takes about {n} minute to read this article | It takes about {n} minutes to read this article"},"ja":{"read time cost":"この記事を読むには約{n}分かかります"}}'),delete t.options._Ctor}},b0d1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("discuss")))]),n("div",{staticClass:"ui breadcrumb"},[n("router-link",{staticClass:"section",attrs:{to:"/discuss"}},[t._v("讨论主页")]),n("i",{staticClass:"right angle icon divider"}),n("div",{staticClass:"active section"},[t._v("Discuss ID:"+t._s(t.id))])],1),n("h1",[t._v(t._s(t.thread_head?t.thread_head.title:""))]),n("MainContent",{attrs:{id:t.id,owner:t.owner,thread_head:t.thread_head||{}}}),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("comments")))]),n("div",{staticClass:"ui comments"},t._l(t.reply,(function(e,a){return n("div",{key:a,staticClass:"comment"},[n("div",{staticClass:"avatar"},[t.hasAvatarURL(e)?n("router-link",{staticClass:"avatar",attrs:{src:t.getAvatarURL(e),to:"/user/"+e.user_id,tag:"img"}}):n("router-link",{attrs:{src:"@/static/image/white-image.png",to:"/user/"+e.user_id,tag:"img"}})],1),n("div",{staticClass:"content"},[n("router-link",{staticClass:"author",attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.nick))]),n("div",{staticClass:"metadata"},[n("span",{staticClass:"date"},[t._v(t._s(new Date(e.create_time).toLocaleString()))])]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.content)}}),n("div",{staticClass:"actions"},[e.user_id+""===t.owner?n("router-link",{staticClass:"reply",attrs:{to:"/discuss/edit/"+t.id+"/"+e.comment_id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),t.isadmin?n("a",{staticClass:"reply",on:{click:function(n){return t.block_reply(e.comment_id)}}},[t._v("屏蔽")]):t._e()],1)],1)])})),0),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("reply")))]),n("form",{staticClass:"ui reply form"},[n("div",{staticClass:"field"},[n("mavon-editor",{model:{value:t.replyText,callback:function(e){t.replyText=e},expression:"replyText"}})],1),n("div",{staticClass:"two field"},[n("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{id:"vcode",name:"vcode",placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),n("img",{attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=discuss&random='+Math.random()",src:"/api/captcha?from=discuss"}})])]),n("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.replyComment}},[n("i",{staticClass:"icon edit"}),t._v(" "+t._s(t.$t("add"))+" ")])])],1)},i=[],r=(n("99af"),n("4160"),n("b65f"),n("159b"),n("96cf"),n("1da1")),s=n("d4ec"),c=n("bee2"),o=n("99de"),u=n("7e84"),d=n("262e"),l=n("9ab4"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui grid"},[n("div",{staticClass:"four wide column"},[n("UserCard",{attrs:{thread_head:t.thread_head}}),n("div",{staticClass:"ui sticky",staticStyle:{left:"50.1429px"},attrs:{id:"sticky_content"}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"ui header",attrs:{id:"contents"}},[t._v("目录")]),n("div",{attrs:{id:"contentContainer"}})])],1),n("div",{staticClass:"twelve wide column"},[n("div",{staticClass:"ui existing full segment",attrs:{id:"main_context"}},[t.thread_head.user_id+""===t.owner?n("router-link",{staticClass:"ui blue right ribbon label",attrs:{to:"/discuss/edit/"+t.id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),n("div",{staticClass:"ui info message"},[n("div",{staticClass:"header"},[t._v(" "+t._s(t.$tc("read time cost",t.readTime(t.thread_head.content),{n:t.readTime(t.thread_head.content)}))+" ")])]),n("div",{domProps:{innerHTML:t._s(t.thread_content)}})],1)])])},p=[],v=(n("7db0"),n("498a"),n("20a2")),f=n("60a3"),m=n("75ed"),b=n("2b0e"),_=n("ebb0"),g=n.n(_),y=n("3424"),k=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.worker_=new g.a(new y),t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"renderAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.worker_.postMessage({type:"render",content:e});case 2:return n=t.sent,console.log("ret",n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),e}(b["a"]);k=Object(l["c"])([f["a"]],k);var w=k,C=n("1157"),x=n.n(C),j=document.createElement("div"),O=x.a,M=n("19ddd"),T=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.thread_content="",t.content=!1,t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.thread_content=this.$t("loading")}},{key:"onThreadHeadChanged",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.content){t.next=5;break}return t.next=3,this.renderAsync(e.content);case 3:n=t.sent,this.thread_content=n;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"readTime",value:function(t){return j.innerHTML=t,Math.trunc(Math.pow(Math.ceil(j.innerText.length/300),1.41428579532))}},{key:"updated",value:function(){var t=O(".table-of-contents"),e=t.html(),n=O("#contentContainer");e||(e=""),t.html(""),e&&n.html(""+e),O("#sticky_content").sticky({context:"#main_context",offset:50}),n.find("a").on("click",(function(){return O([document.documentElement,document.body]).animate({scrollTop:O(document.getElementById(M(this.innerText))).offset().top-50},600),!1})),this.content=e&&e.trim&&e.trim().length>0||n&&n.html()&&n.html().trim().length>0}}]),e}(Object(f["b"])(v["a"],w));Object(l["c"])([Object(f["c"])({default:function(){return{}}})],T.prototype,"thread_head",void 0),Object(l["c"])([Object(f["c"])({default:""})],T.prototype,"owner",void 0),Object(l["c"])([Object(f["c"])({default:""})],T.prototype,"id",void 0),Object(l["c"])([Object(f["d"])("thread_head")],T.prototype,"onThreadHeadChanged",null),T=Object(l["c"])([Object(f["a"])({components:{UserCard:m["a"]}})],T);var $=T,R=$,E=(n("97d6"),n("2877")),A=n("c82a"),L=Object(E["a"])(R,h,p,!1,null,"517ba165",null);"function"===typeof A["default"]&&Object(A["default"])(L);var H=L.exports,I=n("2cd4"),P=n("0c11"),U=n("2ef0"),D=n.n(U),S=n("b311"),J=n.n(S),K=x.a,N=(n("19ddd"),function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.page=0,t.table_val={},t.total=0,t.id=0,t.replyText="",t.captcha="",t.owner="",t.isadmin=!1,t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.id=parseInt(this.$route.params.id)||0}},{key:"mounted",value:function(){document.title="Thread ".concat(this.id," -- ").concat(document.title);var t=20*this.page,e=this;this.axios.get("/api/discuss/".concat(this.id,"?page=").concat(t)).then((function(t){var n=t.data;e.table=n})),this.$nextTick((function(){var t=new J.a(".copy.context",{text:function(t){return K(t).parent().next().text()}});t.on("success",(function(t){K(t.trigger).popup({title:"Finished",content:"Context is in your clipboard",on:"click"}).popup("show")}))}))}},{key:"replyComment",value:function(){var t={comment:this.replyText,captcha:this.captcha};this.axios.post("/api/discuss/reply/".concat(this.id),t).then((function(t){var e=t.data;"OK"===e.status?(alert("回复成功"),location.reload()):alert("回复失败！服务器发生未知错误")}))}},{key:"block_reply",value:function(t){this.axios.get("/api/discuss/update/reply/block/".concat(this.id,"/").concat(t)).then((function(t){var e=t.data;"OK"===e.status?alert("操作成功"):alert("操作失败")}))}},{key:"readTime",value:function(t){var e=document.createElement("div");return e.innerHTML=t,Math.trunc(Math.pow(Math.ceil(e.innerText.length/300),1.41428579532))}},{key:"table",get:function(){return this.table_val},set:function(t){var e=this;D.a.forEach(t,(function(t){t&&t.length&&D.a.forEach(t,function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.content){t.next=5;break}return t.next=3,e.renderAsync(n.content);case 3:n.content=t.sent,console.log("finish",n.content);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),this.table_val=t,this.owner=t.owner,this.isadmin=t.admin,this.$nextTick((function(){e.initMermaid()}))}},{key:"thread_head",get:function(){var t={title:""};return D.a.assign(t,this.table_val.discuss_header_content),t}},{key:"reply",get:function(){return this.table_val.discuss}}]),e}(Object(f["b"])(I["a"],v["a"],P["a"],w)));N=Object(l["c"])([Object(f["a"])({components:{MainContent:H}})],N);var z=N,B=z,F=(n("3426"),Object(E["a"])(B,a,i,!1,null,"5c1a186c",null));e["default"]=F.exports},b65f:function(t,e,n){var a=n("23e7"),i=Math.ceil,r=Math.floor;a({target:"Math",stat:!0},{trunc:function(t){return(t>0?r:i)(t)}})},c82a:function(t,e,n){"use strict";var a=n("9edc"),i=n.n(a);e["default"]=i.a},ebb0:function(t,e,n){"use strict";var a=0;function i(t,e){var n=e.data;if(Array.isArray(n)&&!(n.length<2)){var a=n[0],i=n[1],r=n[2],s=t._callbacks[a];s&&(delete t._callbacks[a],s(i,r))}}function r(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){i(e,t)}))}r.prototype.postMessage=function(t){var e=this,n=a++,r=[n,t];return new Promise((function(t,a){if(e._callbacks[n]=function(e,n){if(e)return a(new Error(e.message));t(n)},"undefined"!==typeof e._worker.controller){var s=new MessageChannel;s.port1.onmessage=function(t){i(e,t)},e._worker.controller.postMessage(r,[s.port2])}else e._worker.postMessage(r)}))},t.exports=r}}]);