// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "navList": [{
      "id" : 0,
      "name" : "推荐"
    },{
      "id" : 1,
      "name" : "关注"
    },{
      "id" : 2,
      "name" : "学习"
    },{
      "id" : 3,
      "name" : "运动"
    },{
      "id" : 4,
      "name" : "考研"
    },{
      "id" : 5,
      "name" : "读书"
    },{
      "id" : 6,
      "name" : "电影"
    },{
      "id" : 7,
      "name" : "TEST"
    },{
      "id" : 8,
      "name" : "TEST"
    },{
      "id" : 9,
      "name" : "TEST"
    }],
    "itemId" : 0,
    "moveParams": {
      "scrollLeft": 0
    }
  },


  ItemSelected(event) {
    this.setData ({
      itemId : parseInt(event.currentTarget.id)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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