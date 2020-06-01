(()=>{

	class Person {
		firstName:string = 'zhang'
		lastName:string = 'san'
		
		get fullName(){
			return this.firstName + '-' + this.lastName
		}

		set fullName(value){
			const nameArr = value.split('-')
			this.firstName = nameArr[0]
			this.lastName = nameArr[1]
		}
	}

	const p1 = new Person()
	console.log(p1.fullName)
	p1.fullName = 'li-si'
	console.log(p1.firstName)
	console.log(p1.lastName)

})()