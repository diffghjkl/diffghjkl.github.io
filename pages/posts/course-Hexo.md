---
title: 在Windows下搭建Hexo（使用GitHub Page）
date: 2022-05-13
categories: 技术教程
tags: 
 - Hexo
 - Github Page
 - Hexo教程
 - Hexo搭建
 - Windows
---
## 前言
由于经济上的原因，博主便开始用上了Hexo

这篇文章以记录为主，方便日后使用

~~（2022/05/13准备写，一直到2022/06/28才写完的我实在是过于离谱）~~

~~（标签是教程，却是记录就离谱）~~

（注：`格式`部分是为了防止图片失效）




## 准备
- 一台电脑~~（废话）~~
- 一个 [GitHub](https://github.com/) 账号
- 安装 [Git](https://git-scm.com/downloads)
- 安装 [NodeJS](https://nodejs.org/zh-cn/download/)

### 1. 安装 Git
1.1 进入 [Git官网](https://git-scm.com/downloads) 选择合适的版本下载并安装（若无特殊需求，安装时一直点 `Next` 即可）

1.2 检查是否安装成功（使用Git Bash）

Tips：Git Bash 在桌面右键即可找到

![1.2-1](https://api.mluk.cn/images/Snipaste_2022-06-28_17-34-49.png)
```Shell
git --version
```
如果显示版本号，即安装成功！
![1.2-2](https://api.mluk.cn/images/Snipaste_2022-06-28_17-36-44.png)

### 2.安装 NodeJS
2.1 进入 [NodeJS官网](https://nodejs.org/zh-cn/download/) 选择合适的版本下载并安装（若无特殊需求，安装时一直点 `Next` 即可）

2.2 检查是否安装成功（使用CMD/Powershell均可）
```Shell
node -v
npm -v
```
如果显示版本号，即安装成功！
![2.2](https://api.mluk.cn/images/Snipaste_2022-06-28_17-30-34.png)

> npm为Node.js的包管理工具




## 教程
### 1. 创建 Repository（存储库）

1.1 点击右上角的头像，进入 `Your repositories`

![1-1](https://api.mluk.cn/images/Snipaste_2022-06-28_16-39-45.png)

点击 `New`

![1-2](https://api.mluk.cn/images/Snipaste_2022-06-28_16-40-49.png)

1.2 填写信息(参考下图填写)

![1-3](https://api.mluk.cn/images/Snipaste_2022-06-28_16-58-58.png)

格式：
```
Repository name：这里填写名字（格式：用户名.github.io）  #例：Gxb26.github.io
Description (optional)：对这个仓库的描述（可不填）
类型：Public
```

1.3 在GitHub Pages中检查地址是否为 https://用户名.github.io/ 
![1-4](https://api.mluk.cn/images/Snipaste_2022-06-28_17-09-19.png)

然后访问该地址，查看是否可以正常访问（访问后与下图类似即可）
![1-5](https://api.mluk.cn/images/Snipaste_2022-06-28_17-11-12.png)


### 2. 安装 Hexo
2.1 进入你选择的目录，打开 `Git Bash` ，然后输入
```Shell
npm install hexo-cli -g
hexo -v  # 查看版本
```
![2-1](https://api.mluk.cn/images/Snipaste_2022-06-28_18-16-45.png)

2.2 创建一个 `hexo-blog 项目` 并初始化
```Shell
hexo init hexo-blog
cd hexo-blog
npm install
```

2.3 构建页面
```Shell
hexo g
```

2.4 本地启动，检查页面是否正常
```Shell
hexo s
```
![2-2](https://api.mluk.cn/images/Snipaste_2022-06-28_18-23-54.png)

`Ctrl` + `C` 关闭


### 3. 推送到 GitHub 
3.1 设置个人信息
```Shell
git config --global user.name "您的用户名"
git config --global user.email "您的GitHub账号绑定的主邮箱"
```

3.2 生成密钥
```Shell
ssh-keygen -t rsa -C "您的GitHub账号绑定的主邮箱"
```

输入上方命令后会出现如下图的提示：

![3-1](https://api.mluk.cn/images/Snipaste_2022-06-28_19-19-29.png)

```log
# 以下是出现的提示：

Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/diffghjkl/.ssh/id_rsa):  # 密钥名称（可不填）
Enter passphrase (empty for no passphrase):  # 你要设置的密码
Enter same passphrase again:  # 再输一次你要设定的密码
```

Tips：密码是你之后推送到 GitHub储存库 的密码（似乎没有密码强度限制）

3.3 在 `GitHub` 添加 `SSH keys`

1. 查看 `id_rsa.pub` 文件，并整个复制

Tips：如果在上一步你留空了密钥名称，生成的文件在 `C:\Users\您的用户名\.ssh` 目录下；如果设定了，文件将会在你的 `Git Bash` 目前进入的目录中生成

2. 在 `GitHub` 中，点击你的头像，找到 `Setting` 

3. 点击 ` SSH and GPG keys`

4. 点击 `New SSH key` ，然后依据下图填写即可

![3-2](https://api.mluk.cn/images/Snipaste_2022-06-28_19-36-26.png)

格式：
```
Title # 名称（可随意填写）
Key # 将你之前复制的密钥粘贴到这里
```
不要忘记点击 `Add SSH key` 保存！！！

5. 点击保存后会让你输入密码

![3-3](https://api.mluk.cn/images/Snipaste_2022-06-28_19-42-17.png)

3.4 `Hexo` 的推送设置

修改 Hexo 根目录下的文件 `_config.yml` 中的 `deploy` 
```yaml
deploy:
  type: git
  repo: git@github.com:您的用户名/您的用户名.github.io
  branch: main
```

3.5 推送至 `GitHub`
```Shell
hexo d
```

如果没有 `hexo-deployer-git` :
```Shell
npm install hexo-deployer-git --save
```




## 后记
这篇文章大概耗费了4个小时...

~~因为安装时总是出现奇奇怪怪的问题...~~

Tips：一些奇奇怪怪的问题的解决方法我之后会写的

看在我这么努力的份上，不留个评论嘛？