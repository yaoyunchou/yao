/**
 * Created by yaoyc on 2017/5/20.
 */

(function(){
	"use strict";
	function Animal(name,food){
		this.name = name;
		this.food = food;
		this.colors= ['red','pink'];
		this.speak = function(){
			console.log('my name is '+this.name);
		};
	}
	
	function Dog(){
		Animal.apply(this,arguments);
		this.do = function(){
			console.log('守家');
		};
	}
	
	var dog1 = new Dog('灰灰','骨头');
	dog1.speak();
	console.log(dog1 instanceof Animal);
})();