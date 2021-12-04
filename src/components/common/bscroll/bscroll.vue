<template>

    <div class="wrapper" ref="aaa">
      <div class="content">
        <slot></slot>
      </div>
    </div>



</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp  from '@better-scroll/pull-up'
  import ObserveDOM from '@better-scroll/observe-dom'
  BScroll.use(ObserveDOM)
  BScroll.use(PullUp)
    export default {
        name: "bscroll",
      data(){
          return {
            scroll:{
              type:Object
            },

          }
      },
      props:{
        number:{
          type:Number,
          default:0
        },

      },
    mounted() {
         this.scroll=new BScroll(this.$refs.aaa,
           {
             observeDOM:true,
             click:true,
             probeType:this.number,
              pullUpLoad:true,
             mouseWheel: true,//开启鼠标滚轮
             disableMouse: false,//启用鼠标拖动
             disableTouch: false
             //启用手指触摸  刚开始的时候是pc然后你检查换成手机模式但是已经记录是pc了，
             // 默认pc不能touch move,后面刷新是在手机状态下刷新，检查不出来
           })

       this.scroll.on('scroll',(position)=>{
        this.$emit('showup',position)

       })


       this.scroll.on('pullingUp',()=> {
         this.$emit('loadmore');
         setTimeout(()=>{this.scroll.finishPullUp()
         },2000)
       })
     },
     methods:{
          top(y,time=3000){
            this.scroll.scrollTo(0,y,time)
          },
         refresh(){
            this.scroll.refresh();


         }

      }

    }
</script>

<style scoped>

</style>
