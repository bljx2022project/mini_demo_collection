// pages/index2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    per:20,
    option1: [
        { text: '老师', value: 0 },
        { text: '学生', value: 1 },
      ],
      option2: [
        { text: '信息学院', value: 'a' },
        { text: '保护区学院', value: 'b' },
        { text: '草原学院', value: 'c' },
        { text: '工学院', value: 'd' },
        { text: '环境学院', value: 'e' },
        { text: '经管学院', value: 'f' },
        { text: '理学院', value: 'g' },
        { text: '林学院', value: 'h' },
        { text: '马克思主义学院', value: 'i' },
        { text: '人文学院', value: 'j' },
        { text: '生物学院', value: 'k' },
        { text: '水保学院', value: 'l' },
        { text: '外语学院', value: 'm' },
        { text: '艺术学院', value: 'n' },
        { text: '园林学院', value: 'o' },
      ],
      value1: 0,
      value2: 'a',
      value: 3,
      time: 30 * 60 * 60 * 1000,
      timeData: {},
  },
  upup(){
    //点击一次进度加10
    let bef=this.data.per+10;
    console.log(bef,this.data.per);
    if( Number(bef ) >= 0  && Number(bef) < 100  )
    {
        this.setData({
            per:bef
        })
    }
    else if( Number(bef) >= 100 )
    {
        this.setData({
            per:100   
        })
        
    }
    
  },
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
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
