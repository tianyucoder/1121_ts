class Animal {
	//声明属性
	name:string

	//构造方法
	constructor(name){
		this.name = name
	}

	//一般方法
	run(distance:number){
		console.log(`动物前进了${distance}米`)
	}
}

class Snake extends Animal{
	//构造器
	constructor(name){
		super(name)
	}
	//重写从父类继承过来的方法
	run(distance:number){
		console.log(`蛇滑行了${distance}米`)
	}
}

class Horse extends Animal{
	//构造器
	constructor(name){
		super(name)
	}
	//重写从父类继承过来的方法
	run(distance:number){
		console.log(`马奔跑了${distance}米`)
	}
	//自己的一般方法
	cry(){
		console.log(`hou~hou~`)
	}
}

//父类引用指向子类的实例===>多态
let x:Animal
x = new Horse('小红')
x.run(100)
//x.cry()

/* 
    思考：能不能让子类型的引用指向父类型的实例呢？
    答案：Snake可以，Horse不可以
      1.如果子类型扩展了新的方法，不可以(Horse)
      2.如果子类型未扩展新的方法，可以(Snake)
  */
 /* let y:Horse
 y = new Animal('小兰')
 y.run(100) */


