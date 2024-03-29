// pages/result/result.js
const tool = require('../../utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotoIndex:function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let rs = JSON.parse(options.rs)
    let qBank = tool.quizBank
    let rsBank = []
    for (let i = 1; i <= qBank.length; i++) {
        let one = qBank[i - 1]
        let question = one.question
        let sign = rs['quiz' + i]
        let jiexi = one.analysis[sign]
        rsBank.push({
            id: i,
            question: question,
            analysis: jiexi
        })
    }
    this.setData({
        rsBank:rsBank
    })
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