// index.js
// 获取应用实例

const chooseLocation = requirePlugin('chooseLocation')

Page({
  data: {
    "time" : "请选择时间",
    "date" : "请选择日期",
    "address" : "请选择位置",
    "bodyShow" : false,
    "buttonShow" : false
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

  showButton() {
    console.log("HHHHH")
    this.setData({
      buttonShow: true
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    location = chooseLocation.getLocation()
    this.setData({
      bodyShow: true
    })
    if (location != null) {
      this.setData({
        address: location.address
      })
      console.log(location.address)
    }
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    chooseLocation.setLocation(null)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 初始化当前列表为推荐列表
   */
  onReady: function () {
    this.setData({
      bodyShow: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      bodyShow: false,
      buttonShow: false
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})