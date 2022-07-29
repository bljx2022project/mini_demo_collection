// pages/index2/index2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text2:'Goodnight',
        view:'WEBVIEW',
        time: 30 * 60 * 60 * 1000,
        timeData: {},
        value: 25,
        gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24',
    },
        staffA: {firstName: 'Huck', lastName: 'You'},
        staffB: {firstName: 'Into', lastName: 'Ur'},
        staffC: {firstName: 'Pus', lastName: 'Sy'},
        checked: true,
    },
    onADD(){
        let tmp = this.data.value + 10;
        console.log(tmp,this.data.value);
        this.setData({
            value:tmp
        })
    },
    onMINUS(){
        let tmp = this.data.value - 10;
        console.log(tmp,this.data.value);
        this.setData({
            value:tmp
        })
    },
    changeData(){
        this.setData({
            text2:'Goodmorning'
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

    },
    onChange(e) {
        this.setData({
          timeData: e.detail,
        });
    },
    oncchange({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked: detail });
    },
})