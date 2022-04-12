<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <img alt="Dance Dance" src="src/assets/anime-dance.gif"/> 
  </div>
</template>

<style scoped>
#home{
   width: 50%;
   height:100%;
   margin: 0; padding: 0;
   float: left;
   background-color: #ffdab9;
}
</style>
