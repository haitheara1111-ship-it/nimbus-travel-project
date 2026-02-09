<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/components/Header.vue';

// 1. Reactive State
const currentTime = ref('');
const weather = ref(null);
const hourlyForecast = ref([]);
let timer;

// 2. Map Open-Meteo codes to FontAwesome icons and Text
const getWeatherDetails = (code) => {
  if (code === 0) return { icon: 'fa-sun', text: 'Clear Sky' };
  if (code <= 3) return { icon: 'fa-cloud-sun', text: 'Partly Cloudy' };
  if (code >= 51 && code <= 67) return { icon: 'fa-cloud-showers-heavy', text: 'Rainy' };
  if (code >= 71 && code <= 77) return { icon: 'fa-snowflake', text: 'Snowy' };
  return { icon: 'fa-cloud', text: 'Cloudy' };
};

// 3. Logic to update the clock
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
};

// 4. Logic to fetch Weather
const fetchWeather = async () => {
  try {
    // Added extra parameters for humidity, visibility, and hourly data
    const url = "https://api.open-meteo.com/v1/forecast?latitude=11.55&longitude=104.91&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility&hourly=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&forecast_days=1";
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Set Current Weather
    weather.value = data.current;

    // Set Hourly Forecast (next 4 hours)
    const currentHour = new Date().getHours();
    hourlyForecast.value = [1, 2, 3, 4].map(offset => {
      const index = currentHour + offset;
      const details = getWeatherDetails(data.hourly.weather_code[index]);
      return {
        time: `${index % 24}:00`,
        temp: Math.round(data.hourly.temperature_2m[index]),
        wind: Math.round(data.hourly.wind_speed_10m[index]),
        humidity: data.hourly.relative_humidity_2m[index],
        icon: details.icon,
        condition: details.text
      };
    });
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
  fetchWeather();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
    <Header />
  <div class="bg-[#fff] min-h-screen pl-[50px] pr-[50px]">
    <div class="container mx-auto h-full pt-5 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-[54%_44%] justify-between gap-6 overflow-hidden">
        
        <div class="flex flex-col gap-5">
          <div class="current-weather bg-[#eee] rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between text-[#777] mb-4">
              <p class="font-medium">Current Weather</p>
              <p class="text-sm">Celsius <i class="fas fa-chevron-down text-sky-500 ml-1"></i></p>
            </div>
            <div class="text-sky-500 font-bold text-2xl mb-2">
              {{ currentTime }}
            </div>
            <div class="py-4 flex items-center gap-6">
              <i v-if="weather" :class="['fa-solid', getWeatherDetails(weather.weather_code).icon, 'text-sky-500 text-6xl']"></i>
              <div v-if="weather">
                <h2 class="text-5xl font-bold text-slate-800">{{ Math.round(weather.temperature_2m) }}°C</h2>
                <p class="text-lg text-slate-500 font-medium">{{ getWeatherDetails(weather.weather_code).text }}</p>
              </div>
            </div>
            <div class="mt-4 text-[#777] border-t border-slate-200 pt-4">
              <p v-if="weather">Feels like {{ Math.round(weather.apparent_temperature) }}°C. Today's conditions are {{ getWeatherDetails(weather.weather_code).text.toLowerCase() }}.</p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-5">
            <div class="flex bg-[#eee] rounded-xl p-5 gap-4 items-start shadow-sm">
              <i class="fa-solid fa-wind text-sky-500 text-xl"></i>
              <div class="flex flex-col">
                <span class="text-sm text-slate-500">Wind</span>
                <h2 class="font-bold text-xl">{{ weather?.wind_speed_10m || '--' }} <span class="text-xs">km/h</span></h2>
              </div>
            </div>
            <div class="flex bg-[#eee] rounded-xl p-5 gap-4 items-start shadow-sm">
              <i class="fa-solid fa-droplet text-sky-500 text-xl"></i>
              <div class="flex flex-col">
                <span class="text-sm text-slate-500">Humidity</span>
                <h2 class="font-bold text-xl">{{ weather?.relative_humidity_2m || '--' }}%</h2>
              </div>
            </div>
            <div class="flex bg-[#eee] rounded-xl p-5 gap-4 items-start shadow-sm">
              <i class="fa-solid fa-eye text-sky-500 text-xl"></i>
              <div class="flex flex-col">
                <span class="text-sm text-slate-500">Visibility</span>
                <h2 class="font-bold text-xl">{{ (weather?.visibility / 1000).toFixed(1) || '--' }} <span class="text-xs">km</span></h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-5">
          

          <div class="flex flex-col justify-between h-full">
            <div 
              v-for="(item, index) in hourlyForecast" 
              :key="index"
              class="flex items-center justify-between p-5 rounded-2xl bg-[#eee]"
            >
              <div class="flex items-center gap-5">
                <i :class="['fa-solid', item.icon, 'text-sky-500 text-3xl w-10 text-center']"></i>
                <div>
                  <h3 class="font-bold text-slate-800">{{ item.time }}</h3>
                  <p class="text-xs text-[#999] font-medium uppercase">{{ item.condition }} • {{ item.temp }}°C</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-[10px] uppercase font-bold text-[#999]">Wind: <span class="text-slate-800">{{ item.wind }}km/h</span></p>
                <p class="text-[10px] uppercase font-bold text-[#999]">Hum: <span class="text-slate-800">{{ item.humidity }}%</span></p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>