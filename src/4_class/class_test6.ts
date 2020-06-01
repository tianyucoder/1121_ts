(()=>{

	//静态属性
	class Person{
		name:string = 'tom'
		static info:string = 'some info'
	}
	//console.log(Person.info)

	//抽象类（不是让你new调用的，让别的类去继承的）
	abstract class Animal {
		abstract cry():any
		abstract study():any
		run(){
			console.log('我正在奔跑')
		}
	}

	class Dog extends Animal{
		cry(){
			console.log('汪汪汪')
		}
		study(){
			console.log('study....')
		}
	}

	const d = new Dog()
	d.run()
	d.cry()

})()