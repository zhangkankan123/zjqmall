<template>
<div id="detail">
 <detailnavbar id="nav-bar" @itemindex="getindex" ref="navbar"></detailnavbar>
  <wrapper id="wrapper" ref="top" @showup="picbar" :number="3">
    <!--  轮播图-->
    <detailswiper :images="toppic" ></detailswiper>
    <!--  商品价格服务-->
    <detailitem :pricetitle="firstdetail" ></detailitem>
    <!--商家-->
    <shop :shopitem="shopdetail"></shop>
<!--    客户评价-->
    <commentdetail ref="comment" :comment="commentdetail" ></commentdetail>
<!--模特图片-->
  <detailpics :needpic="pcics" @modelimages="loadmodelimg"  ref="modelpic"></detailpics>
<!--    推荐展示-->
    <goodslist ref="aaa" :goods="recommend"></goodslist>
  </wrapper>

  <bottombar @addshopping="addcart"></bottombar>
  <selection :content="selectitem" v-show="isbuy" @shutdown="shutdown" :name="this.firstdetail.title" :id="iid"></selection>
</div>
</template>

<script>
  import  detailnavbar from './detailchild/detailnavbar'
 import detailswiper from "./detailchild/detailswiper/detailswiper"
  import detailitem from "./detailchild/detailitem"
  import  shop from "./detailchild/shop"
  import commentdetail from "./detailchild/commentdetail";
  import detailpics from "./detailchild/detailpics";
  import  goodslist from 'components/content/goods/GoodList'
  import bottombar from "./detailchild/bottombar";
  import selection from "components/content/select/selection"
  import {imgloadlistener} from "../../common/mixin";
  import  wrapper from "components/common/bscroll/bscroll"
  import {getdetail,firstitem,shopitem,getRecommend,select} from 'network/detail'
  import {debounce} from "../../common/utils";
    export default {
        name: "Detail",
      mixins:[imgloadlistener],
      data(){
          return{iid:null,
              toppic:[],
             firstdetail:{},
            shopdetail:{},
            commentdetail:[],
            pcics:[],
            recommend:[],
            indexpositon:[],
            getthemeY:null,
            selectitem:{},
            isbuy:false

          }

      },

      components:{
        detailnavbar,
        detailswiper,
        detailitem,
        shop,
        wrapper,
        commentdetail,
        detailpics,
        goodslist,
        bottombar,
        selection

      },

      created() {

        this.iid=this.$route.query.id

        getRecommend().then(res=>{
          this.recommend=res.data.list
        })
        getdetail(this.iid).then(res=>{


            //console.log(res);

            this.toppic=res.result.itemInfo.topImages;

            this.firstdetail=new firstitem(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)

            this.shopdetail=new shopitem(res.result.shopInfo);

            this.commentdetail=res.result.rate

            this.pcics=res.result.detailInfo.detailImage[0].list

             this.selectitem=new select(res.result.skuInfo)

          }

        )

        this.getthemeY= debounce( ()=>{
            this.indexpositon=[]
            this.indexpositon.push(0)
            this.indexpositon.push(-(this.$refs.comment.$el.offsetTop))

            this.indexpositon.push(-(this.$refs.modelpic.$el.offsetTop))
            this.indexpositon.push(-(this.$refs.aaa.$el.offsetTop))
            //console.log(this.indexpositon);
          }
          ,2000)

      },

      destroyed() {
        this.$bus.$off('imgload',this.refreshfn)
      },
      methods:{
          loadmodelimg(){
            this.refresh();



           this.getthemeY()


          },

        getindex(index){
          if(index==0){this.$refs.top.top(this.indexpositon[0],2000)}
         if(index==1){this.$refs.top.top(this.indexpositon[1],2000)}
          if(index==2){this.$refs.top.top(this.indexpositon[2],2000)}
          if(index==3){this.$refs.top.top(this.indexpositon[3],2000)}
        },

        picbar(position){
           if(position.y-3 >this.indexpositon[1])
           {
             this.$refs.navbar.currentindex=0
           }
          if(position.y-3 < this.indexpositon[1])
          {
            this.$refs.navbar.currentindex=1
          }

          if(position.y-3 <this.indexpositon[2])
          {this.$refs.navbar.currentindex=2
          }
          if(position.y-3<this.indexpositon[3])
          {this.$refs.navbar.currentindex=3
          }
        },
        addcart(){
          this.isbuy=true
        },
        shutdown(){
          this.isbuy=false
        }

      },


    }
</script>

<style scoped>
#detail{
  height:100vh;
  position: relative;
  z-index: 66666;
  background-color: white;
}
#nav-bar{
background-color: white;
}
  #wrapper{
  position: absolute;
    top:50px;
   bottom: 55px;
    overflow: hidden;
  }

</style>
