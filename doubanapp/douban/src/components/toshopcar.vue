<template>
  <div class="toshopcar" @click="reg">
    购物车
 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'paixun',
 methods:{
 reg(){
  this.$router.push('/shopcar')
 }
 },
};
</script>
<style lang="scss" scoped>
.toshopcar{
  position: fixed;
  right:0;
  bottom:0;
  font-size: 15px;
  font-weight: bold;
  height: 40px;
  width:100%;
  line-height: 40px;
  background: #fff;
    border-radius: 15px;
   padding: 5px;
   
}

</style>