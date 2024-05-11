Page({

  /**
   * 页面的初始数据
   * taskkill /im student.exe /t /f
   */
  data: {
    photoList:[],
  },
  preview:function(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
    })
  },
  uploadPhoto:function() {
    wx.chooseImage({
      count: 1,
      success:res=> {
        wx.uploadFile({
          filePath: res.tempFilePaths[0],
          name: 'file',
          url: 'http://localhost/uploadPhoto.php',
        })
        this.getPhoto()
      }
    })
  },
  getPhoto:function()　{
    wx.request({
      url: 'http://localhost/getPhotoList.php',
      success:res => {
        console.log(res)
        this.setData({
          photoList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPhoto()
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