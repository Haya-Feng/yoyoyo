<template>
  <div class="home">
    
 <swiper></swiper>
 <good1></good1>
<toshopcar></toshopcar>
  </div>
</template>

<script>
// @ is an alias to /src

import swiper from '../components/swiper.vue'
import good1 from '../components/good1.vue'
import toshopcar from '../components/toshopcar.vue'

export default {
  name: 'home',
  components: {
      swiper,
      good1,
      toshopcar
     
    }
};
</script>
