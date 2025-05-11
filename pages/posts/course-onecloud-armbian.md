---
title: 论玩客云(onecloud)如何刷入Armbian&安装Docker/1Panel
date: 2024-07-22
categories: 技术教程
tags: 
  - 玩客云
  - Armbian
  - 刷机
---

## 前言
在各种机缘巧合下，我接触到了玩客云

以下是我的这台玩客云配置：
（部分信息由商家提供，不保证准确性）
```Info
#基本
型号：WS1608
CPU：晶晨S805（Amlogic S805，armv7l，32位）
运存：1GB DDR3
存储：8GB eMMC

#接口
USB2.0 * 2
RJ45 * 1（千兆网口）
SD Card Reader * 1
HDMI OUT * 1（支持1080p 60fps）
```

> *目前玩客云已经不再提供服务（官方公告：https://wky.onethingcloud.com/ ）
> 但并不影响刷机的说

> 关于Armbian：https://github.com/ophub/amlogic-s9xxx-armbian/blob/main/README.cn.md



## 准备
### 必备
- 一台电脑
- 玩客云主机 & 电源线（12V 1A）
- 一条 USB-A 公对公数据线
- 安装 [USB_Burning_Tool(蓝奏云)](https://diffghjkl.lanzouq.com/i65gm258b4hi)
- 下载 [Armbian](https://github.com/hzyitc/armbian-onecloud)

> Tips：
> 我选择的是 `Armbian-unofficial_24.5.0-trunk_Onecloud_bullseye_current_6.6.21_minimal.burn`  
> 其中，  
> unofficial - 非官方  
> jammy - Ubuntu 22.04  
> bullseye - Debian 11  
> Bookworm - Debian 12  
> current - 稳定版  
> edge - 开发版  
> minimal - 通用  
> burn - 直刷包(直接烧录)




### 非必备
- 硬盘
- 网线
- HDMI线 & 支持HDMI的显示器
> Tips：  
> 网线与HDMI线必须要有一个，若你有其他的连接方案...当我没说（）



## 开始
### 刷入Armbian
打开 `USB_Burning_Tool` ，在 `文件-导入烧录包` 处选择 Armbian 的 img文件

在左侧的烧录配置中，选择 擦除所有

之后连上数据线，对玩客云进行短路

v1.0版本触点：
![3.1.1](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/cdnTH2IQTkN9M3)

v1.3版本触点：
![3.1.2](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/UlQCpcsOAu--Ag)

或者：
![3.1.3](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/hoR_ECKJPMZhVE)

> Tips: 判断版本方法  
> 1.玩客云分为v1.0和v1.3两个版本  
> 2.在SD卡处标注v1.3的即为v1.3版本的，未标注的为v1.0版本  
> ![3.1.4](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/beImPwYH1Rj5-S)

短路好后接上电源， `USB_Burning_Tool` 将自动检测设备
![3.1.5](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/3laXLoxVnf9FOM)

提示连接成功后，点击 `开始`（此时就可以松开触点？）
> Tips：若烧录过程中报错，可尝试以下方法  
> 1.断开USB数据线，等待两秒后再连接  
> 2.重新短接

![3.1.6](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/YFfkrxWVibqol5)

> Tips：之后若需再次刷入，可以不进行短接操作（据说有的需要按重置键）

烧录成功后点击 `停止` ，关闭程序后再断开数据线

将电源断开后再连接，让玩客云重启

> 此时你可以选择：  
> 1.通过HDMI连接至显示器操作（同时需接上USB键盘）  
> 2.通过SSH连接（需玩客云接上网线，然后在路由器管理界面找到设备onecloud的IP地址）

第一次进入系统时会要求更改默认密码
> Tips：若要求填入账号密码，根据以下信息填写即可  
> 默认账号：`root`  
> 默认密码：`1234`

至于是否需要另建账户就随个人喜好啦~

然后进行换源（以下操作可选，个人建议执行下）
- 编辑软件源
```Shell
nano /etc/apt/sources.list
```

清华大学源：
```File-sources.list
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free

# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

- 更新系统及软件
```Shell
apt-get update && apt-get upgrade
```
- 更改时区
```Shell
cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
```
- 验证时区是否正确
```Shell
date -R
```

至此，系统的刷入就完成啦~



### 安装Docker
由于一些原因，国内的Docker镜像站暂时无法提供服务，可尝试以下方法：
```Shell
apt install docker.io
```
或者
```Shell
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```



### 安装1Panel
- Debian
```Shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```
- Ubuntu
```Shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```
若不适配你的系统，请前往 [1Panel官网](https://1panel.cn/)


### 安装qbittorrent
```Shell
apt install qbittorrent-nox
```

创建qBittorrent服务
```Shell
nano /etc/systemd/system/qbittorrent.service
```

设置开机自启：将下面的内容粘贴并保存
```File-qbittorrent.service
[Unit]
Description=qBittorrent Daemon Service
After=network.target
[Service]
User=root
ExecStart=/usr/bin/qbittorrent-nox
ExecStop=/usr/bin/killall -w qbittorrent-nox
[Install]
WantedBy=multi-user.target
```

重新加载配置文件
```Shell
systemctl daemon-reload
```

#### 访问WebUI
访问地址：`http://IP:8080`
> Tips：  
> 用户名：`admin`  
> 密码：`adminadmin`

#### 常用命令
```Shell
 # 启动
service qbittorrent start

 # 关闭
service qbittorrent stop

 # 查看运行状态
service qbittorrent status

 # 开机自启
systemctl enable qbittorrent

 # 关闭开机自启
systemctl disable qbitorrent
```


#### Tracker服务器
Tracker介绍：https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md#tracker%E6%98%AF%E4%BB%80%E4%B9%88

![3.4.1](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/8Wy63AGD5G5coA)


##### 自建
目前咱还不需要自建...

如果你需要的话，可以看看这位的：

[搭建自己的BT Tracker | 桜庭清夏的小站](https://sakurabakiyoka.com/2020/11/26/build-private-tracker/)


##### 列表
也可以选择使用他人搭建好的，

这里推荐个项目：[XIU2/TrackersListCollection - Github](https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md)

若无法访问，可以试试访问这个文档：[XIU2/TrackersListCollection](https://trackerslist.com/#/zh)






### LANraragi搭建
详见 [论如何利用LANraragi+玩客云建立个人漫画库(1Panel+Linux)](https://blog.dmoe.top/2025/01/15/course-onecloud-LANraragi/)





### 挂载硬盘
#### 第一步：临时挂载
1.显示系统中可用存储设备、磁盘分区等相关信息
```Shell
lsblk
```
![3.4.1](https://sway-cdn.com/s/4aEiTpcBD4PPvwex/images/LZ3MOZmYxh5jRZ)
由上图可知，我的硬盘名称是 `sda1` 

> Tips：可以先对硬盘格式化，再挂载硬盘~（忽略此步也不是不可）  
> `mkfs.ext4 /dev/sda1`

2.创建一个文件夹，用于挂载硬盘
```Shell
mkdir /mnt/disk
 # 文件夹名disk可更换，依个人喜好就好~
```

3.挂载硬盘
```Shell
mount /dev/sda1 /mnt/disk
 # 不要忘记把 sda1 & disk 换成你自己的！
```


#### 第二步：永久挂载
即，设备开机时自动挂载
> Tips：
> 永久挂载后，设备重启/开机必须要一直插着硬盘，否则会无法重启

1.查询硬盘uuid及文件系统
```Shell
blkid /dev/sda1
```

2.根据硬盘信息制作出开机硬盘自动挂载命令
```Shell
UUID=你的硬盘UUID /mnt/disk 文件系统格式 defaults 0 0

 # 例（不要忘记换成自己的）
UUID=80278b04-2d19-984c-bdce-65ab443908ab /mnt/disk ext4 defaults 0 0
```

3.编辑磁盘挂载配置文件，将上一步制作出的命令添加到末行
```Shell
nano /etc/fstab
```
或
```Shell
vi /etc/fstab
```
> Tips:vi编辑命令使用方法  
> 1.使用键盘方向键调整光标位置  
> 2.按下Insert键(或按下 `i键` )，可以见到窗口左下角有 `Insert` 字样，表示当前为插入编辑状态  
> 3.编辑完内容后，按下`Esc键`，输入 `:wq` 再按回车可以保存并退出编辑，而输入 `:q!` 回车则取消保存

4.测试硬盘是否挂载成功（如果报错千万不要重启，会导致进不了系统）
```Shell
mount -a
```






## 常见问题
### 无法拉取Docker镜像

有五种解决方案

（内容来自[tech-shrimp/docker_installer - Github](https://github.com/tech-shrimp/docker_installer?tab=readme-ov-file#2-pull%E9%95%9C%E5%83%8F)）

#### 方案一 转存到阿里云
使用 `Github Action` 将国外的Docker镜像转存到阿里云私有仓库，供国内服务器使用，免费易用

支持 `DockerHub` , `gcr.io` , `k8s.io` , `ghcr.io` 等任意仓库
支持最大40GB的大型镜像
使用阿里云的官方线路，速度快
项目地址: https://github.com/tech-shrimp/docker_image_pusher


#### 方案二 镜像站
现在只有很少的国内镜像站存活
不保证镜像齐全,且用且珍惜
以下三个镜像站背靠较大的开源项目，优先推荐
```Shell
sudo vi /etc/docker/daemon.json
```

输入下列内容，最后按ESC，输入 :wq! 保存退出。
```json [daemon.json]
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://docker.1panel.live",
        "https://hub.rat.dev"
    ]
}
```

重启Docker
```Shell
sudo service docker restart
```


#### 方案三 离线镜像
使用Github Action下载docker离线镜像 https://github.com/wukongdaily/DockerTarBuilder


#### 方案四 使用一键脚本
```Shell
bash -c "$(curl -sSLf https://xy.ggbond.org/xy/docker_pull.sh)" -s 完整镜像名
```


#### 方案五 使用Cloudflare worker 自建镜像加速
https://github.com/cmliu/CF-Workers-docker.io





### 如何挂载NTFS硬盘
armbian系统原生不支持挂载ntfs，需要安装 [ntfs-3g](https://github.com/tuxera/ntfs-3g)
> 据网友所说：  
> 稳定性有点差，时常掉盘，速度不如使用原生ext4

#### 安装ntfs-3g
下载
```Shell
wget https://tuxera.com/opensource/ntfs-3g_ntfsprogs-2017.3.23.tgz
```
解压安装
```Shell
tar -xvzf ntfs-3g_ntfsprogs-2017.3.23.tgz

cd ntfs-3g_ntfsprogs-2017.3.23
 
./configure
 
make
 
make install
```

#### 挂载硬盘
##### 临时挂载
1.查询硬盘信息
```Shell
fdisk -l | grep NTFS
```

2.创建一个文件夹，用于挂载硬盘
```Shell
mkdir /mnt/disk
 # 文件夹名disk可更换，依个人喜好就好~
```

3.挂载硬盘（例如，硬盘为 `sda1` ）
```Shell
mount -t ntfs-3g /dev/sda1 /mnt/disk
 # 不要忘记把 sda1 & disk 换成你自己的！
```

##### 永久挂载
详见 [#挂载硬盘-第二步：永久挂载](https://blog.dmoe.top/2024/07/22/course-onecloud-armbian/#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E6%B0%B8%E4%B9%85%E6%8C%82%E8%BD%BD)






### 如何修改IP地址
```Shell
nano /etc/network/interfaces
```
修改文件内容(以下是示例，请以实际情况为准！)：
```File-interfaces
# Network is managed by Network manager
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 223.5.5.5 223.6.6.6
```
> Tips：
> eth0 - 网络接口名称  
> address - 设备的静态IP地址(请以你的路由器为准)  
> netmask - 网络掩码  
> gateway - 默认网关(请以你的路由器为准)  
> dns-nameservers - DNS服务器地址(请以你的地区情况来选择)






### 指示灯常亮红色
据说是正常现象，镜像的问题，并不影响使用

可执行以下命令修改为蓝色常亮
```Shell
echo "default-on" >/sys/class/leds/onecloud\:blue\:alive/trigger
echo "none" >/sys/class/leds/onecloud\:green\:alive/trigger
echo "none" >/sys/class/leds/onecloud\:red\:alive/trigger
```






### (机械)硬盘掉盘/(运行后突然)不识别(机械)硬盘
这个问题还算比较高频率的...

> 据网友所说，该问题出现的原因是玩客云的USB供电有时会不足，就很容易掉盘（

我个人想到的解决方案是为硬盘外接电源

> Tips: 3.5寸机械硬盘 常用的 易驱线/硬盘盒 会有 `外部供电`

不过目前我还没实验过...

> 各位倘若有什么合适的方案 或 已经尝试过我这种预想 的，欢迎在评论区留言~






### 需要使用vi/vim
```Shell
apt install vim
```



### 支持玩客云(armv7l)的Docker镜像(1Panel/三方商店上架的)
> 以下镜像经博主测试可正常运行，但可能存在局限性，更多内容请自行搜索（2025/01/16）

 - Alist
 - Cloudreve
 - FileCodeBox
 - qBittorrent（似乎有版本要求?）
 - Jellyfin（能运行，但玩客云性能堪忧）
 - Calibre-Web（官方最后支持32位的版本：0.6.20-ls204，详见 [LinuxServer.io](https://info.linuxserver.io/issues/2023-04-13-calibre-web/) ）
 - Koodo Reader
 - reader（能运行，但玩客云性能堪忧）
 - Komga（能运行，但玩客云性能堪忧）
 - Navidrome







## 参考资料
- [五十元内的轻量服务器：玩客云折腾速通指南（一） - 苏洋博客](https://soulteary.com/2025/01/08/lightweight-server-under-fifty-yuan-wanke-cloud-speed-running-guide-1.html)

- [低成本搭建家用轻NAS系统-玩客云 - 金者的博客](https://panzhe.cn/2022/11/15/wky-nas/)

- [玩客云(晶晨S805)刷机 - 海纳思系统](https://doc.ecoo.top/docs/tutorial-basics/s805/)

- [1Panel三方应用商店](https://1p.131.gs/)

- [玩客云刷Armbian安装docker、alist、OpenWrt、Aria2等教程及所需文件(内容详细) - CSDN](https://blog.csdn.net/hcfhshl/article/details/137676638)

- [玩客云刷机 Armbian，安装 1panel、Alist - 灰糖笔记](https://longdada.me/onecloud-shuaji-armbian-install-1panel-alist/)

- [玩客云-Armbian23.05-直刷包-内核6.1 - 恩山无线论坛](https://www.right.com.cn/FORUM/thread-8246606-1-1.html)

- [Vim安装与配置教程（非常详细）从零基础入门到精通，看完这一篇就够了- CSDN](https://blog.csdn.net/Javachichi/article/details/131370829)

- [玩客云刷Armbian修改IP地址_其他网络设备 - 什么值得买](https://post.smzdm.com/p/an97m9p0/)






## 后记
久违的更新...

有些想不起来Markdown语法了...