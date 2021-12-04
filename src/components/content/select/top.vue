<template>
    <div>
      <img :src="img" alt="">
      <span>￥{{price |realprice}}</span>
    </div>
</template>

<script>
    export default {
        name: "top",
      props:{
          content:{
            type:Array
          }
      },
      data(){
        return{
          styleid:null,
          sizeid:null,

          img:null,
          price:null,

          flag1:0,
          flag2:0
        }
      },
      created() {
          this.$bus.$on('getstyleid',this.mystyleid)
        this.$bus.$on('getsizeid',this.mysizeid)


      },
      methods:{
          mystyleid(id){
            this.styleid=id
            this.flag1=1;
            this.getpic()
          },
        mysizeid(id){
          this.sizeid=id
          this.flag2=1
          this.getpic()
        },
        getpic(){
            if(this.flag1==1&&this.flag2==1)
            {
              for(let item of this.content)
              {
                if(item.sizeId==this.sizeid&&item.styleId==this.styleid)
                {
                  this.img=item.img;

                  this.price=item.nowprice;

                  this.$emit('oneprice',this.price/100+this.price%100)
                  this.$emit('msg',this.img)

                }
              }
            }

        }
      },
      filters:{
          realprice(item){
           return  item%100+item/100
          }
      }
    }
</script>

<style scoped>
img{
  width:60%;
  height:200px;
  object-fit: contain;
  margin-top: 10px;
}
  span {
    font-size: 23px;
    color: #ff6711;
    font-weight: 500;
  }
</style>
