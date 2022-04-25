<script setup>
import { ref } from 'vue'

defineProps({
 pagina: String
})

const count = ref(0)
</script>

<template>
  <div id="superior">
      <h1>{{ pagina }}</h1>
  </div>

</template>

<style scoped>
#superior{
    
   /* width: 10%;
   height:100%;
   margin: 0; padding: 0;
   float: left; */
   background-color: #98fb98;
}
</style>
