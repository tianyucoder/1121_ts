(()=>{

	//多个泛型参数的函数
	function createArray <T,P> (a:T,b:P):[T,P]{
		return [a,b]
	}
	const r1 = createArray<number,number>(1,2)
	const r2 = createArray<string,number>('abc',100)
	console.log(r1[0].toString())

})()