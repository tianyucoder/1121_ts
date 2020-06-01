(()=>{

	class Data<T> {
		value:T
		add:(x:T,y:T)=> T
	}

	let data1 = new Data<number>()
	data1.value = 123
	data1.add = function(x,y){return x+y}

})()