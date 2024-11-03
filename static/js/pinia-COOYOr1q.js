import{i as G}from"./vue-demi-Dq6ymT-8.js";import{ap as V,r as M,ao as q,z as $,w as T,H as tt,A as E,aq as z,a6 as et,ar as st,g as nt,f as ot,n as ct,I as rt,x as ut}from"./@vue-BuWGUhr0.js";/*!
 * pinia v2.2.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let B;const I=t=>B=t,D=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function vt(){const t=V(!0),c=t.run(()=>M({}));let s=[],e=[];const r=q({install(u){I(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!G?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const J=()=>{};function F(t,c,s,e=J){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&nt()&&ot(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),H=Symbol(),k=Symbol();function O(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!z(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(E(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const S=rt(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,m)=>(v[m]=q(ut(()=>{I(s);const _=s._s.get(t);return f[m].call(_,_)})),v),{}))}return g=K(t,b,c,s,e,!0),g}function K(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),g={deep:!0};let b,S,v=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),M({});let W;function N(o){let n;b=S=!1,typeof o=="function"?(o(e.state.value[t]),n={type:x.patchFunction,storeId:t,events:_}):(O(e.state.value[t],o),n={type:x.patchObject,payload:o,storeId:t,events:_});const i=W=Symbol();ct().then(()=>{W===i&&(b=!0)}),S=!0,P(v,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:J;function U(){f.stop(),v=[],m=[],e._s.delete(t)}const A=(o,n="")=>{if(H in o)return o[k]=n,o;const i=function(){I(e);const j=Array.from(arguments),p=[],R=[];function Y(l){p.push(l)}function Z(l){R.push(l)}P(m,{args:j,name:i[k],store:h,after:Y,onError:Z});let w;try{w=o.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(R,l),l}return w instanceof Promise?w.then(l=>(P(p,l),l)).catch(l=>(P(R,l),Promise.reject(l))):(P(p,w),w)};return i[H]=!0,i[k]=n,i},X={_p:e,$id:t,$onAction:F.bind(null,m),$patch:N,$reset:Q,$subscribe(o,n={}){const i=F(v,o,n.detached,()=>j()),j=f.run(()=>T(()=>e.state.value[t],p=>{(n.flush==="sync"?S:b)&&o({storeId:t,type:x.direct,events:_},p)},y({},g,n)));return i},$dispose:U},h=tt(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=V()).run(()=>c({action:A}))));for(const o in C){const n=C[o];if(E(n)&&!lt(n)||z(n))u||(d&&it(n)&&(E(n)?n.value=d[o]:O(n,d[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const i=A(n,o);C[o]=i,a.actions[o]=n}}return y(h,C),y(et(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,S=!0,h}/*! #__NO_SIDE_EFFECTS__ */function mt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,g){const b=st();return a=a||(b?$(D,null):null),a&&I(a),a=B,a._s.has(e)||(u?K(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{vt as c,mt as d};