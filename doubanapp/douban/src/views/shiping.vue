<template>
  <div class="home">
    
 <swiper></swiper>
 <good3></good3>
<toshopcar></toshopcar>
  </div>
</template>

<script>
// @ is an alias to /src

import swiper from '../components/swiper.vue'
import good3 from '../components/good3.vue'
import toshopcar from '../components/toshopcar.vue'

export default {
  name: 'home',
  components: {
      swiper,
      good3,
      toshopcar
     
    }
};
</script>
