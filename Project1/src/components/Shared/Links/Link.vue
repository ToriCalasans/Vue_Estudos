<script setup>
import { ref } from 'vue'

defineProps({
 
})

const Rotas ={
    data(){
        return{
            links:[
                {titulo:"Página 1", endereco:"google.com.br"},
                {titulo:"Página 2", endereco:"google.com.br"}
                ]
        }
    }
}

Vue.createApp(Rotas).mount('#Rotas')
</script>
