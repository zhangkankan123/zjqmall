<template>

  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperitemload" >
      </a>
    </swiper-item>
  </swiper>

</template>

<script>

  import {Swiper,SwiperItem} from 'components/common/swiper/index'


    export default {
      name: "homeswiper",
      components: {
        SwiperItem, Swiper
      },
      props:{
        banners:{
          type:Array,
          default(){
            return []
          }
        }

      },
      data(){
        return {
          isload:false,
        }
      },methods:{
        swiperitemload(){
          if(!this.isload) {

            this.$emit('swiperitemload');
            this.isload=true;
          }
        }
      }

    }
</script>

<style scoped>
  img{
    width:100%;
    height:100%;
  }

</style>
