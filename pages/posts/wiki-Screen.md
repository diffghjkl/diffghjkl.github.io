---
title: 【Linux】Screen使用
date: 2022-01-27
categories: 计算机Wiki
tags: 
 - Linux
 - Screen
 - Linux-Screen
---
（本文主体内容来自 https://blog.csdn.net/qq_28832135/article/details/79831700 ，更多内容请参考此文）

（因为其他的我暂时用不到，实在是太多了...萌新的我排版不易~）




## 简介
Screen是一款由GNU计划开发的用于命令行终端切换的自由软件。用户可以通过该软件同时连接多个本地或远程的命令行会话，并在其间自由切换。GNU Screen可以看作是窗口管理器的命令行界面版本。它提供了统一的管理多个会话的界面和相应的功能。


- 会话恢复

只要Screen本身没有终止，在其内部运行的会话都可以恢复。这一点对于远程登录的用户特别有用——即使网络连接中断，用户也不会失去对已经打开的命令行会话的控制。只要再次登录到主机上执行screen -r就可以恢复会话的运行。同样在暂时离开的时候，也可以执行分离命令detach，在保证里面的程序正常运行的情况下让Screen挂起（切换到后台）。这一点和图形界面下的VNC很相似。


- 多窗口

在Screen环境下，所有的会话都独立的运行，并拥有各自的编号、输入、输出和窗口缓存。用户可以通过快捷键在不同的窗口下切换，并可以自由的重定向各个窗口的输入和输出。Screen实现了基本的文本操作，如复制粘贴等；还提供了类似滚动条的功能，可以查看窗口状况的历史记录。窗口还可以被分区和命名，还可以监视后台窗口的活动。 会话共享 Screen可以让一个或多个用户从不同终端多次登录一个会话，并共享会话的所有特性（比如可以看到完全相同的输出）。它同时提供了窗口访问权限的机制，可以对窗口进行密码保护。


GNU's Screen 官方站点：http://www.gnu.org/software/screen/




## 安装
安装命令：

```Shell
yum install screen # (Centos)
apt install screen # (Ubuntu)
```




## 运行
- 语法

```Shell
screen [-AmRvx -ls -wipe][-d <作业名称>][-h <行数>][-r <作业名称>][-s ][-S <作业名称>]
```

运行命令（示例）：
（创建一个名为test的screen）
```Shell
screen -S test
```

重新连接命令（示例）：
（重新连接一个名为test的screen）
```Shell
screen -r test
```

- 选项

```
-A 　将所有的视窗都调整为目前终端机的大小
-d <作业名称> 　将指定的screen作业离线
-h <行数> 　指定视窗的缓冲区行数
-m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业
-r <作业名称> 　恢复离线的screen作业
-r <作业名称> 　恢复离线的screen作业
-R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业
-s 　指定建立新视窗时，所要执行的shell
-S <作业名称> 　指定screen作业的名称
-v 　显示版本信息
-x 　恢复之前离线的screen作业
-ls或--list 　显示目前所有的screen作业
-wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业
```


常用screen参数
```Shell
screen -S test -> 新建一个名为test的会话
screen -ls -> 列出当前所有的会话
screen -r test -> 回到test这个会话
screen -d test -> 远程脱离test这个会话
screen -d -r test -> 结束当前会话并回到test这个会话
```



在每个screen会话下，所有命令都以 ctrl+a(C-a) 开始。

```
C-a ? -> 显示所有键绑定信息
C-a c -> 创建一个新的运行shell的窗口并切换到该窗口
C-a n -> Next，切换到下一个 window
C-a p -> Previous，切换到前一个 window
C-a 0..9 -> 切换到第 0..9 个 window
Ctrl+a [Space] -> 由视窗0循序切换到视窗9
C-a C-a -> 在两个最近使用的 window 间切换
C-a x -> 锁住当前的 window，需用用户密码解锁
```