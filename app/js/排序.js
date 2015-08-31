/**
 * Created by Administrator on 2015/8/28.
 * 这里只是个小代码过程
 * 有px(arr,boolern)    第一个参数是arr*   第二个是布尔值   默认为false  选填
 * 随便放入10--100的六个整数并对其排序;
 */
var arr=[];
console.log(arr.length);
while(arr.length<6){

    var random = Math.random();
    console.log(random);
    if(0.1<=random){
        arr.push(parseInt(random*100));

    }

}
console.log(arr);
px(arr);
px(arr,true);
/*排序方法*/
function px(arr,boolern){
    var bool=boolern?boolern:false;
    if(bool){
        /*由小到大排序*/
        for(var i=0; i<arr.length; i++){
            for(var j=arr.length-1; j>=i;j--){
                if(arr[j]<arr[j-1]){
                    swape(arr,j,j-1);
                }
            }
        }
    }else{
        for(var i=0; i<arr.length; i++){
            for(var j=arr.length-1; j>i;j--){
                if(arr[j]>arr[j-1]){
                    swape(arr,j-1,j);
                }
            }
        }

    }
    console.log(arr);
}

/*交换函数*/
function swape(arr,a,b){
    var tem=arr[b];
    arr[b]=arr[a];
    arr[a]=tem;
}


//js 扫雷
person= new Object();
person.name="yaoyunchou";
person.age="25";
person.gender="男";
console.log("姓名:"+person.name+"年龄:"+person.age+"性别:"+person.gender);


yao={
    name:"姚运筹",
    age:"25",
    speak:function(){
        console.log("我喜欢黄程!!!");
    },
    run:function(){
        console.log("我能走多远呢?")
    }

};

yao.run();
console.log(yao.age);


var arr2 =new Array();

for(var i=1; i<=10;i++){
    arr2[i]=new Array();
    for(var j=1;j<=10;j++){
        arr2[i][j]="*";
        console.log("*");
    }
}