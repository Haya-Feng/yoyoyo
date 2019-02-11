<template>
<div >
  <router-view/>
      <ul class="na">
      <li class="bala">
      <router-link :to="{name:'list'}">List</router-link> 
      </li>
      <li class="bala">
      <router-link :to="{name:'user'}">User</router-link> 
      </li>
      </ul>
      </div>
</template>

<script>
import './main.css'
export default {
};

</script>
<style lang="scss">

.bala{
	text-align:center;
}

</style>
