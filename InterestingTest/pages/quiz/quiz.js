// pages/quiz/quiz.js
const tool = require('../../utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qBank: []
  },

  onSubmit:function(e) {
      let rs = e.detail.value
      for (let i = 1; i < this.data.qBank.length; i++) {
        let answer = rs['quiz' + i]
        if (answer == '') {
            wx.showModal({
              title: '提示',
              content: '请完成第' + i + '题',
            })
            return
        }
      }
      wx.reLaunch({
        url: '../result/result?rs=' + JSON.stringify(rs),
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const qBank = tool.quizBank
    this.setData({
        qBank:qBank
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