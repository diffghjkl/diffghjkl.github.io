---
title: 论如何利用LANraragi+玩客云建立个人漫画库(1Panel+Linux)
date: 2025-01-15
categories: 技术教程
tags: 
 - Linux
 - LANraragi
 - 1Panel
 - 玩客云
---

## 前言
随着阅历的增加，对漫画的要求越来越高

以至于网络平台上提供的漫画逐渐不符合个人喜好...

而阅读量的增加促使我更需要收集那些个人观感不错的作品，

以及这些漫画所在平台的各种不便捷的操作，

最终我决定建立自己的漫画库

（~~废话~~部分结束，以下是正文内容）

> 如果您需要 `玩客云刷机教程` ，请前往 [论玩客云(onecloud)如何刷入Armbian&安装Docker/1Panel](https://blog.dmoe.top/2024/07/22/course-onecloud-armbian/)






## 准备
- 一台可运行Linux系统的计算机（玩客云,群辉什么的也是可以的）
- LANraragi镜像
- SSH客户端 + 浏览器~~（这条好像没什么用）~~






## 开始
> 本篇教程以 `玩客云利用1Panel安装LANraragi` 为例

### 安装 1Panel
您也可以在 [1Panel官网](https://1panel.cn/) 获取安装方法

以下是一键安装指令：
::: code-group   
```Shell [RedHat / CentOS]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

```Shell [Ubuntu]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

```Shell [Debian]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

```Shell [openEuler / 其他]
 # 第一步：安装 docker
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

 # 第二步：安装 1Panel
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```
:::

> Tips:   
> 1.上期教程中玩客云刷入的Armbian基于Debian  
> 2.更多内容请见 [1Panel文档](https://1panel.cn/docs/installation/online_installation/)




### 安装 LANraragi
目前有两种方法
#### 便捷式安装
添加 [1Panel三方应用商店 - Github](https://github.com/okxlin/appstore)

::: code-group  
```Shell [国内网络]
 # 1panel计划任务类型Shell 脚本的计划任务框里，添加并执行以下命令，或者终端运行以下命令

git clone -b localApps https://mirror.ghproxy.com/https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -r /opt/1panel/resource/apps/local/appstore-localApps
```

```Shell [国际网络]
 # 1panel计划任务类型Shell 脚本的计划任务框里，添加并执行以下命令，或者终端运行以下命令

git clone -b localApps https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -r /opt/1panel/resource/apps/local/appstore-localApps
```
:::

 > 更多内容请查看 [1Panel三方商店文档](https://1p.131.gs/) （可能需要科学上网）

添加完成后，在应用商店内搜索 `LANraragi` 即可快速安装（无中文的官方镜像）

> Tips:   
> 1.若 `本地` 分类项中没有内容，请尝试点击右上角的 `更新应用列表` 或 手动执行上方 命令/计划任务  
> 2.如果你需要中文版本，请在安装时选择 `编辑 compose 文件` ，找到 `image: "difegue/lanraragi:v.0.9.21"`，将其改为汉化版本，详细内容请见下方的 `手动安装` 部分



#### 手动安装
首先，找到1Panel的 `容器` - `镜像` - `拉取镜像`

在 `镜像名` 中输入 `difegue/lanraragi:latest` （此为官方镜像，无中文）

> Tips:   
> 倘若需要中文版本，可选择第三方汉化版本  
>  `mhdy2233/lanraragi_cn_mhdy:latest` (不支持32位架构)  
> `windycloud/lanraragi_cn:latest` (支持32位架构/玩客云，疑似停更) 

然后请等待镜像拉取完成

之后点击 `容器` - `创建容器` ，选择刚才拉取到本地的镜像（必填项请根据自身情况设置）

容器运行后就可以在WEB端访问 LANraragi 啦~




### 安装客户端
> 由于条件限制，无法为各位提供客户端配置教程，还请见谅
 
- `Windows端` (Microsoft商店)：https://www.microsoft.com/zh-cn/p/lrreader/9mz6bwwvswjh

- `Android端` (该链接可能需要科学上网)：https://f-droid.org/packages/com.utazukin.ichaival/
> 蓝奏云：https://diffghjkl.lanzouq.com/b0knp43yf （密码:edt3）

- `IOS端` 请使用 [AltStore](https://altstore.io/) 安装：https://github.com/Doraemoe/DuReader/releases
> 蓝奏云：https://diffghjkl.lanzouq.com/b0knp445c （密码:6ysc）






## 常见问题
### 挂载缩略图目录(thumb)导致缩略图(作品封面)无法生成
一般情况下，只需要为 `LANraragi` 授予 `thumb` 的写权限（我这里选择将该文件夹提至777）

然后在 `Tags and Thumbnails` 里点击 `Generate Missing Thumbnails`


### LANraragi的默认密码是什么
答：Kamimamita


### LANraragi的漫画缓存路径
这里的 `LANraragi缓存` 分为 `封面缩略图(thumb)` 和 `漫画的所有内容缓存(temp)`
> 其中，在不开启限制时将会以原图的形式存储在temp

以下是 `thumb` 可能所在的路径：
（请根据实际情况来判断）
```Path
默认-本机路径：(仅作参考，因为在写本篇教程时我已经改过了，忘记原路径是不是这个...)
/opt/1panel/apps/local/lanraragi/locallanraragicn/data/thumb

容器内路径：
/home/koyomi/lanraragi/content/thumb
/root/lanraragi/content/thumb
```

以下是 `temp` 可能所在的路径：
（请根据实际情况来判断）
```Path
默认-本机路径：(xxx部分为系统随机生成，请根据实际情况判断！)
/var/lib/docker/overlay2/xxx/merged/root/lanraragi/public/temp/

容器内路径：
/root/lanraragi/public/temp
```





## 参考资料

 - [Lanraragi安装及使用教程（附常见问题） - 布丁の小窝](https://lolicon.life/archives/lanraragi%E5%AE%89%E8%A3%85%E5%8F%8A%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B%E9%99%84%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
 > 上方链接存在本文未提到但可能会很实用的内容，日后有时间将会以其作为参考来补充本文

 - [LANraragi：漫画管理的优秀解决方案 - BiliBili](https://www.bilibili.com/opus/749816885379334212)
 - [搭建个人漫画仓库——Ubuntu环境下在Docker中安装Lanraragi - CSDN](https://blog.csdn.net/m0_53694308/article/details/134845471)
 - [LANraragi 使用心得 - Gustav's blog](https://gustaavv.github.io/2024/02/20/LANraragi-Using-Experience/)






## 后记
感觉这篇教程像是水文章...

嘛...怎么说都是新年的第一篇文章，

那就在这里提前祝各位春节快乐~

———————————————————————————————————————————————————

2025/02/08补：

LANraragi的缓存真的困扰我了好久，今天终于找到了（应该?）

所以有什么文档/教程提到过这个吗...