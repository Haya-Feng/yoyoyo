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
            id: 1007,
            name: 'Kindle Paperwhite3 黑色经典版电纸书',
            price: 805,
            type: 4,
            stock: 3,
            quantity:1,
            sales: 395,
            img: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
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