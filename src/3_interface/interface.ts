/* 
	id是number类型, 必须有, 只读的
	name是string类型, 必须有
	age是number类型, 必须有
	sex是string类型, 可以没有
*/

//定义一个限制人员信息的接口
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
console.log(person)