<template>
<div>
  <bottom-bar>
   <div slot="details" class="detail">

   <div>
     <img src="~assets/img/bottombar/servicestaff.png" alt="">
     <div class="service">
       客服
     </div>
   </div>

     <div>
       <img v-if="active" src="~assets/img/bottombar/shoucanga.png" alt="" @click="whichone">
       <img  v-else src="~assets/img/bottombar/shoucang.png" alt=""  @click="whichone">

       <div class="shoucang" :class="{ashoucang:active}">
         收藏
       </div>
     </div>


   </div>

    <div slot="shoppings" class="shopping" @click="buy">
      <img src="~assets/img/bottombar/shopping.png" alt="">
       <span>加入购物车</span>
    </div>


    <div slot="buys" class="buy">

      <span>立即购买</span>
    </div>
  </bottom-bar>

</div>

</template>

<script>
import bottomBar from "../../../components/common/bottombar/bottomBar";
    export default {
        name: "bottombar",
      data(){
          return{
            active:false
          }
      },
      components:{
          bottomBar
      },
      methods:{
          whichone(){
           this.active=!this.active

          },
        buy(){
            this.$emit('addshopping')
        }
      }
    }
</script>

<style scoped>
  .detail{
    padding-top: 3px;

  }
 img{
   width:50%;
   max-height: 30px;
   object-fit: contain;
 }
 .ashoucang{
   color: red;
 }
  .shopping img{
    width:30%;
position: relative;
    top:10px;
  }
  .shopping span{
    width:70%;
    color: white;
    font-size: larger;
    line-height: 55px;
  }
  .shopping {
    background-color: orange;
    height: 100%;  line-height: 53px;
    text-align: center;
  }
.buy{
  background-color: #ff4164;
  line-height: 53px;
  height: 100%;

}
  .buy span{
    font-size: larger;
    color: white;
  }
</style>
