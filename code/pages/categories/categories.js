// pages/categories/categories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conId:0,
    lefts:["纸尿片","纸尿裤","卫生棉","乐氏宝宝","乐点","优爱乐","优莱亚","卡洛爱伊","其他品牌"],
    rights:[
      {
        index:0,
        name:"纸尿片",
        categoryItem:[
          {
            imgUrl: "https://cbu01.alicdn.com/img/ibank/2019/765/446/11825644567_1224175409.400x400.jpg",
            text:"净味护臀"
          },
          {
            imgUrl: "https://cbu01.alicdn.com/img/ibank/2018/904/698/9402896409_1224175409.400x400.jpg",
            text:"柔棉亲肤"
          },
          {
            imgUrl: "https://cbu01.alicdn.com/img/ibank/2019/559/897/10913798955_1224175409.400x400.jpg",
            text:"超薄干爽"
          },
          {
            imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/765/446/11825644567_1224175409.400x400.jpg",
            text:"卡洛爱伊"
          },

        ]
      },
      {
        index:1,
        name:"纸尿裤",
        categoryItem:[
          {
            imgUrl:"http://www.fskangwo.com/images/product/1491029204.jpg",
            text:"柔棉护肤"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1499054052.jpg",
            text:"净味护臀"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1499062061.jpg",
            text:"超薄干爽"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1515466369.jpg",
            text:"小乐康恩"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1568880783.jpg",
            text:"卡炫宝贝"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1491029920.jpg",
            text:"卡洛爱伊"
          },

        ]
      },
      {
        index:2,
        name:"卫生棉",
        categoryItem:[
          {
            imgUrl:"http://www.fskangwo.com/images/product/1491030042.jpg",
            text:"乐点竹炭因子系列"
          },
          {
            imgUrl:"http://www.fskangwo.com/images/product/1491030157.jpg",
            text:"自然爽亲新瞬吸系列"
          },
        ]
      },
    ]
  },
  itemclick(event){
    //获取触发对象中data每一个id数据
    var id = event.target.dataset.id
    this.setData({
      conId: id
    })
  },
  toProducts(e){
    console.log(e.currentTarget.dataset.id,'id')
    var name = this.data.rights[this.data.conId].categoryItem[e.currentTarget.dataset.id].text
    wx.navigateTo({
      url: '/pages/products/products?name='+name,
    })
    console.log('/pages/products/products?name=' + name)
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
    var _this = this
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          scrollHeight:res.windowHeight
        })
      },
    })
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