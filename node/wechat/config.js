/**
 * Created by yao on 2016/11/3.
 */
"use strict";
var path = require('path');
var wechat_file = path.join(__dirname,'./config/wechat.txt');

var util = require('./libs/util');
var config = {
	wechat: {
		appID: 'wxaa1d387056944865',
		appSecret: '5107ab8612431421a7fced36828c8c9f',
		token: 'yaoyunchou',
		EncodingAESKey:'GVZX1z1URnCfbKI09pbglIvzTaBZp0y9ymbDJhncrn9',
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