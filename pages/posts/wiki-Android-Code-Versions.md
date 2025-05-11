---
title: Android 系统代号、版本、API级别/NDK 版本
date: 2024-03-09
categories: 计算机Wiki
tags: 
 - Android
 - Android 版本号
 - Android API
---

## 前言
 > 本文内容来自 [代号、标记和 build 号 - Android Open Source Project](https://source.android.com/docs/setup/about/build-numbers?hl=zh-cn#platform-code-names-versions-api-levels-and-ndk-releases) 

因为众所周知的原因， Google 的一些网站无法在大陆访问...

为便于日常查找，将部分内容存档于此

正文开始~






## 正文
### 平台代号、版本、API 级别和 NDK 版本
下表列出了代号、对应的版本号以及关联的 API 级别。

| 代号   | 版本 |     API 级别/NDK 版本 |
| :----- | :--: | -------: |
| Android13 |  13  | API 级别 33 |
| Android12L |  12  | API 级别 32 |
| Android12 |  12  | API 级别 31 |
| Android11 |  11  | API 级别 30 |
| Android10 |  10  | API 级别 29 |
| Pie |  9  | API 级别 28 |
| Oreo |  8.1.0  | API 级别 27 |
| Oreo |  8.0.0  | API 级别 26 |
| Nougat |  7.1  | API 级别 25 |
| Nougat |  7.0  | API 级别 24 |
| Marshmallow |  6.0  | API 级别 23 |
| Lollipop |  5.1  | API 级别 22 |
| Lollipop |  5.0  | API 级别 21 |
| KitKat |  4.4 - 4.4.4  | API 级别 19 |
| Jelly Bean |  4.3.x  | API 级别 18 |
| Jelly Bean |  4.2.x  | API 级别 17 |
| Jelly Bean |  4.1.x  | API 级别 16 |
| Ice Cream Sandwich |  4.0.3 - 4.0.4  | API 级别 15，NDK 8 |
| Ice Cream Sandwich |  4.0.1 - 4.0.2  | API 级别 14，NDK 7 |
| Honeycomb |  3.2.x  | API 级别 13 |
| Honeycomb |  3.1  | API 级别 12，NDK 6 |
| Honeycomb |  3.0  | API 级别 11 |
| Gingerbread |  2.3.3 - 2.3.7  | API 级别 10 |
| Gingerbread |  2.3 - 2.3.2  | API 级别 9，NDK 5 |
| Froyo |  2.2.x  | API 级别 8，NDK 4 |
| Eclair |  2.1  | API 级别 7，NDK 3 |
| Eclair |  2.0.1  | API 级别 6 |
| Eclair |  2.0  | API 级别 5 |
| Donut |  1.6  | API 级别 4，NDK 2 |
| Cupcake |  1.5  | API 级别 3，NDK 1 |
| （无代号） |  1.1  | API 级别 2 |
| （无代号） |  1.0  | API 级别 1 |

#### build ID 定义
在 Android 8.0.0 (Oreo) 及更高版本中，每个 build 均采用 [build ID](https://source.android.com/docs/setup/about/build-numbers?hl=zh-cn#build) 格式 `PVBB.YYMMDD.bbb[.Cn]` 进行标识，其中：

- **P** 表示平台版本代号的第一个字母，例如 O 表示 Oreo。

- **V** 表示支持的类别。按照惯例，P 表示主要平台分支。

- **BB** 是由字母和数字组成的代码，Google 可通过该代码识别 build 所属的确切代码分支。

- **YYMMDD** 表示相应版本从开发分支细分出来或与开发分支同步的日期。它并不一定是 build 的确切构建日期，因为 Google 常常会在现有

- **build** 中增加细微的更改，并在新 build 中重复使用与现有 build 相同的日期代码。

- **bbb** 表示具有相同日期代码的不同版本，从 001 开始。

- **Cn** 是可选的字母数字，表示在现有 PVBB.YYMMDD.bbb build 之上构建的修补程序，从 A1 开始。

早期 Android 版本采用另一种较短的 build ID 代码（例如 FRF85B），其中：

- 第一个字母：代表版本系列的代号，例如 F 表示 Froyo。

- 第二个字母：是分支代码，Google 用它来表示 build 所属的确切代码分支。按照惯例，R 表示主要版本分支。

- 第三个字母 & 后面的两个数字 ：是日期代码。字母表示季度。两个数字表示相应季度内的第几天。
> **Tips**:  
> 1.日期代码并不一定是 build 的确切构建日期，因为 Google 常常会在现有 build 中增加细微的更改，并在新 build 中重复使用与现有 build 相同的日期代码。  
> 2.A 表示 2009 年第 1 季度，F 表示 2010 年第 2 季度，以此类推  
> 3.F85 表示 2010 年 6 月 24 日  

- 末尾字母：表示具有相同日期代码的不同版本，从 A 开始
> A 并不会显示，通常会为了简洁而省略



### 源代码标记和 build
内容太多，各位去看原文吧...

原文链接： https://source.android.com/docs/setup/about/build-numbers?hl=zh-cn#build






## 后记
希望这篇文章的内容能够帮助到你~

内容有些多，转载不易...

（主要是排版有亿点麻烦...）