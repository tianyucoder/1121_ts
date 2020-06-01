(()=>{

	function add (x:number,y:number):number{
		return x+y
	}
	console.log(add(1,2))

	//完整函数的写法
	let myAdd:(x:number,y:number)=>number = function(x:number,y:number):number{
		return x+y
	}

	//默认参数，可选参数
	function buildName(firstName:string ='A', lastName?:string) {
		if (lastName) {
			return firstName + '-' + lastName
		} else {
			return firstName
		}
	}
	console.log(buildName())

	//剩余参数
	function info(x: string,...peiqi:string[]) {
		console.log(x,peiqi)
		//console.log(arguments)
	}
	info('abc', 'c', 'b', 'a')

})()