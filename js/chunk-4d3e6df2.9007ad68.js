(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d3e6df2"],{7284:function(e,t,s){},"878a":function(e,t,s){"use strict";s("7284")},f4a9:function(e,t,s){"use strict";s.r(t);var a=s("7a23");const c=e=>(Object(a["A"])("data-v-7f777cb5"),e=e(),Object(a["y"])(),e),r={class:"app-page"},n=c(()=>Object(a["h"])("h1",{class:"title"}," Manage your useful links.. ",-1)),o={class:"create-category-wrap"};function i(e,t,s,c,i,g){const d=Object(a["E"])("create-category"),u=Object(a["E"])("category-list");return Object(a["x"])(),Object(a["g"])("div",r,[n,Object(a["h"])("div",o,[Object(a["j"])(d)]),g.isAsideOpen?Object(a["f"])("",!0):(Object(a["x"])(),Object(a["e"])(u,{key:0,class:"home-page-categories"}))])}var g=s("5840"),d=s("ca05"),u={name:"HomePage",components:{CategoryList:d["a"],CreateCategory:g["a"]},computed:{loading(){return this.$store.getters.getLoading},getCategoryList(){return this.$store.getters.getCategoryList},isAsideOpen(){return this.$store.getters.isAsideOpen}},async mounted(){this.getCategoryList.length||await this.$store.dispatch("getCategoryList")}},b=(s("878a"),s("6b0d")),p=s.n(b);const O=p()(u,[["render",i],["__scopeId","data-v-7f777cb5"]]);t["default"]=O}}]);
//# sourceMappingURL=chunk-4d3e6df2.9007ad68.js.map