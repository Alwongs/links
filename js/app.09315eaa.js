(function(e){function t(t){for(var r,a,o=t[0],i=t[1],u=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"f7a98b93","chunk-2d0a32ea":"20e64492","chunk-2d22cdfc":"d24f18ca","chunk-38bab7bb":"721fbe36","chunk-3a671566":"503d74ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-01807728":1,"chunk-38bab7bb":1,"chunk-3a671566":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-01807728":"863bc648","chunk-2d0a32ea":"31d6cfe0","chunk-2d22cdfc":"31d6cfe0","chunk-38bab7bb":"565ea6af","chunk-3a671566":"7b437267"}[e]+".css",c=i.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===r||d===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/links/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0df2":function(e,t,n){"use strict";n("d552")},"18af":function(e,t,n){"use strict";n("83e0")},"2fc4":function(e,t,n){},4009:function(e,t,n){"use strict";n("b4c1")},"505c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const a={class:"wrapper"};function c(e,t,n,c,s,o){const i=Object(r["y"])("app-panel"),u=Object(r["y"])("app-aside"),d=Object(r["y"])("router-view"),l=Object(r["y"])("app-footer");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),Object(r["f"])("div",a,[Object(r["h"])(u,{class:"aside-block"}),Object(r["h"])(d)]),Object(r["h"])(l)],64)}const s={class:"app-panel"},o={class:"panel-item"},i=Object(r["g"])(" Links "),u={class:"nav-list"},d=["onClick"];function l(e,t,n,a,c,l){const p=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("div",s,[Object(r["f"])("div",o,[Object(r["h"])(p,{to:"/"},{default:Object(r["E"])(()=>[i]),_:1})]),Object(r["f"])("nav",{class:Object(r["n"])(["panel-item",{active:l.isAsideOpen}])},[Object(r["f"])("ul",u,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(l.menuItems,e=>(Object(r["r"])(),Object(r["e"])("li",{key:e.route,class:"nav-item",onClick:t=>l.goTo(e.route)},[Object(r["h"])(p,{to:e.route},{default:Object(r["E"])(()=>[Object(r["g"])(Object(r["A"])(e.title),1)]),_:2},1032,["to"])],8,d))),128)),l.isUserAuthenticated?(Object(r["r"])(),Object(r["e"])("li",{key:0,class:"nav-item",onClick:t[0]||(t[0]=e=>l.logout())}," Выйти ")):Object(r["d"])("",!0)]),Object(r["f"])("div",{class:Object(r["n"])(["menu-btn",{opened:l.isAsideOpen}]),onClick:t[1]||(t[1]=(...e)=>l.toggleMenu&&l.toggleMenu(...e))},null,2)],2)])}var p={name:"AppPanel",computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen},menuItems(){return this.isUserAuthenticated?[{title:"Profile",route:"/profile-page"}]:[{title:"Вход",route:"/login"},{title:"Регистрация",route:"/register"}]}},data(){return{}},methods:{toggleMenu(){this.$store.commit("TOGGLE_ASIDE")},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),void(this.isMenuOpen=!1)):void 0},goTo(e){this.$router.push(e)}}},b=(n("4009"),n("6b0d")),h=n.n(b);const O=h()(p,[["render",l],["__scopeId","data-v-1670110a"]]);var f=O;function g(e,t,n,a,c,s){const o=Object(r["y"])("app-categories");return Object(r["r"])(),Object(r["e"])("aside",{class:Object(r["n"])(["app-aside",{active:s.isAsideOpen}])},[Object(r["h"])(o)],2)}const m=e=>(Object(r["u"])("data-v-84bd993e"),e=e(),Object(r["s"])(),e),j={class:"app-categories"},y=m(()=>Object(r["f"])("h2",{class:"title"}," Caterories ",-1)),A=m(()=>Object(r["f"])("input",{type:"submit",value:"Add",class:"submit"},null,-1)),v={key:0,class:"loading"},E={class:"category-list"};function _(e,t,n,a,c,s){return Object(r["r"])(),Object(r["e"])("div",j,[y,Object(r["f"])("form",{class:"input-block",onSubmit:t[1]||(t[1]=Object(r["G"])((...e)=>s.saveCategory&&s.saveCategory(...e),["prevent"]))},[Object(r["F"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.categoryName=e),type:"text",placeholder:"add new category..",required:""},null,512),[[r["C"],c.categoryName]]),A],32),s.loading?(Object(r["r"])(),Object(r["e"])("p",v,"Загрузка...")):Object(r["d"])("",!0),Object(r["f"])("ul",E,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(s.categoryList,e=>(Object(r["r"])(),Object(r["e"])("li",{key:e.id,class:"category-item"},Object(r["A"])(e.name),1))),128))])])}var k={name:"AppAside",data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""},async getCategoryList(){await this.$store.dispatch("getCategoryList")}},async mounted(){}};n("a0ea");const S=h()(k,[["render",_],["__scopeId","data-v-84bd993e"]]);var T=S,L={components:{AppCategories:T},name:"AppAside",computed:{isAsideOpen(){return this.$store.getters.isAsideOpen}}};n("0df2");const C=h()(L,[["render",g],["__scopeId","data-v-093f33f1"]]);var w=C;const I={class:"app-footer"};function R(e,t,n,a,c,s){return Object(r["r"])(),Object(r["e"])("div",I," footer 2022 ")}var N={};n("18af");const U=h()(N,[["render",R],["__scopeId","data-v-126d5021"]]);var D=U,G={name:"App",components:{AppPanel:f,AppAside:w,AppFooter:D}};n("feae");const P=h()(G,[["render",c],["__scopeId","data-v-13063a6d"]]);var $=P,x=n("6605"),B=n("5502"),M=n("260b"),q=n("ea7b");const H={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},Y=Object(M["a"])(H),F=Object(q["b"])(Y);var J={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:n}){return new Promise(r=>{n.unsubscribeAuth&&n.unsubscribeAuth();let a=Object(q["c"])(F,t=>{e("stateChanged",t),r(t)});t("SET_UNSUBSCRIBE_AUTH",a)})},async register({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(q["a"])(F,t,n),e("SET_LOADING",!1)}catch(r){e("SET_LOADING",!1),e("SET_ERROR",r.message)}},async login({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(q["d"])(F,t,n),e("SET_LOADING",!1)}catch(r){e("SET_LOADING",!1),e("SET_ERROR",r.message)}},async logOut(){await Object(q["e"])(F)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},K={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},z=n("66ce"),V={getters:{getCategoryList(e){return e.categoryList}},state:{categoryList:[]},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t}},actions:{async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const n=Object(z["d"])(Object(z["c"])()),r=e.userId;await Object(z["b"])(Object(z["a"])(n,r+"/categories")).then(e=>{if(e.exists()){const n=e.val(),r=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_CATEGORY_LIST",r),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:n},r){t("SET_LOADING",!0);const a=Object(z["c"])(),c=e.userId,s=Date.now();r.id=s,await Object(z["e"])(Object(z["d"])(a,`${c}/categories/${s}`),r),n("getCategoryList"),t("SET_LOADING",!1)}}},Q=Object(B["a"])({modules:{user:J,general:K,categories:V}});const W=[{path:"/",name:"home",component:()=>n.e("chunk-2d22cdfc").then(n.bind(null,"f4a9"))},{path:"/profile-page",name:"profile-page",component:()=>n.e("chunk-2d0a32ea").then(n.bind(null,"00a5"))},{path:"/login",name:"login",component:()=>n.e("chunk-38bab7bb").then(n.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>n.e("chunk-3a671566").then(n.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))}],X=Object(x["a"])({history:Object(x["b"])("/links/"),routes:W});X.beforeEach((e,t,n)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,Q.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?n():n("/login"):n()})});var Z=X;n("2fc4");Object(r["c"])($).use(Q).use(Z).mount("#app")},"821f":function(e,t,n){},"83e0":function(e,t,n){},a0ea:function(e,t,n){"use strict";n("821f")},b4c1:function(e,t,n){},d552:function(e,t,n){},feae:function(e,t,n){"use strict";n("505c")}});
//# sourceMappingURL=app.09315eaa.js.map