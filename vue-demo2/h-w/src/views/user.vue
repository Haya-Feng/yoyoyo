
<template>
  <div class="user">
  <div class="user-wrap">
   <div class="user-logo"></div>
   <div class="u-info"><h1>haya</h1></div>

  <h1>来啦！小老弟~</h1>
  </div>

  </div>
 
</template>

<script>
import store from '@/store.js'
export default {
	name:'user',
	store,
	computed:{
	list(){
	return store.state.list
	}
	}
}

</script>

<style lang="scss" scoped>
.user-wrap{
		margin:170px auto;
      .u-info{
      font-size:15px;
      font-weight:bold;
      padding:15px;
      }
}
.user-logo{
   width:100px;
   height:100px;
   border-radius:50%;
	background-color:#000;

	margin:0 auto;
    
}

</style>