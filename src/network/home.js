import {request} from './request'


 export  function getHomeMulitdata()
 {
   return request({
     url:'/home/multidata'
   })
 }


 export  function gethomedata(type,page)
 {
   return request(
     {
       url:'/home/data',
        params:{
         type,
          page
        }
     }
   )
 }


