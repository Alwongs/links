(function(e){function t(t){for(var s,n,i=t[0],o=t[1],l=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);g&&g(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-01807728":"683ba859","chunk-088332f5":"3bdbfa35","chunk-77a300d1":"e17c8fa8","chunk-0d146018":"14e5e87c","chunk-326acabd":"8adae9e5","chunk-4530ce96":"5b307c7b"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-01807728":1,"chunk-088332f5":1,"chunk-0d146018":1,"chunk-326acabd":1,"chunk-4530ce96":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{"chunk-01807728":"8ff07996","chunk-088332f5":"de82e0fa","chunk-77a300d1":"31d6cfe0","chunk-0d146018":"1d14dc2d","chunk-326acabd":"ad3f9970","chunk-4530ce96":"528c1e06"}[e]+".css",r=o.p+s,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===s||u===r)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var s=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete n[e],g.parentNode.removeChild(g),a(c)},g.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(g);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[e]=void 0}};var g=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/links/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var g=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02d9":function(e,t,a){},"0682":function(e,t,a){},"0b3c":function(e,t,a){"use strict";a("67bb")},"0bfe":function(e,t,a){},"18af":function(e,t,a){"use strict";a("83e0")},"1fef":function(e,t,a){"use strict";a("0bfe")},"2fc4":function(e,t,a){},"391c":function(e,t,a){},"41df":function(e,t,a){},"445f":function(e,t,a){"use strict";a("55a5")},"4d68":function(e,t,a){"use strict";var s=a("7a23");const n=["styles"];function r(e,t,a,r,c,i){return Object(s["B"])(),Object(s["g"])("p",{href:"#",class:"form-trigger",styles:{"z-index":a.zIndex},onClick:t[0]||(t[0]=t=>e.$emit("toggleForm"))},Object(s["K"])(a.isFormOpen?e.$t("close"):a.title),9,n)}var c={name:"FormTrigger",props:["isFormOpen","title","zIndex"]},i=(a("1fef"),a("6b0d")),o=a.n(i);const l=o()(c,[["render",r],["__scopeId","data-v-a6be7f70"]]);t["a"]=l},"55a5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23");const n={class:"wrapper"};function r(e,t,a,r,c,i){const o=Object(s["I"])("app-menu"),l=Object(s["I"])("app-panel"),u=Object(s["I"])("app-aside"),d=Object(s["I"])("router-view"),g=Object(s["I"])("app-footer");return Object(s["B"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(o),Object(s["k"])(l),Object(s["h"])("div",n,[i.isUserAuthenticated?(Object(s["B"])(),Object(s["e"])(u,{key:0,class:"aside-block"})):Object(s["f"])("",!0),Object(s["k"])(d)]),Object(s["k"])(g)],64)}const c={class:"app-panel"};function i(e,t,a,n,r,i){const o=Object(s["I"])("app-loader");return Object(s["B"])(),Object(s["g"])("div",c,[Object(s["h"])("div",{class:"home-link",onClick:t[0]||(t[0]=(...e)=>i.goHome&&i.goHome(...e))}," Links "),i.loading?(Object(s["B"])(),Object(s["e"])(o,{key:0})):Object(s["f"])("",!0),Object(s["h"])("div",{class:Object(s["u"])([{opened:i.isAsideOpen},"menu-btn"]),onClick:t[1]||(t[1]=(...e)=>i.toggleMenu&&i.toggleMenu(...e))},null,2)])}const o={class:"wrapper"},l=Object(s["i"])('<div class="waviy" data-v-57f984b2><span style="--i:1;" data-v-57f984b2>L</span><span style="--i:2;" data-v-57f984b2>o</span><span style="--i:3;" data-v-57f984b2>a</span><span style="--i:4;" data-v-57f984b2>d</span><span style="--i:5;" data-v-57f984b2>i</span><span style="--i:6;" data-v-57f984b2>n</span><span style="--i:7;" data-v-57f984b2>g</span><span style="--i:8;" data-v-57f984b2>.</span><span style="--i:9;" data-v-57f984b2>.</span><span style="--i:10;" data-v-57f984b2>.</span></div>',1),u=[l];function d(e,t,a,n,r,c){return Object(s["B"])(),Object(s["g"])("div",o,u)}var g={name:"AppLoader"},p=(a("a052"),a("6b0d")),h=a.n(p);const b=h()(g,[["render",d],["__scopeId","data-v-57f984b2"]]);var O=b,m={name:"AppPanel",components:{AppLoader:O},computed:{loading(){return this.$store.getters.getLoading},isAsideOpen(){return this.$store.getters.isAsideOpen}},methods:{goHome(){this.$router.push({name:"home"}),this.$store.commit("CLOSE_ASIDE")},toggleMenu(){this.$store.commit("TOGGLE_ASIDE")}}};a("445f");const f=h()(m,[["render",i],["__scopeId","data-v-3180fc92"]]);var y=f;const j={class:"app-aside"};function _(e,t,a,n,r,c){const i=Object(s["I"])("create-category"),o=Object(s["I"])("category-list");return Object(s["B"])(),Object(s["g"])("aside",j,[Object(s["k"])(i,{class:Object(s["u"])(["create-category-trigger",{hidden:!r.isListOpen}])},null,8,["class"]),Object(s["h"])("h2",{class:Object(s["u"])([{"arrow-right":!r.isListOpen,"arrow-down":r.isListOpen},"title"]),onClick:t[0]||(t[0]=(...e)=>c.toggleList&&c.toggleList(...e))},Object(s["K"])(e.$t("categories")),3),Object(s["h"])("div",{class:Object(s["u"])([{active:r.isListOpen},"list-wrap"])},[Object(s["k"])(o,{onCloseList:c.closeList},null,8,["onCloseList"])],2)])}const v={class:"app-categories"},A={class:"category-list"},k={key:0,class:"no-items"},L=["onClick"],E=["onClick"];function C(e,t,a,n,r,c){return Object(s["B"])(),Object(s["g"])("div",v,[Object(s["h"])("ul",A,[c.categoryList.length?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("li",k," Category list is empty.. ")),(Object(s["B"])(!0),Object(s["g"])(s["a"],null,Object(s["H"])(c.categoryList,e=>(Object(s["B"])(),Object(s["g"])("li",{key:e.id,class:"category-item"},[Object(s["h"])("div",{class:"category-name",onClick:t=>c.showCategory(e)},Object(s["K"])(e.name),9,L),Object(s["h"])("button",{class:"btn-delete",onClick:t=>c.deleteCategory(e.id)},null,8,E)]))),128))])])}var T={name:"CategoryList",data(){return{categoryName:""}},computed:{loading(){return this.$store.getters.getLoading},categoryList(){return this.$store.getters.getCategoryList}},methods:{async deleteCategory(e){await this.$store.dispatch("deleteCategory",e),this.$route.params.id===e&&this.$router.push("/")},showCategory(e){this.$emit("closeList"),this.$router.push({name:"links-page",params:{id:e.id}}),this.$store.commit("UPDATE_CATEGORY",e),this.$store.commit("UPDATE_CATEGORY_FILTER",e)},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName=""}},async mounted(){this.categoryList.length||await this.$store.dispatch("getCategoryList")}};a("c991");const S=h()(T,[["render",C],["__scopeId","data-v-4634be1a"]]);var w=S;const I=e=>(Object(s["E"])("data-v-212d01bf"),e=e(),Object(s["C"])(),e),$={class:"create-category"},R={class:"modal-title"},D={class:"input-list"},N={class:"input-item"},G=["placeholder"],U=I(()=>Object(s["h"])("li",{class:"input-item"},[Object(s["h"])("input",{type:"submit",value:"Save",class:"submit"})],-1));function P(e,t,a,n,r,c){const i=Object(s["I"])("form-trigger");return Object(s["B"])(),Object(s["g"])("div",$,[Object(s["k"])(i,{isFormOpen:r.isFormOpen,title:e.$t("add_сategory"),onToggleForm:c.toggleForm},null,8,["isFormOpen","title","onToggleForm"]),Object(s["h"])("div",{class:Object(s["u"])([{active:r.isFormOpen},"modal"])},[Object(s["h"])("h2",R,Object(s["K"])(e.$t("new_category")),1),Object(s["h"])("form",{class:"form",onSubmit:t[1]||(t[1]=Object(s["Q"])((...e)=>c.saveCategory&&c.saveCategory(...e),["prevent"]))},[Object(s["h"])("ul",D,[Object(s["h"])("li",N,[Object(s["P"])(Object(s["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.categoryName=e),type:"text",placeholder:e.$t("link_title"),required:""},null,8,G),[[s["M"],r.categoryName]])]),U])],32)],2)])}var F=a("4d68"),B={name:"CategoryList",components:{FormTrigger:F["a"]},data(){return{isFormOpen:!1,categoryName:""}},computed:{loading(){return this.$store.getters.getLoading}},methods:{toggleForm(){this.isFormOpen=!this.isFormOpen},async saveCategory(){await this.$store.dispatch("saveCategory",{name:this.categoryName}),this.categoryName="",this.isFormOpen=!1}}};a("edf0");const x=h()(B,[["render",P],["__scopeId","data-v-212d01bf"]]);var M=x,Y={name:"AppAside",components:{CategoryList:w,CreateCategory:M},data(){return{isListOpen:!0}},methods:{closeList(){this.isListOpen=!1},toggleList(){this.isListOpen=!this.isListOpen}},async mounted(){await this.$store.dispatch("getCategoryList")}};a("c77f");const K=h()(Y,[["render",_],["__scopeId","data-v-6af161f2"]]);var H=K;const z={class:"app-footer"};function q(e,t,a,n,r,c){return Object(s["B"])(),Object(s["g"])("div",z," footer 2022 ")}var J={};a("18af");const V=h()(J,[["render",q],["__scopeId","data-v-126d5021"]]);var Q=V;const W={class:"nav-list"},X={key:3,class:"nav-item search-item"},Z=["title"];function ee(e,t,a,n,r,c){const i=Object(s["I"])("router-link");return Object(s["B"])(),Object(s["g"])("div",{class:Object(s["u"])(["app-menu",{active:c.isAsideOpen}])},[Object(s["h"])("nav",null,[Object(s["h"])("ul",W,[Object(s["h"])("li",{title:"Push to change",class:"nav-item",onClick:t[0]||(t[0]=(...e)=>c.switchLang&&c.switchLang(...e))},[Object(s["h"])("span",{class:Object(s["u"])({eng:"en"==e.$i18n.locale,rus:"ru"==e.$i18n.locale})},Object(s["K"])(e.$t("language"))+": ",3)]),c.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("li",{key:0,class:"nav-item",onClick:t[1]||(t[1]=e=>c.goTo("/register"))},[Object(s["k"])(i,{to:"/register"},{default:Object(s["O"])(()=>[Object(s["j"])(Object(s["K"])(e.$t("register")),1)]),_:1})])),c.isUserAuthenticated?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("li",{key:1,class:"nav-item",onClick:t[2]||(t[2]=e=>c.goTo("/login"))},[Object(s["k"])(i,{to:"/login"},{default:Object(s["O"])(()=>[Object(s["j"])(Object(s["K"])(e.$t("login")),1)]),_:1})])),c.isUserAuthenticated?(Object(s["B"])(),Object(s["g"])("li",{key:2,class:"nav-item",onClick:t[3]||(t[3]=e=>c.logout())},Object(s["K"])(e.$t("logout")),1)):Object(s["f"])("",!0),c.isUserAuthenticated?(Object(s["B"])(),Object(s["g"])("li",X,[Object(s["P"])(Object(s["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.searchText=e),type:"text",placeholder:"Search"},null,512),[[s["M"],r.searchText,void 0,{trim:!0}]]),Object(s["h"])("button",{class:"",onClick:t[5]||(t[5]=(...e)=>c.clearSearch&&c.clearSearch(...e)),title:e.$t("reset")},null,8,Z)])):Object(s["f"])("",!0)])])],2)}var te={name:"AppAside",data(){return{searchText:""}},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated},isAsideOpen(){return this.$store.getters.isAsideOpen},getCategory(){return this.$store.getters.getCategory},getCategoryFilter(){return this.$store.getters.getCategoryFilter}},watch:{searchText:function(){this.search()}},methods:{clearSearch(){this.searchText=""},search(){const e=this.getCategory.links,t=Object.keys(e).map(t=>({...e[t],id:t}));let a=[];t.map(e=>{e.title.toLowerCase().includes(this.searchText.toLowerCase())&&a.push(e)});let s={...this.getCategory};s.links=a,this.$store.commit("UPDATE_CATEGORY_FILTER",s)},goTo(e){this.$router.push(e),this.$store.commit("TOGGLE_ASIDE")},switchLang(){return"en"===this.$i18n.locale?(this.$i18n.locale="ru",void localStorage.setItem("local","ru")):"ru"===this.$i18n.locale?(this.$i18n.locale="en",void localStorage.setItem("local","en")):void 0},logout(){return confirm("Вы уверены?")?(this.$store.dispatch("logOut"),this.$router.push("/"),this.isMenuOpen=!1,void this.$store.commit("CLOSE_ASIDE")):void 0}},async mounted(){await this.$store.dispatch("getCategoryList")}};a("ff3c");const ae=h()(te,[["render",ee],["__scopeId","data-v-0fecce62"]]);var se=ae,ne={name:"App",components:{AppPanel:y,AppAside:H,AppFooter:Q,AppMenu:se},computed:{isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}}};a("0b3c");const re=h()(ne,[["render",r],["__scopeId","data-v-30313f33"]]);var ce=re,ie=a("6605"),oe=a("5502"),le=a("260b"),ue=a("ea7b");const de={apiKey:"AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",authDomain:"useful-link-list.firebaseapp.com",projectId:"useful-link-list",storageBucket:"useful-link-list.appspot.com",messagingSenderId:"1085471896639",appId:"1:1085471896639:web:2431325325cd64bf5d748a"},ge=Object(le["a"])(de),pe=Object(ue["b"])(ge);var he={getters:{isUserAuthenticated(e){return e.user.isAuthenticated},userId(e){return e.user.uid}},state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER(e,t){e.user.isAuthenticated=!0,e.user.uid=t},UNSET_USER(e){e.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH(e,t){e.unsubscribeAuth=t}},actions:{initAuth({dispatch:e,commit:t,state:a}){return new Promise(s=>{a.unsubscribeAuth&&a.unsubscribeAuth();let n=Object(ue["c"])(pe,t=>{e("stateChanged",t),s(t)});t("SET_UNSUBSCRIBE_AUTH",n)})},async register({commit:e},{email:t,password:a}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(ue["a"])(pe,t,a),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async login({commit:e},{email:t,password:a}){e("SET_LOADING",!0),e("CLEAR_ERROR");try{await Object(ue["d"])(pe,t,a),e("SET_LOADING",!1)}catch(s){e("SET_LOADING",!1),e("SET_ERROR",s.message)}},async logOut(){await Object(ue["e"])(pe)},stateChanged({commit:e},t){t?e("SET_USER",t.uid):e("UNSET_USER")}}},be={getters:{getLoading(e){return e.loading},getError(e){return e.error},isAsideOpen(e){return e.isAsideOpen}},state:{loading:!1,error:null,isAsideOpen:!1},mutations:{CLOSE_ASIDE(e){e.isAsideOpen=!1},TOGGLE_ASIDE(e){e.isAsideOpen=!e.isAsideOpen},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},CLEAR_ERROR(e){e.error=null}}},Oe=a("66ce"),me={getters:{getCategoryList(e){return e.categoryList},getCategory(e){return e.category},getCategoryFilter(e){return e.categoryFilter}},state:{categoryList:[],category:{},categoryFilter:{}},mutations:{UPDATE_CATEGORY_LIST(e,t){e.categoryList=t},UPDATE_CATEGORY(e,t){e.category=t},UPDATE_CATEGORY_FILTER(e,t){e.categoryFilter=t}},actions:{async deleteCategory({getters:e,commit:t,dispatch:a},s){t("SET_LOADING",!0);const n=Object(Oe["c"])(),r=e.userId;await Object(Oe["e"])(Object(Oe["d"])(n,`${r}/categories/${s}`)),await a("getCategoryList"),t("SET_LOADING",!1)},async getCategory({getters:e,commit:t},a){t("SET_LOADING",!0);const s=Object(Oe["d"])(Object(Oe["c"])()),n=e.userId;await Object(Oe["b"])(Object(Oe["a"])(s,`${n}/categories/${a}`)).then(e=>{if(e.exists()){const a=e.val();t("UPDATE_CATEGORY",a),t("UPDATE_CATEGORY_FILTER",a),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY",{}),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async getCategoryList({getters:e,commit:t}){t("SET_LOADING",!0);const a=Object(Oe["d"])(Object(Oe["c"])()),s=e.userId;await Object(Oe["b"])(Object(Oe["a"])(a,s+"/categories")).then(e=>{if(e.exists()){const a=e.val(),s=Object.keys(a).map(e=>({...a[e],id:e}));t("UPDATE_CATEGORY_LIST",s),t("SET_LOADING",!1)}else t("UPDATE_CATEGORY_LIST",[]),t("SET_LOADING",!1)}).catch(e=>{console.error(e)})},async saveCategory({getters:e,commit:t,dispatch:a},s){t("SET_LOADING",!0);const n=Object(Oe["c"])(),r=e.userId;s.id=Date.now(),await Object(Oe["f"])(Object(Oe["d"])(n,`${r}/categories/${s.id}`),s),a("getCategoryList"),t("SET_LOADING",!1)}}},fe={actions:{async deleteLink({getters:e,commit:t,dispatch:a},s){t("SET_LOADING",!0);const n=Object(Oe["c"])(),r=e.userId,c=e.getCategory.id;await Object(Oe["e"])(Object(Oe["d"])(n,`${r}/categories/${c}/links/${s}`)),await a("getCategoryList"),await a("getCategory",c),t("SET_LOADING",!1)},async saveLink({getters:e,commit:t,dispatch:a},s){t("SET_LOADING",!0);const n=Object(Oe["c"])(),r=e.userId,c=e.getCategory.id,i=Date.now();s.id=i,await Object(Oe["f"])(Object(Oe["d"])(n,`${r}/categories/${c}/links/${i}`),s),await a("getCategoryList"),await a("getCategory",c),t("SET_LOADING",!1)}}},ye=Object(oe["a"])({modules:{user:he,general:be,categories:me,links:fe}});const je=[{path:"/",name:"home",component:()=>a.e("chunk-088332f5").then(a.bind(null,"f4a9"))},{path:"/links-page/:id",name:"links-page",component:()=>Promise.all([a.e("chunk-77a300d1"),a.e("chunk-326acabd")]).then(a.bind(null,"2db8"))},{path:"/login",name:"login",component:()=>Promise.all([a.e("chunk-77a300d1"),a.e("chunk-0d146018")]).then(a.bind(null,"48ca"))},{path:"/register",name:"register",component:()=>Promise.all([a.e("chunk-77a300d1"),a.e("chunk-4530ce96")]).then(a.bind(null,"61e9"))},{path:"/404",name:"404",component:()=>a.e("chunk-01807728").then(a.bind(null,"0c8b"))},{path:"/:pathMatch(.*)*",component:()=>a.e("chunk-01807728").then(a.bind(null,"0c8b"))}],_e=Object(ie["a"])({history:Object(ie["b"])("/links/"),routes:je});_e.beforeEach((e,t,a)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,ye.dispatch("initAuth").then(t=>{e.matched.some(e=>e.meta.authRequired)?t?a():a("/login"):a()})});var ve=_e,Ae=(a("2fc4"),a("e088")),ke=a("626a");const Le=localStorage.getItem("local")||"en",Ee={en:Ae,ru:ke};var Ce=a("47e2");const Te=Object.assign(Ee),Se=Object(Ce["a"])({legacy:!1,locale:Le,fallbackLocale:"en",messages:Te}),we=Object(s["d"])(ce,{setup(){const{t:e}=Object(Ce["b"])();return{t:e}}});we.use(ye).use(ve).use(Se).mount("#app")},"5ee0":function(e,t,a){},"626a":function(e){e.exports=JSON.parse('{"register":"Регистрация","login":"Вход","logout":"Выйти","categories":"Категории","add_сategory":"Добавить категорию","add_link":"Добавить ссылку","links":"Ссылки","save":"Сохранить","update":"Обновить","delete":"Удалить","profile":"Профиль","language":"Язык","manage_your_links":"Управляйте своими ссылками","en":"АНГ","ru":"РУС","email":"email","password":"пароль","link_title":"название","link_src":"ссылка","close":"Закрыть","do_not_have_account":"Еще не зарегистрированы?","already_have_account":"Уже есть регистрация?","you_are_not_authorized":"Вы не авторизованы. Войдите если у вас есть аккаунт или пройдите регистрацию","wrong_url":"Некорректная ссылка","min_number_of_letters":"Минимальное количество символов: ","field_should_be_filled":"Поле не должно быть пустым","select_category":"Выберете категорию для просмотра ссылок","clear":"Очистить","reset":"Сброс","new_category":"Новая категория","new_link":"Новая ссылка"}')},"67bb":function(e,t,a){},"83e0":function(e,t,a){},a052:function(e,t,a){"use strict";a("5ee0")},c77f:function(e,t,a){"use strict";a("02d9")},c991:function(e,t,a){"use strict";a("41df")},e088:function(e){e.exports=JSON.parse('{"register":"Register","login":"Login","logout":"Logout","categories":"Categories","add_сategory":"Add Category","add_link":"Add Link","links":"Links","save":"Save","update":"Update","delete":"Delete","profile":"Profile","language":"Language","manage_your_links":"Manage your useful links","en":"ENG","ru":"RUS","email":"email","password":"password","link_title":"link title","link_src":"link src","close":"Close","do_not_have_account":"Don\'t have account?","already_have_account":"Already have account?","you_are_not_authorized":"You are not authorized. Login or Register","wrong_url":"Wrong URL","min_number_of_letters":"Minimal number of letters: ","field_should_be_filled":"The field should be filled","select_category":"Select category to view links","clear":"Clear","reset":"Reset","new_category":"New category","new_link":"New Link"}')},edf0:function(e,t,a){"use strict";a("0682")},ff3c:function(e,t,a){"use strict";a("391c")}});
//# sourceMappingURL=app.df12b44f.js.map