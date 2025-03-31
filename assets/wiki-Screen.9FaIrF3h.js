import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f as g,a as v,u as b}from"./chunks/vue-router.D-_Q7_oP.js";import{O as f,a4 as n,V as l,U as e,X as s,u as k,P as C,A as S}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const w=g("/posts/wiki-Screen",async i=>JSON.parse('{"title":"【Linux】Screen使用","description":"","frontmatter":{"title":"【Linux】Screen使用","date":"2022-01-27 18:38","categories":"计算机Wiki","tags":["Linux","Screen","Linux-Screen"],"img":"","comments":true,"readmore":true},"headers":[],"relativePath":"pages/posts/wiki-Screen.md","lastUpdated":1743409198000}'),{lazy:(i,r)=>i.name===r.name}),_={__name:"wiki-Screen",setup(i,{expose:r}){var p;const{data:c}=w(),d=b(),o=v(),t=Object.assign(o.meta.frontmatter||{},((p=c.value)==null?void 0:p.frontmatter)||{});return o.meta.frontmatter=t,d.currentRoute.value.data=c.value,S("valaxy:frontmatter",t),globalThis.$frontmatter=t,r({frontmatter:{title:"【Linux】Screen使用",date:"2022-01-27 18:38",categories:"计算机Wiki",tags:["Linux","Screen","Linux-Screen"],img:"",comments:!0,readmore:!0}}),(a,u)=>{const m=h;return C(),f(m,{frontmatter:k(t)},{"main-content-md":n(()=>u[0]||(u[0]=[e("p",null,[s("（本文主体内容来自"),e("a",{href:"https://blog.csdn.net/qq_28832135/article/details/79831700%EF%BC%8C%E6%9B%B4%E5%A4%9A%E5%86%85%E5%AE%B9%E8%AF%B7%E5%8F%82%E8%80%83%E6%AD%A4%E6%96%87%EF%BC%89",target:"_blank",rel:"noreferrer"},"https://blog.csdn.net/qq_28832135/article/details/79831700，更多内容请参考此文）")],-1),e("p",null,"（因为其他的我暂时用不到，实在是太多了…萌新的我排版不易~）",-1),e("h1",{id:"简介",tabindex:"-1"},[s("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),e("p",null,"Screen是一款由GNU计划开发的用于命令行终端切换的自由软件。用户可以通过该软件同时连接多个本地或远程的命令行会话，并在其间自由切换。GNU Screen可以看作是窗口管理器的命令行界面版本。它提供了统一的管理多个会话的界面和相应的功能。",-1),e("ul",null,[e("li",null,"会话恢复")],-1),e("p",null,"只要Screen本身没有终止，在其内部运行的会话都可以恢复。这一点对于远程登录的用户特别有用——即使网络连接中断，用户也不会失去对已经打开的命令行会话的控制。只要再次登录到主机上执行screen -r就可以恢复会话的运行。同样在暂时离开的时候，也可以执行分离命令detach，在保证里面的程序正常运行的情况下让Screen挂起（切换到后台）。这一点和图形界面下的VNC很相似。",-1),e("ul",null,[e("li",null,"多窗口")],-1),e("p",null,"在Screen环境下，所有的会话都独立的运行，并拥有各自的编号、输入、输出和窗口缓存。用户可以通过快捷键在不同的窗口下切换，并可以自由的重定向各个窗口的输入和输出。Screen实现了基本的文本操作，如复制粘贴等；还提供了类似滚动条的功能，可以查看窗口状况的历史记录。窗口还可以被分区和命名，还可以监视后台窗口的活动。 会话共享 Screen可以让一个或多个用户从不同终端多次登录一个会话，并共享会话的所有特性（比如可以看到完全相同的输出）。它同时提供了窗口访问权限的机制，可以对窗口进行密码保护。",-1),e("p",null,[s("GNU’s Screen 官方站点："),e("a",{href:"http://www.gnu.org/software/screen/",target:"_blank",rel:"noreferrer"},"http://www.gnu.org/software/screen/")],-1),e("h1",{id:"安装",tabindex:"-1"},[s("安装 "),e("a",{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},"​")],-1),e("p",null,"安装命令：",-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"yum install screen # (Centos)")]),s(`
`),e("span",{class:"line"},[e("span",null,"apt install screen # (Ubuntu)")])])]),e("button",{class:"collapse"})],-1),e("h1",{id:"运行",tabindex:"-1"},[s("运行 "),e("a",{class:"header-anchor",href:"#运行","aria-label":'Permalink to "运行"'},"​")],-1),e("ul",null,[e("li",null,"语法")],-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"screen [-AmRvx -ls -wipe][-d <作业名称>][-h <行数>][-r <作业名称>][-s ][-S <作业名称>]")])])]),e("button",{class:"collapse"})],-1),e("p",null,"运行命令（示例）： （创建一个名为test的screen）",-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"screen -S test")])])]),e("button",{class:"collapse"})],-1),e("p",null,"重新连接命令（示例）： （重新连接一个名为test的screen）",-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"screen -r test")])])]),e("button",{class:"collapse"})],-1),e("ul",null,[e("li",null,"选项")],-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"-A 　将所有的视窗都调整为目前终端机的大小")]),s(`
`),e("span",{class:"line"},[e("span",null,"-d <作业名称> 　将指定的screen作业离线")]),s(`
`),e("span",{class:"line"},[e("span",null,"-h <行数> 　指定视窗的缓冲区行数")]),s(`
`),e("span",{class:"line"},[e("span",null,"-m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-r <作业名称> 　恢复离线的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-r <作业名称> 　恢复离线的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-s 　指定建立新视窗时，所要执行的shell")]),s(`
`),e("span",{class:"line"},[e("span",null,"-S <作业名称> 　指定screen作业的名称")]),s(`
`),e("span",{class:"line"},[e("span",null,"-v 　显示版本信息")]),s(`
`),e("span",{class:"line"},[e("span",null,"-x 　恢复之前离线的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-ls或--list 　显示目前所有的screen作业")]),s(`
`),e("span",{class:"line"},[e("span",null,"-wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业")])])]),e("button",{class:"collapse"})],-1),e("p",null,"常用screen参数",-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"screen -S test -> 新建一个名为test的会话")]),s(`
`),e("span",{class:"line"},[e("span",null,"screen -ls -> 列出当前所有的会话")]),s(`
`),e("span",{class:"line"},[e("span",null,"screen -r test -> 回到test这个会话")]),s(`
`),e("span",{class:"line"},[e("span",null,"screen -d test -> 远程脱离test这个会话")]),s(`
`),e("span",{class:"line"},[e("span",null,"screen -d -r test -> 结束当前会话并回到test这个会话")])])]),e("button",{class:"collapse"})],-1),e("p",null,"在每个screen会话下，所有命令都以 ctrl+a(C-a) 开始。",-1),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"C-a ? -> 显示所有键绑定信息")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a c -> 创建一个新的运行shell的窗口并切换到该窗口")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a n -> Next，切换到下一个 window")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a p -> Previous，切换到前一个 window")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a 0..9 -> 切换到第 0..9 个 window")]),s(`
`),e("span",{class:"line"},[e("span",null,"Ctrl+a [Space] -> 由视窗0循序切换到视窗9")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a C-a -> 在两个最近使用的 window 间切换")]),s(`
`),e("span",{class:"line"},[e("span",null,"C-a x -> 锁住当前的 window，需用用户密码解锁")])])]),e("button",{class:"collapse"})],-1)])),"main-header":n(()=>[l(a.$slots,"main-header")]),"main-header-after":n(()=>[l(a.$slots,"main-header-after")]),"main-nav":n(()=>[l(a.$slots,"main-nav")]),"main-content-before":n(()=>[l(a.$slots,"main-content-before")]),"main-content":n(()=>[l(a.$slots,"main-content")]),"main-content-after":n(()=>[l(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[l(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[l(a.$slots,"main-nav-after")]),comment:n(()=>[l(a.$slots,"comment")]),footer:n(()=>[l(a.$slots,"footer")]),aside:n(()=>[l(a.$slots,"aside")]),"aside-custom":n(()=>[l(a.$slots,"aside-custom")]),default:n(()=>[l(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{_ as default,w as usePageData};
