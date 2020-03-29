// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur:0, //默认选中
    tab:["全部","待付款","待发货","待收货","已收货"],
  },
  //tab的切换
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      
    })
    console.log(this.data.TabCur,'TabCur')
  },
  //点击支付订单
  pay(e){
    let index = e.target.dataset.id
    let orderLists = this.data.orderLists
    orderLists[index].type = 2
    this.setData({
      orderLists
    })
    wx.setStorageSync("orderLists", orderLists)
  },
  ship(e){
    let index = e.target.dataset.id
    let orderLists = this.data.orderLists
    orderLists[index].type = 3
    this.setData({
      orderLists
    })
    wx.setStorageSync("orderLists", orderLists)
  },
  receipt(e){
    let index = e.target.dataset.id
    let orderLists = this.data.orderLists
    orderLists[index].type = 4
    this.setData({
      orderLists
    })
    wx.setStorageSync("orderLists", orderLists)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      TabCur: options.id
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
    this.setData({
      orderLists:wx.getStorageSync("orderLists")
    })
    // wx.setStorageSync("orderLists",  [[{ "title": "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供", "price": 7900, "imgUrl": "../../images/swiper1.jpg", "specification": "M", "id": "1001", "num": 4 }]] )
    console.log(this.data.orderLists[0].type==1, "orderLists")

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
    wx.reLaunch({
      url: '../member/member',
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