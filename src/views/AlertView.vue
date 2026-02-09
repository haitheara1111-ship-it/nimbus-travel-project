<script setup>
import Header from '@/components/Header.vue';
</script>
<template>
    <Header />
    <br>
    <br>

<div class="w-full max-w-2xl mx-auto mt-[0] p-6 rounded-2xl bg-white shadow-2xl border border-gray-200 mt-[0px]">
  
  <!-- Header -->
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-3">
      <i class="fa-solid fa-triangle-exclamation text-yellow-500 text-2xl"></i>
      <h2 class="text-xl font-bold text-gray-800">Weather Alert</h2>
    </div>
    <span class="text-sm text-gray-500">Today • Phnom Penh</span>
  </div>

  <!-- Main Info -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div class="p-4 rounded-xl bg-blue-50 text-center">
      <i class="fa-solid fa-cloud-rain text-3xl text-blue-500 mb-2"></i>
      <p class="text-sm text-gray-500">Condition</p>
      <p class="font-semibold text-gray-800">Heavy Rain</p>
    </div>

    <div class="p-4 rounded-xl bg-orange-50 text-center">
      <i class="fa-solid fa-temperature-high text-3xl text-orange-500 mb-2"></i>
      <p class="text-sm text-gray-500">Temperature</p>
      <p class="font-semibold text-gray-800">29°C</p>
    </div>

    <div class="p-4 rounded-xl bg-teal-50 text-center">
      <i class="fa-solid fa-wind text-3xl text-teal-500 mb-2"></i>
      <p class="text-sm text-gray-500">Wind</p>
      <p class="font-semibold text-gray-800">18 km/h</p>
    </div>
  </div>

  <!-- Description -->
  <div class="mb-4 p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-400">
    <p class="text-yellow-800 text-sm leading-relaxed"> 
      Heavy rain is expected throughout the afternoon with possible thunderstorms in the evening.
      Roads may become slippery and visibility could be reduced.
    </p>
  </div>

  <!-- Safety Tips -->
  <div class="mb-5">
    <h3 class="font-semibold text-gray-800 mb-2">Safety Tips</h3>
    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
      <li>Carry an umbrella or raincoat </li>
      <li>Avoid flooded areas </li>
      <li>Drive slowly and keep distance </li>
      <li>Stay updated with local weather news </li>
    </ul>
  </div>

  <!-- Footer Actions -->
  <div class="flex flex-col sm:flex-row gap-3 justify-end">
    <button class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
      Dismiss
    </button>
    <a href="day"><button class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm">
      View 7-Day Forecast
    </button>
    </a>
  </div>

</div>
</template>