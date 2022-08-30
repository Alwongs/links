(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return C})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return d})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return E})),n.d(t,"r",(function(){return j})),n.d(t,"s",(function(){return g}));
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==u)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function g(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
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
const v="FirebaseError";class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=v,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?_(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new b(r,s,n);return a}}function _(e,t){return e.replace(w,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const w=/\{\$([^}]+)}/g;
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
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(k(n)&&k(o)){if(!I(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(e){return null!==e&&"object"===typeof e}
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
function E(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function S(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function C(e,t){const n=new T(e,t);return n.subscribe.bind(n)}class T{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=R(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=A),void 0===r.error&&(r.error=A),void 0===r.complete&&(r.complete=A);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function A(){}
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
function P(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.9.3";
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
Object(r["f"])(i,o,"app")},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";var s=n("5134");class a{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(a){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(a){}i=e},now(){return Object(s["a"])()}},t&&t.on(o,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function c(e,t){const n=e,o=Object(r["b"])(),s=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!s||!o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new a(n,s):null,r=o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(i,e,t)}},5134:function(e,t,n){"use strict";(function(e){let r,i;function o(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function s(){return o()?i.now():Date.now()}n.d(t,"a",(function(){return s}))}).call(this,n("c8ba"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function d(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["w"])({data:t}),e.strict&&_(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var l=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;v(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;b(e,r,i,l)})),r.forEachGetter((function(t,n){var r=s+n;y(e,r,t,l)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function v(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function b(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function y(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function _(e){Object(r["E"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var I="vuex bindings",k="vuex:mutations",E="vuex:actions",j="vuex",S=0;function C(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[I]},(function(n){n.addTimelineLayer({id:k,label:"Vuex Mutations",color:T}),n.addTimelineLayer({id:E,label:"Vuex Actions",color:T}),n.addInspector({id:j,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===j)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[x(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId;g(t,r),n.state=M(U(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(j),n.sendInspectorState(j),n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=S++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:E,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var T=8702998,R=6710886,A=16777215,P={label:"namespaced",textColor:A,backgroundColor:R};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function x(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[P]:[],children:Object.keys(e._children).map((function(n){return x(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[P]:[]}),Object.keys(t._children).forEach((function(i){L(e,t._children[i],n,r+i+"/")}))}function M(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=D(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:F((function(){return o[e]}))}}))}return i}function D(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=F((function(){return e[n]}))}else t[n]=F((function(){return e[n]}))})),t}function U(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function F(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){s(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,B);var $=function(e){this.register([],e,!1)};function q(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");q(e.concat(r),t.getChild(r),n.modules[r])}}$.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},$.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},$.prototype.update=function(e){q([],this.root,e)},$.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new V(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},$.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},$.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},z={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},W={getters:H,mutations:H,actions:z};function G(e,t){Object.keys(W).forEach((function(n){if(t[n]){var r=W[n];s(t[n],(function(t,i){l(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function J(e){return new X(e)}var X=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new $(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return u.call(s,e,t,n)},this.strict=i;var d=this._modules.root.state;p(this,d,[],this._modules.root),f(this,d),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};X.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&C(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},l=this._mutations[o];l?(this._withCommit((function(){l.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},X.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(e,t){return d(e,this._subscribers,t)},X.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return d(n,this._actionSubscribers,t)},X.prototype.watch=function(e,t,n){var i=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["E"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},X.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},X.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},X.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),h(this)},X.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},X.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},X.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(X.prototype,Q);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=te(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=te(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||te(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=te(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Y(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return me})),n.d(t,"b",(function(){return de})),n.d(t,"c",(function(){return ue})),n.d(t,"d",(function(){return ve})),n.d(t,"e",(function(){return ge})),n.d(t,"f",(function(){return be}));var r=n("22e5"),i=n("e691"),o=n("1fd5");const s=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(O(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&d.set(t,e)}).catch(()=>{}),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});h.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(I(this),t),O(d.get(this))}:function(...t){return O(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return f.set(r,t.sort?t.sort():[t]),O(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,b):e)}function O(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=O(s);return r&&s.addEventListener("upgradeneeded",e=>{r(O(s.result),e.oldVersion,e.newVersion,O(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const E=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],S=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=j.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return S.set(t,o),o}y(e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)}));
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
class T{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",P="0.7.31",N=new i["b"]("@firebase/app"),x="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",D="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.9.3",oe="[DEFAULT]",se={[A]:"fire-core",[x]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[D]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o["b"]("app","Firebase",he);
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
 */const me=ie;function ge(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw fe.create("bad-app-name",{appName:String(i)});const s=ae.get(i);if(s){if(Object(o["g"])(e,s.options)&&Object(o["g"])(n,s.config))return s;throw fe.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(i,c),c}function ve(e=oe){const t=ae.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function be(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}ue(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
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
const ye="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Oe=null;function Ie(){return Oe||(Oe=k(ye,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})})),Oe}async function ke(e){var t;try{const t=await Ie();return t.transaction(we).objectStore(we).get(je(e))}catch(n){if(n instanceof o["c"])N.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Ee(e,t){var n;try{const n=await Ie(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,je(e)),r.done}catch(r){if(r instanceof o["c"])N.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});N.warn(e.message)}}}function je(e){return`${e.name}!${e.options.appId}`}
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
 */const Se=1024,Ce=2592e6;class Te{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),r=Object(o["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=Se){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["n"])()&&Object(o["s"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return Object(o["e"])(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function xe(e){ue(new r["a"]("platform-logger",e=>new T(e),"PRIVATE")),ue(new r["a"]("heartbeat",e=>new Te(e),"PRIVATE")),be(A,P,e),be(A,P,"esm2017"),be("fire-js","")}xe("")},6605:function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return U}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const s=Object.assign;function a(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const c=()=>{},l=Array.isArray;const u=/\/$/,d=e=>e.replace(u,"");function h(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function f(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function p(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&g(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?y(e,t):l(t)?y(t,e):e===t}function y(e,t){return l(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var w,O;(function(e){e["pop"]="pop",e["push"]="push"})(w||(w={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(O||(O={}));function I(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const k=/^[^#]+#/;function E(e,t){return e.replace(k,"#")+t}function j(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const S=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=j(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function T(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function A(e,t){R.set(e,t)}function P(e){const t=R.get(e);return R.delete(e),t}let N=()=>location.protocol+"//"+location.host;function x(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),p(n,"")}const s=p(n,e);return s+r+i}function L(e,t,n,r){let i=[],o=[],a=null;const c=({state:o})=>{const s=x(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=s,t.value=o,a&&a===c)return void(a=null);u=l?o.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:w.pop,direction:u?u>0?O.forward:O.back:O.unknown})})};function l(){a=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(s({},e.state,{scroll:S()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:u,destroy:h}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?S():null}}function D(e){const{history:t,location:n}=window,r={value:x(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:N()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function a(e,n){const a=s({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,a,!0),r.value=e}function c(e,n){const a=s({},i.value,t.state,{forward:e,scroll:S()});o(a.current,a,!0);const c=s({},M(r.value,e,null),{position:a.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:a}}function U(e){e=I(e);const t=D(e),n=L(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=s({location:"",base:e,go:r,createHref:E.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function F(e){return"string"===typeof e||e&&"object"===typeof e}function V(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function H(e,t){return s(new Error,{type:e,[$]:!0},t)}function z(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}const W="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=s({},G,t),r=[];let i=n.start?"^":"";const o=[];for(const s of e){const e=s.length?[]:[90];n.strict&&!s.length&&(i+="/");for(let t=0;t<s.length;t++){const r=s[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(K,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;o.push({name:e,repeatable:n,optional:c});const u=l||W;if(u!==W){a+=10;try{new RegExp(`(${u})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+d.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(h=c&&s.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),i+=h,a+=20,c&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:a,score:r,keys:o,parse:c,stringify:u}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=X(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Y(r))return 1;if(Y(i))return-1}return i.length-r.length}function Y(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Z={type:0,value:""},ee=/[a-zA-Z0-9_]/;function te(e){if(!e)return[[]];if("/"===e)return[[Z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function d(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),s()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:ee.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),s(),i}function ne(e,t,n){const r=J(te(e.path),n);const i=s(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function re(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,l=oe(e);l.aliasOf=r&&r.record;const d=le(t,e),h=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(s({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of h){const{path:s}=t;if(n&&"/"!==s[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(s&&r+s)}if(f=ne(t,n,d),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ae(f)&&a(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,u(f)}return p?()=>{a(p)}:c}function a(e){if(V(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function l(){return n}function u(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ue(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ae(e)&&r.set(e.record.name,e)}function d(e,t){let i,o,a,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw H(1,{location:e});0,a=i.record.name,c=s(ie(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params&&ie(e.params,i.keys.map(e=>e.name))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(c=i.parse(o),a=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw H(1,{location:e,currentLocation:t});a=i.record.name,c=s({},t.params,e.params),o=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:a,path:o,params:c,matched:l,meta:ce(l)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:d,removeRoute:a,getRoutes:l,getRecordMatcher:i}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:se(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function se(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce((e,t)=>s(e,t.meta),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ue(e,t){return t.children.some(t=>t===e||ue(e,t))}const de=/#/g,he=/&/g,fe=/\//g,pe=/=/g,me=/\?/g,ge=/\+/g,ve=/%5B/g,be=/%5D/g,ye=/%5E/g,_e=/%60/g,we=/%7B/g,Oe=/%7C/g,Ie=/%7D/g,ke=/%20/g;function Ee(e){return encodeURI(""+e).replace(Oe,"|").replace(ve,"[").replace(be,"]")}function je(e){return Ee(e).replace(we,"{").replace(Ie,"}").replace(ye,"^")}function Se(e){return Ee(e).replace(ge,"%2B").replace(ke,"+").replace(de,"%23").replace(he,"%26").replace(_e,"`").replace(we,"{").replace(Ie,"}").replace(ye,"^")}function Ce(e){return Se(e).replace(pe,"%3D")}function Te(e){return Ee(e).replace(de,"%23").replace(me,"%3F")}function Re(e){return null==e?"":Te(e).replace(fe,"%2F")}function Ae(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ge," "),n=e.indexOf("="),o=Ae(n<0?e:e.slice(0,n)),s=n<0?null:Ae(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Ce(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map(e=>e&&Se(e)):[r&&Se(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function xe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}const Le=Symbol(""),Me=Symbol(""),De=Symbol(""),Ue=Symbol(""),Fe=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):F(e)?a(H(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function $e(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(qe(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(Be(c,n,r,s,e))}else{let c=a();0,i.push(()=>c.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&Be(l,n,r,s,e)()}))}}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Object(r["m"])(De),n=Object(r["m"])(Ue),i=Object(r["b"])(()=>t.resolve(Object(r["C"])(e.to))),o=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(g.bind(null,r));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(r)===a&&o[o.length-1].path!==a?o.findIndex(g.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>o.value>-1&&Ke(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params));function l(n={}){return Ge(n)?t[Object(r["C"])(e.replace)?"replace":"push"](Object(r["C"])(e.to)).catch(c):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const ze=Object(r["j"])({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=Object(r["w"])(He(e)),{options:i}=Object(r["m"])(De),o=Object(r["b"])(()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["l"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=ze;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Object(r["m"])(Fe),o=Object(r["b"])(()=>e.route||i.value),a=Object(r["m"])(Me,0),c=Object(r["b"])(()=>{let e=Object(r["C"])(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e}),l=Object(r["b"])(()=>o.value.matched[c.value]);Object(r["u"])(Me,Object(r["b"])(()=>c.value+1)),Object(r["u"])(Le,l),Object(r["u"])(Fe,o);const u=Object(r["x"])();return Object(r["E"])(()=>[u.value,l.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&g(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,a=e.name,c=l.value,d=c&&c.components[a];if(!d)return Ye(n.default,{Component:d,route:i});const h=c.props[a],f=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(c.instances[a]=null)},m=Object(r["l"])(d,s({},f,t,{onVnodeUnmounted:p,ref:u}));return Ye(n.default,{Component:m,route:i})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Qe;function et(e){const t=re(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Ne,u=e.history;const d=Ve(),p=Ve(),g=Ve(),v=Object(r["A"])(B);let b=B;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=a.bind(null,e=>""+e),_=a.bind(null,Re),O=a.bind(null,Ae);function I(e,n){let r,i;return V(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map(e=>e.record)}function j(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=s({},r||v.value),"string"===typeof e){const i=h(n,e,r.path),o=t.resolve({path:i.path},r),a=u.createHref(i.fullPath);return s(i,o,{params:O(o.params),hash:Ae(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=s({},e,{path:h(n,e.path,r.path).path});else{const t=s({},e.params);for(const e in t)null==t[e]&&delete t[e];i=s({},e,{params:_(e.params)}),r.params=_(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=y(O(a.params));const l=f(o,s({},e,{hash:je(c),path:a.path})),d=u.createHref(l);return s({fullPath:l,hash:c,query:o===Ne?xe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:d})}function N(e){return"string"===typeof e?h(n,e,v.value.path):s({},e)}function x(e,t){if(b!==e)return H(8,{from:t,to:e})}function L(e){return U(e)}function M(e){return L(s(N(e),{replace:!0}))}function D(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),s({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=b=R(e),r=v.value,i=e.state,a=e.force,c=!0===e.replace,l=D(n);if(l)return U(s(N(l),{state:"object"===typeof l?s({},i,l.state):i,force:a,replace:c}),t||n);const u=n;let d;return u.redirectedFrom=t,!a&&m(o,r,n)&&(d=H(16,{to:u,from:r}),te(r,r,!0,!1)),(d?Promise.resolve(d):$(u,r)).catch(e=>z(e)?z(e,2)?e:ee(e):Y(e,u,r)).then(e=>{if(e){if(z(e,2))return U(s({replace:c},N(e.to),{state:"object"===typeof e.to?s({},i,e.to.state):i,force:a}),t||u)}else e=W(u,r,!0,c,i);return q(u,r,e),e})}function F(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,o]=nt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(Be(r,e,t))});const s=F.bind(null,e,t);return n.push(s),tt(n).then(()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(s),tt(n)}).then(()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Be(r,e,t))});return n.push(s),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(o,"beforeRouteEnter",e,t),n.push(s),tt(n))).then(()=>{n=[];for(const r of p.list())n.push(Be(r,e,t));return n.push(s),tt(n)}).catch(e=>z(e,8)?e:Promise.reject(e))}function q(e,t,n){for(const r of g.list())r(e,t,n)}function W(e,t,n,r,o){const a=x(e,t);if(a)return a;const c=t===B,l=i?history.state:{};n&&(r||c?u.replace(e.fullPath,s({scroll:c&&l&&l.scroll},o)):u.push(e.fullPath,o)),v.value=e,te(e,t,n,c),ee()}let G;function K(){G||(G=u.listen((e,t,n)=>{if(!se.listening)return;const r=R(e),o=D(r);if(o)return void U(s(o,{replace:!0}),r).catch(c);b=r;const a=v.value;i&&A(T(a.fullPath,n.delta),S()),$(r,a).catch(e=>z(e,12)?e:z(e,2)?(U(e.to,r).then(e=>{z(e,20)&&!n.delta&&n.type===w.pop&&u.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&u.go(-n.delta,!1),Y(e,r,a))).then(e=>{e=e||W(r,a,!1),e&&(n.delta&&!z(e,8)?u.go(-n.delta,!1):n.type===w.pop&&z(e,20)&&u.go(-1,!1)),q(r,a,e)}).catch(c)}))}let J,X=Ve(),Q=Ve();function Y(e,t,n){ee(e);const r=Q.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function Z(){return J&&v.value!==B?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ee(e){return J||(J=!e,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset()),e}function te(t,n,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&P(T(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return Object(r["n"])().then(()=>a(t,n,c)).then(e=>e&&C(e)).catch(e=>Y(e,t,n))}const ne=e=>u.go(e);let ie;const oe=new Set,se={currentRoute:v,listening:!0,addRoute:I,removeRoute:k,hasRoute:j,getRoutes:E,resolve:R,options:e,push:L,replace:M,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:d.add,beforeResolve:p.add,afterEach:g.add,onError:Q.add,isReady:Z,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["C"])(v)}),i&&!ie&&v.value===B&&(ie=!0,L(u.location).catch(e=>{0}));const n={};for(const i in B)n[i]=Object(r["b"])(()=>v.value[i]);e.provide(De,t),e.provide(Ue,Object(r["w"])(n)),e.provide(Fe,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(b=B,G&&G(),G=null,v.value=B,ie=!1,J=!1),o()}}};return se}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>g(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>g(e,a))||i.push(a))}return[n,r,i]}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"7a23":function(e,t,n){"use strict";n.d(t,"w",(function(){return _e})),n.d(t,"x",(function(){return Le})),n.d(t,"A",(function(){return Me})),n.d(t,"C",(function(){return Fe})),n.d(t,"o",(function(){return r["J"]})),n.d(t,"B",(function(){return r["M"]})),n.d(t,"a",(function(){return Or})),n.d(t,"b",(function(){return yi})),n.d(t,"d",(function(){return Gr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return Vr})),n.d(t,"g",(function(){return Wr})),n.d(t,"h",(function(){return zr})),n.d(t,"i",(function(){return Br})),n.d(t,"j",(function(){return en})),n.d(t,"k",(function(){return ri})),n.d(t,"l",(function(){return _i})),n.d(t,"m",(function(){return Dt})),n.d(t,"n",(function(){return at})),n.d(t,"p",(function(){return on})),n.d(t,"q",(function(){return sn})),n.d(t,"r",(function(){return bn})),n.d(t,"s",(function(){return Cr})),n.d(t,"t",(function(){return jt})),n.d(t,"u",(function(){return Mt})),n.d(t,"v",(function(){return Et})),n.d(t,"y",(function(){return Rn})),n.d(t,"z",(function(){return jn})),n.d(t,"E",(function(){return Ft})),n.d(t,"F",(function(){return St})),n.d(t,"G",(function(){return In})),n.d(t,"c",(function(){return So})),n.d(t,"D",(function(){return _o})),n.d(t,"H",(function(){return Io}));var r=n("9ff4");let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,l=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},h=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),b=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=m?u(this):_(this),this.fn()}finally{f<=m&&d(this),p=1<<--f,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const O=[];function I(){O.push(w),w=!1}function k(){const e=O.pop();w=void 0===e||e}function E(e,t,n){if(w&&g){let t=h.get(e);t||h.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;j(r,i)}}function j(e,t){let n=!1;f<=m?l(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function S(e,t,n,i,o,s){const c=h.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&l.push(e)});else switch(void 0!==n&&l.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&l.push(c.get("length")):(l.push(c.get(v)),Object(r["u"])(e)&&l.push(c.get(b)));break;case"delete":Object(r["o"])(e)||(l.push(c.get(v)),Object(r["u"])(e)&&l.push(c.get(b)));break;case"set":Object(r["u"])(e)&&l.push(c.get(v));break}if(1===l.length)l[0]&&C(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);C(a(e))}}function C(e,t){const n=Object(r["o"])(e)?e:[...e];for(const r of n)r.computed&&T(r,t);for(const r of n)r.computed||T(r,t)}function T(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=Object(r["I"])("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r["F"])),P=D(),N=D(!1,!0),x=D(!0),L=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)E(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=Ce(this)[t].apply(this,e);return k(),n}}),e}function D(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:ge:t?me:pe).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(L,i))return Reflect.get(L,i,o);const a=Reflect.get(n,i,o);return(Object(r["F"])(i)?A.has(i):R(i))?a:(e||E(n,"get",i),t?a:xe(a)?s&&Object(r["t"])(i)?a:a.value:Object(r["w"])(a)?e?Oe(a):_e(a):a)}}const U=V(),F=V(!0);function V(e=!1){return function(t,n,i,o){let s=t[n];if(Ee(s)&&xe(s)&&!xe(i))return!1;if(!e&&!Ee(i)&&(je(i)||(i=Ce(i),s=Ce(s)),!Object(r["o"])(t)&&xe(s)&&!xe(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?Object(r["j"])(i,s)&&S(t,"set",n,i,s):S(t,"add",n,i)),c}}function B(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&S(e,"delete",t,void 0,i),o}function $(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&A.has(t)||E(e,"has",t),n}function q(e){return E(e,"iterate",Object(r["o"])(e)?"length":v),Reflect.ownKeys(e)}const H={get:P,set:U,deleteProperty:B,has:$,ownKeys:q},z={get:x,set(e,t){return!0},deleteProperty(e,t){return!0}},W=Object(r["h"])({},H,{get:N,set:F}),G=e=>e,K=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);n||(t!==o&&E(i,"get",t),E(i,"get",o));const{has:s}=K(i),a=r?G:n?Ae:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&E(r,"has",e),E(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&E(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function Y(e){e=Ce(e);const t=Ce(this),n=K(t),r=n.has.call(t,e);return r||(t.add(e),S(t,"add",e,e)),this}function Z(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=K(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&S(n,"set",e,t,a):S(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&S(t,"delete",e,void 0,o),s}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&S(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?G:e?Ae:Re;return!e&&E(s,"iterate",v),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=Object(r["u"])(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),d=n?G:t?Ae:Re;return!t&&E(s,"iterate",l?b:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return J(this,e)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)}),[e,n,t,r]}const[se,ae,ce,le]=oe();function ue(e,t){const n=t?e?le:ce:e?ae:se;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const de={get:ue(!1,!1)},he={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be(Object(r["P"])(e))}function _e(e){return Ee(e)?e:Ie(e,!1,H,de,pe)}function we(e){return Ie(e,!1,W,he,me)}function Oe(e){return Ie(e,!0,z,fe,ge)}function Ie(e,t,n,i,o){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function ke(e){return Ee(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function je(e){return!(!e||!e["__v_isShallow"])}function Se(e){return ke(e)||Ee(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Te(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["w"])(e)?_e(e):e,Ae=e=>Object(r["w"])(e)?Oe(e):e;function Pe(e){w&&g&&(e=Ce(e),j(e.dep||(e.dep=a())))}function Ne(e,t){e=Ce(e),e.dep&&C(e.dep)}function xe(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return De(e,!1)}function Me(e){return De(e,!0)}function De(e,t){return xe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Pe(this),this._value}set value(e){e=this.__v_isShallow?e:Ce(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Re(e),Ne(this,e))}}function Fe(e){return xe(e)?e.value:e}const Ve={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return ke(e)?e:new Proxy(e,Ve)}class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(e,()=>{this._dirty||(this._dirty=!0,Ne(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let i,o;const s=Object(r["q"])(e);s?(i=e,o=r["d"]):(i=e.get,o=e.set);const a=new $e(i,o,s||!o,n);return a}function He(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){We(o,t,n)}return i}function ze(e,t,n,i){if(Object(r["q"])(e)){const o=He(e,t,n,i);return o&&Object(r["z"])(o)&&o.catch(e=>{We(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(ze(e[r],t,n,i));return o}function We(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void He(s,null,10,[e,i,o])}Ge(e,n,i,r)}function Ge(e,t,n,r=!0){console.error(e)}let Ke=!1,Je=!1;const Xe=[];let Qe=0;const Ye=[];let Ze=null,et=0;const tt=[];let nt=null,rt=0;const it=Promise.resolve();let ot=null,st=null;function at(e){const t=ot||it;return e?t.then(this?e.bind(this):e):t}function ct(e){let t=Qe+1,n=Xe.length;while(t<n){const r=t+n>>>1,i=vt(Xe[r]);i<e?t=r+1:n=r}return t}function lt(e){Xe.length&&Xe.includes(e,Ke&&e.allowRecurse?Qe+1:Qe)||e===st||(null==e.id?Xe.push(e):Xe.splice(ct(e.id),0,e),ut())}function ut(){Ke||Je||(Je=!0,ot=it.then(bt))}function dt(e){const t=Xe.indexOf(e);t>Qe&&Xe.splice(t,1)}function ht(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ut()}function ft(e){ht(e,Ze,Ye,et)}function pt(e){ht(e,nt,tt,rt)}function mt(e,t=null){if(Ye.length){for(st=t,Ze=[...new Set(Ye)],Ye.length=0,et=0;et<Ze.length;et++)Ze[et]();Ze=null,et=0,st=null,mt(e,t)}}function gt(e){if(mt(),tt.length){const e=[...new Set(tt)];if(tt.length=0,nt)return void nt.push(...e);for(nt=e,nt.sort((e,t)=>vt(e)-vt(t)),rt=0;rt<nt.length;rt++)nt[rt]();nt=null,rt=0}}const vt=e=>null==e.id?1/0:e.id;function bt(e){Je=!1,Ke=!0,mt(e),Xe.sort((e,t)=>vt(e)-vt(t));r["d"];try{for(Qe=0;Qe<Xe.length;Qe++){const e=Xe[Qe];e&&!1!==e.active&&He(e,null,14)}}finally{Qe=0,Xe.length=0,gt(e),Ke=!1,ot=null,(Xe.length||Ye.length||tt.length)&&bt(e)}}new Set;new Map;function yt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s&&(o=n.map(e=>e.trim())),t&&(o=n.map(r["O"]))}let c;let l=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!l&&s&&(l=i[c=Object(r["N"])(Object(r["l"])(t))]),l&&ze(l,e,6,o);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,ze(u,e,6,o)}}function _t(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=_t(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function wt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Ot=null,It=null;function kt(e){const t=Ot;return Ot=e,It=e&&e.type.__scopeId||null,t}function Et(e){It=e}function jt(){It=null}function St(e,t=Ot,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ar(-1);const i=kt(t),o=e(...n);return kt(i),r._d&&Ar(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ct(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:l,emit:u,render:d,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,b;const y=kt(e);try{if(4&n.shapeFlag){const e=o||i;v=Kr(d.call(e,e,h,s,p,f,m)),b=l}else{const e=t;0,v=Kr(e.length>1?e(s,{attrs:l,slots:c,emit:u}):e(s,null)),b=t.props?l:Tt(l)}}catch(w){jr.length=0,We(w,e,1),v=Br(kr)}let _=v;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["v"])&&(b=Rt(b,a)),_=Hr(_,b))}return n.dirs&&(_=Hr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,kt(y),v}const Tt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},Rt=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function At(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Pt(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?Pt(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!wt(l,n))return!0}}return!1}function Pt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!wt(n,o))return!0}return!1}function Nt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const xt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):pt(e)}function Mt(e,t){if(ni){let n=ni.provides;const r=ni.parent&&ni.parent.provides;r===n&&(n=ni.provides=Object.create(r)),n[e]=t}else 0}function Dt(e,t,n=!1){const i=ni||Ot;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}const Ut={};function Ft(e,t,n){return Vt(e,t,n)}function Vt(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=ni;let l,u,d=!1,h=!1;if(xe(e)?(l=()=>e.value,d=je(e)):ke(e)?(l=()=>e,i=!0):Object(r["o"])(e)?(h=!0,d=e.some(e=>ke(e)||je(e)),l=()=>e.map(e=>xe(e)?e.value:ke(e)?qt(e):Object(r["q"])(e)?He(e,c,2):void 0)):l=Object(r["q"])(e)?t?()=>He(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),ze(e,c,3,[f])}:r["d"],t&&i){const e=l;l=()=>qt(e())}let f=e=>{u=v.onStop=()=>{He(e,c,4)}};if(li)return f=r["d"],t?n&&ze(t,c,3,[l(),h?[]:void 0,f]):l(),r["d"];let p=h?[]:Ut;const m=()=>{if(v.active)if(t){const e=v.run();(i||d||(h?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(u&&u(),ze(t,c,3,[e,p===Ut?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===o?m:"post"===o?()=>mr(m,c&&c.suspense):()=>ft(m);const v=new y(l,g);return t?n?m():p=v.run():"post"===o?mr(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,v)}}function Bt(e,t,n){const i=this.proxy,o=Object(r["E"])(e)?e.includes(".")?$t(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["q"])(t)?s=t:(s=t.handler,n=t);const a=ni;ii(this);const c=Vt(o,s.bind(i),n);return a?ii(a):oi(),c}function $t(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function qt(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),xe(e))qt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)qt(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{qt(e,t)});else if(Object(r["y"])(e))for(const n in e)qt(e[n],t);return e}function Ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pn(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],Wt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},setup(e,{slots:t}){const n=ri(),r=Ht();let i;return()=>{const o=t.default&&Zt(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==kr){0,s=t,e=!0;break}}const a=Ce(e),{mode:c}=a;if(r.isLeaving)return Xt(s);const l=Qt(s);if(!l)return Xt(s);const u=Jt(l,a,r,n);Yt(l,u);const d=n.subTree,h=d&&Qt(d);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(h&&h.type!==kr&&(!Mr(l,h)||f)){const e=Jt(h,a,r,n);if(Yt(h,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Xt(s);"in-out"===c&&l.type!==kr&&(e.delayLeave=(e,t,n)=>{const i=Kt(r,h);i[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return s}}},Gt=Wt;function Kt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Jt(e,t,n,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:b,onAppearCancelled:y}=t,_=String(e.key),w=Kt(n,e),O=(e,t)=>{e&&ze(e,i,9,t)},I=(e,t)=>{const n=t[1];O(e,t),Object(r["o"])(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},k={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!o)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const i=w[_];i&&Mr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),O(r,[t])},enter(e){let t=l,r=u,i=d;if(!n.isMounted){if(!o)return;t=v||l,r=b||u,i=y||d}let s=!1;const a=e._enterCb=t=>{s||(s=!0,O(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();O(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),O(n?m:p,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,f?I(f,[t,s]):s()},clone(e){return Jt(e,t,n,i)}};return k}function Xt(e){if(nn(e))return e=Hr(e),e.children=null,e}function Qt(e){return nn(e)?e.children?e.children[0]:void 0:e}function Yt(e,t){6&e.shapeFlag&&e.component?Yt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zt(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Or?(128&s.patchFlag&&i++,r=r.concat(Zt(s.children,t,a))):(t||s.type!==kr)&&r.push(null!=a?Hr(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function en(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const tn=e=>!!e.type.__asyncLoader;const nn=e=>e.type.__isKeepAlive;RegExp,RegExp;function rn(e,t){return Object(r["o"])(e)?e.some(e=>rn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function on(e,t){an(e,"a",t)}function sn(e,t){an(e,"da",t)}function an(e,t,n=ni){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(dn(t,r,n),n){let e=n.parent;while(e&&e.parent)nn(e.parent.vnode)&&cn(r,t,n,e),e=e.parent}}function cn(e,t,n,i){const o=dn(t,e,i,!0);bn(()=>{Object(r["L"])(i[t],o)},n)}function ln(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function un(e){return 128&e.shapeFlag?e.ssContent:e}function dn(e,t,n=ni,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;I(),ii(n);const i=ze(t,n,e,r);return oi(),k(),i});return r?i.unshift(o):i.push(o),o}}const hn=e=>(t,n=ni)=>(!li||"sp"===e)&&dn(e,t,n),fn=hn("bm"),pn=hn("m"),mn=hn("bu"),gn=hn("u"),vn=hn("bum"),bn=hn("um"),yn=hn("sp"),_n=hn("rtg"),wn=hn("rtc");function On(e,t=ni){dn("ec",e,t)}function In(e,t){const n=Ot;if(null===n)return e;const i=gi(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&qt(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function kn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),ze(c,n,8,[e.el,a,e,t]),k())}}const En="components";function jn(e,t){return Cn(En,e,!0,t)||e}const Sn=Symbol();function Cn(e,t,n=!0,i=!1){const o=Ot||ni;if(o){const n=o.type;if(e===En){const e=vi(n,!1);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Tn(o[e]||n[e],t)||Tn(o.appContext[e],t);return!s&&i?n:s}}function Tn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}function Rn(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const An=e=>e?si(e)?gi(e)||e.proxy:An(e.parent):null,Pn=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>An(e.parent),$root:e=>An(e.root),$emit:e=>e.emit,$options:e=>Fn(e),$forceUpdate:e=>e.f||(e.f=()=>lt(e.update)),$nextTick:e=>e.n||(e.n=at.bind(e.proxy)),$watch:e=>Bt.bind(e)}),Nn={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((u=e.propsOptions[0])&&Object(r["k"])(u,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];xn&&(a[t]=0)}}const d=Pn[t];let h,f;return d?("$attrs"===t&&E(e,"get",t),d(e)):(h=c.__cssModules)&&(h=h[t])?h:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return o!==r["b"]&&Object(r["k"])(o,t)?(o[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Pn,a)||Object(r["k"])(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xn=!0;function Ln(e){const t=Fn(e),n=e.proxy,i=e.ctx;xn=!1,t.beforeCreate&&Dn(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:l,inject:u,created:d,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:I,renderTriggered:k,errorCaptured:E,serverPrefetch:j,expose:S,inheritAttrs:C,components:T,directives:R,filters:A}=t,P=null;if(u&&Mn(u,i,P,e.appContext.config.unwrapInjectedRef),a)for(const x in a){const e=a[x];Object(r["q"])(e)&&(i[x]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["w"])(t)&&(e.data=_e(t))}if(xn=!0,s)for(const x in s){const e=s[x],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=yi({get:t,set:o});Object.defineProperty(i,x,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Un(c[r],i,n,r);if(l){const e=Object(r["q"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Mt(t,e[t])})}function N(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Dn(d,e,"c"),N(fn,h),N(pn,f),N(mn,p),N(gn,m),N(on,g),N(sn,v),N(On,E),N(wn,I),N(_n,k),N(vn,y),N(bn,w),N(yn,j),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=C&&(e.inheritAttrs=C),T&&(e.components=T),R&&(e.directives=R)}function Mn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Hn(e));for(const o in e){const n=e[o];let s;s=Object(r["w"])(n)?"default"in n?Dt(n.from||o,n.default,!0):Dt(n.from||o):Dt(n),xe(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Dn(e,t,n){ze(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Un(e,t,n,i){const o=i.includes(".")?$t(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Ft(o,n)}else if(Object(r["q"])(e))Ft(o,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>Un(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&Ft(o,i,e)}else 0}function Fn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Vn(c,e,s,!0)),Vn(c,t,s)):c=t,o.set(t,c),c}function Vn(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Vn(e,o,n,!0),i&&i.forEach(t=>Vn(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Bn[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Bn={data:$n,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:zn,created:zn,beforeMount:zn,mounted:zn,beforeUpdate:zn,updated:zn,beforeDestroy:zn,beforeUnmount:zn,destroyed:zn,unmounted:zn,activated:zn,deactivated:zn,errorCaptured:zn,serverPrefetch:zn,components:Wn,directives:Wn,watch:Gn,provide:$n,inject:qn};function $n(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function qn(e,t){return Wn(Hn(e),Hn(t))}function Hn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zn(e,t){return e?[...new Set([].concat(e,t))]:t}function Wn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Gn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=zn(e[r],t[r]);return n}function Kn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Dr,1),e.propsDefaults=Object.create(null),Xn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:we(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Jn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Ce(o),[l]=e.propsOptions;let u=!1;if(!(i||a>0)||16&a){let i;Xn(e,t,o,s)&&(u=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Qn(l,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(wt(e.emitsOptions,a))continue;const d=t[a];if(l)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,u=!0);else{const t=Object(r["e"])(a);o[t]=Qn(l,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,u=!0)}}u&&S(e,"set","$attrs")}function Xn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(r["A"])(l))continue;const u=t[l];let d;o&&Object(r["k"])(o,d=Object(r["e"])(l))?s&&s.includes(d)?(a||(a={}))[d]=u:n[d]=u:wt(e.emitsOptions,l)||l in i&&u===i[l]||(i[l]=u,c=!0)}if(s){const t=Ce(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=Qn(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Qn(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(ii(o),i=r[n]=e.call(null,t),oi())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Yn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!Object(r["q"])(e)){const i=e=>{l=!0;const[n,i]=Yn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);Zn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(Zn(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=nr(Boolean,i.type),n=nr(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const u=[a,c];return i.set(e,u),u}function Zn(e){return"$"!==e[0]}function er(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function tr(e,t){return er(e)===er(t)}function nr(e,t){return Object(r["o"])(t)?t.findIndex(t=>tr(t,e)):Object(r["q"])(t)&&tr(t,e)?0:-1}const rr=e=>"_"===e[0]||"$stable"===e,ir=e=>Object(r["o"])(e)?e.map(Kr):[Kr(e)],or=(e,t,n)=>{if(t._n)return t;const r=St((...e)=>ir(t(...e)),n);return r._c=!1,r},sr=(e,t,n)=>{const i=e._ctx;for(const o in e){if(rr(o))continue;const n=e[o];if(Object(r["q"])(n))t[o]=or(o,n,i);else if(null!=n){0;const e=ir(n);t[o]=()=>e}}},ar=(e,t)=>{const n=ir(t);e.slots.default=()=>n},cr=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ce(t),Object(r["g"])(t,"_",n)):sr(t,e.slots={})}else e.slots={},t&&ar(e,t);Object(r["g"])(e.slots,Dr,1)},lr=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,sr(t,o)),a=t}else t&&(ar(e,t),a={default:1});if(s)for(const r in o)rr(r)||r in a||delete o[r]};function ur(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dr=0;function hr(e,t){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const o=ur(),s=new Set;let a=!1;const c=o.app={_uid:dr++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:wi,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["q"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["q"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,l){if(!a){0;const u=Br(n,i);return u.appContext=o,s&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,gi(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function fr(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>fr(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(tn(i)&&!o)return;const s=4&i.shapeFlag?gi(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:l}=e;const u=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,h=c.setupState;if(null!=u&&u!==l&&(Object(r["E"])(u)?(d[u]=null,Object(r["k"])(h,u)&&(h[u]=null)):xe(u)&&(u.value=null)),Object(r["q"])(l))He(l,c,12,[a,d]);else{const t=Object(r["E"])(l),i=xe(l);if(t||i){const c=()=>{if(e.f){const n=t?d[l]:l.value;o?Object(r["o"])(n)&&Object(r["L"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?(d[l]=[s],Object(r["k"])(h,l)&&(h[l]=d[l])):(l.value=[s],e.k&&(d[e.k]=l.value))}else t?(d[l]=a,Object(r["k"])(h,l)&&(h[l]=a)):i&&(l.value=a,e.k&&(d[e.k]=a))};a?(c.id=-1,mr(c,n)):c()}else 0}}function pr(){}const mr=Lt;function gr(e){return vr(e)}function vr(e,t){pr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:l,setText:u,setElementText:d,parentNode:h,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mr(e,t)&&(r=K(e),q(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ir:b(e,t,n,r);break;case kr:_(e,t,n,r);break;case Er:null==e&&w(t,n,r,s);break;case Or:N(e,t,n,r,i,o,s,a,c);break;default:1&d?j(e,t,n,r,i,o,s,a,c):6&d?x(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,o,s,a,c,X)}null!=u&&i&&fr(u,e&&e.ref,o,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},_=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},j=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?S(t,n,r,i,o,s,a,c):R(e,t,i,o,s,a,c)},S=(e,t,n,o,c,l,u,h)=>{let f,p;const{type:g,props:v,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==m&&-1===_)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,v&&v.is,v),8&b?d(f,e.children):16&b&&T(e.children,f,null,o,c,l&&"foreignObject"!==g,u,h),w&&kn(e,null,o,"created"),v){for(const t in v)"value"===t||Object(r["A"])(t)||s(f,t,null,v[t],l,e.children,o,c,G);"value"in v&&s(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&Yr(p,o,e)}C(f,e,e.scopeId,u,o)}w&&kn(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||O||w)&&mr(()=>{p&&Yr(p,o,e),O&&y.enter(f),w&&kn(e,null,o,"mounted")},c)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Jr(e[l]):Kr(e[l]);v(null,c,t,n,r,i,o,s,a)}},R=(e,t,n,i,o,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;n&&br(n,!1),(g=m.onVnodeBeforeUpdate)&&Yr(g,n,t,e),f&&kn(t,e,n,"beforeUpdate"),n&&br(n,!0);const v=o&&"foreignObject"!==t.type;if(h?A(e.dynamicChildren,h,l,n,i,v,a):c||F(e,t,l,null,n,i,v,a,!1),u>0){if(16&u)P(l,t,p,m,n,i,o);else if(2&u&&p.class!==m.class&&s(l,"class",null,m.class,o),4&u&&s(l,"style",p.style,m.style,o),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],u=m[a];u===c&&"value"!==a||s(l,a,c,u,o,e.children,n,i,G)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||P(l,t,p,m,n,i,o);((g=m.onVnodeUpdated)||f)&&mr(()=>{g&&Yr(g,n,t,e),f&&kn(t,e,n,"updated")},i)},A=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Or||!Mr(c,l)||70&c.shapeFlag)?h(c.el):n;v(c,l,u,null,r,i,o,s,!0)}},P=(e,t,n,i,o,a,c)=>{if(n!==i){for(const l in i){if(Object(r["A"])(l))continue;const u=i[l],d=n[l];u!==d&&"value"!==l&&s(e,l,d,u,c,t.children,o,a,G)}if(n!==r["b"])for(const l in n)Object(r["A"])(l)||l in i||s(e,l,n[l],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},N=(e,t,n,r,o,s,a,l,u)=>{const d=t.el=e?e.el:c(""),h=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(d,n,r),i(h,n,r),T(t.children,n,h,o,s,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,o,s,a,l),(null!=t.key||o&&t===o.subTree)&&yr(e,t,!0)):F(e,t,n,h,o,s,a,l,u)},x=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):M(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=ti(e,r,i);if(nn(e)&&(a.ctx.renderer=X),ui(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=Br(kr);_(null,e,t,n)}}else D(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if(At(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,dt(r.update),r.update()}else t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:u}=e,d=n;0,br(e,!1),n?(n.el=u.el,U(e,n,a)):n=u,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Yr(t,l,n,u),br(e,!0);const f=Ct(e);0;const p=e.subTree;e.subTree=f,v(p,f,h(p.el),K(p),e,o,s),n.el=f.el,null===d&&Nt(e,f.el),c&&mr(c,o),(t=n.props&&n.props.onVnodeUpdated)&&mr(()=>Yr(t,l,n,u),o)}else{let a;const{el:c,props:l}=t,{bm:u,m:d,parent:h}=e,f=tn(t);if(br(e,!1),u&&Object(r["n"])(u),!f&&(a=l&&l.onVnodeBeforeMount)&&Yr(a,h,t),br(e,!0),c&&Y){const n=()=>{e.subTree=Ct(e),Y(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ct(e);0,v(null,r,n,i,e,o,s),t.el=r.el}if(d&&mr(d,o),!f&&(a=l&&l.onVnodeMounted)){const e=t;mr(()=>Yr(a,h,e),o)}(256&t.shapeFlag||h&&tn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&mr(e.a,o),e.isMounted=!0,t=n=i=null}},l=e.effect=new y(c,()=>lt(u),e.scope),u=e.update=()=>l.run();u.id=e.uid,br(e,!0),u()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Jn(e,t.props,r,n),lr(e,t.children,n),I(),mt(void 0,e.update),k()},F=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(l,h,n,r,i,o,s,a,c);if(256&f)return void V(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&G(l,i,o),h!==l&&d(n,h)):16&u?16&p?B(l,h,n,r,i,o,s,a,c):G(l,i,o,!0):(8&u&&d(n,""),16&p&&T(h,n,r,i,o,s,a,c))},V=(e,t,n,i,o,s,a,c,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,d=t.length,h=Math.min(u,d);let f;for(f=0;f<h;f++){const r=t[f]=l?Jr(t[f]):Kr(t[f]);v(e[f],r,n,null,o,s,a,c,l)}u>d?G(e,o,s,!0,!1,h):T(t,n,i,o,s,a,c,l,h)},B=(e,t,n,i,o,s,a,c,l)=>{let u=0;const d=t.length;let h=e.length-1,f=d-1;while(u<=h&&u<=f){const r=e[u],i=t[u]=l?Jr(t[u]):Kr(t[u]);if(!Mr(r,i))break;v(r,i,n,null,o,s,a,c,l),u++}while(u<=h&&u<=f){const r=e[h],i=t[f]=l?Jr(t[f]):Kr(t[f]);if(!Mr(r,i))break;v(r,i,n,null,o,s,a,c,l),h--,f--}if(u>h){if(u<=f){const e=f+1,r=e<d?t[e].el:i;while(u<=f)v(null,t[u]=l?Jr(t[u]):Kr(t[u]),n,r,o,s,a,c,l),u++}}else if(u>f)while(u<=h)q(e[u],o,s,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?Jr(t[u]):Kr(t[u]);null!=e.key&&g.set(e.key,u)}let b,y=0;const _=f-m+1;let w=!1,O=0;const I=new Array(_);for(u=0;u<_;u++)I[u]=0;for(u=p;u<=h;u++){const r=e[u];if(y>=_){q(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(b=m;b<=f;b++)if(0===I[b-m]&&Mr(r,t[b])){i=b;break}void 0===i?q(r,o,s,!0):(I[i-m]=u+1,i>=O?O=i:w=!0,v(r,t[i],n,null,o,s,a,c,l),y++)}const k=w?_r(I):r["a"];for(b=k.length-1,u=_-1;u>=0;u--){const e=m+u,r=t[e],h=e+1<d?t[e+1].el:i;0===I[u]?v(null,r,n,h,o,s,a,c,l):w&&(b<0||u!==k[b]?$(r,n,h,2):b--)}}},$=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void $(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,X);if(a===Or){i(s,t,n);for(let e=0;e<l.length;e++)$(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Er)return void O(e,t,n);const d=2!==r&&1&u&&c;if(d)if(0===r)c.beforeEnter(s),i(s,t,n),mr(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),l=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,l):l()}else i(s,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h}=e;if(null!=a&&fr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&h,p=!tn(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&Yr(m,t,e),6&u)W(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&kn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,X,r):l&&(o!==Or||d>0&&64&d)?G(l,t,n,!1,!0):(o===Or&&384&d||!i&&16&u)&&G(c,t,n),r&&H(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&mr(()=>{m&&Yr(m,t,e),f&&kn(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Or)return void z(n,r);if(t===Er)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},z=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,q(a,e,t,n)),c&&mr(c,t),mr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)q(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),gt(),t._vnode=e},X={p:v,um:q,m:$,r:H,mt:L,mc:T,pc:F,pbc:A,n:K,o:e};let Q,Y;return t&&([Q,Y]=t(X)),{render:J,hydrate:Q,createApp:hr(J,Q)}}function br({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function yr(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=Jr(o[r]),t.el=e.el),n||yr(e,t))}}function _r(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const wr=e=>e.__isTeleport;const Or=Symbol(void 0),Ir=Symbol(void 0),kr=Symbol(void 0),Er=Symbol(void 0),jr=[];let Sr=null;function Cr(e=!1){jr.push(Sr=e?null:[])}function Tr(){jr.pop(),Sr=jr[jr.length-1]||null}let Rr=1;function Ar(e){Rr+=e}function Pr(e){return e.dynamicChildren=Rr>0?Sr||r["a"]:null,Tr(),Rr>0&&Sr&&Sr.push(e),e}function Nr(e,t,n,r,i,o){return Pr(Vr(e,t,n,r,i,o,!0))}function xr(e,t,n,r,i){return Pr(Br(e,t,n,r,i,!0))}function Lr(e){return!!e&&!0===e.__v_isVNode}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Dr="__vInternal",Ur=({key:e})=>null!=e?e:null,Fr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||xe(e)||Object(r["q"])(e)?{i:Ot,r:e,k:t,f:!!n}:e:null;function Vr(e,t=null,n=null,i=0,o=null,s=(e===Or?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ur(t),ref:t&&Fr(t),scopeId:It,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Xr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["E"])(n)?8:16),Rr>0&&!a&&Sr&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Sr.push(l),l}const Br=$r;function $r(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Sn||(e=kr),Lr(e)){const r=Hr(e,t,!0);return n&&Xr(r,n),Rr>0&&!s&&Sr&&(6&r.shapeFlag?Sr[Sr.indexOf(e)]=r:Sr.push(r)),r.patchFlag|=-2,r}if(bi(e)&&(e=e.__vccOpts),t){t=qr(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(Se(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:xt(e)?128:wr(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Vr(e,t,n,i,o,a,s,!0)}function qr(e){return e?Se(e)||Dr in e?Object(r["h"])({},e):e:null}function Hr(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?Qr(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ur(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(Fr(t)):[o,Fr(t)]:Fr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Or?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hr(e.ssContent),ssFallback:e.ssFallback&&Hr(e.ssFallback),el:e.el,anchor:e.anchor};return l}function zr(e=" ",t=0){return Br(Ir,null,e,t)}function Wr(e,t){const n=Br(Er,null,e);return n.staticCount=t,n}function Gr(e="",t=!1){return t?(Cr(),xr(kr,null,e)):Br(kr,null,e)}function Kr(e){return null==e||"boolean"===typeof e?Br(kr):Object(r["o"])(e)?Br(Or,null,e.slice()):"object"===typeof e?Jr(e):Br(Ir,null,String(e))}function Jr(e){return null===e.el||e.memo?e:Hr(e)}function Xr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Xr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Dr in t?3===r&&Ot&&(1===Ot.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ot}}else Object(r["q"])(t)?(t={default:t,_ctx:Ot},n=32):(t=String(t),64&i?(n=16,t=[zr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],o=i[e];!o||n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function Yr(e,t,n,r=null){ze(e,t,7,[n,r])}const Zr=ur();let ei=0;function ti(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Zr,a={uid:ei++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yn(i,s),emitsOptions:_t(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=yt.bind(null,a),e.ce&&e.ce(a),a}let ni=null;const ri=()=>ni||Ot,ii=e=>{ni=e,e.scope.on()},oi=()=>{ni&&ni.scope.off(),ni=null};function si(e){return 4&e.vnode.shapeFlag}let ai,ci,li=!1;function ui(e,t=!1){li=t;const{props:n,children:r}=e.vnode,i=si(e);Kn(e,n,i,t),cr(e,r);const o=i?di(e,t):void 0;return li=!1,o}function di(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Te(new Proxy(e.ctx,Nn));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?mi(e):null;ii(e),I();const o=He(i,e,0,[e.props,n]);if(k(),oi(),Object(r["z"])(o)){if(o.then(oi,oi),t)return o.then(n=>{hi(e,n,t)}).catch(t=>{We(t,e,0)});e.asyncDep=o}else hi(e,o,t)}else fi(e,t)}function hi(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Be(t)),fi(e,n)}function fi(e,t,n){const i=e.type;if(!e.render){if(!t&&ai&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=ai(t,c)}}e.render=i.render||r["d"],ci&&ci(e)}ii(e),I(),Ln(e),k(),oi()}function pi(e){return new Proxy(e.attrs,{get(t,n){return E(e,"get","$attrs"),t[n]}})}function mi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=pi(e))},slots:e.slots,emit:e.emit,expose:t}}function gi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Be(Te(e.exposed)),{get(t,n){return n in t?t[n]:n in Pn?Pn[n](e):void 0}}))}function vi(e,t=!0){return Object(r["q"])(e)?e.displayName||e.name:e.name||t&&e.__name}function bi(e){return Object(r["q"])(e)&&"__vccOpts"in e}const yi=(e,t)=>qe(e,t,li);function _i(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?Lr(t)?Br(e,null,[t]):Br(e,t):Br(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Lr(n)&&(n=[n]),Br(e,t,n))}Symbol("");const wi="3.2.37",Oi="http://www.w3.org/2000/svg",Ii="undefined"!==typeof document?document:null,ki=Ii&&Ii.createElement("template"),Ei={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Ii.createElementNS(Oi,e):Ii.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ii.createTextNode(e),createComment:e=>Ii.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ii.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const i=ki.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ji(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Si(e,t,n){const i=e.style,o=Object(r["E"])(n);if(n&&!o){for(const e in n)Ti(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&Ti(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ci=/\s*!important$/;function Ti(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Ti(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Pi(e,t);Ci.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ci,""),"important"):e[i]=n}}const Ri=["Webkit","Moz","ms"],Ai={};function Pi(e,t){const n=Ai[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Ai[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ri.length;r++){const n=Ri[r]+i;if(n in e)return Ai[t]=n}return t}const Ni="http://www.w3.org/1999/xlink";function xi(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ni,t.slice(6,t.length)):e.setAttributeNS(Ni,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Li(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}const[Mi,Di]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ui=0;const Fi=Promise.resolve(),Vi=()=>{Ui=0},Bi=()=>Ui||(Fi.then(Vi),Ui=Mi());function $i(e,t,n,r){e.addEventListener(t,n,r)}function qi(e,t,n,r){e.removeEventListener(t,n,r)}function Hi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Wi(t);if(r){const s=o[t]=Gi(r,i);$i(e,n,s,a)}else s&&(qi(e,n,s,a),o[t]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Wi(e){let t;if(zi.test(e)){let n;t={};while(n=e.match(zi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Gi(e,t){const n=e=>{const r=e.timeStamp||Mi();(Di||r>=n.attached-1)&&ze(Ki(e,n.value),t,5,[e])};return n.value=e,n.attached=Bi(),n}function Ki(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Ji=/^on[a-z]/,Xi=(e,t,n,i,o=!1,s,a,c,l)=>{"class"===t?ji(e,i,o):"style"===t?Si(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||Hi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Qi(e,t,i,o))?Li(e,t,i,s,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),xi(e,t,i,o))};function Qi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Ji.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Ji.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Yi="transition",Zi="animation",eo=(e,{slots:t})=>_i(Gt,io(e),t);eo.displayName="Transition";const to={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},no=(eo.props=Object(r["h"])({},Gt.props,to),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ro=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function io(e){const t={};for(const r in e)r in to||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=s,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:h=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=oo(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:I=b,onAppear:k=y,onAppearCancelled:E=_}=t,j=(e,t,n)=>{co(e,t?d:c),co(e,t?u:a),n&&n()},S=(e,t)=>{e._isLeaving=!1,co(e,h),co(e,p),co(e,f),t&&t()},C=e=>(t,n)=>{const r=e?k:y,o=()=>j(t,e,n);no(r,[t,o]),lo(()=>{co(t,e?l:s),ao(t,e?d:c),ro(r)||ho(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){no(b,[e]),ao(e,s),ao(e,a)},onBeforeAppear(e){no(I,[e]),ao(e,l),ao(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>S(e,t);ao(e,h),go(),ao(e,f),lo(()=>{e._isLeaving&&(co(e,h),ao(e,p),ro(w)||ho(e,i,v,n))}),no(w,[e,n])},onEnterCancelled(e){j(e,!1),no(_,[e])},onAppearCancelled(e){j(e,!0),no(E,[e])},onLeaveCancelled(e){S(e),no(O,[e])}})}function oo(e){if(null==e)return null;if(Object(r["w"])(e))return[so(e.enter),so(e.leave)];{const t=so(e);return[t,t]}}function so(e){const t=Object(r["O"])(e);return t}function ao(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function co(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function lo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uo=0;function ho(e,t,n,r){const i=e._endId=++uo,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=fo(e,t);if(!s)return r();const l=s+"end";let u=0;const d=()=>{e.removeEventListener(l,h),o()},h=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,h)}function fo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Yi+"Delay"),o=r(Yi+"Duration"),s=po(i,o),a=r(Zi+"Delay"),c=r(Zi+"Duration"),l=po(a,c);let u=null,d=0,h=0;t===Yi?s>0&&(u=Yi,d=s,h=o.length):t===Zi?l>0&&(u=Zi,d=l,h=c.length):(d=Math.max(s,l),u=d>0?s>l?Yi:Zi:null,h=u?u===Yi?o.length:c.length:0);const f=u===Yi&&/\b(transform|all)(,|$)/.test(n[Yi+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:f}}function po(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>mo(t)+mo(e[n])))}function mo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function go(){return document.body.offsetHeight}new WeakMap,new WeakMap;const vo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function bo(e){e.target.composing=!0}function yo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _o={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=vo(o);const s=i||o.props&&"number"===o.props.type;$i(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=Object(r["O"])(i)),e._assign(i)}),n&&$i(e,"change",()=>{e.value=e.value.trim()}),t||($i(e,"compositionstart",bo),$i(e,"compositionend",yo),$i(e,"change",yo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=vo(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const wo=["ctrl","shift","alt","meta"],Oo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>wo.some(n=>e[n+"Key"]&&!t.includes(n))},Io=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Oo[t[e]];if(r&&r(n,t))return}return e(n,...r)};const ko=Object(r["h"])({patchProp:Xi},Ei);let Eo;function jo(){return Eo||(Eo=gr(ko))}const So=(...e)=>{const t=jo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Co(e);if(!i)return;const o=t._component;Object(r["q"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Co(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return x})),n.d(t,"p",(function(){return J})),n.d(t,"q",(function(){return U})),n.d(t,"r",(function(){return o})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return T})),n.d(t,"w",(function(){return B})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return W})),n.d(t,"z",(function(){return $})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return v})),n.d(t,"C",(function(){return M})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return F})),n.d(t,"F",(function(){return V})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return _})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return l})),n.d(t,"L",(function(){return A})),n.d(t,"M",(function(){return w})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return se})),n.d(t,"P",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function l(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?h(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||B(e)?e:void 0}const u=/;(?![^(]*\))/g,d=/:(.+)/;function h(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(F(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=V(e),r=V(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return!(!n||!r)&&b(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const w=e=>F(e)?e:null==e?"":x(e)||B(e)&&(e.toString===q||!U(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||x(t)||W(t)?t:String(t),I={},k=[],E=()=>{},j=()=>!1,S=/^on[^a-z]/,C=e=>S.test(e),T=e=>e.startsWith("onUpdate:"),R=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,N=(e,t)=>P.call(e,t),x=Array.isArray,L=e=>"[object Map]"===H(e),M=e=>"[object Set]"===H(e),D=e=>"[object Date]"===H(e),U=e=>"function"===typeof e,F=e=>"string"===typeof e,V=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,$=e=>B(e)&&U(e.then)&&U(e.catch),q=Object.prototype.toString,H=e=>q.call(e),z=e=>H(e).slice(8,-1),W=e=>"[object Object]"===H(e),G=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),X=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Q=/-(\w)/g,Y=X(e=>e.replace(Q,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=X(e=>e.replace(Z,"-$1").toLowerCase()),te=X(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=X(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d}));
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ct})),n.d(t,"b",(function(){return ur})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return lt})),n.d(t,"e",(function(){return dt}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r["b"]("auth","Firebase",c()),d=new s["b"]("@firebase/auth");function h(e,...t){d.logLevel<=s["a"].ERROR&&d.error(`Auth (${i["a"]}): ${e}`,...t)}
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
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function y(e,t){e||b(t)}
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
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
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
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function R(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new T(3e4,6e4);
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["q"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw V(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function B(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
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
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function H(e,t=!1){const n=Object(r["i"])(e),i=await n.getIdToken(t),o=W(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:q(z(o.auth_time)),issuedAtTime:q(z(o.iat)),expirationTime:q(z(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function W(e){var t;const[n,i,o]=e.split(".");if(void 0===n||void 0===i||void 0===o)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(i);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(s){return h("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function G(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,$(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Z(e){const t=Object(r["i"])(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["q"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=t;v(y&&I,e,"internal-error");const k=re.fromJSON(this.name,I);v("string"===typeof y,e,"internal-error"),ie(u,e.name),ie(d,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(h,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(b,e.name);const E=new oe({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:b});return O&&Array.isArray(O)&&(E.providerData=O.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=oe._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new le(i,e,n)):new le(i,e,n)}}
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=Object(r["j"])()){return/firefox\//i.test(e)}function he(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["j"])()){return/crios\//i.test(e)}function pe(e=Object(r["j"])()){return/iemobile/i.test(e)}function me(e=Object(r["j"])()){return/android/i.test(e)}function ge(e=Object(r["j"])()){return/blackberry/i.test(e)}function ve(e=Object(r["j"])()){return/webos/i.test(e)}function be(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=Object(r["j"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["m"])()&&10===document.documentMode}function we(e=Object(r["j"])()){return be(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(r["j"])());break;case"Worker":n=`${ue(Object(r["j"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
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
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
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
 */class Ee{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Y(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function je(e){return Object(r["i"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
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
 */async function Te(e,t){return L(e,"POST","/v1/accounts:update",t)}
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
async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
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
async function Ae(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function Pe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
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
 */class Ne extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Re(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Te(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
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
 */const Le="http://localhost";class Me extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Me(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["q"])(t)}return e}}
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
 */async function De(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function Ue(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function Fe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function Be(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),Ve)}
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
 */class $e extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Be(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=Object(r["r"])(Object(r["h"])(e))["link"],n=t?Object(r["r"])(Object(r["h"])(t))["deep_link_id"]:null,i=Object(r["r"])(Object(r["h"])(e))["deep_link_id"],o=i?Object(r["r"])(Object(r["h"])(i))["link"]:null;return o||i||n||t||e}class ze{constructor(e){var t,n,i,o,s,a;const c=Object(r["r"])(Object(r["h"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=qe(null!==(i=c["mode"])&&void 0!==i?i:null);v(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new ze(t)}catch(n){return null}}}
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
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return v(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Je extends Ke{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
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
class Xe extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
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
class Qe extends Ke{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
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
class Ye extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}
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
async function Ze(e,t){return D(e,"POST","/v1/accounts:signUp",x(e,t))}
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
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=tt(n),s=new et({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
async function ot(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await K(e,rt(i,o,t,e),n);v(r.idToken,i,"internal-error");const s=W(r.idToken);v(s,i,"internal-error");const{sub:a}=s;return v(e.uid===a,i,"user-mismatch"),et._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),s}}
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
 */async function st(e,t,n=!1){const r="signIn",i=await rt(e,r,t),o=await et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function at(e,t){return st(je(e),t)}async function ct(e,t,n){const r=je(e),i=await Ze(r,{returnSecureToken:!0,email:t,password:n}),o=await et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function lt(e,t,n){return at(Object(r["i"])(e),We.credential(t,n))}
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
 */function ut(e,t,n,i){return Object(r["i"])(e).onAuthStateChanged(t,n,i)}function dt(e){return Object(r["i"])(e).signOut()}
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
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const pt="__sak";
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
 */function gt(){const e=Object(r["j"])();return he(e)||be(e)}const vt=1e3,bt=10;class yt extends mt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yt.type="LOCAL";const _t=yt;
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
 */class wt extends mt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wt.type="SESSION";const Ot=wt;
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
 */function It(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
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
 */class kt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new kt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await It(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Et(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */kt.receivers=[];class jt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Et("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function St(){return window}function Ct(e){St().location.href=e}
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
 */function Tt(){return"undefined"!==typeof St()["WorkerGlobalScope"]&&"function"===typeof St()["importScripts"]}async function Rt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Pt(){return Tt()?self:null}
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
 */const Nt="firebaseLocalStorageDb",xt=1,Lt="firebaseLocalStorage",Mt="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ut(e,t){return e.transaction([Lt],t?"readwrite":"readonly").objectStore(Lt)}function Ft(){const e=indexedDB.deleteDatabase(Nt);return new Dt(e).toPromise()}function Vt(){const e=indexedDB.open(Nt,xt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Lt,{keyPath:Mt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Lt)?t(n):(n.close(),await Ft(),t(await Vt()))})})}async function Bt(e,t,n){const r=Ut(e,!0).put({[Mt]:t,value:n});return new Dt(r).toPromise()}async function $t(e,t){const n=Ut(e,!1).get(t),r=await new Dt(n).toPromise();return void 0===r?null:r.value}function qt(e,t){const n=Ut(e,!0).delete(t);return new Dt(n).toPromise()}const Ht=800,zt=3;class Wt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Vt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kt._getInstance(Pt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rt(),!this.activeServiceWorker)return;this.sender=new jt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vt();return await Bt(e,pt,"1"),await qt(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>$t(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ut(e,!1).getAll();return new Dt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wt.type="LOCAL";const Gt=Wt;
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
 */function Kt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function Jt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
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
function Xt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Qt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xt().appendChild(r)})}function Yt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Yt("rcb"),new T(3e4,6e4);
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
const Zt="recaptcha";async function en(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Zt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Kt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return en(this.auth,e,Object(r["i"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
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
function nn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class rn extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return st(e.auth,new rn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ot(n,new rn(e),e.bypassAuthState)}async function an(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new rn(e),e.bypassAuthState)}
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
 */class cn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const ln=new T(2e3,1e4);class un extends cn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=Et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,ln.get())};e()}}un.currentPopupAction=null;
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
const dn="pendingRedirect",hn=new Map;class fn extends cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=vn(t),r=gn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(e,t){hn.set(e._key(),t)}function gn(e){return w(e._redirectPersistence)}function vn(e){return ce(dn,e.config.apiKey,e.name)}
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
 */async function bn(e,t,n=!1){const r=je(e),i=nn(r,t),o=new fn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
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
const yn=6e5;class _n{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!In(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!On(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function On({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function In(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(e);default:return!1}}
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
 */async function kn(e,t={}){return L(e,"GET","/v1/projects",t)}
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
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jn=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kn(e);for(const r of t)try{if(Cn(r))return}catch(n){}f(e,"unauthorized-domain")}function Cn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jn.test(n))return!1;if(En.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const Tn=new T(3e4,6e4);function Rn(){const e=St().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function An(e){return new Promise((t,n)=>{var r,i,o;function s(){Rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(e,"network-request-failed"))},timeout:Tn.get()})}if(null===(i=null===(r=St().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=St().gapi)||void 0===o?void 0:o.load)){const t=Yt("iframefcb");return St()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Qt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Pn=null,e})}let Pn=null;function Nn(e){return Pn=Pn||An(e),Pn}
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
 */const xn=new T(5e3,15e3),Ln="__/auth/iframe",Mn="emulator/auth/iframe",Dn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Mn):`https://${e.config.authDomain}/${Ln}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Un.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["q"])(o).slice(1)}`}async function Vn(e){const t=await Nn(e),n=St().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Fn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=St().setTimeout(()=>{r(i)},xn.get());function s(){St().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
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
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$n=500,qn=600,Hn="_blank",zn="http://localhost";class Wn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=$n,o=qn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Bn),{width:i.toString(),height:o.toString(),top:s,left:a}),u=Object(r["j"])().toLowerCase();n&&(c=fe(u)?Hn:n),de(u)&&(t=t||zn,l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(u)&&"_self"!==c)return Kn(t||"",c),new Wn(null);const h=window.open(t||"",c,d);v(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Wn(h)}function Kn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Jn="__/auth/handler",Xn="emulator/auth/handler";function Qn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["l"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Yn(e)}?${Object(r["q"])(l).slice(1)}`}function Yn({config:e}){return e.emulator?R(e,Xn):`https://${e.authDomain}/${Jn}`}
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
 */const Zn="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ot,this._completeRedirectFn=bn,this._overrideRedirectResult=mn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qn(e,t,n,k(),r);return Gn(e,o,Et())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ct(Qn(e,t,n,k(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Vn(e),n=new _n(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zn,{type:Zn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||be()}}const tr=er;class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,n){return ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Jt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ir{constructor(){}static assertion(e){return rr._fromCredential(e)}}ir.FACTOR_ID="phone";var or="@firebase/auth",sr="0.20.5";
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
class ar{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function cr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Ee(t,r,i);return I(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(e=>new ar(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(or,sr,cr(e)),Object(i["f"])(or,sr,"esm2017")}
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
 */function ur(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:tr,persistence:[Gt,_t,Ot]})}lr("Browser")}}]);
//# sourceMappingURL=chunk-vendors.7ded37a6.js.map