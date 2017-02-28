import {readdir, readFile} from 'fs';
import {fileConfig} from '../config';
import jsdom from 'jsdom';
import  {insertDocuments, findDocuments, updateDocument} from '../mongoDB/testMongoDB';


/*function EditerTpl({imgLg,htmlContent, imgSm, ctgId, projType, title, name, isDeleted, desc, lastUpdTime, createdTime, owner, site}) {
	this.imgLg = imgLg || '';
	this.htmlContent = htmlContent || '';
	this.imgSm = imgSm || '';
	this.ctgId = ctgId || '';
	this.projType = projType || '';
	this.title = title || '';
	this.name = name || '';
	this.isDeleted = isDeleted || '';
	this.desc = desc || '';
	this.lastUpdTime = lastUpdTime || '';
	this.createdTime = createdTime || '';
	this.owner = owner || '';
	this.site = site || '';
}*/

class EditorTpl{
	constructor({imgLg,htmlContent, imgSm, ctgId, projType, title, name, isDeleted, desc, lastUpdTime, createdTime, owner, site}){
		this.imgLg = imgLg || '';
		this.htmlContent = htmlContent || '';
		this.imgSm = imgSm || '';
		this.ctgId = ctgId || '';
		this.projType = projType || '';
		this.title = title || '';
		this.name = name || '';
		this.isDeleted = isDeleted || '';
		this.desc = desc || '';
		this.lastUpdTime = lastUpdTime || '';
		this.createdTime = createdTime || '';
		this.owner = owner || '';
		this.site = site || '';
	}
}


var getHtmlFiles = function getHtmlFiles(filePath) {
	var htmlFilesPath = [];
	return new Promise(function (resolve, reject) {
		readdir(filePath, function (err, files) {
			if (err) {
				console.log('read dir fail');
				reject('read dir fail');
			} else {
				files.forEach(function (val) {
					
					if (val.search(/.html/ig) > 0) {
						//console.log(val);
						htmlFilesPath.push(filePath + '\\' + val);
						///console.log(htmlFilesPath);
					}
				});
				resolve(htmlFilesPath);
			}
		});
	});
};
var getHtmlDocument = function getHtmlDocument() {
	var htmlDocs = [];
	return new Promise(function (resolve, reject) {
		getHtmlFiles(fileConfig.path).then((htmlFiles)=> {
			htmlFiles.forEach(function (val, key) {
				jsdom.env(val,
					function (err, window) {
						if (err) {
							reject("fail");
						} else {
							var templat = new EditorTpl({ htmlContent:'<div class="response-blk">' + window.document.body.innerHTML + '</div>' });
							//console.log(templat)
							htmlDocs.push(templat);
							resolve(htmlDocs);
						}
						
					}
				);
			});
		});
	});
	
};


getHtmlDocument().then(function (htmlDocs) {
	insertDocuments(htmlDocs, 'yao');
});
	
