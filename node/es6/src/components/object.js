/**
 * Created by yaoyc on 2017/2/22.
 */
(function(){
	"use strict";
	{
		var f = function f(x, y) {
			return {x, y};
		};

// 等同于
		
		var f2 = function f2(x, y) {
			return {x: x, y: y};
		};
		
		//f2(1, 2) // Object {x: 1, y: 2}
		console.log(f(1,2));
		console.log(f2(1,2));
	}
	{
		var ms = {};
		
		let getItem = function getItem (key) {
			return key in ms ? ms[key] : null;
		};
		
		let setItem = function setItem (key, value) {
			ms[key] = value;
		};
		
		let clear = function clear () {
			ms = {};
		};
		
		module.exports = { getItem, setItem, clear };
// 等同于
		module.exports = {
			getItem: getItem,
			setItem: setItem,
			clear: clear
		};
		
		
		
		var obj = {
			class () {}
		};

// 等同于
		
		var obj2 = {
			'class': function() {}
		};
		
		var obj3 = {
			* m(){
				yield 'hello world';
				yield 'hello yaoyunchou';
			}
		};
		console.log(...obj3.m());
	}
})();