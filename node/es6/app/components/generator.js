/**
 * Created by yaoyc on 2017/3/1.
 */
function *step1(next) {
	this.age = 8;
	let that = this;
	console.log(that.name);
	yield  next;
}

function* longRunningTask(next) {
	this.name = 'yaoyunchou';
	yield this.b = 2;
	yield this.phone = "123231312";
	yield step1.call(this,next).next();
	console.log(this.phone);
	// var value3 = yield step2(value2);
	// var value4 = yield step3(value3);
	// var value5 = yield step4(value4);
	// Do something with value4
}

for(let l of longRunningTask()){
	console.log(l);
}
