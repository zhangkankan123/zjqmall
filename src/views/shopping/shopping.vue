<template>
<div class="cart">
  <NavBar class="nav-bar">
    <span slot="center">购物车({{cartlength}})</span>
  </NavBar>
  <wrapper class="wrapper" >


<cartlist class="content"></cartlist>

  </wrapper>
  </div>
</template>

<script>
  import  wrapper from "components/common/bscroll/bscroll"

  import NavBar from "components/common/navbar/NavBar";

  import cartlist from "./shoppingchild/cartlist";
  import {mapGetters} from 'vuex'
    export default {
        name: "shopping",
      data(){
        return {

        }
      },
      components:{
          wrapper,
        NavBar,
        cartlist
      },

      computed:{
          ...mapGetters(['cartlength'])
      }

    }
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    background-color: #ff5777;
    color:white;

  }
.wrapper{
  position: absolute;
  top:44px;
  height:calc(100% - 50px);
background-color: ghostwhite;
  overflow:hidden;
  width: 100%;


}
  .content{
    height: 100%;
  }
</style>
