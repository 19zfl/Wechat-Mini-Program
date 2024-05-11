let completeList = []
let todoList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  quxiao:function(e){
    wx.showModal({
      success:res=>{
        if (res.confirm) {
          let type = e.currentTarget.dataset.type
          let i = e.currentTarget.dataset.id
          if (type == "todo") {
            todoList.splice(i, 1)
          } else {
            completeList.splice(i, 1)
          }
        }
        this.update()
      }
    })
  },

  getData:function(){
    todoList = wx.getStorageSync('todoList')
    completeList = wx.getStorageSync('completeList')
    this.setData({
      todoList:todoList,
      completeList:completeList
    })
  },

  update:function() {
    this.setData({
      todoList:todoList,
      completeList:completeList
    })
    wx.setStorageSync('todoList', todoList)
    wx.setStorageSync('completeList', completeList)
  },

  undo:function(e){
    let i = e.currentTarget.dataset.id
    let content = completeList[i]
    todoList = [content].concat(todoList)
    completeList.splice(i, 1)
    this.update()
  },

  done:function(e){
    let i = e.currentTarget.dataset.id
    let content = todoList[i]
    completeList = [content].concat(completeList)
    todoList.splice(i, 1)
    this.update()
  },

  add:function(){
    wx.showModal({
      title:"请输入代办事项",
      editable:true,
      success:res=>{
        let content = res.content
        todoList = [content].concat(todoList)
        this.update()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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