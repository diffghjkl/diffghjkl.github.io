import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f as h,a as b,u as P}from"./chunks/vue-router.D-_Q7_oP.js";import{O as k,a4 as a,V as t,U as e,X as l,u as v,P as W,A as $}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const g=h("/posts/course-Win10-RD",async r=>JSON.parse('{"title":"论如何使用微软远程桌面","description":"","frontmatter":{"title":"论如何使用微软远程桌面","date":"2024-10-03 22:50","categories":"技术教程","tags":["Windows","Windows10","Windows11"],"img":"","comments":true,"readmore":true},"headers":[{"level":2,"title":"PC端","slug":"pc端","link":"#pc端","children":[]},{"level":2,"title":"手机端/另一台PC","slug":"手机端-另一台pc","link":"#手机端-另一台pc","children":[{"level":3,"title":"安卓","slug":"安卓","link":"#安卓","children":[]},{"level":3,"title":"另一台PC","slug":"另一台pc","link":"#另一台pc","children":[]}]}],"relativePath":"pages/posts/course-Win10-RD.md","lastUpdated":1743409198000}'),{lazy:(r,i)=>r.name===i.name}),E={__name:"course-Win10-RD",setup(r,{expose:i}){var d;const{data:s}=g(),m=P(),u=b(),o=Object.assign(u.meta.frontmatter||{},((d=s.value)==null?void 0:d.frontmatter)||{});return u.meta.frontmatter=o,m.currentRoute.value.data=s.value,$("valaxy:frontmatter",o),globalThis.$frontmatter=o,i({frontmatter:{title:"论如何使用微软远程桌面",date:"2024-10-03 22:50",categories:"技术教程",tags:["Windows","Windows10","Windows11"],img:"",comments:!0,readmore:!0}}),(n,c)=>{const p=f;return W(),k(p,{frontmatter:v(o)},{"main-content-md":a(()=>c[0]||(c[0]=[e("h1",{id:"前言",tabindex:"-1"},[l("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),e("p",null,"因为一些原因，我觉得我需要记录下…",-1),e("p",null,"Win10 & Win11 在部分功能命名上有些区别，请自行判断！",-1),e("h1",{id:"准备",tabindex:"-1"},[l("准备 "),e("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),e("ul",null,[e("li",null,"Windows10/11 或 Windows Server （2012-2022均支持，再往前的版本不知道…）"),e("li",null,"Android / IOS 手机"),e("li",null,"Microsoft Remote Desktop")],-1),e("h1",{id:"正文",tabindex:"-1"},[l("正文 "),e("a",{class:"header-anchor",href:"#正文","aria-label":'Permalink to "正文"'},"​")],-1),e("h2",{id:"pc端",tabindex:"-1"},[l("PC端 "),e("a",{class:"header-anchor",href:"#pc端","aria-label":'Permalink to "PC端"'},"​")],-1),e("p",null,[l("首先，通过 设置-系统-远程桌面 打开 "),e("code",null,"(启用)远程桌面")],-1),e("p",null,[l("然后在下方找到 "),e("code",null,"选择可远程访问这台电脑的用户"),l(" (Win10) 或 "),e("code",null,"远程桌面用户"),l(" (Win11)")],-1),e("p",null,[l("点击 "),e("code",null,"添加"),l(" ，输入你的用户名后，点击 "),e("code",null,"检查名称"),l(" ，正常输入后点击 "),e("code",null,"确定")],-1),e("blockquote",null,[e("p",null,"端口号请根据实际需求考虑是否更改，一般情况下无需更改")],-1),e("h2",{id:"手机端-另一台pc",tabindex:"-1"},[l("手机端/另一台PC "),e("a",{class:"header-anchor",href:"#手机端-另一台pc","aria-label":'Permalink to "手机端/另一台PC"'},"​")],-1),e("p",null,[l("在你的设备上打开 "),e("code",null,"Microsoft Remote Desktop"),l(" (安卓端,其他平台也有可能用这个名称) / "),e("code",null,"远程桌面连接"),l(" (Win10中文)")],-1),e("h3",{id:"安卓",tabindex:"-1"},[l("安卓 "),e("a",{class:"header-anchor",href:"#安卓","aria-label":'Permalink to "安卓"'},"​")],-1),e("blockquote",null,[e("p",null,"IOS端应该与安卓端通用，本部分仅作参考")],-1),e("p",null,[l("点击右上角的 "),e("code",null,"+"),l(" 添加，输入信息")],-1),e("blockquote",null,[e("p",null,"Tips： 1.以下内容适用于新版本，部分旧版本可能会存在差异 2.汉化版本的话可能会存在翻译不同，请以实际情况为准！")],-1),e("p",null,[l("第一栏 - PC NAME（电脑名称），可填入 PC端的 "),e("code",null,"设备名称"),l(" / "),e("code",null,"IP地址"),l(" (一般情况下是内网的)")],-1),e("blockquote",null,[e("p",null,[l("Tips：若是点击 "),e("code",null,"+"),l(" 后，检测到你的电脑，直接点击连接即可")])],-1),e("p",null,"第二栏 - USER ACCOUNT（用户账户），顾名思义，填入你的PC端账户密码",-1),e("blockquote",null,[e("p",null,"Tips: 1.若是未启用密码，且你的账户为本地账户，连接时可能会无法连接 2.若不确定你的账户名，可在 控制面板-用户账户 中查看 3.若是非本地账户，在装系统时登录了微软账户，且为启用本地密码，只使用了PIN，则连接密码为你第一次在电脑上登录的第一个微软账户的密码")],-1),e("p",null,"第三栏 - FRIENDLY NAME（易记名称），此为可选填项，该项填入你想为该连接命名的名称",-1),e("blockquote",null,[e("p",null,"Tips：剩下的选项一般用不到")],-1),e("p",null,"然后就可以愉快的连接啦~",-1),e("h3",{id:"另一台pc",tabindex:"-1"},[l("另一台PC "),e("a",{class:"header-anchor",href:"#另一台pc","aria-label":'Permalink to "另一台PC"'},"​")],-1),e("p",null,[l("点击 "),e("code",null,"显示选项")],-1),e("p",null,"“计算机” 部分填入你要连接的设备的IP地址",-1),e("p",null,"“用户名” 部分即为账户",-1),e("p",null,"点击连接后会要求输入密码，根据提示进行即可",-1),e("h1",{id:"后记",tabindex:"-1"},[l("后记 "),e("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),e("p",null,"感觉像是在水文章…",-1)])),"main-header":a(()=>[t(n.$slots,"main-header")]),"main-header-after":a(()=>[t(n.$slots,"main-header-after")]),"main-nav":a(()=>[t(n.$slots,"main-nav")]),"main-content-before":a(()=>[t(n.$slots,"main-content-before")]),"main-content":a(()=>[t(n.$slots,"main-content")]),"main-content-after":a(()=>[t(n.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(n.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(n.$slots,"main-nav-after")]),comment:a(()=>[t(n.$slots,"comment")]),footer:a(()=>[t(n.$slots,"footer")]),aside:a(()=>[t(n.$slots,"aside")]),"aside-custom":a(()=>[t(n.$slots,"aside-custom")]),default:a(()=>[t(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{E as default,g as usePageData};
