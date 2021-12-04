import {debounce} from "./utils"
export const imgloadlistener={
  data(){
    return {
      refreshfn:null,
      refresh:null,


    }
  },

  mounted(){

    this.refresh=debounce(this.$refs.top.refresh,2000)
    this.refreshfn=()=>{this.refresh()}
    this.$bus.$on('imgload',this.refreshfn)

  }
}
