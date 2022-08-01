# mini_demo_collection
收集demo小程序

有两个页面，index和index2
## index
![img.jpg](https://user-images.githubusercontent.com/109078960/182109618-e26fc9d4-a8c5-4b08-9eb4-26d78ec2582b.jpg)
## index2
![img.jpg](https://user-images.githubusercontent.com/109078960/182109846-43062fc6-492d-4d05-a80e-38916d4fad29.jpg)
#### vant插件使用
index页面（搜索框、折叠面板）
```js
"usingComponents": {
    "van-slider": "@vant/weapp/slider/index",
    "van-search": "@vant/weapp/search/index",
    "van-collapse": "@vant/weapp/collapse/index",
    "van-collapse-item": "@vant/weapp/collapse-item/index"
  },
```
index2页面（图标、文件上传、评分功能）
```js
"usingComponents": {
    "van-uploader": "@vant/weapp/uploader/index",
    "van-collapse": "@vant/weapp/collapse/index",
    "van-collapse-item": "@vant/weapp/collapse-item/index",
    "van-icon": "@vant/weapp/icon/index"
  },
```
#### 条件渲染、列表渲染、模板

index2.wxml中的部分
```js
<view class="text4">
  <view>条件渲染：</view>
<view wx:if="{{type==1}}">奇数</view>
<view wx:elif="{{type==2}}">偶数</view>
<view wx:else>输入错误</view>
</view>

<view class="text5">
  <view>模板：</view>
<template name="staffName">
  <view>
    Name: {{firstName}}, Hobby: {{hobby}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
</view>

<view class="text6">
  <view >列表渲染：</view>
<view wx:for="{{array}}" style="text-align: center;">内容{{item}}</view>

<button bindtap="changeNum">
点击切换数字
</button>
</view>
```