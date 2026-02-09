<template>
  <div class="min-h-screen bg-sky-100 flex items-center justify-center px-4">

    <div class="max-w-4xl bg-white rounded-2xl shadow-lg p-8">

      <!-- Title -->
      <h1 class="text-4xl font-bold text-sky-600 text-center mb-6">
        About Weather App
      </h1>

      <!-- Description -->
      <p class="text-gray-700 text-lg text-center mb-8">
        Weather App is a simple web application built to help users
        view weather information in a clean and easy-to-use interface.
      </p>

      <!-- Sections -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Feature -->
        <div class="border rounded-xl p-5">
          <h2 class="text-xl font-semibold text-sky-500 mb-2">
            🌦️ Weather Information
          </h2>
          <p class="text-gray-600">
            Display temperature, weather condition, humidity,
            and wind speed for different cities.
          </p>
        </div>

        <!-- Search -->
        <div class="border rounded-xl p-5">
          <h2 class="text-xl font-semibold text-sky-500 mb-2">
            🔍 City Search
          </h2>
          <p class="text-gray-600">
            Search weather data by entering the city name.
          </p>
        </div>

        <!-- Responsive -->
        <div class="border rounded-xl p-5">
          <h2 class="text-xl font-semibold text-sky-500 mb-2">
            📱 Responsive Design
          </h2>
          <p class="text-gray-600">
            Works smoothly on mobile, tablet, and desktop devices.
          </p>
        </div>

        <!-- Technology -->
        <div class="border rounded-xl p-5">
          <h2 class="text-xl font-semibold text-sky-500 mb-2">
            ⚡ Built With
          </h2>
          <p class="text-gray-600">
            Vue 3, Vite, and Tailwind CSS are used to create
            a fast and modern user interface.
          </p>
        </div>

      </div>

      <!-- Footer -->
      <div class="mt-10 text-center text-gray-500 text-sm">
        © 2026 Weather App • Educational Project
      </div>

    </div>

  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
