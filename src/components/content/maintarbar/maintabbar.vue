<template>
  <tar-bar>
    <tar-bar-item path="/home" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-img" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/homer.png" alt="">
      <div slot="item-text">首页</div>
    </tar-bar-item>

    <tar-bar-item path="/shopping">
      <img slot="item-img" src="~assets/img/tabbar/shop.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/shopr.png" alt="">
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/me">
      <img slot="item-img" src="~assets/img/tabbar/me.png" alt="">
      <img slot="item-active" src="~assets/img/tabbar/mer.png" alt="">
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
  import TarBar from 'components/common/tabbar/Tabbar'
  import TarBarItem from 'components/common/tabbar/Tabbaritem'
  export default {
    name: "maintabbar",
    components: {
      TarBar,TarBarItem
    }
  }
</script>

<style scoped>
</style>
