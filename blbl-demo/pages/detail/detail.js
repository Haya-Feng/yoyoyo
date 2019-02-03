// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  videoInfo:null,
    othersList:[],
    commentData:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoid = options.id;
    // console.log(videoid);
    
    this.getotherlist(videoid);
    this.getcomment(videoid);
    this.getvideodesc(videoid);
  },

getotherlist(videoid){
  let me = this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=videoid',
    success(res){
      // console.log(res);
      me.setData({
        othersList: res.data.data.othersList
      })
    }
  })
},
getcomment(videoid){
  let me = this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=videoid',
    success(res){
      // console.log(res);
    me.setData({
      commentData: res.data.data.commentData
    })
    }
  })
},
getvideodesc(videoid){
  let me=this;
  wx.request({
    // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=videoid',
    url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+0,
    success(res){
      // console.log(res);
    me.setData({
      videoInfo: res.data.data.videoInfo
    })
    }
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