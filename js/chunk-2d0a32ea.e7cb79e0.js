(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a32ea"],{"00a5":function(t,e,a){"use strict";a.r(e);var s=a("7a23");const n={class:"app-page"},r=Object(s["h"])("h1",null,"Profile",-1),o=[r];function i(t,e,a,r,i,g){return Object(s["x"])(),Object(s["g"])("div",n,o)}var g={name:"ProfilePage",computed:{loading(){return this.$store.getters.getLoading},getCategoryList(){return this.$store.getters.getCategoryList}},async mounted(){this.getCategoryList.length||await this.$store.dispatch("getCategoryList")}},c=a("6b0d"),d=a.n(c);const u=d()(g,[["render",i]]);e["default"]=u}}]);
//# sourceMappingURL=chunk-2d0a32ea.e7cb79e0.js.map