<template>
<div>
  <navbar>
    <div slot="left" @click="returnbk"><img src="~assets/img/navbar/return.png" alt=""></div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" class="title-item"
           @click="clickitem(index)" :class="{activeitem:index===currentindex}" >{{item}}</div>
    </div>
  </navbar>
</div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'
    export default {
        name: "detailnavbar",
      components:
        {
          navbar
        },
      data(){
          return{
            titles:['商品','评论','详情','推荐'],
            currentindex:0
          }
      },
      methods:{
          clickitem(index){
            this.currentindex=index;
            this.$emit('itemindex',index)
          },
        returnbk(){
            this.$router.back()
          // 或者go(-1)
        }
      }
    }
</script>

<style scoped>
.title{
  display: flex;
}
.title-item{
  flex:1;
  font-size: 20px;
  font-variant: all-petite-caps;

 }
.activeitem{
    border-bottom:2px solid var(--color-high-text);
   color:var(--color-high-text)
  }
img{
  width:60%;
  margin-top: 3px;
}
</style>
