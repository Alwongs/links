(function(e){function t(t){for(var r,s,o=t[0],i=t[1],u=t[2],d=0,l=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);g&&g(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"c13d4228","chunk-1e3e71d8":"e893d707","chunk-2d0a32ea":"e7cb79e0","chunk-38bab7bb":"5a899b0f","chunk-3a671566":"9db99f88","chunk-ed7adb78":"d374b869"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-01807728":1,"chunk-1e3e71d8":1,"chunk-38bab7bb":1,"chunk-3a671566":1,"chunk-ed7adb78":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-01807728":"74c4706b","chunk-1e3e71d8":"2c0f1f19","chunk-2d0a32ea":"31d6cfe0","chunk-38bab7bb":"b9087d87","chunk-3a671566":"fa6dc9e9","chunk-ed7adb78":"716b28c2"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete s[e],g.parentNode.removeChild(g),n(c)},g.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}a[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/links/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var g=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1111:function(e,t,n){"use strict";n("ca2d")},"13be":function(e,t,n){},"18af":function(e,t,n){"use strict";n("83e0")},2466:function(e,t,n){},"2fc4":function(e,t,n){},3986:function(e,t,n){},4923:function(e,t,n){},"4d68":function(e,t,n){"use strict";var r=n("7a23");const s=["styles"];function a(e,t,n,a,c,o){return Object(r["x"])(),Object(r["g"])("p",{href:"#",class:"form-trigger",styles:{"z-index":n.zIndex},onClick:t[0]||(t[0]=t=>e.$emit("toggleForm"))},Object(r["G"])(n.isFormOpen?"Close":n.title),9,s)}var c={name:"FormTrigger",props:["isFormOpen","title","zIndex"]},o=(n("9d04"),n("6b0d")),i=n.n(o);const u=i()(c,[["render",a],["__scopeId","data-v-78bea038"]]);t["a"]=u},"53ae":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const s={class:"wrapper"};function a(e,t,n,a,c,o){const i=Object(r["E"])("app-panel"),u=Object(r["E"])("app-aside"),d=Object(r["E"])("router-view"),l=Object(r["E"])("app-footer");return Object(r["x"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(i),Object(r["h"])("div",s,[Object(r["j"])(u,{class:"aside-block"}),Object(r["j"])(d)]),Object(r["j"])(l)],64)}const c={class:"app-panel"},o={class:"nav-list"},i=["onClick"];function u(e,t,n,s,a,u){const d=Object(r["E"])("router-link");return Object(r["x"])(),Object(r["g"])("div",c,[Object(r["h"])("div",{class:"panel-item home-link",onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"}))},Object(r["G"])(e.$t("links")),1),Object(r["h"])("nav",{class:Object(r["r"])(["panel-item",{active:u.isAsideOpen}])},[Object(r["h"])("ul",o,[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(u.menuItems,e=>(Object(r["x"])(),Object(r["g"])("li",{key:e.route,class:"nav-item",onClick:t=>u.goTo(e.route)},[Object(r["j"])(d,{to:e.route},{default:Object(r["K"])(()=>[Object(r["i"])(Object(r["G"])(e.title),1)]),_:2},1032,["to"])],8,i))),128)),u.isUserAuthenticated?(Object(r["x"])(),Object(r["g"])("li",{key:0,class:"nav-item",onClick:t[1]||(t[1]=e=>u.logout())}," Выйти ")):Object(r["f"])("",!0)]),Object(r["h"])("div",{class:Object(r["r"])(["menu-btn",{opened:u.isAsideOpen}]),onClick:t[2]||(t[2]=(...e)=>u.toggleMenu&&u.toggleMenu(...e))},null,2)],2)])}var d={name:"AppPanel",computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen},menuItems(){return this.isUserAuthenticated?[{title:"Profile",route:"/profile-page"}]:[{title:"Вход",route:"/login"},{title:"Регистрация",route:"/register"}]}},data(){return{}},methods:{toggleMenu(){this.$store.commit("TOGGLE_ASIDE")},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),void(this.isMenuOpen=!1)):void 0},goTo(e){this.$router.push(e)}}},l=(n("815d"),n("6b0d")),g=n.n(l);const b=g()(d,[["render",u],["__scopeId","data-v-7fca4fa8"]]);var p=b;function O(e,t,n,s,a,c){const o=Object(r["E"])("create-category"),i=Object(r["E"])("category-list");return Object(r["x"])(),Object(r["g"])("aside",{class:Object(r["r"])(["app-aside",{active:c.isAsideOpen}])},[Object(r["j"])(o),Object(r["j"])(i)],2)}var h=n("ca05"),m=n("5840"),j={components:{CategoryList:h["a"],CreateCategory:m["a"]},name:"AppAside",computed:{isAsideOpen(){return this.$store.getters.isAsideOpen}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("1111");const f=g()(j,[["render",O],["__scopeId","data-v-3933481f"]]);var y=f;const A={class:"app-footer"};function E(e,t,n,s,a,c){return Object(r["x"])(),Object(r["g"])("div",A," footer 2022 ")}var v={};n("18af");const L=g()(v,[["render",E],["__scopeId","data-v-126d5021"]]);var _=L,k={name:"App",components:{AppPanel:p,AppAside:y,AppFooter:_}};n("dabc");const T=g()(k,[["render",a],["__scopeId","data-v-7330fe84"]]);var S=T,C=n("6605"),I=n("5502"),D=n("260b"),N=n("ea7b");const w={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},G=Object(D["a"])(w),$=Object(N["b"])(G);var R={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:n}){return new Promise(r=>{n.unsubscribeAuth&&n.unsubscribeAuth();let s=Object(N["c"])($,t=>{e("stateChanged",t),r(t)});t("SET_UNSUBSCRIBE_AUTH",s)})},async register({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(N["a"])($,t,n),e("SET_LOADING",!1)}catch(r){e("SET_LOADING",!1),e("SET_ERROR",r.message)}},async login({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(N["d"])($,t,n),e("SET_LOADING",!1)}catch(r){e("SET_LOADING",!1),e("SET_ERROR",r.message)}},async logOut(){await Object(N["e"])($)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},U={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{CLOSE_ASIDE(e){e.isAsideOpen=!1},TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},x=n("66ce"),P={getters:{getCategoryList(e){return e.categoryList},getCategory(e){return e.category}},state:{categoryList:[],category:{}},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t},UPDATE_CATEGORY(e,t){e.category=t}},actions:{async deleteCategory({getters:e,commit:t,dispatch:n},r){t("SET_LOADING",!0);const s=Object(x["c"])(),a=e.userId;await Object(x["e"])(Object(x["d"])(s,`${a}/categories/${r}`)),await n("getCategoryList"),t("SET_LOADING",!1)},async getCategory({getters:e,commit:t},n){t("SET_LOADING",!0);const r=Object(x["d"])(Object(x["c"])()),s=e.userId;await Object(x["b"])(Object(x["a"])(r,`${s}/categories/${n}`)).then(e=>{if(e.exists()){const n=e.val();t("UPDATE_CATEGORY",n),n.links&&t("UPDATE_LINK_LIST",n.links),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY",{}),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const n=Object(x["d"])(Object(x["c"])()),r=e.userId;await Object(x["b"])(Object(x["a"])(n,r+"/categories")).then(e=>{if(e.exists()){const n=e.val(),r=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_CATEGORY_LIST",r),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:n},r){t("SET_LOADING",!0);const s=Object(x["c"])(),a=e.userId;r.id=Date.now(),await Object(x["f"])(Object(x["d"])(s,`${a}/categories/${r.id}`),r),n("getCategoryList"),t("SET_LOADING",!1)}}},F={getters:{getLinkList(e){return e.linkList}},state:{linkList:[]},mutations:{UPDATE_LINK_LIST(e,t){e.linkList=t}},actions:{async deleteLink({getters:e,commit:t,dispatch:n},r){t("SET_LOADING",!0);const s=Object(x["c"])(),a=e.userId,c=e.getCategory.id;await Object(x["e"])(Object(x["d"])(s,`${a}/categories/${c}/links/${r}`)),await n("getLinkList",c),t("SET_LOADING",!1)},async saveLink({getters:e,commit:t},n){t("SET_LOADING",!0);const r=Object(x["c"])(),s=e.userId,a=e.getCategory.id,c=Date.now();n.id=c,await Object(x["f"])(Object(x["d"])(r,`${s}/categories/${a}/links/${c}`),n),t("SET_LOADING",!1)},async getLinkList({getters:e,commit:t},n){t("SET_LOADING",!0);const r=Object(x["d"])(Object(x["c"])()),s=e.userId;await Object(x["b"])(Object(x["a"])(r,`${s}/categories/${n}/links`)).then(e=>{if(e.exists()){const n=e.val(),r=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_LINK_LIST",r),t("SET_LOADING",!1)}else t("UPDATE_LINK_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})}}},M=Object(I["a"])({modules:{user:R,general:U,categories:P,links:F}});const B=[{path:"/",name:"home",component:()=>n.e("chunk-1e3e71d8").then(n.bind(null,"f4a9"))},{path:"/links-page/:id",name:"links-page",component:()=>n.e("chunk-ed7adb78").then(n.bind(null,"2db8"))},{path:"/profile-page",name:"profile-page",component:()=>n.e("chunk-2d0a32ea").then(n.bind(null,"00a5"))},{path:"/login",name:"login",component:()=>n.e("chunk-38bab7bb").then(n.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>n.e("chunk-3a671566").then(n.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))}],K=Object(C["a"])({history:Object(C["b"])("/links/"),routes:B});K.beforeEach((e,t,n)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,M.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?n():n("/login"):n()})});var Y=K,q=(n("2fc4"),n("e088")),J=n("626a");const z="en",H={en:q,ru:J};var V=n("47e2");const Q=Object.assign(H),W=Object(V["a"])({legacy:!1,locale:z,fallbackLocale:"en",messages:Q}),X=Object(r["d"])(S,{setup(){const{t:e}=Object(V["b"])();return{t:e}}});X.use(M).use(Y).use(W).mount("#app")},5840:function(e,t,n){"use strict";var r=n("7a23");const s=e=>(Object(r["A"])("data-v-96054828"),e=e(),Object(r["y"])(),e),a={class:"input-list"},c={class:"input-item"},o=s(()=>Object(r["h"])("li",{class:"input-item"},[Object(r["h"])("input",{type:"submit",value:"Save",class:"submit"})],-1));function i(e,t,n,s,i,u){const d=Object(r["E"])("form-trigger");return Object(r["x"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(d,{isFormOpen:i.isFormOpen,title:"New category",onToggleForm:u.toggleForm},null,8,["isFormOpen","onToggleForm"]),Object(r["h"])("form",{class:Object(r["r"])(["form",{active:i.isFormOpen}]),onSubmit:t[1]||(t[1]=Object(r["M"])((...e)=>u.saveCategory&&u.saveCategory(...e),["prevent"]))},[Object(r["h"])("ul",a,[Object(r["h"])("li",c,[Object(r["L"])(Object(r["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.categoryName=e),type:"text",placeholder:"add new category..",required:""},null,512),[[r["I"],i.categoryName]])]),o])],34)],64)}var u=n("4d68"),d={name:"CategoryList",components:{FormTrigger:u["a"]},data(){return{isFormOpen:!1,categoryName:""}},computed:{loading(){return this.$store.getters.getLoading}},methods:{toggleForm(){this.isFormOpen=!this.isFormOpen},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName="",this.isFormOpen=!1}}},l=(n("5954"),n("6b0d")),g=n.n(l);const b=g()(d,[["render",i],["__scopeId","data-v-96054828"]]);t["a"]=b},5954:function(e,t,n){"use strict";n("53ae")},"5d79":function(e,t,n){"use strict";n("2466")},"626a":function(e){e.exports=JSON.parse('{"register":"Регистрация","login":"Вход","logout":"Выйти","categories":"Категории","links":"Ссылки","save":"Сохранить","update":"Обновить","delete":"Удалить"}')},"815d":function(e,t,n){"use strict";n("eae3")},"83e0":function(e,t,n){},"9d04":function(e,t,n){"use strict";n("13be")},a98c:function(e,t,n){"use strict";n("3986")},ca05:function(e,t,n){"use strict";var r=n("7a23");const s=e=>(Object(r["A"])("data-v-d7dfbbe6"),e=e(),Object(r["y"])(),e),a={class:"app-categories"},c=s(()=>Object(r["h"])("h2",{class:"title"}," Caterories ",-1)),o={class:"category-list"},i=["onClick"],u=["onClick"];function d(e,t,n,s,d,l){const g=Object(r["E"])("pre-loader");return Object(r["x"])(),Object(r["g"])("div",a,[c,Object(r["h"])("ul",o,[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(l.categoryList,e=>(Object(r["x"])(),Object(r["g"])("li",{key:e.id,class:"category-item"},[Object(r["h"])("div",{class:"category-name",onClick:t=>l.showCategory(e)},Object(r["G"])(e.name),9,i),Object(r["h"])("button",{class:"btn-delete",onClick:t=>l.deleteCategory(e.id)}," Del ",8,u)]))),128))]),Object(r["j"])(g)])}const l={class:"loader"};function g(e,t,n,s,a,c){return Object(r["x"])(),Object(r["g"])("div",l," Loading... ")}var b={name:"PreLoader"},p=(n("5d79"),n("6b0d")),O=n.n(p);const h=O()(b,[["render",g],["__scopeId","data-v-200c7398"]]);var m=h,j={name:"CategoryList",components:{PreLoader:m},data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList},isAsideOpen(){return this.$store.getters.isAsideOpen},getCategoryList(){return this.$store.getters.getCategoryList}},methods:{async deleteCategory(e){await this.$store.dispatch("deleteCategory",e)},showCategory(e){this.$store.commit("UPDATE_CATEGORY",e),this.$store.commit("UPDATE_LINK_LIST",e.links),this.$router.push({name:"links-page",params:{id:e.id}}),this.$store.commit("CLOSE_ASIDE")},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""}},async mounted(){this.getCategoryList.length||await this.$store.dispatch("getCategoryList")}};n("a98c");const f=O()(j,[["render",d],["__scopeId","data-v-d7dfbbe6"]]);t["a"]=f},ca2d:function(e,t,n){},dabc:function(e,t,n){"use strict";n("4923")},e088:function(e){e.exports=JSON.parse('{"register":"Register","login":"Login","logout":"Logout","categories":"Categories","links":"Links","save":"Save","update":"Update","delete":"Delete"}')},eae3:function(e,t,n){}});
//# sourceMappingURL=app.32e00f2b.js.map