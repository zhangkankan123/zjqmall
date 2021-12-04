<template>
  <div id="home">
<!--    &lt;!&ndash;    视差&ndash;&gt;-->
<!--    <newview></newview>-->
<!--    //导航栏-->
    <nav-bar  ref="test" class="home-nav">
     <div slot="center">
      起不来名字
     </div>
    </nav-bar>
    <!--    分类导航-->
    <tabcontrol class="tab-controls" @tabcontrol="control"   ref="tab1"
                :titles="titles" v-show="istabfixed" ></tabcontrol>
<!-- 被封装到滑动里-->
 <scroll class="wrappers" ref="top" :number="3"  @showup="showup"   @loadmore="loadmore">
   <!--  //轮播图-->
   <swiper  :banners="banners"  @swiperitemload="swiperitemload"></swiper>

   <!--推荐-->
   <recommand-view :recommends="recommends"></recommand-view>

   <!--    分类导航-->
   <tabcontrol class="tab-control" @tabcontrol="control"   ref="tab2"
               :titles="titles" ></tabcontrol>
   <!--商品展示-->
   <goodslist :goods="goods[currenttype].list" ></goodslist>
 </scroll>
<!-- 上拉-->
    <totop @click.native="pullup"  v-show="isshow"></totop>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

 import Swiper from "./childcomponents/homeswiper";

 import  RecommandView from './childcomponents/recommandview'

  // import newview from 'components/common/shicha/shicha'

  import tabcontrol from 'components/content/tabcontrol/TabControl'

  import  goodslist from 'components/content/goods/GoodList'

  import scroll from 'components/common/bscroll/bscroll'

  import  totop from 'components/content/totop/totop'

  import {imgloadlistener} from "../../common/mixin";

  import  {getHomeMulitdata} from 'network/home'

  import {gethomedata} from "network/home";

  export default {
      name: "home",
    mixins:[imgloadlistener],
      data() {
        return {
          banners:[],
          recommends:[],
          titles:['首页','最新','推荐'],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
          },
          currenttype:'pop',
          isshow:false,
          offsettop:0,
          istabfixed:false,

        }
      },
      components: {
        NavBar,
       Swiper,
        RecommandView,
        // newview,
        tabcontrol,
        goodslist,
        scroll,
       totop
      },
      created() {
        //1.请求banner、轮播图数据
        this.getHomeMulitdata();
     //2.请求商品
        this.gethomedata('pop');


      },

    methods: //一般写具体内容
      {
        //1.第一个函数
        getHomeMulitdata(){
        getHomeMulitdata().then(res => {


          this.banners = res.data.banner.list;
          //console.log(this.banners);
          this.recommends=res.data.recommend.list;
          //因为每一个函数被压到函数栈执行完后便会将变量清理对象回收，
          // 在这之前我们用一个一直存在的result也指向这个对象内存，当res消亡，
          //由于还有指针即result指向之前的res指向的内存，所以不会回收内存块

        })},
        //2.goods的函数
        gethomedata(type)
        {
          const page=this.goods[type].page+1; //动态改变页数page 在当前已实现的页数上加一
          gethomedata(type,page).then(res=>{

            for(let n of res.data.list) //用of拿到对象
            {


              this.goods[type].list.push(n)
            }
            this.goods[type].page+=1;//当前实现页数


            //this.goods[type].list.push(...res.data.list);
            // 这个也可以前面三个点表示任意的数据都可以 可以一次push多个 不限数量
          })
        },

        // 下面为tabcontrol换页面
         control(index){

         switch(index){
           case 0:
             this.currenttype='pop'
             break
           case 1:
             this.currenttype='new'
             break
           case 2:
             this.currenttype='sell'
             break
         }
           this.gethomedata(this.currenttype);

         this.$refs.tab1.currentindex=index
           this.$refs.tab2.currentindex=index
         }
         ,
         //回到最上面的定位
        pullup()
        {
          this.$refs.top.top(0,2000)
        },
        //这是显示backtop上顶图标与否 然后还有tabcontrol利用这个混动记录高度经行比较决定是否为fixed
        showup(position){

           this.isshow  =  -(position.y)>1000

          //是否吸顶
          this.istabfixed=-(position.y)>this.offsettop
        },
        // 上拉加载更多
        loadmore(){
          this.gethomedata(this.currenttype);



        },

        //只发射一次拿到offsettop
        swiperitemload(){
          //对于拿到tabcontrol的offsettop 所有组件都属性叫$el
        this.offsettop=this.$refs.tab2.$el.offsetTop



        },


      },

    deactivated() {
        this.$bus.$off('imgload',this.refreshfn)
    }
  }
</script>

<style scoped>
.home-nav{
  background-color:var(--color-tint);
  color:white;


  /*position:fixed;!* 脱离文档流需要z-index放在最上边*!*/
  /*left:0;*/
  /*right:0;*/
  /*top:0;*/
  /*z-index: 3;*/


}
  #home{
 height: 100vh;
    position: relative;
    /*由于navbar脱离文档流 所以现在轮播图排第一 */
    /*需要设置整个页面的padding-top为navbar的高度*/
  }
  .tab-controls{
    /*position: sticky;*/
    /*top:44px;*/
    /*z-index: 22;*/
    /*!*当这个控件到距离top46的时候就会变成fixed*!*/

    /*下面的设置对于wrapper里面的tabcontrol没有用，所以是对外面的设置的*/
    position:relative;
   margin-top:0;
    left:0;
    rigth:0;
    z-index:3333;



  }
  .wrappers{
    /*height:calc(100% - 93px);*/
    /*margin-top: 44px;*/
    position: absolute;
    top:44px;
    bottom: 49px;

    overflow: hidden;


  }


</style>
