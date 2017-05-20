/**
 * Created by yaoyc on 2017/5/20.
 *
 * 引用类型的数据会变所以需要优化继承的方式
 *
 *
 *
 *
 *
 *
 */



(function(){
	"use strict";
	
	function Animal(name,food){
		this.name = name;
		this.food = food;
		this.color=['red','pink','blue'];
		this.pint = function(){
			console.log(this.name);
		};
	}
	Animal.prototype.eat = function(){
		console.log('eat'+this.food);
	};
	
	function Cat(name,food){
		this.name = name;
		if(food){
			this.food = food;
		}
		this.speak = function(){
			console.log('喵喵');
		};
	}
	Cat.prototype = new Animal('动物','食物');
	var cat1 = new Cat("花猫",'小鱼');
	var cat2 = new Cat("花猫",'中鱼');
	var cat3 = new Cat("花猫",'大鱼');
	cat3.color.push('green');
	console.info(cat1.color);
	cat2.pint = function(){
		console.log(this.food);
	};
	cat1.pint();
	console.log(cat1 instanceof Animal);
})();

