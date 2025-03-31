import{e as $,r as tt,l as D,m as w,n as V,j as et,g as st,a as ot,w as nt,p as rt,q as ct,v as q,c as it,k as at,x as ht}from"../framework.Dgcs2LT9.js";function R(s,t={},e){for(const o in s){const n=s[o],r=e?`${e}:${o}`:o;typeof n=="object"&&n!==null?R(n,t,r):typeof n=="function"&&(t[r]=n)}return t}const ft={run:s=>s()},lt=()=>ft,B=typeof console.createTask<"u"?console.createTask:lt;function ut(s,t){const e=t.shift(),o=B(e);return s.reduce((n,r)=>n.then(()=>o.run(()=>r(...t))),Promise.resolve())}function kt(s,t){const e=t.shift(),o=B(e);return Promise.all(s.map(n=>o.run(()=>n(...t))))}function E(s,t){for(const e of[...s])e(t)}class dt{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,o={}){if(!t||typeof e!="function")return()=>{};const n=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${n} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let o,n=(...r)=>(typeof o=="function"&&o(),o=void 0,n=void 0,e(...r));return o=this.hook(t,n),o}removeHook(t,e){if(this._hooks[t]){const o=this._hooks[t].indexOf(e);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const o=this._hooks[t]||[];delete this._hooks[t];for(const n of o)this.hook(t,n)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=R(t),o=Object.keys(e).map(n=>this.hook(n,e[n]));return()=>{for(const n of o.splice(0,o.length))n()}}removeHooks(t){const e=R(t);for(const o in e)this.removeHook(o,e[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(ut,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(kt,t,...e)}callHookWith(t,e,...o){const n=this._before||this._after?{name:e,args:o,context:{}}:void 0;this._before&&E(this._before,n);const r=t(e in this._hooks?[...this._hooks[e]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&n&&E(this._after,n)}):(this._after&&n&&E(this._after,n),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}}function jt(){return new dt}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let J;const m=s=>J=s,K=Symbol();function I(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var P;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(P||(P={}));function _t(){const s=D(!0),t=s.run(()=>$({}));let e=[],o=[];const n=q({install(r){m(n),n._a=r,r.provide(K,n),r.config.globalProperties.$pinia=n,o.forEach(i=>e.push(i)),o=[]},use(r){return this._a?e.push(r):o.push(r),this},_p:e,_a:null,_e:s,_s:new Map,state:t});return n}const z=()=>{};function A(s,t,e,o=z){s.push(t);const n=()=>{const r=s.indexOf(t);r>-1&&(s.splice(r,1),o())};return!e&&st()&&ot(n),n}function H(s,...t){s.slice().forEach(e=>{e(...t)})}const bt=s=>s(),T=Symbol(),W=Symbol();function M(s,t){s instanceof Map&&t instanceof Map?t.forEach((e,o)=>s.set(o,e)):s instanceof Set&&t instanceof Set&&t.forEach(s.add,s);for(const e in t){if(!t.hasOwnProperty(e))continue;const o=t[e],n=s[e];I(n)&&I(o)&&s.hasOwnProperty(e)&&!w(o)&&!V(o)?s[e]=M(n,o):s[e]=o}return s}const pt=Symbol();function vt(s){return!I(s)||!s.hasOwnProperty(pt)}const{assign:u}=Object;function yt(s){return!!(w(s)&&s.effect)}function St(s,t,e,o){const{state:n,actions:r,getters:i}=t,g=e.state.value[s];let d;function k(){g||(e.state.value[s]=n?n():{});const _=ct(e.state.value[s]);return u(_,r,Object.keys(i||{}).reduce((b,p)=>(b[p]=q(it(()=>{m(e);const v=e._s.get(s);return i[p].call(v,v)})),b),{}))}return d=Q(s,k,t,e,o,!0),d}function Q(s,t,e={},o,n,r){let i;const g=u({actions:{}},e),d={deep:!0};let k,_,b=[],p=[],v;const y=o.state.value[s];!r&&!y&&(o.state.value[s]={}),$({});let L;function F(a){let c;k=_=!1,typeof a=="function"?(a(o.state.value[s]),c={type:P.patchFunction,storeId:s,events:v}):(M(o.state.value[s],a),c={type:P.patchObject,payload:a,storeId:s,events:v});const h=L=Symbol();rt().then(()=>{L===h&&(k=!0)}),_=!0,H(b,c,o.state.value[s])}const U=r?function(){const{state:c}=e,h=c?c():{};this.$patch(S=>{u(S,h)})}:z;function X(){i.stop(),b=[],p=[],o._s.delete(s)}const N=(a,c="")=>{if(T in a)return a[W]=c,a;const h=function(){m(o);const S=Array.from(arguments),O=[],C=[];function Z(f){O.push(f)}function G(f){C.push(f)}H(p,{args:S,name:h[W],store:l,after:Z,onError:G});let x;try{x=a.apply(this&&this.$id===s?this:l,S)}catch(f){throw H(C,f),f}return x instanceof Promise?x.then(f=>(H(O,f),f)).catch(f=>(H(C,f),Promise.reject(f))):(H(O,x),x)};return h[T]=!0,h[W]=c,h},Y={_p:o,$id:s,$onAction:A.bind(null,p),$patch:F,$reset:U,$subscribe(a,c={}){const h=A(b,a,c.detached,()=>S()),S=i.run(()=>nt(()=>o.state.value[s],O=>{(c.flush==="sync"?_:k)&&a({storeId:s,type:P.direct,events:v},O)},u({},d,c)));return h},$dispose:X},l=tt(Y);o._s.set(s,l);const j=(o._a&&o._a.runWithContext||bt)(()=>o._e.run(()=>(i=D()).run(()=>t({action:N}))));for(const a in j){const c=j[a];if(w(c)&&!yt(c)||V(c))r||(y&&vt(c)&&(w(c)?c.value=y[a]:M(c,y[a])),o.state.value[s][a]=c);else if(typeof c=="function"){const h=N(c,a);j[a]=h,g.actions[a]=c}}return u(l,j),u(et(l),j),Object.defineProperty(l,"$state",{get:()=>o.state.value[s],set:a=>{F(c=>{u(c,a)})}}),o._p.forEach(a=>{u(l,i.run(()=>a({store:l,app:o._a,pinia:o,options:g})))}),y&&r&&e.hydrate&&e.hydrate(l.$state,y),k=!0,_=!0,l}/*! #__NO_SIDE_EFFECTS__ */function Ot(s,t,e){let o;const n=typeof t=="function";o=n?e:t;function r(i,g){const d=ht();return i=i||(d?at(K,null):null),i&&m(i),i=J,i._s.has(s)||(n?Q(s,t,o,i):St(s,o,i)),i._s.get(s)}return r.$id=s,r}const xt=({isClient:s,initialState:t,app:e})=>{const o=_t();e.use(o),s?o.state.value=t.pinia||{}:t.pinia=o.state.value};export{jt as c,Ot as d,xt as i};
