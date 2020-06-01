(()=>{

	//布尔值
	let isDone:boolean = false
	isDone = true

	//数字
	let a1: number = 10 // 十进制
	let a2: number = 0b1010  // 二进制
	let a3: number = 0o12 // 八进制
	let a4: number = 0xa // 十六进制
	// console.log(a1,a2,a3,a4)

	//字符串
	let name:string = 'tom'
	let age:number = 19

	//undefined 和 null
	let u:undefined = undefined
	let n:null = null

	//数组
	let arr0:number[]
	arr0 = [1,3,5,7,9]
	let arr1:string[] = ['2','4','6','8','10']
	let arr2:Array<number> = [1,2,3,4,5]

	//元组
	let arr3: [string, number]
	arr3 = ['1',2]
	//arr3 = [1,'2'] //报错
	//arr3 = ['2',6,8 ] //报错

	//枚举
	enum BookNames {
		Zhao = 100,
		Qian,
		Sun,
		Li,
		Zhou
	}
	// console.log(BookNames)
	// console.log(BookNames[100])
	// console.log(BookNames.Zhao)

	//any
	let notSure:any
	notSure = true
	notSure = 'maybe a string'
	notSure = 100
	// console.log(notSure)
	let arr01:any[]
	arr01 = [{},[],true,'asd']

	function test(params:any):any{
		console.log(params)
	}
	//test('tom')

	//void
	//使用void去限制函数返回值类型
	function fn(): void {
		console.log('fn()')
		//return 1 //error
		//return '1' //error
		// return undefined //ok
		// return null //ok
	}
	fn()
	//几乎不会用void去限制变量
	let a:void
	a = undefined
	a = null

	//object
	function fn2(a:object):object{
		console.log('fn2被调用了',a)
		return {}
	}
	fn2({})

	//联合类型
	function myToString (param:number|string):string{
		return param.toString()
	}
	//console.log(myToString('123'))

	function getLength(param:number|string):number{
		if((<string>param).length){
			return (param as string).length
		}else{
			return param.toString().length
		}
	}
	//console.log(getLength('1'))

	//类型推断
	let demo1:any[]
	demo1 = []

})()
