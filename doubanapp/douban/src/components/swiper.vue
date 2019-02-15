<template>
 <div class="swiperr" style="width:375px;">
  <swiper :options="swiperOption">
      <swiper-slide><img src="http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp"></swiper-slide>
      <swiper-slide><img src="https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg"></swiper-slide>
      <swiper-slide><img src="https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg"></swiper-slide>
     
      
    <div class="swiper-button-prev next" slot="button-prev"><p class="bal">◀</p></div>
    <div class="swiper-button-next next" slot="button-next"><p class="bal">▶</p></div>
    
      
    </swiper>
    <!--以下看需要添加-->


 </div>
</template>
 
<script>
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    swiper,
      swiperSlide,
       data(){
    return{
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,


      }
    }
  },
    
}
</script>

<style lang="scss" scoped>
.swiperr{
	 height: 125px;
  width:375px;

  background: #fff;
  
   img{
   height:115px;
   padding:5px;
   width:120px;
   margin: 0 auto;
   }
}
.next{
	height:25px;
	width: 25px;	
	background: #7a45e5;
	border-radius: 50%;
	color:#fff;
	font-size: 28px;
	
}


</style>