/**
 * Created by yao on 2015/9/4.
 */
function AClass()
{
    this.Property = 1;
    this.Method = function()
    {
        console.log(1);
    }
}

function AClass2()
{
    this.Property2 = 2;
    this.Method2 = function()
    {
        console.log(2);
    }
}
AClass2.prototype = new AClass();

var obj = new AClass2();
console.log(obj.Property);
obj.Method();
console.log(obj.Property2);
obj.Method2();