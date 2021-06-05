// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "talkMapping" : {
      "乒乓球" : "talkPingpang",
      "羽毛球" : "talkBadminton",
      "剧本杀" : "talkJubensha"
    },
    "talkPingpang" : {
      "detail" : "乒乓球是一种由两名或四名运动员用小球拍（即乒乓球拍）在桌子上来回击打一个轻便的球，或是用乒乓球拍拍打乒乓球的球类运动，在世界上许多地方流行。\n",
      "date" : "2021/7/20",
      "address" : "校内体育馆",
      "price" : 60,
      "limit" : "无限制",
      "count" : "2/4"
    },
    "talkBadminton": {
      "detail" : "羽毛球是一项隔着球网，使用长柄网状球拍击打用羽毛和软木制作而成的一种小型球类的室内运动项目。羽毛球比赛在长方形的场地上进行，场地中间有网相隔，双方运用各种发球、击球和移动等技战术，将球在网上往返对击，以不使球落在本方有效区域内，或使对方击球失误为胜。",
      "date" : "2021/7/2",
      "address" : "学校体院馆一楼",
      "price" : 60,
      "limit" : "无限制",
      "count" : "2/4"
    },
    "talkJubensha" : {
      "detail" : "剧本杀多是以封闭和半封闭半开放的剧本为主。封闭的剧本好比爬楼梯，一步步的探索最终获得事件的真相；开放的剧本就好比寻宝，一丝丝的痕迹与线索拼凑在一起得知最后的事实。",
      "date" : "2021/7/6",
      "address" : "学校附近",
      "price" : 100,
      "limit" : "3:3",
      "count" : "3/6"
    },
    "commentList" :[{
      "id": 0,
      "sex": 0,
      "username": "Kevin",
      "time": 1,
      "detail": "消圆常活口价头查更江习是小民名深。"
    },
    {
      "id": 1,
      "sex": 0,
      "username": "Barbara",
      "time": 2,
      "detail": "史保下时高打来次思电制组较往门铁。"
    },
    {
      "id": 2,
      "sex": 0,
      "username": "Sarah",
      "time": 3,
      "detail": "些作美点门美此问极集类你量再结。"
    },
    {
      "id": 3,
      "sex": 0,
      "username": "Deborah",
      "time": 4,
      "detail": "证合起月关连导想器共处群造。"
    },
    {
      "id": 4,
      "sex": 1,
      "username": "Angela",
      "time": 5,
      "detail": "存更说各象光米还半必相新什道。"
    },
    {
      "id": 5,
      "sex": 0,
      "username": "Jennifer",
      "time": 6,
      "detail": "论成在规等史即图支用义后或采科。"
    },
    {
      "id": 6,
      "sex": 0,
      "username": "Larry",
      "time": 7,
      "detail": "天系人因会先细克认花名发三己不。"
    },
    {
      "id": 7,
      "sex": 1,
      "username": "Dorothy",
      "time": 8,
      "detail": "志料张装层内样造特得只因四关。"
    },
    {
      "id": 8,
      "sex": 0,
      "username": "Matthew",
      "time": 9,
      "detail": "身联于几县被此影风我为济间矿地结标。"
    },
    {
      "id": 9,
      "sex": 1,
      "username": "Deborah",
      "time": 10,
      "detail": "始老活位和再低国直总风候被些管。"
    }],
    "currTalk" : "",
    "talkList": {},
    "talkLoading": true,
    "joinPopup": false,
    "content": "",
    "show": false,
    "joinBtnDisabled" : false,
    "joinBtnText" : "立即参加",
    "showType" : "success"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = this.data.talkMapping[options.name]
    this.setData({
      currTalk: list,
      talkList: this.data[list]
    })
    /*
    var that = this
    wx.request({
      url: 'https://coucou.com/rooms?data=testTalk',
      dataType: 'json',
      success(res) {
        that.setData({
          commentList: res.data.list,
          talkLoading: false
        })
      }
    })
    */
  },


  joinBtnTap() {
    this.setData({
      joinPopup: true
    })
  },

  showMessage() {
    console.log(this.data.currTalk)
    if (this.data.currTalk === "talkJubensha") {
      this.setData({
        showType : "error",
        show: true,
        content: "提交失败，人数已达限制！",
        joinPopup: false,
        joinBtnDisabled: true,
        joinBtnText: "人数已满"
      })
      return
    }
    this.setData({
      showType : "success",
      show: true,
      content: "提交成功！",
      joinPopup: false,
      joinBtnDisabled: true,
      joinBtnText: "已参加"
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