(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7461b89d"],{"27cd":function(t,e,i){"use strict";i("3fee")},"2db8":function(t,e,i){"use strict";i.r(e);var s=i("7a23");const n={class:"app-page border-red"},a={key:0,class:"loading"},c={class:"title"},r={class:"link-list"},l=["href"],o=["onClick"];function d(t,e,i,d,g,b){const u=Object(s["z"])("create-link");return Object(s["s"])(),Object(s["f"])("div",n,[b.loading?(Object(s["s"])(),Object(s["f"])("p",a,"Загрузка...")):Object(s["e"])("",!0),Object(s["g"])("h1",c,Object(s["B"])(b.getCategory.name),1),Object(s["i"])(u),Object(s["g"])("ul",r,[(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["y"])(b.getLinkList,t=>(Object(s["s"])(),Object(s["f"])("li",{key:t.id,class:"link-item"},[Object(s["g"])("a",{target:"_blank",href:t.src,class:"link-name"}," - "+Object(s["B"])(t.title),9,l),Object(s["g"])("button",{class:"btn-delete",onClick:e=>b.deleteLink(t.id)}," × ",8,o)]))),128))])])}const g=t=>(Object(s["v"])("data-v-ba4ce704"),t=t(),Object(s["t"])(),t),b={class:"input-list"},u={class:"input-item"},k={class:"input-item"},p=g(()=>Object(s["g"])("li",{class:"input-item submit-item"},[Object(s["g"])("button",{type:"submit",value:"Save",class:"submit"},"Save")],-1));function h(t,e,i,n,a,c){return Object(s["s"])(),Object(s["f"])("form",{class:"form",onSubmit:e[2]||(e[2]=Object(s["H"])((...t)=>c.saveLink&&c.saveLink(...t),["prevent"]))},[Object(s["g"])("ul",b,[Object(s["g"])("li",u,[Object(s["G"])(Object(s["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.link.title=t),type:"text",placeholder:"link title..",required:""},null,512),[[s["D"],a.link.title]])]),Object(s["g"])("li",k,[Object(s["G"])(Object(s["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.link.src=t),type:"text",placeholder:"link src..",required:""},null,512),[[s["D"],a.link.src]])]),p])],32)}var j={name:"CreateLink",data(){return{categoryId:this.$route.params.id,link:{title:"",src:""}}},computed:{loading(){return this.$store.getters.getLoading},getLinkList(){return this.$store.getters.getLinkList}},methods:{async saveLink(){await this.$store.dispatch("saveLink",this.link),await this.$store.dispatch("getLinkList",this.categoryId),this.link.title="",this.link.src=""}}},O=(i("27cd"),i("6b0d")),L=i.n(O);const m=L()(j,[["render",h],["__scopeId","data-v-ba4ce704"]]);var f=m,y={name:"LinksPage",components:{CreateLink:f},data(){return{categoryId:this.$route.params.id}},computed:{loading(){return this.$store.getters.getLoading},getCategory(){return this.$store.getters.getCategory},getLinkList(){return this.$store.getters.getLinkList}},methods:{async deleteLink(t){await this.$store.dispatch("deleteLink",t)}},async mounted(){this.$store.getters.getCategoryList.length||await this.$store.dispatch("getCategoryList"),await this.$store.dispatch("getCategory",this.categoryId)}};i("e5a6");const v=L()(y,[["render",d],["__scopeId","data-v-3bf825e5"]]);e["default"]=v},"3fee":function(t,e,i){},"7c25":function(t,e,i){},e5a6:function(t,e,i){"use strict";i("7c25")}}]);
//# sourceMappingURL=chunk-7461b89d.c4be68c6.js.map