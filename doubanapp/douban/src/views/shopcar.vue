<template>
  <div class="shopcar">
    <div class="device" id="page-cart">
            
            <div class="page">
                <div class="empty-states" v-if="lists.length === 0">
                    <span>这里是空的，快去逛逛吧</span>    
                </div>
                <ul class="goods-list cart-list" v-else>
                    
                    <li class="goods-item" v-for="(item,index) in lists" >
                        <div class="item-selector" >
                            <div class="icon-selector" :class="{'selector-active': selectflag}" @click="selectf">
                                <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                                    <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                        fill="#ffffff" p-id="2923"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="goods-img">
                           <img v-bind:src="item.img" v-bind:alt="item.name">
                        </div>
                        <div class="goods-info">
                            <p class="goods-title">{{item.name}}</p>
                            <div class="goods-price">
                                <span>¥<b>{{ item.price }}</b></span>
                            </div>
                            <span class="des">库存{{ item.stock }}件</span>
                            {{item.tol}}
                            <div class="goods-num">
                                <div class="num-btn" @click="addquantity(index)">+</div>
                                <div class="show-num">{{item.quantity}}</div>
                                <div class="num-btn" @click="redquantity(index)">-</div>
                            </div>
                        </div>
                    </li>
                </ul>
                    
            </div>
            <div class="action-bar" >
                <!-- del-box -->
                <div class="g-selector" @click="checkall">
                    <div class="item-selector">
                        <div class="icon-selector" :class="{'selector-active': checkAllFlag}">
                                <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                                    <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                        fill="#ffffff" p-id="2923"></path>
                                </svg>
                            </div>
                    </div>

                    <span class="totalc">全选</span>
                </div>
                <div class="action-btn buy-btn">去结算</div>
                <div class="action-btn del-btn">删除()</div>
                <div class="total">合计：<span>¥<b>{{totalPrice}}</b></span></div>
            </div>
        </div>
 
  </div>
</template>

<script>
// @ is an alias to /src
import store from '../store.js'
import { mapState } from 'vuex'
export default {
  name: 'shopcar',
  store,
  data(){
    return{
    checkAllFlag: true,
    selectflag:true
    }
  },
  computed:{
  ...mapState(["lists"]),
  totalPrice() {
          if(this.checkAllFlag){
            var num = 0;
            this.lists.forEach(function (item) {
            console.log(item)
                num += parseFloat(item.quantity*item.price);
            });
            return num;}else{
            return 0
            }
        }
   
  },
  methods:{
  selectf(){
  this.selectflag=!this.selectflag
  },
  checkall(){
  this.checkAllFlag=!this.checkAllFlag
  this.selectflag=!this.selectflag

  },
  
  addquantity(index){
  if(this.lists[index].quantity < this.lists[index].stock){
  this.lists[index].quantity++
  this.lists[index].tol=this.lists[index].quantity*this.lists[index].price
  }else{
  alert('超出库存')
  }
  },
  redquantity(index){
  if(this.lists[index].quantity > 1){
  this.lists[index].quantity--
  this.lists[index].tol=this.lists[index].quantity*this.lists[index].price
  }else{
  this.lists.splice(index, 1)
  }
  },
  
  },
};
</script>
<style lang="scss" scoped>

.goods-list {
    padding-top: 8px;
    height: 513px;
    overflow-y: scroll;
}

.cart-list {
    height: 560px;
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
}

.goods-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
    text-align: left;
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
    text-align: left;
}

.goods-price {
    margin-top: 6px;
    line-height: 1;
    text-align: left;
}

.goods-price span {
    text-align: left;
    font-size: 15px;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    text-align: left;
    font-size: 12px;
    color: #888;
}
.totalc{
	padding-top: 3px;
}
.save {
    position: absolute;
    right: 10px;
    bottom: 2px;
    width: 32px;
    height: 22px;
    background-color: #7a45e5;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.empty-states {
    padding-top: 60px;
    font-size: 18px;
    color: #AEB0B7;
    text-align: center;
}

.cart-list .goods-info {
    width: 68%;
}

.item-selector {
    width: 12%;
}

.icon-selector {
    position: relative;
    margin: 16px auto 0 auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}

.selector-active {
    background-color: #7a45e5;
    border-color: #7a45e5;
}

.selector-active .icon {
    position: absolute;
    top: 2px;
    left: 2px;
}

.goods-num {
    position: absolute;
    right: 10px;
    top: 4px;
    width: 32px;
    color: #999;
    text-align: center;
}

.show-num {
    line-height: 28px;
}

.num-btn {
    width: 100%;
    height: 24px;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
}

.action-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    font-size: 15px;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.g-selector {
    float: left;
    width: 70px;
    margin-left: 4%;
    height: 52px;
    cursor: pointer;
}

.g-selector .item-selector {
    position: relative;
    display: inline-block;
}

.g-selector span {
    position: absolute;
    margin-left: 20px;
    color: #5F646E;
    top: 15px;
}

.total {
    float: right;
    color: #363636;
    font-size: 14px;
    line-height: 50px;
    margin-right: 20px;
}

.total span {
    color: #7A45E5;
}

.total b {
    font-size: 17px;
    margin-left: 4px;
}

.action-btn {
    float: right;
    width: 120px;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 300;
    line-height: 52px;
    cursor: pointer;
}

.buy-btn {
    background-color: #7A45E5;
}

.del-btn {
    display: none;
    background-color: #FF4069;
}

.del-box .total {
    display: none;
}

.del-box .buy-btn {
    display: none;
}

.del-box .del-btn {
    display: block;
}
</style>