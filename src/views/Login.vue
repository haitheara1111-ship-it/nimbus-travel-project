<template>
  <Header />
  <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-600">
        Weather App Login
      </h2>
      
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <!-- UPDATED LINK HERE -->
      <p class="mt-4 text-center text-gray-600">
        Don't have an account?
        <RouterLink
          to="/signup"
          class="text-blue-600 hover:underline"
        >
          Sign up
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { isProxy, ref } from 'vue'
import Header from '@/components/Header.vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function login() {
  console.log('Email:', email.value)
  console.log('Password:', password.value)

  alert('Login clicked!')
  router.push('/home')
}
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>