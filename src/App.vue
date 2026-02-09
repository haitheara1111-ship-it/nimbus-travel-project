<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- <h1 class="text-3xl font-bold underline bg-blue-500">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
   <Header />
   <HomeView />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
