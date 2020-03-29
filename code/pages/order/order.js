// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //计算总价格 ,,要在每一次操作后,都要调用,+ - 删除
  countTotal() {
    let total = this.data.goodLists.reduce((total, item) => { return total + item.price * item.num }, 0)
    console.log(total, 'total')
    this.setData({
      total: total / 100
    })
  },
  // 点击支付
  pay(){
    let _this = this
    wx.showModal({
      title: '请支付  '+'￥'+this.data.total,
      //确定支付
      success:function(res){
        if(res.confirm){
          let orderList = {} //一张订单
          let orderLists = wx.getStorageSync("orderLists")
          orderList.goodLists = wx.getStorageSync("goodLists")
          orderList.type = 2 //待收货
          orderLists.push(orderList)
          wx.setStorageSync("goodLists", [])
          wx.setStorageSync("orderLists", orderLists)
          // 然后跳转到我的订单也
          wx.navigateTo({
            url: '/pages/myOrder/myOrder',
          })
        }else{
          let orderLists = []
          let orderList = {}//一张订单
          orderList.goodLists = wx.getStorageSync("goodLists")
          orderList.type = 1 //未支付
          orderLists.push(orderList)
          wx.setStorageSync("goodLists", [])
          wx.setStorageSync("orderLists", orderLists)
          wx.navigateTo({
            url: '/pages/myOrder/myOrder',
          })
        }
      },
      
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
    this.setData({
      goodLists: wx.getStorageSync("goodLists")
    })
    this.countTotal()


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