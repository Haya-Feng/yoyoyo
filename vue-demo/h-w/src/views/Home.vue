<template>
<div>
  <router-view/>
  
      <router-link :to="{name:'user'}">个人中心</router-link> |
      <router-link :to="{name:'list'}">新闻列表</router-link> 
      </div>
</template>

<script>


</script>
