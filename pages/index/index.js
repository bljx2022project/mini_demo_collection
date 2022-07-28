// index.js
Page({
  data:{
    text1:'Hello World',
    
    activeName: '1',
  },
  changeData(){
    this.setData({
      text1:'Welcome!'
    })
  },
  
  // onChange(event) {
  //   wx.showToast({
  //     icon: 'none',
  //     title: `当前值：${event.detail}`,
  //   });
  // },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  
})
