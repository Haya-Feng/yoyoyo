<template>
  <div class="home">
    
 <swiper></swiper>
 <good2></good2>
<toshopcar></toshopcar>
  </div>
</template>

<script>
// @ is an alias to /src

import swiper from '../components/swiper.vue'
import good2 from '../components/good2.vue'
import toshopcar from '../components/toshopcar.vue'

export default {
  name: 'home',
  components: {
      swiper,
      good2,
      toshopcar
     
    }
};
</script>
