<template>
    <div class="selection" >
      <div class="top">
        <img src="~assets/img/select/shutdown.png" alt="" @click="shutdown">
       <top :content="content.price" @oneprice="getprice" @msg="mymsg"></top>
      </div>
<!--      //图片和价格-->

      <div class="middle" >
     <middle :size="content.size" :styles="content.styles"
             :name="name" :id="id" :oneprice="price" :msg="msg"
     ></middle>
      </div>
<!--     //款式。尺寸。数量 购买-->


    </div>
</template>

<script>
  import top from "./top";
  import middle from "./middle";

    export default {
        name: "selection",
      data(){
          return{
            price:null,
            msg:null
          }
      },
      props:{
          content:{},
        name:null,
        id:null,

      },

      components:{
          middle,

        top
      },
      methods:{
          shutdown(){
            this.$emit('shutdown')
          },
        getprice(price){
        this.price=price
        },
        mymsg(msg){
            this.msg=msg
        }
      }
    }
</script>

<style scoped>
.selection{
  position: fixed;top:150px;overflow: hidden;
  bottom:0;
  background-color: white;
  display: flex;
  flex-direction: column;

  width:100%;
}
  .top{
    flex:1;
   position: relative;
  }
  .top img{
    width: 20px;
    position: absolute;
    right: 20px;
    top:10px;
  }
  .middle{
    flex:2;
  }


</style>
