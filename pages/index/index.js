// index.js
Page({
  data: {
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    user:"新用户",
    array: [1, 2, 3, 4, 5],
    User1: {Username: 'Hulk', Sex: 'F'},
    User2: {Username: 'Shang', Sex: 'M'},
    User3: {Username: 'Gideon', Sex: 'F'},
    progressVal:0
  },
  change:function(){
this.setData({array:[4,5,6,7,8]})
  },
  load:function(){
    for(var i = 0; i <= 100; i++)
    {
      this.setData({progressVal:i})
     /*似乎没有起到作用
      setTimeout(function(){
        console.log("hello world")
    },30000)*/
    }
    
  },
  levelUp: function() {
    this.setData({ user: "VIP" })
  },
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
})
