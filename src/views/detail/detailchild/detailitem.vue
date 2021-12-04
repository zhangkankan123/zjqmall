<template>
    <div class="detailitem" >
      <div class="title">{{pricetitle.title}}</div>
      <div class="price">
       <span class="nowprice">{{pricetitle.newprice}}</span>
        <span class="oldprice">{{pricetitle.oldprice}}</span>
        <span class="discount" >{{pricetitle.discount}}</span>
      </div>
      <div class="other"  v-if="pricetitle.columnes!==undefined">
        <span>{{pricetitle.columnes[0]}}</span>
        <span>{{pricetitle.columnes[1]}}</span>
        <span>{{pricetitle.services[pricetitle.services.length-1].name}}</span>

      </div>
      <div class="serve"   v-if="pricetitle.services!==undefined">
        <span class="server-item" v-for="index in pricetitle.services.length-1">
          <img :src="pricetitle.services[index-1].icon" alt="">
          <span >{{pricetitle.services[index-1].name}}</span>
        </span>
      </div>



    </div>
</template>

<script>
    export default {
        name: "detailitem",
      props:{
          pricetitle:{
            type:Object
          }
      },

    }
</script>

<style scoped>
.detailitem{
  width:100%;
  margin: 0 auto;
}
.title{
  padding-top: 8px;
}
.price{
  padding-bottom: 9px;
}
  .nowprice{
    color:var(--color-high-text);
    font-size: 25px;
    font-weight: bolder;
  }
  .oldprice{
    text-decoration-line: line-through;
  }
  .discount{
    background-color: var(--color-tint);
    display: inline-block;
    text-align: center;
    width:70px;
    color:white;
    border-radius: 3px ;
    position: relative;
    top:-7px;
    left:3px;
  }
  .other{
    display: flex;
    padding-bottom: 5px;
    border-bottom:#b9b6b0   1px solid;
  }
  .other span{
    flex:1;
  }
  .serve{
    display: flex;

    height: 40px;

    box-shadow:0 2px  5px  #b0b0b0;
  }
  .server-item{
    flex:1;  flex-wrap: nowrap;
  }
  .server-item span{
    flex-shrink: 0;
 text-wrap: none;
    font-size: 6px;
    width: 90%;
    text-align: center;
   line-height: 40px;


  }
  .server-item img{
    width:10%;
    max-height:40px ;
  }

</style>
