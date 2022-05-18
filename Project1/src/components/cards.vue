<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <section class="container mx-auto grid gap-3 grid-cols-2 md:flex bg-gray-200 p-8">
    <div class="border-4 border-l-lime-900  rounded-lg bg-white w-96 h-32 ">
      <div class="font-bold px-4 py-4">
        <span>Pendentes</span>
      </div>
      <div class="divide-x-2 flex items-center justify-center border-t-0">
        <div class="flex items-center justify-center w-52">
          <div class="">
            <p>182 </p>
          </div>
          <div class="">
            <p>Intimações</p>
          </div>
        </div>
        <div class="flex items-center justify-center w-52">
          <div class="">
            <p>183 </p>
          </div>
          <div class="">
            <p>Citações</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 30%;
  background-color: rgb(255, 208, 0);
}
</style>
