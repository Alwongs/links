(function(e){function t(t){for(var s,a,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);g&&g(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},c={app:0},r=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"b27b956b","chunk-1dcee020":"65e99c96","chunk-77a300d1":"e5dcd50f","chunk-7e4a42d4":"ade86bb9","chunk-e8e8e7f6":"68e1c4fa","chunk-8c8d9028":"78c804f3"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-01807728":1,"chunk-1dcee020":1,"chunk-7e4a42d4":1,"chunk-e8e8e7f6":1,"chunk-8c8d9028":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-01807728":"8ff07996","chunk-1dcee020":"83a4e736","chunk-77a300d1":"31d6cfe0","chunk-7e4a42d4":"d23166fc","chunk-e8e8e7f6":"e60cc18f","chunk-8c8d9028":"17c7540d"}[e]+".css",c=o.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===s||l===c)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var s=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[e],g.parentNode.removeChild(g),n(r)},g.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){a[e]=0})));var s=c[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,n){s=c[e]=[t,n]}));t.push(s[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=c[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}c[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/links/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f2":function(e,t,n){},"0b3c":function(e,t,n){"use strict";n("67bb")},"18af":function(e,t,n){"use strict";n("83e0")},2562:function(e,t,n){},"2be1":function(e,t,n){"use strict";n("2562")},"2fc4":function(e,t,n){},"354b":function(e,t,n){"use strict";n("09f2")},4018:function(e,t,n){"use strict";n("997c")},"43ce":function(e,t,n){},"4d68":function(e,t,n){"use strict";var s=n("7a23");const a=["styles"];function c(e,t,n,c,r,i){return Object(s["A"])(),Object(s["g"])("p",{href:"#",class:"form-trigger",styles:{"z-index":n.zIndex},onClick:t[0]||(t[0]=t=>e.$emit("toggleForm"))},Object(s["J"])(n.isFormOpen?e.$t("close"):n.title),9,a)}var r={name:"FormTrigger",props:["isFormOpen","title","zIndex"]},i=(n("a2ad"),n("6b0d")),o=n.n(i);const u=o()(r,[["render",c],["__scopeId","data-v-3d7c8d6d"]]);t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("7a23");const a={class:"wrapper"};function c(e,t,n,c,r,i){const o=Object(s["H"])("app-menu"),u=Object(s["H"])("app-panel"),l=Object(s["H"])("app-aside"),d=Object(s["H"])("router-view"),g=Object(s["H"])("app-footer");return Object(s["A"])(),Object(s["g"])(s["a"],null,[Object(s["j"])(o),Object(s["j"])(u),Object(s["h"])("div",a,[i.isUserAuthenticated?(Object(s["A"])(),Object(s["e"])(l,{key:0,class:"aside-block"})):Object(s["f"])("",!0),Object(s["j"])(d)]),Object(s["j"])(g)],64)}const r={class:"app-panel"},i={key:0,class:"pre-loader"};function o(e,t,n,a,c,o){return Object(s["A"])(),Object(s["g"])("div",r,[Object(s["h"])("div",{class:"home-link",onClick:t[0]||(t[0]=(...e)=>o.goHome&&o.goHome(...e))}," Links "),o.loading?(Object(s["A"])(),Object(s["g"])("div",i," Loading... ")):Object(s["f"])("",!0),Object(s["h"])("div",{class:Object(s["t"])([{opened:o.isAsideOpen},"menu-btn"]),onClick:t[1]||(t[1]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},null,2)])}var u={name:"AppPanel",computed:{loading(){return this.$store.getters.getLoading},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{goHome(){this.$router.push({name:"home"}),this.$store.commit("CLOSE_ASIDE")},toggleMenu(){this.$store.commit("TOGGLE_ASIDE")}}},l=(n("6c8e"),n("6b0d")),d=n.n(l);const g=d()(u,[["render",o],["__scopeId","data-v-673aa136"]]);var p=g;const h={class:"app-aside"};function O(e,t,n,a,c,r){const i=Object(s["H"])("create-category"),o=Object(s["H"])("category-list");return Object(s["A"])(),Object(s["g"])("aside",h,[Object(s["j"])(i),Object(s["h"])("h2",{class:"title",onClick:t[0]||(t[0]=(...e)=>r.toggleList&&r.toggleList(...e))},Object(s["J"])(e.$t("categories")),1),Object(s["h"])("div",{class:Object(s["t"])([{active:c.isListOpen},"list-wrap"])},[Object(s["j"])(o,{onCloseList:r.closeList},null,8,["onCloseList"])],2)])}const b={class:"app-categories"},m={class:"category-list"},j={key:0,class:"no-items"},f=["onClick"],y=["onClick"];function A(e,t,n,a,c,r){return Object(s["A"])(),Object(s["g"])("div",b,[Object(s["h"])("ul",m,[r.categoryList.length?Object(s["f"])("",!0):(Object(s["A"])(),Object(s["g"])("li",j," Category list is empty.. ")),(Object(s["A"])(!0),Object(s["g"])(s["a"],null,Object(s["G"])(r.categoryList,e=>(Object(s["A"])(),Object(s["g"])("li",{key:e.id,class:"category-item"},[Object(s["h"])("div",{class:"category-name",onClick:t=>r.showCategory(e)},Object(s["J"])(e.name),9,f),Object(s["h"])("button",{class:"btn-delete",onClick:t=>r.deleteCategory(e.id)},null,8,y)]))),128))])])}var v={name:"CategoryList",data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList}},methods:{async deleteCategory(e){await this.$store.dispatch("deleteCategory",e),this.$route.params.id===e&&this.$router.push("/")},showCategory(e){this.$emit("closeList"),this.$router.push({name:"links-page",params:{id:e.id}}),this.$store.commit("UPDATE_CATEGORY",e)},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""}},async mounted(){this.categoryList.length||await this.$store.dispatch("getCategoryList")}};n("2be1");const _=d()(v,[["render",A],["__scopeId","data-v-3771704f"]]);var L=_;const k=e=>(Object(s["D"])("data-v-e1ec8144"),e=e(),Object(s["B"])(),e),E={class:"input-list"},C={class:"input-item"},T=k(()=>Object(s["h"])("li",{class:"input-item"},[Object(s["h"])("input",{type:"submit",value:"Save",class:"submit"})],-1));function S(e,t,n,a,c,r){const i=Object(s["H"])("form-trigger");return Object(s["A"])(),Object(s["g"])(s["a"],null,[Object(s["j"])(i,{isFormOpen:c.isFormOpen,title:e.$t("new_сategory"),onToggleForm:r.toggleForm},null,8,["isFormOpen","title","onToggleForm"]),Object(s["h"])("form",{class:Object(s["t"])(["form",{active:c.isFormOpen}]),onSubmit:t[1]||(t[1]=Object(s["P"])((...e)=>r.saveCategory&&r.saveCategory(...e),["prevent"]))},[Object(s["h"])("ul",E,[Object(s["h"])("li",C,[Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.categoryName=e),type:"text",placeholder:"add new category..",required:""},null,512),[[s["L"],c.categoryName]])]),T])],34)],64)}var w=n("4d68"),I={name:"CategoryList",components:{FormTrigger:w["a"]},data(){return{isFormOpen:!1,categoryName:""}},computed:{loading(){return this.$store.getters.getLoading}},methods:{toggleForm(){this.isFormOpen=!this.isFormOpen},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName="",this.isFormOpen=!1}}};n("4018");const $=d()(I,[["render",S],["__scopeId","data-v-e1ec8144"]]);var N=$,D={name:"AppAside",components:{CategoryList:L,CreateCategory:N},data(){return{isListOpen:!0}},methods:{closeList(){this.isListOpen=!1},toggleList(){this.isListOpen=!this.isListOpen}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("354b");const R=d()(D,[["render",O],["__scopeId","data-v-cd6d7cf6"]]);var G=R;const U={class:"app-footer"};function P(e,t,n,a,c,r){return Object(s["A"])(),Object(s["g"])("div",U," footer 2022 ")}var F={};n("18af");const x=d()(F,[["render",P],["__scopeId","data-v-126d5021"]]);var H=x;const J={class:"nav-list"};function M(e,t,n,a,c,r){const i=Object(s["H"])("router-link");return Object(s["A"])(),Object(s["g"])("div",{class:Object(s["t"])(["app-menu",{active:r.isAsideOpen}])},[Object(s["h"])("nav",null,[Object(s["h"])("ul",J,[Object(s["h"])("li",{class:"nav-item",onClick:t[0]||(t[0]=(...e)=>r.switchLang&&r.switchLang(...e))},Object(s["J"])(e.$t("language")+": "+e.$t(c.lang)),1),r.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["A"])(),Object(s["g"])("li",{key:0,class:"nav-item",onClick:t[1]||(t[1]=e=>r.goTo("/register"))},[Object(s["j"])(i,{to:"/register"},{default:Object(s["N"])(()=>[Object(s["i"])(Object(s["J"])(e.$t("register")),1)]),_:1})])),r.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["A"])(),Object(s["g"])("li",{key:1,class:"nav-item",onClick:t[2]||(t[2]=e=>r.goTo("/login"))},[Object(s["j"])(i,{to:"/login"},{default:Object(s["N"])(()=>[Object(s["i"])(Object(s["J"])(e.$t("login")),1)]),_:1})])),r.isUserAuthenticated?(Object(s["A"])(),Object(s["g"])("li",{key:2,class:"nav-item",onClick:t[3]||(t[3]=e=>r.logout())},Object(s["J"])(e.$t("logout")),1)):Object(s["f"])("",!0)])])],2)}var B={name:"AppAside",data(){return{lang:"ru"}},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{goTo(e){this.$router.push(e),this.$store.commit("TOGGLE_ASIDE")},switchLang(){return"en"===this.$i18n.locale?(this.$i18n.locale="ru",void(this.lang="ru")):"ru"===this.$i18n.locale?(this.$i18n.locale="en",void(this.lang="en")):void 0},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),this.isMenuOpen=!1,void this.$store.commit("CLOSE_ASIDE")):void 0}},async mounted(){await this.$store.dispatch("getCategoryList")}};n("e1d4");const Y=d()(B,[["render",M],["__scopeId","data-v-4141e88e"]]);var q=Y,z={name:"App",components:{AppPanel:p,AppAside:G,AppFooter:H,AppMenu:q},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}}};n("0b3c");const K=d()(z,[["render",c],["__scopeId","data-v-30313f33"]]);var V=K,Q=n("6605"),W=n("5502"),X=n("260b"),Z=n("ea7b");const ee={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},te=Object(X["a"])(ee),ne=Object(Z["b"])(te);var se={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:n}){return new Promise(s=>{n.unsubscribeAuth&&n.unsubscribeAuth();let a=Object(Z["c"])(ne,t=>{e("stateChanged",t),s(t)});t("SET_UNSUBSCRIBE_AUTH",a)})},async register({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(Z["a"])(ne,t,n),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async login({commit:e},{email:t,password:n}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(Z["d"])(ne,t,n),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async logOut(){await Object(Z["e"])(ne)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},ae={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{CLOSE_ASIDE(e){e.isAsideOpen=!1},TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},ce=n("66ce"),re={getters:{getCategoryList(e){return e.categoryList},getCategory(e){return e.category}},state:{categoryList:[],category:{}},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t},UPDATE_CATEGORY(e,t){e.category=t}},actions:{async deleteCategory({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const a=Object(ce["c"])(),c=e.userId;await Object(ce["e"])(Object(ce["d"])(a,`${c}/categories/${s}`)),await n("getCategoryList"),t("SET_LOADING",!1)},async getCategory({getters:e,commit:t},n){t("SET_LOADING",!0);const s=Object(ce["d"])(Object(ce["c"])()),a=e.userId;await Object(ce["b"])(Object(ce["a"])(s,`${a}/categories/${n}`)).then(e=>{if(e.exists()){const n=e.val();t("UPDATE_CATEGORY",n),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY",{}),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const n=Object(ce["d"])(Object(ce["c"])()),s=e.userId;await Object(ce["b"])(Object(ce["a"])(n,s+"/categories")).then(e=>{if(e.exists()){const n=e.val(),s=Object.keys(n).map(e=>({...n[e],id:e}));t("UPDATE_CATEGORY_LIST",s),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const a=Object(ce["c"])(),c=e.userId;s.id=Date.now(),await Object(ce["f"])(Object(ce["d"])(a,`${c}/categories/${s.id}`),s),n("getCategoryList"),t("SET_LOADING",!1)}}},ie={actions:{async deleteLink({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const a=Object(ce["c"])(),c=e.userId,r=e.getCategory.id;await Object(ce["e"])(Object(ce["d"])(a,`${c}/categories/${r}/links/${s}`)),await n("getCategoryList"),await n("getCategory",r),t("SET_LOADING",!1)},async saveLink({getters:e,commit:t,dispatch:n},s){t("SET_LOADING",!0);const a=Object(ce["c"])(),c=e.userId,r=e.getCategory.id,i=Date.now();s.id=i,await Object(ce["f"])(Object(ce["d"])(a,`${c}/categories/${r}/links/${i}`),s),await n("getCategoryList"),await n("getCategory",r),t("SET_LOADING",!1)}}},oe=Object(W["a"])({modules:{user:se,general:ae,categories:re,links:ie}});const ue=[{path:"/",name:"home",component:()=>n.e("chunk-8c8d9028").then(n.bind(null,"f4a9"))},{path:"/links-page/:id",name:"links-page",component:()=>n.e("chunk-1dcee020").then(n.bind(null,"2db8"))},{path:"/login",name:"login",component:()=>Promise.all([n.e("chunk-77a300d1"),n.e("chunk-7e4a42d4")]).then(n.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>Promise.all([n.e("chunk-77a300d1"),n.e("chunk-e8e8e7f6")]).then(n.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-01807728").then(n.bind(null,"0c8b"))}],le=Object(Q["a"])({history:Object(Q["b"])("/links/"),routes:ue});le.beforeEach((e,t,n)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,oe.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?n():n("/login"):n()})});var de=le,ge=(n("2fc4"),n("e088")),pe=n("626a");const he="en",Oe={en:ge,ru:pe};var be=n("47e2");const me=Object.assign(Oe),je=Object(be["a"])({legacy:!1,locale:he,fallbackLocale:"en",messages:me}),fe=Object(s["d"])(V,{setup(){const{t:e}=Object(be["b"])();return{t:e}}});fe.use(oe).use(de).use(je).mount("#app")},"626a":function(e){e.exports=JSON.parse('{"register":"Регистрация","login":"Вход","logout":"Выйти","categories":"Категории","new_сategory":"Добавить категорию","links":"Ссылки","new_link":"Добавить ссылку","save":"Сохранить","update":"Обновить","delete":"Удалить","profile":"Профиль","language":"Язык","manage_your_links":"Управляйте своими ссылками","en":"Анг","ru":"Рус","email":"email","password":"пароль","link_title":"название","link_src":"ссылка","close":"Закрыть","do_not_have_account":"Еще не зарегистрированы?","already_have_account":"Уже есть регистрация?"}')},"67bb":function(e,t,n){},"6c8e":function(e,t,n){"use strict";n("43ce")},"83e0":function(e,t,n){},"890c":function(e,t,n){},"997c":function(e,t,n){},a2ad:function(e,t,n){"use strict";n("890c")},e088:function(e){e.exports=JSON.parse('{"register":"Register","login":"Login","logout":"Logout","categories":"Categories","new_сategory":"New Category","links":"Links","new_link":"New Link","save":"Save","update":"Update","delete":"Delete","profile":"Profile","language":"Language","manage_your_links":"Manage your useful links","en":"Eng","ru":"Ru","email":"email","password":"password","link_title":"link title","link_src":"link src","close":"Close","do_not_have_account":"Don\'t have account?","already_have_account":"Already have account?"}')},e1d4:function(e,t,n){"use strict";n("fd02")},fd02:function(e,t,n){}});
//# sourceMappingURL=app.c675649e.js.map