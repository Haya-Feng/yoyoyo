<template>
  <div id="app">
  <div id="pannel">
     <header><span class="header-title">D&B商城</span></header>
     </div>
     
    <div id="nav">
      <router-link to="/">推荐</router-link>
      <router-link to="/muying">母婴</router-link>
      <router-link to="/shiping">食品</router-link>
      <router-link to="/shuma">数码</router-link>
      <router-link to="/xiebaoshipin">鞋包饰品</router-link>
    </div>
     
    <router-view/>
  </div>
</template>

<script>
import './assets/comment.css'
export default {
  name: 'app',
 
  
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 45px;
  display:flex;
  justify-content: space-around;
  white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #5D4285;
  a {
    font-weight: bold;
    font-size:15px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    &.router-link-exact-active {
      color: #9A51FF;

    }
  }
}
header {
    padding: 0 5%;
    
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    font-size:20px;
}
body{
  background: #eee;

}

</style>
