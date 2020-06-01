(()=>{
	function add (x:string,y:string):string
	function add (x:number,y:number):number

	function add (x:string|number,y:string|number):string|number{
		//若x,y均为字符串，则做拼接
		//若x,y均为数字，则求和返回x + y + 100
		if(typeof x === 'string' && typeof y === 'string'){
			return x+y
		}else if (typeof x === 'number' && typeof y === 'number') {
			return x+y+100
		}
	}
	console.log(add(1,2))
	console.log(add('hello','1121'))
	//console.log(add(1,'hello'))

})()