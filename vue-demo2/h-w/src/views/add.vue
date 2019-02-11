
<template>
  <div class="add">
 <div>标题</div>
 <input type="text" v-model="title">
<div>内容</div>
 <input type="text" v-model="content">
 <button @click="add">提交</button>

  </div>
 
</template>

<script>
import store from '@/store.js'
export default {
  name:"add",
  store,
  data(){
   return{
       title:" ",
       content:" "
   }
  },
  methods:{
  add(){
    console.log("jskadhaks")
    store.commit('inc',{
    title:this.title,
    content:this.content
    })
    this.title=" ",
    this.content=" ",
    this.$router.push('/home/list')

  }
  }
}
</script>