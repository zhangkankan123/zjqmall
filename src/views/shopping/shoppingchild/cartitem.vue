<template>
    <div class="item">
      <div class="check"></div>
      <img :src="content.msg" alt="">
      <div class="detail">
        <p class="name">{{content.name}}</p>
        <span class="color">{{content.color}};</span>
        <span class="size">{{content.size}}</span>

        <div>
          <span class="price">￥{{content.price}}</span>
              <span class="number">x{{content.number}}</span>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "item",
      props:{
          content:{}
      }
    }
</script>

<style scoped>
  .item{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius:14px;
    margin:12px 8px;

    }
  img{
   max-width: 27%;
    height: 150px;
    object-fit: contain;
    flex:1;
    border-radius: 20px;
  }
.detail{
  padding-left: 3px;
  flex:2;
  display: inline-block;
  position: relative;

}
  .name{
    font-weight: bolder;
    position: relative;
    top:-17px;

  }
  .color{
    background-color:gainsboro ;
  }
  .size{
    background-color: gainsboro;
  }
  .price{
   color: #ff2621;
    font-size: 25px;
    font-weight: bolder;

  }
  .number{
    position: absolute;
    right: 40px;
    width:30px;
    border: #b9b6b0 1px solid;
    display: inline-block;
    border-radius: 5px;
    font-size: 25px;
  }
</style>
