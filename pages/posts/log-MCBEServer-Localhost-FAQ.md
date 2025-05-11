---
title: MinecraftBE(基岩版)无法连接本地启动的服务器
date: 2022-06-01
categories: 日常记录
tags: 
 - MCBE服务器
 - MinecraftBE服务器
---
## 前言
最近在本地测试服务器的时候，发现无法连接

我的操作环境：

系统Windows10，Minecraft v1.18.31，本地启动的服务器（与访问的客户端在同一电脑上）

造成此问题的原因：Minecraft无权访问本地的127.0.0.1地址

那么教程开始！




## 教程

首先打开注册表编辑器

（不会的直接通过搜索找到即可）

然后将下方地址输入地址栏
```
计算机\HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings\
```

之后找到 `S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436` ，确认是否有数据一栏中是 `Minecraft for Windows 10` 的（没有的，可以翻左侧的文件夹，直到找到有数据一栏中是 `Minecraft for Windows 10` 的即可）

![1](https://api.mluk.cn/images/Snipaste_2022-06-01_21-51-27.png)

然后 以管理员的身份 运行CMD

输入
```Command
CheckNetIsolation.exe loopbackexempt -a -p=
```

其中， `P=` 后要加上你之前找到的 `S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436` （之前与我不同的，请以你所找到的为准）

之后就可以连接啦~




## 后记
嗯...成功的水了一篇文章！

希望这篇文章对你能有所帮助！