import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f as D,a as f,u as b}from"./chunks/vue-router.D-_Q7_oP.js";import{O as g,a4 as a,V as n,U as e,X as l,u as T,P as v,A as R}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const k=D("/posts/course-GPU-TDR",async o=>JSON.parse('{"title":"论如何修改WDDM TDR","description":"","frontmatter":{"title":"论如何修改WDDM TDR","date":"2024-10-27 17:12","categories":"技术教程","tags":["Windows","GPU","WDDM","WDDM TDR"],"img":"","comments":true,"readmore":true},"headers":[{"level":2,"title":"什么是 TDR（超时检测和恢复）","slug":"什么是-tdr-超时检测和恢复","link":"#什么是-tdr-超时检测和恢复","children":[]},{"level":2,"title":"如何修改TDR","slug":"如何修改tdr","link":"#如何修改tdr","children":[{"level":3,"title":"方法一: 修改注册表（通用方法）","slug":"方法一-修改注册表-通用方法","link":"#方法一-修改注册表-通用方法","children":[]},{"level":3,"title":"方法二: 利用Nsight修改（仅限于NVIDIA显卡）","slug":"方法二-利用nsight修改-仅限于nvidia显卡","link":"#方法二-利用nsight修改-仅限于nvidia显卡","children":[]}]}],"relativePath":"pages/posts/course-GPU-TDR.md","lastUpdated":1743409198000}'),{lazy:(o,i)=>o.name===i.name}),_={__name:"course-GPU-TDR",setup(o,{expose:i}){var u;const{data:s}=k(),m=b(),d=f(),r=Object.assign(d.meta.frontmatter||{},((u=s.value)==null?void 0:u.frontmatter)||{});return d.meta.frontmatter=r,m.currentRoute.value.data=s.value,R("valaxy:frontmatter",r),globalThis.$frontmatter=r,i({frontmatter:{title:"论如何修改WDDM TDR",date:"2024-10-27 17:12",categories:"技术教程",tags:["Windows","GPU","WDDM","WDDM TDR"],img:"",comments:!0,readmore:!0}}),(t,c)=>{const p=h;return v(),g(p,{frontmatter:T(r)},{"main-content-md":a(()=>c[0]||(c[0]=[e("h1",{id:"前言",tabindex:"-1"},[l("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),e("p",null,[l("近期在尝试使用 "),e("code",null,"Stable Diffusion"),l(" 进行AI绘画，")],-1),e("p",null,"但由于运行环境的 显卡性能不足 & TDR ，造成图片无法生成…",-1),e("blockquote",null,[e("p",null,[l("本文中提到的TDR为 "),e("code",null,"WDDM"),l("（全称 "),e("code",null,"Windows Display Driver Model"),l(" ，即 "),e("code",null,"Windows显示驱动程序模型"),l(" ） 下的功能")])],-1),e("h1",{id:"正文",tabindex:"-1"},[l("正文 "),e("a",{class:"header-anchor",href:"#正文","aria-label":'Permalink to "正文"'},"​")],-1),e("h2",{id:"什么是-tdr-超时检测和恢复",tabindex:"-1"},[l("什么是 TDR（超时检测和恢复） "),e("a",{class:"header-anchor",href:"#什么是-tdr-超时检测和恢复","aria-label":'Permalink to "什么是 TDR（超时检测和恢复）"'},"​")],-1),e("p",null,[l("全称 "),e("code",null,"Timeout Detection and Recovery")],-1),e("p",null,[l("在 "),e("code",null,"Windows Vista"),l(" 之后的版本会检查显卡不响应的情况，并通过重置显卡，保证操作系统继续正常运行。")],-1),e("p",null,"所以操作系统在一定时间内没有收到显卡的响应，便会触发重置。",-1),e("blockquote",null,[e("p",null,"Tips： (1) 响应超时的默认时间是2秒. (2) TDR 特性推出以前，遇到显卡未响应只能通过重启解决。而如今一旦遇到显卡问题你将会看到以下内容 Display driver stopped responding and has recovered （显卡驱动程序已停止响应，并且已恢复）")],-1),e("p",null,"该特性对于一般用户而言是非常有用。",-1),e("p",null,"但对于开发、调试GPU并行计算，使用某些使用GPU运算的软件，例如 Substance Painter ，",-1),e("p",null,"默认的 TDR 太短了。",-1),e("h2",{id:"如何修改tdr",tabindex:"-1"},[l("如何修改TDR "),e("a",{class:"header-anchor",href:"#如何修改tdr","aria-label":'Permalink to "如何修改TDR"'},"​")],-1),e("h3",{id:"方法一-修改注册表-通用方法",tabindex:"-1"},[l("方法一: 修改注册表（通用方法） "),e("a",{class:"header-anchor",href:"#方法一-修改注册表-通用方法","aria-label":'Permalink to "方法一: 修改注册表（通用方法）"'},"​")],-1),e("p",null,[l("按下 "),e("code",null,"Win"),l(" + "),e("code",null,"R"),l(" 键打开运行窗口")],-1),e("p",null,[l("输入 "),e("code",null,"regedit"),l(" 并回车，若遇到 "),e("a",{href:"https://learn.microsoft.com/zh-cn/windows/security/application-security/application-control/user-account-control/",target:"_blank",rel:"noreferrer"},"UAC（用户帐户控制概述）"),l(" ，请选择确认")],-1),e("p",null,[l("找到 "),e("code",null,"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers")],-1),e("p",null,[l("修改 "),e("code",null,"TdrDelay"),l(" 的数值，将进制设为十进制，修改数值（例如60）")],-1),e("blockquote",null,[e("p",null,[l("Tips: 若不存在 TdrDelay 的注册表项，则需在 "),e("code",null,"GraphicsDrivers"),l(" 下通过 "),e("code",null,"DWORD (32 位)值"),l(" 创建，并命名为 "),e("code",null,"TdrDelay")])],-1),e("p",null,"最后重启电脑就可以啦~",-1),e("h3",{id:"方法二-利用nsight修改-仅限于nvidia显卡",tabindex:"-1"},[l("方法二: 利用Nsight修改（仅限于NVIDIA显卡） "),e("a",{class:"header-anchor",href:"#方法二-利用nsight修改-仅限于nvidia显卡","aria-label":'Permalink to "方法二: 利用Nsight修改（仅限于NVIDIA显卡）"'},"​")],-1),e("p",null,[l("通过 "),e("a",{href:"https://developer.nvidia.com/nsight-graphics",target:"_blank",rel:"noreferrer"},"NVIDIA Nsight Graphics | NVIDIA Developer"),l(" 下载 "),e("code",null,"Nsight")],-1),e("blockquote",null,[e("p",null,"Tips: (1) 没记错的话似乎可以在安装显卡驱动时勾选 Nsight …(?) (2) 启动前请确保是以管理员身份启动 Nsight ！")],-1),e("p",null,[l("安装完成后，在任务栏图标中找到 Nsight ，右键选择 "),e("code",null,"Options")],-1),e("p",null,[l("在左侧的侧边栏中选择 "),e("code",null,"General")],-1),e("p",null,[l("然后在 "),e("code",null,"Microsoft Display Driver"),l(" 一项中修改 "),e("code",null,"WDDM TDR Delay"),l(" 或 "),e("code",null,"WDDM TDR enabled"),l(" （任选其一即可）")],-1),e("blockquote",null,[e("p",null,[e("code",null,"WDDM TDR Delay"),l(" 的数值修改开参考上方的例子（60） "),e("code",null,"WDDM TDR enabled"),l(" 修改为 "),e("code",null,"False"),l(" 即可")])],-1),e("p",null,"最后重启电脑就完成啦~",-1),e("h1",{id:"参考资料",tabindex:"-1"},[l("参考资料 "),e("a",{class:"header-anchor",href:"#参考资料","aria-label":'Permalink to "参考资料"'},"​")],-1),e("ul",null,[e("li",null,[e("p",null,[e("a",{href:"https://baike.baidu.com/item/WDDM/1408199",target:"_blank",rel:"noreferrer"},"WDDM - 百度百科")])]),e("li",null,[e("p",null,[e("a",{href:"https://learn.microsoft.com/zh-cn/windows-hardware/drivers/display/timeout-detection-and-recovery",target:"_blank",rel:"noreferrer"},"超时检测和恢复 (TDR) - Windows drivers | Microsoft Learn")])]),e("li",null,[e("p",null,[e("a",{href:"https://zhuanlan.zhihu.com/p/38141415",target:"_blank",rel:"noreferrer"},"什么是 TDR Issue 及修改方法 - 知乎")])])],-1),e("h1",{id:"后记",tabindex:"-1"},[l("后记 "),e("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),e("p",null,"感觉若是只需要 AI绘画 ，不如选择性能好的显卡…",-1),e("p",null,"毕竟性能不足就会造成生成时间延长…（悲）",-1),e("p",null,"当然，租个显卡云也不是不可，就是价钱…",-1),e("p",null,"说起来似乎可以白嫖谷歌云…（？）",-1)])),"main-header":a(()=>[n(t.$slots,"main-header")]),"main-header-after":a(()=>[n(t.$slots,"main-header-after")]),"main-nav":a(()=>[n(t.$slots,"main-nav")]),"main-content-before":a(()=>[n(t.$slots,"main-content-before")]),"main-content":a(()=>[n(t.$slots,"main-content")]),"main-content-after":a(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[n(t.$slots,"main-nav-after")]),comment:a(()=>[n(t.$slots,"comment")]),footer:a(()=>[n(t.$slots,"footer")]),aside:a(()=>[n(t.$slots,"aside")]),"aside-custom":a(()=>[n(t.$slots,"aside-custom")]),default:a(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{_ as default,k as usePageData};
