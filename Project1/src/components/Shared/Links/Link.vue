<script setup>
import { ref } from 'vue'
import MenuLateral from 'src\views\Pagina1.vue'

defineProps({
 
})

const rotas ={
    {path: '/', name:'Home', component:Home},
    {path: '/pagina1', name: 'Pagina1', component: ()=>import('src\Views')},
    {path: '/pagina1', name: 'Pagina1', component: ()=>import('src\Views')},

}

const rota = createRouter({
    history: createWebHistory(),
    rotas
})
export default rota
</script>
