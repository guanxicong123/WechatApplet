//index.js
//获取应用实例
//Page Object
Page({
  data: {
    currentIndex:0,
    //这个是轮播图的
    bannerList:[
      "http://www.fskangwo.com/data/slide/20170401nyreke.jpg",
      "http://www.fskangwo.com/data/slide/20170509vssfxn.jpg",
    ]
  },
  change(e){
    console.log(e,'e')
    this.setData({
      currentIndex: e.detail.current
    })
    console.log(this.data.currentIndex)
  },
  //点击宫格,跳转到products页面
  toProducts(){
    wx.navigateTo({
      url: '/pages/products/products?id=1',
      events:""
    })
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});
