(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-433455ed"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"07ac":function(t,e,n){var r=n("23e7"),a=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return a(t)}})},"19dd":function(t,e,n){"use strict";n("4160"),n("159b");var r=n("d4ec"),a=n("bee2"),i=n("99de"),s=n("7e84"),o=n("262e"),c=n("9ab4"),u=n("60a3"),l=n("5dbd"),d=n("2b0e"),f=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.timer_=[],t}return Object(o["a"])(e,t),Object(a["a"])(e,[{key:"beforeDestroy",value:function(){var t=this.timer_;t.forEach((function(t){return clearInterval(t)}))}}]),e}(d["a"]);Object(c["c"])([l["b"]],f.prototype,"beforeDestroy",null),f=Object(c["c"])([u["a"]],f),e["a"]=f},"21a6":function(t,e,n){(function(n){var r,a,i;(function(n,s){a=[],r=s,i="function"===typeof r?r.apply(e,a):r,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){o(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,o=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,n){var o=s.URL||s.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):a(c.href)?r(t,e,n):i(c,c.target="_blank")):(c.href=o.createObjectURL(t),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,s){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,s),n);else if(a(t))r(t,n,s);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout((function(){i(o)}))}}:function(t,e,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return r(t,e,n);var i="application/octet-stream"===t.type,o=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&o)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},u.readAsDataURL(t)}else{var l=s.URL||s.webkitURL,d=l.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});s.saveAs=o.saveAs=o,t.exports=o}))}).call(this,n("c8ba"))},2500:function(t,e,n){var r,a,i;!function(n,s){a=[e],r=s,i="function"===typeof r?r.apply(e,a):r,void 0===i||(t.exports=i)}(0,(function(t){var e,n,r=window,a=document,i="mousemove",s="mouseup",o="mousedown",c="EventListener",u="add"+c,l="remove"+c,d=[],f=function(t,c){for(t=0;t<d.length;)c=d[t++],c=c.container||c,c[l](o,c.md,0),r[l](s,c.mu,0),r[l](i,c.mm,0);for(d=[].slice.call(a.getElementsByClassName("dragscroll")),t=0;t<d.length;)!function(t,c,l,d,f,h){(h=t.container||t)[u](o,h.md=function(e){t.hasAttribute("nochilddrag")&&a.elementFromPoint(e.pageX,e.pageY)!=h||(d=1,c=e.clientX,l=e.clientY,e.preventDefault())},0),r[u](s,h.mu=function(){d=0},0),r[u](i,h.mm=function(r){d&&((f=t.scroller||t).scrollLeft-=e=-c+(c=r.clientX),f.scrollTop-=n=-l+(l=r.clientY),t==a.body&&((f=a.documentElement).scrollLeft-=e,f.scrollTop-=n))},0)}(d[t++])};"complete"==a.readyState?f():r[u]("load",f,0),t.reset=f}))},2909:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("0d03"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return r(t)||a(t)||i()}n.d(e,"a",(function(){return s}))},"2cd4":function(t,e,n){"use strict";var r=n("d4ec"),a=n("bee2"),i=n("99de"),s=n("7e84"),o=n("262e"),c=n("9ab4"),u=n("2b0e"),l=n("60a3"),d=n("f1ed"),f=n("0443"),h=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(a["a"])(e,[{key:"mounted",value:function(){d["a"].init(this.$store.getters.homepage),document.title=f.title}}]),e}(u["a"]);h=Object(c["c"])([l["a"]],h),e["a"]=h},3400:function(t,e,n){"use strict";var r=n("b7c3"),a=n.n(r);a.a},"48cf":function(t,e,n){"use strict";var r=n("ce71"),a=n.n(r);a.a},"4df4":function(t,e,n){"use strict";var r=n("f8c2"),a=n("7b0b"),i=n("9bdd"),s=n("e95a"),o=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,h=a(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,y=0,g=u(h);if(b&&(m=r(m,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=o(h.length),n=new p(e);e>y;y++)c(n,y,b?m(h[y],y):h[y]);else for(d=g.call(h),f=d.next,n=new p;!(l=f.call(d)).done;y++)c(n,y,b?i(d,m,[l.value,y],!0):l.value);return n.length=y,n}},"5dbd":function(t,e,n){"use strict";n("99af"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7"),n("96cf");var r=n("2ef0"),a=n.n(r),i=function(){},s=i;function o(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];s.apply(void 0,[t].concat(n))}}n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return p}));var c=o("Decorator mounted: ");function u(t,e){return function(n,r,i){c("debounce, target:".concat(n.constructor.name,", propertyName:").concat(r));var s=i.value;return i.value=a.a.debounce(s,t,e),i}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e,n,r){c("Interval, target:".concat(e.constructor.name,", propertyName:").concat(n));var a=r.value;r.value=function(){for(var r=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");a.apply(this,s),this.timer_.push(setInterval((function(){c("".concat(e.constructor.name,".").concat(n," called.")),a.apply(r,s)}),t))},s("mounted interval")}}function d(t,e,n){c("Debuglogging, target:".concat(t.constructor.name,", propertyName:").concat(e));var r=n.value;n.value=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i=n.map((function(t){return JSON.stringify(t)})).join(),o=r.apply(this,n),c=JSON.stringify(o);return s("Call: ".concat(e,"(").concat(i,") => ").concat(c)),o}}function f(t,e,n){c("WebSocketRequest, target:".concat(t.constructor.name,", propertyName:").concat(e));var r=n.value;n.value=function(){if(this.$socket.connected){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.apply(this,e)}alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function h(t){return function(e,n,r){c("Lock, target:".concat(e.constructor.name,", propertyName:").concat(n));var a=r.value;r.value=function(){var e,n,r,i,s=arguments;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(t.acquireAsync());case 2:for(e=s.length,n=new Array(e),r=0;r<e;r++)n[r]=s[r];return i=a.apply(this,n),t.release(),o.abrupt("return",i);case 6:case"end":return o.stop()}}),null,this)}}}function p(t,e,n){var r=n.value;n.value=function(){try{for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.apply(this,e)}catch(a){alert(a.message)}}}},6062:function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),s=n("f8c2"),o=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),p=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){o(t,l,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&c(r,t[u],t,n)})),h=v(e),m=function(t,e,n){var r,a,i=h(t),s=b(t,e);return s?s.value=n:(i.last=s={index:a=f(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=s),r&&(r.next=s),d?i.size++:t.size++,"F"!==a&&(i.index[a]=s)),t},b=function(t,e){var n,r=h(t),a=f(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=h(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),r=b(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=h(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&r(l.prototype,"size",{get:function(){return h(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=v(e),i=v(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),p=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),b=v?"set":"add",y=a[t],g=y&&y.prototype,_=y,w={},k=function(t){var e=g[t];s(g,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof y||!(m||g.forEach&&!d((function(){(new y).entries().next()})))))_=n.getConstructor(e,t,v,b),o.REQUIRED=!0;else if(i(t,!0)){var O=new _,j=O[b](m?{}:-0,1)!=O,x=d((function(){O.has(1)})),S=f((function(t){new y(t)})),C=!m&&d((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));S||(_=e((function(e,n){u(e,_,t);var r=p(new y,e,_);return void 0!=n&&c(n,r[b],r,v),r})),_.prototype=g,g.constructor=_),(x||C)&&(k("delete"),k("has"),v&&k("get")),(C||j)&&k(b),m&&g.clear&&delete g.clear}return w[t]=_,r({global:!0,forced:_!=y},w),h(_,t),m||n.setStrong(_,t,v),_}},"6ef6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.state?n("div",{staticClass:"contestrank scoreboard padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(-1!==t.total&&t.finished?"Contest Rank":"计算中,请稍后")+" "),n("div",{staticClass:"sub header"},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"left aligned eight wide column"},[n("TimeView",{attrs:{start_time:t.start_time}})],1),n("div",{staticClass:"right aligned eight wide column"},[t.playing?t._e():n("button",{staticClass:"ui primary button item",on:{click:t.playRanklist}},[t._v("播放排名变化")]),t.playing?n("span",[t._v(" "+t._s(t.playingTime)+" ")]):t._e(),t.playing?n("button",{staticClass:"ui primary button",on:{click:t.pausePlayRanklist}},[t._v(t._s(t.playing?"暂停":"继续"))]):t._e(),t.playing?n("button",{staticClass:"ui primary button",on:{click:t.stopPlayRanklist}},[t._v("停止")]):t._e(),n("div",{staticClass:"ui toggle checkbox"},[n("input",{attrs:{type:"checkbox"},on:{click:function(e){t.auto_update=!t.auto_update}}}),n("label",[t._v("暂停自动更新排名")])]),n("div",{staticClass:"ui toggle checkbox"},[n("input",{attrs:{type:"checkbox"},on:{click:function(e){t.add_name=!t.add_name}}}),n("label",[t._v("加入学号")])]),n("a",{staticClass:"ui primary mini button",on:{click:t.exportXLS}},[t._v("Save to XLS")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"ranking dragscroll",staticStyle:{width:"100%",overflow:"auto"}},[n("table",{staticClass:"ui small celled table",attrs:{id:"rank"}},[n("thead",[n("tr",{staticClass:"toprow",attrs:{align:"center"}},[n("th",{staticClass:"{sorter:'false'}",attrs:{width:"5%"}},[t._v("Rank ")]),n("th",{attrs:{width:"5%"}},[t._v("User")]),n("th",{staticStyle:{"min-width":"90px"}},[t._v("Nick")]),t.add_name?n("th",{attrs:{width:"5%"}},[t._v("Id")]):t._e(),n("th",{attrs:{width:"5%"}},[t._v("Solved")]),n("th",{attrs:{width:"5%"}},[t._v("Penalty")]),t._l(Array.from(Array(Math.max(0,t.total)).keys()),(function(e){return n("th",{key:e,staticStyle:{"min-width":"85.71px"}},[t._v(t._s(1001+e)+" ")])}))],2)]),n("transition-group",{attrs:{name:"list-complete",tag:"tbody"}},t._l(t.submitter,(function(e,r){return n("tr",{key:e.user_id,staticClass:"list-complete-item",staticStyle:{cursor:"grab!important"}},[n("td",{class:t.rankClass(r),staticStyle:{"text-align":"center","font-weight":"bold",position:"sticky",left:"0"}},[t._v(t._s(e.rank)+" ")]),n("td",{staticClass:"ui white"},[n("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.user_id))])],1),n("td",{staticClass:"ui white"},[n("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(t._s(t.convertHTML(e.nick)))])],1),t.add_name?n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.convertHTML(e.real_name)))]):t._e(),n("td",{staticStyle:{"text-align":"center"}},[n("router-link",{attrs:{to:"/contest/status/"+t.cid+"?user_id="+e.user_id}},[t._v(t._s(e.ac)+" ")])],1),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.format_date(e.penalty_time)))]),t._l(e.problem.toArray(),(function(e,r){return n("ResultGrid",{key:r+0,attrs:{gridBackground:e.accept.length>0?e.first_blood?1:-1:0,problem:e,lock:t.popupLock,format_date:t.format_date}})}))],2)})),0)],1),n("table",{style:"display:none;vnd.ms-excel.numberformat:@",attrs:{id:"save"}},[n("tbody",[n("tr",{staticClass:"toprow",attrs:{align:"center"}},[n("td",{attrs:{width:"5%"}},[t._v("Rank ")]),n("td",{attrs:{width:"5%"}},[t._v("User")]),n("td",[t._v("Nick")]),t.add_name?n("td",{attrs:{width:"5%"}},[t._v("学号")]):t._e(),n("td",{attrs:{width:"5%"}},[t._v("Solved")]),n("td",{attrs:{width:"5%"}},[t._v("Penalty")]),n("td",[t._v("环境指纹数")]),n("td",[t._v("硬件指纹数")]),n("td",[t._v("IP总数")]),n("td",[t._v("地点")]),t._l(Array.from(Array(Math.max(0,t.total)).keys()),(function(e){return n("td",{key:e},[t._v(t._s(1001+e))])}))],2),t._l(t.submitter,(function(e,r){return n("tr",{key:r},[n("td",{attrs:{align:"center"}},[t._v(t._s(e.rank))]),n("td",{attrs:{align:"center"}},[t._v(t._s(e.user_id))]),n("td",{attrs:{align:"center"}},[t._v(t._s(t.convertHTML(e.nick)))]),t.add_name?n("td",{attrs:{align:"center"}},[t._v(t._s(t.convertHTML(e.real_name)))]):t._e(),n("td",{attrs:{align:"center"}},[t._v(t._s(e.ac))]),n("td",[t._v(t._s(t.format_date(e.penalty_time)))]),n("td",[t._v(t._s(e.fingerprintSet.size))]),n("td",[t._v(t._s(e.hardwareFingerprintSet.size))]),n("td",[t._v(t._s(e.ipSet.size))]),n("td",[t._v(t._s(1===e.ipSet.size?t.detectPlace(Array.from(e.ipSet)[0]):0===e.ipSet.size?"无":"略")+" ")]),t._l(e.problem.toArray(),(function(e,r){return n("td",{key:r,attrs:{bgcolor:"#FF"+t.formatColor(Math.max(Math.floor(256-256*Math.max(e.sim-69,0)/31)-1,0)),align:"left"}},[t._v(" "+t._s(e.submit.length>0?"(-":"")+t._s(e.try_time>0?e.try_time+")":e.submit.length>0?e.submit.length+")":"")+t._s(e.accept.length>0?t.format_date(e.accept[0].diff(e.start_time,"second")):"")+t._s(e.sim>0?"("+e.sim+"%)":"")+" ")])}))],2)}))],2)])])])])]):n("ErrorView",{attrs:{errormsg:t.errormsg}})},a=[],i=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("a630"),n("caad"),n("c975"),n("a15b"),n("4e82"),n("0d03"),n("b65f"),n("d3b7"),n("07ac"),n("e25e"),n("ac1f"),n("25f0"),n("6062"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("d4ec")),s=n("bee2"),o=n("99de"),c=n("7e84"),u=n("262e"),l=n("9ab4"),d=n("2cd4"),f=n("21a6"),h=n("f1ed"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"ui header"},[t._v(" 当前时间:"+t._s(t.current_time)+" "),t.start_time?n("div",{staticClass:"sub header"},[t._v(" 起始时间:"+t._s(t.dayjs(t.start_time).format("YYYY-MM-DD HH:mm:ss"))+", "+t._s(t.format_time(t.dayjs().diff(t.start_time,"second")))+" ")]):t._e()])},v=[],m=(n("a9e3"),n("5a0c")),b=n.n(m),y=n("60a3"),g=n("19dd"),_=n("5dbd"),w=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.current_time="",t.dayjs=b.a,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){this.current_time=this.currentTime()}},{key:"currentTime",value:function(){return b()().format("YYYY-MM-DD HH:mm:ss")}},{key:"timeUpdater",value:function(){this.current_time=this.currentTime()}},{key:"mounted",value:function(){this.timeUpdater()}},{key:"format_time",value:function(t){var e=["还有","已经过"],n=Number(t>0);return e[n]+this.format_date(t)}},{key:"fillZero",value:function(t){return t.length<2?"0"+t:t}},{key:"format_date",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=Math.abs(t);var n=String(Math.trunc(t/3600));n=this.fillZero(n);var r=String(Math.trunc((t-3600*parseInt(n))/60));r=this.fillZero(r);var a=String(t%60);return a=this.fillZero(a),e?n+" : "+r+" : "+a:n+":"+r+":"+a}}]),e}(Object(y["b"])(g["a"]));Object(l["c"])([Object(y["c"])({default:b()()})],w.prototype,"start_time",void 0),Object(l["c"])([Object(_["d"])(1e3)],w.prototype,"timeUpdater",null),w=Object(l["c"])([y["a"]],w);var k=w,O=k,j=n("2877"),x=Object(j["a"])(O,p,v,!1,null,"22a1bc94",null),S=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container padding"},[t._m(0),n("div",{staticClass:"ui segment"},[n("div",{staticClass:"ui error message"},[n("div",{staticClass:"header"},[t._v(" 错误信息内容 ")]),n("br"),n("h5",{staticClass:"ui header"},[t._v("URL:"+t._s(t.location.href))]),n("br"),n("b",[n("p",{domProps:{innerHTML:t._s(t.errormsg)}})])])])])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"ui dividing header"},[t._v(" 发生错误 "),n("div",{staticClass:"sub header"},[t._v(" 请把以下内容反馈给老师、助教或本平台的开发者Ryan Lee(李昊元) ")])])}],T=n("2b0e"),I=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.location=location,t}return Object(u["a"])(e,t),e}(T["a"]);Object(l["c"])([Object(y["c"])({default:""})],I.prototype,"errormsg",void 0),I=Object(l["c"])([y["a"]],I);var L=I,R=L,M=Object(j["a"])(R,C,A,!1,null,"293a19dc",null),E=M.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{ref:"block",class:t.gridBackgroundClass,staticStyle:{"text-align":"center"},attrs:{"data-html":t.generateDataHTML},on:{mouseenter:t.triggerPopup}},[n("b",{class:"text "+(t.problem.accept.length>0?t.problem.first_blood?"first accept":"accept":"red")},[t._v(" "+t._s(t.problem.accept.length>0||t.problem.submit.length>0?"+":"")+" "+t._s(t.problem.try_time>0?t.problem.try_time:0==t.problem.accept.length&&t.problem.submit.length>0?t.problem.submit.length:""))]),t.problem.accept.length>0?n("br"):t._e(),t.problem.accept.length>0&&"function"===typeof t.problem.accept[0].diff?n("span",{class:t.problem.first_blood?"first accept text":""},[t._v(" "+t._s(t.format_date(t.problem.accept[0].diff(t.problem.start_time,"second")))+" ")]):t._e()])},N=[],H=(n("a4d3"),n("e01a"),n("d28b"),n("d81d"),n("2909")),q=(n("96cf"),n("1157")),B=n.n(q),D=B.a,Y=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"triggerPopup",value:function(){var t,e,n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:t=this.lock,e=this.problem.submit,n=this.problem.accept,(e.length>0||n.length>0)&&(r=t.tryAcquire(),r&&(D(this.$refs.block).popup({hoverable:!0}).popup("show"),t.release()));case 4:case"end":return a.stop()}}),null,this)}},{key:"buildItem",value:function(){var t=this.problem.submit,e=this.problem.accept,n=[].concat(Object(H["a"])(t.map((function(t){return{pass:!1,time:t}}))),Object(H["a"])(e.map((function(t){return{pass:!0,time:t}}))));n.sort((function(t,e){return t.time.isBefore(e.time)?-1:t.time.isAfter(e.time)?1:0}));var r="",a=13,i=n.length>a,s=n.length;while(n.length>a)n.shift();i&&(r+='<div class="item"><i class="icon"></i><div class="content"><div class="header">Trim '.concat(s-a," submission</div> </div></div>"));var o=!0,c=!1,u=void 0;try{for(var l,d=n[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var f=l.value,h='<div class="item">';f.pass?h+='<i class="checkmark icon"></i>':h+='<i class="remove icon"></i>',h+='<div class="content">',h+='<div class="header">'.concat(f.pass?"Passed":"Failed","</div>"),h+='<div class="description">'.concat(f.time.format("YYYY-MM-DD HH:mm:ss"),"</div>"),h+="</div></div>",r+=h}}catch(p){c=!0,u=p}finally{try{o||null==d.return||d.return()}finally{if(c)throw u}}return r}},{key:"generateDataHTML",get:function(){var t='<div class="ui list">';return t+=this.buildItem(),t+="</div>",t}},{key:"gridBackgroundClass",get:function(){var t=this.gridBackground;return 0===t?"":1===t?"first accept":"accept"}}]),e}(T["a"]);Object(l["c"])([Object(y["c"])({default:0})],Y.prototype,"gridBackground",void 0),Object(l["c"])([Object(y["c"])({default:function(){}})],Y.prototype,"lock",void 0),Object(l["c"])([Object(y["c"])({default:function(){return{accept:[],submit:[]}}})],Y.prototype,"problem",void 0),Object(l["c"])([Object(y["c"])({default:function(){return function(){}}})],Y.prototype,"format_date",void 0),Y=Object(l["c"])([y["a"]],Y);var U=Y,F=U,z=(n("3400"),Object(j["a"])(F,P,N,!1,null,"397fea0c",null)),X=z.exports,W=n("fa82"),J=n.n(W),Z=n("2ef0"),V=n.n(Z),G=(n("498a"),n("53ca")),K=n("5a0c"),Q=K();function tt(t){var e,n,r=0;if(0===t.length)return r;for(e=0;e<t.length;e++)n=t.charCodeAt(e),r=(r<<5)-r+n,r|=0;return r}function et(){}function nt(t,e){return t.isBefore(e)?-1:t.isAfter(e)?1:0}function rt(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&!isNaN(parseInt(n))&&e.push(t[n]);return e}function at(){var t={submit:[],accept:[],sim:0,try_time:0,start_time:Q,first_blood:!1,_submit:new Set,_accept:new Set,set:et,update:et,addSubmit:et,calculatePenaltyTime:et,isAccepted:et,getAcceptTime:et,newInstance:et};return t.set=function(e){Object.assign(t,e)},t.update=function(t,e){return null!==this[t]&&"object"===Object(G["a"])(this[t])&&"function"===typeof this[t].push?this["_"+t].has(tt(e.toString()))||(this["_"+t].add(tt(e.toString())),this[t].push(e)):"number"===typeof this[t]&&(this[t]=e),this},t.addSubmit=function(t){switch(parseInt(t.result)){case 4:this.update("accept",K(t.in_date));break;case 5:case 6:case 7:case 8:case 9:case 10:this.update("submit",K(t.in_date));break}},t.calculatePenaltyTime=function(){var t=this.start_time;if(this.accept.length>0){this.accept.sort(nt),this.submit.sort(nt);var e=this.accept[0].diff(t,"second");this.try_time=0;var n=!0,r=!1,a=void 0;try{for(var i,s=this.submit[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;if(!o.isBefore(this.accept[0]))break;++this.try_time,e+=1200}}catch(c){r=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return e}return 0},t.isAccepted=function(){return this.accept.length>0},t.getAcceptTime=function(){return this.accept[0]},t.newInstance=at,t}function it(t){for(var e={get:et,toArray:et,calculatePenaltyTime:et,calculateAC:et,newInstance:et},n=0;n<t;++n)e[n]=at();return e.get=function(n){return"undefined"!==typeof e[n]?e[n]:(t=Math.max(n,t),e[n]=at())},e.toArray=function(){return rt(e)},e.calculatePenaltyTime=function(){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&!isNaN(parseInt(n))&&(t+=e[n].calculatePenaltyTime());return t},e.calculateAC=function(){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&!isNaN(parseInt(n))&&e[n].accept.length>0&&++t;return t},e.newInstance=it,e}function st(t){return"string"!==typeof t&&(t=""),t.length>0?t.trim():"未注册"}function ot(t){return"string"!==typeof t&&(t=""),t.trim()}function ct(){var t=new Set,e=t.add;return t.add=function(n){return"undefined"!==typeof n&&e.apply(t,arguments),this},t.newInstance=ct,t}function ut(){var t=1e11,e={time:t,person:{first_blood:!0},setFirstBlood:et,newInstance:et};return e.setFirstBlood=function(t,e){"undefined"!==typeof this.person&&t<this.time&&(this.time=t,this.person.first_blood=!1,this.person=e,e.first_blood=!0)},e.newInstance=ut,e}function lt(t){var e={get:et,newInstance:et};if("number"===typeof t)for(var n=0;n<t;++n)e[n]=ut();return e.get=function(t){return"undefined"!==typeof this[t]?this[t]:this[t]=ut()},e.newInstance=lt,e}function dt(t,e,n){return{ac:0,nick:st(t),problem:it(e),penalty_time:0,fingerprintSet:ct(),hardwareFingerprintSet:ct(),ipSet:ct(),real_name:"",user_id:ot(n),addData:function(t){this.fingerprintSet.add(t.fingerprint),this.hardwareFingerprintSet.add(t.fingerprintRaw),this.ipSet.add(t.ip),this.problem.get(t.num).update("sim",t.sim),this.problem.get(t.num).set({start_time:t.start_time}),this.problem.get(t.num).addSubmit(t)},calculatePenaltyTime:function(){this.penalty_time=this.problem.calculatePenaltyTime()},calculateAC:function(){this.ac=this.problem.calculateAC()},calculateFirstBlood:function(t){for(var e in this.problem)try{if(Object.prototype.hasOwnProperty.call(this.problem,e)&&!isNaN(parseInt(e))&&this.problem[e].isAccepted()){var n=this.problem[e].getAcceptTime().diff(this.problem[e].start_time,"second");t.get(e).setFirstBlood(n,this.problem.get(e))}}catch(r){console.log(r),console.log("Firstbloodlist",t),console.log("this.problem",this.problem)}},newInstance:dt}}function ft(t){var e=1;switch(t.toLowerCase()){case"greater":e=1;break;case"lesser":e=-1;break}return function(t,n){return e*(t.ac!==n.ac?n.ac-t.ac:t.penalty_time-n.penalty_time)}}var ht=n("2500"),pt=ht.reset,vt=[];window.submissionCollection=vt;var mt=!1,bt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.cid="",t.submitter={},t.total=-1,t.start_time=b()(),t.title="",t.finished=!1,t.users=[],t.add_name=!1,t.auto_update=!0,t.totalNumber=0,t.playingTime=b()().format("YYYY-MM-DD HH:mm:ss"),t.popupLock=new J.a,t.waiting_queue=[],t.state=!0,t.errormsg="",t.dayjs=b.a,t.select=$,t.console=console,t.playing=!1,t.playInterval=0,t.backup_data=[],t.firstRender=!0,t.userStructure={},t.firstBloodList=void 0,t.worker=null,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){var t=this;this.cid=this.$route.params.contest_id,this.sockets.subscribe("submit",(function(e){t.handleNewSubmit(e)})),this.sockets.subscribe("result",(function(e){t.handleNewSubmit(e)}))}},{key:"beforeDestroy",value:function(){this.sockets.unsubscribe("submit"),this.sockets.unsubscribe("result")}},{key:"toArray",value:function(t){return Array.isArray(t)||(t=[t]),t}},{key:"updateSubmitter",value:function(t){t.calculatePenaltyTime(),t.calculateAC(),t.calculateFirstBlood(this.firstBloodList)}},{key:"fillSubmitterList",value:function(t,e){for(var n=e.length,r=0;r<n;++r){var a=this.users.length>0;if(!t[e[r].user_id.toLowerCase()]){if(a)continue;t[e[r].user_id.toLowerCase()]=dt(e[r].nick,this.total,e[r].user_id)}e[r].num<this.total&&t[e[r].user_id.toLowerCase()].addData(e[r])}}},{key:"initUserTable",value:function(t){var e=this;V.a.forEach(this.users,(function(n){t[n.user_id.toLowerCase()]||(t[n.user_id.toLowerCase()]=dt(n.nick,e.total,n.user_id))}))}},{key:"calculateRank",value:function(){var t=this;this.submitter.sort(ft("greater"));var e=1;window.submitter=this.submitter,this.totalNumber=0,V.a.forEach(this.submitter,(function(n){return n.rank=n.ac>0?(++t.totalNumber,e++):e}))}},{key:"rankClass",value:function(t){var e=this.totalNumber;return t=parseInt(t),t<=.1*e+1?"ui yellow":t<=.3*e+1?"ui grey":t<=.6*e+1?"ui orange":"ui white"}},{key:"playRanklist",value:function(){this.auto_update=!1,this.playing=!0;var t=this.backup_data=vt;t.sort((function(t,e){var n=b()(t.in_date),r=b()(e.in_date);return n.isAfter(r)?1:-1})),vt=[],this.submitter=[],this.firstRender=!0,this.startInterval()}},{key:"startInterval",value:function(){var t=this,e=this.backup_data;this.playInterval=setInterval((function(){if(e.length>0){var n=e.shift();while(e.length>0&&n.result<4&&n.result>=11)n=e.shift();t.playingTime=b()(n.in_date).format("YYYY-MM-DD HH:mm:ss"),t.scoreboard=n,0===e.length&&t.endInterval()}else t.endInterval()}),30)}},{key:"endInterval",value:function(){clearInterval(this.playInterval),this.playing=!1,this.auto_update=!0}},{key:"pausePlayRanklist",value:function(){this.playing?(this.playing=!1,clearInterval(this.playInterval)):(this.playing=!0,this.startInterval())}},{key:"stopPlayRanklist",value:function(){this.playing=!1,clearInterval(this.playInterval),this.scoreboard=this.backup_data.filter((function(t){return"undefined"!==typeof t})),this.backup_data=[],this.auto_update=!0}},{key:"fillZero",value:function(t){return t.length<2?"0"+t:t}},{key:"format_date",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.fillZero;t=parseInt(t);var r=n(Math.trunc(t/3600).toString()),a=n(Math.trunc((t-3600*parseInt(r))/60).toString()),i=n((t%60).toString());return e?r+"："+a+"："+i:r+":"+a+":"+i}},{key:"formatColor",value:function(t){var e=t.toString(16);return t<16?"0"+e+"0"+e:""+e+e}},{key:"detectPlace",value:function(t){return t?h["a"].detectIP({intranet_ip:t,place:""}):"未知"}},{key:"convertHTML",value:function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText}},{key:"decodeHTML",value:function(t){return"string"!==typeof t&&(t=""),t.replace("·","&middot;")}},{key:"exportXLS",value:function(){var t=document.getElementById("save"),e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'+"<head><meta http-equiv='Content-Type' content='application/vnd.ms-excel; charset=utf-8' /></head>";e+="<center><h3>Contest "+this.cid+" "+this.title+"</h3></center>",e+="<table border=1>"+t.innerHTML.replace("<tbody>","").replace("</tbody>",""),e+="<tr><td colspan='8'>环境指纹指根据用户的硬件环境及IP地址不同而产生的不同的指纹</td></tr>",e+="<tr><td colspan='8'>硬件指纹指的是不受IP影响的指纹</td></tr>",e+="<tr><td colspan='8'>若环境指纹与硬件指纹均唯一，代表用户使用相同设备在相同地点完成提交</td></tr>",e+="<tr><td colspan='8'>若硬件指纹唯一而环境指纹不唯一，代表同型号机器在不同IP地址提交</td></tr>",e+="<tr><td colspan='8'>若硬件指纹不唯一，代表使用了多台设备进行提交</td></tr>",e+="</table></html>";var n=new Blob([e],{type:"application/vnd.ms-excel;charset=UTF-8;"});mt?Object(f["saveAs"])(n,"Contest "+this.cid+" 多个contest.xls"):Object(f["saveAs"])(n,"Contest "+this.cid+" "+this.title+".xls")}},{key:"handleNewSubmit",value:function(t){if(parseInt(t.contest_id)===parseInt(this.cid)&&1===t.finish){var e={nick:t.nick,user_id:t.user_id,start_time:this.start_time,avatar:0,in_date:t.in_date,num:parseInt(t.num),result:t.state};this.auto_update?this.scoreboard=e:this.waiting_queue.push(e)}}},{key:"onAutoUpdateChanged",value:function(){while(this.waiting_queue.length>0)this.scoreboard=this.waiting_queue.shift()}},{key:"onAddNameChanged",value:function(t){var e=this;if(t)for(var n=0;n<this.submitter.length;++n)this.axios.get("/api/user/nick/".concat(this.decodeHTML(this.submitter[n].nick))).then((function(t){var n=t.data;if(n&&n.data&&n.data.length>0){for(var r=n.nick,a=n.data,i="",s=0;s<a.length;++s)if(!isNaN(a[s].user_id)){i=a[s].user_id;break}for(var o=0;o<e.submitter.length;++o)if(e.decodeHTML(e.submitter[o].nick)===r){e.submitter[o].real_name=i;break}}}))}},{key:"updated",value:function(){var t="ContestRank: "+this.title;document.title!==t&&(document.title=t),$("#rank").find("tr").each((function(){$(this).find("td").eq(2).css({position:"sticky",left:$(this).find("td").eq(2).prev().outerWidth()+$(this).find("td").eq(1).prev().outerWidth(),borderRight:"1px solid rgba(34,36,38,.1)"}),$(this).find("td").eq(1).css({position:"sticky",left:$(this).find("td").eq(1).prev().outerWidth()})}))}},{key:"mounted",value:function(){var t=this;window.datas=[],vt=[],document.title="Contest Rank ".concat(this.cid," -- ").concat(document.title);var e=this.popupLock;$(window).scroll((function(){e.tryAcquire(),clearTimeout($.data(this,"scrollTimer")),$.data(this,"scrollTimer",setTimeout((function(){e.release()}),250))}));var n=this;pt(),function(){var e=t.$route.params.contest_id,r=[];r=-1!==e.indexOf(",")?e.split(","):[e];var a=0,i=[],s=new Set,o=function o(){e=r.shift(),t.axios.get("/api/scoreboard/".concat(e)).then((function(){t.axios.get("/api/scoreboard/".concat(e)).then((function(c){var u,l=c.data;if("OK"!==l.status)return n.state=!1,n.submitter=[],u=!0===l.contest_mode?"根据设置，内容非公开":l.statement&&l.statement.includes&&l.statement.includes("denied")?"根据设置，您无权访问":"Contest "+e+":\n"+l.statement,u=u.replace(/\n/g,"<br>"),void(n.errormsg=u);V.a.forEach(l.data,(function(t){t.num+=a,t.start_time=b()(l.start_time)})),V.a.forEach(l.data,(function(t){i.push(t)})),V.a.forEach(l.users,(function(t){s.add(t)})),a+=l.total,r.length>0?(mt=!0,o()):t.finished=!0,n.total=a,n.users=Array.from(s),n.scoreboard=i}))}))};r.length>1?(n.title=r.join(","),o()):(e=r.shift(),t.axios.get("/api/scoreboard/".concat(e)).then((function(){t.axios.get("/api/scoreboard/".concat(e)).then((function(r){var a=r.data;if("OK"!==a.status)return n.state=!1,n.submitter=[],a.statement||(n.errormsg="根据设置，内容非公开".replace(/\n/g,"<br>")),void(a.statement.includes&&a.statement.includes("denied")?n.errormsg="根据设置，您无权访问".replace(/\n/g,"<br>"):n.errormsg=("Contest "+e+":\n"+a.statement).replace(/\n/g,"<br>"));t.finished=!0,n.total=a.total,n.users=a.users,n.start_time=window.start_time=b()(a.start_time),V.a.forEach(a.data,(function(t){t.start_time=b()(a.start_time)})),n.scoreboard=a.data,vt=a.data,i=a.data,"string"===typeof a.title&&0===a.title.length&&(a.title="未设置标题"),n.title=a.title}))})))}()}},{key:"scoreboard",get:function(){return null},set:function(t){var e=this;this.auto_update=!1;try{var n;if(t=vt=vt.concat(this.toArray(t)),this.firstRender)this.firstRender=!1,this.firstBloodList=lt(),n={},this.initUserTable(n),this.fillSubmitterList(n,t),this.userStructure=n,this.submitter=n=Object.values(n),n.forEach(this.updateSubmitter);else{n=this.userStructure;var r=new Set;this.fillSubmitterList(n,t),t.forEach((function(t){return"undefined"!==typeof n[t.user_id.toLowerCase()]?r.add(n[t.user_id.toLowerCase()]):""})),r.forEach(this.updateSubmitter)}this.calculateRank(),window.temp_data=vt,window.datas=this.submitter}catch(i){e.state=!1,e.submitter=[],console.log(i);var a=i.stack;a=a.replace(/\n/g,"<br>"),e.errormsg=a}this.auto_update=!0}}]),e}(Object(y["b"])(d["a"]));Object(l["c"])([Object(y["d"])("auto_update")],bt.prototype,"onAutoUpdateChanged",null),Object(l["c"])([Object(y["d"])("add_name")],bt.prototype,"onAddNameChanged",null),bt=Object(l["c"])([Object(y["a"])({components:{ErrorView:E,TimeView:S,ResultGrid:X}})],bt);var yt=bt,gt=yt,_t=(n("48cf"),Object(j["a"])(gt,r,a,!1,null,"6c6f60a7",null));e["default"]=_t.exports},"6f53":function(t,e,n){var r=n("83ab"),a=n("df75"),i=n("fc6a"),s=n("d1e7").f,o=function(t){return function(e){var n,o=i(e),c=a(o),u=c.length,l=0,d=[];while(u>l)n=c[l++],r&&!s.call(o,n)||d.push(t?[n,o[n]]:o[n]);return d}};t.exports={entries:o(!0),values:o(!1)}},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:a})},b65f:function(t,e,n){var r=n("23e7"),a=Math.ceil,i=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:a)(t)}})},b7c3:function(t,e,n){},ce71:function(t,e,n){},fa82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class r{constructor(){this._acquired=!1,this._waitingResolvers=[]}acquireAsync(){return this._acquired?new Promise(t=>{this._waitingResolvers.push(t)}):(this._acquired=!0,Promise.resolve())}tryAcquire(){return!this._acquired&&(this._acquired=!0,!0)}release(){if(!this._acquired)throw new Error("Cannot release an unacquired lock");if(this._waitingResolvers.length>0){let t=this._waitingResolvers.shift();t()}else this._acquired=!1}}e.default=r}}]);