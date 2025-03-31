import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f,a as b,u as g}from"./chunks/vue-router.D-_Q7_oP.js";import{O as v,a4 as a,V as e,U as l,X as n,u as k,P as w,A as x}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const C=f("/posts/course-Frp",async p=>JSON.parse('{"title":"Frp搭建","description":"","frontmatter":{"title":"Frp搭建","date":"2022-05-08 16:12:39","categories":"技术教程","tags":["Frp搭建","Frp服务端搭建","Frp客户端搭建"],"img":"","comments":true,"readmore":true},"headers":[{"level":2,"title":"服务端搭建","slug":"服务端搭建","link":"#服务端搭建","children":[{"level":3,"title":"*使用 Linux 作为服务端","slug":"使用-linux-作为服务端","link":"#使用-linux-作为服务端","children":[]},{"level":3,"title":"*使用 Windows 作为服务端","slug":"使用-windows-作为服务端","link":"#使用-windows-作为服务端","children":[]}]},{"level":2,"title":"客户端搭建","slug":"客户端搭建","link":"#客户端搭建","children":[{"level":3,"title":"*使用 Linux 作为客户端","slug":"使用-linux-作为客户端","link":"#使用-linux-作为客户端","children":[]},{"level":3,"title":"*使用 Windows 作为客户端","slug":"使用-windows-作为客户端","link":"#使用-windows-作为客户端","children":[]}]}],"relativePath":"pages/posts/course-Frp.md","lastUpdated":1743409198000}'),{lazy:(p,t)=>p.name===t.name}),R={__name:"course-Frp",setup(p,{expose:t}){var u;const{data:r}=C(),d=g(),o=b(),i=Object.assign(o.meta.frontmatter||{},((u=r.value)==null?void 0:u.frontmatter)||{});return o.meta.frontmatter=i,d.currentRoute.value.data=r.value,x("valaxy:frontmatter",i),globalThis.$frontmatter=i,t({frontmatter:{title:"Frp搭建",date:"2022-05-08 16:12:39",categories:"技术教程",tags:["Frp搭建","Frp服务端搭建","Frp客户端搭建"],img:"",comments:!0,readmore:!0}}),(s,c)=>{const m=h;return w(),v(m,{frontmatter:k(i)},{"main-content-md":a(()=>c[0]||(c[0]=[l("h1",{id:"前言",tabindex:"-1"},[n("前言 "),l("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),l("p",null,"因为一些原因，我开始接触Frp",-1),l("p",null,"然而我发现，网上相关的教程不是很全，于是这篇文章就诞生了！",-1),l("p",null,"本篇文章主要是帮助我以后使用而记录的",-1),l("p",null,[l("s",null,"其实事实是想水篇文章")],-1),l("h1",{id:"准备",tabindex:"-1"},[n("准备 "),l("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),l("ul",null,[l("li",null,"一台有公网的服务器/电脑"),l("li",null,"一台没有公网的服务器/电脑"),l("li",null,[n("下载 "),l("a",{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noreferrer"},"Frp")])],-1),l("h1",{id:"教程",tabindex:"-1"},[n("教程 "),l("a",{class:"header-anchor",href:"#教程","aria-label":'Permalink to "教程"'},"​")],-1),l("p",null,"服务器端和内网机器端下载的版本要相同，否则可能会影响内网穿透；根据服务器系统选择合适的版本",-1),l("p",null,"Tips：frps前缀的是服务端所需的文件，frpc前缀的是客户端所需的文件 服务端可只保留服务端文件，客户端同理",-1),l("h2",{id:"服务端搭建",tabindex:"-1"},[n("服务端搭建 "),l("a",{class:"header-anchor",href:"#服务端搭建","aria-label":'Permalink to "服务端搭建"'},"​")],-1),l("h3",{id:"使用-linux-作为服务端",tabindex:"-1"},[n("*使用 Linux 作为服务端 "),l("a",{class:"header-anchor",href:"#使用-linux-作为服务端","aria-label":'Permalink to "*使用 Linux 作为服务端"'},"​")],-1),l("p",null,"1.将解压压缩包并命重命名文件夹为frp：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mkdir frp")]),n(`
`),l("span",{class:"line"},[l("span",null,"tar  xzvf frp_0.42.0_linux_386.tar.gz")]),n(`
`),l("span",{class:"line"},[l("span",null,"mv  frp_0.42.0_linux_386  frp")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 创建frp文件夹，然后上传linux压缩包至文件夹并解压")])])]),l("button",{class:"collapse"})],-1),l("p",null,"如果版本与我的不同，请不要忘记更改文件名！",-1),l("p",null,"2.修改服务端配置文件（Frps.ini）",-1),l("p",null,[n("(1)进入frp文件夹下："),l("code",null,"cd frp"),n("，修改frps.ini文件 （"),l("code",null,"vim frps.ini"),n("）")],-1),l("p",null,"(2)修改完成，:wq 退出",-1),l("p",null,"默认的配置文件：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"[common]")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 内网穿透服务器端监听的IP地址，可以省略，默认为127.0.0.1")]),n(`
`),l("span",{class:"line"},[l("span",null,"bind_addr = 0.0.0.0")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 服务器端监听的端口，默认是7000，可自定义")]),n(`
`),l("span",{class:"line"},[l("span",null,"bind_port = 7001")])])]),l("button",{class:"collapse"})],-1),l("p",null,"如果无特殊需要可不更改",-1),l("p",null,"3.启动服务端",-1),l("p",null,"启动命令：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"./frps -c frps.ini")])])]),l("button",{class:"collapse"})],-1),l("p",null,"停止服务： Ctrl+C",-1),l("p",null,"如果看到 Start frps success ，说明启动成功",-1),l("p",null,"4.端口开放",-1),l("p",null,"这部分建议根据自己的系统百度~",-1),l("p",null,[l("s",null,"懒得写了")],-1),l("p",null,"如果是 腾讯云，阿里云 这些服务商的，请不要忘记在 安全组/防火墙 开放端口！",-1),l("h3",{id:"使用-windows-作为服务端",tabindex:"-1"},[n("*使用 Windows 作为服务端 "),l("a",{class:"header-anchor",href:"#使用-windows-作为服务端","aria-label":'Permalink to "*使用 Windows 作为服务端"'},"​")],-1),l("p",null,"1.将解压压缩包并命重命名文件夹为frp",-1),l("p",null,"2.修改服务端配置文件（Frps.ini） （参考 使用 Linux 作为服务端 ）",-1),l("p",null,"3.启动服务端",-1),l("p",null,"进入frp文件夹，按住 Shift 并右键点击空白处，点击在此处打开 PowerShell 窗口",-1),l("p",null,"Tips：我这里是 Windows10 ，如果是 Windows7 可能为 cmd窗口，直接执行 frps.exe -c frps.ini 即可",-1),l("p",null,[n("然后在 Powershell 输入 "),l("code",null,"cmd")],-1),l("p",null,[n("最后输入 "),l("code",null,"frps.exe -c frps.ini"),n(" 即可启动服务端")],-1),l("p",null,"如果看到 Start frps success ，说明启动成功",-1),l("p",null,"Ctrl+C 停止服务",-1),l("p",null,"（如果觉得麻烦可自行写一个bat脚本）",-1),l("p",null,"4.端口开放",-1),l("p",null,"这部分建议根据自己的系统百度~",-1),l("p",null,[l("s",null,"懒得写了")],-1),l("p",null,"如果是 腾讯云，阿里云 这些服务商的，请不要忘记在 安全组/防火墙 开放端口！",-1),l("h2",{id:"客户端搭建",tabindex:"-1"},[n("客户端搭建 "),l("a",{class:"header-anchor",href:"#客户端搭建","aria-label":'Permalink to "客户端搭建"'},"​")],-1),l("h3",{id:"使用-linux-作为客户端",tabindex:"-1"},[n("*使用 Linux 作为客户端 "),l("a",{class:"header-anchor",href:"#使用-linux-作为客户端","aria-label":'Permalink to "*使用 Linux 作为客户端"'},"​")],-1),l("p",null,"1.将解压压缩包并命重命名文件夹为frp：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mkdir frp")]),n(`
`),l("span",{class:"line"},[l("span",null,"tar  xzvf frp_0.42.0_linux_386.tar.gz")]),n(`
`),l("span",{class:"line"},[l("span",null,"mv  frp_0.42.0_linux_386  frp")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 创建frp文件夹，然后上传linux压缩包至文件夹并解压")])])]),l("button",{class:"collapse"})],-1),l("p",null,"如果版本与我的不同，请不要忘记更改文件名！",-1),l("p",null,"2.修改服务端配置文件（Frpc.ini）",-1),l("p",null,[n("(1)进入frp文件夹下："),l("code",null,"cd frp"),n("，修改frps.ini文件 （"),l("code",null,"vim frpc.ini"),n("）")],-1),l("p",null,"(2)修改完成，:wq 退出",-1),l("p",null,"配置文件请根据自己的需求更改！",-1),l("p",null,"[common] 部分是服务端的配置，请与服务端的配置保持一致！",-1),l("p",null,"例：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 客户端配置")]),n(`
`),l("span",{class:"line"},[l("span",null,"[common]")]),n(`
`),l("span",{class:"line"},[l("span",null,"server_addr = 服务器ip")]),n(`
`),l("span",{class:"line"},[l("span",null,"server_port = 7000 # 与frps.ini的bind_port一致")]),n(`
`),l("span",{class:"line"},[l("span",null,"token = 52010  # 与frps.ini的token一致")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 配置ssh服务")]),n(`
`),l("span",{class:"line"},[l("span",null,"[ssh]")]),n(`
`),l("span",{class:"line"},[l("span",null,"type = tcp")]),n(`
`),l("span",{class:"line"},[l("span",null,"local_ip = 127.0.0.1")]),n(`
`),l("span",{class:"line"},[l("span",null,"local_port = 22")]),n(`
`),l("span",{class:"line"},[l("span",null,"remote_port = 6000  # 这个自定义，之后再ssh连接的时候要用")])])]),l("button",{class:"collapse"})],-1),l("p",null,"3.启动客户端",-1),l("p",null,"启动命令：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"./frpc -c ./frpc.ini")])])]),l("button",{class:"collapse"})],-1),l("p",null,"停止服务： Ctrl+C",-1),l("p",null,"如果看到 start proxy success ，说明启动成功",-1),l("h3",{id:"使用-windows-作为客户端",tabindex:"-1"},[n("*使用 Windows 作为客户端 "),l("a",{class:"header-anchor",href:"#使用-windows-作为客户端","aria-label":'Permalink to "*使用 Windows 作为客户端"'},"​")],-1),l("p",null,"1.将解压压缩包并命重命名文件夹为frp",-1),l("p",null,"2.修改客户端配置文件（Frpc.ini） （参考 使用 Linux 作为客户端 ）",-1),l("p",null,"3.启动客户端",-1),l("p",null,"进入frp文件夹，按住 Shift 并右键点击空白处，点击在此处打开 PowerShell 窗口",-1),l("p",null,"Tips：我这里是 Windows10 ，如果是 Windows7 可能为 cmd窗口",-1),l("p",null,[n("然后在 Powershell 输入 "),l("code",null,"cmd")],-1),l("p",null,[n("最后输入 "),l("code",null,"frpc.exe -c frpc.ini"),n(" 即可启动服务端")],-1),l("p",null,"如果看到 start proxy success ，说明启动成功",-1),l("p",null,"Ctrl+C 停止服务",-1),l("p",null,"（如果觉得麻烦可自行写一个bat脚本）",-1),l("h1",{id:"后记",tabindex:"-1"},[n("后记 "),l("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),l("p",null,"在启动服务端&客户端的时候请不要忘记：需要进入Frp所在的文件目录！！！",-1),l("p",null,"在写完这篇文章后，我发现了一个问题",-1),l("p",null,"似乎没什么写的必要…",-1),l("p",null,[l("s",null,"不过能水个文章也是值得的！")],-1)])),"main-header":a(()=>[e(s.$slots,"main-header")]),"main-header-after":a(()=>[e(s.$slots,"main-header-after")]),"main-nav":a(()=>[e(s.$slots,"main-nav")]),"main-content-before":a(()=>[e(s.$slots,"main-content-before")]),"main-content":a(()=>[e(s.$slots,"main-content")]),"main-content-after":a(()=>[e(s.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(s.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(s.$slots,"main-nav-after")]),comment:a(()=>[e(s.$slots,"comment")]),footer:a(()=>[e(s.$slots,"footer")]),aside:a(()=>[e(s.$slots,"aside")]),"aside-custom":a(()=>[e(s.$slots,"aside-custom")]),default:a(()=>[e(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{R as default,C as usePageData};
