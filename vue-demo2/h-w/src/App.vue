<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">欢迎来到哔哩哔哩</router-link>
      <router-link to="/home"></router-link>
      <router-link to="/info"></router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import './assets/comment.css';
export default{};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
  background:rgba(0,0,0,1);
  font-size:20px;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #fff;

    }
  }
}
</style>
