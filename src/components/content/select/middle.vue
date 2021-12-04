<template>
    <div class="middle" >

    <div class="styles">
         <h4>颜色分类</h4>
      <div v-for="(item,index) in styles" class="styleitem" :key="index" @click="touch1(index)" :class="{actives:index===isactive}">
       <span>{{item.name}}</span>
      </div>
    </div>

      <div class="size">
        <h4>尺寸</h4>
        <div v-for="(item,index) in size" class="sizeitem" :key="index" @click="touch2(index)" :class="{actives:index===isactive2}">
          <span>{{item.name}}</span>
        </div>
      </div>

      <div class="number">
        <span>数量：</span>
        <div class="but">
          <button @click="addnum">+</button>
          {{number}}
           <button @click="reducenum" :disabled="numbereduce">-</button>

        </div>

      </div>

      <div class="bottom" @click="buy">
        确认
      </div>


    </div>
</template>

<script>
    export default {
        name: "middle",
      data(){
          return{
            isactive:{
             type:Number,
              default:99
            },
            isactive2:{
              type:Number,
              default:99
            },
            number:0,
            numbereduce:true,
            mycolor:null,
            mysize:null,



          }
      },
      props:{
          styles:[],
        size:[],
        name:null,
        id:null,
        oneprice:0,
        msg:null

      },

      methods:{
          touch1(index){

           this.isactive=index
            this.$bus.$emit('getstyleid',this.styles[index].styleId)
            this.mycolor=this.styles[index].name

          },
        touch2(index){

          this.isactive2=index
          this.$bus.$emit('getsizeid',this.size[index].sizeId)
          this.mysize=this.size[index].name

        },
        addnum(){
            if(this.number>=0)
            {this.numbereduce=false;
              this.number++;}
        },
        reducenum(){

          if(this.number>0)
          {this.number--;}
          else{
            this.numbereduce=true
          }
      },

        buy(){

         let content={}
            content.id=this.id
          content.msg=this.msg
          content.price=this.oneprice*this.number
            content.size=this.mysize
          content.color=this.mycolor
          content.name=this.name
          content.number=this.number

          console.log(content);
    this.$store.dispatch('addinto',content)

        }


      }
    }
</script>

<style scoped>
.middle{
  border-top:1px solid  #b0b0b0;
}
.styles{
  border-bottom: 1px solid #b9b6b0;
  padding: 10px;
}
  .styleitem{
    display: inline-block;
    margin: 5px;
    padding: 3px;
    background-color: whitesmoke;
    border-radius: 3px;

  }
  .styleitem span{

    display: inline-block;
  }

  .size{
    border-bottom: 1px solid #b9b6b0;
    padding: 10px;
  }
.sizeitem{
  display: inline-block;
  margin: 5px;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 3px;

}
  .sizeitem span{
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  .number{
    padding: 10px;
  }
  .but{

    display: inline-block;

  }
  button{
    width: 50px;
  }
  .actives{
    background-color: #ff4f1f;
    color: whitesmoke;
  }
.bottom{
  text-align: center;
  background-color: #ff4f1f;
  color: whitesmoke;
  height: 40px;
  border-radius: 13px;
  line-height: 40px;
  width: 70%;
  position: absolute;
  left:15%;
  bottom: 0;


}
</style>
