(()=>{

	/* 
		访问修饰符: 用来描述类内部的属性/方法的可访问性
			public: 默认值, 公开的外部也可以访问
			protected: 类内部、子类可以访问
			private: 只有类内部可以访问
	*/
	class Person {
		//声明属性
	  public readonly name:string //name属性没有写修饰符，默认就是public：类内部、类外部均可访问
		private age:number
	
		//构造方法
		constructor(name,age){
			this.name = name 
			this.age = age 
		}
		//一般方法
		protected speak(){ //
			console.log(`我的名字是${this.name},我的年龄是${this.age}`);
		}
	}

	class Student extends Person{
		//声明属性
		//private readonly sex:string
		//构造器
		constructor(name,age,readonly sex:string){
			super(name,age)
			this.sex = sex
		}
		//自己的方法
		public study(){
			super.speak() //调用从父类继承过来的方法
			console.log('我努力的学习中')
		}
	}

	const p1 = new Person('tom',19)
	//p1.name = 'jack'
	console.log(p1.name) 
  //console.log(p1.age) 
  // p1.speak()
	
	const s1 = new Student('tom',19,'女')
  // console.log(s1.name) 
  // s1.study() 
  // s1.speak() 
  // console.log(s1.age) 
  // console.log(s1.sex)


})()