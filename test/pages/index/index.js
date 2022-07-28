// index.js
Page({
  data: {
    item: {
      year: 2022,
      month: 7,
      day: 28,
    },
    active: 0,
    title: '测试页面1',
    page: true,
    cat: 1,
    judge: false,
    offsettop: 0
  },
  other: function(){
    wx.navigateTo({
      url: '/pages/test/test'
    })
  },
  image: function(){
      this.setData({
        judge: true
      })
  }
})
