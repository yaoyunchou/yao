/**
 * Created by yaoyc on 2017/3/2.
 */
var fs = require('fs');
function* dataConsumer() {
	console.log('Started');
	console.log(`1. ${yield}`);
	console.log(`2. ${yield}`);
	return 'result';
}

let genObj = dataConsumer();
console.log(genObj.next());

// Started
console.log(genObj.next('a'));

// 1. a
console.log(genObj.next('b'));

// 2. b
{
	/**
	 * 对象jane原生不具备Iterator接口，无法用for...of遍历。这时，我们通过Generator函数objectEntries为它加上遍历器接口，
	 * 就可以用for...of遍历了。加上遍历器接口的另一种写法是，将Generator函数加到对象的Symbol.iterator属性上面。
	 * @param obj
	 */
	function* objectEntries(obj) {
		let propKeys = Reflect.ownKeys(obj);
		
		for (let propKey of propKeys) {
			yield [propKey, obj[propKey]];
		}
	}
	
	let jane = { first: 'Jane', last: 'Doe' };
	
	for (let [key, value] of objectEntries(jane)) {
		console.log(`${key}: ${value}`);
	}
}
{
	/**
	 * 嵌套使用的原理
	 * yield*后面的Generator函数（没有return语句时），等同于在Generator函数内部，部署一个for...of循环。
	 */
	function* inner() {
		yield 'hello!';
	}
	
	function* outer1() {
		yield 'open';
		yield inner();
		yield 'close';
	}
	
	var gen = outer1()
	gen.next().value // "open"
	gen.next().value // 返回一个遍历器对象
	gen.next().value // "close"
	
	function* outer2() {
		yield 'open'
		yield* inner()
		yield 'close'
	}
	
	var gen = outer2()
	gen.next().value // "open"
	gen.next().value // "hello!"
	gen.next().value // "close"
}

// {
// 	let jobs = [job1, job2, job3];
//
// 	function *iterateJobs(jobs){
// 		for (var i=0; i< jobs.length; i++){
// 			var job = jobs[i];
// 			yield *iterateSteps(job.steps);
// 		}
// 	}
// }

{
	/**
	 * 利用Generator函数，可以在任意对象上部署Iterator接口。
	 * @param obj
	 */
	function* iterEntries(obj) {
		let keys = Object.keys(obj);
		for (let i=0; i < keys.length; i++) {
			let key = keys[i];
			yield [key, obj[key]];
		}
	}
	
	let myObj = { foo: 3, bar: 7 };
	
	for (let [key, value] of iterEntries(myObj)) {
		console.log(key, value);
	}
	
}
{
	function *doStuff() {
		yield fs.readFile.bind(null, 'hello.txt');
		yield fs.readFile.bind(null, 'world.txt');
		yield fs.readFile.bind(null, 'and-such.txt');
	}
	for (let task of doStuff()) {
		// task是一个函数，可以像回调函数那样使用它
		console.log(task());
	}
}