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
var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
var person = new Person();
