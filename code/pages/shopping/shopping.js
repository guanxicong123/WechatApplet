// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isempty:true, //购物车是否为空
    isLogin:true, //是否已经登陆
    cartLists:"", //购物车商品初始值为空
    goodLists:[],
    total:0, //总价格,购物车中的总价格
  },

  // 购物车中点击后登陆
  toLogin() {
    // wx.switchTab({ //跳转页面
    //   url: '../member/member',
    // })
    var _this = this
    wx.login({
      success: function (res) {
        if (res) {
          wx.getUserInfo({ //拿用户名
            success: function ({ userInfo }) { //成功回调,传一个对象回来
              wx.setStorageSync("userInfo", userInfo) //把获取到的用户信息,存到Storage里面
              wx.setStorageSync("goodLists", []) //购物车商品列表
              _this.setData({userInfo})
              //拿数据需要this.data.key
              console.log(_this.data.userInfo)
            }
          })
        }
      },
    })
  },
  toIndex(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  //点击图片,跳转到商品详情页
  toDetails(){
    console.log("detail")
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  // 商品数量的+
  addition(e) {
    let index = e.currentTarget.dataset.id
    let goodLists = this.data.goodLists
    goodLists[index].num +=1
    wx.setStorageSync("goodLists", goodLists) //把数据放回storage中
    this.setData({//这是同步页面上的数据
      goodLists
    })
    this.countTotal()
  },
  // 商品数量的-
  subtraction(e) {
    let index = e.currentTarget.dataset.id
    let goodLists = this.data.goodLists
    if (goodLists[index].num > 1){
      goodLists[index].num -= 1
      wx.setStorageSync("goodLists", goodLists)
      this.setData({
        goodLists
      })
    }
    this.countTotal()
  },
  // 点击删除购物车中的某个商品
  del(e){
    console.log("del")
    let index = e.currentTarget.dataset.id
    let goodLists = this.data.goodLists
    goodLists.splice(index,1)
    //这是改变Storage中的商品列表
    wx.setStorageSync("goodLists", goodLists)
    //这是同步页面
    this.setData({
      goodLists
    })
    this.countTotal()
  },

  //计算总价格 ,,要在每一次操作后,都要调用,+ - 删除
  countTotal(){
    let total = this.data.goodLists.reduce((total,item)=>{return total + item.price * item.num},0)
    console.log(total,'total')
    this.setData({
      total:total / 100
    })
  },
  settle() {
    wx.navigateTo({
      url: '/pages/order/order',
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync("userInfo")
    this.setData({userInfo}) //把用户信息给到购物车页面
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
    // 从storage中把商品数据拿出来
    this.setData({goodLists:wx.getStorageSync("goodLists")})
    //计算总价格
    this.countTotal()
    console.log(this.data.goodLists)
    console.log(this.data.goodLists == '', '111')

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