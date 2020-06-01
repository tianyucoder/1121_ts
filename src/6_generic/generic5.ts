(()=>{

	interface lengthWise{
		length:number
	}

	function fn<T extends lengthWise>(x:T) {
		console.log(x.length)
	}
	fn('123')

})()