<template>
    <div>
      <div class="null" v-if="cartlist.length==0">
        <img src="~assets/img/shopping/null.png" alt="">
        <h3>购物车尽然是空的</h3>
        <p>再忙，也记得买点什么犒劳自己~</p>
      </div>
      <cartitem v-else v-for="(item,index) in cartlist" :key="index" :content="item"></cartitem>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import cartitem from "./cartitem";
  export default {
        name: "cartlist",
    components:{
      cartitem
    },
      computed:{
        ...mapGetters(['cartlist'])
      }

    }
</script>

<style scoped>
.null{
  width:70%;
  margin:0 auto;
  position: relative;
  top:120px;
  text-align: center;
}
  img{
    width: 70%;
  }
</style>
