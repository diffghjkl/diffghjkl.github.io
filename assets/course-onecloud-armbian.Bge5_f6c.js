import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B01FbMXu.js";import{f as g,a as m,u as k}from"./chunks/vue-router.D-_Q7_oP.js";import{O as v,a4 as e,V as n,U as l,X as a,u as f,P as y,A as C}from"./framework.Dgcs2LT9.js";import"./app.D8oq4TlO.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.Pk7juk7B.js";import"./chunks/pinia.BTSak0HZ.js";import"./chunks/@vueuse/motion.Bl2BVRRZ.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.CaReWcLM.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CJdQCG6o.js";import"./post.gvOBDZ84.js";const P=g("/posts/course-onecloud-armbian",async i=>JSON.parse('{"title":"论玩客云(onecloud)如何刷入Armbian&安装Docker/1Panel","description":"","frontmatter":{"title":"论玩客云(onecloud)如何刷入Armbian&安装Docker/1Panel","date":"2024-07-22 20:00:00","categories":"技术教程","tags":["玩客云","Armbian","刷机"],"img":"","comments":true,"readmore":true},"headers":[{"level":2,"title":"必备","slug":"必备","link":"#必备","children":[]},{"level":2,"title":"非必备","slug":"非必备","link":"#非必备","children":[]},{"level":2,"title":"刷入Armbian","slug":"刷入armbian","link":"#刷入armbian","children":[]},{"level":2,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装1Panel","slug":"安装1panel","link":"#安装1panel","children":[]},{"level":2,"title":"安装qbittorrent","slug":"安装qbittorrent","link":"#安装qbittorrent","children":[{"level":3,"title":"访问WebUI","slug":"访问webui","link":"#访问webui","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"Tracker服务器","slug":"tracker服务器","link":"#tracker服务器","children":[]}]},{"level":2,"title":"LANraragi搭建","slug":"lanraragi搭建","link":"#lanraragi搭建","children":[]},{"level":2,"title":"挂载硬盘","slug":"挂载硬盘","link":"#挂载硬盘","children":[{"level":3,"title":"第一步：临时挂载","slug":"第一步-临时挂载","link":"#第一步-临时挂载","children":[]},{"level":3,"title":"第二步：永久挂载","slug":"第二步-永久挂载","link":"#第二步-永久挂载","children":[]}]},{"level":2,"title":"无法拉取Docker镜像","slug":"无法拉取docker镜像","link":"#无法拉取docker镜像","children":[{"level":3,"title":"方案一 转存到阿里云","slug":"方案一-转存到阿里云","link":"#方案一-转存到阿里云","children":[]},{"level":3,"title":"方案二 镜像站","slug":"方案二-镜像站","link":"#方案二-镜像站","children":[]},{"level":3,"title":"方案三 离线镜像","slug":"方案三-离线镜像","link":"#方案三-离线镜像","children":[]},{"level":3,"title":"方案四 使用一键脚本","slug":"方案四-使用一键脚本","link":"#方案四-使用一键脚本","children":[]},{"level":3,"title":"方案五 使用Cloudflare worker 自建镜像加速","slug":"方案五-使用cloudflare-worker-自建镜像加速","link":"#方案五-使用cloudflare-worker-自建镜像加速","children":[]}]},{"level":2,"title":"如何挂载NTFS硬盘","slug":"如何挂载ntfs硬盘","link":"#如何挂载ntfs硬盘","children":[{"level":3,"title":"安装ntfs-3g","slug":"安装ntfs-3g","link":"#安装ntfs-3g","children":[]},{"level":3,"title":"挂载硬盘","slug":"挂载硬盘-1","link":"#挂载硬盘-1","children":[]}]},{"level":2,"title":"如何修改IP地址","slug":"如何修改ip地址","link":"#如何修改ip地址","children":[]},{"level":2,"title":"指示灯常亮红色","slug":"指示灯常亮红色","link":"#指示灯常亮红色","children":[]},{"level":2,"title":"(机械)硬盘掉盘/(运行后突然)不识别(机械)硬盘","slug":"机械-硬盘掉盘-运行后突然-不识别-机械-硬盘","link":"#机械-硬盘掉盘-运行后突然-不识别-机械-硬盘","children":[]},{"level":2,"title":"需要使用vi/vim","slug":"需要使用vi-vim","link":"#需要使用vi-vim","children":[]},{"level":2,"title":"支持玩客云(armv7l)的Docker镜像(1Panel/三方商店上架的)","slug":"支持玩客云-armv7l-的docker镜像-1panel-三方商店上架的","link":"#支持玩客云-armv7l-的docker镜像-1panel-三方商店上架的","children":[]}],"relativePath":"pages/posts/course-onecloud-armbian.md","lastUpdated":1743409198000}'),{lazy:(i,r)=>i.name===r.name}),M={__name:"course-onecloud-armbian",setup(i,{expose:r}){var p;const{data:c}=P(),d=k(),o=m(),t=Object.assign(o.meta.frontmatter||{},((p=c.value)==null?void 0:p.frontmatter)||{});return o.meta.frontmatter=t,d.currentRoute.value.data=c.value,C("valaxy:frontmatter",t),globalThis.$frontmatter=t,r({frontmatter:{title:"论玩客云(onecloud)如何刷入Armbian&安装Docker/1Panel",date:"2024-07-22 20:00:00",categories:"技术教程",tags:["玩客云","Armbian","刷机"],img:"",comments:!0,readmore:!0}}),(s,u)=>{const h=b;return y(),v(h,{frontmatter:f(t)},{"main-content-md":e(()=>u[0]||(u[0]=[l("h1",{id:"前言",tabindex:"-1"},[a("前言 "),l("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),l("p",null,"在各种机缘巧合下，我接触到了玩客云",-1),l("p",null,"以下是我的这台玩客云配置： （部分信息由商家提供，不保证准确性）",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"#基本")]),a(`
`),l("span",{class:"line"},[l("span",null,"型号：WS1608")]),a(`
`),l("span",{class:"line"},[l("span",null,"CPU：晶晨S805（Amlogic S805，armv7l，32位）")]),a(`
`),l("span",{class:"line"},[l("span",null,"运存：1GB DDR3")]),a(`
`),l("span",{class:"line"},[l("span",null,"存储：8GB eMMC")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"#接口")]),a(`
`),l("span",{class:"line"},[l("span",null,"USB2.0 * 2")]),a(`
`),l("span",{class:"line"},[l("span",null,"RJ45 * 1（千兆网口）")]),a(`
`),l("span",{class:"line"},[l("span",null,"SD Card Reader * 1")]),a(`
`),l("span",{class:"line"},[l("span",null,"HDMI OUT * 1（支持1080p 60fps）")])])]),l("button",{class:"collapse"})],-1),l("blockquote",null,[l("p",null,[a("*目前玩客云已经不再提供服务（官方公告："),l("a",{href:"https://wky.onethingcloud.com/%EF%BC%89",target:"_blank",rel:"noreferrer"},"https://wky.onethingcloud.com/）"),a(" 但并不影响刷机的说")])],-1),l("blockquote",null,[l("p",null,[a("Armbian介绍："),l("a",{href:"https://github.com/ophub/amlogic-s9xxx-armbian/blob/main/README.cn.md",target:"_blank",rel:"noreferrer"},"https://github.com/ophub/amlogic-s9xxx-armbian/blob/main/README.cn.md")])],-1),l("h1",{id:"准备",tabindex:"-1"},[a("准备 "),l("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),l("h2",{id:"必备",tabindex:"-1"},[a("必备 "),l("a",{class:"header-anchor",href:"#必备","aria-label":'Permalink to "必备"'},"​")],-1),l("ul",null,[l("li",null,"一台电脑"),l("li",null,"玩客云主机 & 电源线（12V 1A）"),l("li",null,"一条 USB-A 公对公数据线"),l("li",null,[a("安装 "),l("a",{href:"https://diffghjkl.lanzouq.com/i65gm258b4hi",target:"_blank",rel:"noreferrer"},"USB_Burning_Tool(蓝奏云)")]),l("li",null,[a("下载 "),l("a",{href:"https://github.com/hzyitc/armbian-onecloud",target:"_blank",rel:"noreferrer"},"Armbian")])],-1),l("blockquote",null,[l("p",null,"Tips： 我选择的是Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_current_6.6.21_minimal.burn 其中， unofficial - 非官方 jammy - Ubuntu 22.04 bullseye - Debian 11 Bookworm - Debian 12 current - 稳定版 edge - 开发版 minimal - 通用 burn - 直刷包(直接烧录)")],-1),l("h2",{id:"非必备",tabindex:"-1"},[a("非必备 "),l("a",{class:"header-anchor",href:"#非必备","aria-label":'Permalink to "非必备"'},"​")],-1),l("ul",null,[l("li",null,"硬盘"),l("li",null,"网线"),l("li",null,"HDMI线 & 支持HDMI的显示器")],-1),l("blockquote",null,[l("p",null,"Tips： 网线与HDMI线必须要有一个，若你有其他的连接方案…当我没说（）")],-1),l("h1",{id:"开始",tabindex:"-1"},[a("开始 "),l("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1),l("h2",{id:"刷入armbian",tabindex:"-1"},[a("刷入Armbian "),l("a",{class:"header-anchor",href:"#刷入armbian","aria-label":'Permalink to "刷入Armbian"'},"​")],-1),l("p",null,[a("打开 "),l("code",null,"USB_Burning_Tool"),a(" ，在 "),l("code",null,"文件-导入烧录包"),a(" 处选择 Armbian 的 img文件")],-1),l("p",null,"在左侧的烧录配置中，选择 擦除所有",-1),l("p",null,"之后连上数据线，对玩客云进行短路",-1),l("p",null,[a("v1.0版本触点： "),l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/cdnTH2IQTkN9M3",alt:"3.1.1"})],-1),l("p",null,[a("v1.3版本触点： "),l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/UlQCpcsOAu--Ag",alt:"3.1.2"})],-1),l("p",null,[a("或者： "),l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/hoR_ECKJPMZhVE",alt:"3.1.3"})],-1),l("blockquote",null,[l("p",null,[a("Tips:判断版本方法 1.玩客云分为v1.0和v1.3两个版本 2.在SD卡处标注v1.3的即为v1.3版本的，未标注的为v1.0版本 "),l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/beImPwYH1Rj5-S",alt:"3.1.4"})])],-1),l("p",null,[a("短路好后接上电源， "),l("code",null,"USB_Burning_Tool"),a(" 将自动检测设备 "),l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/3laXLoxVnf9FOM",alt:"3.1.5"})],-1),l("p",null,[a("提示连接成功后，点击 "),l("code",null,"开始"),a("（此时就可以松开触点？）")],-1),l("blockquote",null,[l("p",null,"Tips：若烧录过程中报错，可尝试以下方法 1.断开USB数据线，等待两秒后再连接 2.重新短接")],-1),l("figure",null,[l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/YFfkrxWVibqol5",alt:"3.1.6",loading:"lazy",decoding:"async"})],-1),l("blockquote",null,[l("p",null,"Tips：之后若需再次刷入，可以不进行短接操作（据说有的需要按重置键）")],-1),l("p",null,[a("烧录成功后点击 "),l("code",null,"停止"),a(" ，关闭程序后再断开数据线")],-1),l("p",null,"将电源断开后再连接，让玩客云重启",-1),l("blockquote",null,[l("p",null,"此时你可以选择： 1.通过HDMI连接至显示器操作（同时需接上USB键盘） 2.通过SSH连接（需玩客云接上网线，然后在路由器管理界面找到设备onecloud的IP地址）")],-1),l("p",null,"第一次进入系统时会要求更改默认密码",-1),l("blockquote",null,[l("p",null,[a("Tips：若要求填入账号密码，根据以下信息填写即可 默认账号："),l("code",null,"root"),a(" 默认密码："),l("code",null,"1234")])],-1),l("p",null,"至于是否需要另建账户就随个人喜好啦~",-1),l("p",null,"然后进行换源（以下操作可选，个人建议执行下）",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 编辑软件源")]),a(`
`),l("span",{class:"line"},[l("span",null,"nano /etc/apt/sources.list")])])]),l("button",{class:"collapse"})],-1),l("p",null,"清华大学源：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free")])])]),l("button",{class:"collapse"})],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 更新系统及软件")]),a(`
`),l("span",{class:"line"},[l("span",null,"apt-get update && apt-get upgrade")])])]),l("button",{class:"collapse"})],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 更改时区")]),a(`
`),l("span",{class:"line"},[l("span",null,"cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime")])])]),l("button",{class:"collapse"})],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 验证时区是否正确")]),a(`
`),l("span",{class:"line"},[l("span",null,"date -R")])])]),l("button",{class:"collapse"})],-1),l("p",null,"至此，系统的刷入就完成啦~",-1),l("h2",{id:"安装docker",tabindex:"-1"},[a("安装Docker "),l("a",{class:"header-anchor",href:"#安装docker","aria-label":'Permalink to "安装Docker"'},"​")],-1),l("p",null,"由于一些原因，国内的Docker镜像站暂时无法提供服务，可尝试以下方法：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"apt install docker.io")])])]),l("button",{class:"collapse"})],-1),l("p",null,"或者",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"bash <(curl -sSL https://linuxmirrors.cn/docker.sh)")])])]),l("button",{class:"collapse"})],-1),l("h2",{id:"安装1panel",tabindex:"-1"},[a("安装1Panel "),l("a",{class:"header-anchor",href:"#安装1panel","aria-label":'Permalink to "安装1Panel"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # Debian")]),a(`
`),l("span",{class:"line"},[l("span",null,"curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh")])])]),l("button",{class:"collapse"})],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # Ubuntu")]),a(`
`),l("span",{class:"line"},[l("span",null,"curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh")])])]),l("button",{class:"collapse"})],-1),l("p",null,[a("若不适配你的系统，请前往 "),l("a",{href:"https://1panel.cn/",target:"_blank",rel:"noreferrer"},"1Panel官网")],-1),l("h2",{id:"安装qbittorrent",tabindex:"-1"},[a("安装qbittorrent "),l("a",{class:"header-anchor",href:"#安装qbittorrent","aria-label":'Permalink to "安装qbittorrent"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"apt install qbittorrent-nox")])])]),l("button",{class:"collapse"})],-1),l("p",null,"创建qBittorrent服务",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"nano /etc/systemd/system/qbittorrent.service")])])]),l("button",{class:"collapse"})],-1),l("p",null,"设置开机自启：将下面的内容粘贴并保存",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"[Unit]")]),a(`
`),l("span",{class:"line"},[l("span",null,"Description=qBittorrent Daemon Service")]),a(`
`),l("span",{class:"line"},[l("span",null,"After=network.target")]),a(`
`),l("span",{class:"line"},[l("span",null,"[Service]")]),a(`
`),l("span",{class:"line"},[l("span",null,"User=root")]),a(`
`),l("span",{class:"line"},[l("span",null,"ExecStart=/usr/bin/qbittorrent-nox")]),a(`
`),l("span",{class:"line"},[l("span",null,"ExecStop=/usr/bin/killall -w qbittorrent-nox")]),a(`
`),l("span",{class:"line"},[l("span",null,"[Install]")]),a(`
`),l("span",{class:"line"},[l("span",null,"WantedBy=multi-user.target")])])]),l("button",{class:"collapse"})],-1),l("p",null,"重新加载配置文件",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"systemctl daemon-reload")])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"访问webui",tabindex:"-1"},[a("访问WebUI "),l("a",{class:"header-anchor",href:"#访问webui","aria-label":'Permalink to "访问WebUI"'},"​")],-1),l("p",null,[a("访问地址："),l("code",null,"http://IP:8080")],-1),l("blockquote",null,[l("p",null,[a("Tips： 用户名："),l("code",null,"admin"),a(" 密码："),l("code",null,"adminadmin")])],-1),l("h3",{id:"常用命令",tabindex:"-1"},[a("常用命令 "),l("a",{class:"header-anchor",href:"#常用命令","aria-label":'Permalink to "常用命令"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 启动")]),a(`
`),l("span",{class:"line"},[l("span",null,"service qbittorrent start")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null," # 关闭")]),a(`
`),l("span",{class:"line"},[l("span",null,"service qbittorrent stop")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null," # 查看运行状态")]),a(`
`),l("span",{class:"line"},[l("span",null,"service qbittorrent status")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null," # 开机自启")]),a(`
`),l("span",{class:"line"},[l("span",null,"systemctl enable qbittorrent")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null," # 关闭开机自启")]),a(`
`),l("span",{class:"line"},[l("span",null,"systemctl disable qbitorrent")])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"tracker服务器",tabindex:"-1"},[a("Tracker服务器 "),l("a",{class:"header-anchor",href:"#tracker服务器","aria-label":'Permalink to "Tracker服务器"'},"​")],-1),l("p",null,[a("Tracker介绍："),l("a",{href:"https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md#tracker%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noreferrer"},"https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md#tracker是什么")],-1),l("figure",null,[l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/8Wy63AGD5G5coA",alt:"3.4.1",loading:"lazy",decoding:"async"})],-1),l("h4",{id:"自建",tabindex:"-1"},[a("自建 "),l("a",{class:"header-anchor",href:"#自建","aria-label":'Permalink to "自建"'},"​")],-1),l("p",null,"目前咱还不需要自建…",-1),l("p",null,"如果你需要的话，可以看看这位的：",-1),l("p",null,[l("a",{href:"https://sakurabakiyoka.com/2020/11/26/build-private-tracker/",target:"_blank",rel:"noreferrer"},"搭建自己的BT Tracker | 桜庭清夏的小站")],-1),l("h4",{id:"列表",tabindex:"-1"},[a("列表 "),l("a",{class:"header-anchor",href:"#列表","aria-label":'Permalink to "列表"'},"​")],-1),l("p",null,"也可以选择使用他人搭建好的，",-1),l("p",null,[a("这里推荐个项目："),l("a",{href:"https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md",target:"_blank",rel:"noreferrer"},"XIU2/TrackersListCollection - Github")],-1),l("p",null,[a("若无法访问，可以试试访问这个文档："),l("a",{href:"https://trackerslist.com/#/zh",target:"_blank",rel:"noreferrer"},"XIU2/TrackersListCollection")],-1),l("h2",{id:"lanraragi搭建",tabindex:"-1"},[a("LANraragi搭建 "),l("a",{class:"header-anchor",href:"#lanraragi搭建","aria-label":'Permalink to "LANraragi搭建"'},"​")],-1),l("p",null,[a("详见 "),l("a",{href:"https://blog.dmoe.top/2025/01/15/course-onecloud-LANraragi/",target:"_blank",rel:"noreferrer"},"论如何利用LANraragi+玩客云建立个人漫画库(1Panel+Linux)")],-1),l("h2",{id:"挂载硬盘",tabindex:"-1"},[a("挂载硬盘 "),l("a",{class:"header-anchor",href:"#挂载硬盘","aria-label":'Permalink to "挂载硬盘"'},"​")],-1),l("h3",{id:"第一步-临时挂载",tabindex:"-1"},[a("第一步：临时挂载 "),l("a",{class:"header-anchor",href:"#第一步-临时挂载","aria-label":'Permalink to "第一步：临时挂载"'},"​")],-1),l("p",null,"1.显示系统中可用存储设备、磁盘分区等相关信息",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"lsblk")])])]),l("button",{class:"collapse"})],-1),l("p",null,[l("img",{src:"https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/LZ3MOZmYxh5jRZ",alt:"3.4.1"}),a(" 由上图可知，我的硬盘名称是 "),l("code",null,"sda1")],-1),l("blockquote",null,[l("p",null,[a("Tips：可以先对硬盘格式化，再挂载硬盘~（忽略此步也不是不可） "),l("code",null,"mkfs.ext4 /dev/sda1")])],-1),l("p",null,"2.创建一个文件夹，用于挂载硬盘",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mkdir /mnt/disk")]),a(`
`),l("span",{class:"line"},[l("span",null," # 文件夹名disk可更换，依个人喜好就好~")])])]),l("button",{class:"collapse"})],-1),l("p",null,"3.挂载硬盘",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mount /dev/sda1 /mnt/disk")]),a(`
`),l("span",{class:"line"},[l("span",null," # 不要忘记把 sda1 & disk 换成你自己的！")])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"第二步-永久挂载",tabindex:"-1"},[a("第二步：永久挂载 "),l("a",{class:"header-anchor",href:"#第二步-永久挂载","aria-label":'Permalink to "第二步：永久挂载"'},"​")],-1),l("p",null,"即，设备开机时自动挂载",-1),l("blockquote",null,[l("p",null,"Tips： 永久挂载后，设备重启/开机必须要一直插着硬盘，否则会无法重启")],-1),l("p",null,"1.查询硬盘uuid及文件系统",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"blkid /dev/sda1")])])]),l("button",{class:"collapse"})],-1),l("p",null,"2.根据硬盘信息制作出开机硬盘自动挂载命令",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"UUID=你的硬盘UUID /mnt/disk 文件系统格式 defaults 0 0")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null," # 例（不要忘记换成自己的）")]),a(`
`),l("span",{class:"line"},[l("span",null,"UUID=80278b04-2d19-984c-bdce-65ab443908ab /mnt/disk ext4 defaults 0 0")])])]),l("button",{class:"collapse"})],-1),l("p",null,"3.编辑磁盘挂载配置文件，将上一步制作出的命令添加到末行",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"nano /etc/fstab")])])]),l("button",{class:"collapse"})],-1),l("p",null,"或",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"vi /etc/fstab")])])]),l("button",{class:"collapse"})],-1),l("blockquote",null,[l("p",null,[a("Tips:vi编辑命令使用方法 1.使用键盘方向键调整光标位置。 2.按下Insert键(或按下 "),l("code",null,"i键"),a(" )，可以见到窗口左下角有 "),l("code",null,"Insert"),a(" 字样，表示当前为插入编辑状态。 3.编辑完内容后，按下"),l("code",null,"Esc键"),a("，输入 "),l("code",null,":wq"),a(" 再按回车可以保存并退出编辑，而输入 "),l("code",null,":q!"),a(" 回车则取消保存。")])],-1),l("p",null,"4.测试硬盘是否挂载成功（如果报错千万不要重启，会导致进不了系统）",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mount -a")])])]),l("button",{class:"collapse"})],-1),l("h1",{id:"常见问题",tabindex:"-1"},[a("常见问题 "),l("a",{class:"header-anchor",href:"#常见问题","aria-label":'Permalink to "常见问题"'},"​")],-1),l("h2",{id:"无法拉取docker镜像",tabindex:"-1"},[a("无法拉取Docker镜像 "),l("a",{class:"header-anchor",href:"#无法拉取docker镜像","aria-label":'Permalink to "无法拉取Docker镜像"'},"​")],-1),l("p",null,"有五种解决方案",-1),l("p",null,[a("（内容来自"),l("a",{href:"https://github.com/tech-shrimp/docker_installer?tab=readme-ov-file#2-pull%E9%95%9C%E5%83%8F",target:"_blank",rel:"noreferrer"},"tech-shrimp/docker_installer - Github"),a("）")],-1),l("h3",{id:"方案一-转存到阿里云",tabindex:"-1"},[a("方案一 转存到阿里云 "),l("a",{class:"header-anchor",href:"#方案一-转存到阿里云","aria-label":'Permalink to "方案一 转存到阿里云"'},"​")],-1),l("p",null,[a("使用 "),l("code",null,"Github Action"),a(" 将国外的Docker镜像转存到阿里云私有仓库，供国内服务器使用，免费易用")],-1),l("p",null,[a("支持 "),l("code",null,"DockerHub"),a(" , "),l("code",null,"gcr.io"),a(" , "),l("code",null,"k8s.io"),a(" , "),l("code",null,"ghcr.io"),a(" 等任意仓库 支持最大40GB的大型镜像 使用阿里云的官方线路，速度快 项目地址: "),l("a",{href:"https://github.com/tech-shrimp/docker_image_pusher",target:"_blank",rel:"noreferrer"},"https://github.com/tech-shrimp/docker_image_pusher")],-1),l("h3",{id:"方案二-镜像站",tabindex:"-1"},[a("方案二 镜像站 "),l("a",{class:"header-anchor",href:"#方案二-镜像站","aria-label":'Permalink to "方案二 镜像站"'},"​")],-1),l("p",null,"现在只有很少的国内镜像站存活 不保证镜像齐全,且用且珍惜 以下三个镜像站背靠较大的开源项目，优先推荐",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"sudo vi /etc/docker/daemon.json")])])]),l("button",{class:"collapse"})],-1),l("p",null,"输入下列内容，最后按ESC，输入 :wq! 保存退出。",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"{")]),a(`
`),l("span",{class:"line"},[l("span",null,'    "registry-mirrors": [')]),a(`
`),l("span",{class:"line"},[l("span",null,'        "https://docker.m.daocloud.io",')]),a(`
`),l("span",{class:"line"},[l("span",null,'        "https://docker.1panel.live",')]),a(`
`),l("span",{class:"line"},[l("span",null,'        "https://hub.rat.dev"')]),a(`
`),l("span",{class:"line"},[l("span",null,"    ]")]),a(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," # 重启Docker")]),a(`
`),l("span",{class:"line"},[l("span",null,"sudo service docker restart")])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"方案三-离线镜像",tabindex:"-1"},[a("方案三 离线镜像 "),l("a",{class:"header-anchor",href:"#方案三-离线镜像","aria-label":'Permalink to "方案三 离线镜像"'},"​")],-1),l("p",null,[a("使用Github Action下载docker离线镜像 "),l("a",{href:"https://github.com/wukongdaily/DockerTarBuilder",target:"_blank",rel:"noreferrer"},"https://github.com/wukongdaily/DockerTarBuilder")],-1),l("h3",{id:"方案四-使用一键脚本",tabindex:"-1"},[a("方案四 使用一键脚本 "),l("a",{class:"header-anchor",href:"#方案四-使用一键脚本","aria-label":'Permalink to "方案四 使用一键脚本"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'bash -c "$(curl -sSLf https://xy.ggbond.org/xy/docker_pull.sh)" -s 完整镜像名')])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"方案五-使用cloudflare-worker-自建镜像加速",tabindex:"-1"},[a("方案五 使用Cloudflare worker 自建镜像加速 "),l("a",{class:"header-anchor",href:"#方案五-使用cloudflare-worker-自建镜像加速","aria-label":'Permalink to "方案五 使用Cloudflare worker 自建镜像加速"'},"​")],-1),l("p",null,[l("a",{href:"https://github.com/cmliu/CF-Workers-docker.io",target:"_blank",rel:"noreferrer"},"https://github.com/cmliu/CF-Workers-docker.io")],-1),l("h2",{id:"如何挂载ntfs硬盘",tabindex:"-1"},[a("如何挂载NTFS硬盘 "),l("a",{class:"header-anchor",href:"#如何挂载ntfs硬盘","aria-label":'Permalink to "如何挂载NTFS硬盘"'},"​")],-1),l("p",null,[a("armbian系统原生不支持挂载ntfs，需要安装 "),l("a",{href:"https://github.com/tuxera/ntfs-3g",target:"_blank",rel:"noreferrer"},"ntfs-3g")],-1),l("blockquote",null,[l("p",null,"据网友所说： 稳定性有点差，时常掉盘，速度不如使用原生ext4")],-1),l("h3",{id:"安装ntfs-3g",tabindex:"-1"},[a("安装ntfs-3g "),l("a",{class:"header-anchor",href:"#安装ntfs-3g","aria-label":'Permalink to "安装ntfs-3g"'},"​")],-1),l("p",null,"下载",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"wget https://tuxera.com/opensource/ntfs-3g_ntfsprogs-2017.3.23.tgz")])])]),l("button",{class:"collapse"})],-1),l("p",null,"解压安装",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"tar -xvzf ntfs-3g_ntfsprogs-2017.3.23.tgz")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"cd ntfs-3g_ntfsprogs-2017.3.23")]),a(`
`),l("span",{class:"line"},[l("span",null," ")]),a(`
`),l("span",{class:"line"},[l("span",null,"./configure")]),a(`
`),l("span",{class:"line"},[l("span",null," ")]),a(`
`),l("span",{class:"line"},[l("span",null,"make")]),a(`
`),l("span",{class:"line"},[l("span",null," ")]),a(`
`),l("span",{class:"line"},[l("span",null,"make install")])])]),l("button",{class:"collapse"})],-1),l("h3",{id:"挂载硬盘-1",tabindex:"-1"},[a("挂载硬盘 "),l("a",{class:"header-anchor",href:"#挂载硬盘-1","aria-label":'Permalink to "挂载硬盘"'},"​")],-1),l("h4",{id:"临时挂载",tabindex:"-1"},[a("临时挂载 "),l("a",{class:"header-anchor",href:"#临时挂载","aria-label":'Permalink to "临时挂载"'},"​")],-1),l("p",null,"1.查询硬盘信息",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"fdisk -l | grep NTFS")])])]),l("button",{class:"collapse"})],-1),l("p",null,"2.创建一个文件夹，用于挂载硬盘",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mkdir /mnt/disk")]),a(`
`),l("span",{class:"line"},[l("span",null," # 文件夹名disk可更换，依个人喜好就好~")])])]),l("button",{class:"collapse"})],-1),l("p",null,[a("3.挂载硬盘（例如，硬盘为 "),l("code",null,"sda1"),a(" ）")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"mount -t ntfs-3g /dev/sda1 /mnt/disk")]),a(`
`),l("span",{class:"line"},[l("span",null," # 不要忘记把 sda1 & disk 换成你自己的！")])])]),l("button",{class:"collapse"})],-1),l("h4",{id:"永久挂载",tabindex:"-1"},[a("永久挂载 "),l("a",{class:"header-anchor",href:"#永久挂载","aria-label":'Permalink to "永久挂载"'},"​")],-1),l("p",null,[a("详见 "),l("a",{href:"https://blog.dmoe.top/2024/07/22/course-onecloud-armbian/#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E6%B0%B8%E4%B9%85%E6%8C%82%E8%BD%BD",target:"_blank",rel:"noreferrer"},"#挂载硬盘-第二步：永久挂载")],-1),l("h2",{id:"如何修改ip地址",tabindex:"-1"},[a("如何修改IP地址 "),l("a",{class:"header-anchor",href:"#如何修改ip地址","aria-label":'Permalink to "如何修改IP地址"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"nano /etc/network/interfaces")])])]),l("button",{class:"collapse"})],-1),l("p",null,"修改文件内容(以下是示例，请以实际情况为准！)：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# Network is managed by Network manager")]),a(`
`),l("span",{class:"line"},[l("span",null,"auto lo")]),a(`
`),l("span",{class:"line"},[l("span",null,"iface lo inet loopback")]),a(`
`),l("span",{class:"line"},[l("span")]),a(`
`),l("span",{class:"line"},[l("span",null,"auto eth0")]),a(`
`),l("span",{class:"line"},[l("span",null,"iface eth0 inet static")]),a(`
`),l("span",{class:"line"},[l("span",null,"address 192.168.1.100")]),a(`
`),l("span",{class:"line"},[l("span",null,"netmask 255.255.255.0")]),a(`
`),l("span",{class:"line"},[l("span",null,"gateway 192.168.1.1")]),a(`
`),l("span",{class:"line"},[l("span",null,"dns-nameservers 223.5.5.5 223.6.6.6")])])]),l("button",{class:"collapse"})],-1),l("blockquote",null,[l("p",null,"Tips： eth0 - 网络接口名称 address - 设备的静态IP地址(请以你的路由器为准) netmask - 网络掩码 gateway - 默认网关(请以你的路由器为准) dns-nameservers - DNS服务器地址(请以你的地区情况来选择)")],-1),l("h2",{id:"指示灯常亮红色",tabindex:"-1"},[a("指示灯常亮红色 "),l("a",{class:"header-anchor",href:"#指示灯常亮红色","aria-label":'Permalink to "指示灯常亮红色"'},"​")],-1),l("p",null,"据说是正常现象，镜像的问题，并不影响使用",-1),l("p",null,"可执行以下命令修改为蓝色常亮",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'echo "default-on" >/sys/class/leds/onecloud\\:blue\\:alive/trigger')]),a(`
`),l("span",{class:"line"},[l("span",null,'echo "none" >/sys/class/leds/onecloud\\:green\\:alive/trigger')]),a(`
`),l("span",{class:"line"},[l("span",null,'echo "none" >/sys/class/leds/onecloud\\:red\\:alive/trigger')])])]),l("button",{class:"collapse"})],-1),l("h2",{id:"机械-硬盘掉盘-运行后突然-不识别-机械-硬盘",tabindex:"-1"},[a("(机械)硬盘掉盘/(运行后突然)不识别(机械)硬盘 "),l("a",{class:"header-anchor",href:"#机械-硬盘掉盘-运行后突然-不识别-机械-硬盘","aria-label":'Permalink to "(机械)硬盘掉盘/(运行后突然)不识别(机械)硬盘"'},"​")],-1),l("p",null,"这个问题还算比较高频率的…",-1),l("blockquote",null,[l("p",null,"据网友所说，该问题出现的原因是玩客云的USB供电有时会不足，就很容易掉盘（")],-1),l("p",null,"我个人想到的解决方案是为硬盘外接电源",-1),l("blockquote",null,[l("p",null,[a("Tips: 3.5寸机械硬盘 常用的 易驱线/硬盘盒 会有 "),l("code",null,"外部供电")])],-1),l("p",null,"不过目前我还没实验过…",-1),l("blockquote",null,[l("p",null,"各位倘若有什么合适的方案 或 已经尝试过我这种预想 的，欢迎在评论区留言~")],-1),l("h2",{id:"需要使用vi-vim",tabindex:"-1"},[a("需要使用vi/vim "),l("a",{class:"header-anchor",href:"#需要使用vi-vim","aria-label":'Permalink to "需要使用vi/vim"'},"​")],-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"apt install vim")])])]),l("button",{class:"collapse"})],-1),l("h2",{id:"支持玩客云-armv7l-的docker镜像-1panel-三方商店上架的",tabindex:"-1"},[a("支持玩客云(armv7l)的Docker镜像(1Panel/三方商店上架的) "),l("a",{class:"header-anchor",href:"#支持玩客云-armv7l-的docker镜像-1panel-三方商店上架的","aria-label":'Permalink to "支持玩客云(armv7l)的Docker镜像(1Panel/三方商店上架的)"'},"​")],-1),l("blockquote",null,[l("p",null,"以下镜像经博主测试可正常运行，但可能存在局限性，更多内容请自行搜索（2025/01/16）")],-1),l("ul",null,[l("li",null,"Alist"),l("li",null,"Cloudreve"),l("li",null,"FileCodeBox"),l("li",null,"qBittorrent（似乎有版本要求?）"),l("li",null,"Jellyfin（能运行，但玩客云性能堪忧）"),l("li",null,[a("Calibre-Web（官方最后支持32位的版本：0.6.20-ls204，详见 "),l("a",{href:"https://info.linuxserver.io/issues/2023-04-13-calibre-web/",target:"_blank",rel:"noreferrer"},"LinuxServer.io"),a(" ）")]),l("li",null,"Koodo Reader"),l("li",null,"reader（能运行，但玩客云性能堪忧）"),l("li",null,"Komga（能运行，但玩客云性能堪忧）"),l("li",null,"Navidrome")],-1),l("h1",{id:"参考资料",tabindex:"-1"},[a("参考资料 "),l("a",{class:"header-anchor",href:"#参考资料","aria-label":'Permalink to "参考资料"'},"​")],-1),l("ul",null,[l("li",null,[l("p",null,[l("a",{href:"https://soulteary.com/2025/01/08/lightweight-server-under-fifty-yuan-wanke-cloud-speed-running-guide-1.html",target:"_blank",rel:"noreferrer"},"五十元内的轻量服务器：玩客云折腾速通指南（一） - 苏洋博客")])]),l("li",null,[l("p",null,[l("a",{href:"https://panzhe.cn/2022/11/15/wky-nas/",target:"_blank",rel:"noreferrer"},"低成本搭建家用轻NAS系统-玩客云 - 金者的博客")])]),l("li",null,[l("p",null,[l("a",{href:"https://doc.ecoo.top/docs/tutorial-basics/s805/",target:"_blank",rel:"noreferrer"},"玩客云(晶晨S805)刷机 - 海纳思系统")])]),l("li",null,[l("p",null,[l("a",{href:"https://1p.131.gs/",target:"_blank",rel:"noreferrer"},"1Panel三方应用商店")])]),l("li",null,[l("p",null,[l("a",{href:"https://blog.csdn.net/hcfhshl/article/details/137676638",target:"_blank",rel:"noreferrer"},"玩客云刷Armbian安装docker、alist、OpenWrt、Aria2等教程及所需文件(内容详细) - CSDN")])]),l("li",null,[l("p",null,[l("a",{href:"https://longdada.me/onecloud-shuaji-armbian-install-1panel-alist/",target:"_blank",rel:"noreferrer"},"玩客云刷机 Armbian，安装 1panel、Alist - 灰糖笔记")])]),l("li",null,[l("p",null,[l("a",{href:"https://www.right.com.cn/FORUM/thread-8246606-1-1.html",target:"_blank",rel:"noreferrer"},"玩客云-Armbian23.05-直刷包-内核6.1 - 恩山无线论坛")])]),l("li",null,[l("p",null,[l("a",{href:"https://blog.csdn.net/Javachichi/article/details/131370829",target:"_blank",rel:"noreferrer"},"Vim安装与配置教程（非常详细）从零基础入门到精通，看完这一篇就够了- CSDN")])]),l("li",null,[l("p",null,[l("a",{href:"https://post.smzdm.com/p/an97m9p0/",target:"_blank",rel:"noreferrer"},"玩客云刷Armbian修改IP地址_其他网络设备 - 什么值得买")])])],-1),l("h1",{id:"后记",tabindex:"-1"},[a("后记 "),l("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),l("p",null,"久违的更新…",-1),l("p",null,"有些想不起来Markdown语法了…",-1)])),"main-header":e(()=>[n(s.$slots,"main-header")]),"main-header-after":e(()=>[n(s.$slots,"main-header-after")]),"main-nav":e(()=>[n(s.$slots,"main-nav")]),"main-content-before":e(()=>[n(s.$slots,"main-content-before")]),"main-content":e(()=>[n(s.$slots,"main-content")]),"main-content-after":e(()=>[n(s.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(s.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(s.$slots,"main-nav-after")]),comment:e(()=>[n(s.$slots,"comment")]),footer:e(()=>[n(s.$slots,"footer")]),aside:e(()=>[n(s.$slots,"aside")]),"aside-custom":e(()=>[n(s.$slots,"aside-custom")]),default:e(()=>[n(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,P as usePageData};
