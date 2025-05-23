---
title: Android手机部分术语讲解（不定期更新中...）
date: 2024-02-24
categories: 计算机Wiki
tags: 
 - Android
 - 刷机
 - Recovery
 - Fastboot
 - 深度刷机
---
> 本文仅做介绍，你不需要亲自尝试其中的每一个操作。如果你不知道自己在做什么，那就不要做。

::: danger
若阅读本文并执行相关操作后出现设备损坏、隐私泄露、数据丢失等情况，则机主需要自行承担损失！
:::






## 前言
由于没什么机会调试手机&刷机，所以经常忘记相关术语...

而之前刚好尝试了 [OPPO A83](https://blog.dmoe.top/2024/02/23/log-OPPOA83-ROM/) 

~~趁现在还没忘记，抓紧梳理一下~~

> 由于处于萌新阶段，内容可能存在错误...如有发现，请在评论区指出！






## 正文
### ADB（安卓调试桥）
英文全称：Android Debug Bridge

一般用于 调试设备 或 调试开发的`Android APP`

ADB工具 下载：[SDK 平台工具版本说明 - Android Developers](https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn)

安装教程：[adb工具下载及环境配置（一看就会）- 知乎](https://zhuanlan.zhihu.com/p/653371171)

更多内容请参阅：[Android 调试桥 (ADB) - Android Open Source Project](https://source.android.google.cn/docs/setup/build/adb?hl=zh-cn)

> **Tips**：  
> 1.你可能会认为官方文档过于复杂，建议尝试看看这篇文章：[Adb使用教程，看了教程后你也是玩机达人啦 - 知乎](https://zhuanlan.zhihu.com/p/35215293)  
> 2.如果需要快速查找命令，这篇文章可能会帮助到你：[ADB 命令大全 - 知乎](https://zhuanlan.zhihu.com/p/89060003)



### Recovery（恢复模式）
独立于系统的一个模式，具有高权限，可以对手机的各个分区做修改。

> 一般长按 电源键 和 音量+ 即可进入

目前分为两种：手机厂商提供的`官方Recovery` 和 `第三方Recovery`

（下文简称"Rec"）

一般来说， `官方Rec` 功能非常有限，只能进行 升级官方系统包 ， 恢复出厂 和 连接 手机助手 等操作。

而 `第三方Rec` 具有更丰富的功能，比如：

安装 第三方系统包 ，修改备份恢复系统，使用ADB指令 ，获取Root，分区扩容等等。

无论是 刷入 `第三方Rec` ，还是仅用 `官方Rec` 操作,一般都采用 `外置存储卡` 的方式，因此 此模式 也被称为 `“卡刷模式”` 。

> 刷入 第三方Recovery 需要解锁Bootloader，然后通过 Fastboot模式 刷入

题外话：
从 `ClockWorkMod Recovery（CWM）` 到 `Team Win Recovery Project（TWRP）`，刷入 第三方Recovery 几乎是刷机必不可少的一环。

> 若需要更详细的讲解，请参阅：  
> - [安卓Recovery你知多少？不懂别说是刷机高手 - 快科技](https://news.mydrivers.com/1/542/542943.htm)  
> - [对于安卓手机刷入Recovery模式的介绍与理解 - 知乎](https://zhuanlan.zhihu.com/p/50166506)



### Fastboot（引导模式）
同样具有高权限

> 一般长按 电源键 和 音量- 即可进入

若上述方法未成功进入，可以参考以下方法：
> 1.同时按住 `音量-` 和 `开机键` 3-5秒钟 松手  
> 2.按住 `音量-` ，插入数据线 进入模式后 松手  
> 3.同时按住 `音量+` 和 `开机键` 3-5秒钟 松手  
> 4.同时按住 `音量加减键` 和 `开机键` 3-5秒钟 松手

> Tips：部分手机厂商会对 Fastboot 进行限制，如 OPPO手机 需要通过 `深度测试` ，然后解锁 Bootloader ， Fastboot模式 才会开放

与 Recovery 不同的是， `Fastboot` 只能连接电脑使用 ，而且功能上相比 Recovery 也比较单一。

> 对此，万能的网友交出了答卷：手机刷手机，手机刷Win...
 
一般可以通过连接电脑刷入 分区镜像文件 ，以及 执行一些 `Fastboot指令` 。所以此模式一般用来 `"救砖"` 和 `恢复系统` 。
 
因此 `Fastboot` 也被称为 `“线刷模式”` 。
 
> 注意：只有在BL锁已解锁的情况下，才可以使用 Fastboot 相关功能！



### Fastbootd（用户空间Fastboot模式）
是动态分区机型特有的一个模式，属于 Recovery分区 的功能。

动态分区机型以一个super分区囊括了system，vendor，odm等分区，在Fastboot模式只能刷入完整的super，不能单独刷入system，vendor，odm。

而进入 Fastbootd 即可单独刷入他们。从 Fastboot 重启到 Fastbootd 的指令是 `fastboot reboot fastboot`



### Download Mode （下载模式/深度刷机模式）
一个特殊的模式，它是最底层的刷机方式，可以无视BL锁，只要硬件没坏就可以进行。

因此被称为 `“深度刷机模式”` ，主要用于 “救砖” 。

> 当 Recovery ，Fastboot 都被篡改或清除时，唯一能进入还不会被摧毁的就是该模式

理论上每种处理器都有自己独特的深刷模式,例如：

高通的 `Qualcomm HS-USB QDLoader 9008`（一般简称`“9008模式”`）
联发科的 `MediaTek USB Port` 

> 这个模式的进入方法各有不同，一般为 `按键` 或者 `拆机短接` 。

但是，由于官方权限的收紧，大致在 小米6 之后的机器进行深刷就需要 `售后账号权限` ，这使得正常情况下我们自己很难进行深刷。


#### 高通9008模式
> 进入方法一般是 `短接`，各机型的 `短接点` 会有所不同，不熟悉短接的可以自行搜索需要的机型

可能会用到的：  
- [9008是什么？如何进入9008模式给手机解锁，降级？ - Bilibili](https://www.bilibili.com/read/cv205958/)  
- [你知道手机9008模式如何刷机吗？ - Bilibili](https://www.bilibili.com/read/cv18123434/)  
- [重磅干货！高通9008模式与数据提取 - 知乎](https://zhuanlan.zhihu.com/p/35422254)  
- [开启9008端口进入深刷模式 - 博客园](https://www.cnblogs.com/sztom/p/10352957.html)  
- [高通9008下，bootloader锁的意义是什么？ - 知乎](https://www.zhihu.com/question/51329039)


#### 联发科
进入方法一般有三种：
- 1.【取下电池】，按住 `音量-` ，然后通过数据线连接电脑。
- 2.【取下电池】(最常用)，无需操作，直接连接电脑。
- 3.【不取下电池】(一体机常用)，同样无需操作，直接连接电脑。请注意：需保持手机黑屏！

> 可能会用到的：  
> [MTK（联发科）黑砖拯救（无法进入fastboot或recovery）- Bilibili](https://www.bilibili.com/read/cv15140322/)







## 参考资料
- [手机的各个模式简介 - 知乎](https://zhuanlan.zhihu.com/p/427118261)

其他的在上文中提到了，便不再标出






## 后记
要整理的内容好多...

所以...~~更新是不可能更新的！~~

在这里推荐一篇文章：[
[基础预科] Android 分区、启动模式、Fastboot - yezhiyi9670's blog](https://ak-ioi.com/763-preintro-android-bootmode/)