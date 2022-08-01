# WeApplet 01

## 背景和基本介绍

模仿了北林计协小程序的一些组件的用法，做了一个简单的信息发布展示小程序。

需求是原来院里之前对我很好的一个老师曾经给过我这样一个方向让我尝试，现在总算是做出来了。



## 功能

### 信息展示+链接点击复制到手机剪贴板

<img src="https://cdn.nlark.com/yuque/0/2022/jpeg/12681739/1659279920971-4dbe5dd3-9b2b-4d71-8e9e-691fb702aa18.jpeg?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0" alt="Screenshot_20220728_234620.jpg" style="zoom:33%;" />

### 信息添加



<img src="https://cdn.nlark.com/yuque/0/2022/jpeg/12681739/1659279922763-5e467bb3-b0b3-4ea0-bf81-81a514041258.jpeg?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0" alt="Screenshot_20220728_234625.jpg" style="zoom:33%;" />

<img src="https://s2.loli.net/2022/08/01/9RXPSDYQVgdok6q.png" alt="image-20220801183748759" style="zoom:33%;" />



<img src="https://s2.loli.net/2022/08/01/SBpKneV1vHRaXsL.png" alt="image-20220801183842908" style="zoom:33%;" />



## Todo

- 优化添加的算法。目前是利用直接读取云开发数据库和 `Vant-field` 的直接内容传输来实现的，实现起来还是很别扭的。
- 内容添加的权限。初步想法是做一个简单的验证密码就好，复杂了也用处不大。





# WeApplet 02

## 介绍

练习项目，主要为了练习学到的一些东西



## 功能

- 利用 `wx:key` 实现了一个随机产生数字的排序；

- 利用模板功能实现了多次按钮的添加（但还是不知道为什么里面的数字不显示）

<img src="https://s2.loli.net/2022/08/01/6WKXuPJo5L9Tse7.png" alt="image-20220801192016775" style="zoom:33%;" />



- 利用条件渲染实现了简易的登录系统

![image-20220801192024199](https://s2.loli.net/2022/08/01/oek6I8MHEA7DCpd.png)