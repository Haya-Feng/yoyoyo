<template>
  <div class="paixun">
    <ul class="filter-bar">
                    <li class="filter-opt goods-item" v-for="(item, index) in goods" >

                     <div class="goods-img">
                            <img v-bind:src="item.img" v-bind:alt="item.name">
                            <div class="flag" v-if="item.ishot">热</div>        
                        </div>
                        <div class="goods-info">
                            <p class="goods-title">{{ item.name }}</p>
                            <div class="goods-price">
                                <span>¥<b>{{ item.price }}</b></span>
                            </div>
                            <span class="des">{{ item.sales }}人付款</span>
                            <span class="save" @click="addToCart(item)">+</span>
                        </div>


                    </li>

                </ul>
 
  </div>
</template>

<script>
// @ is an alias to /src
import store from '../store.js'
import { mapState } from 'vuex'
export default {
  name: 'paixun',
  store,
  data(){
  return{
  goods:[
 {
            id: 1002,
            name: '雀巢（Nestle）高钙成人奶粉',
            price: 60,
            type: 3,
            stock: 5,
            quantity:1,
            sales: 2374,
            img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
        }, {
            id: 1010,
            name: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
            price: 19.9,
            type: 3,
            stock: 353,
            quantity:1,
            sales: 3041,
            ishot: true,
            img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
        }
  ],
  }
  },
  computed:{
  ...mapState(["lists"]),
  },
  methods:{
addToCart(goods){
              var alreadyIndex = this.lists.findIndex(function (item, index) {
                return item.id === goods.id;
            });

           if (alreadyIndex === -1) {
                store.commit('additem',goods)
                }
          var alreadyGoods = this.lists[alreadyIndex];
          if(alreadyGoods.quantity < alreadyGoods.stock){
           ++alreadyGoods.quantity
           store.commit('additem',
           quantity
           )
          }
                    
            }

  

  }
};
</script>
<style lang="scss" scoped>
.filter-bar{
	 padding-top: 8px;
    
    overflow-y: scroll;
   
}
.goods-item {
    display: flex;
    margin-bottom: 8px;
    padding: 10px 6px;
    min-height: 62px;
    background: #fff;
}
.goods-img {
    position: relative;
    margin-right: 4%;
    display: block;
    width: 16%;
 img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
}
.goods-item .flag {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
    text-align:left;
}

.goods-title {
    width: 80%;
    height: 38px;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 15px;
    display:block;
    text-align:left;

}

.goods-price {
    margin-top: 6px;
    line-height: 1;
    text-align:left;
}

.goods-price span {
    font-size: 15px;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
.save {
    position: absolute;
    right: 10px;
    bottom: 2px;
    width: 32px;
    height: 22px;
    background-color: #7a45e5;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    border-radius: 12px;}
    .des{
    text-align:left;
    }


</style>