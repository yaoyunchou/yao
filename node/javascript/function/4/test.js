/**
 * Created by yaoyc on 2017/5/20.
 */
/*
* 不论是integer在前还是在后面都会被强转为string类型
*
* */

var i = '1'+6;
var b = 6+'1';
console.log(b);
console.log(i);


var bol1= new Boolean('false');
var bol2= new Boolean(false);
console.log(bol1);
console.log(bol2);