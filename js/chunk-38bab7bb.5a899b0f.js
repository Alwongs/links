(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38bab7bb"],{"48ca":function(e,t,s){"use strict";s.r(t);var r=s("7a23");const c=e=>(Object(r["A"])("data-v-7cfd9d0d"),e=e(),Object(r["y"])(),e),i={class:"app-page"},a=c(()=>Object(r["h"])("h1",{class:"title"},"Login",-1)),o={key:0,class:"error-block"},l={class:"input-list"},n={class:"form-item"},d={class:"form-item"},b={class:"btn-block"},u={key:0,type:"submit",class:"btn btn-submit"};function p(e,t,s,c,p,h){return Object(r["x"])(),Object(r["g"])("div",i,[a,h.error?(Object(r["x"])(),Object(r["g"])("div",o,Object(r["G"])(h.error),1)):Object(r["f"])("",!0),Object(r["h"])("form",{class:"form",onSubmit:t[2]||(t[2]=Object(r["M"])((...e)=>h.login&&h.login(...e),["prevent"]))},[Object(r["h"])("ul",l,[Object(r["h"])("li",n,[Object(r["L"])(Object(r["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.email=e),type:"text",placeholder:"email",required:""},null,512),[[r["I"],p.email]])]),Object(r["h"])("li",d,[Object(r["L"])(Object(r["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>p.password=e),type:"text",placeholder:"password",required:""},null,512),[[r["I"],p.password]])])]),Object(r["h"])("div",b,[h.processing?Object(r["f"])("",!0):(Object(r["x"])(),Object(r["g"])("button",u," Войти "))])],32)])}var h={data(){return{email:"",password:""}},computed:{error(){return this.$store.getters.getError},processing(){return this.$store.getters.getProcessing},isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated(e){!0===e&&this.$router.push("/")}},methods:{login(){this.email&&this.password?this.$store.dispatch("login",{email:this.email,password:this.password}):alert("fill all fields please...")}}},j=(s("d391"),s("6b0d")),O=s.n(j);const m=O()(h,[["render",p],["__scopeId","data-v-7cfd9d0d"]]);t["default"]=m},ba95:function(e,t,s){},d391:function(e,t,s){"use strict";s("ba95")}}]);
//# sourceMappingURL=chunk-38bab7bb.5a899b0f.js.map