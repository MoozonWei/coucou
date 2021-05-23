// pages/rooms/rooms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "cardNameMap" : {
      "乒乓球" : "sportPingPang",
      "羽毛球" : "sportBadminton",
      "网球" : "sportTennis"
    },
    "sportPingPang" : [{
      "id" : 0,
      "sex" : 0,
      "username" : "kksy",
      "time" : "10小时前",
      "date" : "2021/6/1",
      "title" : "体育管乒乓球",
      "description": "菜鸟一枚，有人吗，费用平分",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 2
    },{
      "id" : 1,
      "sex" : 1,
      "username" : "silvengs",
      "time" : "8小时前",
      "date" : "2021/6/1",
      "title" : "体育馆二楼乒乓球，下午有时间",
      "description": "技术还可以，高手来，训练为目的",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 3
    }],
    "sportBadminton" : [{
      "id" : 0,
      "sex" : 0,
      "username" : "kksy",
      "time" : "10小时前",
      "date" : "2021/6/1",
      "title" : "校内体院馆羽毛球",
      "description": "菜鸟一枚，有人吗",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 2
    },{
      "id" : 1,
      "sex" : 1,
      "username" : "silvengs",
      "time" : "8小时前",
      "date" : "2021/6/1",
      "title" : "校外下午",
      "description": "技术还可以，有人一起吗，费用平分",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 3
    },{
      "id" : 2,
      "sex" : 1,
      "username" : "KK",
      "time" : "12小时前",
      "date" : "2021/6/1",
      "title" : "校外下午",
      "description": "双打，4缺2，萌新大佬都可以开，玩的开心最重要",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "2/4",
      "comment" : 6
    }],
    "sportTennis" : [{
      "id" : 0,
      "sex" : 0,
      "username" : "kksy",
      "time" : "10小时前",
      "date" : "2021/6/1",
      "title" : "校内网球",
      "description": "菜鸟一枚，有人吗",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 2
    },{
      "id" : 1,
      "sex" : 1,
      "username" : "silvengs",
      "time" : "8小时前",
      "date" : "2021/6/1",
      "title" : "校外网球",
      "description": "技术还可以，有人一起吗，费用平分",
      "detail" : "我是详情，啊啊啊啊啊",
      "count" : "1/4",
      "comment" : 3
    }],
    "testList" : [],
    // 当前房间数
    "currRoomCount" : 0,
    // 当前卡片，例如：乒乓球
    "currCard" : "",
    // 卡片房间内容，例如：sportTennis
    "currCardContext" : []
  },

  /**
   * 跳转至讨论界面
   */
  navigateToTalk() {
    // wx.request({
    //   url: 'https://coucou.com/rooms?data=testData',
    //   dataType: 'json',
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    let naviUrl = '/pages/talk/talk'
    wx.navigateTo({
      url: naviUrl
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据传递过来的卡片名称设置当前卡片
    this.setData({
      currCard: options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 根据当前卡片的名称映射到相应的房间列表数据，需要在data中提前定义
    let cardMapName = this.data.cardNameMap[this.data.currCard]

    // 如果该数据列表未定义，则返回空
    if (cardMapName === undefined) {
      this.setData({
        currRoomCount: 0,
        currCardContext: []
      })
      return
    }

    // 更新房间数量，获取房间列表数据
    let len = this.data[cardMapName].length
    this.setData({
      currRoomCount: len,
      currCardContext: this.data[cardMapName]
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