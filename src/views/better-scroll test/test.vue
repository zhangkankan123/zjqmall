<template>
  <div>
    <h2>我是购物车</h2>
  <div class="wrapper" ref="aaa" >
    <div class="content">
      <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>

    <li>1</li>
    <li>1</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
 import PullUp  from '@better-scroll/pull-up'
  BScroll.use(PullUp)
    export default {
        name: "shopping",
      data(){
        return {

        }
      },
      mounted() {
          //1不实时侦测划过一定时间后 2滑动过程中实时侦测但是离开后的惯性不侦测 3滚动过程和惯性都侦测
        const bscroll= new BScroll(this.$refs.aaa,{
          //probeType:3
          pullUpLoad:true
        })
        //开始监听滚动位置事件
       // bscroll.on('scroll',(position)=>{
         // console.log(position);})
      //监听上拉加载事件
        bscroll.on('pullingUp',()=>{
          console.log('上拉加载');

          setTimeout(()=>{
          bscroll.finishPullUp()
          },4000)
        }

          )
      }

    }
</script>

<style scoped>
.wrapper{
  height:200px;
  background-color: indianred;


  /*overflow-y: scroll;*/
  /*在这个设置的的高度内保留所有溢出的  自动设置overflow: hidden;可以局部滚动*/
}
</style>
