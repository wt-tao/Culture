// pages/store_display_detail/store_display_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  comment:function(){
    wx.navigateTo({
      url: '../comment/comment',
    })
  },
  video_more:function(){
    wx.navigateTo({
      url: '../video_more/video_more',
    })
  },
  make_appointment: function () {
    wx.navigateTo({
      url: '../make_appointment/make_appointment',
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