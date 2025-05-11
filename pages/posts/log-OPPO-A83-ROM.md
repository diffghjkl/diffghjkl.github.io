---
title: 记一次失败的刷机经历
date: 2024-02-23
categories: 日常记录
tags: 
 - OPPO
 - OPPO A83
 - 刷机
 - 深度刷机
---
 > 本文不是教程，你不需要亲自尝试其中的每一个操作。如果你不知道自己在做什么，那就不要做。

::: danger
若阅读本文并执行相关操作后出现设备损坏、隐私泄露、数据丢失等情况，则机主需要自行承担损失！
:::



## 前言
> 已更新该设备的教程，请见 [OPPO A83 救砖&降级](https://blog.dmoe.top/2025/03/06/course-OPPOA83/)

~~经过生活的摧残~~，决定做些其他的事情放松心情

于是乎，我找到了刷机

只可惜，在此之前，并无刷机经验

（身边的手机都是 华为 荣耀 什么的.......）

这次，我找到了目标—— `OPPO A83` 

接下来就谈谈过程吧~







## 准备
通过必应搜索，找到了教程：

[刷机线刷救砖、解话机锁、账户锁，恢复出厂设置，无需加密狗 - ONFIX](https://onfix.cn/course/3363)

刚好， `OPPO A83` 的 CPU 是 `Helio P23 MT6763V/CT` 

虽然文章已经提供工具包，但是我没注意价格

> 链接在这：[刷机线刷工具软件包，无需任何加密狗 - ONFIX](https://onfix.cn/course/3364) 

本着节省的想法，在茫茫互联网中寻找所需工具

经历半个小时的“大海捞针”，我的目光回到了工具包：仅需1元

> 我：“啊这...”

![工具包](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/V-tgnwq354pF5x)

~~工具准备好了，接下来就是愉快的（?）刷机了~~






## 开始
### 环境配置
根据工具包序号，依次进行...

> 1.安装 libusb-win32-devel-filter-1.2.6.0.exe   
> 2.安装 OPPO售后驱动 : QcomMtk_Driver_Setup_V3.0.3.exe   
> 3.运行mtk_bypass_rev4.exe工具  
> ......

直到这里，我才发现工具包没有提供 `Mediatek Bypass Tool` 的驱动...

> 驱动下载：[LibUSB - 蓝奏云](https://diffghjkl.lanzouq.com/iMUzc1p6suxe)

然后就可以正常启动了：

![Mediatek Bypass Tool V4](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/WY0ICrLwvt3QbA)

> 欸？到这里为止是不是看起来很正常？  
> 好，那么接下来糟糕的来啦（悲）

点击 `BYPASS` ，工具提示 `MEDIATEK DRIVER NOT DETECTED` 

根据提示，似乎是缺少驱动？


#### 驱动安装
> *找到了未经官方签名的驱动！  
> *系统强制驱动程序需要签名！

根据其他教程，了解到禁用强制签名的方法：

打开 `设置` - `更新和安全` - `恢复` - `高级启动` - `立即重新启动`

选择`疑难解答` - `启动设置` - `重启` 

重启后，根据提示输入 `7` 来禁用强制签名


问题解决，接下来是安装 `MTK驱动` ：

> 链接：[Driver-USB_VCOM_Driver(binary).zip - 博客园](https://files.cnblogs.com/files/schips/Driver-USB_VCOM_Driver(binary).zip)

> 然而离谱的是，我在写文章时找到了更优解：  
> 安装 已签名驱动 便不需要禁用强制签名...  
> 链接：["MediaTek USB Port" - Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=MediaTek%20USB%20Port)

打开 `设备管理器` - `操作` - `添加过时硬件`

选择 `安装我手动从列表选择的硬件(高级)` - `显示所有设备` - `从磁盘安装` 

选择驱动路径，选择`MediaTek USB Port`（或`MTK USB Port`）

这样驱动安装完成

> 如果需要 `MediaTek USB VCOM` 可以在这里下载：  
> ["MediaTek USB VCOM" - Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=MediaTek%20USB%20VCOM)


### 进入深刷模式
联发科手机 进入 `深刷模式` 的方法一般有三种：
- 1.【取下电池】，按住 音量- ，然后通过数据线连接电脑
- 2.【取下电池】(最常用)，无需操作，直接连接电脑
- 3.【不取下电池】(一体机常用)，同样无需操作，直接连接电脑

> **Tips**:  
> 1.进入后，手机一般处于黑屏状态，若手机显示了任何字符/图案/充电界面，即没有进入 深刷模式  
> 2.手机连接电脑的一瞬间，电脑会提示安装驱动， `设备管理器` - `端口` 处将出现类似于 `MediaTek PreLoader USB VCOM （Android)` 的设备  
> 3.部分一体机手机可能出现 `MediaTek PreLoader USB VCOM （Android)` 一闪而过的现象（我愿称之为“转瞬即逝”），原因未知

糟糕的是，我这里的 `OPPO A83` 会出现“转瞬即逝”的现象，原因未知...

到这里，本次尝试以失败告终（悲）







## 后记
直到最后，我才意识到， `Mediatek Bypass Tool V4` 似乎不是需要我安装驱动，而是手机并未进入深刷模式，造成无法连接...

总结：总之就是非常糟糕啊啊啊——，耗费了六个小时还没成功...
