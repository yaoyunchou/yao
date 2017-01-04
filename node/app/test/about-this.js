/**
 * Created by yao on 2016/11/26.
 */
"use strict";
function Person(){
    this.name = 'yao';
    this.age =26;
}
Person.prototype.speak = function(){
    speak.apply(this);
    //console.log(this.name);
};

function speak (){
    console.log(this.name);
}

function test(name){
    var person =new Person();
    console.log(this);
    person.speak();
};

test("yaoyunchou");