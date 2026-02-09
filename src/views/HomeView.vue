<script setup>
import WeatherCard from '@/components/WeatherCard.vue'

const weatherData = {
  city: 'Phnom Penh',
  temperature: 32,
  condition: 'Sunny',
  windSpeed: '15 km/h',
  sunshineDuration: '10 hours',
  icon: 'https://openweathermap.org/img/wn/01d@2x.png'
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <WeatherCard
      :city="weatherData.city"
      :temperature="weatherData.temperature"
      :condition="weatherData.condition"
      :icon="weatherData.icon"
      :windSpeed="weatherData.windSpeed"
      :sunshineDuration="weatherData.sunshineDuration"
    />
  </div>
</template>
