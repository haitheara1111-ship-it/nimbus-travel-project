<script setup>
defineProps({
  city: String,
  temperature: Number,
  condition: String,
  icon: String,
  windSpeed: Number,
  sunshineDuration: String,
})
</script>

<template>
  <div
    class="w-72 bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center"
  >
    <!-- City -->
    <h2 class="text-2xl font-bold">
      {{ city }}
    </h2>

    <!-- Icon -->
    <img
      :src="icon"
      alt="weather icon"
      class="w-24 mx-auto my-4"
    />

    <!-- Temperature -->
    <p class="text-5xl font-bold">
      {{ temperature }}°C
    </p>
         <p class="text-sm mt-2 text-gray-600">
    Wind Speed: {{ windSpeed }} | Sunshine: {{ sunshineDuration }}
  </p>
  <p class="text-xs mt-1 text-gray-500">
  </p>
    <!-- Condition -->
    <p class="text-lg mt-2">
      {{ condition }}
    </p>
 
  </div>

</template>
  