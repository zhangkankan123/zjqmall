<template>
    <div class="goods">
      <goodslistitem class="items" v-for="item in goods"
                   :goodsitem="item"/>

    </div>
</template>

<script>
  import  goodslistitem from './GoodsListItem'
    export default {
        name: "GoodList",
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      },

      components:{
          goodslistitem
      }
    }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
.items{
  margin:1px;

}
</style>
