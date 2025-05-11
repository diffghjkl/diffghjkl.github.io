---
title: Windows/Linux搭建MinecraftBE(基岩版)原版服务器
date: 2022-06-28
categories: 技术教程
tags: 
 - MCBE服务器教程
 - MinecraftBE服务器教程
---
## 前言
如果需要使用其他设备搭建，请前往 [MinecraftBE(基岩版)服务器搭建(总篇)](https://blog.dmoe.top/2022/06/28/course-MCBE-Sever/) 查看！

本文以官方提供的服务端为例！




## 准备
- 一台有公网IP的电脑/服务器
- [BDS服务端](https://www.minecraft.net/en-us/download/server/bedrock)
- Windows系统 建议 `Windows10专业版` / `Windows Server 2016` 及以上
- Linux系统 建议 `Ubuntu18.04` 及以上

如果没有公网IP，可自行寻找Frp提供商，或者参考 [Frp搭建](https://blog.dmoe.top/2022/05/08/course-Frp/) 自行搭建！




## 教程
### *使用 Windows 搭建
1. 下载BDS需要的 [VC运行库（密码:dbmbvc）](https://diffghjkl.lanzouf.com/b017q3omj) 

然后根据提示安装即可

之后，将 `BDS服务端` 解压到你想要的位置

2. 打开 `bedrock_server.exe` ，测试运行环境是否正常，如果出现 `Server started.` ,则说明一切正常

![1](https://api.mluk.cn/images/Snipaste_2022-06-28_15-00-47.png)

接下来就是自行设置啦~

（至于为什么没写如何设置，我是准备之后再写~烦请耐心等待！）


### *使用 Linux 搭建
（这里以搭建起来最为简单的 `Ubuntu系统` 为例，至于 `CentOS系统` 的，我之后会写的~）


1. 创建一个目录
```Shell
mkdir bds

# 我这里以bds为例
```


然后进入该目录
```Shell
cd bds
```


2. 接下来，下载BDS服务端
```Shell
wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.19.2.02.zip

# 这里以1.19.2.02版本为例，其他版本请自行更改链接
```

然后解压
```Shell
unzip bedrock-server-1.19.2.02.zip

# 不要忘记把文件名改为你所下载的版本！
```

Tips：如果担心未解压成功，可使用 `ls` 命令查看当前目录的文件


在当前目录给予文件权限
```Shell
sudo chmod 775 ./*
```

先测试下服务端是否可以正常运行
```Shell
LD_LIBRARY_PATH=. ./bedrock_server
```

3. 使用 `screen` 软件让服务端保持后台运行
```Shell
apt install screen # 安装 screen
screen -S bds # 创建一个名为 bds 的窗口
cd bds
LD_LIBRARY_PATH=. ./bedrock_server
```

Tips：如果觉得输入启动命令麻烦的话，可以创建一个 `start.sh` 文件，将 `LD_LIBRARY_PATH=. ./bedrock_server` 复制到该文件里，之后输入 `sh start.sh` 就可以启动服务器啦~




## 常见问题
Q1：服务端的配置文件是什么？

A1：在你解压到的路径根目录，名为 `server.properties` 的文件就是啦~



Q2：配置文件看不懂欸...

A2：呃...那就看下面这个吧（摘自 [孤影墨香](https://www.gymxbl.com/868.html) ）
```File-server.properties
server-name=LinMS
# 服务器的描述信息，这个在选择服务器界面的副标题，因为正标题被玩家自定义名字所限制。
# 可以输入: 任意内容
 
gamemode=survival
# 设置玩家默认游戏模式
# 你可以设置: "survival"生存, "creative",创造 或者 "adventure"冒险
 
difficulty=hard
# 设置默认游戏难度
# 你可以设置: "peaceful", 和平"easy",简单 "normal", 普通，或者 "hard"困难
 
allow-cheats=false
# 开启作弊，如果打开它，你将可以使用命令。但会导致成就失效?
# 你可以设置: "true" 或者 "false"
 
max-players=30
# 最大同时在线玩家数
# 你可以设置: 任意数字
 
online-mode=true
# 在线验证，如果你开启在线验证，玩家需先登录Xbox才可加入服务器。
# 如果关闭此项，你必须开启登录插件，但遗憾的是官服没有登录插件。
# 如果你尝试用白名单替代登录插件，那么很遗憾，有心人只需要冒用ID即可进服。
# 你可以选择: "true" 或者 "false"
 
white-list=true
# 白名单，，开启后必须在白名单内才可进服。你可以通过此项来防止恶意熊服，也可以准备两套白名单，一套正常玩，另一套停服维护。
# 你可以选择: "true" 或者 "false"
 
server-port=19132
# 在ipv4网络环境下的端口，不能和已有端口重复，如果重复将随机选取
# 你可以选择: 选择范围 [1, 65535]
 
server-portv6=19133
# 在IPv6网络环境下的端口，不能和已有端口重复，但要知道，服务器需要有ipv6地址才可以使用此端口通信，玩家也必须有ipv6才可连接
# 你可以选择: 选择范围 [1, 65535]
 
view-distance=5
# 玩家最大视距，这个将会以服务器为准，哪怕玩家设置再大也会被限制。如果设置为0将不再设限。
# 你可以填写: 任意数值
 
tick-distance=4
# The world will be ticked this many chunks away from any player.
# 你可以填写: Integers in the range [4, 12]
 
player-idle-timeout=600
# 玩家超时时间，防止玩家挂机。如果设置为0将不再设限。
# 你可以填写: 任何非负数
 
max-threads=8
# 服务器最大线程数。如果设置为0将会自动选择。
# 你可以填写: 任意数值
 
level-name=Bedrock level
# 你可以填写: 任意地图名
 
level-seed=
# 选择一个地图种子，留空为随机，仅对第一次开服无地图生效。
# 你可以填写: 任意种子
 
default-player-permission-level=member
# 默认玩家游戏权限
# 你可以选择: "visitor", "member", "operator"
 
texturepack-required=false
# 强制锁定材质包 用途防材质作弊
# 你可以选择: "true" 或者 "false"
```




## 后记
写这篇文章前前后后大概用掉了近2个小时的时间？

~~（虽然不是详细版的教程...）~~

希望这篇文章能对你有所帮助！