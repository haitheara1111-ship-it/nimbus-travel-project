<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <div class="text-2xl font-bold text-blue-600">
            <img
      src="@/assets/logo.svg"
      alt="logo"
      class="w-20 h-20 ml-1 "
    />
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6 font-medium">
        <a href="/" class="hover:text-blue-600">Home</a>
        <a href="/about" class="hover:text-blue-600">About Us</a>
        <a href="/contact" class="hover:text-blue-600">Contact Us</a>
      </nav>

      <!-- Mobile Button -->
      <button
        @click="open = !open"
        class="md:hidden focus:outline-none"
      >
        ☰
      </button>

    </div>

    <!-- Mobile Menu -->
    <div v-if="open" class="md:hidden bg-white shadow">
      <nav class="flex flex-col p-4 space-y-3">
        <a href="/" class="hover:text-blue-600">Home</a>
        <a href="/about" class="hover:text-blue-600">About </a>
        <a href="/contact" class="hover:text-blue-600">Contact</a>
      </nav>
    </div>


  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
