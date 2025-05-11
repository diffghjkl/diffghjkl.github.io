---
title: 论如何修改WDDM TDR
date: 2024-10-27
categories: 技术教程
tags: 
 - Windows
 - GPU
 - WDDM
 - WDDM TDR
---

## 前言
近期在尝试使用 `Stable Diffusion` 进行AI绘画，

但由于运行环境的 显卡性能不足 & TDR ，造成图片无法生成...

> 本文中提到的TDR为 `WDDM`（全称 `Windows Display Driver Model` ，即 `Windows显示驱动程序模型` ） 下的功能




## 正文
### 什么是 TDR（超时检测和恢复）
全称 `Timeout Detection and Recovery` 

在 `Windows Vista` 之后的版本会检查显卡不响应的情况，并通过重置显卡，保证操作系统继续正常运行。

所以操作系统在一定时间内没有收到显卡的响应，便会触发重置。

> Tips：  
> (1) 响应超时的默认时间是2秒.  
> (2) TDR 特性推出以前，遇到显卡未响应只能通过重启解决。而如今一旦遇到显卡问题你将会看到以下内容  
> Display driver stopped responding and has recovered  
> （显卡驱动程序已停止响应，并且已恢复）

该特性对于一般用户而言是非常有用。

但对于开发、调试GPU并行计算，使用某些使用GPU运算的软件，默认的 TDR 太短了...






### 如何修改TDR
#### 方法一: 修改注册表（通用方法）
按下 `Win` + `R` 键打开运行窗口

输入 `regedit` 并回车，若遇到 [UAC（用户帐户控制概述）](https://learn.microsoft.com/zh-cn/windows/security/application-security/application-control/user-account-control/) ，请选择确认

找到 `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers`

修改 `TdrDelay` 的数值，将进制设为十进制，修改数值（例如60）

> Tips:  
> 若不存在 TdrDelay 的注册表项，则需在 `GraphicsDrivers` 下通过 `DWORD (32 位)值` 创建，并命名为 `TdrDelay`

最后重启电脑就可以啦~



#### 方法二: 利用Nsight修改（仅限于NVIDIA显卡）
通过 [NVIDIA Nsight Graphics | NVIDIA Developer](https://developer.nvidia.com/nsight-graphics) 下载 `Nsight`

> Tips:  
> (1) 没记错的话似乎可以在安装显卡驱动时勾选 Nsight ...(?)  
> (2) 启动前请确保是以管理员身份启动 Nsight ！

安装完成后，在任务栏图标中找到 Nsight ，右键选择 `Options`

在左侧的侧边栏中选择 `General` 

然后在 `Microsoft Display Driver` 一项中修改 `WDDM TDR Delay` 或 `WDDM TDR enabled` （任选其一即可）

> `WDDM TDR Delay` 的数值修改开参考上方的例子（60）  
> `WDDM TDR enabled` 修改为 `False` 即可

最后重启电脑就完成啦~



## 参考资料
- [WDDM - 百度百科](https://baike.baidu.com/item/WDDM/1408199)

- [超时检测和恢复 (TDR) - Windows drivers | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-hardware/drivers/display/timeout-detection-and-recovery)

- [什么是 TDR Issue 及修改方法 - 知乎](https://zhuanlan.zhihu.com/p/38141415)



## 后记
感觉若是只需要 AI绘画 ，不如选择性能好的显卡...

毕竟性能不足就会造成生成时间延长...（悲）

当然，租个显卡云也不是不可，就是价钱...

说起来似乎可以白嫖谷歌云...（？）