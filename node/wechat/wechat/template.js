/**
 * Created by yao on 2016/11/2.
 */
/*global require*/
"use strict";
var ejs = require('ejs');
var heredoc = require('heredoc');

var template = heredoc(function () {/*
 <xml>
 <ToUserName><![CDATA[<%= toUserName %>]]></ToUserName>
 <FromUserName><![CDATA[<%= formUserName %>]]></FromUserName>
 <CreateTime><%= createTime %></CreateTime>
 <MsgType><![CDATA[<%= msgType %>]]></MsgType>
 <Content><![CDATA[ <%= content %>]]></Content>
 </xml>
 */
});

var compiled = ejs.compile(template);
exports.template = module.exports = {
	compiled: compiled
};