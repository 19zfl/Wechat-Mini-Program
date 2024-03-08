// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url:"../../images/logo.png",
    nick_name:"请先登录",
    btn_text:"点击获取个人信息",
    userInfoArr:[]
  },
  getInfo:function() {
    wx.getUserProfile({
      desc: 'desc',
      success:res=>{
          this.userInfoArr=res.userInfo;
          if (res.userInfo != null) {
            wx.showToast({
              title: '登录成功',
            })
          }
          this.setData({
              nick_name:this.userInfoArr.nickName,
              img_url:this.userInfoArr.avatarUrl,
              btn_text:"退出登录",
          })
      }
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