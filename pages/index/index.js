// index.js
// 获取应用实例

const chooseLocation = requirePlugin('chooseLocation')

Page({
  data: {
    "time" : "请选择时间",
    "date" : "请选择日期",
    "address" : "请选择位置"
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
  },


  bindTimeChange(e) {
    console.log("时间已选择")
    this.setData({
      time : e.detail.value
    })
  },


  bindDateChange(e) {
    console.log("日期已选择")
    this.setData({
      date : e.detail.value
    })
  },


  onShow () {
    location = chooseLocation.getLocation()
    if (location != null) {
      this.setData({
        address: location.address
      })
      console.log(location.address)
    }
  },

  onUnload() {
    console.log("set null")
    chooseLocation.setLocation(null)
  }
})