(()=>{

	//定义一个User类型
	class User{
		id?:number
		name:string
		age:number

		constructor(name,age){
			this.name = name
			this.age = age
		}
	}

	interface BaseCRUD<T>{
		data:T[]
		add:(userObj:T)=>number
		getById:(id:number) => T
	}

	class UserCRUD implements BaseCRUD<User> {
		//声明属性
		data:User[] = []

		//定义方法
		add(userObj:User):number{
			const id = Date.now()
			userObj.id = id
			this.data.push(userObj)
			return id
		}

		getById(id:number):User{
			return this.data.find(user => user.id === id)
		}

	}

	const a = new UserCRUD()
	console.log(a.add(new User('tom',12)))
	console.log(a.add(new User('jack',19)))
	console.log(a.data)

})()