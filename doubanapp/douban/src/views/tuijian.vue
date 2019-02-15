<template>
  <div class="home">
    
 <swiper></swiper>
 <goods></goods>
<toshopcar></toshopcar>

  </div>
</template>

<script>
// @ is an alias to /src

import swiper from '../components/swiper.vue'
import goods from '../components/good.vue'
import toshopcar from '../components/toshopcar.vue'


export default {
  name: 'home',
  components: {
      swiper,
      goods,
      toshopcar
    }
};
</script>
