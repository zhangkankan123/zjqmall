<template>
<div class="swiper">
  <div class="big">
  <slot name="big"></slot>
  </div>
   <div class="small">
    <slot name="small"></slot>
   </div>
</div>

</template>

<script>
  import item from'./item'
    export default {
        name: "swiper",
      components:{
          item
      },
      created(){
          //this.handledom();
        //  this.starttime();
      },
      methods:{
        handleitem(){
          let bigs = document.getElementsByClassName('.big');
          setInterval(function(){
            bigs
            if(index == 4){
              index=0
            }
          },1500)
        }

      }
    }
</script>

<style scoped>
.swiper{
  width:100%;
  display: flex;

}
  .big{
    flex:3;
   margin-right: 2px;
    margin-bottom: 0;
    overflow: hidden;



    display:flex;

    align-items: center;
  }

  .big img{



  }
  .small{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
