5<template>
    <div class="tab-bar-item"  @click="route">
      <slot  v-if="!isActive" name="item-img"></slot>

      <slot v-else name="item-active"></slot>
      <div :style="isColor">
        <slot   name="item-text"></slot>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Tabbaritem",
      props:{
          path:{type:String},
        colors:{type:String,default:'pink'}
      },
      methods:{
        route(){
          this.$router.push(this.path)
        }
      },
      computed:{
        isActive(){return this.path===this.$route.path},
        isColor(){
         return this.isActive?{color:this.colors}:{}
        }
      },
      data()
      {
        return{
          // isActive:true
        }
      }
    }
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  margin:2px;
  text-align: center;
}
  .tab-bar-item img{
    width:20px;
  }
  .active{
    color:red;
  }
</style>
