<template>
    <div id="pics">
      <div class="title">
        穿着效果展示
      </div>

      <div v-for="item in needpic" class="mote">
        <img :src="item" alt="" @load="modelimg">
      </div>

      <div class="recommend">
        <div class="title">相关推荐</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "detailpics",
      props:{
          needpic:{
            type:[],
            default(){
              return []
            }
          }
      },
      methods:{
          modelimg(){
            this.$emit('modelimages')

          }
      }
    }
</script>

<style scoped>
  .title{
    color: #8d8687;
    background-color: whitesmoke;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }


img{
  width:100%;
}
</style>
