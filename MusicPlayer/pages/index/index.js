const tool=require("../../utils/tool")
let songs=tool.songs
let index=0
let bgm=null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,
    needleStatus:'neddle-stop',
    discAnimation:'',
    song:songs[index],
    currentTime:0,
    duration:60
  },
  updateStatus:function(isPlaying) {
    this.setData({
      isPlaying:isPlaying,
      needleStatus:isPlaying?'needle-play':'needle-stop',
      discAnimation:isPlaying?'disc-img-rotate':'',
      song:songs[index],
      currentTime:bgm.currentTime,
      duration:bgm.duration
    })
  },
  pauseBgm:function() {
    bgm.pause()
  },
  pre:function() {
    index = index == 0 ? songs.length-1 : index - 1
    this.playBgm()
  },
  next:function() {
    index = index == songs.length-1 ? 0 : index + 1
    this.playBgm()
  },
  playBgm:function(){
    bgm.src=songs[index].url
    bgm.title=songs[index].title
    bgm.singer=songs[index].singer
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bgm=wx.getBackgroundAudioManager()
    this.playBgm()
    bgm.onPlay(() => {
      this.updateStatus(true)
    })
    bgm.onPause(() => {
      this.updateStatus(false)
    })
    bgm.onEnded(() => {
      this.next()
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