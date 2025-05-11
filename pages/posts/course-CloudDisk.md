---
title: 网盘不限速下载
date: 2022-04-02
categories: 技术教程
tags: 
 - 油猴
 - 网盘不限速下载
 - Tampermonkey
---
## 前言
::: tip
2025/05/11 - 该方法似乎已失效，请另寻他法！
:::



## 准备
- 一台 Windows / MacOS / Linux桌面端 电脑
- 一部 Android / IOS 手机
> Tips：电脑和手机不需要同时具备~
- [百度网盘][1] / [阿里云盘][2] / [天翼云盘][3] / [迅雷云盘][4] 网页端
- 电脑端 安装 [IDM][5] / [XDown][6] / [Motrix][7] 下载器 + [Chrome][8] / [Microsoft Edge][9] /  等浏览器（国内基于Chromium内核的一般也可以）
- Android 手机端 安装 [IDM（密码:dbidm）][10] / [ADM（密码:dbadm）][11] 下载器 + [Iceraven][12]（推荐）/ Yandex / [Kiwi][13] 等浏览器
- IOS 手机端 安装 [Gear][14] 等浏览器
> Tips：无法通过 Github 下载 Iceraven 的用这个 [Iceraven（密码:dbice）][15]


## 教程


- 1.电脑端

首先，安装浏览器拓展 Tampermonkey 

（请查看 [【浏览器拓展】Tampermonkey][16] ）

然后安装 [网盘直链下载助手][17] 脚本

接下来打开 网盘的网页端，勾选上你要下载的文件，点击【下载助手】，选择适合你下载器的下载方式

（IDM 选择 API下载 | XDown 选择 Aria下载 | Motrix 选择 RPC下载）


- 2.Android手机端

（1）Iceraven 浏览器

首先，打开 设置-附加组件 安装 Tampermonkey

然后安装 [网盘直链下载助手][17] 脚本

接下来打开 网盘的网页端，勾选上你要下载的文件，点击【下载助手】，选择 API下载 

（2）Yandex 浏览器

首先，在地址栏中输入 chrome://extensions 

然后打开 开发者选项-已解压的拓展程序，在弹出的文件管理器中将拓展 Tampermonkey 的文件夹选择

接下来安装 [网盘直链下载助手][17] 脚本

最后，打开 网盘的网页端，勾选上你要下载的文件，点击【下载助手】，选择 API下载 

> Tips：已解压的扩展程序 就是 将原本的 .crx文件 的后缀改成 .zip ，然后解压出来的文件


（3）Kiwi 浏览器

> Tips：有能力的可选择直接前往 Chrome拓展商店 安装

首先，在地址栏中输入 kiwi://extensions 

然后打开 开发者选项-选择Load ，在弹出的文件管理器中选择 Tampermonkey 的.crx文件

接下来安装 [网盘直链下载助手][17] 脚本

最后，打开 网盘的网页端，勾选上你要下载的文件，点击【下载助手】，选择 API下载 



 - 3.IOS手机端

（1）Gear 浏览器

首先，打开 购买 

随后安装 网盘直链下载助手 （内置 Tampermonkey ）

接下来打开 网盘的网页端 ，勾选上你要下载的文件，点击【下载助手】，选择 API下载 

然后在地址栏中输入链接即可下载

> Tips：有 Linux服务器 的可以在 Linux服务器 用 curl命令 下载（插件版本≥5.6.5，选curl下载），再通过文件管理器连接服务器下载至手机 



## 后记
如有问题还请在评论区指出~

（看在我这么努力的份上，评论下吧~）

【本文部分教程由 GeneticFern6354 提供】


  [1]: https://pan.baidu.com/
  [2]: https://www.aliyundrive.com/drive
  [3]: https://cloud.189.cn/
  [4]: https://pan.xunlei.com/
  [5]: https://blog.dmoe.top/142.html
  [6]: https://www.xdown.org/
  [7]: https://motrix.app/
  [8]: https://www.google.cn/intl/zh-CN/chrome/
  [9]: https://www.microsoft.com/zh-cn/edge
  [10]: https://diffghjkl.lanzouf.com/ibmn602li2ze
  [11]: https://diffghjkl.lanzouf.com/i1tLe02li39e
  [12]: https://github.com/fork-maintainers/iceraven-browser/releases
  [13]: https://kiwibrowser.com/
  [14]: https://gear4.app/
  [15]: https://diffghjkl.lanzouf.com/iZSyn02ljw9e
  [16]: https://blog.dmoe.top/161.html
  [17]: https://greasyfork.org/zh-CN/scripts/436446-%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B