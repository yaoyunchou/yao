"use strict";
var name = 'yao';

function speak(){
	console.log(this.name);
}

var Person = function Person(){
	var name = 'zhangsan';
	speak.apply(this);
};
speak();

var person = new Person();
