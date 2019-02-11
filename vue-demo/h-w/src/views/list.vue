

<template>
  <div class="li">
  <ul>
   <li v-for="(item,index) in list" :key="index">
    {{item.title}}    {{item.content}}

   </li>
  </ul>


  </div>
 
</template>

<script>
import store from '@/store.js'
export default {
	name:'list',
	store,
	computed:{
	list(){
	return store.state.list
	}
	}

}

</script>