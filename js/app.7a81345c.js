(function(e){function t(t){for(var s,c,a=t[0],o=t[1],u=t[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},c={app:0},r={app:0},i=[];function a(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"c13d4228","chunk-466d2c6b":"6e16ffb2","chunk-4b17159c":"fba82260","chunk-8c8d9028":"36663443","chunk-e43f5234":"d596904d"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-01807728":1,"chunk-466d2c6b":1,"chunk-4b17159c":1,"chunk-8c8d9028":1,"chunk-e43f5234":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-01807728":"640268a6","chunk-466d2c6b":"87d2887d","chunk-4b17159c":"539907ac","chunk-8c8d9028":"26616f63","chunk-e43f5234":"2f9a89d9"}[e]+".css",r=o.p+s,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===s||l===r)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var s=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete c[e],g.parentNode.removeChild(g),n(i)},g.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){c[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",d.name="ChunkLoadError",d.type=s,d.request=c,n[1](d)}r[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/links/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f2":function(e,t,n){},"0b3c":function(e,t,n){"use strict";n("67bb")},"18af":function(e,t,n){"use strict";n("83e0")},"2fc4":function(e,t,n){},"354b":function(e,t,n){"use strict";n("09f2")},4018:function(e,t,n){"use strict";n("997c")},"414f":function(e,t,n){"use strict";n("e51e")},"43ce":function(e,t,n){},"4d68":function(e,t,n){"use strict";var s=n("7a23");const c=["styles"];function r(e,t,n,r,i,a){return Object(s["x"])(),Object(s["g"])("p",{href:"#",class:"form-trigger",styles:{"z-index":n.zIndex},onClick:t[0]||(t[0]=t=>e.$emit("toggleForm"))},Object(s["G"])(n.isFormOpen?e.$t("close"):n.title),9,c)}var i={name:"FormTrigger",props:["isFormOpen","title","zIndex"]},a=(n("a2ad"),n("6b0d")),o=n.n(a);const u=o()(i,[["render",r],["__scopeId","data-v-3d7c8d6d"]]);t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("7a23");const c={class:"wrapper"};function r(e,t,n,r,i,a){const o=Object(s["E"])("app-menu"),u=Object(s["E"])("app-panel"),l=Object(s["E"])("app-aside"),d=Object(s["E"])("router-view"),g=Object(s["E"])("app-footer");return Object(s["x"])(),Object(s["g"])(s["a"],null,[Object(s["j"])(o),Object(s["j"])(u),Object(s["h"])("div",c,[a.isUserAuthenticated?(Object(s["x"])(),Object(s["e"])(l,{key:0,class:"aside-block"})):Object(s["f"])("",!0),Object(s["j"])(d)]),Object(s["j"])(g)],64)}const i={class:"app-panel"},a={key:0,class:"pre-loader"};function o(e,t,n,c,r,o){return Object(s["x"])(),Object(s["g"])("div",i,[Object(s["h"])("div",{class:"home-link",onClick:t[0]||(t[0]=(...e)=>o.goHome&&o.goHome(...e))}," Links "),o.loading?(Object(s["x"])(),Object(s["g"])("div",a," Loading... ")):Object(s["f"])("",!0),Object(s["h"])("div",{class:Object(s["r"])([{opened:o.isAsideOpen},"menu-btn"]),onClick:t[1]||(t[1]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},null,2)])}var u={name:"AppPanel",computed:{loading(){return this.$store.getters.getLoading},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{goHome(){this.$router.push({name:"home"}),this.$store.commit("CLOSE_ASIDE")},toggleMenu(){this.$store.commit("TOGGLE_ASIDE")}}},l=(n("6c8e"),n("6b0d")),d=n.n(l);const g=d()(u,[["render",o],["__scopeId","data-v-673aa136"]]);var p=g;const O={class:"app-aside"};function b(e,t,n,c,r,i){const a=Object(s["E"])("create-category"),o=Object(s["E"])("category-list");return Object(s["x"])(),Object(s["g"])("aside",O,[Object(s["j"])(a),Object(s["h"])("h2",{class:"title",onClick:t[0]||(t[0]=(...e)=>i.toggleList&&i.toggleList(...e))},Object(s["G"])(e.$t("categories")),1),Object(s["h"])("div",{class:Object(s["r"])([{active:r.isListOpen},"list-wrap"])},[Object(s["j"])(o,{onCloseList:i.closeList},null,8,["onCloseList"])],2)])}const h={class:"app-categories"},m={class:"category-list"},j={key:0,class:"no-items"},f=["onClick"],y=["onClick"];function v(e,t,n,c,r,i){return Object(s["x"])(),Object(s["g"])("div",h,[Object(s["h"])("ul",m,[i.categoryList.length?Object(s["f"])("",!0):(Object(s["x"])(),Object(s["g"])("li",j," Category list is empty.. ")),(Object(s["x"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(i.categoryList,e=>(Object(s["x"])(),Object(s["g"])("li",{key:e.id,class:"category-item"},[Object(s["h"])("div",{class:"category-name",onClick:t=>i.showCategory(e)},Object(s["G"])(e.name),9,f),Object(s["h"])("button",{class:"btn-delete",onClick:t=>i.deleteCategory(e.id)},null,8,y)]))),128))])])}var A={name:"CategoryList",data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList}},methods:{async deleteCategory(e){await this.$store.dispatch("deleteCategory",e),this.$route.params.id===e&&this.$router.push("/")},showCategory(e){this.$emit("closeList"),this.$router.push({name:"links-page",params:{id:e.id}}),this.$store.commit("UPDATE_CATEGORY",e)},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""}},async mounted(){this.categoryList.length||await this.$store.dispatch("getCategoryList")}};n("414f");const E=d()(A,[["render",v],["__scopeId","data-v-73fc91ed"]]);var _=E;const L=e=>(Object(s["A"])("data-v-e1ec8144"),e=e(),Object(s["y"])(),e),k={class:"input-list"},C={class:"input-item"},T=L(()=>Object(s["h"])("li",{class:"input-item"},[Object(s["h"])("input",{type:"submit",value:"Save",class:"submit"})],-1));function S(e,t,n,c,r,i){const a=Object(s["E"])("form-trigger");return Object(s["x"])(),Object(s["g"])(s["a"],null,[Object(s["j"])(a,{isFormOpen:r.isFormOpen,title:e.$t("new_сategory"),onToggleForm:i.toggleForm},null,8,["isFormOpen","title","onToggleForm"]),Object(s["h"])("form",{class:Object(s["r"])(["form",{active:r.isFormOpen}]),onSubmit:t[1]||(t[1]=Object(s["M"])((...e)=>i.saveCategory&&i.saveCategory(...e),["prevent"]))},[Object(s["h"])("ul",k,[Object(s["h"])("li",C,[Object(s["L"])(Object(s["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.categoryName=e),type:"text",placeholder:"add new category..",required:""},null,512),[[s["I"],r.categoryName]])]),T])],34)],64)}var w=n("4d68"),I={name:"CategoryList",components:{FormTrigger:w["a"]},data(){return{isFormOpen:!1,categoryName:""}},computed:{loading(){return this.$store.getters.getLoading}},methods:{toggleForm(){this.isFormOpen=!this.isFormOpen},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName="",this.isFormOpen=!1}}};n("4018");const $=d()(I,[["render",S],["__scopeId","data-v-e1ec8144"]]);var G=$,N={name:"AppAside",components:{CategoryList:_,CreateCategory:G},data(){return{isListOpen:!0}},methods:{closeList(){this.isListOpen=!1},toggleList(){this.isListOpen=!this.isListOpen}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("354b");const D=d()(N,[["render",b],["__scopeId","data-v-cd6d7cf6"]]);var R=D;const x={class:"app-footer"};function U(e,t,n,c,r,i){return Object(s["x"])(),Object(s["g"])("div",x," footer 2022 ")}var P={};n("18af");const F=d()(P,[["render",U],["__scopeId","data-v-126d5021"]]);var M=F;const B={class:"nav-list"};function Y(e,t,n,c,r,i){const a=Object(s["E"])("router-link");return Object(s["x"])(),Object(s["g"])("div",{class:Object(s["r"])(["app-menu",{active:i.isAsideOpen}])},[Object(s["h"])("nav",null,[Object(s["h"])("ul",B,[Object(s["h"])("li",{class:"nav-item",onClick:t[0]||(t[0]=(...e)=>i.switchLang&&i.switchLang(...e))},Object(s["G"])(e.$t("language")+": "+e.$t(r.lang)),1),i.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["x"])(),Object(s["g"])("li",{key:0,class:"nav-item",onClick:t[1]||(t[1]=e=>i.goTo("/register"))},[Object(s["j"])(a,{to:"/register"},{default:Object(s["K"])(()=>[Object(s["i"])(Object(s["G"])(e.$t("register")),1)]),_:1})])),i.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["x"])(),Object(s["g"])("li",{key:1,class:"nav-item",onClick:t[2]||(t[2]=e=>i.goTo("/login"))},[Object(s["j"])(a,{to:"/login"},{default:Object(s["K"])(()=>[Object(s["i"])(Object(s["G"])(e.$t("login")),1)]),_:1})])),i.isUserAuthenticated?(Object(s["x"])(),Object(s["g"])("li",{key:2,class:"nav-item",onClick:t[3]||(t[3]=e=>i.logout())},Object(s["G"])(e.$t("logout")),1)):Object(s["f"])("",!0)])])],2)}var H={name:"AppAside",data(){return{lang:"ru"}},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{goTo(e){this.$router.push(e),this.$store.commit("TOGGLE_ASIDE")},switchLang(){return"en"===this.$i18n.locale?(this.$i18n.locale="ru",void(this.lang="ru")):"ru"===this.$i18n.locale?(this.$i18n.locale="en",void(this.lang="en")):void 0},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),this.isMenuOpen=!1,void this.$store.commit("CLOSE_ASIDE")):void 0}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("e1d4");const q=d()(H,[["render",Y],["__scopeId","data-v-4141e88e"]]);var J=q,z={name:"App",components:{AppPanel:p,AppAside:R,AppFooter:M,AppMenu:J},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}}};n("0b3c");const K=d()(z,[["render",r],["__scopeId","data-v-30313f33"]]);var V=K,Q=n("6605"),W=n("5502"),X=n("260b"),Z=n("ea7b");const ee={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},te=Object(X["a"])(ee),ne=Object(Z["b"])(te);var se={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:n}){return new Promise(s=>{n.unsubscribeAuth&&n.unsubscribeAuth();let c=Object(Z["c"])(ne,t=>{e("stateChanged",t),s(t)});t("SET_UNSUBSCRIBE_AUTH",c)})},async register({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(Z["a"])(ne,t,n),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async login({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(Z["d"])(ne,t,n),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async logOut(){await Object(Z["e"])(ne)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},ce={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{CLOSE_ASIDE(e){e.isAsideOpen=!1},TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},re=n("66ce"),ie={getters:{getCategoryList(e){return e.categoryList},getCategory(e){return e.category}},state:{categoryList:[],category:{}},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t},UPDATE_CATEGORY(e,t){e.category=t}},actions:{async deleteCategory({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const c=Object(re["c"])(),r=e.userId;await Object(re["e"])(Object(re["d"])(c,`${r}/categories/${s}`)),await n("getCategoryList"),t("SET_LOADING",!1)},async getCategory({getters:e,commit:t},n){t("SET_LOADING",!0);const s=Object(re["d"])(Object(re["c"])()),c=e.userId;await Object(re["b"])(Object(re["a"])(s,`${c}/categories/${n}`)).then(e=>{if(e.exists()){const n=e.val();t("UPDATE_CATEGORY",n),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY",{}),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const n=Object(re["d"])(Object(re["c"])()),s=e.userId;await Object(re["b"])(Object(re["a"])(n,s+"/categories")).then(e=>{if(e.exists()){const n=e.val(),s=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_CATEGORY_LIST",s),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const c=Object(re["c"])(),r=e.userId;s.id=Date.now(),await Object(re["f"])(Object(re["d"])(c,`${r}/categories/${s.id}`),s),n("getCategoryList"),t("SET_LOADING",!1)}}},ae={actions:{async deleteLink({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const c=Object(re["c"])(),r=e.userId,i=e.getCategory.id;await Object(re["e"])(Object(re["d"])(c,`${r}/categories/${i}/links/${s}`)),await n("getCategoryList"),await n("getCategory",i),t("SET_LOADING",!1)},async saveLink({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const c=Object(re["c"])(),r=e.userId,i=e.getCategory.id,a=Date.now();s.id=a,await Object(re["f"])(Object(re["d"])(c,`${r}/categories/${i}/links/${a}`),s),await n("getCategoryList"),await n("getCategory",i),t("SET_LOADING",!1)}}},oe=Object(W["a"])({modules:{user:se,general:ce,categories:ie,links:ae}});const ue=[{path:"/",name:"home",component:()=>n.e("chunk-8c8d9028").then(n.bind(null,"f4a9"))},{path:"/links-page/:id",name:"links-page",component:()=>n.e("chunk-466d2c6b").then(n.bind(null,"2db8"))},{path:"/login",name:"login",component:()=>n.e("chunk-4b17159c").then(n.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>n.e("chunk-e43f5234").then(n.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))}],le=Object(Q["a"])({history:Object(Q["b"])("/links/"),routes:ue});le.beforeEach((e,t,n)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,oe.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?n():n("/login"):n()})});var de=le,ge=(n("2fc4"),n("e088")),pe=n("626a");const Oe="en",be={en:ge,ru:pe};var he=n("47e2");const me=Object.assign(be),je=Object(he["a"])({legacy:!1,locale:Oe,fallbackLocale:"en",messages:me}),fe=Object(s["d"])(V,{setup(){const{t:e}=Object(he["b"])();return{t:e}}});fe.use(oe).use(de).use(je).mount("#app")},"626a":function(e){e.exports=JSON.parse('{"register":"Регистрация","login":"Вход","logout":"Выйти","categories":"Категории","new_сategory":"Добавить категорию","links":"Ссылки","new_link":"Добавить ссылку","save":"Сохранить","update":"Обновить","delete":"Удалить","profile":"Профиль","language":"Язык","manage_your_links":"Управляйте своими ссылками","en":"Анг","ru":"Рус","email":"email","password":"пароль","link_title":"название","link_src":"ссылка","close":"Закрыть"}')},"67bb":function(e,t,n){},"6c8e":function(e,t,n){"use strict";n("43ce")},"83e0":function(e,t,n){},"890c":function(e,t,n){},"997c":function(e,t,n){},a2ad:function(e,t,n){"use strict";n("890c")},e088:function(e){e.exports=JSON.parse('{"register":"Register","login":"Login","logout":"Logout","categories":"Categories","new_сategory":"New Category","links":"Links","new_link":"New Link","save":"Save","update":"Update","delete":"Delete","profile":"Profile","language":"Language","manage_your_links":"Manage your useful links","en":"Eng","ru":"Ru","email":"email","password":"password","link_title":"link title","link_src":"link src","close":"Close"}')},e1d4:function(e,t,n){"use strict";n("fd02")},e51e:function(e,t,n){},fd02:function(e,t,n){}});
//# sourceMappingURL=app.7a81345c.js.map