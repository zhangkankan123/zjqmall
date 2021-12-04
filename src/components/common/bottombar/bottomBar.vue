<template>
    <div class="bar">
      <div class="detail">
        <slot name="details"></slot>
      </div>
      <div class="shopping">
        <slot name="shoppings"></slot>
      </div>
      <div class="buy">
        <slot name="buys"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bottomBar",

    }
</script>

<style scoped>
.bar{
  display: flex;
  background-color: whitesmoke;
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  height: 53px;
  text-align: center;

}
  .detail{
    flex:1.5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    text-align: center;
  }
  .shopping{flex:2;}
  .buy{flex:2;}
</style>
