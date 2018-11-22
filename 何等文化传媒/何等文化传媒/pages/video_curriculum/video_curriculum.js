// pages/video_curriculum/video_curriculum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, name: '推荐' }, { id: 2, name: 'MV舞' }, { id: 3, name: '爵士' }, { id: 4, name: '街舞' }, { id: 5, name: '芭蕾舞' }, { id: 6, name: '现代舞' }, { id: 7, name: '拉丁舞' }, { id: 8, name: '霹雳舞' }, { id: 9, name: '古典舞' },],
    ids:1
  },
  list: function (e) {
    this.setData({
      ids: e.currentTarget.id
    })
  },
  video_detail:function(e){
    wx.navigateTo({
      url: '../video_detail/video_detail?id=' + e.currentTarget.id,
    })
  },
  /*9
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