<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
      props:{

      },
      methods:{


      }
    }
</script>

<style scoped>
.tab-bar{
  display: flex;
  background-color:white;
  position: fixed;
  left:0px;
  right: 0px;
  bottom: 0px;
  height: 49px;
  box-shadow: 0 -2px 3px rgba(0,0,0,0.4);
}
</style>
