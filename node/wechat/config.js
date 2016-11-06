/**
 * Created by yao on 2016/11/3.
 */
"use strict";
var path = require('path');
var wechat_file = path.join(__dirname,'./config/wechat.txt');
var util = require('./libs/util');
var config = {
	wechat: {
		appID: 'wx70ae2cf92f03f04a',
		appSecret: '11c20988538deadbc2df9ce8a0834140',
		token: 'yaoyunchou',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			data = JSON.stringify(data);
			return util.writeFileAsync(wechat_file,data);
		}
	}
};

module.exports = config;