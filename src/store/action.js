export default {
  addinto(context,payload){
    let test=[]
  let flag=0;
    if(context.state.cart.length===0){context.state.cart.push(payload)}
    else{
      for(let item of context.state.cart)
      {
        if(payload.id!=item.id)
        {flag=1;}
        if(payload.id==item.id)
        {
          test.push(item)

        }

      }
    }
   if(flag){context.commit('unsameadd',payload)}

    let sizesamecolordi=test.find(function(item){return item.size===payload.size&&item.color!=payload.color})
    if(sizesamecolordi){context.commit('sizesnamecoiordi',payload)}

    let colorsamesizedi=test.find(function(item){return item.size!==payload.size&&item.color===payload.color})
    if(colorsamesizedi){context.commit('colorsamesizeid',payload)}

    let numberdi=test.find(function(item){return item.size===payload.size&&item.color===payload.color})
    if(numberdi){numberdi.number=payload.number}




    console.log(this.state.cart);

  }


}
