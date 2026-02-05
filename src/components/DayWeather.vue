<script setup>
defineProps({
    day : String,
    mont : String,
    numberOfmont : Number,
    typeWeather : String,
    wind : Number ,
    c : String ,
    time : String,
    humidity: Number, 
    visibility : Number,
    pressure : String, 
})
</script>

<template>
    <div class=" xl:mx-auto lg:w-[850px] bg-white rounded-lg shadow-2xl">
     <details class="group"> 
      <!-- TOP ROW --> 
      <summary class="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
      <!-- LEFT --> 
      <div class="flex items-center gap-10">
        <div>
          <p class="text-blue-700 font-semibold">
            {{ day }} -
          </p> 
          <p class="text-blue-700 font-semibold">
            {{ mont }} {{ numberOfmont }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-cloud text-gray-400 text-3xl">
          </i> 
          <span class="text-lg text-gray-700">
            {{ typeWeather }}
          </span>
        </div>
      </div> 
      <!-- RIGHT -->
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2 text-gray-700">
          <i class="fa-solid fa-wind">
          </i> 
          <span>
            {{ wind }} km/h
          </span>
        </div>
        <div class="text-gray-800 font-medium">
            {{ c }}
        </div>
        <i class="fa-solid fa-chevron-down transition-transform duration-300 group-open:rotate-180">
        </i>
      </div>
    </summary> 
    <!-- DROPDOWN CONTENT -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-5 border-t"> 
    <!-- Sunrise / Sunset --> 
      <div class="flex items-center gap-3"> 
        <i class="fa-solid fa-sun text-gray-600"></i>
          <div> 
            <p class="text-gray-500 text-sm">
              Sunrise/Sunset
            </p> 
            <p class="text-gray-800 font-medium">
                {{ time }}
            </p> 
          </div>
        </div>
        <!-- Humidity -->
      <div class="flex items-center gap-3">
        <i class="fa-solid fa-droplet text-gray-600"></i>
        <div>
          <p class="text-gray-500 text-sm">
            Humidity
          </p> 
          <p class="text-gray-800 font-medium">
            {{ humidity }} %
          </p> 
        </div> 
      </div> 
      <!-- Visibility --> 
      <div class="flex items-center gap-3"> 
        <i class="fa-regular fa-eye text-gray-600"></i> 
        <div>
          <p class="text-gray-500 text-sm">
            Visibility
          </p>
          <p class="text-gray-800 font-medium">
            {{ visibility }} km
          </p> 
        </div> 
      </div> <!-- Pressure --> 
      <div class="flex items-center gap-3"> 
        <i class="fa-solid fa-gauge-high text-gray-600"></i> 
        <div> 
          <p class="text-gray-500 text-sm">
            Pressure
          </p> 
          <p class="text-gray-800 font-medium">
            {{ pressure }}
          </p> 
        </div> 
      </div> 
    </div> 
    </details> 
  </div>

</template>