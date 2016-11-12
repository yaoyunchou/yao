/**
 * Created by yao on 2016/11/7.
 */
var prefix = 'https://api.weixin.qq.com/cgi-bin/';
var api = {
    accessToken: prefix + 'token?grant_type=client_credential',
    material: {
        temporary:{
            upload: prefix + 'media/upload?',
        },
        permanent:{
            uploadNews:prefix+'material/add_news?',
            uploadImage:prefix+'media/uploadimg?',
            upload:prefix+'material/add_material?'
        },
        list:prefix+'material/batchget_material?',
        count:prefix+'material/get_materialcount?'
       // count:prefix+'material/get_materialcount?'
    }

};
module.exports = api;