//继承
(()=>{

	class Animal{
		run(distance:number){
			console.log(`动物奔跑了${distance}米`)
		}
	}

	class Dog extends Animal {
		cry(){
			console.log('汪汪汪')
		}
	}

	const d1 = new Dog()
	d1.cry()
	d1.run(100)

})()