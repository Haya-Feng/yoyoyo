
<template>
  <div class="home">
   hhhhhhhhhhhhhhhhhhhh
   <button @click="add">添加</button>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name:"info",
  store,
  methods:{
  add(){
  console.log("balalallal")
   store.commit('inc')

  }
  }
}
</script>
