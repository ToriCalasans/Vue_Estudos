<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home/Home.vue'
import MenuLateral from './components/MenuLateral/MenuLateral.vue'
import MenuSuperior from './components/MenuSuperior/MenuSuperior.vue'
</script>

<template>
 <MenuSuperior pagina="primeira de todas"/>
 <MenuLateral/>
 <Home msg="Ola meu mundo"/>
</template>

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
