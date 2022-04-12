<script setup>
import {ref} from 'vue'

defineProps({
   // titulo: String
})
//import Rotas from 'src\components\Shared\Links\Link.vue'
</script>

<template>
<div id="menu" >
    <ul id="Rotas">
		<li v-for="link in links">
        
            <a >{{ titulo }}</a>
        </li>
	</ul>
</div>
</template>

<style scoped>
#menu{
   width: 30%;
   margin: 0; padding: 0;
   float: left;
   background-color: #ffe4b5;
}
</style>