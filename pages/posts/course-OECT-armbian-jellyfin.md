---
title: 网心云OECT（RK3566）搭建Jellyfin&启用视频硬解
date: 2026-02-09
categories: 技术教程
tags: 
 - 网心云
 - 网心云OECT
 - NAS
 - Armbian
excerpt_type: html
---
> 本文记录的比较匆忙，内容可能存在错误，还请见谅






## 准备
- 网心云OECT（Armbian系统）  
> 本文使用的系统为 [ Flash_Armbian_25.05.0_rockchip_efused-wxy-oec_bookworm_6.1.99_server_2025.03.20 - 123云盘](https://www.123865.com/s/BOa8Vv-TDf7A)  
- Docker
- Jellyfin的Docker镜像  






## 正文
> 如果需要 `网心云OECT` 刷机教程，请查看 [网心云OEC/OECT刷入Armbian](https://blog.dmoe.top/posts/course-OECT-armbian)  

### 安装 1Panel (非必须)
您也可以在 [1Panel官网](https://1panel.cn/) 获取安装方法  

以下是一键安装指令：  
```Shell
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```



### 检测芯片的硬件加速功能
#### 检查设备节点状态
```shell
ls -l /dev | grep -E "mpp|rga|dri|dma_heap"
```
输出的内容若与以下内容类似，则说明设备节点存在（即驱动已正常加载）：  
```shell
drwxr-xr-x 2 root root 100 dma_heap          # DMA共享内存支持
drwxr-xr-x 3 root root 140 dri               # DRM子系统
crw------- 1 root root 240,0 mpp_service     # MPP硬件编解码服务
crw------- 1 root root 10,122 rga            # RGA 2D图像加速
```
> **Tips**：  
> - `dma_heap`：即`“DMA-BUF Heap（DMA共享内存堆）”` ，用于高效分配跨设备共享的DMA缓冲区，支持零拷贝数据传输  
> - `dri`：即 `“Direct Rendering Infrastructure（直接渲染基础设施）”` ，GPU与显示控制器接口，管理GPU渲染和显示输出  
> - `mpp_service`：即 `“Media Process Platform Service（媒体处理平台服务）”` ，提供硬件编解码能力（H.264/H.265等视频编解码）  
> - `rga`：即 `“Raster Graphics Acceleration（光栅图形加速）”` ，用于2D图像处理加速（缩放、旋转、alpha混合等）  





#### 检查驱动状态
```shell
dmesg | grep -iE "mpp|rga|rockchip-drm"
```
> Tips：该命令可能不输出内容，可通过 `ffmpeg` 等工具来验证设备的硬解能力



### 安装 Jellyfin
> Tips：  
> 官方镜像 [jellyfin/jellyfin - Docker Image](https://hub.docker.com/r/jellyfin/jellyfin) 目前并不支持调用网心云OECT的GPU，可使用 [nyanmisaka/jellyfin - Docker Image](https://hub.docker.com/r/nyanmisaka/jellyfin) 的 `latest-rockchip` 分支

将 `docker-compose.yml` 文件中的 `devices` & `image` 部分修改为以下内容：
```docker-compose.yml [Docker]
    devices:
      - /dev/dri:/dev/dri
      - /dev/dma_heap:/dev/dma_heap
      - /dev/mpp_service:/dev/mpp_service
      - /dev/rga:/dev/rga
    image: nyanmisaka/jellyfin:latest-rockchip
```



#### 配置 Jellyfin
在 `Jellyfin` 首页通过侧边栏进入 `控制台`  ，找到 `播放` - `转码`  

将 `硬件加速` 修改为 `Rockchip MPP (RKMPP)`  

`启用硬件编码` 部分可全部勾选，然后保存  
> `AV1` 可不勾选（?）  

是否配置成功请自行寻找视频资源测试  
> Tips：可通过 `WEB端` / `客户端` 的视频播放器的视频信息来查看  






## 参考资料
- [Orange 3B Jellyfin使用RK3566硬解4K视频 - Astarry技术日记](https://blog.astarry.cn/archives/822eb31f-cda3-4805-8a70-51879b9a96ec)
- [不到70块的NAS能硬解4K？RK3566jellyfin的安装和GPU调用 - Bilibili](https://www.bilibili.com/video/BV1W236zYEHU)






## 后记
~~新年的第二文章居然是水出来的（~~  

有两个令我疑惑的问题：  

- 网心云OEC和OECT这两个型号的芯片不同吗？目前我能查到的资料无法解答我的疑惑Orz  

- 不同的支持RK3566视频硬解的Armbian系统镜像，`docker-compose.yml` 文件中的 `devices` 配置不一样吗？~~（这对吗？）~~  

最后，提前祝各位春节快乐~  