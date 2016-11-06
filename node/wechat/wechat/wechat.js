/**
 * Created by yao on 2016/11/2.
 */
"use strict";
var Promise = require('bluebird');
var util = require('./util');
var request = Promise.promisify(require('request'));
var prefix = 'https://api.weixin.qq.com/cgi-bin/';
var fs = require('fs');
var api = {
    accessToken: prefix + 'token?grant_type=client_credential',
    material: {
        create: prefix + 'media/upload?',
        list: prefix + 'material/add_news9'
    }
};

function Wechat(opts) {
    var that = this;
    this.appID = opts.appID;
    this.appSecret = opts.appSecret;
    this.getAccessToken = opts.getAccessToken;
    this.saveAccessToken = opts.saveAccessToken;

    this.fetchAccessToken();
}
Wechat.prototype.fetchAccessToken = function () {
    var that = this;
    if (this.access_token && this.expires_in) {
        if (this.isValidAccessToken(this)) {
            return Promise.resolve(this);
        }
    }
    this.getAccessToken().then(function (data) {
        try {
            data.JSON.parse(data);
        }
        catch (e) {
            return that.updateAccessToken();
        }
        if (this.isValidAccessToken(data)) {
            return Promise.resolve(data);
        } else {
            return that.updateAccessToken();
        }
    }).then(function (data) {
        that.access_token = data.access_token;
        that.expires_in = data.expires_in;
        that.saveAccessToken(data);
        return  Promise.resolve(data);
    });
};
Wechat.prototype.isValidAccessToken = function (data) {
    if (!data || !data.access_token || !data.expires_in) {
        return false;
    }
    //var access_token = data.access_token;
    var expires_in = data.expires_in;
    var now = new Date().getTime();
    if (now < expires_in) {
        return true;
    } else {
        return false;
    }
};
Wechat.prototype.updateAccessToken = function () {
    var appID = this.appID;
    var appSecret = this.appSecret;
    var url = api.accessToken + '&appid=' + appID + '&secret=' + appSecret;

    return new Promise(function (resolve, reject) {
        request({url: url, json: true}).then(function (response) {
            var data = response[1];
            var now = new Date().getTime();
            var expires_in = now + (data.expires_in - 20) * 1000;

            data.expires_in = expires_in;
            resolve(data);
        });
    });

};
Wechat.prototype.uploadMaterial = function (type, filePath) {
    var that = this;
    var form = {
        media: fs.createReadStream(filePath)
    };
    return new Promise(function (resolve) {
        that.fetchAccessToken().then(function (data) {
            var url = api.material.create + 'access_token=' + data.access_token + '&type=' + type;
            var options = {
                method: 'POST',
                url: url,
                formData: form,
                json: true
            }
            request(options).then(function (res) {
                var _data = res[1]
                if (_data) {
                    resolve(_data);
                } else {
                    throw new Error('Upload material fails');
                }
            }).catch(function (err) {
               reject(err);
            });
        });
    });
};

Wechat.prototype.reply = function () {
    var content = this.body;
    var message = this.weixin;
    var xml = util.tpl(content, message);
    this.status = 200;
    this.type = 'application/xml';
    this.body = xml;
};


module.exports = Wechat;