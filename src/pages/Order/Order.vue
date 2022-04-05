<template>
  <section class="order">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">订单列表</span>
      </a>
    </header>
    <section class="order_no_login">
      <img src="./images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .order
    width: 100%
    .order_no_login
      padding-top: 140px
      width: 60%
      margin: 0 auto
      text-align: center
      >img
        display: block
        width: 100%
        height: 30%
      >h3
        padding: 10px 0
        font-size: 17px
        color: #6a6a6a
      >button
        display: inline-block
        background: #02a774
        font-size: 14px
        color: #fff
        border: 0
        outline: none
        border-radius: 5px
        padding: 10px 20px
  &.profile // 我的
    width: 100%
    .profile-number
      margin-top: 45.5px
      .profile-link
        clearFix()
        position: relative
        display: block
        background: #02a774
        padding: 20px 10px
        .profile_image
          float: left
          width: 60px
          height: 60px
          border-radius: 50%
          overflow: hidden
          vertical-align: top
          .icon-person
            background: #e4e4e4
            font-size: 62px
        .user-info
          float: left
          margin-top: 8px
          margin-left: 15px
          p
            font-weight: 700
            font-size: 18px
            color: #fff
            &.user-info-top
              padding-bottom: 8px
            .user-icon
              display: inline-block
              margin-left: -15px
              margin-right: 5px
              width: 20px
              height: 20px
              .icon-mobile
                font-size: 30px
                vertical-align: text-top
            .icon-mobile-number
              font-size: 14px
              color: #fff
        .arrow
          width: 12px
          height: 12px
          position: absolute
          right: 15px
          top: 40%
          .icon-jiantou1
            color: #fff
            font-size: 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width: 100%
      background: #fff
      overflow: hidden
      .info_data_list
        clearFix()
        .info_data_link
          float: left
          width: 33%
          text-align: center
          border-right: 1px solid #f1f1f1
          .info_data_top
            display: block
            width: 100%
            font-size: 14px
            color: #333
            padding: 15px 5px 10px
            span
              display: inline-block
              font-size: 30px
              color: #f90
              font-weight: 700
              line-height: 30px
          .info_data_bottom
            display: inline-block
            font-size: 14px
            color: #666
            font-weight: 400
            padding-bottom: 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color: #ff5f3e
        .info_data_link:nth-of-type(3)
          border: 0
          .info_data_top
            span
              color: #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top: 10px
      background: #fff
      .my_order
        display: flex
        align-items: center
        padding-left: 15px
        >span
          display: flex
          align-items: center
          width: 20px
          height: 20px
          >.iconfont
            margin-left: -10px
            font-size: 30px
          .icon-order-s
            color: #02a774
          .icon-jifen
            color: #ff5f3e
          .icon-vip
            color: #f90
          .icon-fuwu
            color: #02a774
        .my_order_div
          width: 100%
          border-bottom: 1px solid #f1f1f1
          padding: 18px 10px 18px 0
          font-size: 16px
          color: #333
          display: flex
          justify-content: space-between
          span
            display: block
          .my_order_icon
            width: 10px
            height: 10px
            .icon-jiantou1
              color: #bbb
              font-size: 10px
  
</style>
