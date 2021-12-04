<template>
 <div>
<Swiper class="big">
  <Swiper-item  v-for="(item,index) in images" :key="index"  class="item">
    <img :src="item" alt="" class="pic">
  </Swiper-item>
</Swiper>

 </div>
</template>

<script>
  import { Swiper, SwiperItem} from 'components/common/swiper/index'
    export default {
        name: "detailswiper",
      components:{
         Swiper,SwiperItem
      },
      props:{
          images:{
            type:Array
          }
      }
    }
</script>

<style scoped>
  .big{
    margin-top: 3px;
    height:300px;
   width:375px;
    overflow: hidden;
  }
 .pic{
 object-fit: contain;
   width: 100%; /* or any custom size */
   height: 100%;
   object-fit: contain; /*  关键*/
  }
  .item{
    width:375px;
    height:300px;
 /*注意这里不能用100%,必须是写实的width/heigth*/
  }
</style>
