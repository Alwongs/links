(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326acabd"],{"2db8":function(t,e,i){"use strict";i.r(e);var s=i("7a23");const n={class:"app-page"},r={class:"main"},c={key:0,class:"title"},l={class:"link-list"},a={key:0,class:"no-items"};function o(t,e,i,o,d,b){const h=Object(s["I"])("create-link"),u=Object(s["I"])("link-item");return Object(s["B"])(),Object(s["g"])("div",n,[Object(s["k"])(h),Object(s["h"])("main",r,[b.loading?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("h1",c,Object(s["K"])(b.getCategory.name||"not found category name"),1)),Object(s["h"])("ul",l,[b.getCategoryFilter.links?Object(s["f"])("",!0):(Object(s["B"])(),Object(s["g"])("li",a," Link list is empty.. ")),(Object(s["B"])(!0),Object(s["g"])(s["a"],null,Object(s["H"])(b.getCategoryFilter.links,(t,e)=>(Object(s["B"])(),Object(s["e"])(u,{key:t.id,link:t,number:e},null,8,["link","number"]))),128))])])])}const d=t=>(Object(s["E"])("data-v-3bd9fd0b"),t=t(),Object(s["C"])(),t),b={class:"create-link"},h={class:"modal-title"},u={class:"input-list"},O={class:"input-item"},g=["placeholder"],j={key:0,class:"error"},m={key:1,class:"error"},k={class:"input-item"},p=["placeholder"],$={key:0,class:"error"},v={key:1,class:"error"},w=d(()=>Object(s["h"])("li",{class:"input-item submit-item"},[Object(s["h"])("input",{type:"submit",value:"Save",class:"submit"})],-1));function y(t,e,i,n,r,c){const l=Object(s["I"])("form-trigger");return Object(s["B"])(),Object(s["g"])("div",b,[Object(s["k"])(l,{isFormOpen:r.isFormOpen,title:t.$t("add_link"),zIndex:1,onToggleForm:c.toggleForm},null,8,["isFormOpen","title","onToggleForm"]),Object(s["h"])("div",{class:Object(s["u"])([{active:r.isFormOpen},"modal"])},[Object(s["h"])("h2",h,Object(s["K"])(t.$t("new_link")),1),Object(s["h"])("form",{class:"form",onSubmit:e[2]||(e[2]=Object(s["Q"])((...t)=>c.saveLink&&c.saveLink(...t),["prevent"]))},[Object(s["h"])("ul",u,[Object(s["h"])("li",O,[Object(s["P"])(Object(s["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.link.title=t),type:"text",placeholder:t.$t("link_title"),class:Object(s["u"])({invalid:n.v$.link.title.$dirty&&n.v$.link.title.$error})},null,10,g),[[s["M"],r.link.title]])]),(Object(s["B"])(!0),Object(s["g"])(s["a"],null,Object(s["H"])(n.v$.link.title.$errors,e=>(Object(s["B"])(),Object(s["g"])("li",{key:e.$uid,class:"error-item"},["minLength"==e.$params.type?(Object(s["B"])(),Object(s["g"])("small",j,Object(s["K"])(t.$t("min_number_of_letters"))+" "+Object(s["K"])(e.$params.min),1)):"required"==e.$params.type?(Object(s["B"])(),Object(s["g"])("small",m,Object(s["K"])(t.$t("field_should_be_filled")),1)):Object(s["f"])("",!0)]))),128)),Object(s["h"])("li",k,[Object(s["P"])(Object(s["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.link.src=t),type:"text",placeholder:t.$t("link_src"),class:Object(s["u"])({invalid:n.v$.link.src.$dirty&&n.v$.link.src.$error})},null,10,p),[[s["M"],r.link.src]])]),(Object(s["B"])(!0),Object(s["g"])(s["a"],null,Object(s["H"])(n.v$.link.src.$errors,e=>(Object(s["B"])(),Object(s["g"])("li",{key:e.$uid,class:"error-item"},["url"==e.$params.type?(Object(s["B"])(),Object(s["g"])("small",$,Object(s["K"])(t.$t("wrong_url")),1)):(Object(s["B"])(),Object(s["g"])("small",v,Object(s["K"])(e.$message),1))]))),128)),w])],32)],2)])}var f=i("4d68"),L=i("25a0"),F=i("e3e1"),_={name:"CreateLink",components:{FormTrigger:f["a"]},setup(){return{v$:Object(L["a"])()}},data(){return{isFormOpen:!1,categoryId:this.$route.params.id,link:{title:"",src:""}}},validations(){return{link:{title:{required:F["c"],minLength:Object(F["b"])(3)},src:{url:F["d"]}}}},computed:{loading(){return this.$store.getters.getLoading}},methods:{toggleForm(){this.link={},this.v$.link.$reset(),this.isFormOpen=!this.isFormOpen},async saveLink(){if(this.v$.link.title.$invalid)this.v$.link.title.$touch();else{if(this.v$.link.src.$invalid)return this.v$.link.src.$touch(),void console.log(this.v$.link.src);await this.$store.dispatch("saveLink",this.link),this.link={},this.isFormOpen=!1}}}},C=(i("303a"),i("6b0d")),B=i.n(C);const I=B()(_,[["render",y],["__scopeId","data-v-3bd9fd0b"]]);var K=I;const x={class:"link-item"},W={class:"link-name"},T=["href"];function z(t,e,i,n,r,c){return Object(s["B"])(),Object(s["g"])("li",x,[Object(s["h"])("div",W,[Object(s["h"])("a",{target:"_blank",href:i.link.src,class:"link"},Object(s["K"])(c.limitText(i.link.title)),9,T)]),Object(s["h"])("div",{class:"flex-divider",onClick:e[0]||(e[0]=(...e)=>t.getWidth&&t.getWidth(...e))}),Object(s["h"])("button",{id:"button",class:"btn-delete",onClick:e[1]||(e[1]=t=>c.deleteLink(i.link))})])}var H={name:"LinkItem",props:["link","number"],data(){return{width:window.innerWidth}},computed:{loading(){return this.$store.getters.getLoading}},watch:{width(){}},methods:{updateWidth(){this.width=window.innerWidth},capitalizeFirstLetter(t){return t[0].toUpperCase()+t.substring(1)},limitText(t){let e=this.capitalizeFirstLetter(t);return this.width>=2550?e.substring(0,this.width/20)+"...":this.width<2550&&this.width>=1980?e.substring(0,this.width/22)+"...":this.width<1980&&this.width>=1440||this.width<1440&&this.width>=1024||this.width<1023&&this.width>=768?e.substring(0,this.width/30)+"...":this.width<768?e.substring(0,this.width/17)+"...":void 0},async deleteLink(t){confirm(`Delete "${t.title}"`)&&await this.$store.dispatch("deleteLink",t.id)}},created(){window.addEventListener("resize",this.updateWidth)}};i("44ec");const P=B()(H,[["render",z],["__scopeId","data-v-51ac0f3b"]]);var U=P,q={name:"LinksPage",components:{CreateLink:K,LinkItem:U},data(){return{categoryId:this.$route.params.id}},computed:{loading(){return this.$store.getters.getLoading},getCategory(){return this.$store.getters.getCategory},getCategoryFilter(){return this.$store.getters.getCategoryFilter}},async mounted(){this.$store.getters.getCategoryList.length||await this.$store.dispatch("getCategoryList"),await this.$store.dispatch("getCategory",this.categoryId)}};i("d3c7");const E=B()(q,[["render",o],["__scopeId","data-v-4776ecd6"]]);e["default"]=E},"303a":function(t,e,i){"use strict";i("e208")},"44ec":function(t,e,i){"use strict";i("7a67")},"7a67":function(t,e,i){},b323:function(t,e,i){},d3c7:function(t,e,i){"use strict";i("b323")},e208:function(t,e,i){}}]);
//# sourceMappingURL=chunk-326acabd.8adae9e5.js.map