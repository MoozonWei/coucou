// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "talkList" : [],
    "talkLoading" : true,
    "hh" : "asdfsdf"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取mock模拟数据
    wx.request({
      url: 'https://coucou.com/rooms?data=testTalk',
      dataType: 'json',
      success(res) {
        that.setData({
          talkList: res.data.list,
          talkLoading: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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