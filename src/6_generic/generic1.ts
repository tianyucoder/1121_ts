(()=>{

	//泛型基本使用---函数泛型
	function createArray <T> (count:number,value:T):T[]{
		const arr:any[] = []
		for (let index = 0; index < count ; index++) {
			arr.push(value)
		}
		return arr
	}

	const result1 = createArray<string>(3,'hello')
	const result2 = createArray<number>(3,100)
	 console.log(result1[0].split('e')) //运行不报错，但是编码时无提示
	 console.log(result2[0].toString()) //运行不报错，但是编码时无提示
	 //console.log(result2[0].split('q')) //运行报错，但是编码时无提示


})()