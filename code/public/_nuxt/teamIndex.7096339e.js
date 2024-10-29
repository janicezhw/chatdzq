import{a as Ie,r as s,J as oe,b as be,e as Ne,f as Le,w as te,N as Te,h as M,i as u,y as o,u as i,A as g,F as D,s as X,j as A,k as d,x as R,l as se,m as Ue,_ as De,C as Oe,D as Ve,p as Fe,o as c,v as G,z as ae,c as Xe,E as Ge,G as Je}from"./entry.b3d0478f.js";import{_ as ze}from"./cDenied.52a2b908.js";import{_ as le}from"./avatar.476f89d8.js";import{c as We,f as Pe,_ as He}from"./firmModal.61ee77ee.js";import{_ as je}from"./hot.f470a75b.js";import{_ as Ye}from"./footer-logo.5e28734c.js";import{_ as Ke}from"./robot.23bfda18.js";import{r as Ze}from"./recordNew.9940343d.js";import{i as qe}from"./template.5cceb4cb.js";import $e from"./accountModel.dd81b68e.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./ossUploaderNew.bc250fbe.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./stringify.f484c508.js";import"./previewImg.5ba94f0e.js";import"./cCreate.fa3fcebe.js";import"./addBase.6bac7936.js";import"./close.79d7cbfd.js";import"./curriculum.943a89fc.js";import"./unit.b72b5b5d.js";import"./edit1.66aaae0f.js";import"./copy.ac3b57f3.js";import"./switch.ceeadd7d.js";import"./content.2ef9ea5b.js";import"./barrage.8a0f0b41.js";import"./ossUploader.17912e89.js";import"./createLoading.vue.f649d7e2.js";import"./close3.bdd7467f.js";import"./phone.a2bf3e1d.js";import"./pwd.e8e85914.js";import"./nickname.29f4a130.js";const eo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIbSURBVHgB7ZjRTcMwEIYviHfKBIQNygZlAzZImaBigpYJWiYgnaBignSDsoG7QdngOCsuvRo7thObCsmfdIrkXOz/znbOCUAmk8lkMpl/BCKWZCsygX4sHf2NyGZk78oqOQakgDoekx0wkI7+Kkt/guzJR1MBnqisNGSlavpS5uKtKIqVob+KLrXj2Qd69hNiQAPWLEM7OfXQEzWTesZnygRrbyAWWscl9MSwDAXvD9s9xu/3TpQ+8E/2oSdKnLCJZ3475jOGGAyd1gDx+gxcPgCD+INNGLVveJAQi74BYPue50sCO8QvNb8KYjEggEYTNbX4zTW/BcSkTwDYVlanqOTi1SBBAfiKMvjVkIKQAALEV5pfvMJlGMxrEIP4lcVvovkNqu5OfALA9ijA2Vj8OqtxElwB4O/zjTGj6FnQouMRwEITNUi8b1BXkIY1HYPPjtpoPo4/kt9ef5h853QR6LGpUwVwhpoNuR9K1mwUrzh+zEzAwZ8EAG3m+fHh2fGh4v02uoY0VJT1OziJ4eJfSHwNkUgVQEk2NbS/mj4vhxBzCW0d96X4BUQm2gyQuC0tm3tosz9SdkN2Sybo/houCX93Q2J4rYBYsE4PmPDMooqdd7JC9sCHukrxTYryz+rFka3rmdAfW/KPBM++fJf7/NzyoYTT3pHsobvYhaMObPwskwrrR3+MIOQarRMFIrD9cVxCJpPJZDIefAOOXsItZzU8FAAAAABJRU5ErkJggg==",oo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7ZjPTxNBFMe/szQxdomB2E08oF2JCdCLGmriBat4MJzkh2ev6gWQq8b4H2DxrlL6D3ARj4WrIfRUakzoFsvF9tDE7kYT3XHemtamhbLb2dDV8Ena2bczL3l5783bmcfQwtCV0duw+TQHu88AHScCzzKwrG3/Sh4Yn7Ots6xZuDg8siyMW0QPEQa9/WZ/X6oaRrXp3R+GLo/sgLFrCAKc79T4j8m6oQr9kQcDYyDB2PV+duZNQ7ygj+ohBQUEDw4bkyUjn1FCCu9pDnaAsT48pAcKdwIBhXM+TaMwUtERWNgA/YeEvQOQRNejCIfDbe9zuV34QQiSJG5N4MnjR4fOra6lsbHxAbIokEAV3nswN3vk/NzsjFijQhZXniRjoiKkrcTHx6FpmvO8ubWFcrnSmCPj+1VVjDP4uL3dplv+Wka5UoEb2NDwKO+0gHLt9cqyLx5ppmaaWFhYgmmZnZbx0l5ekQq3HBxh9ayrlcd6ktC0CLSIhqmpe7gRj8MoFpFKpeGFVt2iGE3LOk7N8aSrnKRco18iMeHIlmkht+utvNR1TRFmr7q+hJs2lhaJHCnLIl0naWOtiI1Fp775+aci07gjc5FELjaGK6Q9qaphZ+c7ZSp6qU32gx7ubvecGukXp0b6xT9hpHSdpC/Re3FmtKy/X6FWWRZpI4nUWrqjLMv/G+6w+KrEYmOedOgU1S1dGalHo3jx/BlOCk/hbr4edMt+8Qu84urQ20xszFuYm6ETUbG470WlfuhlVS93b7/KihdEuG0DAUX0JQ0aKSc3EVBsIEOj8tNmrxBMOLORooe+WrVSPTd4flA49yaCA90+3h0U8kkSnBJU2vu0KK4mGQQDTu1oU/TN6y8adbJUyN8R80n0FtGSxKrol989tLFfh9rTfQwvGfhVyT666/orDDPA+Dqz2Tq1n1vnfwO1eP8gSH2SDgAAAABJRU5ErkJggg==",to="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgB7dhhDcIwEAXgKwqGg0pBAg5AAg6YFRwgAQdI2BQQFOy4Jg2EwLJrU0oveV/y/jXrvR9r1hEBAAAA2MDM2xCySAbf88uRrJGhe35nq4QM3EmuKPFvKNEKlEjcyEsGruegnW2lXLeReKpnp12oLXCWjFTHXXIigDqcdqGcDEnrnxs4x/RD2pc4COfzTTKlhPMMkk4zVEqBcBFRPbQAH/dblFJg7mjjheQYJRcqjT8vJeEzYB3fDxtQohUo0YqZErWO2zK+lOjJmlhiilF/zzeFLf86BAAAgAwPT5g4MiE3HmUAAAAASUVORK5CYII=",so="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7diBTcMwEAXQb8QATADZgI4QsQBsACOwQboCExQmACZIxQCkTNAwAZ2A41sEyaAmxM0ZI/We9OVUSuxcmyZ2AGOMMcbk47AjESnZnDIzTPPK3DrnWvwFnvgRcy/6Fr5vpMZBGkmniS3iMGZndl7h+yXzwDximpK57LZ939fMHCmwgHXwbc2hxPcV9PuGFNjxLBhkDWX+xIP+R98YDjBeeG220LfqGWtQTAH/khWQmxWQmxXwhffuWsarRWneo1JA9+ApIw7x+xZQoPULtEzNyJZss+T0eQUFUZO5PjyZDZszZGB/4tysgNysgNz2qoBNsO2Xl1BW9Iyl58e61S/EnS9kKCP7rXZdb8c+iW+Yqtv27QnzNHSA/F7FOXMRfL5DKvL5Vu5Z0mmQWlfEgnkXXf51ZfQUe8rL3YLNFXOMaWP4WekLJ4RLGGOMMfvmAxb6Vmn6UWbCAAAAAElFTkSuQmCC",ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgB7ZjrcdswDMfhXr+XIygTNJ2g2sDewN6g3kAawRskncDuBHInSDOB1AmcDVDyBN1BMCDrYam5C393ONPSnyT4EPgAiEQikchHZgV3BBGd/9l6e1utVj8NzS78ePvtNRW8B7xTqbcC2+wVXSY0IU8K/wtfeaI4zsm8PZIu69AdgwaWxFe49XZRnLngbax8e1gCX9FOceDgzVFvv6BNQZpgz8r7+RuB9ZA3lN4eQW/kkd6XlN4ouoTeN5xgbrA9ApMrFB2yHZL3E4yjYukvMB3H0m8wgLEN2LF0BdP5y9LfYE78EP8QH93a0IUPeuMtJwtpZ2jTWT9kqiBEFhn+XsBupBYqS2+ZkacQ2gvVmcJUDOeDM4mifcLbPCn5ZDTq7KQhzidKz4Qp4RRtJrQF1uvDQXFO22o4KltqHYwF2/Oz6NA5UXGuaHLREa6jvIJp15auTxTii9Rrhy71llC68jvNXAro2Zn+Bue/gw2PTA+WqE8D+sZo3tBfHTreCV0hswLdhxZj14F3Q58G8F5fox3W/rD0V7Dh89kKwym0p9eg1VkWtsFrStkQ+oh5qM2UsjJRhpOOox5K1zAWcsxiI7R7paFNGC3Euxxud1RDAlPA+lSV43U8vwqFqO/xJc8iT6KUe6A6U7gnSmXagqQtRo1jmn7HNCXOfbzE9lQ5GZohm7nR54HPMA4ecdTzgF+0QuQ4kd1i8fMAjwoVTGf0eWDwxRbNz5I92mmXWDRdQpRK6FEYtTONjNQG3ZE9epjt0gvriIRdHx0OOA+gfouRwpxge1fZkOHtCyyudfQrG5rDEhiNkISebeJ5Kd5pI7TMxRZrhHWKChwV/dHQFqjcLS0G1guRnMeJonOK44PivuTe1+uhF0NECdHmbGhSqHerr5YmEolEIpG+/AOGHU9rXoyWFAAAAABJRU5ErkJggg==",lo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgB7diLTcMwEAbgP4gBMoJHYCO6ASPgTkCZgDIBYoKyAWzQbkA3OM7qoVrpy8/Eke6TrFSV6vi3Hcc1oJRSSqkZIiLDZcVlS5e9oEXcsAcuvxQAld0jkut5vnxw6eWrvZRzXtEaDrD2OvibS485Gcx5g7nxex8NuEO6PRqQEyALj+CCyyPG5k2hDRJJ4/89I8NkI+CxuSGilBgBqccO3nnjhCgVQOoaP0TJAFJfVojorURAgxZ8MYiz837jAqHruiVquDYCg9UlV9AS28IqlKXoFOJhdxs999EgzhOOu1tnyXW9o4ZrUyixvrfB1LGoqWSA0RsvNy0SYJLGy42zA9DpamWRqIVVyD2wFomKv8hCeKsVVVttLin1DJSSM4UMGpASYCfXnho4kUgJ8ClX1/gNTXwy0SGSNNidSPi9/4Pzf/K/qu0qc9DhaHFLAdAqOhzurm8EWUEppZSq6A9YyFwd6ZY3OwAAAABJRU5ErkJggg==",v=L=>(Oe("data-v-f06f7149"),L=L(),Ve(),L),no={class:"dark"},ro={class:"home-gpt"},io={class:"new clearfix"},co=["src"],uo=v(()=>o("img",{class:"icon",src:eo,alt:""},null,-1)),Ao={class:"groupList"},po={class:"time"},mo=["onClick"],go={class:"text-hide"},vo=v(()=>o("span",null,null,-1)),ho={class:"operate-poptip"},fo=["onClick"],_o={key:0,class:"user clearfix"},Co={class:"info clearfix"},yo={key:0,class:"pic",src:le},ko=["src"],Ro=["src"],wo={class:"fl"},Bo={class:"team"},Eo=v(()=>o("img",{class:"icon",src:to,alt:""},null,-1)),Mo=v(()=>o("img",{class:"icon",src:so,alt:""},null,-1)),So=v(()=>o("img",{class:"icon",src:ao,alt:""},null,-1)),Qo=v(()=>o("img",{class:"icon",src:lo,alt:""},null,-1)),xo={key:1,class:"user clearfix"},Io=["src"],bo={class:"content",style:{"padding-top":"10px"}},No={class:"indexModel"},Lo=v(()=>o("img",{class:"drop-down",src:He,alt:""},null,-1)),To={class:"i-200"},Uo={key:0,src:je,style:{height:"13px","margin-right":"4px"}},Do={class:"fr",style:{color:"#fff"}},Oo={class:"i-200 mt-10"},Vo={key:0,class:"newChat"},Fo={class:"help"},Xo=["src"],Go=v(()=>o("p",{class:"s20"},"我今天能帮你做什么?",-1)),Jo=v(()=>o("p",null,"How can I help you today?",-1)),zo={key:1,class:"list"},Wo={class:"multiModel-record-list"},Po={class:"inputArea"},Ho={class:"inputAreaContent"},jo={class:"copyright",style:{padding:"12px"}},Yo={class:"main bottom"},Ko=v(()=>o("img",{src:Ye},null,-1)),Zo=["innerHTML"],qo=Ie({__name:"teamIndex",setup(L){const T=s(!1),{Modal:ne}=Ge,O=s(),{proxy:a}=Ue(),re=oe("authtoken"),l=be(),C=Ne(),m=s([]),w=s(""),S=s(""),J=s(null);s([]),s(""),s("DZQ3.5");const V=s(""),B=s({});s([]);const Q=s("");s("");const E=s([]),z=s(null);s(null);const W=s(!0);s(!1);const x=s(!1),ie=s(!1),P=s(!1);s([{name:"AI角色",url:"/robot/role"},{name:"AI创作",url:"/robot/creative"},{name:"AI作画",url:"/robot/draw/list"},{name:"AI海报",url:"/robot/placard/list"},{name:"文件解读",url:"/robot/brain/networking"},{name:"思维导图分析",url:"/robot/tool/thinking"},{name:"图片识别分析",url:"/robot/tool/identify"},{name:"联网查询",url:"/robot/brain/agency"}]),s([{name:"对话",url:"https://www.chatdzq.com/share/MTczMzEyOTEwOTU4NTgxNzYwMnwxNzAyMDQ1MTU0MzY1"},{name:"智能客服",url:"/enterprise/aics?type=CUSTOMER_SERVICE"},{name:"智慧市场",url:"/enterprise/aics?type=SALES"},{name:"智能HR",url:"/enterprise/aics?type=HR"}]),s([{name:"我训练的",url:"/robot/train"},{name:"AI对话",url:"/robot/chat"},{name:"AI角色",url:"/robot/role"}]);const y=s(1),H=s("other"),h=s([]),I=s(!0),p=s({loadMore:!0,pageNo:1,pageSize:20});Le(()=>{a.$isLogin()&&(j(),l.getUserPoints(a),l.getChatLogo(a))}),C.currentRoute.value&&C.currentRoute.value.query&&C.currentRoute.value.query.secretKey&&(oe("secretKey").value=C.currentRoute.value.query.secretKey);const j=()=>{de()},ce=()=>{T.value=!1,p.value.pageNo=p.value.pageNo+1,K()},ue=()=>{T.value=!1},Ae=()=>{},de=()=>{a.$api.space_robotQueryAiModelList().then(t=>{h.value=t.data,Y()})},pe=()=>{H.value="other",b.value=!0,_.value=!1,a.$isEmpty(h.value)||(h.value.filter(t=>t.single=B.value.multiModelInfoResVOS.some(e=>e.code===t.code)),h.value.length==B.value.multiModelInfoResVOS.length&&(_.value=!0))},b=s(!1),_=s(!0),me=()=>{_.value=_.value,h.value.forEach(t=>{t.single=_.value})},Y=()=>{let t={type:"MULTIPLE_MODELS_CHAT"};a.$api.getMultiModelRobotInfo(t).then(e=>{B.value=e.data,V.value=e.data.type,S.value=e.data.code,J.value=e.data.consumeEnergy,h.value.filter(n=>n.single=e.data.multiModelInfoResVOS.some(f=>f.code===n.code)),h.value.length==e.data.multiModelInfoResVOS.length&&(_.value=!0),I.value=!0,y.value=1,U(),F()})},ge=()=>{let t={code:B.value.code,llmCodeList:[]};h.value.forEach(e=>{e.single&&t.llmCodeList.push(e.code)}),a.$api.editMultiModelRobotLlmModel(t).then(e=>{b.value=!1,Y()})},F=()=>{l.resetStream();let t={type:V.value,robotCode:S.value};a.$api.ai_bulidChatGroupId(t).then(e=>{Q.value=e.data,m.value=[],z.value=null,W.value=!0})},U=()=>{if(a.$isLogin()){let t={robotCode:S.value,type:V.value,pageNo:y.value,pageSize:20};I.value&&a.$api.queryAiRecordGroupPageList(t).then(e=>{if(e.data&&e.data.length==0){I.value=!1;return}let n=he(e.data);y.value>1?E.value=E.value.concat(n):E.value=n})}},ve=t=>{ne.confirm({okText:"确定",cancelText:"取消",content:"是否删除该数据?",onOk:()=>{let e={codeList:[t.code]};a.$api.deleteBatchAiRecordGroup(e).then(()=>{y.value=1,I.value=!0,E.value.length==1&&(E.value=[]),U(),a.$Message.success("已删除"),F()}).catch(()=>{})}})},he=t=>t.reduce((e,n)=>{let f=e.find(N=>N.group===n.gmtCreate);return f?f.records.push(n):e.push({group:n.gmtCreate,records:[n]}),e},[]),fe=(t,e)=>{l.resetStream(),p.value.pageNo=1,W.value=!1,Q.value=t,z.value=e,m.value=[],p.value.loadMore=!0,K()},K=()=>{let t={robotCode:S.value,groupId:Q.value,pageNo:p.value.pageNo,pageSize:p.value.pageSize};p.value.loadMore&&a.$api.queryNewAiRecordPageList(t).then(e=>{if(e.data&&e.data.length==0){p.value.loadMore=!1;return}let n=[];n.unshift(...e.data.reverse()),p.value.pageNo>1?(m.value=n.concat(m.value),O.value.toMediate()):(m.value=n,setTimeout(()=>{O.value.rollBottom()},300))})},_e=async()=>{var t;await Fe(),(t=document.querySelector("#bottoms"))==null||t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},Ce=t=>{if(!a.$isLogin()){a.$Message.error("请先登录！");return}let e={content:w.value,groupId:Q.value,robotCode:S.value};if(a.$isEmpty(w.value)){a.$Message.error("你还没有输入问题呢！");return}l.resetStream(),m.value.push({content:w.value,type:"USER",chatType:"CHAT"}),w.value="",_e(),a.$setAiChat(a,e,"",n=>{n.type=="[ONCOMPLETED]"&&(y.value=1,I.value=!0,p.value.loadMore=!0,p.value.pageNo=1,U()),n&&n.content&&a.$processChatData(m.value,n,B.value.type=="MULTIPLE_MODELS_CHAT")})},Z=a.$debounce(t=>{const{scrollTop:e,scrollHeight:n,clientHeight:f}=t.target;n-e-f<10&&(y.value=y.value+1,U())},300),ye=()=>{a.$versionCheck(),a.$isFirm()&&C.push(l.defJumpUrl)},ke=()=>{a.$versionCheck(),l.setFullPath("/"),C.push("/login")},q=s(),Re=()=>{a.$versionCheck(),q.value.showFn()},we=()=>{a.$versionCheck()},Be=()=>{let t=!1;P.value=!1,l.permList.forEach((e,n)=>{e.tempCode=="33151"&&(t=!0),e.tempCode=="33152"&&(P.value=!0),n==Number(l.permList.length-1)&&(ie.value=t)})};return te(()=>l.permList,()=>{l.firmParams&&l.firmParams.isPaidTeamFlag&&l.permList.length>0&&Be()},{deep:!0,immediate:!0}),te(()=>l.getChatMsg,t=>{t&&t.content&&a.$processChatData(m.value,t,!0)},{deep:!0}),Te(()=>{l.setIsDeniedFalse()}),(t,e)=>{const n=M("Poptip"),f=M("Dropdown"),N=De,$=M("Checkbox"),Ee=M("DropdownItem"),Me=M("DropdownMenu"),Se=M("Button"),Qe=ze;return c(),u("div",no,[o("div",ro,[o("div",{class:"nav",onScroll:e[4]||(e[4]=(...r)=>i(Z)&&i(Z)(...r))},[o("div",io,[o("div",{class:"area",onClick:F},[o("img",{class:"logo",src:i(l).configuration.logo,alt:""},null,8,co),g(" New chat "),uo])]),o("ul",Ao,[(c(!0),u(D,null,X(E.value,(r,ee)=>(c(),u("li",{key:t.time},[o("div",po,R(r.group),1),(c(!0),u(D,null,X(r.records,(k,$o)=>(c(),u("div",{class:G(["area",Q.value==k.groupId?"active":""]),key:k.code,onClick:xe=>fe(k.groupId,ee)},[o("p",go,[g(R(k.request)+" ",1),vo]),o("div",ho,[o("img",{onClick:ae(xe=>ve(k),["stop"]),src:oo},null,8,fo)])],10,mo))),128))]))),128))]),t.$isEmpty(i(re))?(c(),u("div",xo,[o("div",{class:"info",onClick:e[3]||(e[3]=r=>i(C).push("/login"))},[o("img",{class:"pic",src:i(le),alt:""},null,8,Io),g(" 立即登录 ")])])):(c(),u("div",_o,[A(N,null,{default:d(()=>[A(f,{trigger:"click",placement:"top","transfer-class-name":"dark-dropdown"},{list:d(()=>[o("ul",{class:"info-list"},[o("li",{onClick:ye},[Mo,g(" 企业/团队管理 ")]),o("li",{onClick:Re},[So,g(" 账号管理 ")]),o("li",{class:"logOut",onClick:ke},[Qo,g(" 退出登录 ")])])]),default:d(()=>[o("div",Co,[i(l).currentTean.personFlag?(c(),u(D,{key:0},[i(l).userLogo?(c(),u("img",{key:1,class:"pic",src:i(l).userLogo},null,8,ko)):(c(),u("img",yo))],64)):(c(),u("img",{key:1,class:"pic",src:i(l).currentTean.headPortrait},null,8,Ro)),o("div",wo,[o("p",null,R(i(l).currentTean.personFlag?i(l).nickName:i(l).currentTean.tenantName||"You"),1),o("p",Bo,[o("span",null,R(i(l).clientType=="TEAM"?"团队":"个人"),1)])]),A(n,{class:"poptip fr","transfer-class-name":"poptip-dark",modelValue:x.value,"onUpdate:modelValue":e[2]||(e[2]=r=>x.value=r),placement:"top",trigger:"click",transfer:!0},{content:d(()=>[A(We,{onInit:j,visible:x.value,onClose:e[1]||(e[1]=r=>x.value=!1)},null,8,["visible"])]),default:d(()=>[o("div",{class:"qh",onClick:e[0]||(e[0]=ae(r=>x.value=!0,["stop"]))},[Eo,o("span",{onClick:we},"切换")])]),_:1},8,["modelValue"])])]),_:1})]),_:1})]))],32),o("div",bo,[o("div",No,[A(N,null,{default:d(()=>[A(f,{trigger:"custom",visible:b.value,transfer:!0,"transfer-class-name":"dark-dropdown"},{list:d(()=>[A(Me,{class:"modelList"},{default:d(()=>[(c(!0),u(D,null,X(h.value,(r,ee)=>(c(),Xe(Ee,{class:"clearfix mb-4"},{default:d(()=>[o("div",To,[A($,{class:"fl",modelValue:r.single,"onUpdate:modelValue":k=>r.single=k},{default:d(()=>[r.hotFlag?(c(),u("img",Uo)):se("",!0),o("span",{class:G(r.hotFlag?"hotColor":"")},R(r.name),3)]),_:2},1032,["modelValue","onUpdate:modelValue"]),o("div",Do,"-"+R(r.consumeEnergy)+"电量",1)])]),_:2},1024))),256))]),_:1}),o("div",Oo,[A($,{class:"fl ml-18",modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=r=>_.value=r),onOnChange:e[6]||(e[6]=r=>me(r)),style:{color:"#fff"}},{default:d(()=>[g(" 全选 ")]),_:1},8,["modelValue"]),A(Se,{class:"fr",type:"primary",size:"small",onClick:ge},{default:d(()=>[g("确定")]),_:1})])]),default:d(()=>[o("a",{class:G(H.value=="other"?"active":""),onClick:pe,style:{"margin-left":"20px"}},[g(" 大模型选择 "),Lo],2)]),_:1},8,["visible"])]),_:1})]),t.$isEmpty(m.value)?(c(),u("div",Vo,[o("div",Fo,[o("img",{class:"logo",src:i(l).configuration.logo,alt:"",style:{"border-radius":"100px"}},null,8,Xo),Go,Jo])])):(c(),u("div",zo,[o("div",Wo,[A(Ze,{ref_key:"recordComRef",ref:O,isLoading:T.value,"onUpdate:isLoading":e[7]||(e[7]=r=>T.value=r),robotLogo:B.value.robotLogo||i(Ke),chatList:m.value,robotPromptList:[],jubao:!0,onScrollTop:ce,onScrollBottom:ue,onGetContent:Ae,isShowName:!0,functionHideList:["answer","share","edit"]},null,8,["isLoading","robotLogo","chatList"])])])),o("div",Po,[o("div",Ho,[A(qe,{content:w.value,"onUpdate:content":e[8]||(e[8]=r=>w.value=r),consumeEnergy:J.value,onSubmit:Ce},null,8,["content","consumeEnergy"])])])]),o("div",jo,[o("div",Yo,[Ko,g(" "+R(i(l).configuration.copyRight)+" 版权所有经营许可证： ",1),o("span",{class:"item-html4",innerHTML:i(l).configuration.recordNumber},null,8,Zo)])]),A(Pe),b.value?(c(),u("div",{key:0,class:"mask",onClick:e[9]||(e[9]=r=>b.value=!1)})):se("",!0),A(Qe),A($e,{ref_key:"accountRed",ref:q},null,512)])])}}});const Lt=Je(qo,[["__scopeId","data-v-f06f7149"]]);export{Lt as default};