<script setup>
import {ref} from 'vue'

defineProps({
   // titulo: String
})
//import Rotas from 'src\components\Shared\Links\Link.vue'
</script>

<template>
<div id="menu" >
   <div class="menu">
            <router-link class="button" to="/">
                <span class="texto">Painel</span>
            </router-link>
            <router-link class="button" to="/Page1">
                <span class="texto">Processos</span>
            </router-link>
   </div>
</div>
</template>

<style scoped>
#menu{
   width: 30%;
   margin: 0; padding: 0;
   float: left;
   background-color: #ffe4b5;
}
.button {
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   transition: .2s ease-out;
}
</style>