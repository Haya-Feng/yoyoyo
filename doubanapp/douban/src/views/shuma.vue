<template>
  <div class="home">
    
 <swiper></swiper>
 <good4></good4>
<toshopcar></toshopcar>
  </div>
</template>

<script>
// @ is an alias to /src

import swiper from '../components/swiper.vue'
import good4 from '../components/good4.vue'
import toshopcar from '../components/toshopcar.vue'

export default {
  name: 'home',
  components: {
      swiper,
      good4,
      toshopcar
     
    }
};
</script>
