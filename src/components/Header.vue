<script setup>
  import { RouterLink } from 'vue-router'
  import SearchBar from './SearchBar.vue';
  defineProps({
      login: String
  })
  
</script>

<template>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
      <header class="pl-[100px] pr-[100px] shadow-2xl" >
            <div class="container grid grid-cols-[10%_75%_15%]">
                  <div class="logo flex items-center text-sky-500">
                        <RouterLink to="/">Weather</RouterLink>
                  </div>
                  <nav class="py-10 gap-3 flex items-center justify-center">
                        <RouterLink to="/home" class="hover:bg-sky-500 hover:text-[#fff] px-5 py-3 rounded-full transition duration-150 ease-out focus:text-[#fff]" active-class="bg-sky-500 text-white">Home</RouterLink>
                        <RouterLink to="/day" class="hover:bg-sky-500 hover:text-[#fff] px-5 py-3 rounded-full transition duration-150 ease-out focus:text-[#fff]" active-class="bg-sky-500 text-white">7-Day</RouterLink>
                        <RouterLink to="/alert" class="hover:bg-sky-500 hover:text-[#fff] px-5 py-3 rounded-full transition duration-150 ease-out focus:text-[#fff]" active-class="bg-sky-500 text-white">Alerts</RouterLink>
                        <RouterLink to="/about" class="hover:bg-sky-500 hover:text-[#fff] px-5 py-3 rounded-full transition duration-150 ease-out focus:text-[#fff]" active-class="bg-sky-500 text-white">About</RouterLink>
                        <SearchBar/>
                  </nav>
                  <div class="cta flex gap-3 justify-end">
                        <RouterLink to="/sigin" class="text-[#000] bg-[#eee] hover:bg-[#ddd] px-5 py-3 rounded-full transition duration-150 ease-out self-center">Sign In</RouterLink>
                        <RouterLink to="/login" class="hover:bg-sky-600 bg-sky-500 text-[#fff] transition duration-150 ease-out px-5 py-3 rounded-full self-center">Login</RouterLink>
                  </div>
            </div>
      </header>
</template>