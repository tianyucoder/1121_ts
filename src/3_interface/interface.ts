/* 
	id是number类型, 必须有, 只读的
	name是string类型, 必须有
	age是number类型, 必须有
	sex是string类型, 可以没有
*/

//定义一个限制人员信息的接口----限制对象
interface Iperson {
	readonly id:number,
	name:string,
	age:number,
	sex?:string //可选属性
}
const person:Iperson = {
	id:0,
	name:'tom',
	age:19,
	sex:'女'
}
//person.id = 1
//console.log(person)

//接口限制函数
interface IfindkeyWord {
	(source:string,current:string):boolean
}
const findkeyWord:IfindkeyWord = function (source,current){
	return source.search(current) > -1
}
//console.log(findkeyWord('hello,atguigu','a'))

//接口限制类
//车轮接口
interface IWhell {
	wType:string
	roll():any
}

//灯光接口
interface ILight{
	lightOn():void
	lightOff():void
}

interface CarOption extends IWhell,ILight {

}

class Car implements CarOption{
	wType='防滑轮胎'
	roll(){
		console.log('车轮正在飞速的滚动')
	}
	lightOn(){
		console.log('灯开了')
	}
	lightOff(){
		console.log('灯关了')
	}
}