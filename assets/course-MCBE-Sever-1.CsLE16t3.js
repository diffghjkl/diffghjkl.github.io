import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f as v,a as b,u as g}from"./chunks/vue-router.D-_Q7_oP.js";import{O as f,a4 as s,V as e,U as n,X as l,u as k,P as w,A as y}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const C=v("/posts/course-MCBE-Sever-1",async t=>JSON.parse('{"title":"Windows/Linux搭建MinecraftBE(基岩版)原版服务器","description":"","frontmatter":{"title":"Windows/Linux搭建MinecraftBE(基岩版)原版服务器","date":"2022-06-28 14:10:24","categories":"技术教程","tags":["MCBE服务器教程","MinecraftBE服务器教程"],"img":"","comments":true,"readmore":true},"headers":[{"level":2,"title":"*使用 Windows 搭建","slug":"使用-windows-搭建","link":"#使用-windows-搭建","children":[]},{"level":2,"title":"*使用 Linux 搭建","slug":"使用-linux-搭建","link":"#使用-linux-搭建","children":[]}],"relativePath":"pages/posts/course-MCBE-Sever-1.md","lastUpdated":1743409198000}'),{lazy:(t,p)=>t.name===p.name}),T={__name:"course-MCBE-Sever-1",setup(t,{expose:p}){var c;const{data:r}=C(),d=g(),o=b(),i=Object.assign(o.meta.frontmatter||{},((c=r.value)==null?void 0:c.frontmatter)||{});return o.meta.frontmatter=i,d.currentRoute.value.data=r.value,y("valaxy:frontmatter",i),globalThis.$frontmatter=i,p({frontmatter:{title:"Windows/Linux搭建MinecraftBE(基岩版)原版服务器",date:"2022-06-28 14:10:24",categories:"技术教程",tags:["MCBE服务器教程","MinecraftBE服务器教程"],img:"",comments:!0,readmore:!0}}),(a,u)=>{const m=h;return w(),f(m,{frontmatter:k(i)},{"main-content-md":s(()=>u[0]||(u[0]=[n("h1",{id:"前言",tabindex:"-1"},[l("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),n("p",null,[l("如果需要使用其他设备搭建，请前往 "),n("a",{href:"https://blog.dmoe.top/2022/06/28/course-MCBE-Sever/",target:"_blank",rel:"noreferrer"},"MinecraftBE(基岩版)服务器搭建(总篇)"),l(" 查看！")],-1),n("p",null,"本文以官方提供的服务端为例！",-1),n("h1",{id:"准备",tabindex:"-1"},[l("准备 "),n("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),n("ul",null,[n("li",null,"一台有公网IP的电脑/服务器"),n("li",null,[n("a",{href:"https://www.minecraft.net/en-us/download/server/bedrock",target:"_blank",rel:"noreferrer"},"BDS服务端")]),n("li",null,[l("Windows系统 建议 "),n("code",null,"Windows10专业版"),l(" / "),n("code",null,"Windows Server 2016"),l(" 及以上")]),n("li",null,[l("Linux系统 建议 "),n("code",null,"Ubuntu18.04"),l(" 及以上")])],-1),n("p",null,[l("如果没有公网IP，可自行寻找Frp提供商，或者参考 "),n("a",{href:"https://blog.dmoe.top/2022/05/08/course-Frp/",target:"_blank",rel:"noreferrer"},"Frp搭建"),l(" 自行搭建！")],-1),n("h1",{id:"教程",tabindex:"-1"},[l("教程 "),n("a",{class:"header-anchor",href:"#教程","aria-label":'Permalink to "教程"'},"​")],-1),n("h2",{id:"使用-windows-搭建",tabindex:"-1"},[l("*使用 Windows 搭建 "),n("a",{class:"header-anchor",href:"#使用-windows-搭建","aria-label":'Permalink to "*使用 Windows 搭建"'},"​")],-1),n("ol",null,[n("li",null,[l("下载BDS需要的 "),n("a",{href:"https://diffghjkl.lanzouf.com/b017q3omj",target:"_blank",rel:"noreferrer"},"VC运行库（密码:dbmbvc）")])],-1),n("p",null,"然后根据提示安装即可",-1),n("p",null,[l("之后，将 "),n("code",null,"BDS服务端"),l(" 解压到你想要的位置")],-1),n("ol",{start:"2"},[n("li",null,[l("打开 "),n("code",null,"bedrock_server.exe"),l(" ，测试运行环境是否正常，如果出现 "),n("code",null,"Server started."),l(" ,则说明一切正常")])],-1),n("figure",null,[n("img",{src:"https://api.mluk.cn/images/Snipaste_2022-06-28_15-00-47.png",alt:"1",loading:"lazy",decoding:"async"})],-1),n("p",null,"接下来就是自行设置啦~",-1),n("p",null,"（至于为什么没写如何设置，我是准备之后再写~烦请耐心等待！）",-1),n("h2",{id:"使用-linux-搭建",tabindex:"-1"},[l("*使用 Linux 搭建 "),n("a",{class:"header-anchor",href:"#使用-linux-搭建","aria-label":'Permalink to "*使用 Linux 搭建"'},"​")],-1),n("p",null,[l("（这里以搭建起来最为简单的 "),n("code",null,"Ubuntu系统"),l(" 为例，至于 "),n("code",null,"CentOS系统"),l(" 的，我之后会写的~）")],-1),n("ol",null,[n("li",null,"创建一个目录")],-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"mkdir bds")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 我这里以bds为例")])])]),n("button",{class:"collapse"})],-1),n("p",null,"然后进入该目录",-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"cd bds")])])]),n("button",{class:"collapse"})],-1),n("ol",{start:"2"},[n("li",null,"接下来，下载BDS服务端")],-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.19.2.02.zip")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 这里以1.19.2.02版本为例，其他版本请自行更改链接")])])]),n("button",{class:"collapse"})],-1),n("p",null,"然后解压",-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"unzip bedrock-server-1.19.2.02.zip")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 不要忘记把文件名改为你所下载的版本！")])])]),n("button",{class:"collapse"})],-1),n("p",null,[l("Tips：如果担心未解压成功，可使用 "),n("code",null,"ls"),l(" 命令查看当前目录的文件")],-1),n("p",null,"在当前目录给予文件权限",-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"sudo chmod 775 ./*")])])]),n("button",{class:"collapse"})],-1),n("p",null,"先测试下服务端是否可以正常运行",-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"LD_LIBRARY_PATH=. ./bedrock_server")])])]),n("button",{class:"collapse"})],-1),n("ol",{start:"3"},[n("li",null,[l("使用 "),n("code",null,"screen"),l(" 软件让服务端保持后台运行")])],-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"apt install screen # 安装 screen")]),l(`
`),n("span",{class:"line"},[n("span",null,"screen -S bds # 创建一个名为 bds 的窗口")]),l(`
`),n("span",{class:"line"},[n("span",null,"cd bds")]),l(`
`),n("span",{class:"line"},[n("span",null,"LD_LIBRARY_PATH=. ./bedrock_server")])])]),n("button",{class:"collapse"})],-1),n("p",null,[l("Tips：如果觉得输入启动命令麻烦的话，可以创建一个 "),n("code",null,"start.sh"),l(" 文件，将 "),n("code",null,"LD_LIBRARY_PATH=. ./bedrock_server"),l(" 复制到该文件里，之后输入 "),n("code",null,"sh start.sh"),l(" 就可以启动服务器啦~")],-1),n("h1",{id:"常见问题",tabindex:"-1"},[l("常见问题 "),n("a",{class:"header-anchor",href:"#常见问题","aria-label":'Permalink to "常见问题"'},"​")],-1),n("p",null,"Q1：服务端的配置文件是什么？",-1),n("p",null,[l("A1：在你解压到的路径根目录，名为 "),n("code",null,"server.properties"),l(" 的文件就是啦~")],-1),n("p",null,"Q2：配置文件看不懂欸…",-1),n("p",null,[l("A2：呃…那就看下面这个吧（摘自 "),n("a",{href:"https://www.gymxbl.com/868.html",target:"_blank",rel:"noreferrer"},"孤影墨香"),l(" ）")],-1),n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"server-name=LinMS")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 服务器的描述信息，这个在选择服务器界面的副标题，因为正标题被玩家自定义名字所限制。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 可以输入: 任意内容")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"gamemode=survival")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 设置玩家默认游戏模式")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以设置: "survival"生存, "creative",创造 或者 "adventure"冒险')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"difficulty=hard")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 设置默认游戏难度")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以设置: "peaceful", 和平"easy",简单 "normal", 普通，或者 "hard"困难')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"allow-cheats=false")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 开启作弊，如果打开它，你将可以使用命令。但会导致成就失效?")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以设置: "true" 或者 "false"')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-players=30")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 最大同时在线玩家数")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以设置: 任意数字")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"online-mode=true")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 在线验证，如果你开启在线验证，玩家需先登录Xbox才可加入服务器。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 如果关闭此项，你必须开启登录插件，但遗憾的是官服没有登录插件。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 如果你尝试用白名单替代登录插件，那么很遗憾，有心人只需要冒用ID即可进服。")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以选择: "true" 或者 "false"')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"white-list=true")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 白名单，，开启后必须在白名单内才可进服。你可以通过此项来防止恶意熊服，也可以准备两套白名单，一套正常玩，另一套停服维护。")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以选择: "true" 或者 "false"')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-port=19132")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 在ipv4网络环境下的端口，不能和已有端口重复，如果重复将随机选取")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以选择: 选择范围 [1, 65535]")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-portv6=19133")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 在IPv6网络环境下的端口，不能和已有端口重复，但要知道，服务器需要有ipv6地址才可以使用此端口通信，玩家也必须有ipv6才可连接")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以选择: 选择范围 [1, 65535]")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"view-distance=5")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 玩家最大视距，这个将会以服务器为准，哪怕玩家设置再大也会被限制。如果设置为0将不再设限。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: 任意数值")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"tick-distance=4")]),l(`
`),n("span",{class:"line"},[n("span",null,"# The world will be ticked this many chunks away from any player.")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: Integers in the range [4, 12]")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"player-idle-timeout=600")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 玩家超时时间，防止玩家挂机。如果设置为0将不再设限。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: 任何非负数")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-threads=8")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 服务器最大线程数。如果设置为0将会自动选择。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: 任意数值")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-name=Bedrock level")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: 任意地图名")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-seed=")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 选择一个地图种子，留空为随机，仅对第一次开服无地图生效。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 你可以填写: 任意种子")]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"default-player-permission-level=member")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 默认玩家游戏权限")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以选择: "visitor", "member", "operator"')]),l(`
`),n("span",{class:"line"},[n("span",null," ")]),l(`
`),n("span",{class:"line"},[n("span",null,"texturepack-required=false")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 强制锁定材质包 用途防材质作弊")]),l(`
`),n("span",{class:"line"},[n("span",null,'# 你可以选择: "true" 或者 "false"')])])]),n("button",{class:"collapse"})],-1),n("h1",{id:"后记",tabindex:"-1"},[l("后记 "),n("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),n("p",null,"写这篇文章前前后后大概用掉了近2个小时的时间？",-1),n("p",null,[n("s",null,"（虽然不是详细版的教程…）")],-1),n("p",null,"希望这篇文章能对你有所帮助！",-1)])),"main-header":s(()=>[e(a.$slots,"main-header")]),"main-header-after":s(()=>[e(a.$slots,"main-header-after")]),"main-nav":s(()=>[e(a.$slots,"main-nav")]),"main-content-before":s(()=>[e(a.$slots,"main-content-before")]),"main-content":s(()=>[e(a.$slots,"main-content")]),"main-content-after":s(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[e(a.$slots,"main-nav-after")]),comment:s(()=>[e(a.$slots,"comment")]),footer:s(()=>[e(a.$slots,"footer")]),aside:s(()=>[e(a.$slots,"aside")]),"aside-custom":s(()=>[e(a.$slots,"aside-custom")]),default:s(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{T as default,C as usePageData};
