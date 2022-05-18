<script setup>
import { ref } from 'vue'
import Cards from '../components/cards.vue';

defineProps({
  msg: String
})
 
</script>

<template>
  <div class="dashbord md:container md:mx-auto min-h-full">
        
        <span class="text-xs">Tori esteve aqui</span>  
        <fa icon="music"></fa> 

        <cards>
        
        </cards>
  </div>
</template>

<style scoped>
.dashbord{
    /*width: 90%; */
  
    background-color: aqua;

}
</style>