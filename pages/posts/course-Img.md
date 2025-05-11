---
title: 利用 GitHub + jsdelivr 搭建免费图床
date: 2022-05-15
categories: 技术教程
tags: 
 - 图床搭建
 - 免费图床搭建
 - jsdelivr
 - PicGo
 - GitHub
---
## 前言
截止至2022/05/25，国内仅部分地区可正常访问 jsdelivr 


之前写博客的时候发现个问题：

用网上免费的图床不是图片总被删就是速度不快，还具有不稳定的因素...

（头像图片被删我是很不理解的）

之后，

在无意之中发现利用 Github 的存储库 + jsdelivr 提供的CDN服务 可以搭建图床~

那么，开始教程吧！

（注：`格式`部分是为了防止图片失效）


## 准备
- 一个 [GitHub](https://github.com) 账号
- 一台电脑
- 安装 [PicGo](https://github.com/Molunerfinn/PicGo)

如果你没有电脑，用手机也不是不行...




## 教程
1.创建 Repository（存储库）

进入 [GitHub](https://github.com) ，创建一个存储库(电脑端的在右上角)

![1](https://cdn.339688.xyz/2022/05/25/628dd63f330a0.png)

填写信息(参考下图填写)
![2](https://cdn.339688.xyz/2022/05/25/628dd68adf2da.png)

格式：
```
Repository name：这里填写名字  #例：images
Description (optional)：对这个仓库的描述（可不填）
类型：Public
```

填写完成后点击 `Create Repository`

用手机的麻烦跳到4.手机端使用

2.配置 token key 
点击右上角的头像，进入 `Settings` 

![3](https://cdn.339688.xyz/2022/05/25/628de04fe0c4d.png)

进入后，点击 ` Developer settings` 

（我的是在最下面）

点击 `Personal access tokens` 
![4](https://cdn.339688.xyz/2022/05/25/628dd6a1ae043.png)

再点击 `Generate token`
![5](https://cdn.339688.xyz/2022/05/25/628dd6b3a974a.png)

之后会让你填写你的 GitHub 密码
![6](https://cdn.339688.xyz/2022/05/25/628dd6c3187ee.png)

然后填写信息（参照下图填写）
![7](https://cdn.339688.xyz/2022/05/25/628dd76155892.png)

只勾选“repo”部分的权限即可

格式：
```
Note：说明  #随便填写即可
Expiration：令牌过期时间  #可选择 No expiration （永不过期），可能会不安全，按需填写即可
Select scopes：只勾选“repo”部分的权限即可
```

之后在最下面点击 `Generate token`

token只会显示一次，如果日后需要用的话，不要忘记记录下来！


3.PicGo配置

参照下图配置
![8](https://cdn.339688.xyz/2022/05/25/628dd7755a0c1.png)


格式：
```
仓库名：用户名/仓库名  #例：diffghjkl/images
分支名：main
Token：（你刚刚创建后获取到的Token）
储存路径：（可不填）
自定义域名：https://cdn.jsdelivr.net/gh/用户名/仓库名
```


4.手机端使用

嗯...你看到这里了？

那么，我想你应该是目前只能用手机，对吧？

......
...
.

你还在啊？那好吧...

其实你只需要通过浏览器把图片上传至你的一个状态是 Public （公开的）

然后使用链接 `https://cdn.jsdelivr.net/gh/用户名/仓库名/文件名`

如果需要指定目录的话，链接就是https://cdn.jsdelivr.net/gh/用户名/仓库名/目录名/文件名

~~这都没想到嘛？~~

~~不过你成功的让我水了字数~~

~~感觉还蛮不错的~~


## 后记
这是第一次尝试写图文教程~~（以后不会写了）~~

感觉还不错？~~（怪麻烦的）~~

希望这篇教程能对你有所帮助！~~（我成功的水了一篇文章？）~~