/**
 * Created by yao on 2015/9/4.
 */
(function(window,underfind){
    function yao(a) {
        new fun(a);
    }
    var fun;
    yao.version = "1.0", yao.author = "yaoyunchou";
    fun=function (a){
        this.config=a||{};
        yao.version=this.config.version?this.config.version: yao.version;
        this.render();
    },fun.prototype.run=function(){
        //console.log(this.config.run());

        console.log("我是原版"+yao.version);


    },fun.prototype.rt=function(){
        var c = this.config;
        console.log(c.page);
    },fun.prototype.render=function(a){
        //this.config.run typeof function?;
        // typeof(this.config.run)== "function";
        typeof(this.config.run) === "function"?this.config.run():this.run();
    }


    "function" == typeof define ? define(function() {
        return yao;

    }) : "undefined" != typeof exports ? module.exps = yao : window.yao = yao;
    /*   var yao = window.yao={
     isCur:0,


     mov:function(){},

     doit:function(){
     console.log(this.isCur);

     }
     }
     */
})(window);



