// index.js
Page({
  data:{
    text1:'Hello World!',
    array: [1, 2, 3, 4, 5],
    answer:'YES',
    staffA: {firstName: 'Hu', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    num:0,
  },
  changeData(){
    this.setData({
      text1:'888'
    })
  },
  changeNum(){
    this.setData({
      'array[2]':8
    })
  },
  changeAnswer(){
    let sum=this.data.num+1;
    console.log(sum,this.data.num);
    if(Number(sum)%2==1)
    {
        this.setData({
            num:sum,
            answer:'NO'
        })
    }
    else if(Number(sum)%2==0)
    {
        this.setData({
            num:sum,
            answer:'YES'
        })
    }
    
  },
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
})