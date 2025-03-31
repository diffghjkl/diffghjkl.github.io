import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f,a as P,u as O}from"./chunks/vue-router.D-_Q7_oP.js";import{O as b,a4 as a,V as r,U as e,X as l,u as k,P as g,A as w}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const T=f("/posts/course-OPPOA83",async n=>JSON.parse('{"title":"OPPO A83 救砖&降级","description":"","frontmatter":{"title":"OPPO A83 救砖&降级","date":"2025-03-06 14:00","categories":"技术教程","tags":["OPPO","OPPO A83","刷机","深度刷机"]},"headers":[{"level":2,"title":"救砖","slug":"救砖","link":"#救砖","children":[]},{"level":2,"title":"降级","slug":"降级","link":"#降级","children":[]}],"relativePath":"pages/posts/course-OPPOA83.md","lastUpdated":1743409198000}'),{lazy:(n,s)=>n.name===s.name}),F={__name:"course-OPPOA83",setup(n,{expose:s}){var c;const{data:i}=T(),m=O(),u=P(),o=Object.assign(u.meta.frontmatter||{},((c=i.value)==null?void 0:c.frontmatter)||{});return u.meta.frontmatter=o,m.currentRoute.value.data=i.value,w("valaxy:frontmatter",o),globalThis.$frontmatter=o,s({frontmatter:{title:"OPPO A83 救砖&降级",date:"2025-03-06 14:00",categories:"技术教程",tags:["OPPO","OPPO A83","刷机","深度刷机"]}}),(t,d)=>{const p=h;return g(),b(p,{frontmatter:k(o)},{"main-content-md":a(()=>d[0]||(d[0]=[e("blockquote",null,[e("p",null,"本教程仅作记录，你不需要亲自尝试其中的每一个操作。如果你不知道自己在做什么，那就不要做。")],-1),e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},[e("span",{lang:"en"},"DANGER"),e("span",{lang:"zh-CN"},"警告")]),e("p",null,"若阅读本文并执行相关操作后出现设备损坏、隐私泄露、数据丢失等情况，则机主需要自行承担损失。")],-1),e("h1",{id:"前言",tabindex:"-1"},[l("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),e("p",null,[l("继 "),e("a",{href:"https://blog.dmoe.top/2024/02/23/log-OPPOA83-ROM/",target:"_blank",rel:"noreferrer"},"记一次失败的刷机经历"),l(" ，再次尝试 "),e("code",null,"OPPO A83"),l(" 这一机型")],-1),e("p",null,"本文可能会更新，请以最新版为准",-1),e("h1",{id:"准备",tabindex:"-1"},[l("准备 "),e("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),e("ul",null,[e("li",null,"一台 OPPO A83 设备"),e("li",null,"一台电脑"),e("li",null,"一条数据线"),e("li",null,[l("安装 "),e("a",{href:"https://diffghjkl.lanzouq.com/b0knwdt9c",target:"_blank",rel:"noreferrer"},"相关驱动"),l(" (密码: 32sn)")]),e("li",null,[l("ROM包 / "),e("a",{href:"https://www.123865.com/s/BOa8Vv-lex7A",target:"_blank",rel:"noreferrer"},"救砖包")]),e("li",null,[l("下载 "),e("a",{href:"https://diffghjkl.lanzouq.com/i0pRy2prllhe",target:"_blank",rel:"noreferrer"},"MediaTek SP Flash Tool"),l(" (简称 "),e("code",null,"SP Flash"),l(" )")])],-1),e("blockquote",null,[e("p",null,[l("Tips: 1.驱动采用 "),e("code",null,"[OPPO售后驱动]QcomMtk_Driver_Setup_V3.0.3"),l(" & "),e("code",null,"libusb-win32-devel-filter-1.2.6.0"),l(" 2.MediaTek SP Flash Tool 采用 "),e("code",null,"v5.1812.00"),l(" 版本 3.如果您需要拆机教程，请查看 "),e("a",{href:"https://www.bilibili.com/video/BV1cS4y1J7mK/",target:"_blank",rel:"noreferrer"},"OPPO A83 破解屏幕锁/救砖 拆机刷机教程_哔哩哔哩_bilibili"),l(" 4.如果您需要线刷包，可前往 "),e("a",{href:"https://onfix.cn/",target:"_blank",rel:"noreferrer"},"ONFIX"),l(" 下载（可能需要付费）")])],-1),e("h1",{id:"开始",tabindex:"-1"},[l("开始 "),e("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1),e("blockquote",null,[e("p",null,[l("请注意，"),e("code",null,"救砖"),l(" / "),e("code",null,"降级"),l(" 均会清除您的设备信息，请将重要数据备份后再进行操作！")])],-1),e("h2",{id:"救砖",tabindex:"-1"},[l("救砖 "),e("a",{class:"header-anchor",href:"#救砖","aria-label":'Permalink to "救砖"'},"​")],-1),e("p",null,[l("运行 "),e("code",null,"MediaTek SP Flash Tool")],-1),e("p",null,[e("code",null,"下载DA"),l(" 与 "),e("code",null,"验证文件"),l(" 默认即可")],-1),e("p",null,[e("code",null,"配置文件"),l(" 一项则选择 "),e("code",null,"救砖包"),l(" 中 "),e("code",null,"scatter.txt"),l(" 这样的文件 "),e("img",{src:"https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/XMS-uH68ILbiT-",alt:"1"})],-1),e("p",null,"对设备进行短接",-1),e("figure",null,[e("img",{src:"https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/JNGVQpyR2MNHit",alt:"2",loading:"lazy",decoding:"async"})],-1),e("blockquote",null,[e("p",null,"Tips: 若用 针 / 镊子 短接，可靠在旁边的屏蔽罩上")],-1),e("p",null,[l("检查 "),e("code",null,"设备管理器-端口"),l(" 中是否存在MTK端口（例如 "),e("code",null,"MediaTek USB Port"),l(" ）")],-1),e("p",null,[l("最后在 "),e("code",null,"MediaTek SP Flash Tool"),l(" 中点击 "),e("code",null,"下载"),l(" 进行刷入即可")],-1),e("h2",{id:"降级",tabindex:"-1"},[l("降级 "),e("a",{class:"header-anchor",href:"#降级","aria-label":'Permalink to "降级"'},"​")],-1),e("blockquote",null,[e("p",null,"该部分内容的操作环境为执行救砖操作后使用线刷包进行降级，无法保证其他条件下能否降级，请根据您的实际情况来判断！ 如果您的设备无法开机，请先进行救砖操作！")],-1),e("blockquote",null,[e("p",null,[l("Tips: 本部分采用的是出厂 ROM包(线刷包) ，如有需要请前往 "),e("a",{href:"https://www.123865.com/s/BOa8Vv-bex7A",target:"_blank",rel:"noreferrer"},"123云盘"),l(" 下载！")])],-1),e("p",null,[l("运行 "),e("code",null,"MediaTek SP Flash Tool")],-1),e("p",null,[l("在 "),e("code",null,"配置文件"),l(" 一项中选择要降级的 "),e("code",null,"ROM包"),l(" 中 "),e("code",null,"scatter.txt"),l(" 这样的文件（图就采用上一部分的了，方便）")],-1),e("figure",null,[e("img",{src:"https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/XMS-uH68ILbiT-",alt:"1",loading:"lazy",decoding:"async"})],-1),e("p",null,[l("在下方目录中取消全选，仅选择 "),e("code",null,"boot"),l(),e("code",null,"system"),l(),e("code",null,"cache"),l(),e("code",null,"userdata"),l(" 这四项")],-1),e("p",null,"然后对设备进行短接",-1),e("p",null,[l("（详见 "),e("a",{href:"https://blog.dmoe.top/2025/03/06/course-OPPOA83/#%E6%95%91%E7%A0%96",target:"_blank",rel:"noreferrer"},"救砖"),l(" 部分）")],-1),e("p",null,[l("最后在 "),e("code",null,"MediaTek SP Flash Tool"),l(" 中点击 "),e("code",null,"下载"),l(" 进行刷入即可")],-1),e("h1",{id:"参考资料",tabindex:"-1"},[l("参考资料 "),e("a",{class:"header-anchor",href:"#参考资料","aria-label":'Permalink to "参考资料"'},"​")],-1),e("ul",null,[e("li",null,[e("a",{href:"https://www.coolapk.com/feed/58499989?shareKey=MTkyZmVkN2E5YjM1NjdjOTRhYTc~",target:"_blank",rel:"noreferrer"},"OPPO a83，刷机解救砖及root - 酷安")]),e("li",null,[e("a",{href:"https://www.coolapk.com/feed/52449430?shareKey=ZjM4ODk5MGRkODMwNjdjOTRhYzM~",target:"_blank",rel:"noreferrer"},"OPPO A83 ROOT交作业啦！ - 酷安")]),e("li",null,[e("a",{href:"https://haitunrom.com/djt/oppo/5475.html",target:"_blank",rel:"noreferrer"},"OPPO A83 短接图 测试点 Test Point_OPPO_短接图/Test Point_海豚ROM")]),e("li",null,[e("a",{href:"https://www.coloros.com/rom/firmware?id=155",target:"_blank",rel:"noreferrer"},"OPPO A83/OPPO A1固件下载 - 手机版本更新升级 - 安卓刷机教程 - 系统优化 - ColorOS官方网站")]),e("li",null,[e("a",{href:"https://onfix.cn/rom/438808?oid=738908",target:"_blank",rel:"noreferrer"},"OPPO A83-官方固件-线刷包-A1、A83、A85系列_A.06_171218（Scatter固件）-ONFIX")])],-1),e("h1",{id:"后记",tabindex:"-1"},[l("后记 "),e("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),e("p",null,"这文章…怎么写了一个小时（",-1),e("p",null,"至于 解 BL & Root 我实在是没弄明白，如果各位有知道的可以在评论区留言",-1),e("p",null,"（XDA,酷安的root教程似乎不可行，或许是我的 环境 / 设备 问题？）",-1)])),"main-header":a(()=>[r(t.$slots,"main-header")]),"main-header-after":a(()=>[r(t.$slots,"main-header-after")]),"main-nav":a(()=>[r(t.$slots,"main-nav")]),"main-content-before":a(()=>[r(t.$slots,"main-content-before")]),"main-content":a(()=>[r(t.$slots,"main-content")]),"main-content-after":a(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[r(t.$slots,"main-nav-after")]),comment:a(()=>[r(t.$slots,"comment")]),footer:a(()=>[r(t.$slots,"footer")]),aside:a(()=>[r(t.$slots,"aside")]),"aside-custom":a(()=>[r(t.$slots,"aside-custom")]),default:a(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{F as default,T as usePageData};
