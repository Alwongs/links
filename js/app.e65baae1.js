(function(e){function t(t){for(var a,s,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);g&&g(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"c13d4228","chunk-2d0a32ea":"e7cb79e0","chunk-38bab7bb":"5a899b0f","chunk-3a671566":"9db99f88","chunk-4d3e6df2":"9007ad68","chunk-78a6e454":"84804a89"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-01807728":1,"chunk-38bab7bb":1,"chunk-3a671566":1,"chunk-4d3e6df2":1,"chunk-78a6e454":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-01807728":"74c4706b","chunk-2d0a32ea":"31d6cfe0","chunk-38bab7bb":"b9087d87","chunk-3a671566":"fa6dc9e9","chunk-4d3e6df2":"e3dbd587","chunk-78a6e454":"0844090e"}[e]+".css",r=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],g.parentNode.removeChild(g),n(c)},g.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/links/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18af":function(e,t,n){"use strict";n("83e0")},2764:function(e,t,n){},2988:function(e,t,n){},"2fc4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const s={class:"wrapper"};function r(e,t,n,r,c,i){const o=Object(a["E"])("app-panel"),u=Object(a["E"])("app-aside"),l=Object(a["E"])("router-view"),d=Object(a["E"])("app-footer");return Object(a["x"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(o),Object(a["h"])("div",s,[Object(a["j"])(u,{class:"aside-block"}),Object(a["j"])(l)]),Object(a["j"])(d)],64)}const c={class:"app-panel"},i={class:"nav-list"},o=["onClick"];function u(e,t,n,s,r,u){const l=Object(a["E"])("router-link");return Object(a["x"])(),Object(a["g"])("div",c,[Object(a["h"])("div",{class:"panel-item home-link",onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"}))},Object(a["G"])(e.$t("links")),1),Object(a["h"])("nav",{class:Object(a["r"])(["panel-item",{active:u.isAsideOpen}])},[Object(a["h"])("ul",i,[(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(u.menuItems,e=>(Object(a["x"])(),Object(a["g"])("li",{key:e.route,class:"nav-item",onClick:t=>u.goTo(e.route)},[Object(a["j"])(l,{to:e.route},{default:Object(a["K"])(()=>[Object(a["i"])(Object(a["G"])(e.title),1)]),_:2},1032,["to"])],8,o))),128)),u.isUserAuthenticated?(Object(a["x"])(),Object(a["g"])("li",{key:0,class:"nav-item",onClick:t[1]||(t[1]=e=>u.logout())}," Выйти ")):Object(a["f"])("",!0)]),Object(a["h"])("div",{class:Object(a["r"])(["menu-btn",{opened:u.isAsideOpen}]),onClick:t[2]||(t[2]=(...e)=>u.toggleMenu&&u.toggleMenu(...e))},null,2)],2)])}var l={name:"AppPanel",computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen},menuItems(){return this.isUserAuthenticated?[{title:"Profile",route:"/profile-page"}]:[{title:"Вход",route:"/login"},{title:"Регистрация",route:"/register"}]}},data(){return{}},methods:{toggleMenu(){this.$store.commit("TOGGLE_ASIDE")},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),void(this.isMenuOpen=!1)):void 0},goTo(e){this.$router.push(e)}}},d=(n("815d"),n("6b0d")),g=n.n(d);const b=g()(l,[["render",u],["__scopeId","data-v-7fca4fa8"]]);var p=b;function O(e,t,n,s,r,c){const i=Object(a["E"])("create-category"),o=Object(a["E"])("category-list");return Object(a["x"])(),Object(a["g"])("aside",{class:Object(a["r"])(["app-aside",{active:c.isAsideOpen}])},[Object(a["j"])(i),Object(a["j"])(o)],2)}var h=n("ca05"),m=n("5840"),f={components:{CategoryList:h["a"],CreateCategory:m["a"]},name:"AppAside",computed:{isAsideOpen(){return this.$store.getters.isAsideOpen}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("e641");const j=g()(f,[["render",O],["__scopeId","data-v-76fae878"]]);var y=j;const A={class:"app-footer"};function E(e,t,n,s,r,c){return Object(a["x"])(),Object(a["g"])("div",A," footer 2022 ")}var v={};n("18af");const L=g()(v,[["render",E],["__scopeId","data-v-126d5021"]]);var _=L,k={name:"App",components:{AppPanel:p,AppAside:y,AppFooter:_}};n("9c97");const T=g()(k,[["render",r],["__scopeId","data-v-7f73ab2c"]]);var C=T,S=n("6605"),I=n("5502"),N=n("260b"),D=n("ea7b");const w={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},G=Object(N["a"])(w),R=Object(D["b"])(G);var $={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:n}){return new Promise(a=>{n.unsubscribeAuth&&n.unsubscribeAuth();let s=Object(D["c"])(R,t=>{e("stateChanged",t),a(t)});t("SET_UNSUBSCRIBE_AUTH",s)})},async register({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(D["a"])(R,t,n),e("SET_LOADING",!1)}catch(a){e("SET_LOADING",!1),e("SET_ERROR",a.message)}},async login({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(D["d"])(R,t,n),e("SET_LOADING",!1)}catch(a){e("SET_LOADING",!1),e("SET_ERROR",a.message)}},async logOut(){await Object(D["e"])(R)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},U={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{CLOSE_ASIDE(e){e.isAsideOpen=!1},TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},x=n("66ce"),P={getters:{getCategoryList(e){return e.categoryList},getCategory(e){return e.category}},state:{categoryList:[],category:{}},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t},UPDATE_CATEGORY(e,t){e.category=t}},actions:{async deleteCategory({getters:e,commit:t,dispatch:n},a){t("SET_LOADING",!0);const s=Object(x["c"])(),r=e.userId;await Object(x["e"])(Object(x["d"])(s,`${r}/categories/${a}`)),await n("getCategoryList"),t("SET_LOADING",!1)},async getCategory({getters:e,commit:t},n){t("SET_LOADING",!0);const a=Object(x["d"])(Object(x["c"])()),s=e.userId;await Object(x["b"])(Object(x["a"])(a,`${s}/categories/${n}`)).then(e=>{if(e.exists()){const n=e.val();t("UPDATE_CATEGORY",n),n.links&&t("UPDATE_LINK_LIST",n.links),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY",{}),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const n=Object(x["d"])(Object(x["c"])()),a=e.userId;await Object(x["b"])(Object(x["a"])(n,a+"/categories")).then(e=>{if(e.exists()){const n=e.val(),a=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_CATEGORY_LIST",a),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:n},a){t("SET_LOADING",!0);const s=Object(x["c"])(),r=e.userId;a.id=Date.now(),await Object(x["f"])(Object(x["d"])(s,`${r}/categories/${a.id}`),a),n("getCategoryList"),t("SET_LOADING",!1)}}},F={getters:{getLinkList(e){return e.linkList}},state:{linkList:[]},mutations:{UPDATE_LINK_LIST(e,t){e.linkList=t}},actions:{async deleteLink({getters:e,commit:t,dispatch:n},a){t("SET_LOADING",!0);const s=Object(x["c"])(),r=e.userId,c=e.getCategory.id;await Object(x["e"])(Object(x["d"])(s,`${r}/categories/${c}/links/${a}`)),await n("getLinkList",c),t("SET_LOADING",!1)},async saveLink({getters:e,commit:t},n){t("SET_LOADING",!0);const a=Object(x["c"])(),s=e.userId,r=e.getCategory.id,c=Date.now();n.id=c,await Object(x["f"])(Object(x["d"])(a,`${s}/categories/${r}/links/${c}`),n),t("SET_LOADING",!1)},async getLinkList({getters:e,commit:t},n){t("SET_LOADING",!0);const a=Object(x["d"])(Object(x["c"])()),s=e.userId;await Object(x["b"])(Object(x["a"])(a,`${s}/categories/${n}/links`)).then(e=>{if(e.exists()){const n=e.val(),a=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_LINK_LIST",a),t("SET_LOADING",!1)}else t("UPDATE_LINK_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})}}},M=Object(I["a"])({modules:{user:$,general:U,categories:P,links:F}});const B=[{path:"/",name:"home",component:()=>n.e("chunk-4d3e6df2").then(n.bind(null,"f4a9"))},{path:"/links-page/:id",name:"links-page",component:()=>n.e("chunk-78a6e454").then(n.bind(null,"2db8"))},{path:"/profile-page",name:"profile-page",component:()=>n.e("chunk-2d0a32ea").then(n.bind(null,"00a5"))},{path:"/login",name:"login",component:()=>n.e("chunk-38bab7bb").then(n.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>n.e("chunk-3a671566").then(n.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))}],K=Object(S["a"])({history:Object(S["b"])("/links/"),routes:B});K.beforeEach((e,t,n)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,M.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?n():n("/login"):n()})});var Y=K,q=(n("2fc4"),n("e088")),J=n("626a");const H="en",z={en:q,ru:J};var V=n("47e2");const Q=Object.assign(z),W=Object(V["a"])({legacy:!1,locale:H,fallbackLocale:"en",messages:Q}),X=Object(a["d"])(C,{setup(){const{t:e}=Object(V["b"])();return{t:e}}});X.use(M).use(Y).use(W).mount("#app")},5840:function(e,t,n){"use strict";var a=n("7a23");const s={class:"input-list"},r={class:"input-item"},c={class:"input-item"},i=["value"];function o(e,t,n,o,u,l){return Object(a["x"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("p",{href:"#",class:"form-trigger",onClick:t[0]||(t[0]=(...e)=>l.toggleForm&&l.toggleForm(...e))},Object(a["G"])(u.isFormOpen?"Close":"New category"),1),Object(a["h"])("form",{class:Object(a["r"])(["form",{active:u.isFormOpen}]),onSubmit:t[2]||(t[2]=Object(a["M"])((...e)=>l.saveCategory&&l.saveCategory(...e),["prevent"]))},[Object(a["h"])("ul",s,[Object(a["h"])("li",r,[Object(a["L"])(Object(a["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>u.categoryName=e),type:"text",placeholder:"add new category.."},null,512),[[a["I"],u.categoryName]])]),Object(a["h"])("li",c,[Object(a["h"])("input",{type:"submit",value:l.btnTitle,class:"submit"},null,8,i)])])],34)],64)}var u={name:"CategoryList",data(){return{isFormOpen:!1,categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},btnTitle(){return this.categoryName?"Save":"Close"}},methods:{toggleForm(){this.isFormOpen=!this.isFormOpen},async saveCategory(){this.categoryName?(await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName="",this.isFormOpen=!1):this.isFormOpen=!1}}},l=(n("f6ba"),n("6b0d")),d=n.n(l);const g=d()(u,[["render",o],["__scopeId","data-v-dfe75d66"]]);t["a"]=g},"626a":function(e){e.exports=JSON.parse('{"register":"Регистрация","login":"Вход","logout":"Выйти","categories":"Категории","links":"Ссылки","save":"Сохранить","update":"Обновить","delete":"Удалить"}')},"815d":function(e,t,n){"use strict";n("eae3")},"83e0":function(e,t,n){},"9c97":function(e,t,n){"use strict";n("2764")},b4e2:function(e,t,n){},ca05:function(e,t,n){"use strict";var a=n("7a23");const s=e=>(Object(a["A"])("data-v-41625626"),e=e(),Object(a["y"])(),e),r={class:"app-categories"},c=s(()=>Object(a["h"])("h2",{class:"title"}," Caterories ",-1)),i={class:"category-list"},o=["onClick"],u=["onClick"],l={key:0,class:"loading"};function d(e,t,n,s,d,g){return Object(a["x"])(),Object(a["g"])("div",r,[c,Object(a["h"])("ul",i,[(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(g.categoryList,e=>(Object(a["x"])(),Object(a["g"])("li",{key:e.id,class:"category-item"},[Object(a["h"])("div",{class:"category-name",onClick:t=>g.showCategory(e)},Object(a["G"])(e.name),9,o),Object(a["h"])("button",{class:"btn-delete",onClick:t=>g.deleteCategory(e.id)}," Del ",8,u)]))),128))]),g.loading?(Object(a["x"])(),Object(a["g"])("p",l,"Загрузка...")):Object(a["f"])("",!0)])}var g={name:"CategoryList",data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList},isAsideOpen(){return this.$store.getters.isAsideOpen},getCategoryList(){return this.$store.getters.getCategoryList}},methods:{async deleteCategory(e){await this.$store.dispatch("deleteCategory",e)},showCategory(e){this.$store.commit("UPDATE_CATEGORY",e),this.$store.commit("UPDATE_LINK_LIST",e.links),this.$router.push({name:"links-page",params:{id:e.id}}),this.$store.commit("CLOSE_ASIDE")},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""}},async mounted(){this.getCategoryList.length||await this.$store.dispatch("getCategoryList")}},b=(n("dd09"),n("6b0d")),p=n.n(b);const O=p()(g,[["render",d],["__scopeId","data-v-41625626"]]);t["a"]=O},d818:function(e,t,n){},dd09:function(e,t,n){"use strict";n("b4e2")},e088:function(e){e.exports=JSON.parse('{"register":"Register","login":"Login","logout":"Logout","categories":"Categories","links":"Links","save":"Save","update":"Update","delete":"Delete"}')},e641:function(e,t,n){"use strict";n("2988")},eae3:function(e,t,n){},f6ba:function(e,t,n){"use strict";n("d818")}});
//# sourceMappingURL=app.e65baae1.js.map