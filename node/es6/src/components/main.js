//let a = 1;
function f() { console.log('I am outside!'); }
(function () {
	"use strict";
	if (false) {
		// 重复声明一次函数f
		function f() { console.log('I am inside!'); }
		
	}
	f();
}());