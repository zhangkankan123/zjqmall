<template>
  <div v-show="Object.keys(comment).length!==0" class="comments">

    <div class="header">
      <span>用户评价</span>
    </div>


  <div v-if="comment.cRate>0">
    <div class="clientinfo">
    <img :src="comment.list[0].user.avatar" alt="">
      <span >{{comment.list[0].user.uname}}</span>
  </div>

    <div class="content">
      <p>{{comment.list[0].content}}</p>
      <div class="time">
        <span class="times">{{comment.list[0].created | showdate}}</span>
        <span class="style">{{comment.list[0].style}}</span>
      </div>
    </div>

    <div class="clientpic" >

      <img :src="item" alt="" v-for="item in comment.list[0].images" >
    </div>
  </div>

    <div v-else>
      <div class="else" >此商品当前暂无评价信息</div>
    </div>

  </div>
</template>

<script>
  import {formatDate} from "common/utils.js"
    export default {
        name: "commentdetail",
      filters:{
        showdate(value)
        {
          const date=new Date(value*1000)

          return formatDate(date,'yyyy-MM-dd hh:mm')
        }

      },
      props:{
          comment:{
            type:[]
          }
      },

    }
</script>

<style scoped>
  .comments{
    padding-bottom: 15px;
    box-shadow:0 2px 3px  #b0b0b0 ;
  }
.header{
  padding-top: 20px;
  font-size: larger;
  padding-left: 5px;
}

  .clientinfo{
  padding-left: 10px;
    padding-top: 5px;
  }
  .clientinfo img{
    border-radius: 50px;
    width:50px;

  }
  .clientinfo span{

    position: relative;
    top:-21px;
    left:8px;
    font-size: large;

  }
  .content{
    padding-left: 8px;
    padding-right: 8px;
  }
  .time{
    padding-top: 8px;
    color: #b0b0b0;

  }
  .style{
    margin-left: 10px;

  }
  .clientpic{
    padding-left: 10px;
    padding-top: 10px;
  }

  .clientpic img{
    width:100px;
    height: 100px;
    object-fit: contain;
  }
  .else{
    padding-top: 20px;
  }

</style>
