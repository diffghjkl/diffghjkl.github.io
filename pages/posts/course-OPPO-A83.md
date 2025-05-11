---
title: OPPO A83 救砖&降级
date: 2025-03-06
categories: 技术教程
tags: 
 - OPPO
 - OPPO A83
 - 刷机
 - 深度刷机
---
> 本教程仅作记录，你不需要亲自尝试其中的每一个操作。如果你不知道自己在做什么，那就不要做。

::: danger
若阅读本文并执行相关操作后出现设备损坏、隐私泄露、数据丢失等情况，则机主需要自行承担损失。
:::



## 前言
继 [记一次失败的刷机经历](https://blog.dmoe.top/2024/02/23/log-OPPO-A83-ROM/) ，再次尝试 `OPPO A83` 这一机型

本文可能会更新，请以最新版为准






## 准备
 - 一台 OPPO A83 设备
 - 一台电脑
 - 一条数据线
 - 安装 [相关驱动](https://diffghjkl.lanzouq.com/b0knwdt9c) (密码: 32sn)
 - ROM包 / [救砖包](https://www.123865.com/s/BOa8Vv-lex7A)
 - 下载 [MediaTek SP Flash Tool](https://diffghjkl.lanzouq.com/i0pRy2prllhe) (简称 `SP Flash` )
 > Tips:   
 > 1.驱动采用 `[OPPO售后驱动]QcomMtk_Driver_Setup_V3.0.3` & `libusb-win32-devel-filter-1.2.6.0`  
 > 2.MediaTek SP Flash Tool 采用 `v5.1812.00` 版本  
 > 3.如果您需要拆机教程，请查看 [OPPO A83 破解屏幕锁/救砖 拆机刷机教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1cS4y1J7mK/)  
 > 4.如果您需要线刷包，可前往 [ONFIX](https://onfix.cn/) 下载（可能需要付费）






## 开始
 > 请注意，`救砖` / `降级` 均会清除您的设备信息，请将重要数据备份后再进行操作！

### 救砖
运行 `MediaTek SP Flash Tool` 

`下载DA` 与 `验证文件` 默认即可

`配置文件` 一项则选择 `救砖包` 中 `scatter.txt` 这样的文件
![1](https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/XMS-uH68ILbiT-)

对设备进行短接

![2](https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/JNGVQpyR2MNHit)

 > Tips: 若用 针 / 镊子 短接，可靠在旁边的屏蔽罩上

检查 `设备管理器-端口` 中是否存在MTK端口（例如 `MediaTek USB Port` ）

最后在 `MediaTek SP Flash Tool` 中点击 `下载` 进行刷入即可



### 降级
 > 该部分内容的操作环境为执行救砖操作后使用线刷包进行降级，无法保证其他条件下能否降级，请根据您的实际情况来判断！  
 > 如果您的设备无法开机，请先进行救砖操作！

 > Tips: 本部分采用的是出厂 ROM包(线刷包) ，如有需要请前往 [123云盘](https://www.123865.com/s/BOa8Vv-bex7A) 下载！

运行 `MediaTek SP Flash Tool` 

在 `配置文件` 一项中选择要降级的 `ROM包` 中 `scatter.txt` 这样的文件（图就采用上一部分的了，方便）

![1](https://www.sway-cdn.com/s/4aEiTpcBD4PPvwex/images/XMS-uH68ILbiT-)

在下方目录中取消全选，仅选择 `boot` `system` `cache` `userdata` 这四项

然后对设备进行短接

（详见 [救砖](https://blog.dmoe.top/2025/03/06/course-OPPOA83/#%E6%95%91%E7%A0%96) 部分）

最后在 `MediaTek SP Flash Tool` 中点击 `下载` 进行刷入即可






## 参考资料
 - [OPPO a83，刷机解救砖及root - 酷安](https://www.coolapk.com/feed/58499989?shareKey=MTkyZmVkN2E5YjM1NjdjOTRhYTc~)
 - [OPPO A83 ROOT交作业啦！ - 酷安](https://www.coolapk.com/feed/52449430?shareKey=ZjM4ODk5MGRkODMwNjdjOTRhYzM~)
 - [OPPO A83 短接图 测试点 Test Point_OPPO_短接图/Test Point_海豚ROM](https://haitunrom.com/djt/oppo/5475.html)
 - [OPPO A83/OPPO A1固件下载 - 手机版本更新升级 - 安卓刷机教程 - 系统优化 - ColorOS官方网站](https://www.coloros.com/rom/firmware?id=155)
 - [OPPO A83-官方固件-线刷包-A1、A83、A85系列_A.06_171218（Scatter固件）-ONFIX](https://onfix.cn/rom/438808?oid=738908)






## 后记
这文章...怎么写了一个小时（

至于 解 BL & Root 我实在是没弄明白，如果各位有知道的可以在评论区留言

（XDA,酷安的root教程似乎不可行，或许是我的 环境 / 设备 问题？）