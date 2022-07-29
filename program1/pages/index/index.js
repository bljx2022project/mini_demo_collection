// index.js
Page({
    data:{
        text1:'BJFU',
        array:[1,2,3],
        view:'MINA',
        part1: {name: '林之心', reason: '风景优美'},
        part2: {name: '东区食堂', reason: '食物美味'},
        part3: {name: '学研大厦', reason: '建筑宏伟'},
        value:0,
    },
    changeData(){
        this.setData({
            text1:'北京林业大学'
        })
    },
    changeNum(){
        this.setData({
            'array[0]':3,
            'array[1]':2,
            'array[2]':1
        })
    },
    onClickLeft() {
        wx.showToast({ title: '点击返回', icon: 'none' });
    },
    onClickRight() {
        wx.showToast({ title: '点击按钮', icon: 'none' });
    },
    onChange(event) {
        this.setData({
          value: event.detail,
        });
      },
})
