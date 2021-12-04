<template>
    <div id="shop">

      <div class="name">
          <img :src="shopitem.logo" alt="">
          <span>{{shopitem.name}}</span>
      </div>

     <div class="more">
       <div class="xiao1">
        <div class="number">{{shopitem.sell}}</div>
         <div>总销量</div>
       </div>

       <div class="xiao2">
         <div class="number">{{shopitem.goods}}</div>
         <div>全部宝贝</div>
       </div>

       <div class="big" >
         <table class="tabledetail">
           <tr v-for="(item,index) in shopitem.score" :key="index">
             <td>{{item.name}}</td>
             <td class="scorebetter" v-if="item.isBetter">{{item.score}}</td>
             <td class="score" v-else>{{item.score}}</td>
             <td class="better" :class="{bettermore:item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
           </tr>
         </table>
       </div>

     </div>


      <div class="enter">
        <span>进店逛逛</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shop",
      props:{
          shopitem:{
            type:Object,
            default(){
              return{}
            }
          }
      }
    }
</script>

<style scoped>
  .name{
    padding-top: 15px;
  }
.name img{
  width:10%;
  position:relative;
  top:5px;left:9px;
  border-radius: 30px;
  box-shadow: 0 0  3px #b0b0b0;
}
.name span{
  position: relative;
   left:25px;
 }

  .more{
    margin-top: 10px;
    display: flex;
    text-align: center;
  }
  .xiao1{
    flex:1;
    padding: 15px;
  }
  .xiao2 {
    flex:1;
    border-right: #b9b6b0 2px solid;
    padding: 15px;
  }
  .number{
    font-size: 23px;
    margin-bottom: 4px;
    color:#ff136c;

  }
  .tabledetail td{
   padding: 5px;
  }

  .big{
    flex:2;
    padding-left: 18px;
  }


  .better{
    background-color: green;
    color:whitesmoke;

  }
  .bettermore{
    background-color: red;
    color:white;

  }
  .scorebetter{
    color: #ff2621;
  }
  .score{
    color:green;
  }
  .enter{
    text-align: center;
    font-size: larger;
    margin-top: 20px;
    height: 30px;
    color: whitesmoke;
  }
  .enter span{
    display: inline-block;
    width:100px;
    line-height: 30px;
    background-color: var(--color-high-text);
  }
  #shop{
    padding-bottom: 20px;

    box-shadow: 0 2px 4px #b9b6b0;
  }
</style>
