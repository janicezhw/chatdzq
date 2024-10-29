import{_ as k}from"./workbenchNav.3ded0db1.js";import{a as w,b as y,r as p,e as x,f as P,w as C,h as N,i as u,y as m,j as d,F as B,s as A,l as E,v as I,m as L,o as l,c as R,k as V,A as F,x as D,u as G,ad as $,G as j}from"./entry.b3d0478f.js";import{_ as z}from"./cDenied.52a2b908.js";import{h as M,a as S,t as T,w as U,b as q,d as H,c as J,s as K}from"./settings.2f50ce3a.js";import"./sPrompt.b2dad4d0.js";import"./close.79d7cbfd.js";import"./cCreate.fa3fcebe.js";import"./ossUploaderNew.bc250fbe.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./stringify.f484c508.js";import"./addBase.6bac7936.js";import"./robot.23bfda18.js";import"./curriculum.943a89fc.js";import"./unit.b72b5b5d.js";import"./avatar.476f89d8.js";import"./index.878cfd5e.js";import"./accountModel.dd81b68e.js";import"./phone.a2bf3e1d.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./pwd.e8e85914.js";import"./nickname.29f4a130.js";const O={class:"workbench"},Q={class:"workbench-nav"},W={class:"workbench-content"},X={key:0,class:"page-top"},Y=w({__name:"backstage",setup(Z){const s=y(),{proxy:t}=L(),r=p([]),h=p(""),n=p([{title:"首页",name:"1",img:M,url:"/ai/enterprise/home"},{title:"通讯录",name:"2",img:S,children:[{title:"成员管理",name:"2-1",url:"/ai/enterprise/staff"},{title:"部门管理",name:"2-2",url:"/ai/enterprise/staff/section"},{title:"用户组管理",name:"2-3",url:"/ai/enterprise/staff/role"},{title:"审批管理",name:"2-4",url:"/ai/enterprise/staff/approval",num:s.approvalNum}]},{title:"训练中心",name:"3",img:T,children:[{title:"智能体(旧版)",name:"3-1-1",url:"/ai/enterprise/train/original"},{title:"智能体",name:"3-1",url:"/ai/enterprise/train"},{title:"知识库(旧版)",name:"3-2",url:"/ai/enterprise/bank"},{title:"知识库",name:"3-3",url:"/ai/enterprise/knowledge"},{title:"技能",name:"3-4",url:"/ai/enterprise/skill"}]},{title:"工作台",type:"workbench",name:"6",img:U,children:[{title:"工作台配置",name:"6-1",url:"/ai/enterprise/build/workbench",children:[{title:"工作台",name:"6-1-1",url:"/ai/enterprise/build/workbench"},{title:"推荐AI应用",name:"6-1-2",url:"/ai/enterprise/build/workbench/app"}]},{title:"企业建站",name:"6-2",url:"/ai/enterprise/build/config",children:[{title:"宣传页模板",name:"6-2-1",url:"/ai/enterprise/build/template"},{title:"宣传页导航",name:"6-2-2",url:"/ai/enterprise/build/navigation"}]}]},{title:"AI应用",name:"4",img:q,children:[{title:"智能客服",name:"4-1",url:"/ai/enterprise/service"},{title:"客户管理",name:"4-2",url:"/ai/enterprise/client"}]},{title:"AI数字员工",name:"5",img:H,url:"/ai/enterprise/employee"},{title:"数据资产",name:"7",img:J,children:[{title:"应用数据",name:"7-2",url:"/ai/enterprise/date"},{title:"数据洞察",name:"7-3",url:"/ai/enterprise/total"},{title:"数据集",name:"7-4",url:"/ai/enterprise/assemble"}]},{title:"企业设置",name:"8",img:K,children:[{title:"企业信息",name:"8-1",url:"/ai/enterprise/account"},{title:"订单管理",name:"8-3",url:"/ai/enterprise/account/order",children:[{title:"电量记录",name:"8-3-1",url:"/ai/enterprise/account/electric"},{title:"订单记录",name:"8-3-2",url:"/ai/enterprise/account/order"}]},{title:"回收站",name:"8-4",url:"/ai/enterprise/recycle/data",children:[{title:"应用数据",name:"8-4-1",url:"/ai/enterprise/recycle/data"},{title:"知识库",name:"8-4-2",url:"/ai/enterprise/recycle/knowledge"},{title:"智能体",name:"8-4-3",url:"/ai/enterprise/recycle/robot"}]}]}]),o=x();P(()=>{t==null||t.$api.getUserAccountInfo().then(i=>{i.data.partnerFlag?n.value.forEach(e=>{e.type=="workbench"&&(e.children[1].url="/ai/enterprise/build/config",e.children[1].children.unshift({title:"内页配置",name:"6-2-3",url:"/ai/enterprise/build/config"}))}):n.value.forEach(e=>{e.type=="workbench"&&(e.children[1].url="/ai/enterprise/build/template",e.children[1].children=[{title:"宣传页模板",name:"6-2-1",url:"/ai/enterprise/build/template"},{title:"宣传页导航",name:"6-2-2",url:"/ai/enterprise/build/navigation"}])}),_()})});const _=()=>{r.value=[],n.value.forEach(i=>{i.children&&i.children.forEach(e=>{e.children&&e.children.forEach((a,c)=>{a.url&&a.url==o.currentRoute.value.path&&(r.value=e.children,h.value=c)})})}),s.setApprovalNum(t)};return C(()=>o.currentRoute.value.path,()=>{_(),s.setPermList(t)},{immediate:!0}),(i,e)=>{const a=k,c=N("Button"),f=$,b=z;return l(),u("div",O,[m("div",Q,[d(a,{list:n.value,isGray:!0,isLimit:!0},null,8,["list"])]),m("div",W,[r.value.length>0?(l(),u("div",X,[(l(!0),u(B,null,A(r.value,(g,v)=>(l(),R(c,{class:"page-btn",onClick:ee=>G(o).push(g.url),type:h.value==v?"primary":"text"},{default:V(()=>[F(D(g.title),1)]),_:2},1032,["onClick","type"]))),256))])):E("",!0),m("div",{class:I(["page-content",r.value.length>0?"page1":"page2"])},[d(f)],2)]),d(b)])}}});const Ce=j(Y,[["__scopeId","data-v-8b695c33"]]);export{Ce as default};