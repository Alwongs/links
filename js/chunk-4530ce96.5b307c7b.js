(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4530ce96"],{"58bc":function(e,t,s){},"61e9":function(e,t,s){"use strict";s.r(t);var r=s("7a23");const a={class:"app-page"},c={class:"title"},i={key:0,class:"error-block"},l={class:"input-list"},o={class:"form-item"},b=["placeholder"],n={class:"form-item"},d=["placeholder"],u={class:"btn-block"},j={key:0,type:"submit",class:"btn btn-submit"};function O(e,t,s,O,p,h){const $=Object(r["I"])("router-link");return Object(r["B"])(),Object(r["g"])("div",a,[Object(r["h"])("h1",c,Object(r["K"])(e.$t("register")),1),h.error?(Object(r["B"])(),Object(r["g"])("div",i,Object(r["K"])(h.error),1)):Object(r["f"])("",!0),Object(r["h"])("form",{class:"form",onSubmit:t[2]||(t[2]=Object(r["Q"])((...e)=>h.register&&h.register(...e),["prevent"]))},[Object(r["h"])("ul",l,[Object(r["h"])("li",o,[Object(r["P"])(Object(r["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.email=e),type:"text",placeholder:e.$t("email"),class:Object(r["u"])({invalid:O.v$.email.$dirty&&O.v$.email.$error})},null,10,b),[[r["M"],p.email,void 0,{trim:!0}]]),(Object(r["B"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(O.v$.email.$errors,e=>(Object(r["B"])(),Object(r["g"])("small",{key:e.$uid,class:"error"},Object(r["K"])(e.$message),1))),128))]),Object(r["h"])("li",n,[Object(r["P"])(Object(r["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>p.password=e),type:"text",placeholder:e.$t("password"),class:Object(r["u"])({invalid:O.v$.password.$dirty&&O.v$.password.$error})},null,10,d),[[r["M"],p.password,void 0,{trim:!0}]]),(Object(r["B"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(O.v$.password.$errors,e=>(Object(r["B"])(),Object(r["g"])("small",{key:e.$uid,class:"error"},Object(r["K"])(e.$message)+". Now: "+Object(r["K"])(p.password.length),1))),128))])]),Object(r["h"])("div",u,[Object(r["k"])($,{to:{name:"login"},class:"link"},{default:Object(r["O"])(()=>[Object(r["j"])(Object(r["K"])(e.$t("already_have_account")),1)]),_:1}),h.loading?Object(r["f"])("",!0):(Object(r["B"])(),Object(r["g"])("button",j,Object(r["K"])(e.$t("save")),1))])],32)])}var p=s("25a0"),h=s("e3e1"),$={setup(){return{v$:Object(p["a"])()}},data(){return{email:null,password:null}},validations(){return{email:{email:h["a"],required:h["c"]},password:{required:h["c"],minLength:Object(h["b"])(8)}}},computed:{error(){return this.$store.getters.getError},loading(){return this.$store.getters.getLoading},isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated(e){!0===e&&this.$router.push("/")}},methods:{register(){this.v$.email.$invalid?this.v$.email.$touch():this.v$.password.$invalid?this.v$.password.$touch():this.$store.dispatch("register",{email:this.email,password:this.password})}}},m=(s("fbd1"),s("6b0d")),v=s.n(m);const g=v()($,[["render",O],["__scopeId","data-v-3a09a572"]]);t["default"]=g},fbd1:function(e,t,s){"use strict";s("58bc")}}]);
//# sourceMappingURL=chunk-4530ce96.5b307c7b.js.map