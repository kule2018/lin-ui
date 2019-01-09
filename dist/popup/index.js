// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['popup-class'],
  properties: {
    // 显示与隐藏
    status: {
      type: String,
      value: 'hide'
    },
    // z-index值
    zIndex: {
      type: Number,
      value: 99
    },
    // 动画效果的显示和隐藏
    animation: {
      type: String,
      value: 'show'
    },
    // slot的位置
    contentAlign: {
      type: String,
      value: ''
    },
    // 锁定
    locked: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 阻止滑动
    doNothingMove(e) {
      // do nothing……
    },
    doNothingTap() {
      // do nathing
    },

    // 点击事件
    onPupopTap(e) {
      let detail = true;
      let option = {};
      console.log(this.data.locked)
      if (this.data.locked !== true) {
        console.log('可以更改')
        this.setData({
          status: !this.data.status
        })
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
})