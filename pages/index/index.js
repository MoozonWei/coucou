// index.js
// 获取应用实例
const app = getApp(); // 得到app.js里面的函数和数据

Page({
  data: {
    "placeholder": "搜一搜",
    "navList": [{
      "id": 0,
      "name": "推荐"
    }, {
      "id": 1,
      "name": "关注"
    }, {
      "id": 2,
      "name": "学习"
    }, {
      "id": 3,
      "name": "运动"
    }, {
      "id": 4,
      "name": "考研"
    }, {
      "id": 5,
      "name": "读书"
    }, {
      "id": 6,
      "name": "电影"
    }, {
      "id": 7,
      "name": "TEST"
    }, {
      "id": 8,
      "name": "TEST"
    }, {
      "id": 9,
      "name": "TEST"
    }],
    "itemId": 0,
    "scrollLeft": 0,
    "resultDis": [true,false,false,false,false,false,false,false,false,false],
    "rooms": [
      {
        "image": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "roomID": "0000001",
        "numOfPeople": "6/8",
        "time": "2022 年 01 月 01 日",
        "location": "北京邮电大学",
        "moreInfo": "活动000001"
      },{
        "image": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "roomID": "0000002",
        "numOfPeople": "6/8",
        "time": "2022 年 01 月 02 日",
        "location": "北京邮电大学",
        "moreInfo": "活动000002"
      },{
        "image": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "roomID": "0000003",
        "numOfPeople": "6/8",
        "time": "2022 年 01 月 03 日",
        "location": "北京邮电大学",
        "moreInfo": "活动000003"
      },{
        "image": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "roomID": "0000004",
        "numOfPeople": "6/8",
        "time": "2022 年 01 月 04 日",
        "location": "北京邮电大学",
        "moreInfo": "活动000004"
      },{
        "image": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "roomID": "0000005",
        "numOfPeople": "6/8",
        "time": "2022 年 01 月 05 日",
        "location": "北京邮电大学",
        "moreInfo": "活动000005"
      }
    ]
  },
  hidePlaceHolder(e) {
    this.setData({placeholder: ""})
  },
  showPlaceHolder(e) {
    this.setData({placeholder: "搜一搜"})
  },
  ItemSelected(event) {
    let query = wx.createSelectorQuery()
    let id = event.currentTarget.id
    let idNum = id[id.length-1];
    console.log(id+"---"+idNum)
    let viewWidth = 0
    query.select('#' + id).boundingClientRect(function (rect) {
      viewWidth = rect.width
    }).exec(() => {
      let offsetLeft = event.currentTarget.offsetLeft
      let sL = offsetLeft - this.data.scrollViewWidth / 2 + viewWidth / 2
      this.setData({
        scrollLeft: sL,
        itemId: event.currentTarget.dataset.id
      })
    })
    let resultDis = [false,false,false,false,false,false,false,false,false];
    resultDis[idNum] = true;
    this.setData({"resultDis": resultDis});
    console.log(resultDis);
  },
  onReady: function () {
    wx.createSelectorQuery().select(".navScroll").boundingClientRect((rect) => {
      this.data.scrollViewWidth = Math.round(rect.width)
    }).exec()
  }
})
