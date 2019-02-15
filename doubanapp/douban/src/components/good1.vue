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
            id: 1005,
            name: '乐高EV3机器人积木玩具',
            price: 3099,
            type: 1,
            stock: 154,
            quantity:1,
            sales: 165,
            img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
        },  {
            id: 1009,
            name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
            price: 89,
            type: 1,
            stock: 36,
            quantity:1,
            sales: 1895,
            img: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
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