<template>
    <div class="item">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "item"
    }
</script>

<style scoped>
  .item {
    width: 100%;

  }
  .item img {
    width: 100%;
  }
</style>
