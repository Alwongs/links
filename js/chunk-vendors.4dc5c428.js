(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return $})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return _})),n.d(t,"m",(function(){return B})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return U})),n.d(t,"p",(function(){return Y})),n.d(t,"q",(function(){return H})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return A})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return M})),n.d(t,"w",(function(){return O})),n.d(t,"x",(function(){return E})),n.d(t,"y",(function(){return b})),n.d(t,"z",(function(){return w})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return S})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return W})),n.d(t,"F",(function(){return V})),n.d(t,"G",(function(){return D})),n.d(t,"H",(function(){return X})),n.d(t,"I",(function(){return J})),n.d(t,"J",(function(){return P})),n.d(t,"K",(function(){return C}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function O(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function E(){return"object"===typeof indexedDB}function C(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?j(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function j(e,t){return e.replace(N,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=S(h(s[0])||""),n=S(h(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},L=function(e){const t=R(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=R(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(q(n)&&q(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function V(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function H(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):u<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const e=(s<<5|s>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function B(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",s="9.9.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,s,"app")},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("abc5");const i="devtools-plugin:setup",s="plugin:settings:set";var o=n("5134");class a{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(a){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(a){}i=e},now(){return Object(o["a"])()}},t&&t.on(s,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function c(e,t){const n=e,s=Object(r["b"])(),o=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!o||!s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new a(n,o):null,r=s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit(i,e,t)}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"47e2":function(e,t,n){"use strict";n.d(t,"a",(function(){return Qt})),n.d(t,"b",(function(){return Zt}));var r=n("f83d");
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const i={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};i.EXPECTED_TOKEN,i.INVALID_TOKEN_IN_PLACEHOLDER,i.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i.UNKNOWN_ESCAPE_SEQUENCE,i.INVALID_UNICODE_ESCAPE_SEQUENCE,i.UNBALANCED_CLOSING_BRACE,i.UNTERMINATED_CLOSING_BRACE,i.EMPTY_PLACEHOLDER,i.NOT_ALLOW_NEST_PLACEHOLDER,i.INVALID_LINKED_FORMAT,i.MUST_HAVE_MESSAGES_IN_PLURAL,i.UNEXPECTED_EMPTY_LINKED_MODIFIER,i.UNEXPECTED_EMPTY_LINKED_KEY,i.UNEXPECTED_LEXICAL_ANALYSIS;function s(e,t,n={}){const{domain:r,messages:i,args:s}=n,o=e,a=new SyntaxError(String(o));return a.code=e,t&&(a.location=t),a.domain=r,a}function o(e){throw e}function a(e,t,n){return{line:e,column:t,offset:n}}function c(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const l=" ",u="\r",h="\n",d=String.fromCharCode(8232),f=String.fromCharCode(8233);function p(e){const t=e;let n=0,r=1,i=1,s=0;const o=e=>t[e]===u&&t[e+1]===h,a=e=>t[e]===h,c=e=>t[e]===f,l=e=>t[e]===d,p=e=>o(e)||a(e)||c(e)||l(e),m=()=>n,_=()=>r,g=()=>i,b=()=>s,v=e=>o(e)||c(e)||l(e)?h:t[e],y=()=>v(n),O=()=>v(n+s);function w(){return s=0,p(n)&&(r++,i=0),o(n)&&n++,n++,i++,t[n]}function E(){return o(n+s)&&s++,s++,t[n+s]}function C(){n=0,r=1,i=1,s=0}function I(e=0){s=e}function T(){const e=n+s;while(e!==n)w();s=0}return{index:m,line:_,column:g,peekOffset:b,charAt:v,currentChar:y,currentPeek:O,next:w,peek:E,reset:C,resetPeek:I,skipToPeek:T}}const m=void 0,_="'",g="tokenizer";function b(e,t={}){const n=!1!==t.location,r=p(e),o=()=>r.index(),u=()=>a(r.line(),r.column(),r.index()),d=u(),f=o(),b={currentType:14,offset:f,startLoc:d,endLoc:d,lastType:14,lastOffset:f,lastStartLoc:d,lastEndLoc:d,braceNest:0,inLinked:!1,text:""},v=()=>b,{onError:y}=t;function O(e,t,n,...r){const i=v();if(t.column+=n,t.offset+=n,y){const n=c(i.startLoc,t),o=s(e,n,{domain:g,args:r});y(o)}}function w(e,t,r){e.endLoc=u(),e.currentType=t;const i={type:t};return n&&(i.loc=c(e.startLoc,e.endLoc)),null!=r&&(i.value=r),i}const E=e=>w(e,14);function C(e,t){return e.currentChar()===t?(e.next(),t):(O(i.EXPECTED_TOKEN,u(),0,t),"")}function I(e){let t="";while(e.currentPeek()===l||e.currentPeek()===h)t+=e.currentPeek(),e.peek();return t}function T(e){const t=I(e);return e.skipToPeek(),t}function k(e){if(e===m)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function j(e){if(e===m)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function N(e,t){const{currentType:n}=t;if(2!==n)return!1;I(e);const r=k(e.currentPeek());return e.resetPeek(),r}function S(e,t){const{currentType:n}=t;if(2!==n)return!1;I(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),i=j(r);return e.resetPeek(),i}function P(e,t){const{currentType:n}=t;if(2!==n)return!1;I(e);const r=e.currentPeek()===_;return e.resetPeek(),r}function R(e,t){const{currentType:n}=t;if(8!==n)return!1;I(e);const r="."===e.currentPeek();return e.resetPeek(),r}function L(e,t){const{currentType:n}=t;if(9!==n)return!1;I(e);const r=k(e.currentPeek());return e.resetPeek(),r}function A(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;I(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function x(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?k(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===l||!t)&&(t===h?(e.peek(),r()):k(t))},i=r();return e.resetPeek(),i}function D(e){I(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function M(e){const t=I(e),n="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}function F(e,t=!0){const n=(t=!1,r="",i=!1)=>{const s=e.currentPeek();return"{"===s?"%"!==r&&t:"@"!==s&&s?"%"===s?(e.peek(),n(t,"%",!0)):"|"===s?!("%"!==r&&!i)||!(r===l||r===h):s===l?(e.peek(),n(!0,l,i)):s!==h||(e.peek(),n(!0,h,i)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function U(e,t){const n=e.currentChar();return n===m?m:t(n)?(e.next(),n):null}function q(e){const t=e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t};return U(e,t)}function W(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57};return U(e,t)}function V(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102};return U(e,t)}function H(e){let t="",n="";while(t=W(e))n+=t;return n}function $(e){T(e);const t=e.currentChar();return"%"!==t&&O(i.EXPECTED_TOKEN,u(),0,t),e.next(),"%"}function B(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!F(e))break;t+=n,e.next()}else if(n===l||n===h)if(F(e))t+=n,e.next();else{if(D(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function z(e){T(e);let t="",n="";while(t=q(e))n+=t;return e.currentChar()===m&&O(i.UNTERMINATED_CLOSING_BRACE,u(),0),n}function G(e){T(e);let t="";return"-"===e.currentChar()?(e.next(),t+="-"+H(e)):t+=H(e),e.currentChar()===m&&O(i.UNTERMINATED_CLOSING_BRACE,u(),0),t}function K(e){T(e),C(e,"'");let t="",n="";const r=e=>e!==_&&e!==h;while(t=U(e,r))n+="\\"===t?Y(e):t;const s=e.currentChar();return s===h||s===m?(O(i.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,u(),0),s===h&&(e.next(),C(e,"'")),n):(C(e,"'"),n)}function Y(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),"\\"+t;case"u":return J(e,t,4);case"U":return J(e,t,6);default:return O(i.UNKNOWN_ESCAPE_SEQUENCE,u(),0,t),""}}function J(e,t,n){C(e,t);let r="";for(let s=0;s<n;s++){const n=V(e);if(!n){O(i.INVALID_UNICODE_ESCAPE_SEQUENCE,u(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function X(e){T(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&e!==l&&e!==h;while(t=U(e,r))n+=t;return n}function Q(e){let t="",n="";while(t=q(e))n+=t;return n}function Z(e){const t=(n=!1,r)=>{const i=e.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&i?i===l?r:i===h?(r+=i,e.next(),t(n,r)):(r+=i,e.next(),t(!0,r)):r};return t(!1,"")}function ee(e){T(e);const t=C(e,"|");return T(e),t}function te(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&O(i.NOT_ALLOW_NEST_PLACEHOLDER,u(),0),e.next(),n=w(t,2,"{"),T(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&O(i.EMPTY_PLACEHOLDER,u(),0),e.next(),n=w(t,3,"}"),t.braceNest--,t.braceNest>0&&T(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&O(i.UNTERMINATED_CLOSING_BRACE,u(),0),n=ne(e,t)||E(t),t.braceNest=0,n;default:let r=!0,s=!0,o=!0;if(D(e))return t.braceNest>0&&O(i.UNTERMINATED_CLOSING_BRACE,u(),0),n=w(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return O(i.UNTERMINATED_CLOSING_BRACE,u(),0),t.braceNest=0,re(e,t);if(r=N(e,t))return n=w(t,5,z(e)),T(e),n;if(s=S(e,t))return n=w(t,6,G(e)),T(e),n;if(o=P(e,t))return n=w(t,7,K(e)),T(e),n;if(!r&&!s&&!o)return n=w(t,13,X(e)),O(i.INVALID_TOKEN_IN_PLACEHOLDER,u(),0,n.value),T(e),n;break}return n}function ne(e,t){const{currentType:n}=t;let r=null;const s=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||s!==h&&s!==l||O(i.INVALID_LINKED_FORMAT,u(),0),s){case"@":return e.next(),r=w(t,8,"@"),t.inLinked=!0,r;case".":return T(e),e.next(),w(t,9,".");case":":return T(e),e.next(),w(t,10,":");default:return D(e)?(r=w(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,r):R(e,t)||A(e,t)?(T(e),ne(e,t)):L(e,t)?(T(e),w(t,12,Q(e))):x(e,t)?(T(e),"{"===s?te(e,t)||r:w(t,11,Z(e))):(8===n&&O(i.INVALID_LINKED_FORMAT,u(),0),t.braceNest=0,t.inLinked=!1,re(e,t))}}function re(e,t){let n={type:14};if(t.braceNest>0)return te(e,t)||E(t);if(t.inLinked)return ne(e,t)||E(t);const r=e.currentChar();switch(r){case"{":return te(e,t)||E(t);case"}":return O(i.UNBALANCED_CLOSING_BRACE,u(),0),e.next(),w(t,3,"}");case"@":return ne(e,t)||E(t);default:if(D(e))return n=w(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:s}=M(e);if(r)return s?w(t,0,B(e)):w(t,4,$(e));if(F(e))return w(t,0,B(e));break}return n}function ie(){const{currentType:e,offset:t,startLoc:n,endLoc:i}=b;return b.lastType=e,b.lastOffset=t,b.lastStartLoc=n,b.lastEndLoc=i,b.offset=o(),b.startLoc=u(),r.currentChar()===m?w(b,14):re(r,b)}return{nextToken:ie,currentOffset:o,currentPosition:u,context:v}}const v="parser",y=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function O(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function w(e={}){const t=!1!==e.location,{onError:n}=e;function o(e,t,r,i,...o){const a=e.currentPosition();if(a.offset+=i,a.column+=i,n){const e=c(r,a),i=s(t,e,{domain:v,args:o});n(i)}}function a(e,n,r){const i={type:e,start:n,end:n};return t&&(i.loc={start:r,end:r}),i}function l(e,n,r,i){e.end=n,i&&(e.type=i),t&&e.loc&&(e.loc.end=r)}function u(e,t){const n=e.context(),r=a(3,n.offset,n.startLoc);return r.value=t,l(r,e.currentOffset(),e.currentPosition()),r}function h(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(5,r,i);return s.index=parseInt(t,10),e.nextToken(),l(s,e.currentOffset(),e.currentPosition()),s}function d(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(4,r,i);return s.key=t,e.nextToken(),l(s,e.currentOffset(),e.currentPosition()),s}function f(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(9,r,i);return s.value=t.replace(y,O),e.nextToken(),l(s,e.currentOffset(),e.currentPosition()),s}function p(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=a(8,r,s);return 12!==t.type?(o(e,i.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),c.value="",l(c,r,s),{nextConsumeToken:t,node:c}):(null==t.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,E(t)),c.value=t.value||"",l(c,e.currentOffset(),e.currentPosition()),{node:c})}function m(e,t){const n=e.context(),r=a(7,n.offset,n.startLoc);return r.value=t,l(r,e.currentOffset(),e.currentPosition()),r}function _(e){const t=e.context(),n=a(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=p(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(r)),n.key=m(e,r.value||"");break;case 5:null==r.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(r)),n.key=d(e,r.value||"");break;case 6:null==r.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(r)),n.key=h(e,r.value||"");break;case 7:null==r.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(r)),n.key=f(e,r.value||"");break;default:o(e,i.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const s=e.context(),c=a(7,s.offset,s.startLoc);return c.value="",l(c,s.offset,s.startLoc),n.key=c,l(n,s.offset,s.startLoc),{nextConsumeToken:r,node:n}}return l(n,e.currentOffset(),e.currentPosition()),{node:n}}function g(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,r=1===t.currentType?t.endLoc:t.startLoc,s=a(2,n,r);s.items=[];let c=null;do{const n=c||e.nextToken();switch(c=null,n.type){case 0:null==n.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(n)),s.items.push(u(e,n.value||""));break;case 6:null==n.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(n)),s.items.push(h(e,n.value||""));break;case 5:null==n.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(n)),s.items.push(d(e,n.value||""));break;case 7:null==n.value&&o(e,i.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,E(n)),s.items.push(f(e,n.value||""));break;case 8:const r=_(e);s.items.push(r.node),c=r.nextConsumeToken||null;break}}while(14!==t.currentType&&1!==t.currentType);const p=1===t.currentType?t.lastOffset:e.currentOffset(),m=1===t.currentType?t.lastEndLoc:e.currentPosition();return l(s,p,m),s}function w(e,t,n,r){const s=e.context();let c=0===r.items.length;const u=a(1,t,n);u.cases=[],u.cases.push(r);do{const t=g(e);c||(c=0===t.items.length),u.cases.push(t)}while(14!==s.currentType);return c&&o(e,i.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),l(u,e.currentOffset(),e.currentPosition()),u}function C(e){const t=e.context(),{offset:n,startLoc:r}=t,i=g(e);return 14===t.currentType?i:w(e,n,r,i)}function I(n){const s=b(n,Object(r["a"])({},e)),c=s.context(),u=a(0,c.offset,c.startLoc);return t&&u.loc&&(u.loc.source=n),u.body=C(s),14!==c.currentType&&o(s,i.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,n[c.offset]||""),l(u,s.currentOffset(),s.currentPosition()),u}return{parse:I}}function E(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function C(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,i=e=>(n.helpers.add(e),e);return{context:r,helper:i}}function I(e,t){for(let n=0;n<e.length;n++)T(e[n],t)}function T(e,t){switch(e.type){case 1:I(e.cases,t),t.helper("plural");break;case 2:I(e.items,t);break;case 6:const n=e;T(n.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function k(e,t={}){const n=C(e);n.helper("normalize"),e.body&&T(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function j(e,t){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:s}=t,o={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0},a=()=>o;function c(e,t){o.code+=e}function l(e,t=!0){const n=t?i:"";c(s?n+"  ".repeat(e):n)}function u(e=!0){const t=++o.indentLevel;e&&l(t)}function h(e=!0){const t=--o.indentLevel;e&&l(t)}function d(){l(o.indentLevel)}const f=e=>"_"+e,p=()=>o.needIndent;return{context:a,push:c,indent:u,deindent:h,newline:d,helper:f,needIndent:p}}function N(e,t){const{helper:n}=e;e.push(n("linked")+"("),L(e,t.key),t.modifier?(e.push(", "),L(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function S(e,t){const{helper:n,needIndent:r}=e;e.push(n("normalize")+"(["),e.indent(r());const i=t.items.length;for(let s=0;s<i;s++){if(L(e,t.items[s]),s===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function P(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(n("plural")+"(["),e.indent(r());const i=t.cases.length;for(let n=0;n<i;n++){if(L(e,t.cases[n]),n===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function R(e,t){t.body?L(e,t.body):e.push("null")}function L(e,t){const{helper:n}=e;switch(t.type){case 0:R(e,t);break;case 1:P(e,t);break;case 2:S(e,t);break;case 6:N(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:0}}const A=(e,t={})=>{const n=Object(r["q"])(t.mode)?t.mode:"normal",i=Object(r["q"])(t.filename)?t.filename:"message.intl",s=!!t.sourceMap,o=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",a=t.needIndent?t.needIndent:"arrow"!==n,c=e.helpers||[],l=j(e,{mode:n,filename:i,sourceMap:s,breakLineCode:o,needIndent:a});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),c.length>0&&(l.push(`const { ${c.map(e=>`${e}: _${e}`).join(", ")} } = ctx`),l.newline()),l.push("return "),L(l,e),l.deindent(a),l.push("}");const{code:u,map:h}=l.context();return{ast:e,code:u,map:h?h.toJSON():void 0}};function x(e,t={}){const n=Object(r["a"])({},t),i=w(n),s=i.parse(e);return k(s,n),A(s,n)}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const D={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},M=[];
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */M[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},M[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},M[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},M[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},M[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},M[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},M[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const F=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function U(e){return F.test(e)}function q(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function W(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function V(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(U(t)?q(t):"*"+t)}function H(e){const t=[];let n,r,i,s,o,a,c,l=-1,u=0,h=0;const d=[];function f(){const t=e[l+1];if(5===u&&"'"===t||6===u&&'"'===t)return l++,i="\\"+t,d[0](),!0}d[0]=()=>{void 0===r?r=i:r+=i},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=V(r),!1===r)return!1;d[1]()}};while(null!==u)if(l++,n=e[l],"\\"!==n||!f()){if(s=W(n),c=M[u],o=c[s]||c["l"]||8,8===o)return;if(u=o[0],void 0!==o[1]&&(a=d[o[1]],a&&(i=n,!1===a())))return;if(7===u)return t}}const $=new Map;function B(e,t){return Object(r["n"])(e)?e[t]:null}function z(e,t){if(!Object(r["n"])(e))return null;let n=$.get(t);if(n||(n=H(t),n&&$.set(t,n)),!n)return null;const i=n.length;let s=e,o=0;while(o<i){const e=s[n[o]];if(void 0===e)return null;s=e,o++}return s}const G=e=>e,K=e=>"",Y="text",J=e=>0===e.length?"":e.join(""),X=r["s"];function Q(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Z(e){const t=Object(r["m"])(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Object(r["m"])(e.named.count)||Object(r["m"])(e.named.n))?Object(r["m"])(e.named.count)?e.named.count:Object(r["m"])(e.named.n)?e.named.n:t:t}function ee(e,t){t.count||(t.count=e),t.n||(t.n=e)}function te(e={}){const t=e.locale,n=Z(e),i=Object(r["n"])(e.pluralRules)&&Object(r["q"])(t)&&Object(r["l"])(e.pluralRules[t])?e.pluralRules[t]:Q,s=Object(r["n"])(e.pluralRules)&&Object(r["q"])(t)&&Object(r["l"])(e.pluralRules[t])?Q:void 0,o=e=>e[i(n,e.length,s)],a=e.list||[],c=e=>a[e],l=e.named||{};Object(r["m"])(e.pluralIndex)&&ee(n,l);const u=e=>l[e];function h(t){const n=Object(r["l"])(e.messages)?e.messages(t):!!Object(r["n"])(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):K)}const d=t=>e.modifiers?e.modifiers[t]:G,f=Object(r["o"])(e.processor)&&Object(r["l"])(e.processor.normalize)?e.processor.normalize:J,p=Object(r["o"])(e.processor)&&Object(r["l"])(e.processor.interpolate)?e.processor.interpolate:X,m=Object(r["o"])(e.processor)&&Object(r["q"])(e.processor.type)?e.processor.type:Y,_=(e,...t)=>{const[n,i]=t;let s="text",o="";1===t.length?Object(r["n"])(n)?(o=n.modifier||o,s=n.type||s):Object(r["q"])(n)&&(o=n||o):2===t.length&&(Object(r["q"])(n)&&(o=n||o),Object(r["q"])(i)&&(s=i||s));let a=h(e)(g);return"vnode"===s&&Object(r["h"])(a)&&o&&(a=a[0]),o?d(o)(a,s):a},g={["list"]:c,["named"]:u,["plural"]:o,["linked"]:_,["message"]:h,["type"]:m,["interpolate"]:p,["normalize"]:f};return g}let ne=null;function re(e){ne=e}function ie(e,t,n){ne&&ne.emit(D.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const se=oe(D.FunctionTranslate);function oe(e){return t=>ne&&ne.emit(e,t)}const ae={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};ae.NOT_FOUND_KEY,ae.FALLBACK_TO_TRANSLATE,ae.CANNOT_FORMAT_NUMBER,ae.FALLBACK_TO_NUMBER_FORMAT,ae.CANNOT_FORMAT_DATE,ae.FALLBACK_TO_DATE_FORMAT;function ce(e,t,n){return[...new Set([n,...Object(r["h"])(t)?t:Object(r["n"])(t)?Object.keys(t):Object(r["q"])(t)?[t]:[n]])]}function le(e,t,n){const i=Object(r["q"])(n)?n:me,s=e;s.__localeChainCache||(s.__localeChainCache=new Map);let o=s.__localeChainCache.get(i);if(!o){o=[];let e=[n];while(Object(r["h"])(e))e=ue(o,e,t);const a=Object(r["h"])(t)||!Object(r["o"])(t)?t:t["default"]?t["default"]:null;e=Object(r["q"])(a)?[a]:a,Object(r["h"])(e)&&ue(o,e,!1),s.__localeChainCache.set(i,o)}return o}function ue(e,t,n){let i=!0;for(let s=0;s<t.length&&Object(r["i"])(i);s++){const o=t[s];Object(r["q"])(o)&&(i=he(e,t[s],n))}return i}function he(e,t,n){let r;const i=t.split("-");do{const t=i.join("-");r=de(e,t,n),i.splice(-1,1)}while(i.length&&!0===r);return r}function de(e,t,n){let i=!1;if(!e.includes(t)&&(i=!0,t)){i="!"!==t[t.length-1];const s=t.replace(/!/g,"");e.push(s),(Object(r["h"])(n)||Object(r["o"])(n))&&n[s]&&(i=n[s])}return i}const fe="9.2.2",pe=-1,me="en-US",_e="",ge=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function be(){return{upper:(e,t)=>"text"===t&&Object(r["q"])(e)?e.toUpperCase():"vnode"===t&&Object(r["n"])(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&Object(r["q"])(e)?e.toLowerCase():"vnode"===t&&Object(r["n"])(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&Object(r["q"])(e)?ge(e):"vnode"===t&&Object(r["n"])(e)&&"__v_isVNode"in e?ge(e.children):e}}let ve,ye,Oe;function we(e){ve=e}function Ee(e){ye=e}function Ce(e){Oe=e}let Ie=null;const Te=e=>{Ie=e},ke=()=>Ie;let je=null;const Ne=e=>{je=e},Se=()=>je;let Pe=0;function Re(e={}){const t=Object(r["q"])(e.version)?e.version:fe,n=Object(r["q"])(e.locale)?e.locale:me,i=Object(r["h"])(e.fallbackLocale)||Object(r["o"])(e.fallbackLocale)||Object(r["q"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,s=Object(r["o"])(e.messages)?e.messages:{[n]:{}},o=Object(r["o"])(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},a=Object(r["o"])(e.numberFormats)?e.numberFormats:{[n]:{}},c=Object(r["a"])({},e.modifiers||{},be()),l=e.pluralRules||{},u=Object(r["l"])(e.missing)?e.missing:null,h=!Object(r["i"])(e.missingWarn)&&!Object(r["p"])(e.missingWarn)||e.missingWarn,d=!Object(r["i"])(e.fallbackWarn)&&!Object(r["p"])(e.fallbackWarn)||e.fallbackWarn,f=!!e.fallbackFormat,p=!!e.unresolving,m=Object(r["l"])(e.postTranslation)?e.postTranslation:null,_=Object(r["o"])(e.processor)?e.processor:null,g=!Object(r["i"])(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter,v=Object(r["l"])(e.messageCompiler)?e.messageCompiler:ve,y=Object(r["l"])(e.messageResolver)?e.messageResolver:ye||B,O=Object(r["l"])(e.localeFallbacker)?e.localeFallbacker:Oe||ce,w=Object(r["n"])(e.fallbackContext)?e.fallbackContext:void 0,E=Object(r["l"])(e.onWarn)?e.onWarn:r["t"],C=e,I=Object(r["n"])(C.__datetimeFormatters)?C.__datetimeFormatters:new Map,T=Object(r["n"])(C.__numberFormatters)?C.__numberFormatters:new Map,k=Object(r["n"])(C.__meta)?C.__meta:{};Pe++;const j={version:t,cid:Pe,locale:n,fallbackLocale:i,messages:s,modifiers:c,pluralRules:l,missing:u,missingWarn:h,fallbackWarn:d,fallbackFormat:f,unresolving:p,postTranslation:m,processor:_,warnHtmlMessage:g,escapeParameter:b,messageCompiler:v,messageResolver:y,localeFallbacker:O,fallbackContext:w,onWarn:E,__meta:k};return j.datetimeFormats=o,j.numberFormats=a,j.__datetimeFormatters=I,j.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&ie(j,t,k),j}function Le(e,t,n,i,s){const{missing:o,onWarn:a}=e;if(null!==o){const i=o(e,n,t,s);return Object(r["q"])(i)?i:t}return t}function Ae(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const xe=e=>e;let De=Object.create(null);function Me(e,t={}){{const n=t.onCacheKey||xe,r=n(e),i=De[r];if(i)return i;let s=!1;const a=t.onError||o;t.onError=e=>{s=!0,a(e)};const{code:c}=x(e,t),l=new Function("return "+c)();return s?l:De[r]=l}}let Fe=i.__EXTEND_POINT__;const Ue=()=>++Fe,qe={INVALID_ARGUMENT:Fe,INVALID_DATE_ARGUMENT:Ue(),INVALID_ISO_DATE_ARGUMENT:Ue(),__EXTEND_POINT__:Ue()};function We(e){return s(e,null,void 0)}qe.INVALID_ARGUMENT,qe.INVALID_DATE_ARGUMENT,qe.INVALID_ISO_DATE_ARGUMENT;const Ve=()=>"",He=e=>Object(r["l"])(e);function $e(e,...t){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:o,fallbackLocale:a,messages:c}=e,[l,u]=Ye(...t),h=Object(r["i"])(u.missingWarn)?u.missingWarn:e.missingWarn,d=Object(r["i"])(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,f=Object(r["i"])(u.escapeParameter)?u.escapeParameter:e.escapeParameter,p=!!u.resolvedMessage,m=Object(r["q"])(u.default)||Object(r["i"])(u.default)?Object(r["i"])(u.default)?o?l:()=>l:u.default:n?o?l:()=>l:"",_=n||""!==m,g=Object(r["q"])(u.locale)?u.locale:e.locale;f&&Be(u);let[b,v,y]=p?[l,g,c[g]||{}]:ze(e,l,g,a,d,h),O=b,w=l;if(p||Object(r["q"])(O)||He(O)||_&&(O=m,w=O),!p&&(!Object(r["q"])(O)&&!He(O)||!Object(r["q"])(v)))return s?pe:l;let E=!1;const C=()=>{E=!0},I=He(O)?O:Ge(e,l,v,O,w,C);if(E)return O;const T=Xe(e,v,y,u),k=te(T),j=Ke(e,I,k),N=i?i(j,l):j;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:Object(r["q"])(l)?l:He(O)?O.key:"",locale:v||(He(O)?O.locale:""),format:Object(r["q"])(O)?O:He(O)?O.source:"",message:N};t.meta=Object(r["a"])({},e.__meta,ke()||{}),se(t)}return N}function Be(e){Object(r["h"])(e.list)?e.list=e.list.map(e=>Object(r["q"])(e)?Object(r["b"])(e):e):Object(r["n"])(e.named)&&Object.keys(e.named).forEach(t=>{Object(r["q"])(e.named[t])&&(e.named[t]=Object(r["b"])(e.named[t]))})}function ze(e,t,n,i,s,o){const{messages:a,onWarn:c,messageResolver:l,localeFallbacker:u}=e,h=u(e,i,n);let d,f={},p=null,m=n,_=null;const g="translate";for(let b=0;b<h.length;b++){d=_=h[b],f=a[d]||{};if(null===(p=l(f,t))&&(p=f[t]),Object(r["q"])(p)||Object(r["l"])(p))break;const n=Le(e,t,d,o,g);n!==t&&(p=n),m=_}return[p,d,f]}function Ge(e,t,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=e;if(He(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>r;return e.locale=n,e.key=t,e}const c=o(r,Je(e,n,i,r,a,s));return c.locale=n,c.key=t,c.source=r,c}function Ke(e,t,n){const r=t(n);return r}function Ye(...e){const[t,n,i]=e,s={};if(!Object(r["q"])(t)&&!Object(r["m"])(t)&&!He(t))throw We(qe.INVALID_ARGUMENT);const o=Object(r["m"])(t)?String(t):(He(t),t);return Object(r["m"])(n)?s.plural=n:Object(r["q"])(n)?s.default=n:Object(r["o"])(n)&&!Object(r["k"])(n)?s.named=n:Object(r["h"])(n)&&(s.list=n),Object(r["m"])(i)?s.plural=i:Object(r["q"])(i)?s.default=i:Object(r["o"])(i)&&Object(r["a"])(s,i),[o,s]}function Je(e,t,n,i,s,o){return{warnHtmlMessage:s,onError:e=>{throw o&&o(e),e},onCacheKey:e=>Object(r["d"])(t,n,e)}}function Xe(e,t,n,i){const{modifiers:s,pluralRules:o,messageResolver:a,fallbackLocale:c,fallbackWarn:l,missingWarn:u,fallbackContext:h}=e,d=i=>{let s=a(n,i);if(null==s&&h){const[,,e]=ze(h,i,t,c,l,u);s=a(e,i)}if(Object(r["q"])(s)){let n=!1;const r=()=>{n=!0},o=Ge(e,i,t,s,i,r);return n?Ve:o}return He(s)?s:Ve},f={locale:t,modifiers:s,pluralRules:o,messages:d};return e.processor&&(f.processor=e.processor),i.list&&(f.list=i.list),i.named&&(f.named=i.named),Object(r["m"])(i.plural)&&(f.pluralIndex=i.plural),f}const Qe="undefined"!==typeof Intl;Qe&&Intl.DateTimeFormat,Qe&&Intl.NumberFormat;function Ze(e,...t){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:o,localeFallbacker:a}=e,{__datetimeFormatters:c}=e;const[l,u,h,d]=tt(...t),f=Object(r["i"])(h.missingWarn)?h.missingWarn:e.missingWarn,p=(Object(r["i"])(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn,!!h.part),m=Object(r["q"])(h.locale)?h.locale:e.locale,_=a(e,s,m);if(!Object(r["q"])(l)||""===l)return new Intl.DateTimeFormat(m,d).format(u);let g,b={},v=null,y=m,O=null;const w="datetime format";for(let I=0;I<_.length;I++){if(g=O=_[I],b=n[g]||{},v=b[l],Object(r["o"])(v))break;Le(e,l,g,f,w),y=O}if(!Object(r["o"])(v)||!Object(r["q"])(g))return i?pe:l;let E=`${g}__${l}`;Object(r["k"])(d)||(E=`${E}__${JSON.stringify(d)}`);let C=c.get(E);return C||(C=new Intl.DateTimeFormat(g,Object(r["a"])({},v,d)),c.set(E,C)),p?C.formatToParts(u):C.format(u)}const et=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function tt(...e){const[t,n,i,s]=e,o={};let a,c={};if(Object(r["q"])(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw We(qe.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();a=new Date(n);try{a.toISOString()}catch(l){throw We(qe.INVALID_ISO_DATE_ARGUMENT)}}else if(Object(r["j"])(t)){if(isNaN(t.getTime()))throw We(qe.INVALID_DATE_ARGUMENT);a=t}else{if(!Object(r["m"])(t))throw We(qe.INVALID_ARGUMENT);a=t}return Object(r["q"])(n)?o.key=n:Object(r["o"])(n)&&Object.keys(n).forEach(e=>{et.includes(e)?c[e]=n[e]:o[e]=n[e]}),Object(r["q"])(i)?o.locale=i:Object(r["o"])(i)&&(c=i),Object(r["o"])(s)&&(c=s),[o.key||"",a,o,c]}function nt(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function rt(e,...t){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:o,localeFallbacker:a}=e,{__numberFormatters:c}=e;const[l,u,h,d]=st(...t),f=Object(r["i"])(h.missingWarn)?h.missingWarn:e.missingWarn,p=(Object(r["i"])(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn,!!h.part),m=Object(r["q"])(h.locale)?h.locale:e.locale,_=a(e,s,m);if(!Object(r["q"])(l)||""===l)return new Intl.NumberFormat(m,d).format(u);let g,b={},v=null,y=m,O=null;const w="number format";for(let I=0;I<_.length;I++){if(g=O=_[I],b=n[g]||{},v=b[l],Object(r["o"])(v))break;Le(e,l,g,f,w),y=O}if(!Object(r["o"])(v)||!Object(r["q"])(g))return i?pe:l;let E=`${g}__${l}`;Object(r["k"])(d)||(E=`${E}__${JSON.stringify(d)}`);let C=c.get(E);return C||(C=new Intl.NumberFormat(g,Object(r["a"])({},v,d)),c.set(E,C)),p?C.formatToParts(u):C.format(u)}const it=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function st(...e){const[t,n,i,s]=e,o={};let a={};if(!Object(r["m"])(t))throw We(qe.INVALID_ARGUMENT);const c=t;return Object(r["q"])(n)?o.key=n:Object(r["o"])(n)&&Object.keys(n).forEach(e=>{it.includes(e)?a[e]=n[e]:o[e]=n[e]}),Object(r["q"])(i)?o.locale=i:Object(r["o"])(i)&&(a=i),Object(r["o"])(s)&&(a=s),[o.key||"",c,o,a]}function ot(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1);var at=n("7a23");n("3f4e");
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ct="9.2.2";function lt(){let e=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(e=!0,Object(r["e"])().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(e=!0,Object(r["e"])().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1)}let ut=ae.__EXTEND_POINT__;const ht=()=>++ut,dt={FALLBACK_TO_ROOT:ut,NOT_SUPPORTED_PRESERVE:ht(),NOT_SUPPORTED_FORMATTER:ht(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:ht(),NOT_SUPPORTED_GET_CHOICE_INDEX:ht(),COMPONENT_NAME_LEGACY_COMPATIBLE:ht(),NOT_FOUND_PARENT_SCOPE:ht()};dt.FALLBACK_TO_ROOT,dt.NOT_SUPPORTED_PRESERVE,dt.NOT_SUPPORTED_FORMATTER,dt.NOT_SUPPORTED_PRESERVE_DIRECTIVE,dt.NOT_SUPPORTED_GET_CHOICE_INDEX,dt.COMPONENT_NAME_LEGACY_COMPATIBLE,dt.NOT_FOUND_PARENT_SCOPE;let ft=i.__EXTEND_POINT__;const pt=()=>++ft,mt={UNEXPECTED_RETURN_TYPE:ft,INVALID_ARGUMENT:pt(),MUST_BE_CALL_SETUP_TOP:pt(),NOT_INSLALLED:pt(),NOT_AVAILABLE_IN_LEGACY_MODE:pt(),REQUIRED_VALUE:pt(),INVALID_VALUE:pt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:pt(),NOT_INSLALLED_WITH_PROVIDE:pt(),UNEXPECTED_ERROR:pt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:pt(),BRIDGE_SUPPORT_VUE_2_ONLY:pt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:pt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:pt(),__EXTEND_POINT__:pt()};function _t(e,...t){return s(e,null,void 0)}mt.UNEXPECTED_RETURN_TYPE,mt.INVALID_ARGUMENT,mt.MUST_BE_CALL_SETUP_TOP,mt.NOT_INSLALLED,mt.UNEXPECTED_ERROR,mt.NOT_AVAILABLE_IN_LEGACY_MODE,mt.REQUIRED_VALUE,mt.INVALID_VALUE,mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,mt.NOT_INSLALLED_WITH_PROVIDE,mt.NOT_COMPATIBLE_LEGACY_VUE_I18N,mt.BRIDGE_SUPPORT_VUE_2_ONLY,mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const gt=Object(r["r"])("__transrateVNode"),bt=Object(r["r"])("__datetimeParts"),vt=Object(r["r"])("__numberParts"),yt=Object(r["r"])("__setPluralRules");Object(r["r"])("__intlifyMeta");const Ot=Object(r["r"])("__injectWithOption");function wt(e){if(!Object(r["n"])(e))return e;for(const t in e)if(Object(r["f"])(e,t))if(t.includes(".")){const n=t.split("."),i=n.length-1;let s=e;for(let e=0;e<i;e++)n[e]in s||(s[n[e]]={}),s=s[n[e]];s[n[i]]=e[t],delete e[t],Object(r["n"])(s[n[i]])&&wt(s[n[i]])}else Object(r["n"])(e[t])&&wt(e[t]);return e}function Et(e,t){const{messages:n,__i18n:i,messageResolver:s,flatJson:o}=t,a=Object(r["o"])(n)?n:Object(r["h"])(i)?{}:{[e]:{}};if(Object(r["h"])(i)&&i.forEach(e=>{if("locale"in e&&"resource"in e){const{locale:t,resource:n}=e;t?(a[t]=a[t]||{},It(n,a[t])):It(n,a)}else Object(r["q"])(e)&&It(JSON.parse(e),a)}),null==s&&o)for(const c in a)Object(r["f"])(a,c)&&wt(a[c]);return a}const Ct=e=>!Object(r["n"])(e)||Object(r["h"])(e);function It(e,t){if(Ct(e)||Ct(t))throw _t(mt.INVALID_VALUE);for(const n in e)Object(r["f"])(e,n)&&(Ct(e[n])||Ct(t[n])?t[n]=e[n]:It(e[n],t[n]))}function Tt(e){return e.type}function kt(e,t,n){let i=Object(r["n"])(t.messages)?t.messages:{};"__i18nGlobal"in n&&(i=Et(e.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);if(s.length&&s.forEach(t=>{e.mergeLocaleMessage(t,i[t])}),Object(r["n"])(t.datetimeFormats)){const n=Object.keys(t.datetimeFormats);n.length&&n.forEach(n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])})}if(Object(r["n"])(t.numberFormats)){const n=Object.keys(t.numberFormats);n.length&&n.forEach(n=>{e.mergeNumberFormat(n,t.numberFormats[n])})}}function jt(e){return Object(at["j"])(at["b"],null,e,0)}const Nt="__INTLIFY_META__";let St=0;function Pt(e){return(t,n,r,i)=>e(n,r,Object(at["m"])()||void 0,i)}const Rt=()=>{const e=Object(at["m"])();let t=null;return e&&(t=Tt(e)[Nt])?{[Nt]:t}:null};function Lt(e={},t){const{__root:n}=e,i=void 0===n;let s=!Object(r["i"])(e.inheritLocale)||e.inheritLocale;const o=Object(at["F"])(n&&s?n.locale.value:Object(r["q"])(e.locale)?e.locale:me),a=Object(at["F"])(n&&s?n.fallbackLocale.value:Object(r["q"])(e.fallbackLocale)||Object(r["h"])(e.fallbackLocale)||Object(r["o"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:o.value),c=Object(at["F"])(Et(o.value,e)),l=Object(at["F"])(Object(r["o"])(e.datetimeFormats)?e.datetimeFormats:{[o.value]:{}}),u=Object(at["F"])(Object(r["o"])(e.numberFormats)?e.numberFormats:{[o.value]:{}});let h=n?n.missingWarn:!Object(r["i"])(e.missingWarn)&&!Object(r["p"])(e.missingWarn)||e.missingWarn,d=n?n.fallbackWarn:!Object(r["i"])(e.fallbackWarn)&&!Object(r["p"])(e.fallbackWarn)||e.fallbackWarn,f=n?n.fallbackRoot:!Object(r["i"])(e.fallbackRoot)||e.fallbackRoot,p=!!e.fallbackFormat,m=Object(r["l"])(e.missing)?e.missing:null,_=Object(r["l"])(e.missing)?Pt(e.missing):null,g=Object(r["l"])(e.postTranslation)?e.postTranslation:null,b=n?n.warnHtmlMessage:!Object(r["i"])(e.warnHtmlMessage)||e.warnHtmlMessage,v=!!e.escapeParameter;const y=n?n.modifiers:Object(r["o"])(e.modifiers)?e.modifiers:{};let O,w=e.pluralRules||n&&n.pluralRules;const E=()=>{i&&Ne(null);const t={version:ct,locale:o.value,fallbackLocale:a.value,messages:c.value,modifiers:y,pluralRules:w,missing:null===_?void 0:_,missingWarn:h,fallbackWarn:d,fallbackFormat:p,unresolving:!0,postTranslation:null===g?void 0:g,warnHtmlMessage:b,escapeParameter:v,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=l.value,t.numberFormats=u.value,t.__datetimeFormatters=Object(r["o"])(O)?O.__datetimeFormatters:void 0,t.__numberFormatters=Object(r["o"])(O)?O.__numberFormatters:void 0;const n=Re(t);return i&&Ne(n),n};function C(){return[o.value,a.value,c.value,l.value,u.value]}O=E(),Ae(O,o.value,a.value);const I=Object(at["c"])({get:()=>o.value,set:e=>{o.value=e,O.locale=o.value}}),T=Object(at["c"])({get:()=>a.value,set:e=>{a.value=e,O.fallbackLocale=a.value,Ae(O,o.value,e)}}),k=Object(at["c"])(()=>c.value),j=Object(at["c"])(()=>l.value),N=Object(at["c"])(()=>u.value);function S(){return Object(r["l"])(g)?g:null}function P(e){g=e,O.postTranslation=e}function R(){return m}function L(e){null!==e&&(_=Pt(e)),m=e,O.missing=_}const A=(e,t,s,o,a,c)=>{let l;if(C(),__INTLIFY_PROD_DEVTOOLS__)try{Te(Rt()),i||(O.fallbackContext=n?Se():void 0),l=e(O)}finally{Te(null),i||(O.fallbackContext=void 0)}else l=e(O);if(Object(r["m"])(l)&&l===pe){const[e,r]=t();return n&&f?o(n):a(e)}if(c(l))return l;throw _t(mt.UNEXPECTED_RETURN_TYPE)};function x(...e){return A(t=>Reflect.apply($e,null,[t,...e]),()=>Ye(...e),"translate",t=>Reflect.apply(t.t,t,[...e]),e=>e,e=>Object(r["q"])(e))}function D(...e){const[t,n,i]=e;if(i&&!Object(r["n"])(i))throw _t(mt.INVALID_ARGUMENT);return x(t,n,Object(r["a"])({resolvedMessage:!0},i||{}))}function M(...e){return A(t=>Reflect.apply(Ze,null,[t,...e]),()=>tt(...e),"datetime format",t=>Reflect.apply(t.d,t,[...e]),()=>_e,e=>Object(r["q"])(e))}function F(...e){return A(t=>Reflect.apply(rt,null,[t,...e]),()=>st(...e),"number format",t=>Reflect.apply(t.n,t,[...e]),()=>_e,e=>Object(r["q"])(e))}function U(e){return e.map(e=>Object(r["q"])(e)||Object(r["m"])(e)||Object(r["i"])(e)?jt(String(e)):e)}const q=e=>e,W={normalize:U,interpolate:q,type:"vnode"};function V(...e){return A(t=>{let n;const r=t;try{r.processor=W,n=Reflect.apply($e,null,[r,...e])}finally{r.processor=null}return n},()=>Ye(...e),"translate",t=>t[gt](...e),e=>[jt(e)],e=>Object(r["h"])(e))}function H(...e){return A(t=>Reflect.apply(rt,null,[t,...e]),()=>st(...e),"number format",t=>t[vt](...e),()=>[],e=>Object(r["q"])(e)||Object(r["h"])(e))}function $(...e){return A(t=>Reflect.apply(Ze,null,[t,...e]),()=>tt(...e),"datetime format",t=>t[bt](...e),()=>[],e=>Object(r["q"])(e)||Object(r["h"])(e))}function B(e){w=e,O.pluralRules=w}function z(e,t){const n=Object(r["q"])(t)?t:o.value,i=Y(n);return null!==O.messageResolver(i,e)}function G(e){let t=null;const n=le(O,a.value,o.value);for(let r=0;r<n.length;r++){const i=c.value[n[r]]||{},s=O.messageResolver(i,e);if(null!=s){t=s;break}}return t}function K(e){const t=G(e);return null!=t?t:n&&n.tm(e)||{}}function Y(e){return c.value[e]||{}}function J(e,t){c.value[e]=t,O.messages=c.value}function X(e,t){c.value[e]=c.value[e]||{},It(t,c.value[e]),O.messages=c.value}function Q(e){return l.value[e]||{}}function Z(e,t){l.value[e]=t,O.datetimeFormats=l.value,nt(O,e,t)}function ee(e,t){l.value[e]=Object(r["a"])(l.value[e]||{},t),O.datetimeFormats=l.value,nt(O,e,t)}function te(e){return u.value[e]||{}}function ne(e,t){u.value[e]=t,O.numberFormats=u.value,ot(O,e,t)}function re(e,t){u.value[e]=Object(r["a"])(u.value[e]||{},t),O.numberFormats=u.value,ot(O,e,t)}St++,n&&r["g"]&&(Object(at["M"])(n.locale,e=>{s&&(o.value=e,O.locale=e,Ae(O,o.value,a.value))}),Object(at["M"])(n.fallbackLocale,e=>{s&&(a.value=e,O.fallbackLocale=e,Ae(O,o.value,a.value))}));const ie={id:St,locale:I,fallbackLocale:T,get inheritLocale(){return s},set inheritLocale(e){s=e,e&&n&&(o.value=n.locale.value,a.value=n.fallbackLocale.value,Ae(O,o.value,a.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:k,get modifiers(){return y},get pluralRules(){return w||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(e){h=e,O.missingWarn=h},get fallbackWarn(){return d},set fallbackWarn(e){d=e,O.fallbackWarn=d},get fallbackRoot(){return f},set fallbackRoot(e){f=e},get fallbackFormat(){return p},set fallbackFormat(e){p=e,O.fallbackFormat=p},get warnHtmlMessage(){return b},set warnHtmlMessage(e){b=e,O.warnHtmlMessage=e},get escapeParameter(){return v},set escapeParameter(e){v=e,O.escapeParameter=e},t:x,getLocaleMessage:Y,setLocaleMessage:J,mergeLocaleMessage:X,getPostTranslationHandler:S,setPostTranslationHandler:P,getMissingHandler:R,setMissingHandler:L,[yt]:B};return ie.datetimeFormats=j,ie.numberFormats=N,ie.rt=D,ie.te=z,ie.tm=K,ie.d=M,ie.n=F,ie.getDateTimeFormat=Q,ie.setDateTimeFormat=Z,ie.mergeDateTimeFormat=ee,ie.getNumberFormat=te,ie.setNumberFormat=ne,ie.mergeNumberFormat=re,ie[Ot]=e.__injectWithOption,ie[gt]=V,ie[bt]=$,ie[vt]=H,ie}function At(e){const t=Object(r["q"])(e.locale)?e.locale:me,n=Object(r["q"])(e.fallbackLocale)||Object(r["h"])(e.fallbackLocale)||Object(r["o"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,i=Object(r["l"])(e.missing)?e.missing:void 0,s=!Object(r["i"])(e.silentTranslationWarn)&&!Object(r["p"])(e.silentTranslationWarn)||!e.silentTranslationWarn,o=!Object(r["i"])(e.silentFallbackWarn)&&!Object(r["p"])(e.silentFallbackWarn)||!e.silentFallbackWarn,a=!Object(r["i"])(e.fallbackRoot)||e.fallbackRoot,c=!!e.formatFallbackMessages,l=Object(r["o"])(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,h=Object(r["l"])(e.postTranslation)?e.postTranslation:void 0,d=!Object(r["q"])(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,f=!!e.escapeParameterHtml,p=!Object(r["i"])(e.sync)||e.sync;let m=e.messages;if(Object(r["o"])(e.sharedMessages)){const t=e.sharedMessages,n=Object.keys(t);m=n.reduce((e,n)=>{const i=e[n]||(e[n]={});return Object(r["a"])(i,t[n]),e},m||{})}const{__i18n:_,__root:g,__injectWithOption:b}=e,v=e.datetimeFormats,y=e.numberFormats,O=e.flatJson;return{locale:t,fallbackLocale:n,messages:m,flatJson:O,datetimeFormats:v,numberFormats:y,missing:i,missingWarn:s,fallbackWarn:o,fallbackRoot:a,fallbackFormat:c,modifiers:l,pluralRules:u,postTranslation:h,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:p,__i18n:_,__root:g,__injectWithOption:b}}function xt(e={},t){{const t=Lt(At(e)),n={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return Object(r["i"])(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=Object(r["i"])(e)?!e:e},get silentFallbackWarn(){return Object(r["i"])(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=Object(r["i"])(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){const[n,i,s]=e,o={};let a=null,c=null;if(!Object(r["q"])(n))throw _t(mt.INVALID_ARGUMENT);const l=n;return Object(r["q"])(i)?o.locale=i:Object(r["h"])(i)?a=i:Object(r["o"])(i)&&(c=i),Object(r["h"])(s)?a=s:Object(r["o"])(s)&&(c=s),Reflect.apply(t.t,t,[l,a||c||{},o])},rt(...e){return Reflect.apply(t.rt,t,[...e])},tc(...e){const[n,i,s]=e,o={plural:1};let a=null,c=null;if(!Object(r["q"])(n))throw _t(mt.INVALID_ARGUMENT);const l=n;return Object(r["q"])(i)?o.locale=i:Object(r["m"])(i)?o.plural=i:Object(r["h"])(i)?a=i:Object(r["o"])(i)&&(c=i),Object(r["q"])(s)?o.locale=s:Object(r["h"])(s)?a=s:Object(r["o"])(s)&&(c=s),Reflect.apply(t.t,t,[l,a||c||{},o])},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return Reflect.apply(t.d,t,[...e])},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return Reflect.apply(t.n,t,[...e])},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)},getChoiceIndex(e,t){return-1},__onComponentInstanceCreated(t){const{componentInstanceCreatedListener:r}=e;r&&r(t,n)}};return n}}const Dt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function Mt({slots:e},t){if(1===t.length&&"default"===t[0]){const t=e.default?e.default():[];return t.reduce((e,t)=>[...e,...Object(r["h"])(t.children)?t.children:[t]],[])}return t.reduce((t,n)=>{const r=e[n];return r&&(t[n]=r()),t},{})}function Ft(e){return at["a"]}const Ut={name:"i18n-t",props:Object(r["a"])({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Object(r["m"])(e)||!isNaN(e)}},Dt),setup(e,t){const{slots:n,attrs:i}=t,s=e.i18n||Zt({useScope:e.scope,__useComponent:!0});return()=>{const o=Object.keys(n).filter(e=>"_"!==e),a={};e.locale&&(a.locale=e.locale),void 0!==e.plural&&(a.plural=Object(r["q"])(e.plural)?+e.plural:e.plural);const c=Mt(t,o),l=s[gt](e.keypath,c,a),u=Object(r["a"])({},i),h=Object(r["q"])(e.tag)||Object(r["n"])(e.tag)?e.tag:Ft();return Object(at["n"])(h,u,l)}}};function qt(e){return Object(r["h"])(e)&&!Object(r["q"])(e[0])}function Wt(e,t,n,i){const{slots:s,attrs:o}=t;return()=>{const t={part:!0};let a={};e.locale&&(t.locale=e.locale),Object(r["q"])(e.format)?t.key=e.format:Object(r["n"])(e.format)&&(Object(r["q"])(e.format.key)&&(t.key=e.format.key),a=Object.keys(e.format).reduce((t,i)=>n.includes(i)?Object(r["a"])({},t,{[i]:e.format[i]}):t,{}));const c=i(e.value,t,a);let l=[t.key];Object(r["h"])(c)?l=c.map((e,t)=>{const n=s[e.type],r=n?n({[e.type]:e.value,index:t,parts:c}):[e.value];return qt(r)&&(r[0].key=`${e.type}-${t}`),r}):Object(r["q"])(c)&&(l=[c]);const u=Object(r["a"])({},o),h=Object(r["q"])(e.tag)||Object(r["n"])(e.tag)?e.tag:Ft();return Object(at["n"])(h,u,l)}}const Vt={name:"i18n-n",props:Object(r["a"])({value:{type:Number,required:!0},format:{type:[String,Object]}},Dt),setup(e,t){const n=e.i18n||Zt({useScope:"parent",__useComponent:!0});return Wt(e,t,it,(...e)=>n[vt](...e))}},Ht={name:"i18n-d",props:Object(r["a"])({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Dt),setup(e,t){const n=e.i18n||Zt({useScope:"parent",__useComponent:!0});return Wt(e,t,et,(...e)=>n[bt](...e))}};function $t(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}function Bt(e){const t=t=>{const{instance:n,modifiers:r,value:i}=t;if(!n||!n.$)throw _t(mt.UNEXPECTED_ERROR);const s=$t(e,n.$);const o=zt(i);return[Reflect.apply(s.t,s,[...Gt(o)]),s]},n=(n,i)=>{const[s,o]=t(i);r["g"]&&e.global===o&&(n.__i18nWatcher=Object(at["M"])(o.locale,()=>{i.instance&&i.instance.$forceUpdate()})),n.__composer=o,n.textContent=s},i=e=>{r["g"]&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},s=(e,{value:t})=>{if(e.__composer){const n=e.__composer,r=zt(t);e.textContent=Reflect.apply(n.t,n,[...Gt(r)])}},o=e=>{const[n]=t(e);return{textContent:n}};return{created:n,unmounted:i,beforeUpdate:s,getSSRProps:o}}function zt(e){if(Object(r["q"])(e))return{path:e};if(Object(r["o"])(e)){if(!("path"in e))throw _t(mt.REQUIRED_VALUE,"path");return e}throw _t(mt.INVALID_VALUE)}function Gt(e){const{path:t,locale:n,args:i,choice:s,plural:o}=e,a={},c=i||{};return Object(r["q"])(n)&&(a.locale=n),Object(r["m"])(s)&&(a.plural=s),Object(r["m"])(o)&&(a.plural=o),[t,c,a]}function Kt(e,t,...n){const i=Object(r["o"])(n[0])?n[0]:{},s=!!i.useI18nComponentName,o=!Object(r["i"])(i.globalInstall)||i.globalInstall;o&&(e.component(s?"i18n":Ut.name,Ut),e.component(Vt.name,Vt),e.component(Ht.name,Ht)),e.directive("t",Bt(t))}function Yt(e,t,n){return{beforeCreate(){const r=Object(at["m"])();if(!r)throw _t(mt.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const n=i.i18n;i.__i18n&&(n.__i18n=i.__i18n),n.__root=t,this===this.$root?this.$i18n=Jt(e,n):(n.__injectWithOption=!0,this.$i18n=xt(n))}else i.__i18n?this===this.$root?this.$i18n=Jt(e,i):this.$i18n=xt({__i18n:i.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;i.__i18nGlobal&&kt(t,i,i),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){0},unmounted(){const e=Object(at["m"])();if(!e)throw _t(mt.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(e),delete this.$i18n}}}function Jt(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[yt](t.pluralizationRules||e.pluralizationRules);const n=Et(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(t=>e.mergeLocaleMessage(t,n[t])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n])),t.numberFormats&&Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n,t.numberFormats[n])),e}const Xt=Object(r["r"])("global-vue-i18n");function Qt(e={},t){const n=__VUE_I18N_LEGACY_API__&&Object(r["i"])(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,i=!Object(r["i"])(e.globalInjection)||e.globalInjection,s=!__VUE_I18N_LEGACY_API__||!n||!!e.allowComposition,o=new Map,[a,c]=en(e,n),l=Object(r["r"])("");function u(e){return o.get(e)||null}function h(e,t){o.set(e,t)}function d(e){o.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(t,...r){t.__VUE_I18N_SYMBOL__=l,t.provide(t.__VUE_I18N_SYMBOL__,e),!n&&i&&un(t,e.global),__VUE_I18N_FULL_INSTALL__&&Kt(t,e,...r),__VUE_I18N_LEGACY_API__&&n&&t.mixin(Yt(c,c.__composer,e));const s=t.unmount;t.unmount=()=>{e.dispose(),s()}},get global(){return c},dispose(){a.stop()},__instances:o,__getInstance:u,__setInstance:h,__deleteInstance:d};return e}}function Zt(e={}){const t=Object(at["m"])();if(null==t)throw _t(mt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&null!=t.appContext.app&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw _t(mt.NOT_INSLALLED);const n=tn(t),i=rn(n),s=Tt(t),o=nn(e,s);if(__VUE_I18N_LEGACY_API__&&"legacy"===n.mode&&!e.__useComponent){if(!n.allowComposition)throw _t(mt.NOT_AVAILABLE_IN_LEGACY_MODE);return an(t,o,i,e)}if("global"===o)return kt(i,e,s),i;if("parent"===o){let r=sn(n,t,e.__useComponent);return null==r&&(r=i),r}const a=n;let c=a.__getInstance(t);if(null==c){const n=Object(r["a"])({},e);"__i18n"in s&&(n.__i18n=s.__i18n),i&&(n.__root=i),c=Lt(n),on(a,t,c),a.__setInstance(t,c)}return c}function en(e,t,n){const r=Object(at["l"])();{const n=__VUE_I18N_LEGACY_API__&&t?r.run(()=>xt(e)):r.run(()=>Lt(e));if(null==n)throw _t(mt.UNEXPECTED_ERROR);return[r,n]}}function tn(e){{const t=Object(at["o"])(e.isCE?Xt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw _t(e.isCE?mt.NOT_INSLALLED_WITH_PROVIDE:mt.UNEXPECTED_ERROR);return t}}function nn(e,t){return Object(r["k"])(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function rn(e){return"composition"===e.mode?e.global:e.global.__composer}function sn(e,t,n=!1){let r=null;const i=t.root;let s=t.parent;while(null!=s){const t=e;if("composition"===e.mode)r=t.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const e=t.__getInstance(s);null!=e&&(r=e.__composer,n&&r&&!r[Ot]&&(r=null))}if(null!=r)break;if(i===s)break;s=s.parent}return r}function on(e,t,n){Object(at["y"])(()=>{0},t),Object(at["z"])(()=>{e.__deleteInstance(t)},t)}function an(e,t,n,i={}){const s="local"===t,o=Object(at["I"])(null);if(s&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw _t(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=!Object(r["i"])(i.inheritLocale)||i.inheritLocale,c=Object(at["F"])(s&&a?n.locale.value:Object(r["q"])(i.locale)?i.locale:me),l=Object(at["F"])(s&&a?n.fallbackLocale.value:Object(r["q"])(i.fallbackLocale)||Object(r["h"])(i.fallbackLocale)||Object(r["o"])(i.fallbackLocale)||!1===i.fallbackLocale?i.fallbackLocale:c.value),u=Object(at["F"])(Et(c.value,i)),h=Object(at["F"])(Object(r["o"])(i.datetimeFormats)?i.datetimeFormats:{[c.value]:{}}),d=Object(at["F"])(Object(r["o"])(i.numberFormats)?i.numberFormats:{[c.value]:{}}),f=s?n.missingWarn:!Object(r["i"])(i.missingWarn)&&!Object(r["p"])(i.missingWarn)||i.missingWarn,p=s?n.fallbackWarn:!Object(r["i"])(i.fallbackWarn)&&!Object(r["p"])(i.fallbackWarn)||i.fallbackWarn,m=s?n.fallbackRoot:!Object(r["i"])(i.fallbackRoot)||i.fallbackRoot,_=!!i.fallbackFormat,g=Object(r["l"])(i.missing)?i.missing:null,b=Object(r["l"])(i.postTranslation)?i.postTranslation:null,v=s?n.warnHtmlMessage:!Object(r["i"])(i.warnHtmlMessage)||i.warnHtmlMessage,y=!!i.escapeParameter,O=s?n.modifiers:Object(r["o"])(i.modifiers)?i.modifiers:{},w=i.pluralRules||s&&n.pluralRules;function E(){return[c.value,l.value,u.value,h.value,d.value]}const C=Object(at["c"])({get:()=>o.value?o.value.locale.value:c.value,set:e=>{o.value&&(o.value.locale.value=e),c.value=e}}),I=Object(at["c"])({get:()=>o.value?o.value.fallbackLocale.value:l.value,set:e=>{o.value&&(o.value.fallbackLocale.value=e),l.value=e}}),T=Object(at["c"])(()=>o.value?o.value.messages.value:u.value),k=Object(at["c"])(()=>h.value),j=Object(at["c"])(()=>d.value);function N(){return o.value?o.value.getPostTranslationHandler():b}function S(e){o.value&&o.value.setPostTranslationHandler(e)}function P(){return o.value?o.value.getMissingHandler():g}function R(e){o.value&&o.value.setMissingHandler(e)}function L(e){return E(),e()}function A(...e){return o.value?L(()=>Reflect.apply(o.value.t,null,[...e])):L(()=>"")}function x(...e){return o.value?Reflect.apply(o.value.rt,null,[...e]):""}function D(...e){return o.value?L(()=>Reflect.apply(o.value.d,null,[...e])):L(()=>"")}function M(...e){return o.value?L(()=>Reflect.apply(o.value.n,null,[...e])):L(()=>"")}function F(e){return o.value?o.value.tm(e):{}}function U(e,t){return!!o.value&&o.value.te(e,t)}function q(e){return o.value?o.value.getLocaleMessage(e):{}}function W(e,t){o.value&&(o.value.setLocaleMessage(e,t),u.value[e]=t)}function V(e,t){o.value&&o.value.mergeLocaleMessage(e,t)}function H(e){return o.value?o.value.getDateTimeFormat(e):{}}function $(e,t){o.value&&(o.value.setDateTimeFormat(e,t),h.value[e]=t)}function B(e,t){o.value&&o.value.mergeDateTimeFormat(e,t)}function z(e){return o.value?o.value.getNumberFormat(e):{}}function G(e,t){o.value&&(o.value.setNumberFormat(e,t),d.value[e]=t)}function K(e,t){o.value&&o.value.mergeNumberFormat(e,t)}const Y={get id(){return o.value?o.value.id:-1},locale:C,fallbackLocale:I,messages:T,datetimeFormats:k,numberFormats:j,get inheritLocale(){return o.value?o.value.inheritLocale:a},set inheritLocale(e){o.value&&(o.value.inheritLocale=e)},get availableLocales(){return o.value?o.value.availableLocales:Object.keys(u.value)},get modifiers(){return o.value?o.value.modifiers:O},get pluralRules(){return o.value?o.value.pluralRules:w},get isGlobal(){return!!o.value&&o.value.isGlobal},get missingWarn(){return o.value?o.value.missingWarn:f},set missingWarn(e){o.value&&(o.value.missingWarn=e)},get fallbackWarn(){return o.value?o.value.fallbackWarn:p},set fallbackWarn(e){o.value&&(o.value.missingWarn=e)},get fallbackRoot(){return o.value?o.value.fallbackRoot:m},set fallbackRoot(e){o.value&&(o.value.fallbackRoot=e)},get fallbackFormat(){return o.value?o.value.fallbackFormat:_},set fallbackFormat(e){o.value&&(o.value.fallbackFormat=e)},get warnHtmlMessage(){return o.value?o.value.warnHtmlMessage:v},set warnHtmlMessage(e){o.value&&(o.value.warnHtmlMessage=e)},get escapeParameter(){return o.value?o.value.escapeParameter:y},set escapeParameter(e){o.value&&(o.value.escapeParameter=e)},t:A,getPostTranslationHandler:N,setPostTranslationHandler:S,getMissingHandler:P,setMissingHandler:R,rt:x,d:D,n:M,tm:F,te:U,getLocaleMessage:q,setLocaleMessage:W,mergeLocaleMessage:V,getDateTimeFormat:H,setDateTimeFormat:$,mergeDateTimeFormat:B,getNumberFormat:z,setNumberFormat:G,mergeNumberFormat:K};function J(e){e.locale.value=c.value,e.fallbackLocale.value=l.value,Object.keys(u.value).forEach(t=>{e.mergeLocaleMessage(t,u.value[t])}),Object.keys(h.value).forEach(t=>{e.mergeDateTimeFormat(t,h.value[t])}),Object.keys(d.value).forEach(t=>{e.mergeNumberFormat(t,d.value[t])}),e.escapeParameter=y,e.fallbackFormat=_,e.fallbackRoot=m,e.fallbackWarn=p,e.missingWarn=f,e.warnHtmlMessage=v}return Object(at["v"])(()=>{if(null==e.proxy||null==e.proxy.$i18n)throw _t(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const n=o.value=e.proxy.$i18n.__composer;"global"===t?(c.value=n.locale.value,l.value=n.fallbackLocale.value,u.value=n.messages.value,h.value=n.datetimeFormats.value,d.value=n.numberFormats.value):s&&J(n)}),Y}const cn=["locale","fallbackLocale","availableLocales"],ln=["t","rt","d","n","tm"];function un(e,t){const n=Object.create(null);cn.forEach(e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw _t(mt.UNEXPECTED_ERROR);const i=Object(at["r"])(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,i)}),e.config.globalProperties.$i18n=n,ln.forEach(n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw _t(mt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,"$"+n,r)})}if(we(Me),Ee(z),Ce(le),lt(),__INTLIFY_PROD_DEVTOOLS__){const e=Object(r["e"])();e.__INTLIFY__=!0,re(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},5134:function(e,t,n){"use strict";(function(e){let r,i;function s(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function o(){return s()?i.now():Date.now()}n.d(t,"a",(function(){return o}))}).call(this,n("c8ba"))},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Fo})),n.d(t,"b",(function(){return Wo})),n.d(t,"c",(function(){return Jo})),n.d(t,"d",(function(){return Mo})),n.d(t,"e",(function(){return Uo})),n.d(t,"f",(function(){return qo}));var r=n("589b"),i=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.13.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["J"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["C"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["k"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),_=new o["b"]("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),b=function(e){const t=Object(s["I"])(e),n=new s["d"];n.update(t);const r=n.digest();return s["g"].encodeByteArray(r)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=v.apply(null,r):t+="object"===typeof r?Object(s["J"])(r):r,t+=" "}return t};let y=null,O=!0;const w=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=o["a"].VERBOSE,y=_.log.bind(_),t&&m.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,m.remove("logging_enabled"))},E=function(...e){if(!0===O&&(O=!1,null===y&&!0===m.get("logging_enabled")&&w(!0)),y){const t=v.apply(null,e);y(t)}},C=function(e){return function(...t){E(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);_.error(t)},T=function(...e){const t="FIREBASE FATAL ERROR: "+v(...e);throw _.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+v(...e);_.warn(t)},j=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},S=function(e){if(Object(s["z"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",L=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},x=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["J"])(t))},D=function(e){if("object"!==typeof e||null===e)return Object(s["J"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(s["J"])(t[r]),n+=":",n+=D(e[t[r]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(s["e"])(!N(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,l;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,B=2147483647,z=function(e){if(H.test(e)){const t=Number(e);if(t>=$&&t<=B)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["k"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["n"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function _e(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",ye="close",Oe="pLPCommand",we="pRTLPCB",Ee="id",Ce="pw",Ie="ser",Te="cb",ke="seg",je="ts",Ne="d",Se="dframe",Pe=1870,Re=30,Le=Pe-Re,Ae=25e3,xe=3e4;class De{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new be(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xe)),S(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ve]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return!Object(s["z"])()&&(!!De.forceAllow_||!De.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["J"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["i"])(t),r=M(n,Le);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["z"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Se]="t",n[Ee]=e,n[Ce]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["J"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["z"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[Oe+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Ce]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+r+"="+e.seg+"&"+je+r+"="+e.ts+"&"+Ne+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(s["z"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class We{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=_e(t),this.connURL=We.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[ee]=Z,!Object(s["z"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[ne]=re),t&&(o[te]=t),n&&(o[se]=n),r&&(o[ae]=r),i&&(o[oe]=i),de(e,ce,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if(Object(s["z"])()){const n=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/links/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new qe(this.connURL,[],t)}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!We.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["C"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["J"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He=6e4,$e=5e3,Be=10240,ze=102400,Ge="t",Ke="d",Ye="s",Je="r",Xe="e",Qe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Be?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=x("t",e),n=x("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=x("t",e),n=x("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=x(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Xe?I("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($e))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["y"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function bt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ot(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function wt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["H"])(this.parts_[n]);Tt(this)}}function Ct(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["H"])(t),Tt(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=Object(s["H"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new jt}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,St=3e5,Pt=3e4,Rt=1.3,Lt=3e4,At="server_kill",xt=3;class Dt extends it{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=St,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["z"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(s["J"])(i)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,i=>{const s=i["d"],o=i["s"];Dt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["k"])(e,"w")){const n=Object(s["G"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["B"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["J"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(s["J"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(At)},i))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["v"])(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>D(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["z"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["y"])()?e["framework.cordova"]=1:Object(s["A"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["v"])(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(P,e),r=new Mt(P,t);return 0!==this.compare(n,r)}minPost(){return Mt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class qt extends Ft{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return L(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(R,Ut)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,Ut)}toString(){return".key"}}const Wt=new qt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:Bt.EMPTY_NODE,this.right=null!=i?i:Bt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class $t{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,t=Bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return L(e.name,t.name)}function Gt(e,t){return L(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Yt(e){Kt=e}Bt.EMPTY_NODE=new $t;const Jt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["k"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Kt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=tn.VALUE_TYPE_ORDER.indexOf(t),i=tn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(r>=0,"Unknown leaf type: "+t),Object(s["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ft{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(R,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Mt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return s},o=new cn(e.length),a=s(o);return new Bt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=Object(s["G"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bt?t:null}hasIndex(e){return Object(s["k"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Mt.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(e,t){const n=Object(s["D"])(this.indexes_,(n,r)=>{const i=Object(s["G"])(this.indexSet_,r);if(Object(s["e"])(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Mt.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),ln(n,i.getCompare())}return hn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Mt(e.name,r))),i.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["D"])(this.indexes_,n=>{if(n===hn)return n;{const r=t.get(e.name);return r?n.remove(new Mt(e.name,r)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new Bt(Gt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?fn:this.priorityNode_;return new pn(r,s,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(s["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(on,(s,o)=>{t[s]=o.val(e),n++,i&&pn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends pn{constructor(){super(new Bt(Gt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const _n=new mn;Object.defineProperties(Mt,{MIN:{value:new Mt(P,pn.EMPTY_NODE)},MAX:{value:new Mt(R,_n)}}),qt.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Yt(_n),rn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function bn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,bn(t))}if(e instanceof Array||!gn){let n=pn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(s["k"])(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Mt(e,i)))}}),0===n.length)return pn.EMPTY_NODE;const s=ln(n,zt,e=>e.name,Gt);if(r){const e=ln(n,on.getCompare());return new pn(s,bn(t),new dn({".priority":e},{".priority":on}))}return new pn(s,bn(t),dn.Default)}}nn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends Ft{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!vt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}makePost(e,t){const n=bn(e),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,r)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Mt(R,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?L(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=bn(e);return new Mt(t,n)}toString(){return".value"}}const On=new yn,wn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){return{type:"value",snapshotNode:e}}function Cn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function kn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cn(t,n)):o.trackChildChange(Tn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,r)=>{t.hasChild(e)||n.trackChildChange(In(e,r))}),t.isLeafNode()||t.forEachChild(on,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tn(t,r,i))}else n.trackChildChange(Cn(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.indexedFilter_=new jn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return t.forEachChild(on,(e,t)=>{i.matches(new Mt(e,t))||(r=r.updateImmediateChild(e,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&i(t,n)<=0;c?o++:r=r.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const c=new Mt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Tn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Cn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(In(l.name,l.node)),i.trackChildChange(Cn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rn(e){return e.loadsAllData()?new jn(e.getIndex()):e.hasLimit()?new Sn(e):new Nn(e)}function Ln(e){const t={};if(e.isDefault())return t;let n;return e.index_===on?n="$priority":e.index_===On?n="$value":e.index_===Wt?n="$key":(Object(s["e"])(e.index_ instanceof vn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["J"])(n),e.startSet_&&(t["startAt"]=Object(s["J"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["J"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["J"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["J"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function An(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=xn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Ln(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(s["G"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=xn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ln(e._queryParams),n=e._path.toString(),r=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["E"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["C"])(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function Fn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Mn());const i=e.children.get(r);t=ft(t),Fn(i,t,n)}}function Un(e,t,n){null!==e.value?n(t,e.value):qn(e,(e,r)=>{const i=new lt(t.toString()+"/"+e);Un(r,i,n)})}function qn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e4,Hn=3e4,$n=3e5;class Bn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Vn+(Hn-Vn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(s["k"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*$n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;function Gn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Jn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Gn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Jn(ut(),t,this.revert)}}return Object(s["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Jn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return vt(this.path)?new Xn(this.source,ut()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zn.OVERWRITE}operationForChild(e){return vt(this.path)?new Qn(this.source,ut(),this.snap.getImmediateChild(e)):new Qn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Qn(this.source,ut(),t.value):new Zn(this.source,ut(),t)}return Object(s["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zn(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nr(e,t,n,r){const i=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(kn(t.childName,t.snapshotNode))}),rr(e,i,"child_removed",t,r,n),rr(e,i,"child_added",t,r,n),rr(e,i,"child_moved",s,r,n),rr(e,i,"child_changed",t,r,n),rr(e,i,"value",t,r,n),i}function rr(e,t,n,r,i,s){const o=r.filter(e=>e.type===n);o.sort((t,n)=>sr(e,t,n)),o.forEach(n=>{const r=ir(e,n,s);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function ir(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sr(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const r=new Mt(t.childName,t.snapshotNode),i=new Mt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return{eventCache:e,serverCache:t}}function ar(e,t,n,r){return or(new er(t,n,r),e.serverCache)}function cr(e,t,n,r){return or(e.eventCache,new er(t,n,r))}function lr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ur(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const dr=()=>(hr||(hr=new Bt(A)),hr);class fr{constructor(e,t=dr()){this.value=e,this.children=t}static fromObject(e){let t=new fr(null);return F(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(vt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=bt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(vt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new fr(null)}}set(e,t){if(vt(e))return new fr(t,this.children);{const n=ht(e),r=this.children.get(n)||new fr(null),i=r.set(ft(e),t),s=this.children.insert(n,i);return new fr(this.value,s)}}remove(e){if(vt(e))return this.children.isEmpty()?new fr(null):new fr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new fr(null):new fr(this.value,i)}return this}}get(e){if(vt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ht(e),r=this.children.get(n)||new fr(null),i=r.setTree(ft(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new fr(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(bt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(vt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),bt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),bt(t,r),n):new fr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(bt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.writeTree_=e}static empty(){return new pr(new fr(null))}}function mr(e,t,n){if(vt(t))return new pr(new fr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=yt(i,t);return s=s.updateChild(o,n),new pr(e.writeTree_.set(i,s))}{const r=new fr(n),i=e.writeTree_.setTree(t,r);return new pr(i)}}}function _r(e,t,n){let r=e;return F(n,(e,n)=>{r=mr(r,bt(t,e),n)}),r}function gr(e,t){if(vt(t))return pr.empty();{const n=e.writeTree_.setTree(t,new fr(null));return new pr(n)}}function br(e,t){return null!=vr(e,t)}function vr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function yr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Mt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))}),t}function Or(e,t){if(vt(t))return e;{const n=vr(e,t);return new pr(null!=n?new fr(n):e.writeTree_.subtree(t))}}function wr(e){return e.writeTree_.isEmpty()}function Er(e,t){return Cr(ut(),e.writeTree_,t)}function Cr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(s["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Cr(bt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(bt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return Gr(t,e)}function Tr(e,t,n,r,i){Object(s["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=mr(e.visibleWrites,t,n)),e.lastWriteId=r}function kr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function jr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Nr(t,r.path)?i=!1:wt(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Sr(e),!0;if(r.snap)e.visibleWrites=gr(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=gr(e.visibleWrites,bt(r.path,t))})}return!0}return!1}function Nr(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(bt(e.path,n),t))return!0;return!1}function Sr(e){e.visibleWrites=Rr(e.allWrites,Pr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Pr(e){return e.visible}function Rr(e,t,n){let r=pr.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=yt(n,e),r=mr(r,t,o.snap)):wt(e,n)&&(t=yt(e,n),r=mr(r,ut(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(wt(n,e))t=yt(n,e),r=_r(r,t,o.children);else if(wt(e,n))if(t=yt(e,n),vt(t))r=_r(r,ut(),o.children);else{const e=Object(s["G"])(o.children,ht(t));if(e){const n=e.getChild(ft(t));r=mr(r,ut(),n)}}}}}return r}function Lr(e,t,n,r,i){if(r||i){const s=Or(e.visibleWrites,t);if(!i&&wr(s))return n;if(i||null!=n||br(s,ut())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Rr(e.allWrites,s,t),a=n||pn.EMPTY_NODE;return Er(o,a)}return null}{const r=vr(e.visibleWrites,t);if(null!=r)return r;{const r=Or(e.visibleWrites,t);if(wr(r))return n;if(null!=n||br(r,ut())){const e=n||pn.EMPTY_NODE;return Er(r,e)}return null}}}function Ar(e,t,n){let r=pn.EMPTY_NODE;const i=vr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(on,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Or(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=Er(Or(i,new lt(e)),t);r=r.updateImmediateChild(e,n)}),yr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Or(e.visibleWrites,t);return yr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function xr(e,t,n,r,i){Object(s["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=bt(t,n);if(br(e.visibleWrites,o))return null;{const t=Or(e.visibleWrites,o);return wr(t)?i.getChild(n):Er(t,i.getChild(n))}}function Dr(e,t,n,r){const i=bt(t,n),s=vr(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=Or(e.visibleWrites,i);return Er(t,r.getNode().getImmediateChild(n))}return null}function Mr(e,t){return vr(e.visibleWrites,t)}function Fr(e,t,n,r,i,s,o){let a;const c=Or(e.visibleWrites,t),l=vr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Er(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ur(){return{visibleWrites:pr.empty(),allWrites:[],lastWriteId:-1}}function qr(e,t,n,r){return Lr(e.writeTree,e.treePath,t,n,r)}function Wr(e,t){return Ar(e.writeTree,e.treePath,t)}function Vr(e,t,n,r){return xr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return Mr(e.writeTree,bt(e.treePath,t))}function $r(e,t,n,r,i,s){return Fr(e.writeTree,e.treePath,t,n,r,i,s)}function Br(e,t,n){return Dr(e.writeTree,e.treePath,t,n)}function zr(e,t){return Gr(bt(e.treePath,t),e.writeTree)}function Gr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,In(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Cn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Jr=new Yr;class Xr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Br(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ur(this.viewCache_),i=$r(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){return{filter:e}}function Zr(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ei(e,t,n,r,i){const o=new Kr;let a,c;if(n.type===zn.OVERWRITE){const l=n;l.source.fromUser?a=ii(e,t,l.path,l.snap,r,i,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!vt(l.path),a=ri(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===zn.MERGE){const l=n;l.source.fromUser?a=oi(e,t,l.path,l.children,r,i,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ci(e,t,l.path,l.children,r,i,c,o))}else if(n.type===zn.ACK_USER_WRITE){const s=n;a=s.revert?hi(e,t,s.path,r,i,o):li(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==zn.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=ui(e,t,n.path,r,o)}const l=o.getChanges();return ti(t,a,l),{viewCache:a,changes:l}}function ti(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=lr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(En(lr(t)))}}function ni(e,t,n,r,i,o){const a=t.eventCache;if(null!=Hr(r,n))return t;{let c,l;if(vt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ur(t),i=n instanceof pn?n:pn.EMPTY_NODE,s=Wr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=qr(r,ur(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=Vr(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Vr(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Br(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return ar(t,c,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function ri(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(vt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,Jr,null)}const h=cr(t,l,c.isFullyInitialized()||vt(n),u.filtersNodes()),d=new Xr(i,h,s);return ni(e,h,n,i,d,a)}function ii(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new Xr(i,t,s);if(vt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=ar(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=ar(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(i);let h;if(vt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(s)&&e.getChild(gt(s)).isEmpty()?e:e.updateChild(s,r):pn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,u,o);c=ar(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function si(e,t){return e.eventCache.isCompleteForChild(t)}function oi(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const l=bt(n,r);si(t,ht(l))&&(a=ii(e,a,l,c,i,s,o))}),r.foreach((r,c)=>{const l=bt(n,r);si(t,ht(l))||(a=ii(e,a,l,c,i,s,o))}),a}function ai(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ci(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=vt(n)?r:new fr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=ai(e,c,r);l=ri(e,l,new lt(n),u,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=ai(e,c,r);l=ri(e,l,new lt(n),u,i,s,o,a)}}),l}function li(e,t,n,r,i,s,o){if(null!=Hr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(vt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ri(e,t,n,c.getNode().getChild(n),i,s,a,o);if(vt(n)){let r=new fr(null);return c.getNode().forEachChild(Wt,(e,t)=>{r=r.set(new lt(e),t)}),ci(e,t,n,r,i,s,a,o)}return t}{let l=new fr(null);return r.foreach((e,t)=>{const r=bt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),ci(e,t,n,l,i,s,a,o)}}function ui(e,t,n,r,i){const s=t.serverCache,o=cr(t,s.getNode(),s.isFullyInitialized()||vt(n),s.isFiltered());return ni(e,o,n,r,Jr,i)}function hi(e,t,n,r,i,o){let a;if(null!=Hr(r,n))return t;{const c=new Xr(r,t,i),l=t.eventCache.getNode();let u;if(vt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=qr(r,ur(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof pn,"serverChildren would be complete if leaf node"),n=Wr(r,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const i=ht(n);let s=Br(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,ft(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,pn.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qr(r,ur(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Hr(r,ut()),ar(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new jn(n.getIndex()),i=Rn(n);this.processor_=Qr(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),l=new er(a,s.isFullyInitialized(),r.filtersNodes()),u=new er(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=or(u,l),this.eventGenerator_=new tr(this.query_)}get query(){return this.query_}}function fi(e){return e.viewCache_.serverCache.getNode()}function pi(e){return lr(e.viewCache_)}function mi(e,t){const n=ur(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function _i(e){return 0===e.eventRegistrations_.length}function gi(e,t){e.eventRegistrations_.push(t)}function bi(e,t,n){const r=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function vi(e,t,n,r){t.type===zn.MERGE&&null!==t.source.queryId&&(Object(s["e"])(ur(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(lr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=ei(e.processor_,i,t,n,r);return Zr(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Oi(e,o.changes,o.viewCache.eventCache.getNode(),null)}function yi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,(e,t)=>{r.push(Cn(e,t))})}return n.isFullyInitialized()&&r.push(En(n.getNode())),Oi(e,r,n.getNode(),t)}function Oi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return nr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi,Ei;class Ci{constructor(){this.views=new Map}}function Ii(e){Object(s["e"])(!wi,"__referenceConstructor has already been defined"),wi=e}function Ti(){return Object(s["e"])(wi,"Reference.ts has not been loaded"),wi}function ki(e){return 0===e.views.size}function ji(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),vi(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(vi(s,t,n,r));return i}}function Ni(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=qr(n,i?r:null),s=!1;e?s=!0:r instanceof pn?(e=Wr(n,r),s=!1):(e=pn.EMPTY_NODE,s=!1);const o=or(new er(e,s,!1),new er(r,i,!1));return new di(t,o)}return o}function Si(e,t,n,r,i,s){const o=Ni(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),gi(o,n),yi(o,n)}function Pi(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Di(e);if("default"===i)for(const[c,l]of e.views.entries())o=o.concat(bi(l,n,r)),_i(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(i);t&&(o=o.concat(bi(t,n,r)),_i(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Di(e)&&s.push(new(Ti())(t._repo,t._path)),{removed:s,events:o}}function Ri(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Li(e,t){let n=null;for(const r of e.views.values())n=n||mi(r,t);return n}function Ai(e,t){const n=t._queryParams;if(n.loadsAllData())return Mi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function xi(e,t){return null!=Ai(e,t)}function Di(e){return null!=Mi(e)}function Mi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){Object(s["e"])(!Ei,"__referenceConstructor has already been defined"),Ei=e}function Ui(){return Object(s["e"])(Ei,"Reference.ts has not been loaded"),Ei}let qi=1;class Wi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vi(e,t,n,r,i){return Tr(e.pendingWriteTree_,t,n,r,i),i?es(e,new Qn(Gn(),t,n)):[]}function Hi(e,t,n=!1){const r=kr(e.pendingWriteTree_,t),i=jr(e.pendingWriteTree_,t);if(i){let t=new fr(null);return null!=r.snap?t=t.set(ut(),!0):F(r.children,e=>{t=t.set(new lt(e),!0)}),es(e,new Jn(r.path,t,n))}return[]}function $i(e,t,n){return es(e,new Qn(Kn(),t,n))}function Bi(e,t,n){const r=fr.fromObject(n);return es(e,new Zn(Kn(),t,r))}function zi(e,t){return es(e,new Xn(Kn(),t))}function Gi(e,t,n){const r=os(e,n);if(r){const n=as(r),i=n.path,s=n.queryId,o=yt(i,t),a=new Xn(Yn(s),o);return cs(e,i,a)}return[]}function Ki(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||xi(o,t))){const c=Pi(o,t,n,r);ki(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(s,(e,t)=>Di(t));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=ls(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=rs(e,r);e.listenProvider_.startListening(us(i),is(e,i),s.hashFn,s.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(us(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(ss(t));e.listenProvider_.stopListening(us(t),n)})}hs(e,l)}return a}function Yi(e,t,n,r){const i=os(e,r);if(null!=i){const r=as(i),s=r.path,o=r.queryId,a=yt(s,t),c=new Qn(Yn(o),a,n);return cs(e,s,c)}return[]}function Ji(e,t,n,r){const i=os(e,r);if(i){const r=as(i),s=r.path,o=r.queryId,a=yt(s,t),c=fr.fromObject(n),l=new Zn(Yn(o),a,c);return cs(e,s,l)}return[]}function Xi(e,t,n,r=!1){const i=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=yt(e,i);o=o||Li(t,n),a=a||Di(t)});let c,l=e.syncPointTree_.get(i);if(l?(a=a||Di(l),o=o||Li(l,ut())):(l=new Ci,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=o)c=!0;else{c=!1,o=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=Li(t,ut());n&&(o=o.updateImmediateChild(e,n))})}const u=xi(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=ss(t);Object(s["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ds();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Ir(e.pendingWriteTree_,i);let d=Si(l,t,n,h,o,c);if(!u&&!a&&!r){const n=Ai(l,t);d=d.concat(fs(e,t,n))}return d}function Qi(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=yt(e,t),i=Li(n,r);if(i)return i});return Lr(i,t,s,n,r)}function Zi(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=yt(e,n);r=r||Li(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Li(i,ut()):(i=new Ci,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new er(r,!0,!1):null,a=Ir(e.pendingWriteTree_,t._path),c=Ni(i,t,a,s?o.getNode():pn.EMPTY_NODE,s);return pi(c)}function es(e,t){return ts(t,e.syncPointTree_,null,Ir(e.pendingWriteTree_,ut()))}function ts(e,t,n,r){if(vt(e.path))return ns(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Li(i,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=zr(r,o);s=s.concat(ts(a,c,e,t))}return i&&(s=s.concat(ji(i,e,r,n))),s}}function ns(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Li(i,ut()));let s=[];return t.children.inorderTraversal((t,i)=>{const o=n?n.getImmediateChild(t):null,a=zr(r,t),c=e.operationForChild(t);c&&(s=s.concat(ns(c,i,o,a)))}),i&&(s=s.concat(ji(i,e,r,n))),s}function rs(e,t){const n=t.query,r=is(e,n);return{hashFn:()=>{const e=fi(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Gi(e,n._path,r):zi(e,n._path);{const r=V(t,n);return Ki(e,n,null,r)}}}}function is(e,t){const n=ss(t);return e.queryToTagMap.get(n)}function ss(e){return e._path.toString()+"$"+e._queryIdentifier}function os(e,t){return e.tagToQueryMap.get(t)}function as(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function cs(e,t,n){const r=e.syncPointTree_.get(t);Object(s["e"])(r,"Missing sync point for query tag that we're tracking");const i=Ir(e.pendingWriteTree_,t);return ji(r,n,i,null)}function ls(e){return e.fold((e,t,n)=>{if(t&&Di(t)){const e=Mi(t);return[e]}{let e=[];return t&&(e=Ri(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function us(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ui())(e._repo,e._path):e}function hs(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=ss(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ds(){return qi++}function fs(e,t,n){const r=t._path,i=is(e,t),o=rs(e,n),a=e.listenProvider_.startListening(us(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(s["e"])(!Di(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!vt(e)&&t&&Di(t))return[Mi(t).query];{let e=[];return t&&(e=e.concat(Ri(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(us(r),is(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ps(t)}node(){return this.node_}}class ms{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new ms(this.syncTree_,t)}node(){return Qi(this.syncTree_,this.path_)}}const _s=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},gs=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?bs(e[".sv"],t,n):"object"===typeof e[".sv"]?vs(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},bs=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},vs=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(s["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(s["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},ys=function(e,t,n,r){return ws(t,new ms(n,e),r)},Os=function(e,t,n){return ws(e,new ps(t),n)};function ws(e,t,n){const r=e.getPriority().val(),i=gs(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=gs(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new tn(s,bn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new tn(i))),r.forEachChild(on,(e,r)=>{const i=ws(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Cs(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=Object(s["G"])(r.node.children,i)||{children:{},childCount:0};r=new Es(i,r,e),n=ft(n),i=ht(n)}return r}function Is(e){return e.node.value}function Ts(e,t){e.node.value=t,Ls(e)}function ks(e){return e.node.childCount>0}function js(e){return void 0===Is(e)&&!ks(e)}function Ns(e,t){F(e.node.children,(n,r)=>{t(new Es(n,e,r))})}function Ss(e,t,n,r){n&&!r&&t(e),Ns(e,e=>{Ss(e,t,!0,r)}),n&&r&&t(e)}function Ps(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Rs(e){return new lt(null===e.parent?e.name:Rs(e.parent)+"/"+e.name)}function Ls(e){null!==e.parent&&As(e.parent,e.name,e)}function As(e,t,n){const r=js(n),i=Object(s["k"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ls(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ls(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=/[\[\].#$\/\u0000-\u001F\u007F]/,Ds=/[\[\].#$\u0000-\u001F\u007F]/,Ms=10485760,Fs=function(e){return"string"===typeof e&&0!==e.length&&!xs.test(e)},Us=function(e){return"string"===typeof e&&0!==e.length&&!Ds.test(e)},qs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Us(e)},Ws=function(e,t,n,r){r&&void 0===t||Vs(Object(s["p"])(e,"value"),t,n)},Vs=function(e,t,n){const r=n instanceof lt?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(r));if("function"===typeof t)throw new Error(e+"contains a function "+kt(r)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+kt(r));if("string"===typeof t&&t.length>Ms/3&&Object(s["H"])(t)>Ms)throw new Error(e+"contains a string greater than "+Ms+" utf8 bytes "+kt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Fs(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ct(r,t),Vs(e,s,r),It(r)}),n&&i)throw new Error(e+' contains ".value" child '+kt(r)+" in addition to actual children.")}},Hs=function(e,t,n,r){if((!r||void 0!==n)&&!Us(n))throw new Error(Object(s["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},$s=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hs(e,t,n,r)},Bs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},zs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qs(n))throw new Error(Object(s["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ks(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Ot(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ys(e,t,n){Ks(e,n),Js(e,e=>wt(e,t)||wt(t,e))}function Js(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Xs(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Xs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();y&&E("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="repo_interrupt",Zs=25;class eo{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new Es,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function to(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||K())e.server_=new xn(e.repoInfo_,(t,n,r,i)=>{io(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>so(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["J"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Dt(e.repoInfo_,t,(t,n,r,i)=>{io(e,t,n,r,i)},t=>{so(e,t)},t=>{oo(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ge(e.repoInfo_,()=>new Bn(e.stats_,e.server_)),e.infoData_=new Dn,e.infoSyncTree_=new Wi({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=$i(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),ao(e,"connected",!1),e.serverSyncTree_=new Wi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);Ys(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function no(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ro(e){return _s({timestamp:no(e)})}function io(e,t,n,r,i){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(s["D"])(n,e=>bn(e));a=Ji(e.serverSyncTree_,o,t,i)}else{const t=bn(n);a=Yi(e.serverSyncTree_,o,t,i)}else if(r){const t=Object(s["D"])(n,e=>bn(e));a=Bi(e.serverSyncTree_,o,t)}else{const t=bn(n);a=$i(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=vo(e,o)),Ys(e.eventQueue_,c,a)}function so(e,t){ao(e,"connected",t),!1===t&&ho(e)}function oo(e,t){F(t,(t,n)=>{ao(e,t,n)})}function ao(e,t,n){const r=new lt("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const s=$i(e.infoSyncTree_,r,i);Ys(e.eventQueue_,r,s)}function co(e){return e.nextWriteId_++}function lo(e,t,n){const r=Zi(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{const i=bn(r).withIndex(t._queryParams.getIndex());let s;if(Xi(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=$i(e.serverSyncTree_,t._path,i);else{const n=is(e.serverSyncTree_,t);s=Yi(e.serverSyncTree_,t._path,i,n)}return Ys(e.eventQueue_,t._path,s),Ki(e.serverSyncTree_,t,n,null,!0),i},n=>(po(e,"get for query "+Object(s["J"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function uo(e,t,n,r,i){po(e,"set",{path:t.toString(),value:n,priority:r});const s=ro(e),o=bn(n,r),a=Qi(e.serverSyncTree_,t),c=Os(o,a,s),l=co(e),u=Vi(e.serverSyncTree_,t,c,l,!0);Ks(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=Hi(e.serverSyncTree_,l,!s);Ys(e.eventQueue_,t,o),mo(e,i,n,r)});const h=Io(e,t);vo(e,h),Ys(e.eventQueue_,h,[])}function ho(e){po(e,"onDisconnectEvents");const t=ro(e),n=Mn();Un(e.onDisconnect_,ut(),(r,i)=>{const s=ys(r,i,e.serverSyncTree_,t);Fn(n,r,s)});let r=[];Un(n,ut(),(t,n)=>{r=r.concat($i(e.serverSyncTree_,t,n));const i=Io(e,t);vo(e,i)}),e.onDisconnect_=Mn(),Ys(e.eventQueue_,ut(),r)}function fo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qs)}function po(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function mo(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function _o(e,t,n){return Qi(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function go(e,t=e.transactionQueueTree_){if(t||Co(e,t),Is(t)){const n=wo(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&bo(e,Rs(t),n)}else ks(t)&&Ns(t,t=>{go(e,t)})}function bo(e,t,n){const r=n.map(e=>e.currentWriteId),i=_o(e,t,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,r=>{po(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Hi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Co(e,Cs(e.transactionQueueTree_,t)),go(e,e.transactionQueueTree_),Ys(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}vo(e,t)}},a)}function vo(e,t){const n=Oo(e,t),r=Rs(n),i=wo(e,n);return yo(e,i,r),r}function yo(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=yt(n,o.path);let u,h=!1;if(Object(s["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat(Hi(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Zs)h=!0,u="maxretry",i=i.concat(Hi(e.serverSyncTree_,o.currentWriteId,!0));else{const n=_o(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Vs("transaction failed: Data returned ",r,o.path);let t=bn(r);const c="object"===typeof r&&null!=r&&Object(s["k"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=ro(e),h=Os(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=co(e),a.splice(a.indexOf(l),1),i=i.concat(Vi(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(Hi(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Hi(e.serverSyncTree_,o.currentWriteId,!0))}Ys(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(u),!1,null))))}Co(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)G(r[s]);go(e,e.transactionQueueTree_)}function Oo(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Is(r))r=Cs(r,n),t=ft(t),n=ht(t);return r}function wo(e,t){const n=[];return Eo(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Eo(e,t,n){const r=Is(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ns(t,t=>{Eo(e,t,n)})}function Co(e,t){const n=Is(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ts(t,n.length>0?n:void 0)}Ns(t,t=>{Co(e,t)})}function Io(e,t){const n=Rs(Oo(e,t)),r=Cs(e.transactionQueueTree_,t);return Ps(r,t=>{To(e,t)}),To(e,r),Ss(r,t=>{To(e,t)}),n}function To(e,t){const n=Is(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Hi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ts(t,void 0):n.length=o+1,Ys(e.eventQueue_,Rs(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function jo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const No=function(e,t){const n=So(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||j();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},So=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=ko(e.substring(u,h)));const d=jo(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["J"])(this.snapshot.exportVal())}}class Ro{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return vt(this._path)?null:pt(this._path)}get ref(){return new xo(this._repo,this._path)}get _queryIdentifier(){const e=An(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return An(this._queryParams)}isEqual(e){if(e=Object(s["r"])(e),!(e instanceof Ao))return!1;const t=this._repo===e._repo,n=Ot(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class xo extends Ao{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=gt(this._path);return null===e?null:new xo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Do{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Fo(this.ref,e);return new Do(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Do(n,Fo(this.ref,t),on)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mo(e,t){return e=Object(s["r"])(e),e._checkNotDeleted("ref"),void 0!==t?Fo(e._root,t):e._root}function Fo(e,t){return e=Object(s["r"])(e),null===ht(e._path)?$s("child","path",t,!1):Hs("child","path",t,!1),new xo(e._repo,bt(e._path,t))}function Uo(e){return Bs("remove",e._path),qo(e,null)}function qo(e,t){e=Object(s["r"])(e),Bs("set",e._path),Ws("set",t,e._path,!1);const n=new s["a"];return uo(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Wo(e){e=Object(s["r"])(e);const t=new Lo(()=>{}),n=new Vo(t);return lo(e._repo,e,n).then(t=>new Do(t,new xo(e._repo,e._path),e._queryParams.getIndex()))}class Vo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Po("value",this,new Do(e.snapshotNode,new xo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ro(this,e,t):null}matches(e){return e instanceof Vo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}Ii(xo),Fi(xo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ho="FIREBASE_DATABASE_EMULATOR_HOST",$o={};let Bo=!1;function zo(t,n,r,i,s){let o=i||t.options.databaseURL;void 0===o&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=No(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/links/"})&&(u=Object({NODE_ENV:"production",BASE_URL:"/links/"})[Ho]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=No(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new Q(Q.OWNER):new X(t.name,t.options,n);zs("Invalid Firebase Database URL",c),vt(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ko(l,t,h,new J(t.name,r));return new Yo(d,t)}function Go(e,t){const n=$o[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fo(e),delete n[e.key]}function Ko(e,t,n,r){let i=$o[t.name];i||(i={},$o[t.name]=i);let s=i[e.toURLString()];return s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eo(e,Bo,n,r),i[e.toURLString()]=s,s}class Yo{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(to(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Go(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function Jo(e=Object(r["d"])(),t){return Object(r["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xo(e){u(r["a"]),Object(r["c"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return zo(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,e),Object(r["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Xo()}).call(this,n("4362"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r=n("7a23"),i=n("3f4e"),s="store";function o(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,a={};o(s,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["E"])({data:t}),e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=r),!s&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var l=r.context=m(e,o,n);r.forEachMutation((function(t,n){var r=o+n;g(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;b(e,r,i,l)})),r.forEachGetter((function(t,n){var r=o+n;v(e,r,t,l)})),r.forEachChild((function(r,s){p(e,t,n.concat(s),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=w(n,r,i),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var s=w(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return _(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function _(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function g(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function b(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function v(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["M"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function w(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",C="vuex:mutations",I="vuex:actions",T="vuex",k=0;function j(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:C,label:"Vuex Mutations",color:N}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:N}),n.addInspector({id:T,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===T)if(n.filter){var r=[];x(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[A(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===T){var r=n.nodeId;_(t,r),n.state=D(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===T){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(T),n.sendInspectorState(T),n.addTimelineEvent({layerId:C,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=k++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var N=8702998,S=6710886,P=16777215,R={label:"namespaced",textColor:P,backgroundColor:S};function L(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function A(e,t){return{id:t||"root",label:L(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return A(e._children[n],t+n+"/")}))}}function x(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){x(e,t._children[i],n,r+i+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=M(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?L(e):e,editable:!1,value:U((function(){return s[e]}))}}))}return i}function M(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},W={namespaced:{configurable:!0}};W.namespaced.get=function(){return!!this._rawModule.namespaced},q.prototype.addChild=function(e,t){this._children[e]=t},q.prototype.removeChild=function(e){delete this._children[e]},q.prototype.getChild=function(e){return this._children[e]},q.prototype.hasChild=function(e){return e in this._children},q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},q.prototype.forEachChild=function(e){o(this._children,e)},q.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},q.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},q.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(q.prototype,W);var V=function(e){this.register([],e,!1)};function H(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");H(e.concat(r),t.getChild(r),n.modules[r])}}V.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},V.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},V.prototype.update=function(e){H([],this.root,e)},V.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new q(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&o(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},V.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},V.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var $={assert:function(e){return"function"===typeof e},expected:"function"},B={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:$,mutations:$,actions:B};function G(e,t){Object.keys(z).forEach((function(n){if(t[n]){var r=z[n];o(t[n],(function(t,i){l(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var s=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(s+=' in module "'+e.join(".")+'"'),s+=" is "+JSON.stringify(r)+".",s}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new V(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},X={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||s,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&j(e,this)},X.state.get=function(){return this._state.data},X.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var r=this,i=w(e,t,n),s=i.type,o=i.payload,a=i.options,c={type:s,payload:o},l=this._mutations[s];l?(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},J.prototype.dispatch=function(e,t){var n=this,r=w(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var i=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["M"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,X);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Q(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=te(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Q(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=te(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Q(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||te(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Q(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=te(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Q(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return me})),n.d(t,"b",(function(){return he})),n.d(t,"c",(function(){return ue})),n.d(t,"d",(function(){return ge})),n.d(t,"e",(function(){return _e})),n.d(t,"f",(function(){return be}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function _(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(w(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){b=e(b)}function y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),w(h.get(this))}:function(...t){return w(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),w(r)}}function O(e){return"function"===typeof e?y(e):(e instanceof IDBTransaction&&g(e),o(e,l())?new Proxy(e,b):e)}function w(e){if(e instanceof IDBRequest)return _(e);if(p.has(e))return p.get(e);const t=O(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=w(o);return r&&o.addEventListener("upgradeneeded",e=>{r(w(o.result),e.oldVersion,e.newVersion,w(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],k=new Map;function j(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}v(e=>({...e,get:(t,n,r)=>j(t,n)||e.get(t,n,r),has:(t,n)=>!!j(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(S(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function S(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",R="0.7.31",L=new i["b"]("@firebase/app"),A="@firebase/app-compat",x="@firebase/analytics-compat",D="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",q="@firebase/auth-compat",W="@firebase/database",V="@firebase/database-compat",H="@firebase/functions",$="@firebase/functions-compat",B="@firebase/installations",z="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.9.3",se="[DEFAULT]",oe={[P]:"fire-core",[A]:"fire-core-compat",[D]:"fire-analytics",[x]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[q]:"fire-auth-compat",[W]:"fire-rtdb",[V]:"fire-rtdb-compat",[H]:"fire-fn",[$]:"fire-fn-compat",[B]:"fire-iid",[z]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s["b"]("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function _e(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw fe.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if(Object(s["o"])(e,o.options)&&Object(s["o"])(n,o.config))return o;throw fe.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(i,c),c}function ge(e=se){const t=ae.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function be(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}ue(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="firebase-heartbeat-database",ye=1,Oe="firebase-heartbeat-store";let we=null;function Ee(){return we||(we=C(ve,ye,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch(e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})})),we}async function Ce(e){var t;try{const t=await Ee();return t.transaction(Oe).objectStore(Oe).get(Te(e))}catch(n){if(n instanceof s["c"])L.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});L.warn(e.message)}}}async function Ie(e,t){var n;try{const n=await Ee(),r=n.transaction(Oe,"readwrite"),i=r.objectStore(Oe);return await i.put(t,Te(e)),r.done}catch(r){if(r instanceof s["c"])L.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});L.warn(e.message)}}}function Te(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,je=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Se();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=je}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Se(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=Object(s["j"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Se(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["x"])()&&Object(s["K"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return Object(s["j"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){ue(new r["a"]("platform-logger",e=>new N(e),"PRIVATE")),ue(new r["a"]("heartbeat",e=>new Ne(e),"PRIVATE")),be(P,R,e),be(P,R,"esm2017"),be("fire-js","")}Ae("")},6605:function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return F}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const o=Object.assign;function a(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const c=()=>{},l=Array.isArray;const u=/\/$/,h=e=>e.replace(u,"");function d(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=y(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function f(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function p(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&_(t.matched[r],n.matched[i])&&g(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function g(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?v(e,t):l(t)?v(t,e):e===t}function v(e,t){return l(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function y(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var O,w;(function(e){e["pop"]="pop",e["push"]="push"})(O||(O={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(w||(w={}));function E(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),h(e)}const C=/^[^#]+#/;function I(e,t){return e.replace(C,"#")+t}function T(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function j(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=T(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const S=new Map;function P(e,t){S.set(e,t)}function R(e){const t=S.get(e);return S.delete(e),t}let L=()=>location.protocol+"//"+location.host;function A(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),p(n,"")}const o=p(n,e);return o+r+i}function x(e,t,n,r){let i=[],s=[],a=null;const c=({state:s})=>{const o=A(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=o,t.value=s,a&&a===c)return void(a=null);u=l?s.position-l.position:0}else r(o);i.forEach(e=>{e(n.value,c,{delta:u,type:O.pop,direction:u?u>0?w.forward:w.back:w.unknown})})};function l(){a=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(o({},e.state,{scroll:k()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:d}}function D(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?k():null}}function M(e){const{history:t,location:n}=window,r={value:A(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:L()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function a(e,n){const a=o({},t.state,D(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,a,!0),r.value=e}function c(e,n){const a=o({},i.value,t.state,{forward:e,scroll:k()});s(a.current,a,!0);const c=o({},D(r.value,e,null),{position:a.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:a}}function F(e){e=E(e);const t=M(e),n=x(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=o({location:"",base:e,go:r,createHref:I.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function U(e){return"string"===typeof e||e&&"object"===typeof e}function q(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},V=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function $(e,t){return o(new Error,{type:e,[V]:!0},t)}function B(e,t){return e instanceof Error&&V in e&&(null==t||!!(e.type&t))}const z="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=o({},G,t),r=[];let i=n.start?"^":"";const s=[];for(const o of e){const e=o.length?[]:[90];n.strict&&!o.length&&(i+="/");for(let t=0;t<o.length;t++){const r=o[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(K,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;s.push({name:e,repeatable:n,optional:c});const u=l||z;if(u!==z){a+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&o.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,a+=20,c&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:a,score:r,keys:s,parse:c,stringify:u}}function J(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=J(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Q(r))return 1;if(Q(i))return-1}return i.length-r.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Z={type:0,value:""},ee=/[a-zA-Z0-9_]/;function te(e){if(!e)return[[]];if("/"===e)return[[Z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ee.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function ne(e,t,n){const r=Y(te(e.path),n);const i=o(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function re(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=se(e);l.aliasOf=r&&r.record;const h=le(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(o({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:o}=t;if(n&&"/"!==o[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(o&&r+o)}if(f=ne(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ae(f)&&a(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,u(f)}return p?()=>{a(p)}:c}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function l(){return n}function u(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ue(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ae(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,a,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw $(1,{location:e});0,a=i.record.name,c=o(ie(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params&&ie(e.params,i.keys.map(e=>e.name))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(c=i.parse(s),a=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw $(1,{location:e,currentLocation:t});a=i.record.name,c=o({},t.params,e.params),s=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:a,path:s,params:c,matched:l,meta:ce(l)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:h,removeRoute:a,getRoutes:l,getRecordMatcher:i}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:oe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function oe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce((e,t)=>o(e,t.meta),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ue(e,t){return t.children.some(t=>t===e||ue(e,t))}const he=/#/g,de=/&/g,fe=/\//g,pe=/=/g,me=/\?/g,_e=/\+/g,ge=/%5B/g,be=/%5D/g,ve=/%5E/g,ye=/%60/g,Oe=/%7B/g,we=/%7C/g,Ee=/%7D/g,Ce=/%20/g;function Ie(e){return encodeURI(""+e).replace(we,"|").replace(ge,"[").replace(be,"]")}function Te(e){return Ie(e).replace(Oe,"{").replace(Ee,"}").replace(ve,"^")}function ke(e){return Ie(e).replace(_e,"%2B").replace(Ce,"+").replace(he,"%23").replace(de,"%26").replace(ye,"`").replace(Oe,"{").replace(Ee,"}").replace(ve,"^")}function je(e){return ke(e).replace(pe,"%3D")}function Ne(e){return Ie(e).replace(he,"%23").replace(me,"%3F")}function Se(e){return null==e?"":Ne(e).replace(fe,"%2F")}function Pe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Re(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),s=Pe(n<0?e:e.slice(0,n)),o=n<0?null:Pe(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=je(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map(e=>e&&ke(e)):[r&&ke(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ae(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}const xe=Symbol(""),De=Symbol(""),Me=Symbol(""),Fe=Symbol(""),Ue=Symbol("");function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function We(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a($(4,{from:n,to:t})):e instanceof Error?a(e):U(e)?a($(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function Ve(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(We(c,n,r,o,e))}else{let c=a();0,i.push(()=>c.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&We(l,n,r,o,e)()}))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(r["o"])(Me),n=Object(r["o"])(Fe),i=Object(r["c"])(()=>t.resolve(Object(r["K"])(e.to))),s=Object(r["c"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(_.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&s[s.length-1].path!==a?s.findIndex(_.bind(null,e[t-2])):o}),o=Object(r["c"])(()=>s.value>-1&&Ke(n.params,i.value.params)),a=Object(r["c"])(()=>s.value>-1&&s.value===n.matched.length-1&&g(n.params,i.value.params));function l(n={}){return Ge(n)?t[Object(r["K"])(e.replace)?"replace":"push"](Object(r["K"])(e.to)).catch(c):Promise.resolve()}return{route:i,href:Object(r["c"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Be=Object(r["k"])({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Object(r["E"])($e(e)),{options:i}=Object(r["o"])(Me),s=Object(r["c"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["n"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ze=Be;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Object(r["o"])(Ue),s=Object(r["c"])(()=>e.route||i.value),a=Object(r["o"])(De,0),c=Object(r["c"])(()=>{let e=Object(r["K"])(a);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e}),l=Object(r["c"])(()=>s.value.matched[c.value]);Object(r["C"])(De,Object(r["c"])(()=>c.value+1)),Object(r["C"])(xe,l),Object(r["C"])(Ue,s);const u=Object(r["F"])();return Object(r["M"])(()=>[u.value,l.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&_(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,a=e.name,c=l.value,h=c&&c.components[a];if(!h)return Qe(n.default,{Component:h,route:i});const d=c.props[a],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[a]=null)},m=Object(r["n"])(h,o({},f,t,{onVnodeUnmounted:p,ref:u}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Xe;function et(e){const t=re(e.routes,e),n=e.parseQuery||Re,s=e.stringifyQuery||Le,u=e.history;const h=qe(),p=qe(),_=qe(),g=Object(r["I"])(W);let b=W;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=a.bind(null,e=>""+e),y=a.bind(null,Se),w=a.bind(null,Pe);function E(e,n){let r,i;return q(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function C(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function S(e,r){if(r=o({},r||g.value),"string"===typeof e){const i=d(n,e,r.path),s=t.resolve({path:i.path},r),a=u.createHref(i.fullPath);return o(i,s,{params:w(s.params),hash:Pe(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=o({},e,{path:d(n,e.path,r.path).path});else{const t=o({},e.params);for(const e in t)null==t[e]&&delete t[e];i=o({},e,{params:y(e.params)}),r.params=y(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=v(w(a.params));const l=f(s,o({},e,{hash:Te(c),path:a.path})),h=u.createHref(l);return o({fullPath:l,hash:c,query:s===Le?Ae(e.query):e.query||{}},a,{redirectedFrom:void 0,href:h})}function L(e){return"string"===typeof e?d(n,e,g.value.path):o({},e)}function A(e,t){if(b!==e)return $(8,{from:t,to:e})}function x(e){return F(e)}function D(e){return x(o(L(e),{replace:!0}))}function M(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),o({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=b=S(e),r=g.value,i=e.state,a=e.force,c=!0===e.replace,l=M(n);if(l)return F(o(L(l),{state:"object"===typeof l?o({},i,l.state):i,force:a,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!a&&m(s,r,n)&&(h=$(16,{to:u,from:r}),te(r,r,!0,!1)),(h?Promise.resolve(h):V(u,r)).catch(e=>B(e)?B(e,2)?e:ee(e):Q(e,u,r)).then(e=>{if(e){if(B(e,2))return F(o({replace:c},L(e.to),{state:"object"===typeof e.to?o({},i,e.to.state):i,force:a}),t||u)}else e=z(u,r,!0,c,i);return H(u,r,e),e})}function U(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,i,s]=nt(e,t);n=Ve(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(We(r,e,t))});const o=U.bind(null,e,t);return n.push(o),tt(n).then(()=>{n=[];for(const r of h.list())n.push(We(r,e,t));return n.push(o),tt(n)}).then(()=>{n=Ve(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(We(r,e,t))});return n.push(o),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(We(i,e,t));else n.push(We(r.beforeEnter,e,t));return n.push(o),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ve(s,"beforeRouteEnter",e,t),n.push(o),tt(n))).then(()=>{n=[];for(const r of p.list())n.push(We(r,e,t));return n.push(o),tt(n)}).catch(e=>B(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of _.list())r(e,t,n)}function z(e,t,n,r,s){const a=A(e,t);if(a)return a;const c=t===W,l=i?history.state:{};n&&(r||c?u.replace(e.fullPath,o({scroll:c&&l&&l.scroll},s)):u.push(e.fullPath,s)),g.value=e,te(e,t,n,c),ee()}let G;function K(){G||(G=u.listen((e,t,n)=>{if(!oe.listening)return;const r=S(e),s=M(r);if(s)return void F(o(s,{replace:!0}),r).catch(c);b=r;const a=g.value;i&&P(N(a.fullPath,n.delta),k()),V(r,a).catch(e=>B(e,12)?e:B(e,2)?(F(e.to,r).then(e=>{B(e,20)&&!n.delta&&n.type===O.pop&&u.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&u.go(-n.delta,!1),Q(e,r,a))).then(e=>{e=e||z(r,a,!1),e&&(n.delta&&!B(e,8)?u.go(-n.delta,!1):n.type===O.pop&&B(e,20)&&u.go(-1,!1)),H(r,a,e)}).catch(c)}))}let Y,J=qe(),X=qe();function Q(e,t,n){ee(e);const r=X.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function Z(){return Y&&g.value!==W?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function ee(e){return Y||(Y=!e,K(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset()),e}function te(t,n,s,o){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!s&&R(N(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return Object(r["s"])().then(()=>a(t,n,c)).then(e=>e&&j(e)).catch(e=>Q(e,t,n))}const ne=e=>u.go(e);let ie;const se=new Set,oe={currentRoute:g,listening:!0,addRoute:E,removeRoute:C,hasRoute:T,getRoutes:I,resolve:S,options:e,push:x,replace:D,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:h.add,beforeResolve:p.add,afterEach:_.add,onError:X.add,isReady:Z,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["K"])(g)}),i&&!ie&&g.value===W&&(ie=!0,x(u.location).catch(e=>{0}));const n={};for(const i in W)n[i]=Object(r["c"])(()=>g.value[i]);e.provide(Me,t),e.provide(Fe,Object(r["E"])(n)),e.provide(Ue,g);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=W,G&&G(),G=null,g.value=W,ie=!1,Y=!1),s()}}};return oe}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>_(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>_(e,a))||i.push(a))}return[n,r,i]}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]}))},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"7a23":function(e,t,n){"use strict";n.d(t,"l",(function(){return o})),n.d(t,"p",(function(){return Ie})),n.d(t,"q",(function(){return Te})),n.d(t,"r",(function(){return xe})),n.d(t,"E",(function(){return Oe})),n.d(t,"F",(function(){return De})),n.d(t,"I",(function(){return Me})),n.d(t,"K",(function(){return qe})),n.d(t,"t",(function(){return r["J"]})),n.d(t,"J",(function(){return r["M"]})),n.d(t,"a",(function(){return Er})),n.d(t,"b",(function(){return Cr})),n.d(t,"c",(function(){return vi})),n.d(t,"e",(function(){return xr})),n.d(t,"f",(function(){return Gr})),n.d(t,"g",(function(){return Ar})),n.d(t,"h",(function(){return Wr})),n.d(t,"i",(function(){return zr})),n.d(t,"j",(function(){return Vr})),n.d(t,"k",(function(){return tn})),n.d(t,"m",(function(){return ri})),n.d(t,"n",(function(){return yi})),n.d(t,"o",(function(){return Ft})),n.d(t,"s",(function(){return ct})),n.d(t,"u",(function(){return on})),n.d(t,"v",(function(){return pn})),n.d(t,"w",(function(){return bn})),n.d(t,"x",(function(){return an})),n.d(t,"y",(function(){return mn})),n.d(t,"z",(function(){return vn})),n.d(t,"A",(function(){return Nr})),n.d(t,"B",(function(){return kt})),n.d(t,"C",(function(){return Mt})),n.d(t,"D",(function(){return Tt})),n.d(t,"G",(function(){return Pn})),n.d(t,"H",(function(){return kn})),n.d(t,"M",(function(){return qt})),n.d(t,"N",(function(){return jt})),n.d(t,"O",(function(){return Cn})),n.d(t,"d",(function(){return Ts})),n.d(t,"L",(function(){return vs})),n.d(t,"P",(function(){return ws}));var r=n("9ff4");let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const _=30;let g;const b=Symbol(""),v=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,m=1<<++p,p<=_?h(this):O(this),this.fn()}finally{p<=_&&d(this),m=1<<--p,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const E=[];function C(){E.push(w),w=!1}function I(){const e=E.pop();w=void 0===e||e}function T(e,t,n){if(w&&g){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;k(r,i)}}function k(e,t){let n=!1;p<=_?u(e)||(e.n|=m,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function j(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&l.push(e)});else switch(void 0!==n&&l.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&l.push(a.get("length")):(l.push(a.get(b)),Object(r["u"])(e)&&l.push(a.get(v)));break;case"delete":Object(r["o"])(e)||(l.push(a.get(b)),Object(r["u"])(e)&&l.push(a.get(v)));break;case"set":Object(r["u"])(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&N(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);N(c(e))}}function N(e,t){const n=Object(r["o"])(e)?e:[...e];for(const r of n)r.computed&&S(r,t);for(const r of n)r.computed||S(r,t)}function S(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P=Object(r["I"])("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r["F"])),L=F(),A=F(!1,!0),x=F(!0),D=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){C();const n=Ne(this)[t].apply(this,e);return I(),n}}),e}function F(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?be:ge:t?_e:me).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);return(Object(r["F"])(i)?R.has(i):P(i))?a:(e||T(n,"get",i),t?a:xe(a)?o&&Object(r["t"])(i)?a:a.value:Object(r["w"])(a)?e?Ee(a):Oe(a):a)}}const U=W(),q=W(!0);function W(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&xe(o)&&!xe(i))return!1;if(!e&&!Te(i)&&(ke(i)||(i=Ne(i),o=Ne(o)),!Object(r["o"])(t)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===Ne(s)&&(a?Object(r["j"])(i,o)&&j(t,"set",n,i,o):j(t,"add",n,i)),c}}function V(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&j(e,"delete",t,void 0,i),s}function H(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&R.has(t)||T(e,"has",t),n}function $(e){return T(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const B={get:L,set:U,deleteProperty:V,has:H,ownKeys:$},z={get:x,set(e,t){return!0},deleteProperty(e,t){return!0}},G=Object(r["h"])({},B,{get:A,set:q}),K=e=>e,Y=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),s=Ne(t);n||(t!==s&&T(i,"get",t),T(i,"get",s));const{has:o}=Y(i),a=r?K:n?Re:Pe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return t||(e!==i&&T(r,"has",e),T(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&T(Ne(e),"iterate",b),Reflect.get(e,"size",e)}function Z(e){e=Ne(e);const t=Ne(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),j(t,"add",e,e)),this}function ee(e,t){t=Ne(t);const n=Ne(this),{has:i,get:s}=Y(n);let o=i.call(n,e);o||(e=Ne(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&j(n,"set",e,t,a):j(n,"add",e,t),this}function te(e){const t=Ne(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&j(t,"delete",e,void 0,s),o}function ne(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&j(e,"clear",void 0,void 0,n),r}function re(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ne(s),a=t?K:e?Re:Pe;return!e&&T(o,"iterate",b),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ie(e,t,n){return function(...i){const s=this["__v_raw"],o=Ne(s),a=Object(r["u"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?K:t?Re:Pe;return!t&&T(o,"iterate",l?v:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return J(this,e)},get size(){return Q(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Q(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ie(i,!1,!1),n[i]=ie(i,!0,!1),t[i]=ie(i,!1,!0),r[i]=ie(i,!0,!0)}),[e,n,t,r]}const[ae,ce,le,ue]=oe();function he(e,t){const n=t?e?ue:le:e?ce:ae;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const de={get:he(!1,!1)},fe={get:he(!1,!0)},pe={get:he(!0,!1)};const me=new WeakMap,_e=new WeakMap,ge=new WeakMap,be=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve(Object(r["P"])(e))}function Oe(e){return Te(e)?e:Ce(e,!1,B,de,me)}function we(e){return Ce(e,!1,G,fe,_e)}function Ee(e){return Ce(e,!0,z,pe,ge)}function Ce(e,t,n,i,s){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ie(e){return Te(e)?Ie(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function je(e){return Ie(e)||Te(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function Se(e){return Object(r["g"])(e,"__v_skip",!0),e}const Pe=e=>Object(r["w"])(e)?Oe(e):e,Re=e=>Object(r["w"])(e)?Ee(e):e;function Le(e){w&&g&&(e=Ne(e),k(e.dep||(e.dep=c())))}function Ae(e,t){e=Ne(e),e.dep&&N(e.dep)}function xe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Fe(e,!1)}function Me(e){return Fe(e,!0)}function Fe(e,t){return xe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:Pe(e)}get value(){return Le(this),this._value}set value(e){e=this.__v_isShallow?e:Ne(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pe(e),Ae(this,e))}}function qe(e){return xe(e)?e.value:e}const We={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return Ie(e)?e:new Proxy(e,We)}class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(e,()=>{this._dirty||(this._dirty=!0,Ae(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Le(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,s;const o=Object(r["q"])(e);o?(i=e,s=r["d"]):(i=e.get,s=e.set);const a=new He(i,s,o||!s,n);return a}function Be(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ge(s,t,n)}return i}function ze(e,t,n,i){if(Object(r["q"])(e)){const s=Be(e,t,n,i);return s&&Object(r["z"])(s)&&s.catch(e=>{Ge(e,t,n)}),s}const s=[];for(let r=0;r<e.length;r++)s.push(ze(e[r],t,n,i));return s}function Ge(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Be(o,null,10,[e,i,s])}Ke(e,n,i,r)}function Ke(e,t,n,r=!0){console.error(e)}let Ye=!1,Je=!1;const Xe=[];let Qe=0;const Ze=[];let et=null,tt=0;const nt=[];let rt=null,it=0;const st=Promise.resolve();let ot=null,at=null;function ct(e){const t=ot||st;return e?t.then(this?e.bind(this):e):t}function lt(e){let t=Qe+1,n=Xe.length;while(t<n){const r=t+n>>>1,i=bt(Xe[r]);i<e?t=r+1:n=r}return t}function ut(e){Xe.length&&Xe.includes(e,Ye&&e.allowRecurse?Qe+1:Qe)||e===at||(null==e.id?Xe.push(e):Xe.splice(lt(e.id),0,e),ht())}function ht(){Ye||Je||(Je=!0,ot=st.then(vt))}function dt(e){const t=Xe.indexOf(e);t>Qe&&Xe.splice(t,1)}function ft(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ht()}function pt(e){ft(e,et,Ze,tt)}function mt(e){ft(e,rt,nt,it)}function _t(e,t=null){if(Ze.length){for(at=t,et=[...new Set(Ze)],Ze.length=0,tt=0;tt<et.length;tt++)et[tt]();et=null,tt=0,at=null,_t(e,t)}}function gt(e){if(_t(),nt.length){const e=[...new Set(nt)];if(nt.length=0,rt)return void rt.push(...e);for(rt=e,rt.sort((e,t)=>bt(e)-bt(t)),it=0;it<rt.length;it++)rt[it]();rt=null,it=0}}const bt=e=>null==e.id?1/0:e.id;function vt(e){Je=!1,Ye=!0,_t(e),Xe.sort((e,t)=>bt(e)-bt(t));r["d"];try{for(Qe=0;Qe<Xe.length;Qe++){const e=Xe[Qe];e&&!1!==e.active&&Be(e,null,14)}}finally{Qe=0,Xe.length=0,gt(e),Ye=!1,ot=null,(Xe.length||Ze.length||nt.length)&&vt(e)}}new Set;new Map;function yt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=i[e]||r["b"];o&&(s=n.map(e=>e.trim())),t&&(s=n.map(r["O"]))}let c;let l=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!l&&o&&(l=i[c=Object(r["N"])(Object(r["l"])(t))]),l&&ze(l,e,6,s);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,ze(u,e,6,s)}}function Ot(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=Ot(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),i.set(e,a),a):(i.set(e,null),null)}function wt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Et=null,Ct=null;function It(e){const t=Et;return Et=e,Ct=e&&e.type.__scopeId||null,t}function Tt(e){Ct=e}function kt(){Ct=null}function jt(e,t=Et,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Rr(-1);const i=It(t),s=e(...n);return It(i),r._d&&Rr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Nt(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:_}=e;let g,b;const v=It(e);try{if(4&n.shapeFlag){const e=s||i;g=Kr(h.call(e,e,d,o,p,f,m)),b=l}else{const e=t;0,g=Kr(e.length>1?e(o,{attrs:l,slots:c,emit:u}):e(o,null)),b=t.props?l:St(l)}}catch(O){kr.length=0,Ge(O,e,1),g=Vr(Ir)}let y=g;if(b&&!1!==_){const e=Object.keys(b),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(r["v"])&&(b=Pt(b,a)),y=Br(y,b))}return n.dirs&&(y=Br(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),g=y,It(v),g}const St=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},Pt=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Rt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Lt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Lt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!wt(l,n))return!0}}return!1}function Lt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!wt(n,s))return!0}return!1}function At({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const xt=e=>e.__isSuspense;function Dt(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):mt(e)}function Mt(e,t){if(ni){let n=ni.provides;const r=ni.parent&&ni.parent.provides;r===n&&(n=ni.provides=Object.create(r)),n[e]=t}else 0}function Ft(e,t,n=!1){const i=ni||Et;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}const Ut={};function qt(e,t,n){return Wt(e,t,n)}function Wt(e,t,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=ni;let l,u,h=!1,d=!1;if(xe(e)?(l=()=>e.value,h=ke(e)):Ie(e)?(l=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(e=>Ie(e)||ke(e)),l=()=>e.map(e=>xe(e)?e.value:Ie(e)?$t(e):Object(r["q"])(e)?Be(e,c,2):void 0)):l=Object(r["q"])(e)?t?()=>Be(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),ze(e,c,3,[f])}:r["d"],t&&i){const e=l;l=()=>$t(e())}let f=e=>{u=g.onStop=()=>{Be(e,c,4)}};if(li)return f=r["d"],t?n&&ze(t,c,3,[l(),d?[]:void 0,f]):l(),r["d"];let p=d?[]:Ut;const m=()=>{if(g.active)if(t){const e=g.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(u&&u(),ze(t,c,3,[e,p===Ut?void 0:p,f]),p=e)}else g.run()};let _;m.allowRecurse=!!t,_="sync"===s?m:"post"===s?()=>_r(m,c&&c.suspense):()=>pt(m);const g=new y(l,_);return t?n?m():p=g.run():"post"===s?_r(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,g)}}function Vt(e,t,n){const i=this.proxy,s=Object(r["E"])(e)?e.includes(".")?Ht(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["q"])(t)?o=t:(o=t.handler,n=t);const a=ni;ii(this);const c=Wt(s,o.bind(i),n);return a?ii(a):si(),c}function Ht(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function $t(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),xe(e))$t(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{$t(e,t)});else if(Object(r["y"])(e))for(const n in e)$t(e[n],t);return e}function Bt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mn(()=>{e.isMounted=!0}),bn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],Gt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},setup(e,{slots:t}){const n=ri(),r=Bt();let i;return()=>{const s=t.default&&en(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Ir){0,o=t,e=!0;break}}const a=Ne(e),{mode:c}=a;if(r.isLeaving)return Xt(o);const l=Qt(o);if(!l)return Xt(o);const u=Jt(l,a,r,n);Zt(l,u);const h=n.subTree,d=h&&Qt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Ir&&(!Mr(l,d)||f)){const e=Jt(d,a,r,n);if(Zt(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Xt(o);"in-out"===c&&l.type!==Ir&&(e.delayLeave=(e,t,n)=>{const i=Yt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},Kt=Gt;function Yt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Jt(e,t,n,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:g,onAfterAppear:b,onAppearCancelled:v}=t,y=String(e.key),O=Yt(n,e),w=(e,t)=>{e&&ze(e,i,9,t)},E=(e,t)=>{const n=t[1];w(e,t),Object(r["o"])(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},C={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=_||c}t._leaveCb&&t._leaveCb(!0);const i=O[y];i&&Mr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=l,r=u,i=h;if(!n.isMounted){if(!s)return;t=g||l,r=b||u,i=v||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?m:p,[t]),t._leaveCb=void 0,O[i]===e&&delete O[i])};O[i]=e,f?E(f,[t,o]):o()},clone(e){return Jt(e,t,n,i)}};return C}function Xt(e){if(rn(e))return e=Br(e),e.children=null,e}function Qt(e){return rn(e)?e.children?e.children[0]:void 0:e}function Zt(e,t){6&e.shapeFlag&&e.component?Zt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function en(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Er?(128&o.patchFlag&&i++,r=r.concat(en(o.children,t,a))):(t||o.type!==Ir)&&r.push(null!=a?Br(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function tn(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const nn=e=>!!e.type.__asyncLoader;const rn=e=>e.type.__isKeepAlive;RegExp,RegExp;function sn(e,t){return Object(r["o"])(e)?e.some(e=>sn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function on(e,t){cn(e,"a",t)}function an(e,t){cn(e,"da",t)}function cn(e,t,n=ni){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(dn(t,r,n),n){let e=n.parent;while(e&&e.parent)rn(e.parent.vnode)&&ln(r,t,n,e),e=e.parent}}function ln(e,t,n,i){const s=dn(t,e,i,!0);vn(()=>{Object(r["L"])(i[t],s)},n)}function un(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function hn(e){return 128&e.shapeFlag?e.ssContent:e}function dn(e,t,n=ni,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;C(),ii(n);const i=ze(t,n,e,r);return si(),I(),i});return r?i.unshift(s):i.push(s),s}}const fn=e=>(t,n=ni)=>(!li||"sp"===e)&&dn(e,t,n),pn=fn("bm"),mn=fn("m"),_n=fn("bu"),gn=fn("u"),bn=fn("bum"),vn=fn("um"),yn=fn("sp"),On=fn("rtg"),wn=fn("rtc");function En(e,t=ni){dn("ec",e,t)}function Cn(e,t){const n=Et;if(null===n)return e;const i=_i(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r["b"]]=t[o];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&$t(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function In(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(C(),ze(c,n,8,[e.el,a,e,t]),I())}}const Tn="components";function kn(e,t){return Nn(Tn,e,!0,t)||e}const jn=Symbol();function Nn(e,t,n=!0,i=!1){const s=Et||ni;if(s){const n=s.type;if(e===Tn){const e=gi(n,!1);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const o=Sn(s[e]||n[e],t)||Sn(s.appContext[e],t);return!o&&i?n:o}}function Sn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}function Pn(e,t,n,i){let s;const o=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const Rn=e=>e?oi(e)?_i(e)||e.proxy:Rn(e.parent):null,Ln=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rn(e.parent),$root:e=>Rn(e.root),$emit:e=>e.emit,$options:e=>qn(e),$forceUpdate:e=>e.f||(e.f=()=>ut(e.update)),$nextTick:e=>e.n||(e.n=ct.bind(e.proxy)),$watch:e=>Vt.bind(e)}),An={get({_:e},t){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["k"])(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&Object(r["k"])(u,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];xn&&(a[t]=0)}}const h=Ln[t];let d,f;return h?("$attrs"===t&&T(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return s!==r["b"]&&Object(r["k"])(s,t)?(s[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Ln,a)||Object(r["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xn=!0;function Dn(e){const t=qn(e),n=e.proxy,i=e.ctx;xn=!1,t.beforeCreate&&Fn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:g,beforeDestroy:b,beforeUnmount:v,destroyed:y,unmounted:O,render:w,renderTracked:E,renderTriggered:C,errorCaptured:I,serverPrefetch:T,expose:k,inheritAttrs:j,components:N,directives:S,filters:P}=t,R=null;if(u&&Mn(u,i,R,e.appContext.config.unwrapInjectedRef),a)for(const A in a){const e=a[A];Object(r["q"])(e)&&(i[A]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["w"])(t)&&(e.data=Oe(t))}if(xn=!0,o)for(const A in o){const e=o[A],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=vi({get:t,set:s});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Un(c[r],i,n,r);if(l){const e=Object(r["q"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Mt(t,e[t])})}function L(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Fn(h,e,"c"),L(pn,d),L(mn,f),L(_n,p),L(gn,m),L(on,_),L(an,g),L(En,I),L(wn,E),L(On,C),L(bn,v),L(vn,O),L(yn,T),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});w&&e.render===r["d"]&&(e.render=w),null!=j&&(e.inheritAttrs=j),N&&(e.components=N),S&&(e.directives=S)}function Mn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Bn(e));for(const s in e){const n=e[s];let o;o=Object(r["w"])(n)?"default"in n?Ft(n.from||s,n.default,!0):Ft(n.from||s):Ft(n),xe(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Fn(e,t,n){ze(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Un(e,t,n,i){const s=i.includes(".")?Ht(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&qt(s,n)}else if(Object(r["q"])(e))qt(s,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>Un(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&qt(s,i,e)}else 0}function qn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Wn(c,e,o,!0)),Wn(c,t,o)):c=t,s.set(t,c),c}function Wn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Wn(e,s,n,!0),i&&i.forEach(t=>Wn(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Vn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Vn={data:Hn,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:zn,created:zn,beforeMount:zn,mounted:zn,beforeUpdate:zn,updated:zn,beforeDestroy:zn,beforeUnmount:zn,destroyed:zn,unmounted:zn,activated:zn,deactivated:zn,errorCaptured:zn,serverPrefetch:zn,components:Gn,directives:Gn,watch:Kn,provide:Hn,inject:$n};function Hn(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function $n(e,t){return Gn(Bn(e),Bn(t))}function Bn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zn(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Kn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=zn(e[r],t[r]);return n}function Yn(e,t,n,i=!1){const s={},o={};Object(r["g"])(o,Fr,1),e.propsDefaults=Object.create(null),Xn(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:we(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Jn(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=Ne(s),[l]=e.propsOptions;let u=!1;if(!(i||a>0)||16&a){let i;Xn(e,t,s,o)&&(u=!0);for(const o in c)t&&(Object(r["k"])(t,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(t,i))||(l?!n||void 0===n[o]&&void 0===n[i]||(s[o]=Qn(l,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["k"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(wt(e.emitsOptions,a))continue;const h=t[a];if(l)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(r["e"])(a);s[t]=Qn(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&j(e,"set","$attrs")}function Xn(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(r["A"])(l))continue;const u=t[l];let h;s&&Object(r["k"])(s,h=Object(r["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:wt(e.emitsOptions,l)||l in i&&u===i[l]||(i[l]=u,c=!0)}if(o){const t=Ne(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Qn(s,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Qn(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(ii(s),i=r[n]=e.call(null,t),si())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Zn(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!Object(r["q"])(e)){const i=e=>{l=!0;const[n,i]=Zn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);er(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(er(t)){const n=o[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=rr(Boolean,i.type),n=rr(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const u=[a,c];return i.set(e,u),u}function er(e){return"$"!==e[0]}function tr(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function nr(e,t){return tr(e)===tr(t)}function rr(e,t){return Object(r["o"])(t)?t.findIndex(t=>nr(t,e)):Object(r["q"])(t)&&nr(t,e)?0:-1}const ir=e=>"_"===e[0]||"$stable"===e,sr=e=>Object(r["o"])(e)?e.map(Kr):[Kr(e)],or=(e,t,n)=>{if(t._n)return t;const r=jt((...e)=>sr(t(...e)),n);return r._c=!1,r},ar=(e,t,n)=>{const i=e._ctx;for(const s in e){if(ir(s))continue;const n=e[s];if(Object(r["q"])(n))t[s]=or(s,n,i);else if(null!=n){0;const e=sr(n);t[s]=()=>e}}},cr=(e,t)=>{const n=sr(t);e.slots.default=()=>n},lr=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ne(t),Object(r["g"])(t,"_",n)):ar(t,e.slots={})}else e.slots={},t&&cr(e,t);Object(r["g"])(e.slots,Fr,1)},ur=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(r["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,ar(t,s)),a=t}else t&&(cr(e,t),a={default:1});if(o)for(const r in s)ir(r)||r in a||delete s[r]};function hr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dr=0;function fr(e,t){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const s=hr(),o=new Set;let a=!1;const c=s.app={_uid:dr++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Oi,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["q"])(e.install)?(o.add(e),e.install(c,...t)):Object(r["q"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,l){if(!a){0;const u=Vr(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,_i(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function pr(e,t,n,i,s=!1){if(Object(r["o"])(e))return void e.forEach((e,o)=>pr(e,t&&(Object(r["o"])(t)?t[o]:t),n,i,s));if(nn(i)&&!s)return;const o=4&i.shapeFlag?_i(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(r["E"])(u)?(h[u]=null,Object(r["k"])(d,u)&&(d[u]=null)):xe(u)&&(u.value=null)),Object(r["q"])(l))Be(l,c,12,[a,h]);else{const t=Object(r["E"])(l),i=xe(l);if(t||i){const c=()=>{if(e.f){const n=t?h[l]:l.value;s?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):t?(h[l]=[o],Object(r["k"])(d,l)&&(d[l]=h[l])):(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,Object(r["k"])(d,l)&&(d[l]=a)):i&&(l.value=a,e.k&&(h[e.k]=a))};a?(c.id=-1,_r(c,n)):c()}else 0}}function mr(){}const _r=Dt;function gr(e){return br(e)}function br(e,t){mr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:_}=e,g=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mr(e,t)&&(r=K(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Cr:b(e,t,n,r);break;case Ir:v(e,t,n,r);break;case Tr:null==e&&O(t,n,r,o);break;case Er:L(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?A(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,J)}null!=u&&i&&pr(u,e&&e.ref,s,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},v=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},O=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},w=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=f(e),i(e,n,r),e=s;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},T=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):S(e,t,i,s,o,a,c)},k=(e,t,n,s,c,l,u,d)=>{let f,p;const{type:_,props:g,shapeFlag:b,transition:v,patchFlag:y,dirs:O}=e;if(e.el&&void 0!==m&&-1===y)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,g&&g.is,g),8&b?h(f,e.children):16&b&&N(e.children,f,null,s,c,l&&"foreignObject"!==_,u,d),O&&In(e,null,s,"created"),g){for(const t in g)"value"===t||Object(r["A"])(t)||o(f,t,null,g[t],l,e.children,s,c,G);"value"in g&&o(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Qr(p,s,e)}j(f,e,e.scopeId,u,s)}O&&In(e,null,s,"beforeMount");const w=(!c||c&&!c.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(f),i(f,t,n),((p=g&&g.onVnodeMounted)||w||O)&&_r(()=>{p&&Qr(p,s,e),w&&v.enter(f),O&&In(e,null,s,"mounted")},c)},j=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let s=0;s<r.length;s++)p(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;j(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Yr(e[l]):Kr(e[l]);g(null,c,t,n,r,i,s,o,a)}},S=(e,t,n,i,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let _;n&&vr(n,!1),(_=m.onVnodeBeforeUpdate)&&Qr(_,n,t,e),f&&In(t,e,n,"beforeUpdate"),n&&vr(n,!0);const g=s&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,l,n,i,g,a):c||U(e,t,l,null,n,i,g,a,!1),u>0){if(16&u)R(l,t,p,m,n,i,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],u=m[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,i,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||R(l,t,p,m,n,i,s);((_=m.onVnodeUpdated)||f)&&_r(()=>{_&&Qr(_,n,t,e),f&&In(t,e,n,"updated")},i)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Er||!Mr(c,l)||70&c.shapeFlag)?d(c.el):n;g(c,l,u,null,r,i,s,o,!0)}},R=(e,t,n,i,s,a,c)=>{if(n!==i){for(const l in i){if(Object(r["A"])(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,s,a,G)}if(n!==r["b"])for(const l in n)Object(r["A"])(l)||l in i||o(e,l,n[l],null,c,t.children,s,a,G);"value"in i&&o(e,"value",n.value,i.value)}},L=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(h,n,r),i(d,n,r),N(t.children,n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&yr(e,t,!0)):U(e,t,n,d,s,o,a,l,u)},A=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):x(t,n,r,i,s,o,c):D(e,t,c)},x=(e,t,n,r,i,s,o)=>{const a=e.component=ti(e,r,i);if(rn(e)&&(a.ctx.renderer=J),ui(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=Vr(Ir);v(null,e,t,n)}}else M(a,e,t,n,i,s,o)},D=(e,t,n)=>{const r=t.component=e.component;if(Rt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,dt(r.update),r.update()}else t.el=e.el,r.vnode=t},M=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:u}=e,h=n;0,vr(e,!1),n?(n.el=u.el,F(e,n,a)):n=u,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Qr(t,l,n,u),vr(e,!0);const f=Nt(e);0;const p=e.subTree;e.subTree=f,g(p,f,d(p.el),K(p),e,s,o),n.el=f.el,null===h&&At(e,f.el),c&&_r(c,s),(t=n.props&&n.props.onVnodeUpdated)&&_r(()=>Qr(t,l,n,u),s)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=nn(t);if(vr(e,!1),u&&Object(r["n"])(u),!f&&(a=l&&l.onVnodeBeforeMount)&&Qr(a,d,t),vr(e,!0),c&&Q){const n=()=>{e.subTree=Nt(e),Q(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Nt(e);0,g(null,r,n,i,e,s,o),t.el=r.el}if(h&&_r(h,s),!f&&(a=l&&l.onVnodeMounted)){const e=t;_r(()=>Qr(a,d,e),s)}(256&t.shapeFlag||d&&nn(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&_r(e.a,s),e.isMounted=!0,t=n=i=null}},l=e.effect=new y(c,()=>ut(u),e.scope),u=e.update=()=>l.run();u.id=e.uid,vr(e,!0),u()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Jn(e,t.props,r,n),ur(e,t.children,n),C(),_t(void 0,e.update),I()},U=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,d,n,r,i,s,o,a,c);if(256&f)return void q(l,d,n,r,i,s,o,a,c)}8&p?(16&u&&G(l,i,s),d!==l&&h(n,d)):16&u?16&p?W(l,d,n,r,i,s,o,a,c):G(l,i,s,!0):(8&u&&h(n,""),16&p&&N(d,n,r,i,s,o,a,c))},q=(e,t,n,i,s,o,a,c,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?Yr(t[f]):Kr(t[f]);g(e[f],r,n,null,s,o,a,c,l)}u>h?G(e,s,o,!0,!1,d):N(t,n,i,s,o,a,c,l,d)},W=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?Yr(t[u]):Kr(t[u]);if(!Mr(r,i))break;g(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?Yr(t[f]):Kr(t[f]);if(!Mr(r,i))break;g(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)g(null,t[u]=l?Yr(t[u]):Kr(t[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)H(e[u],s,o,!0),u++;else{const p=u,m=u,_=new Map;for(u=m;u<=f;u++){const e=t[u]=l?Yr(t[u]):Kr(t[u]);null!=e.key&&_.set(e.key,u)}let b,v=0;const y=f-m+1;let O=!1,w=0;const E=new Array(y);for(u=0;u<y;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(v>=y){H(r,s,o,!0);continue}let i;if(null!=r.key)i=_.get(r.key);else for(b=m;b<=f;b++)if(0===E[b-m]&&Mr(r,t[b])){i=b;break}void 0===i?H(r,s,o,!0):(E[i-m]=u+1,i>=w?w=i:O=!0,g(r,t[i],n,null,s,o,a,c,l),v++)}const C=O?Or(E):r["a"];for(b=C.length-1,u=y-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?g(null,r,n,d,s,o,a,c,l):O&&(b<0||u!==C[b]?V(r,n,d,2):b--)}}},V=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void V(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,J);if(a===Er){i(o,t,n);for(let e=0;e<l.length;e++)V(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Tr)return void w(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),_r(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),l=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,l):l()}else i(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&pr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!nn(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Qr(m,t,e),6&u)z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&In(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,J,r):l&&(s!==Er||h>0&&64&h)?G(l,t,n,!1,!0):(s===Er&&384&h||!i&&16&u)&&G(c,t,n),r&&$(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&_r(()=>{m&&Qr(m,t,e),f&&In(e,null,t,"unmounted")},n)},$=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Er)return void B(n,r);if(t===Tr)return void E(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},B=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},z=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&_r(c,t),_r(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),gt(),t._vnode=e},J={p:g,um:H,m:V,r:$,mt:x,mc:N,pc:U,pbc:P,n:K,o:e};let X,Q;return t&&([X,Q]=t(J)),{render:Y,hydrate:X,createApp:fr(Y,X)}}function vr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function yr(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=Yr(s[r]),t.el=e.el),n||yr(e,t))}}function Or(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const wr=e=>e.__isTeleport;const Er=Symbol(void 0),Cr=Symbol(void 0),Ir=Symbol(void 0),Tr=Symbol(void 0),kr=[];let jr=null;function Nr(e=!1){kr.push(jr=e?null:[])}function Sr(){kr.pop(),jr=kr[kr.length-1]||null}let Pr=1;function Rr(e){Pr+=e}function Lr(e){return e.dynamicChildren=Pr>0?jr||r["a"]:null,Sr(),Pr>0&&jr&&jr.push(e),e}function Ar(e,t,n,r,i,s){return Lr(Wr(e,t,n,r,i,s,!0))}function xr(e,t,n,r,i){return Lr(Vr(e,t,n,r,i,!0))}function Dr(e){return!!e&&!0===e.__v_isVNode}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Fr="__vInternal",Ur=({key:e})=>null!=e?e:null,qr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||xe(e)||Object(r["q"])(e)?{i:Et,r:e,k:t,f:!!n}:e:null;function Wr(e,t=null,n=null,i=0,s=null,o=(e===Er?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ur(t),ref:t&&qr(t),scopeId:Ct,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Jr(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["E"])(n)?8:16),Pr>0&&!a&&jr&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&jr.push(l),l}const Vr=Hr;function Hr(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==jn||(e=Ir),Dr(e)){const r=Br(e,t,!0);return n&&Jr(r,n),Pr>0&&!o&&jr&&(6&r.shapeFlag?jr[jr.indexOf(e)]=r:jr.push(r)),r.patchFlag|=-2,r}if(bi(e)&&(e=e.__vccOpts),t){t=$r(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(je(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:xt(e)?128:wr(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Wr(e,t,n,i,s,a,o,!0)}function $r(e){return e?je(e)||Fr in e?Object(r["h"])({},e):e:null}function Br(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?Xr(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ur(c),ref:t&&t.ref?n&&s?Object(r["o"])(s)?s.concat(qr(t)):[s,qr(t)]:qr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Er?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Br(e.ssContent),ssFallback:e.ssFallback&&Br(e.ssFallback),el:e.el,anchor:e.anchor};return l}function zr(e=" ",t=0){return Vr(Cr,null,e,t)}function Gr(e="",t=!1){return t?(Nr(),xr(Ir,null,e)):Vr(Ir,null,e)}function Kr(e){return null==e||"boolean"===typeof e?Vr(Ir):Object(r["o"])(e)?Vr(Er,null,e.slice()):"object"===typeof e?Yr(e):Vr(Cr,null,String(e))}function Yr(e){return null===e.el||e.memo?e:Br(e)}function Jr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Jr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Fr in t?3===r&&Et&&(1===Et.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Et}}else Object(r["q"])(t)?(t={default:t,_ctx:Et},n=32):(t=String(t),64&i?(n=16,t=[zr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],s=i[e];!s||n===s||Object(r["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function Qr(e,t,n,r=null){ze(e,t,7,[n,r])}const Zr=hr();let ei=0;function ti(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Zr,a={uid:ei++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zn(i,o),emitsOptions:Ot(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=yt.bind(null,a),e.ce&&e.ce(a),a}let ni=null;const ri=()=>ni||Et,ii=e=>{ni=e,e.scope.on()},si=()=>{ni&&ni.scope.off(),ni=null};function oi(e){return 4&e.vnode.shapeFlag}let ai,ci,li=!1;function ui(e,t=!1){li=t;const{props:n,children:r}=e.vnode,i=oi(e);Yn(e,n,i,t),lr(e,r);const s=i?hi(e,t):void 0;return li=!1,s}function hi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Se(new Proxy(e.ctx,An));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?mi(e):null;ii(e),C();const s=Be(i,e,0,[e.props,n]);if(I(),si(),Object(r["z"])(s)){if(s.then(si,si),t)return s.then(n=>{di(e,n,t)}).catch(t=>{Ge(t,e,0)});e.asyncDep=s}else di(e,s,t)}else fi(e,t)}function di(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Ve(t)),fi(e,n)}function fi(e,t,n){const i=e.type;if(!e.render){if(!t&&ai&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=ai(t,c)}}e.render=i.render||r["d"],ci&&ci(e)}ii(e),C(),Dn(e),I(),si()}function pi(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function mi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=pi(e))},slots:e.slots,emit:e.emit,expose:t}}function _i(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ve(Se(e.exposed)),{get(t,n){return n in t?t[n]:n in Ln?Ln[n](e):void 0}}))}function gi(e,t=!0){return Object(r["q"])(e)?e.displayName||e.name:e.name||t&&e.__name}function bi(e){return Object(r["q"])(e)&&"__vccOpts"in e}const vi=(e,t)=>$e(e,t,li);function yi(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?Dr(t)?Vr(e,null,[t]):Vr(e,t):Vr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Dr(n)&&(n=[n]),Vr(e,t,n))}Symbol("");const Oi="3.2.37",wi="http://www.w3.org/2000/svg",Ei="undefined"!==typeof document?document:null,Ci=Ei&&Ei.createElement("template"),Ii={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Ei.createElementNS(wi,e):Ei.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ei.createTextNode(e),createComment:e=>Ei.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ei.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Ci.innerHTML=r?`<svg>${e}</svg>`:e;const i=Ci.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ti(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ki(e,t,n){const i=e.style,s=Object(r["E"])(n);if(n&&!s){for(const e in n)Ni(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&Ni(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const ji=/\s*!important$/;function Ni(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Ni(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Ri(e,t);ji.test(n)?e.setProperty(Object(r["l"])(i),n.replace(ji,""),"important"):e[i]=n}}const Si=["Webkit","Moz","ms"],Pi={};function Ri(e,t){const n=Pi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Pi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Si.length;r++){const n=Si[r]+i;if(n in e)return Pi[t]=n}return t}const Li="http://www.w3.org/1999/xlink";function Ai(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xi(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}const[Di,Mi]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Fi=0;const Ui=Promise.resolve(),qi=()=>{Fi=0},Wi=()=>Fi||(Ui.then(qi),Fi=Di());function Vi(e,t,n,r){e.addEventListener(t,n,r)}function Hi(e,t,n,r){e.removeEventListener(t,n,r)}function $i(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=zi(t);if(r){const o=s[t]=Gi(r,i);Vi(e,n,o,a)}else o&&(Hi(e,n,o,a),s[t]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function zi(e){let t;if(Bi.test(e)){let n;t={};while(n=e.match(Bi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Gi(e,t){const n=e=>{const r=e.timeStamp||Di();(Mi||r>=n.attached-1)&&ze(Ki(e,n.value),t,5,[e])};return n.value=e,n.attached=Wi(),n}function Ki(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Yi=/^on[a-z]/,Ji=(e,t,n,i,s=!1,o,a,c,l)=>{"class"===t?Ti(e,i,s):"style"===t?ki(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||$i(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Xi(e,t,i,s))?xi(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ai(e,t,i,s))};function Xi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Yi.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Yi.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Qi="transition",Zi="animation",es=(e,{slots:t})=>yi(Kt,is(e),t);es.displayName="Transition";const ts={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ns=(es.props=Object(r["h"])({},Kt.props,ts),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),rs=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function is(e){const t={};for(const r in e)r in ts||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=ss(s),_=m&&m[0],g=m&&m[1],{onBeforeEnter:b,onEnter:v,onEnterCancelled:y,onLeave:O,onLeaveCancelled:w,onBeforeAppear:E=b,onAppear:C=v,onAppearCancelled:I=y}=t,T=(e,t,n)=>{cs(e,t?h:c),cs(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,cs(e,d),cs(e,p),cs(e,f),t&&t()},j=e=>(t,n)=>{const r=e?C:v,s=()=>T(t,e,n);ns(r,[t,s]),ls(()=>{cs(t,e?l:o),as(t,e?h:c),rs(r)||hs(t,i,_,s)})};return Object(r["h"])(t,{onBeforeEnter(e){ns(b,[e]),as(e,o),as(e,a)},onBeforeAppear(e){ns(E,[e]),as(e,l),as(e,u)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);as(e,d),ms(),as(e,f),ls(()=>{e._isLeaving&&(cs(e,d),as(e,p),rs(O)||hs(e,i,g,n))}),ns(O,[e,n])},onEnterCancelled(e){T(e,!1),ns(y,[e])},onAppearCancelled(e){T(e,!0),ns(I,[e])},onLeaveCancelled(e){k(e),ns(w,[e])}})}function ss(e){if(null==e)return null;if(Object(r["w"])(e))return[os(e.enter),os(e.leave)];{const t=os(e);return[t,t]}}function os(e){const t=Object(r["O"])(e);return t}function as(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function cs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ls(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let us=0;function hs(e,t,n,r){const i=e._endId=++us,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ds(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function ds(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Qi+"Delay"),s=r(Qi+"Duration"),o=fs(i,s),a=r(Zi+"Delay"),c=r(Zi+"Duration"),l=fs(a,c);let u=null,h=0,d=0;t===Qi?o>0&&(u=Qi,h=o,d=s.length):t===Zi?l>0&&(u=Zi,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Qi:Zi:null,d=u?u===Qi?s.length:c.length:0);const f=u===Qi&&/\b(transform|all)(,|$)/.test(n[Qi+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function fs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>ps(t)+ps(e[n])))}function ps(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ms(){return document.body.offsetHeight}new WeakMap,new WeakMap;const _s=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function gs(e){e.target.composing=!0}function bs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vs={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=_s(s);const o=i||s.props&&"number"===s.props.type;Vi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Object(r["O"])(i)),e._assign(i)}),n&&Vi(e,"change",()=>{e.value=e.value.trim()}),t||(Vi(e,"compositionstart",gs),Vi(e,"compositionend",bs),Vi(e,"change",bs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=_s(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ys=["ctrl","shift","alt","meta"],Os={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ys.some(n=>e[n+"Key"]&&!t.includes(n))},ws=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Os[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Es=Object(r["h"])({patchProp:Ji},Ii);let Cs;function Is(){return Cs||(Cs=gr(Es))}const Ts=(...e)=>{const t=Is().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ks(e);if(!i)return;const s=t._component;Object(r["q"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ks(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Q})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return Y})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return N})),n.d(t,"w",(function(){return W})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return V})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return g})),n.d(t,"C",(function(){return D})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return q})),n.d(t,"G",(function(){return v})),n.d(t,"H",(function(){return y})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return l})),n.d(t,"L",(function(){return P})),n.d(t,"M",(function(){return O})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return B}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||W(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",_=r(p),g=r(m);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=q(e),r=q(t),n||r)return e===t;if(n=A(e),r=A(t),n||r)return!(!n||!r)&&b(e,t);if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>v(e,t))}const O=e=>U(e)?e:null==e?"":A(e)||W(e)&&(e.toString===H||!F(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!W(t)||A(t)||z(t)?t:String(t),E={},C=[],I=()=>{},T=()=>!1,k=/^on[^a-z]/,j=e=>k.test(e),N=e=>e.startsWith("onUpdate:"),S=Object.assign,P=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,L=(e,t)=>R.call(e,t),A=Array.isArray,x=e=>"[object Map]"===$(e),D=e=>"[object Set]"===$(e),M=e=>"[object Date]"===$(e),F=e=>"function"===typeof e,U=e=>"string"===typeof e,q=e=>"symbol"===typeof e,W=e=>null!==e&&"object"===typeof e,V=e=>W(e)&&F(e.then)&&F(e.catch),H=Object.prototype.toString,$=e=>H.call(e),B=e=>$(e).slice(8,-1),z=e=>"[object Object]"===$(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Q=J(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=J(e=>e.replace(Z,"-$1").toLowerCase()),te=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=J(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ct})),n.d(t,"b",(function(){return ur})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return lt})),n.d(t,"e",(function(){return ht}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(e,...t){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function p(e,...t){return _(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function g(e,t,...n){if(!e)throw _(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function v(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function O(e){v(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(v(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["o"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["u"])()||"connection"in navigator))||navigator.onLine}function j(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,v(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["y"])()||Object(r["A"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){v(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,i,s={}){return D(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["E"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r["c"])throw s;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const s=await x(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?S(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=Object(r["r"])(e),i=await n.getIdToken(t),s=z(i);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:H(B(s.auth_time)),issuedAtTime:H(B(s.iat)),expirationTime:H(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function z(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["h"])(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function G(e){const t=z(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,V(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=Object(r["r"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},async()=>{const n=Object(r["E"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=F(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:O,providerData:w,stsTokenManager:E}=t;g(v&&E,e,"internal-error");const C=re.fromJSON(this.name,E);g("string"===typeof v,e,"internal-error"),ie(u,e.name),ie(h,e.name),g("boolean"===typeof y,e,"internal-error"),g("boolean"===typeof O,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(_,e.name),ie(b,e.name);const I=new se({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:O,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:_,lastLoginAt:b});return w&&Array.isArray(w)&&(I.providerData=w.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(O(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||O(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["s"])()){return/firefox\//i.test(e)}function de(e=Object(r["s"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["s"])()){return/crios\//i.test(e)}function pe(e=Object(r["s"])()){return/iemobile/i.test(e)}function me(e=Object(r["s"])()){return/android/i.test(e)}function _e(e=Object(r["s"])()){return/blackberry/i.test(e)}function ge(e=Object(r["s"])()){return/webos/i.test(e)}function be(e=Object(r["s"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=Object(r["s"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["w"])()&&10===document.documentMode}function Oe(e=Object(r["s"])()){return be(e)||me(e)||ge(e)||_e(e)||/windows phone/i.test(e)||pe(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(r["s"])());break;case"Worker":n=`${ue(Object(r["s"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["r"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Te(e){return Object(r["r"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["m"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Re(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends je{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Le(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Le(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="http://localhost";class De extends je{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new De(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ae(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ae(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}buildRequest(){const e={requestUri:xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["E"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function Fe(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function Ue(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const qe={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),qe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends je{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ve({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ve({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ve({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $e(e){const t=Object(r["F"])(Object(r["q"])(e))["link"],n=t?Object(r["F"])(Object(r["q"])(t))["deep_link_id"]:null,i=Object(r["F"])(Object(r["q"])(e))["deep_link_id"],s=i?Object(r["F"])(Object(r["q"])(i))["link"]:null;return s||i||n||t||e}class Be{constructor(e){var t,n,i,s,o,a;const c=Object(r["F"])(Object(r["q"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=He(null!==(i=c["mode"])&&void 0!==i?i:null);g(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=$e(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Le._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return g(n,"argument-error"),Le._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ke{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ye.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ke{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ke{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t){return M(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=tt(n),o=new et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await K(e,rt(i,s,t,e),n);g(r.idToken,i,"internal-error");const o=z(r.idToken);g(o,i,"internal-error");const{sub:a}=o;return g(e.uid===a,i,"user-mismatch"),et._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await rt(e,r,t),s=await et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function at(e,t){return ot(Te(e),t)}async function ct(e,t,n){const r=Te(e),i=await Ze(r,{returnSecureToken:!0,email:t,password:n}),s=await et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function lt(e,t,n){return at(Object(r["r"])(e),ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t,n,i){return Object(r["r"])(e).onAuthStateChanged(t,n,i)}function ht(e){return Object(r["r"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function ft(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){const e=Object(r["s"])();return de(e)||be(e)}const gt=1e3,bt=10;class vt extends mt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_t()&&we(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vt.type="LOCAL";const yt=vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends mt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ot.type="SESSION";const wt=Ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Et(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=It("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function jt(e){kt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof kt()["WorkerGlobalScope"]&&"function"===typeof kt()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Pt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Rt(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebaseLocalStorageDb",At=1,xt="firebaseLocalStorage",Dt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(e,t){return e.transaction([xt],t?"readwrite":"readonly").objectStore(xt)}function Ut(){const e=indexedDB.deleteDatabase(Lt);return new Mt(e).toPromise()}function qt(){const e=indexedDB.open(Lt,At);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(xt,{keyPath:Dt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(xt)?t(n):(n.close(),await Ut(),t(await qt()))})})}async function Wt(e,t,n){const r=Ft(e,!0).put({[Dt]:t,value:n});return new Mt(r).toPromise()}async function Vt(e,t){const n=Ft(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function Ht(e,t){const n=Ft(e,!0).delete(t);return new Mt(n).toPromise()}const $t=800,Bt=3;class zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Rt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Pt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Wt(e,pt,"1"),await Ht(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Vt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ht(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ft(e,!1).getAll();return new Mt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zt.type="LOCAL";const Gt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function Yt(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Xt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Jt().appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="recaptcha";async function en(e,t,n){var r;const i=await n.verify();try{let s;if(g("string"===typeof i,e,"argument-error"),g(n.type===Zt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){g("enroll"===t.type,e,"internal-error");const n=await dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;g(n,e,"missing-multi-factor-info");const o=await Kt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return en(this.auth,e,Object(r["r"])(t))}static credential(e,t){return Ve._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ve._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t){return t?O(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class rn extends je{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ae(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sn(e){return ot(e.auth,new rn(e),e.bypassAuthState)}function on(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),st(n,new rn(e),e.bypassAuthState)}async function an(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new N(2e3,1e4);class un extends cn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const e=It();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,ln.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class fn extends cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=gn(t),r=_n(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(e,t){dn.set(e._key(),t)}function _n(e){return O(e._redirectPersistence)}function gn(e){return ce(hn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,n=!1){const r=Te(e),i=nn(r,t),s=new fn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!En(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function wn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function En(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cn(e);for(const r of t)try{if(jn(r))return}catch(n){}f(e,"unauthorized-domain")}function jn(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Tn.test(n))return!1;if(In.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new N(3e4,6e4);function Sn(){const e=kt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Pn(e){return new Promise((t,n)=>{var r,i,s;function o(){Sn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(p(e,"network-request-failed"))},timeout:Nn.get()})}if(null===(i=null===(r=kt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=kt().gapi)||void 0===s?void 0:s.load)){const t=Qt("iframefcb");return kt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Xt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Rn=null,e})}let Rn=null;function Ln(e){return Rn=Rn||Pn(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new N(5e3,15e3),xn="__/auth/iframe",Dn="emulator/auth/iframe",Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Un(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,Dn):`https://${e.config.authDomain}/${xn}`,s={apiKey:t.apiKey,appName:e.name,v:i["a"]},o=Fn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["E"])(s).slice(1)}`}async function qn(e){const t=await Ln(e),n=kt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Un(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=kt().setTimeout(()=>{r(i)},An.get());function o(){kt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,Hn=600,$n="_blank",Bn="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=Vn,s=Hn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Wn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=Object(r["s"])().toLowerCase();n&&(c=fe(u)?$n:n),he(u)&&(t=t||Bn,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ve(u)&&"_self"!==c)return Kn(t||"",c),new zn(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zn(d)}function Kn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="__/auth/handler",Jn="emulator/auth/handler";function Xn(e,t,n,s,o,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["v"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Qn(e)}?${Object(r["E"])(l).slice(1)}`}function Qn({config:e}){return e.emulator?S(e,Jn):`https://${e.authDomain}/${Yn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=bn,this._overrideRedirectResult=mn}async _openPopup(e,t,n,r){var i;v(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Xn(e,t,n,C(),r);return Gn(e,s,It())}async _openRedirect(e,t,n,r){return await this._originValidation(e),jt(Xn(e,t,n,C(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await qn(e),n=new yn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zn,{type:Zn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||de()||be()}}const tr=er;class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,n){return ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Yt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ir{constructor(){}static assertion(e){return rr._fromCredential(e)}}ir.FACTOR_ID="phone";var sr="@firebase/auth",or="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{g(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Ie(t,r,i);return E(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new ar(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(sr,or,cr(e)),Object(i["f"])(sr,or,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():w(e,{popupRedirectResolver:tr,persistence:[Gt,yt,wt]})}lr("Browser")},f83d:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return w})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return E})),n.d(t,"r",(function(){return a})),n.d(t,"s",(function(){return N})),n.d(t,"t",(function(){return p}));
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const r="undefined"!==typeof window;const i=/\{([0-9a-zA-Z]+)\}/g;function s(e,...t){return 1===t.length&&I(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(i,(e,n)=>t.hasOwnProperty(n)?t[n]:"")}const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>o?Symbol(e):e,c=(e,t,n)=>l({l:e,k:t,s:n}),l=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),u=e=>"number"===typeof e&&isFinite(e),h=e=>"[object Date]"===k(e),d=e=>"[object RegExp]"===k(e),f=e=>j(e)&&0===Object.keys(e).length;function p(e,t){"undefined"!==typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const m=Object.assign;let _;const g=()=>_||(_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{});function b(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const v=Object.prototype.hasOwnProperty;function y(e,t){return v.call(e,t)}const O=Array.isArray,w=e=>"function"===typeof e,E=e=>"string"===typeof e,C=e=>"boolean"===typeof e,I=e=>null!==e&&"object"===typeof e,T=Object.prototype.toString,k=e=>T.call(e),j=e=>"[object Object]"===k(e),N=e=>null==e?"":O(e)||j(e)&&e.toString===T?JSON.stringify(e,null,2):String(e)}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-vendors.4dc5c428.js.map