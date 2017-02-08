/**
 * Created by yaoyc on 2017/2/6.
 */
var fs = require("fs") ;
var data = require('../nz/pageInfos');
data.forEach(function(val,key){
	//console.info(key,val);
	val = 'module.exports = '+JSON.stringify(val)+';';
	console.log(val);
	toWriteFile(key+1,val);
});
//写入文件
function toWriteFile(index,doc){
	fs.writeFile("day"+index+".js",doc,function (err) {
		if (err) throw err ;
		console.log("File Saved !"); //文件被保存
	}) ;
	
}
