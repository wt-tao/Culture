//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  register: function () {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  password:function(){
    wx.navigateTo({
      url: '../password/password',
    })
  },
  main: function () {
    wx.reLaunch({
      url: '../home_page/home_page',
    })
  },
  onLoad: function () {
 
  },

})
