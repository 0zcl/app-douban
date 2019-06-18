// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '关于我',
    // 二维码
    qrCode: 'https://images2018.cnblogs.com/blog/1038183/201807/1038183-20180705235216512-609812726.jpg',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: 'https://github.com/0zcl',
      avatarUrl: 'https://images2018.cnblogs.com/blog/1038183/201807/1038183-20180705235216512-609812726.jpg'
    }
  },

  getUserInfo () {
    app.wechat.getUserInfo()
      .then(res => this.setData({ userInfo: res.userInfo }))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.wechat.login()
      .then(res => {
        if (res.code) {
          console.log('登录成功！' + res.code)
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      })
  }
})
