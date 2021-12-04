<template>
    <div>
      <swiper>
        <item slot="big" >
          <img :src="'nowpic.image'" alt="">
        </item>
         <item slot="small" v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </item>
      </swiper>
    </div>
</template>

<script>
  import {swiper,item}from'components/common/swiper2/index'
    export default {
        name: "homeswiper2",
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
       bigpic:[],
         nowpic:''
       }
      },
      components:{
          swiper,item
      },
      updated() {
        for(let n in this.banners)
        {
          this.bigpic.push(n);
        }
        console.log(this.bigpic);

      },
      methods:{
        postbig(){



        }

      }
    }
</script>

<style scoped>

</style>
