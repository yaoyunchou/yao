/**
 * Created by Administrator on 2015/8/28.
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
