import{E as k,b as S,c as q,d as z,e as I,f as N,g as P,h as T,i as $}from"./element-plus-BmZKzp7m.js";import{u as b,p as g}from"./@element-plus-BHiQEyhT.js";import{u as F,a as M,b as A}from"./index-p9A365QO.js";import{u as Q}from"./vue-router-DP6WE_UQ.js";import{_ as Z}from"./plugin-vueexport-helper-DlAUqK2U.js";import{r as m,w as j,Q as v,o as w,P as o,L as l,a as c,u as i,T as t}from"./@vue-BuWGUhr0.js";import"./lodash-es-Dz4Jxgv8.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-CNEPcfAf.js";import"./dayjs-Btipwhah.js";import"./axios-BDQOBJsj.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-COOYOr1q.js";import"./vue-demi-Dq6ymT-8.js";import"./pinia-plugin-persistedstate-BQU3TZ4K.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";const D={class:"flex"},G={__name:"LoginPage",setup(H){const u=m(!0),E=F(),d=m(),C=Q(),r=m({username:"",password:"",repassword:""}),x=m({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:6,max:15,message:"用户名长度必须在6到15个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{6,15}$/,message:"密码必须包含字母和数字,长度在6到15个字符之间",trigger:"blur"}],repassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:(f,e,n)=>{e!==r.value.password?n(new Error("两次输入的密码不一致!")):n()},trigger:"blur"}]});j(u,()=>{r.value={username:"",password:"",repassword:""}});const U=async()=>{await d.value.validate(),await M(r.value),k.success("注册成功"),u.value=!1},L=async()=>{await d.value.validate();const f=await A(r.value);k.success("登录成功"),E.setToken(f.data.token),C.push("/article/manage")};return(f,e)=>{const n=S,s=q,p=z,V=I,_=N,y=P,B=T,R=$;return w(),v(R,{class:"login-page"},{default:o(()=>[l(n,{span:12,class:"bg"}),l(n,{span:6,offset:3,class:"form"},{default:o(()=>[u.value?(w(),v(y,{key:0,ref_key:"form",ref:d,size:"large",autocomplete:"off",model:r.value,rules:x.value},{default:o(()=>[l(s,null,{default:o(()=>e[7]||(e[7]=[c("h1",null,"注册",-1)])),_:1}),l(s,{prop:"username"},{default:o(()=>[l(p,{modelValue:r.value.username,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value.username=a),"prefix-icon":i(b),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),l(s,{prop:"password"},{default:o(()=>[l(p,{modelValue:r.value.password,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value.password=a),"prefix-icon":i(g),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])]),_:1}),l(s,{prop:"repassword"},{default:o(()=>[l(p,{modelValue:r.value.repassword,"onUpdate:modelValue":e[2]||(e[2]=a=>r.value.repassword=a),"prefix-icon":i(g),type:"password",placeholder:"请输入再次密码"},null,8,["modelValue","prefix-icon"])]),_:1}),l(s,null,{default:o(()=>[l(V,{onClick:U,class:"button",type:"primary","auto-insert-space":""},{default:o(()=>e[8]||(e[8]=[t(" 注册 ")])),_:1})]),_:1}),l(s,{class:"flex"},{default:o(()=>[l(_,{type:"info",underline:!1,onClick:e[3]||(e[3]=a=>u.value=!1)},{default:o(()=>e[9]||(e[9]=[t(" ← 返回 ")])),_:1})]),_:1})]),_:1},8,["model","rules"])):(w(),v(y,{key:1,ref_key:"form",ref:d,size:"large",autocomplete:"off",model:r.value,rules:x.value},{default:o(()=>[l(s,null,{default:o(()=>e[10]||(e[10]=[c("h1",null,"登录",-1)])),_:1}),l(s,{prop:"username"},{default:o(()=>[l(p,{modelValue:r.value.username,"onUpdate:modelValue":e[4]||(e[4]=a=>r.value.username=a),"prefix-icon":i(b),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),l(s,{prop:"password"},{default:o(()=>[l(p,{name:"password","prefix-icon":i(g),type:"password",placeholder:"请输入密码",modelValue:r.value.password,"onUpdate:modelValue":e[5]||(e[5]=a=>r.value.password=a)},null,8,["prefix-icon","modelValue"])]),_:1}),l(s,{class:"flex"},{default:o(()=>[c("div",D,[l(B,null,{default:o(()=>e[11]||(e[11]=[t("记住我")])),_:1}),l(_,{type:"primary",underline:!1},{default:o(()=>e[12]||(e[12]=[t("忘记密码？")])),_:1})])]),_:1}),l(s,null,{default:o(()=>[l(V,{onClick:L,class:"button",type:"primary","auto-insert-space":""},{default:o(()=>e[13]||(e[13]=[t("登录")])),_:1})]),_:1}),l(s,{class:"flex"},{default:o(()=>[l(_,{type:"info",underline:!1,onClick:e[6]||(e[6]=a=>u.value=!0)},{default:o(()=>e[14]||(e[14]=[t(" 注册 → ")])),_:1})]),_:1})]),_:1},8,["model","rules"]))]),_:1})]),_:1})}}},me=Z(G,[["__scopeId","data-v-3718c652"]]);export{me as default};
