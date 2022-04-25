<template>
  <div class="app">
    <MenuSuperior pagina="primeira de todas"/>
  </div>
  <div>
    <MenuLateral/>
    <router-view/>
  </div>
</template>

<script setup>
import MenuLateral from './components/MenuLateral.vue'
import MenuSuperior from './components/MenuSuperior.vue'
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
