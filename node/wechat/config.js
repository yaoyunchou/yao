/**
 * Created by yao on 2016/11/3.
 */
/*global __dirname,module*/
"use strict";
var path = require('path');
var wechat_file = path.join(__dirname,'./config/wechat.txt');

var util = require('./libs/util');
var config = {
	wechat: {
		appID: 'wx3c2d4a7d405538d7',
		appSecret: '27915801abb2b947fcf0b505d0bf425c',
		token: 'ozjXvB',
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