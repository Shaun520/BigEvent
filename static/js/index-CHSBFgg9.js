const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginPage-D_RQ9Gyr.js","./element-plus-D-X2S_cD.js","./@vue-b6zKPkmM.js","./lodash-es-CxpLErxa.js","./async-validator-DKvM95Vc.js","./@vueuse-kHQqd-GD.js","./dayjs-Btipwhah.js","./axios-BDQOBJsj.js","./@element-plus-EZCH1QQ0.js","./@ctrl-r5W6hzzQ.js","./@sxzz-D9SI2xQl.js","./normalize-wheel-es-B6fDCfyv.js","../css/element-plus-DjtUaLP7.css","./vue-router-BF8_ddcx.js","./plugin-vueexport-helper-DlAUqK2U.js","./pinia-5OhCMEEp.js","./vue-demi-Dq6ymT-8.js","./pinia-plugin-persistedstate-BQU3TZ4K.js","./destr-CVtkxrq9.js","./deep-pick-omit-CegYQlcN.js","../css/LoginPage-BFJ7IUxH.css","./LayoutPage-Dj5bmJMq.js","../css/LayoutPage-CChuslZt.css","./ArticleManage-BXxnOu0q.js","./PageContainer-Ce_5fI97.js","../css/PageContainer-Clkqf0Ko.css","./article-CVg8yOdF.js","./@vueup-xcdAIoqZ.js","./quill-b29DI-Hn.js","./quill-delta-BI94RzGj.js","./fast-diff-DNDSwfiB.js","./lodash.clonedeep-CSjm15Ai.js","./lodash.isequal-C90DUZwY.js","../css/@vueup-DwXE-tNh.css","../css/ArticleManage-DgsdrHtf.css","./ArticleChannel-BM45XNFl.js","./UserProfile-DPhokTQp.js","../css/UserProfile-D9OraUu-.css","./UserAvatar-C0FvMVJ2.js","../css/UserAvatar-Ck_EJjW2.css","./UserPassword-Cfy3JdiL.js"])))=>i.map(i=>d[i]);
import{r as g,ab as R,o as w,R as A,Q as O,M as b,u as U,am as I}from"./@vue-b6zKPkmM.js";import{d as T,c as k}from"./pinia-5OhCMEEp.js";import{s as V}from"./pinia-plugin-persistedstate-BQU3TZ4K.js";import{a as C}from"./axios-BDQOBJsj.js";import{c as D,a as B}from"./vue-router-BF8_ddcx.js";import{E,z as j,a as q}from"./element-plus-D-X2S_cD.js";import"./vue-demi-Dq6ymT-8.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";import"./lodash-es-CxpLErxa.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-kHQqd-GD.js";import"./dayjs-Btipwhah.js";import"./@element-plus-EZCH1QQ0.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const x="modulepreload",z=function(e,r){return new URL(e,r).href},y={},l=function(r,i,a){let t=Promise.resolve();if(i&&i.length>0){const o=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),v=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(i.map(c=>{if(c=z(c,a),c in y)return;y[c]=!0;const m=c.endsWith(".css"),S=m?'[rel="stylesheet"]':"";if(!!a)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===c&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${S}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":x,m||(u.as="script"),u.crossOrigin="",u.href=c,v&&u.setAttribute("nonce",v),document.head.appendChild(u),m)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return t.then(o=>{for(const n of o||[])n.status==="rejected"&&s(n.reason);return r().catch(s)})},_=D({history:B("./"),routes:[{path:"/login",component:()=>l(()=>import("./LoginPage-D_RQ9Gyr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url)},{path:"/",component:()=>l(()=>import("./LayoutPage-Dj5bmJMq.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22]),import.meta.url),redirect:"/login",children:[{path:"/article/manage",component:()=>l(()=>import("./ArticleManage-BXxnOu0q.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,24,14,25,26,27,28,29,30,31,32,33,15,16,17,18,19,13,34]),import.meta.url)},{path:"/article/channel",component:()=>l(()=>import("./ArticleChannel-BM45XNFl.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,24,14,25,26,15,16,17,18,19,13]),import.meta.url)},{path:"/user/profile",component:()=>l(()=>import("./UserProfile-DPhokTQp.js"),__vite__mapDeps([36,24,1,2,3,4,5,6,7,8,9,10,11,12,14,25,15,16,17,18,19,13,37]),import.meta.url)},{path:"user/avatar",component:()=>l(()=>import("./UserAvatar-C0FvMVJ2.js"),__vite__mapDeps([38,24,1,2,3,4,5,6,7,8,9,10,11,12,14,25,15,16,17,18,19,13,39]),import.meta.url)},{path:"/user/password",component:()=>l(()=>import("./UserPassword-Cfy3JdiL.js"),__vite__mapDeps([40,24,1,2,3,4,5,6,7,8,9,10,11,12,14,25,13,15,16,17,18,19]),import.meta.url)}]}]});_.beforeEach(e=>!P().token&&e.path!=="/login"?"/login":!0);const N="http://big-event-vue-api-t.itheima.net",p=C.create({baseURL:N,timeout:1e4});p.interceptors.request.use(e=>{const r=P();return r.token&&(e.headers.Authorization=r.token),e},e=>Promise.reject(e));p.interceptors.response.use(e=>e.data.code===0?e:(E.error(e.data.message||"服务异常"),Promise.reject(e.data)),e=>(e.response.status===401&&_.push("/login"),E.error(e.response.data.message||"服务异常"),Promise.reject(e)));const ce=({username:e,password:r,repassword:i})=>p.post("/api/reg",{username:e,password:r,repassword:i}),ue=({username:e,password:r})=>p.post("/api/login",{username:e,password:r}),$=()=>p.get("/my/userinfo"),pe=e=>p.put("/my/userinfo",e),le=e=>p.patch("/my/update/avatar",{avatar:e}),me=({old_pwd:e,new_pwd:r,re_pwd:i})=>p.patch("/my/updatepwd",{old_pwd:e,new_pwd:r,re_pwd:i}),P=T("user",()=>{const e=g(" "),r=o=>{e.value=o},i=()=>{e.value=""},a=g({});return{token:e,setToken:r,removeToken:i,user:a,getUser:async()=>{const o=await $();a.value=o.data.data},setUser:o=>{a.value=o}}},{persist:!0}),L=k();L.use(V);const H={__name:"App",setup(e){return(r,i)=>{const a=R("router-view"),t=q;return w(),A(t,{locale:U(j)},{default:O(()=>[b(a)]),_:1},8,["locale"])}}},h=I(H);h.use(L);h.use(_);h.mount("#app");export{ce as a,ue as b,N as c,pe as d,le as e,me as f,p as i,P as u};
