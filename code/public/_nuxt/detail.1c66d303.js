import{_ as L}from"./workbenchNav.3ded0db1.js";import{a as N,b as E,ae as D,I as S,r as g,f as P,w as f,i as b,y as e,j as C,u as k,x as h,A as R,l as $,m as z,C as B,D as V,o as A,ad as U,G as W}from"./entry.b3d0478f.js";import{_ as q,m as F,i as G,a as M,b as O,c as Y,d as j,e as H}from"./icon1.1be57e26.js";import{w as J,r as K,e as Q}from"./employee.710f3e09.js";import"./sPrompt.b2dad4d0.js";import"./close.79d7cbfd.js";import"./cCreate.fa3fcebe.js";import"./ossUploaderNew.bc250fbe.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./stringify.f484c508.js";import"./addBase.6bac7936.js";import"./robot.23bfda18.js";import"./curriculum.943a89fc.js";import"./unit.b72b5b5d.js";import"./avatar.476f89d8.js";import"./index.878cfd5e.js";import"./accountModel.dd81b68e.js";import"./phone.a2bf3e1d.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./pwd.e8e85914.js";import"./nickname.29f4a130.js";const I=l=>(B("data-v-7d94f574"),l=l(),V(),l),X={class:"mains"},Z={class:"aiHeadComm"},ee={class:"headComm-nav"},te=I(()=>e("img",{class:"icon",src:q,alt:""},null,-1)),oe={class:"headComm-nav-menu"},ae={class:"headComm-area"},ie=["src"],se={class:"headComm-title"},ce=I(()=>e("em",{class:"arrow"},null,-1)),ne={key:0,class:"headComm-subTitle"},re={class:"aiMianComm"},le=N({__name:"detail",setup(l){const d=E(),s=D(),x=S(),u=g(""),{proxy:n}=z(),a=g([{title:"工作台",url:"",name:"2",img:J,type:"workbench",children:[]},{title:"推荐AI应用",url:"",name:"1",img:K,type:"recommend",children:[]},{title:"AI数字员工",url:"/ai/employee",name:"3",img:Q,type:"employee"},{title:"我的",url:"",name:"4",img:F,type:"my",children:[{title:"最近使用",url:"/ai/agency",img:G,imgActive:M},{title:"我的智能体",url:"/ai/robot",img:O,imgActive:Y},{title:"我的收藏",url:"/ai/creative?type=collect",img:j,imgActive:H}]}]),y=g(null);P(()=>{u.value=s.meta.title,n.$api.getUserAccountInfo().then(r=>{let m=r.data.sourceDisplayListFlag;n.$api.queryWorkbenchPermissionList().then(o=>{a.value.forEach((c,i)=>{c.type=="workbench"&&(m?o.data.length>0&&n.$api.getWorkbenchInfo({bizType:o.data[0].bizType,code:o.data[0].code}).then(t=>{t.data&&t.data.workbenchCategoryList.length>0&&(a.value[i].children=[],t.data.workbenchCategoryList.forEach(_=>{let w=_.getWorkbenchChunkList.map(p=>({title:p.robotName,url:"",img:"",imgActive:"",type:"sourceDisplayChildren",name:p.code,robotCode:p.robotCode,robotType:p.robotType}));a.value[i].children.push({title:_.name,url:"",img:"",imgActive:"",name:_.code,type:"sourceDisplay",children:w})}))}):a.value[i].children=o.data.map(t=>({title:t.name,url:"/ai/app/often?code="+t.code+"&bizType="+t.bizType,img:t.afterClickingImgUrl,imgActive:t.beforeClickingImgUrl,name:t.code})))}),T()})})});const T=()=>{let r={type:"AI_APPLY_CATEGORY"};n.$api.queryAiApplyListPermission(r).then(m=>{a.value.forEach((o,c)=>{o.type=="recommend"&&(a.value[c].children=m.data.map(i=>({title:i.cateName,url:n.$getTypeRoute(i.description),img:"",imgActive:"",name:i.code}))),o.type=="employee"&&d.clientType=="PERSONAL"&&a.value.splice(c,1)})})},v=()=>{x.go(-1)};return f(()=>s.meta,()=>{console.log(s.meta)},{deep:!0,immediate:!0}),f(()=>s.meta.title,()=>{console.log(s.meta),u.value=s.meta.title},{deep:!0,immediate:!0}),(r,m)=>{const o=L,c=U;return A(),b("div",X,[e("div",Z,[e("div",ee,[te,e("div",oe,[C(o,{borderStyle:"border-radius:0px 12px 12px 0px",list:a.value},null,8,["list"])])]),e("div",ae,[e("div",{class:"headComm-logo",onClick:v},[e("img",{src:k(d).configuration.logo,alt:""},null,8,ie),e("span",null,h(k(d).configuration.companyShortNameEn),1)]),e("div",se,h(u.value),1),e("div",{class:"headComm-back",onClick:v},[ce,R(" 返回 ")])]),r.$isEmpty(y.value)?$("",!0):(A(),b("div",ne,h(y.value.title),1))]),e("div",re,[C(c)])])}}});const Re=W(le,[["__scopeId","data-v-7d94f574"]]);export{Re as default};