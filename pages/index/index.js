// index.js
Page({
  data:{
    text1:'欢迎来到小程序！',
    array: ['夏', '商', '周', '春秋', '战国'],
    view: 'MINA',
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  changeData(){
    this.setData({
      text1:'礼崩乐坏，百家争鸣'
    })
  },
  changelist(){
    this.setData(
      {
        array:['唐', '宋', '元', '明', '清']
      }
    )
      
    
  }
})
