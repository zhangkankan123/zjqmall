import {request} from './request'


export  function getdetail(iid)
{
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend',

  })
}

export class firstitem{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newprice=itemInfo.price;
    this.oldprice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columnes=columns;
    this.services=services;
    this.realprice=itemInfo.lowNowPrice;
    this.color=itemInfo.discountBgColor;
  }
}

export class shopitem{
  constructor(shopinfo) {
    this.name=shopinfo.name;
    this.logo=shopinfo.shopLogo;
    this.shopurl=shopinfo.shopUrl;
    this.score=shopinfo.score;
    this.goods=shopinfo.cGoods;
    this.sell=shopinfo.cSells;

  }
}

export class select {
  constructor(skuInfo) {
    this.styles=skuInfo.props[0].list
    this.size=skuInfo.props[1].list
    this.price=skuInfo.skus

  }

}
