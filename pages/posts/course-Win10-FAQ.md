---
title: 【Windows10/11】常见问题（不定期更新中...|已于2024年10月29日更新）
date: 2022-01-23
categories: 计算机Wiki
tags: 
 - Windows
 - Win10
 - Windows10
---
## 前言
> 本篇内容目前以 Windows10 为例，Windows 11可能会存在部分内容有所差距，请根据实际情况为准！

在日常使用/折腾电脑的过程中，Windows总是会出现各种各样的问题...

所以我打算将我遇到的一些问题汇集到本篇文章，便于日后查阅~






## 正文
### 任务栏中的 “操作中心” 图标消失 / 控制开关 是灰色的

- 解决方法

 1. 右键点击桌面左下角的 `开始` 按钮，在弹出的菜单中选择 “运行” 菜单项。这时会打开 `运行` 窗口，在窗口中输入 `gpedit.msc` 并回车

 2. 在打开的 `本地组策略编辑器` 窗口中，依次点击 `用户配置/管理模板/开始菜单和任务栏` 菜单项

 3. 在右侧窗口中找到 `删除通知和操作中心` 设置项
右键点击该设置项，在弹出菜单中选择 `编辑` 菜单项，或是直接双击 `删除通知和操作中心` 设置项。在打开的编辑窗口中，选择 `已禁用` 一项，最后点击确定按钮

 4. 再次进入任务栏图标显示设置窗口，操作中心后面的开关已变成可编辑状态，打开该开关就可以了




### “病毒和威胁防护” 被禁用

- 原因

下载有关软件而关闭了系统自动扫描功能，致使 `病毒和威胁防护` 被禁用，在 `病毒和威胁防护` 窗口中显示 `你的 病毒和威胁防护 由你的组织管理` ，且任务栏里的 `Windows 安全中心` 图标也消失了

- 解决方法

 1. 进入注册表编辑器中，删除 `DisableAntiSpyware` 

 2. 在运行对话框中输入 `regedit` ，点击确定或者回车，打开 `注册表编辑器` 窗口

 3. 复制：`\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender` （注册表路径）到注册表编辑器窗口中的地址栏内。当命令复制好以后，我们按下键盘上的回车键，即可定位到 `Windows Defender` 键项

 4. 在 Windows Defender 对应的右侧窗口中，我们可以看到：`DisableAntiSpyware    REG_DWORD  0x00000001(1)`；右键点击：`DisableAntiSpyware` - `删除`

此时会弹出一个确认数值删除的对话框：删除某些注册表值会引起系统不稳定。确实要永久删除此数值吗？点击：是（Y）后退出注册表编辑器窗口
 
 5. 注销或重新启动计算机，点击任务栏右下角的 Windows 安全中心 图标，打开Windows 安全中心，点击：病毒和威胁防护 项下的 立即重新启动

之后在病毒和威胁防护窗口中，正在运行快速扫描，说明 Windows 安全中心恢复正常




### (重)装系统时提示：在efi系统上windows只能安装到gpt磁盘
- 问题描述

当选中安装的系统盘时，提示Windows无法安装到这个磁盘，选中的磁盘具有MBR分区表。
在EFI系统上，Windows只能安装到GPT磁盘。
主要是由于 `UEFI` 对应 `MBR分区` ；`EFI` 则对应`GPT分区` 。

- 解决方法

 1. 让启动U盘以传统的BIOS方式启动来安装。
 2. 将电脑的系统盘由MBR修改为GPT。

- 方法详解

1）方法一：

直接将启动U盘里的`efi` 整个文件和 `bootmgr.efi` 文件删除后，再安装即可。



2）方法二：

 1. 在Windows安装界面，按 `Shift+F10` 打开 命令提示符 窗口

 2. 在 命令提示符 窗口依次执行如下命令：

```Shell
diskpart  # 进入到 DISKPART 模式
list disk  # 查看电脑的硬盘。编号0，表示电脑的第一块硬盘；编号2，表示电脑的第二块硬盘；........。根据电脑的硬盘数量不同显示不同
select disk  0   # 表示选中第一块硬盘（select disk x 命令中的x，表示选中的硬盘编号）
clean   # 清除选中硬盘上的所有分区和数据
convert gpt   # 将选中的硬盘转换成GPT分区表格式
exit  # 命令退出 DISKPART 模式
exit  # 命令退出命令提示符模式
```

 3. 然后再继续进行分区，安装即可。也可以只建立一个主分区，等系统安装完成后再进行分区。




### 设置定时关机
通过 `Win` + `R` 键 打开运行窗口，输入 `shutdown -s -t x` 并回车

> Tips:
> 上文所提到的“x”指代时间（以秒为单位，例如:1小时后关机，则“x”为3600）

设置完成后，系统将会在右下角弹出 `即将注销你的登录` 消息窗口

这就意味着你的设置成功啦~


#### 取消定时关机
依旧是通过 `Win` + `R` 键 打开运行窗口，输入 `shutdown -a`

回车后，系统将会在右下角弹出 `计划的关闭已取消` 消息窗口




### CompatTelRunner.exe 进程占用资源
> 吐槽:
> 这个进程过于离谱，直接把我硬盘的占用率提到了居高不下的100%（恼）

#### 什么是 CompatTelRunner.exe
是用于执行 `Microsoft Compatibility Telemetry（微软兼容性遥测）` 的系统进程,

由 Microsoft 设计来收集操作系统性能数据，它将帮助 Microsoft 识别操作系统问题并发布更新以修复这些问题。

#### 解决方法
##### 方法一: 本地组策略编辑器
通过 `Win` + `R` 键 打开运行窗口，输入 `gpedit.msc` 并回车

在左侧的侧边栏中依次选择 `计算机设置` -> `管理模版` -> `Windows组件` -> `数据收集和预览版` 

在右侧找到 `允许遥测` ，将其设置为 `已禁用` 即可

##### 方法二: 服务
通过 `Win` + `R` 键 打开运行窗口，输入 `services.msc` 并回车

将以下服务设置为 `禁用` / `手动` ：
`Connected User Experiences and Telemetry`

`Diagnostic Policy Service`

`Diagnostic Service Host`

##### 方法三: 任务计划程序
通过 `Win` + `R` 键 打开运行窗口，输入 `taskschd.msc` 并回车

在左侧的侧边栏中依次选择 `任务计划程序库` -> `Microsoft` -> `Windows` -> `Application Experience`

在右侧禁用以下任务：
`Microsoft Compatibility Appraiser`

`PcaPatchDbTask`

`ProgramDataUpdater`

`StartupAppTask`

##### 方法四: 注册表编辑器
通过 `Win` + `R` 键 打开运行窗口，输入 `regedit` 并回车

找到以下路径：

`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection`

通过 `DWORD (32 位)值` 创建 `Allow Telemetry` , 值设为 `0`






## 后记
解决方法来源于互联网，若是侵犯了您的合法权益，请立即联系我！