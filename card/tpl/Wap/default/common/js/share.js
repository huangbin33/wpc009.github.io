
 var shareData = {};
function unixtime(){
    var dt = new Date();
    var ux = Date.UTC(dt.getFullYear(),dt.getMonth(),dt.getDay(),dt.getHours(),dt.getMinutes(),dt.getSeconds())/1000;
    return ux;
}
function _WXShare(imgUrl,w,h,title,desc,tmp){
    shareData.imgUrl = imgUrl;
    shareData.desc =  desc;
    shareData.link =  window.location.href;
    shareData.title = title;
}
window.onload= function(){
    wx.config({
    appId: $('[name="appId"]').val(),
    timestamp: $('[name="timestamp"]').val(),
    nonceStr: $('[name="nonceStr"]').val(),
    signature: $('[name="signature"]').val(),
    jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'

    ]
}); 
wx.ready(function() {
    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
    wx.onMenuShareQQ(shareData);
    wx.onMenuShareWeibo(shareData);
});

wx.error(function(res) {
   console.log(res.errMsg);
});
}