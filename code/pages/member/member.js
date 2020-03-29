// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toMyOrder(){

    wx.navigateTo({
      url: '/pages/myOrder/myOrder?id=0',
    })
  },
  payment(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder?id=1',
    })
  },
  received(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder?id=2',
    })
  },
  delivered(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder?id=3',
    })
  },
  returns(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder?id=4',
    })
  },
  //登陆
  login(){
    var _this = this
    wx.login({ //微信授权登陆
      success(res) { //成功回调
        if (res) {
          console.log("success")
          wx.getUserInfo({ //拿用户名
            success: function ({ userInfo }) { //成功回调,传一个对象回来
              console.log("最总")
              wx.setStorageSync("userInfo", userInfo) //把获取到的用户信息,存到Storage里面
              wx.setStorageSync("goodLists", []) //购物车商品列表
              _this.setData({ userInfo })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 页面加载的时候执行,像create
   */

  onLoad: function (options) {
    console.log(wx.getStorageSync("userInfo"))
    if(this.data.userInfo){
      return
    }else{
      var _this = this
      wx.login({ //微信授权登陆
        success(res){ //成功回调
          if(res){
            wx.getUserInfo({ //拿用户名
              success:function({userInfo}){ //成功回调,传一个对象回来
                wx.setStorageSync("userInfo", userInfo) //把获取到的用户信息,存到Storage里面
                wx.setStorageSync("goodLists", []) //购物车商品列表
                _this.setData({userInfo})
              }
            })
          }
        }
      })
    }
  },
  bindGetUserInfo(e){
    console.log(e.detail.userInfo)
  },
  // 点击成为分销商
  changeDistributor(){
    wx.showModal({
      title: '是否需要成为分销商',
      content: '',
    })
  },
  // 点击关于我们
  knowOut(){
    wx.showModal({
      title: '想要了解我们更多吗',
      content: '',
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