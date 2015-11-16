/**
 * Created by yao on 2015/8/31.
 */
var a=[-1,-1,1,-3,-3,2,2,-2,-2,3,-1,-1];
function f(s,e){
    var ret=[];
    for(var i in s){
        ret.push(e(s[i]));
    }
    return ret;
}
var b =f(a, function(n){return n>0?n:0} );
console.log(b);

  javascript:  R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.images; DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style;     DIS.position='absolute';     DIS.left=Math.cos(R*x1+i*x2+x3)*x4+x5+"px";DIS.top=Math.sin(R*y1+i*y2+y3)*y4+y5+"px"; }R++ } setInterval(A,5); void(0);

