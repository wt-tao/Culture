// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, name: "课程" }, { id: 2, name: "美食" }, { id:3, name: "美容/美法" }, { id: 4, name: "洗车" }, { id: 5, name: "亲子" },],
    id:1,
  },
  list:function(e){
    this.setData({
      id: e.currentTarget.id
    })
  },
  store_display_detail: function (e) {
    wx.navigateTo({
      url: '../store_display_detail/store_display_detail?id=' + e.currentTarget.id,
    })
  },
  sj_all_list: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../sj_all_list/sj_all_list?id=' + e.currentTarget.id + '&title=' + e.currentTarget.dataset.title,
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