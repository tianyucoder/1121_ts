
class Person {
	//声明属性
	name:string
	age:number

	//构造方法
	constructor(name,age){
		this.name = name 
		this.age = age 
	}
	//一般方法
	speak(){
		console.log(`我的名字是${this.name},我的年龄是${this.age}`);
	}
}

const p1 = new Person('tom',19)
p1.speak()
