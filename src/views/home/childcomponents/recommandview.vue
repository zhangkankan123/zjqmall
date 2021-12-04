<template>
<div class="recommand">
<div v-for="item in recommends"  class="recommand-item">
  <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>

</div>
</div>
</template>

<script>
    export default {
        name: "recommandview",
      props:{
          recommends:[]
      }
    }
</script>

<style scoped>
.recommand{
  display: flex;
  width:100%;
  font-size: 12px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 5px solid silver;
}
.recommand-item img{
  width:90%;
  margin-bottom: 8px;
}
  .recommand-item{
    flex:1;
  }

</style>
