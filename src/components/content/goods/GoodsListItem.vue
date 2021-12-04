<template>
  <div class="item" >

      <img :src="srcpic" @click="itemclick" @load="imgload" >


    <p>{{goodsitem.title}}</p>
      <div class="content">

        <span class="money" ><img src='~assets/img/goods/money.png'alt="">{{goodsitem.price}}元</span>
        <span class="shoucang"><img src='~assets/img/goods/shoucang.png' alt="">{{goodsitem.cfav}}</span>
      </div>


  </div>

</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
          goodsitem:{
            type:Object,

          }},
      computed:{
          srcpic(){
            return this.goodsitem.image || this.goodsitem.show.img
          }
      },
        methods:{
            imgload(){
              // if(this.$route.path.indexOf('/home')) {this.$bus.$emit('homeimgload')}
              // else if(this.$route.path.indexOf('/detail')){this.$bus.$emit('detailimgload')}
              this.$bus.$emit('imgload')
            },
          itemclick(){
            this.$router.push({path:'/detail',query:{id:this.goodsitem.iid}})
          }
        }

    }
</script>

<style scoped>
  .item{
    width:48%;

    padding-bottom:10px;
  position: relative;      /*/子绝父相定位*/
  }
  .item img{
    width:100%;
  }
  .item p{
    color: indianred;
    margin-bottom: 20px;
  }
  .money img{
    width:20px;

  }
 .shoucang img{
    width:20px;

  }
 .money{
   color:red;
 }
 .shoucang{
   margin-left: 20px;
 }

  .content{
     position:absolute;
     bottom: 6px;
    left:0;
    right:0;

   }

</style>
