//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //在本地存储中加入商品列表与订单列表
    wx.setStorageSync("userInfo", [])
    wx.setStorageSync("goodLists", [])
    wx.setStorageSync("orderLists", [])
    wx.setStorageSync("favorLists", [])

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    this.login()
  },
    //登陆
    login(){
      wx.login({ //微信授权登陆
        success(res) { //成功回调
          if (res) {
            console.log("success")
            wx.getUserInfo({ //拿用户名
              success: function ({ userInfo }) { //成功回调,传一个对象回来
                console.log("最总")
                wx.setStorageSync("userInfo", userInfo) //把获取到的用户信息,存到Storage里面
                wx.setStorageSync("goodLists", []) //购物车商品列表
              }
            })
          }
        }
      })
    },
  globalData: {
    userInfo: null
  }
})