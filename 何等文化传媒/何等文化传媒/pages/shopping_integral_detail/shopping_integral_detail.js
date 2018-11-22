// pages/shopping_integral_detail/shopping_integral_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: false
  },

  display:function(){
    this.setData({
      sort: false
    })
  },
  sort: function () {
    this.setData({
      sort: true
    })
  },

   card: function() {
    wx.reLaunch({
      url: '../card/card',
    })
  },
  comment: function () {
    wx.navigateTo({
      url: '../comment/comment',
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