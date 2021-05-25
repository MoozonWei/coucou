// index.js
// 获取应用实例

Page({
  data: {

  },

  chooseMap() {
    const key = 'QFSBZ-PWGKR-CL6WT-WA6GE-R2G27-PMF7K'; //使用在腾讯位置服务申请的key
    const referer = 'mapDemo'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
  }
})