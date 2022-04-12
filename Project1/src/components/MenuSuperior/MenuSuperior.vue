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
<!--
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
-->
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
