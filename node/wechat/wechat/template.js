/**
 * Created by yao on 2016/11/2.
 */
/*global require*/
"use strict";
var ejs = require('ejs');
var heredoc = require('heredoc');

var template = heredoc(function () {/*
 <xml>
 <ToUserName><![CDATA[<%= formUserName %>]]></ToUserName>
 <FromUserName><![CDATA[<%= toUserName %>]]></FromUserName>
 <CreateTime><%= createTime %></CreateTime>
 <MsgType><![CDATA[<%= msgType %>]]></MsgType>
 <%= if(msgType==='image'){ %>
 <MediaId><![CDATA[<%= media_id %>]]></MediaId>
 <% }else if(msgType==='text'){ %>
 <Content><![CDATA[ <%= content %>]]></Content>
 <% }else if(msgType==='voice'){ %>
 <MediaId><![CDATA[<%= media_id%>]]></MediaId>
 <Format><![CDATA[<%= Format%>]]></Format>
 <% }%>
 </xml>
 */
});

var compiled = ejs.compile(template);
exports.template = module.exports = {
	compiled: compiled
};