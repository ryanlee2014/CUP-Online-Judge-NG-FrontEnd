(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0b7bb44"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(t,e,a){"use strict";var i=a("d4ec"),s=a("bee2"),n=a("99de"),o=a("7e84"),r=a("262e"),c=a("9ab4"),u=a("2b0e"),d=a("60a3"),l=a("f1ed"),p=a("0443"),g=function(t){function e(){return Object(i["a"])(this,e),Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){l["a"].init(this.$store.getters.homepage),document.title=p.title}}]),e}(u["a"]);g=Object(c["c"])([d["a"]],g),e["a"]=g},"2e0e":function(t,e,a){},8640:function(t,e,a){"use strict";var i=a("2e0e"),s=a.n(i);s.a},dd7b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui grid"},[a("div",{staticClass:"ui middle aligned center aligned grid",attrs:{id:"background"}},[a("div",{staticClass:"center aligned column"},[a("h2",{staticClass:"ui teal image header"},[a("div",{staticClass:"content"},[t._v(" "+t._s(t.$t("login to your account"))+" ")])]),a("div",{staticClass:"ui large form"},[a("div",{staticClass:"ui stacked segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"user icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{id:"user_id",name:"user_id",placeholder:"username",type:"text"},domProps:{value:t.user_id},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.user_id=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"lock icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",placeholder:"Password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticStyle:{width:"70%"},attrs:{id:"vcode",name:"vcode",placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=login&ramdom='+Math.random()",src:"/api/captcha?from=login"}})])]),a("div",{staticClass:"ui fluid large teal button",on:{click:t.login,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[t._v("Login")])]),a("div",{staticClass:"ui error message"})]),a("div",{staticClass:"ui bottom attached warning message"},[a("i",{staticClass:"icon help"}),t._v(" "+t._s(t.$t("new to us"))+"? "),a("router-link",{attrs:{to:"/register"}},[t._v(t._s(t.$t("sign up")))]),a("br"),a("i",{staticClass:"icon help"}),t._v(" Forgot password? "),a("router-link",{attrs:{to:"/user/resetpassword"}},[t._v("Reset your password")])],1)])])])},s=[],n=(a("ac1f"),a("466d"),a("d4ec")),o=a("bee2"),r=a("99de"),c=a("7e84"),u=a("262e"),d=a("9ab4"),l=a("2cd4"),p=a("60a3"),g=a("1157"),m=a.n(g),h=m.a,v=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.user_id="",t.password="",t.captcha="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){document.title="Login -- ".concat(document.title)}},{key:"login",value:function(){var t=this;h(".ui.error.message").hide(),h(".ui.fluid.large.teal.button").addClass("loading"),this.axios.defaults.withCredentials=!0,this.axios.post("/api/login/newlogin",this.$data).then((function(e){h(".ui.fluid.large.teal.button").removeClass("loading"),"OK"===e.data.status&&(t.$root.$store.commit("loginMutate",{login:!0}),t.$socket.connect(),sessionStorage.isLogined="true",t.$store.dispatch("NavStatus"),t.$route.query.redirect?t.$router.push({path:t.$route.query.redirect}):t.$router.push({path:"/"}))})).catch((function(t){h(".ui.fluid.large.teal.button").removeClass("loading"),h("#vcode_graph").attr("src","/api/captcha?from=login&ramdom=".concat(Math.random())),h(".ui.middle.aligned.center.aligned.grid .column").transition("shake"),t.data.statement.match("captcha doesn't match")?h(".ui.error.message").html("验证码错误").show():h(".ui.error.message").html("账号或密码错误").show()}))}}]),e}(Object(p["b"])(l["a"]));v=Object(d["c"])([p["a"]],v);var f=v,k=f,b=(a("8640"),a("2877")),y=Object(b["a"])(k,i,s,!1,null,"8de16f30",null);e["default"]=y.exports}}]);