// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    type:'1',
    staffA: {firstName: 'Tom', hobby: 'singing'},
    staffB: {firstName: 'Jack', hobby: 'running'},
    staffC: {firstName: 'Jane', hobby: 'dancing'},

    array:[1,2,3,4,5],

    fileList: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        name: '图片1',
      },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        name: '图片2',
        isImage: true,
        deletable: true,
      },
    ],

  },
  changeNum(){
    this.setData({
      'array[2]':7
    })
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})