// index.js
Page({
	data:{
		text1:'欢迎',
		num:1,
		array:[1,2,3,4,5],
		view:'APP',
		staffA: {firstName: 'Hulk', lastName: 'Hu'},
		staffB: {firstName: 'Shang', lastName: 'You'},
		staffC: {firstName: 'Gideon', lastName: 'Lin'}
	},
	changeData(){
		let number=this.data.num+1;
		if(this.data.num==6){
			this.setData({
				text1:'谢谢，你被骗了',
				num:1
			})
		}else if(this.data.text1=='欢迎'){
			this.setData({
				text1:'再见',
				num:number
			})
		}else{
			this.setData({
				text1:'欢迎',
				num:number
			})
		}
		
	},
	changeNum(){
		let x=this.data.array[0];
		let y=this.data.array[4];
		this.setData({
			'array[4]':x,
			'array[0]':y
		})
		x=this.data.array[1];
		y=this.data.array[3];
		this.setData({
			'array[3]':x,
			'array[1]':y
		})
	}
})
