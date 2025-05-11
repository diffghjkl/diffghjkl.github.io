---
title: Frp搭建
date: 2022-05-08
categories: 技术教程
tags: 
 - Frp搭建
 - Frp服务端搭建
 - Frp客户端搭建
---
## 前言
因为一些原因，我开始接触Frp

然而我发现，网上相关的教程不是很全，于是这篇文章就诞生了！

本篇文章主要是帮助我以后使用而记录的

~~其实事实是想水篇文章~~



## 准备
- 一台有公网的服务器/电脑
- 一台没有公网的服务器/电脑
- 下载 [Frp](https://github.com/fatedier/frp/releases)




## 教程
服务器端和内网机器端下载的版本要相同，否则可能会影响内网穿透；根据服务器系统选择合适的版本

Tips：frps前缀的是服务端所需的文件，frpc前缀的是客户端所需的文件
服务端可只保留服务端文件，客户端同理




### 服务端搭建

#### *使用 Linux 作为服务端
1.将解压压缩包并命重命名文件夹为frp：
```Shell
mkdir frp
tar  xzvf frp_0.42.0_linux_386.tar.gz
mv  frp_0.42.0_linux_386  frp

# 创建frp文件夹，然后上传linux压缩包至文件夹并解压
```
如果版本与我的不同，请不要忘记更改文件名！



2.修改服务端配置文件（Frps.ini）

(1)进入frp文件夹下：`cd frp`，修改frps.ini文件 （`vim frps.ini`）

(2)修改完成，:wq 退出

默认的配置文件：
```ini
[common]
# 内网穿透服务器端监听的IP地址，可以省略，默认为127.0.0.1
bind_addr = 0.0.0.0
# 服务器端监听的端口，默认是7000，可自定义
bind_port = 7001
```
如果无特殊需要可不更改


3.启动服务端

启动命令：
```Shell
./frps -c frps.ini
```

停止服务：
Ctrl+C

如果看到 `Start frps success` ，说明启动成功


4.端口开放

这部分建议根据自己的系统百度~

~~懒得写了~~

如果是 腾讯云，阿里云 这些服务商的，请不要忘记在 安全组/防火墙 开放端口！


#### *使用 Windows 作为服务端
1.将解压压缩包并命重命名文件夹为frp

2.修改服务端配置文件（Frps.ini）
（参考 使用 Linux 作为服务端 ）

3.启动服务端

进入frp文件夹，按住 Shift 并右键点击空白处，点击在此处打开 PowerShell 窗口

Tips：我这里是 Windows10 ，如果是 Windows7 可能为 cmd窗口，直接执行 frps.exe -c frps.ini 即可

然后在 Powershell 输入 `cmd` 

最后输入 `frps.exe -c frps.ini` 即可启动服务端

如果看到 `Start frps success` ，说明启动成功

Ctrl+C 停止服务

（如果觉得麻烦可自行写一个bat脚本）

4.端口开放

这部分建议根据自己的系统百度~

~~懒得写了~~

如果是 腾讯云，阿里云 这些服务商的，请不要忘记在 安全组/防火墙 开放端口！




### 客户端搭建

#### *使用 Linux 作为客户端
1.将解压压缩包并命重命名文件夹为frp：
```Shell
mkdir frp
tar  xzvf frp_0.42.0_linux_386.tar.gz
mv  frp_0.42.0_linux_386  frp

# 创建frp文件夹，然后上传linux压缩包至文件夹并解压
```
如果版本与我的不同，请不要忘记更改文件名！


2.修改服务端配置文件（Frpc.ini）

(1)进入frp文件夹下：`cd frp`，修改frps.ini文件 （`vim frpc.ini`）

(2)修改完成，:wq 退出

配置文件请根据自己的需求更改！

 [common] 部分是服务端的配置，请与服务端的配置保持一致！

例：
```ini
# 客户端配置
[common]
server_addr = 服务器ip
server_port = 7000 # 与frps.ini的bind_port一致
token = 52010  # 与frps.ini的token一致

# 配置ssh服务
[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000  # 这个自定义，之后再ssh连接的时候要用
```


3.启动客户端

启动命令：
```Shell
./frpc -c ./frpc.ini
```

停止服务：
Ctrl+C

如果看到 start proxy success ，说明启动成功



#### *使用 Windows 作为客户端
1.将解压压缩包并命重命名文件夹为frp

2.修改客户端配置文件（Frpc.ini）
（参考 使用 Linux 作为客户端 ）

3.启动客户端

进入frp文件夹，按住 Shift 并右键点击空白处，点击在此处打开 PowerShell 窗口

Tips：我这里是 Windows10 ，如果是 Windows7 可能为 cmd窗口

然后在 Powershell 输入 `cmd` 

最后输入 `frpc.exe -c frpc.ini` 即可启动服务端

如果看到    start proxy success ，说明启动成功

Ctrl+C 停止服务

（如果觉得麻烦可自行写一个bat脚本）




## 后记
在启动服务端&客户端的时候请不要忘记：需要进入Frp所在的文件目录！！！

在写完这篇文章后，我发现了一个问题

似乎没什么写的必要...

~~不过能水个文章也是值得的！~~