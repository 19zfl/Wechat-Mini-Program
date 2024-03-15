// pages/call/call.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
    tel: ''
  },

  onInput:function(e) {
    let num = e.currentTarget.dataset.num
    let newTel = this.data.tel + num
    this.setData({
        tel:newTel
    })
  },

  call:function() {
    let tel = this.data.tel
    wx.makePhoneCall({
      phoneNumber: tel,
    })
  },
  
  delete:function() {
    let tel = this.data.tel
    if (tel.length > 0) {
        tel = tel.substring(0, tel.length -1)
    }
    this.setData({
        tel:tel
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})