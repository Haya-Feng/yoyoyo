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
            id: 1001,
            name: 'Beats EP头戴式耳机',
            price: 558,
            type: 4,
            stock: 128,
            quantity:1,
            sales: 1872,
            img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
        }, {
            id: 1002,
            name: '雀巢（Nestle）高钙成人奶粉',
            price: 60,
            type: 3,
            stock: 5,
            quantity:1,
            sales: 2374,
            img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
        }, {
            id: 1003,
            name: '煎炒烹炸一锅多用',
            price: 216,
            type: 5,
            stock: 2,
            quantity:1,
            sales: 351,
            ishot: true,
            img: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        }, {
            id: 1004,
            name: 'ANNE KLEIN 潮流经典美式轻奢',
            price: 585,
            type: 2,
            stock: 465,
            quantity:1,
            sales: 8191,
            img: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        }, {
            id: 1005,
            name: '乐高EV3机器人积木玩具',
            price: 3099,
            type: 1,
            stock: 154,
            quantity:1,
            sales: 165,
            img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
        }, {
            id: 1006,
            name: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
            price: 10967,
            type: 2,
            stock: 12,
            quantity:1,
            sales: 6,
            img: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
        }, {
            id: 1007,
            name: 'Kindle Paperwhite3 黑色经典版电纸书',
            price: 805,
            type: 4,
            stock: 3,
            quantity:1,
            sales: 395,
            img: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
        }, {
            id: 1008,
            name: 'DELSEY 男士双肩背包',
            price: 269,
            type: 2,
            stock: 18,
            sales: 69,
            quantity:1,
            ishot: true,
            img: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
        }, {
            id: 1009,
            name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
            price: 89,
            type: 1,
            stock: 36,
            quantity:1,
            sales: 1895,
            img: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
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
        }, {
            id: 1011,
            name: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
            price: 3580,
            type: 2,
            stock: 5,
            quantity:1,
            sales: 18,
            img: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
        }
  ],
  }
  },
  computed:{
  
   
  },
  
  methods:{
  ...mapState(["lists"]),

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
           state.lists.quantity = {...state.lists.quantity,quantity:alreadyGoods.quantity}
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