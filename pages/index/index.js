// index.js
Page({
    data:{
        text1:'hi',
        array_for:[1,2,3,4,5],
        time: 30 * 60 * 60 * 1000,
        timeData: {},
    },
    change_arrayNum(){
        this.setData({
            'array_for[2]':88
        })
    },
    change_arrayNum2(){
        this.setData({
            'array_for[2]':3
        })
    },
})
