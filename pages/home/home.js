// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "navList": [{
      "id": 0,
      "name": "推荐",
      "dataList" : "recommedList"
    }, {
      "id": 1,
      "name": "关注",
      "dataList" : "followList"
    }, {
      "id": 2,
      "name": "学习",
      "dataList" : "learnList"
    }, {
      "id": 3,
      "name": "运动",
      "dataList": "sportsList"
    }, {
      "id": 4,
      "name": "考研",
      "dataList": "graduateList"
    }, {
      "id": 5,
      "name": "读书",
      "dataList" : "bookList"
    }, {
      "id": 6,
      "name": "电影",
      "dataList" : "movieList"
    }, {
      "id": 7,
      "name": "TEST",
      "dataList": "testList"
    }, {
      "id": 8,
      "name": "TEST",
      "dataList": "testList"
    }, {
      "id": 9,
      "name": "TEST",
      "dataList": "testList"
    }],
    "recommedList" : [{
      "id" : 0,
      "name" : "科幻"
    },{
      "id" : 1,
      "name" : "奇幻"
    },{
      "id" : 2,
      "name" : "爱情"
    },{
      "id" : 3,
      "name" : "动作"
    },{
      "id" : 4,
      "name" : "悬疑"
    },{
      "id" : 5,
      "name" : "战争"
    },{
      "id" : 6,
      "name" : "喜剧"
    }],
    "followList" : [{
      "id" : 0,
      "name" : "Hello"
    }
    ],
    "learnList" : [{
      "id" : 0,
      "name" : "Learn"
    }],
    "sportsList": [{
      "id" : 1,
      "name" : "乒乓球"
    },{
      "id" : 2,
      "name" : "羽毛球"
    },{
      "id" : 3,
      "name" : "网球"
    },{
      "id" : 4,
      "name" : "篮球"
    },{
      "id" : 5,
      "name" : "足球"
    },{
      "id" : 6,
      "name" : "排球"
    },{
      "id" : 7,
      "name" : "跑步"
    }],
    "graduateList" : [],
    "bookList" :[],
    "movieList" : [],
    "testList" : [],
    "currList" : [],
    "scrollLeft": 0
  },

  /**
   * 导航栏tab点击事件，切换当前数据
   * @param {Object} key - 导航栏当前标签对象
   */
  changeTabs(key) {
    // console.log(key)
    let currId = key.detail.activeKey
    let dataMap = this.data.navList[currId].dataList

    // console.log(currId)
    // console.log(dataMap)

    let temp = this.data[dataMap]
    this.setData({
      currList: temp
    })
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
    let rec = this.data.recommedList
    this.setData({
      currList: rec
    })
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