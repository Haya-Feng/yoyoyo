<template>
  <div class="paixun">
    <ul class="filter-bar">
                    <li class="filter-opt" v-for="(item, index) in sortMethods" >
                    {{ item.name }}</li>
                </ul>
 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'paixun',
  data(){
  return{
  sortMethods:[
  {name: '综合排序', method: 'setList'},
  { name: '销量优先', method: 'sortSales' },
  { name: '价格', method: 'sortPrice' }
  ],
  }
  },
};
</script>
<style lang="scss" scoped>
.filter-bar{
	display: flex;
	justify-content: space-around;
	font-size: 15px;
	font-weight: bold;
	height: 40px;
	line-height: 40px;
	background: #fff;

   
}
.filter-active {
    color: #7B57C5;
}

</style>