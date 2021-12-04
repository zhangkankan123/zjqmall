<template>
 <div class="tab-control" >
   <div class="item"
        v-for="(item,index) in titles"  :class="{active: index === currentindex}" @click="tabclick(index)" >
     <span>{{item}}</span>
   </div>
 </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          titles:{
            type:Array,
            default()
            {
              return []
            }
          },
        typeindex:{
            type:Number
        }
      },
      data(){
          return {
            currentindex:0,
            outtab:0,
            intab:0,
          }
      },

      methods:{
          tabclick(index){

            this.currentindex=index
              this.$emit('tabcontrol',index)

          }
      }
    }
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  margin-top: 10px;
  background-color: whitesmoke;

}
  .item{
    flex:1;
    height:40px;
    font-size: 20px;
  }
  .active span{
    border-bottom: indianred 2px solid ;
    color: indianred;
  }
  span{
    padding:  9px;
  }
</style>
