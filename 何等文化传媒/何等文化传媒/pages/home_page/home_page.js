// pages/home_page/home_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  main:function(){
    wx.navigateTo({
      url: '../main/main',
    })
  },
  user: function () {
    wx.reLaunch({
      url: '../user/user',
    })
  },
  card: function () {
    wx.reLaunch({
      url: '../card/card',
    })
  },
  shopping_integral:function(){
    wx.navigateTo({
      url: '../shopping_integral/shopping_integral',
    })
  },
  video_curriculum:function(){
    wx.navigateTo({
      url: '../video_curriculum/video_curriculum',
    })
  },
  store_display: function () {
    wx.navigateTo({
      url: '../store_display/store_display',
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