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

        },fun.prototype.run=function(){
              if(!this.config.run){
                  console.log("I can fly!");
              }

         },fun.prototype.rt=function(){
             var c = this.config;
             console.log(c.page);
         },fun.prototype.render=function(a){
              this.config.run();
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

yao({"page":100,
     run:function(){
         console.log("okok");
     }
})


