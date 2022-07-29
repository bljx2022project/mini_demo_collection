// aboutme.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: ''
    },

    onLoad: function () {
        let userInfoCache = wx.getStorageSync('userInfoCache');
        console.log("cache", userInfoCache)
        this.setData({
            userInfo: userInfoCache
        })
    },

    login() {
        console.log("点击成功")
        wx.getUserProfile({ 
            desc: '信息发布功能需要获取用户信息',
            success: res => {
                console.log("success", res);
                wx.setStorageSync('userInfoCache', res.userInfo)
                this.setData({
                    userInfo: res.userInfo
                })
            },
            fail(res) {
                console.log("fail", res);
            }
        })
    },

    logout() {
        this.setData({
            userInfo: "",
        })
        wx.setStorageSync('userInfoCache', '')
    }
})

