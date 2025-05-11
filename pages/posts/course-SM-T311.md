---
title: SM-T311 刷机&ROOT
date: 2024-03-22
categories: 技术教程
tags: 
 - Samsung
 - 三星
 - 刷机
 - 深度刷机
---
> 本教程仅作记录，你不需要亲自尝试其中的每一个操作。如果你不知道自己在做什么，那就不要做。

::: danger
若阅读本文并执行相关操作后出现设备损坏、隐私泄露、数据丢失等情况，则机主需要自行承担损失。
::: 






## 前言
> Tips：  
> 1.Samsung Galaxy Tab 3 8.0 分为 T310（lt01wifi） 、 T311（lt013g） 、 T315（lt01lte）  
> 2.这三种的操作方法应该基本一致？本文可作参考，出了问题我可不负责哦

近期在 XDA论坛 发现了适配 SM-T311 的 第三方TWRP 

在各种因素的加持下，开始了本次刷机之旅

理论上支持 Windows & MacOS ，但由于我没有MacOS的设备，无法保证本文适用于 MacOS ，本文仅供参考！






## 准备
### 必备
- 一台 SM-T311
- [适配的 TWRP](https://www.123pan.com/s/BOa8Vv-Fio7A.html) （非官方）
- [LineageOS 14.1](https://www.123pan.com/s/BOa8Vv-Yio7A.html)（非官方）
### 非必备
- [Magisk](https://github.com/topjohnwu/Magisk/releases)（获取ROOT）
- [kerNoleOC](https://www.123pan.com/s/BOa8Vv-Gio7A.html)（超频内核）



### PC端的准备
#### Windows端
- 安装 [Kies for Windows](https://diffghjkl.lanzouq.com/iCXck1sca1ha)（Windows端驱动）
- 安装 [Odin_v3.07](https://diffghjkl.lanzouq.com/iqlK01sc9iba)（针对三星Android平台的Windows刷机工具）

#### MacOS端
- 安装 [Kies for MacOS](https://diffghjkl.lanzouq.com/i6iwU1sca47i)（MacOS端驱动）
- 安装 [JOdin for MacOS](https://diffghjkl.lanzouq.com/ii8RP1scchsj)（针对三星Android平台的MacOS刷机工具）

> Tips:  
> 1.[Magisk v27.0](https://diffghjkl.lanzouq.com/iYRVb1scfa8f) 成功刷入，其他版本请自行尝试！  
> 2.Kies官网：https://www.samsung.com/hk/support/kies/  
> 3.如果您需要 JOdin 的安装教程，请前往 [Download JOdin3 for macOS X, Linux, and Windows - ODIN FLASH TOOL](https://odinflashtool.com/downloads/download-jodin3/) 查看！







## 开始
### 刷入 TWRP
> 请在确保 Kies 能正常连接手机的前提下进行！

在关机状态下，同时按住 `Home键`、`音量-`、`电源键`（约5秒钟）

根据警告的提示，按下 `音量+` ，即可进入 `Download模式`（如果你需要警告页面取消，则需按下`音量-`）

打开 Odin ，并将 SM-T311 连接到电脑

`ID:COM` 一栏将会出现如下提示：

![1](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/PB3BPdSHbp2lNo)

也可以通过查看 Messages 栏是否有如下提示
```log
<ID:0/012> Added!!
```

点击 `PDA` ，选择 TWRP 所在路径

如果选择的是 .tar.md5 格式的文件，就会触发Odin的文件校验（约5秒钟）：
```log
<OSM> Enter CS for MD5..
<OSM> Check MD5.. Do not unplug the cable..
<OSM> Please wait..
<OSM> T311.TWRP.3.1.1-0.tar.md5 is valid.
<OSM> Checking MD5 finished Sucessfully..
<OSM> Leave CS..
```

点击 `Start`，执行刷入操作（约2分钟？）
> Tips：  
> 1.部分情况下可能需要取消 Odin 中的 `Auto Reboot` ，否则将会出现执行错误...  
> 2.建议执行前直接取消，这个问题困扰了我一个小时...（没认真看教程啊啊啊）

```log
 # 刷入成功的提示
 <OSM> All threads completed. (succeed 1 / failed 0)
```

同时按住 `电源键` 、 `音量+` 、 `Home键` ，直到出现三星Logo，只松开 `电源键` ，等到进入 TWRP 后松开所有按键

至此，TWRP的刷入工作完成~



### 刷入 LineageOS
进入 TWRP 后，将会询问是否修改系统分区，滑动 `Swipe to Allow Modifications` 即可
 
点击 `Wipe` - `Format Data` ，将数据格式化，再滑动 `Swipe to Factory Reset`，执行双清
> 如果需要保留数据文件，建议提前备份，不清除Data可能会影响后续操作（因为没清除Data设备无限重启...）

将 SM-T311 连接电脑，创建一个英文名ROM文件夹（个人习惯，可有可无），将LineageOS放入其中

返回TWRP主页，进入 `Install` ，点击 `Select Storage` ，选择 `Internal Storage` ，找到`/sdcard/ROM` 或 `/data/media/0/ROM` 下的 LineageOS 文件，滑动`Swipe to confirm Flash`

提示完成后，点击 `Rebot System` 重启
> Tips:  
> 1.需要安装 TWRP APP 的，则滑动 `Swipe to Install TWRP APP`  
> 2.若不需要安装TWRP APP，则选择 `Do Not Install`   
>
> 即便我尝试选择安装，似乎并没有找到它，并且稳定性似乎不太行了？

至此，LineageOS便安装成功啦~

> Tips:  
> 连接WIFI时，可能会提醒：已连接，但无法访问互联网  
> 无须担心，这只是Lineage无法在大陆连接到服务器，略过即可




### 获取 ROOT 权限
#### 原系统（未刷入 LineageOS 前）
> 教程来自 [Root the Samsung Galaxy Tab 3 8.0 and Install Custom Recovery - XDA](https://xdaforums.com/t/root-the-samsung-galaxy-tab-3-8-0-and-install-custom-recovery.2525630/)

> 因我未在设备的原系统中尝试，无法确保内容的可行性，设备出现的一切问题机主自行负责！

将 [`ROOT_SGT3_8.0.zip`](https://diffghjkl.lanzouq.com/iERNA1sc99za) 放入上文中提到的 ROM 文件夹

再次进入TWRP，找到 `/scard/ROM` ，选择`ROOT_SGT3_8.0.zip` ，滑动 `SWip to confirm Flash` 

完成后，点击 `Reboot System`



#### 刷入 LineageOS 后
将 [Magisk-v27.0.apk](https://github.com/topjohnwu/Magisk/releases/download/v27.0/Magisk-v27.0.apk) 后缀改为.zip

进入 TWRP ，在 `Install` 选择 `Magisk-v27.0.zip` 的所在路径，执行刷入操作

成功后重启系统，将 `Magisk-v27.0.zip` 后缀改回 `.apk` ，然后安装

打开 Magisk ，将会提示修复操作，根据提示进行即可

> Tips:  
> 1.选项：应该无需勾选 `保留 AVB 2.0/dm-verity` ，我这里没勾选也可以正常刷入  
> 2.方式：选择 `直接安装` 



### 刷入内核
> Tips:  
> kerNoleOC-1.8 - 启动时默认为 1.8GHz（在安兔兔基准测试中约为 15-18% 提升）  
> kerNoleOC-1.6 - 启动时默认为 1.6GHz

进入 TWRP ，点击 `Install` - `Install Image` ，选择 `T311-kerNoleOC-1.8v6.img` 的所在路径，选择 `boot` ,再滑动 `Swipe to confirm Flash`

内核刷入工作完成！






## 参考资料
 - [[Recovery] TWRP 3.1.1-x for T31x - XDA](https://xdaforums.com/t/recovery-twrp-3-1-1-x-for-t31x.2619518/)
 - [Root the Samsung Galaxy Tab 3 8.0 and Install Custom Recovery - XDA](https://xdaforums.com/t/root-the-samsung-galaxy-tab-3-8-0-and-install-custom-recovery.2525630/)
 - [[Kernel] kerNoleOC for T31x (OC and UV) v6 Updated 4/15/17](https://xdaforums.com/t/kernel-kernoleoc-for-t31x-oc-and-uv-v6-updated-4-15-17.3311718/)






## 后记
> 一些 SM-T311 支持的软件合集：https://www.123pan.com/s/BOa8Vv-Pio7A.html

这篇文章写了7个小时啊啊啊啊（悲）

主要是强迫症在作怪，想收集全文件...

总之，看到这里，不打算给我个打赏嘛