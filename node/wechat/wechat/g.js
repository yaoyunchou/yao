/**
 * Created by yao on 2016/10/29.
 */
"use strict";
var sha1 = require('sha1');
var getRawBody = require('raw-body');
var util = require('./util');
var Wechat = require('./wechat');




module.exports = function (opts,handler) {
	var wechat = new Wechat(opts);
	return function *(next) {
		var that = this;
		console.log(this.query);
		var token = opts.token;
		var signature = this.query.signature;
		var timestamp = this.query.timestamp;
		var nonce = this.query.nonce;
		var echostr = this.query.echostr;
		var str = [token, timestamp, nonce].sort().join('');
		var sha = sha1(str);
		console.log('我是访问路径：'+this.path);
		if (this.method === 'GET') {
			if (sha === signature) {
				this.body = echostr + '';
			} else {
				this.body = 'wrong';
			}
		}
		else if (this.method === 'POST') {
			if (sha !== signature) {
				this.body = 'wrong';
				//this.body = echostr + '';
				return false;
			}
			//else {
			//	this.body = 'wrong';
			//}
			var data = yield getRawBody(this.req, {
				length: this.length,
				limit: 'lmb',
				encoding: this.charset
			});
			console.log('没有编译过的：');
			console.log(data);
			var content = yield util.parseXMLAsync(data);
			console.log("这个就不知道编译过没有");
			console.log(content);
			var message = util.formatMessage(content.xml);
			console.log("完成对象化的转换:");
			console.log(message);

			this.weixin = message;
			//把message拿到后就交给业务层;
			yield  handler.call(this,next);
			wechat.reply.call(this);
		}
	};
};
