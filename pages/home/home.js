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
      "name" : "乒乓球",
      "src" : "/resources/navicon/乒乓球.png"
    }, {
      "id" : 1,
      "name" : "羽毛球",
      "src" : "/resources/navicon/羽毛球.png"
    }, {
      "id" : 2,
      "name" : "剧本杀",
      "src" : "/resources/navicon/剧本杀.png"
    }],
    "followList" : [{
      "id": 0,
      "name" : "网球",
      "src" : "/resources/navicon/网球.png"
    }],
    "learnList" : [{
      "id" : 0,
      "name" : "数学",
      "src" : "/resources/navicon/数学.png"
    },{
      "id" : 1,
      "name": "物理",
      "src" : "/resources/navicon/物理.png"
    },{
      "id" : 2,
      "name": "化学",
      "src" : "/resources/navicon/化学.png"
    }],
    "sportsList": [{
      "id" : 1,
      "name" : "乒乓球",
      "src" : "/resources/navicon/乒乓球.png"
    },{
      "id" : 2,
      "name" : "羽毛球",
      "src" : "/resources/navicon/羽毛球.png"
    },{
      "id" : 3,
      "name" : "网球",
      "src" : "/resources/navicon/网球.png"
    },{
      "id" : 4,
      "name" : "篮球",
      "src" : "/resources/navicon/篮球.png"
    },{
      "id" : 5,
      "name" : "足球",
      "src" : "/resources/navicon/足球.png"
    },{
      "id" : 6,
      "name" : "排球",
      "src" : "/resources/navicon/排球.png"
    }],
    "graduateList" : [],
    "bookList" :[],
    "movieList" : [{
      "id" : 0,
      "name" : "科幻",
      "src" : ""
    },{
      "id" : 1,
      "name" : "奇幻",
      "src" : ""
    },{
      "id" : 2,
      "name" : "爱情",
      "src" : ""
    },{
      "id" : 3,
      "name" : "动作",
      "src" : ""
    },{
      "id" : 4,
      "name" : "悬疑",
      "src" : ""
    },{
      "id" : 5,
      "name" : "战争",
      "src" : ""
    },{
      "id" : 6,
      "name" : "喜剧",
      "src" : ""
    }],
    "testList" : [],
    "currList" : [],
    "scrollLeft": 0
  },

  /**
   * 导航栏tab点击事件，切换当前数据
   * @param {Object} key - 导航栏当前标签对象
   */
  changeTabs(key) {
    // 当前激活的Tab
    let currId = key.detail.activeKey
    // 获取Tab映射到的数据List的Key
    let dataMap = this.data.navList[currId].dataList

    // 获取Key对应的数据Value
    let temp = this.data[dataMap]
    this.setData({
      currList: temp
    })
  },
  /**
   * 跳转到Room页面
   * 向Room页面传送数据
   * 官方文档 link：https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
   */
  navigateToRoom(event) {
    // 点击的卡片的名称
    let cardName = event.currentTarget.dataset.name
    // 跳转的页面加名称作为参数
    let naviUrl = '/pages/rooms/rooms?name=' + cardName
    wx.navigateTo({
      url: naviUrl
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