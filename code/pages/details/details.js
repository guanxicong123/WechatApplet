// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //这个是轮播图的
    bannerList: [
      "http://www.fskangwo.com/images/product/1491029103.jpg",
      "http://www.fskangwo.com/images/product/1491029083.jpg",
      "http://www.fskangwo.com/images/product/1491030042.jpg"
    ],
    conIndex:null,//选择的规格
    goodNum:1, //商品选择的数量
    sku: {
      tree:[ //每一种规格的数组
        {
          k:'规格',
          imgUrl: 'http://www.fskangwo.com/images/product/1491029103.jpg',
          title: "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供",
          price: 7900, //单位为分
          v:[ //每一种规格的唯一商品
            {
              id:'1000',
              name:'S',
              stock_num:110, //当前库存
              previewImgUrl:'http://www.fskangwo.com/images/product/1491029103.jpg'
            },
            {
              id:'1001',
              title: "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供",
              name:'M',
              price: 7900,
              stock_num: 110,
              imgUrl:'http://www.fskangwo.com/images/product/1491029083.jpg',
              previewImgUrl:'http://www.fskangwo.com/images/product/1491029083.jpg'
            },
            {
              id:'1002',
              title: "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供",
              name:'L',
              price: 7900,
              stock_num: 110,
              imgUrl:'http://www.fskangwo.com/images/product/1491030042.jpg',
              previewImgUrl:'http://www.fskangwo.com/images/product/1491030042.jpg'
            },
            {
              id:'1003',
              title: "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供",
              name:'XL',
              price: 7900,
              stock_num: 110,
              imgUrl:'http://www.fskangwo.com/images/product/1491030042.jpg',
              previewImgUrl:'http://www.fskangwo.com/images/product/1491030042.jpg'
            },
          ]
        }
      ]
    },
    goodList: { //当前商品的信息
      
    } ,
    showSpecification:false, //显示商品规格
    modalName:'', //登陆提示框
    TabCur:0, //图文介绍默认选择
    introduction:[
      "https://cbu01.alicdn.com/img/ibank/2019/958/778/12229877859_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2019/889/751/10710157988_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2019/113/846/10736648311_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2018/923/937/9398739329_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2018/707/078/9443870707_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2018/012/847/9398748210_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2018/216/637/9398736612_1224175409.jpg",
      "https://cbu01.alicdn.com/img/ibank/2018/756/337/9398733657_1224175409.jpg",
    ],
    favor:false,
    clickAddCart:false, //是否点击了加入购物车
    totalNum:0, //写在购物车右上角的数字
  },
    // 商品规格 statt
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    checkConIndex(e) {
      this.setData({
        conIndex: e.target.dataset.id
      })
    },
    // 商品数量的+
  addition(e){
    this.setData({
      goodNum:this.data.goodNum+=1
    })
  },
    // 商品数量的-
  subtraction(e){
    if(this.data.goodNum > 1){
      this.setData({
        goodNum:this.data.goodNum-=1
      })
    }
  },
  // 商品规格点击确定
  addToCart(e){
      this.hideModal(e)
      let goodList = {}
      let tree = this.data.sku.tree[0]
      goodList.title = tree.title
      goodList.price = tree.price
      goodList.imgUrl = tree.imgUrl
      goodList.specification = tree.v[this.data.conIndex].name
      goodList.id = tree.v[this.data.conIndex].id 
      goodList.num = this.data.goodNum
      this.setData({
        goodList
      })
      // 改变规格显示的样式
      this.setData({
        showSpecification: true,
      })
      // 如果是通过点击加入购物车显示的商品规格,点击确定后就要直接加入到购物测中
    if (this.data.clickAddCart){
      let goodLists = wx.getStorageSync("goodLists")
      goodLists.push(this.data.goodList)
      let totalNum = goodLists.reduce((total,item)=>{return total + item.num},0)
      wx.setStorageSync("goodLists", goodLists)
      // 也是把商品加入购物车后把goodList清空
      this.setData({
        goodList:{},
        showSpecification: false,
        clickAddCart:false,
        showSpecification:false,
        totalNum //购物车右上标,购物车商品数量
      })
    }
      

  },

  // 商品规格 end
  //图文介绍
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  // 收藏
  changefavor(){
    this.setData({
      favor:!this.data.favor
    })
    if (this.data.favor) {   //点击收藏
      let favorLists = wx.getStorageSync("favorLists")
      favorLists.push({
        title: "乐氏宝宝新生儿纸尿裤超薄干爽透气婴儿尿不湿宝宝尿裤线上专供",
        imgUrl: "http://www.fskangwo.com/images/product/1491029083.jpg",
        price: "7900",
        id: '1000'
      })
      wx.setStorageSync("favorLists", favorLists)
    }else{
      let favorLists = wx.getStorageSync("favorLists")
      let index = favorLists.findIndex(item=>{item.id == "1000"})
      favorLists.splice(index,1)
      wx.setStorageSync("favorLists", favorLists)
    }

  },
  // 去购物车
  toCart(){
    console.log("111")
    wx.switchTab({
      url: '/pages/shopping/shopping',
    })
  },
  // 加入购物车
  addCart(e){
    //判定他是否登陆
    if (wx.getStorageSync("userInfo") == '') {
      console.log('1111')
      // var _this = this
      // wx.login({ //微信授权登陆
      //   success(res) { //成功回调
      //     if (res) {
      //       console.log("success")
      //       wx.getUserInfo({ //拿用户名
      //         success: function ({ userInfo }) { //成功回调,传一个对象回来
      //           console.log("最总")
      //           wx.setStorageSync("userInfo", userInfo) //把获取到的用户信息,存到Storage里面
      //           wx.setStorageSync("goodLists", []) //购物车商品列表
      //           _this.setData({ userInfo })
      //         }
      //       })
      //     }
      //   }
      // })
      wx.showModal({
        title:"请先去授权登陆",
        success:function(res){
          if (res.confirm) { //点击确定 
            wx.switchTab({
              url: '/pages/member/member',
            })
          }
        }
      })

      //判定他是否已经选择规格
    }else if (this.data.showSpecification == ""){
        this.showModal(e)
        // 这里就是把显示点击了这个加入购物车
        this.setData({
          clickAddCart:true
        })
    }else{
      let goodLists = wx.getStorageSync("goodLists")
      goodLists.push(this.data.goodList)
      wx.setStorageSync("goodLists", goodLists)
      console.log(wx.getStorageSync("goodLists",'加入购物测'))
      // 商品加入购物车以后,就要把goodList的值变成空
      let totalNum = goodLists.reduce((total, item) => { return total + item.num }, 0)
      this.setData({
        goodList:{},
        showSpecification:false,
        totalNum
      })
    }

  },
  toshou(){
    wx.getUserInfo({
      success:res=>{
        this.globalData.userInfo = res.userInfo

        if(this.userInfoReadyCallback){
          this.userInfoReadyCallback(res)
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let totalNum = wx.getStorageSync("goodLists").reduce((total, item) => { return total + item.num }, 0)
    // this.setData({
    //   totalNum
    // })
    //确定收藏列表是否为空
    this.setData({
      favor:(wx.getStorageSync("favorLists")!="")
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
    //同步购物车中的商品数量
    let totalNum = wx.getStorageSync("goodLists").reduce((total, item) => { return total + item.num }, 0)
    this.setData({
      totalNum
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