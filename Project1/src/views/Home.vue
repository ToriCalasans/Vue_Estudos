<script setup>
import { ref } from 'vue'
import Cards from '../components/cards.vue';
import Dashbord from '../components/Dashbord.vue';

defineProps({
  msg: String
})

</script>

<template>
  <div  class="grid grid-cols-1 md:container md:mx-auto">
    <Dashbord>
      
    </Dashbord>
   
  </div>
  
</template>
 <!--    <img alt="Dance Dance" src="src/assets/anime-dance.gif"/> -->
 <!-- -->
<style scoped>

</style>
