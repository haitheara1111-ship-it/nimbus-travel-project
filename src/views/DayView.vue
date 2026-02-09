<script setup>
import DayWeather from '@/components/DayWeather.vue'; 
import Header from '@/components/Header.vue';
import { ref } from 'vue';



const provines = [
  'Taakaev',
  'Banteay Mean Chey',
  'Siem Reap',
  'Kampong Chhnang',
  'Preah Sihanouk',
  'Baat Dambang',
  'Kampong Chaam',
  'Otdar Mean Chey',
  'Prey Veaeng',
  'Pousaat',
  'Kampot',
  'Kracheh',
  'Kandaal',
  'Kampong Thum',
  'Kaoh Kong',
  'Phom Phenh'
]

const activeProvine = ref('Phnom Penh')

const tabs = [
  'Today',
  'Hourly',
  'Tomorrow',
  '3 Day',
  '7 Day',
  '10 Day',
  '14 Day',
  '30 Day'
]

const activeTab = ref('Today')
</script> 
<template>
    <Header />
    <div class="xl:ml-[170px] ml-[100px] lg:ml-[100px] mt-[20px] mr-[100px] block lg:mr-[100px] md:mr-[50px] md:ml-[50px]" id="day">
      <div class="flex">
        <h1 class="text-[32px] font-semibold">
          {{ activeProvine}} {{ activeTab }} Weather
        </h1>
      </div><br>

    <!-- buttom for chooose day show about weather it have 8buttom -->

   
    <div class="lg:flex lg:gap-5 md:flex md:gap-2.5">
      <button v-for="item in tabs" :key="item" @click="activeTab = item" :class="[
          'rounded-sm border border-black-100 shadow-lg w-[125px] h-[30px] transition duration-300',
          activeTab === item
            ? 'bg-blue-500 text-cyan-100 underline'
            : 'text-black hover:bg-blue-300 hover:text-cyan-100 hover:underline'
        ]"
      >
      {{ item }}
      </button>
    </div>


    <!-- show tepurater in day it have Lowest, Highest, Highest chance of rain, Precipitation, Humidity, and Sunshine hours -->
    <!--the code in the lelf you can wtire under dis-->



    <div class="xl:flex lg:block bg-black-[#00000] h-[800px] " >

        <div class="block">
            <div class="block">
    <div class="flex mt-[30px] justify-around w-[850px] shadow-2xl h-[170px]">
      
      <!-- Left column -->
      <div class="block">
        <br>
        <p>
          <b>Lowest</b>
          {{ weather.lowest.temp }} °C ({{ weather.lowest.date }})
        </p>
        <br>
        <p>
          <b>Highest</b>
          {{ weather.highest.temp }} °C ({{ weather.highest.date }})
        </p>
        <br>
        <p>
          <b>Highest chance of rain</b>
          {{ weather.rainChance.percent }} % ({{ weather.rainChance.date }})
        </p>
      </div>

      <!-- Right column -->
      <div class="block">
        <br>
        <p>
          <b>Precipitation</b>
          {{ weather.precipitation }}
        </p>
        <br>
        <p>
          <b>Humidity</b>
          {{ weather.humidity }} Average
        </p>
        <br>
        <p>
          <b>Sunshine hours</b>
          {{ weather.sunshine }} Average
        </p>
      </div>

    </div>
  </div>
    <!-- day show a bout weather  -->
  <br>
  <DayWeather day="Mon Day" mont="January" :numberOfmont="22" typeWeather="Overcast" :wind="15" c="21° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Tues Day" mont="January" :numberOfmont="23" typeWeather="Overcast" :wind="20" c="23° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Wentes Day" mont="January" :numberOfmont="24" typeWeather="Overcast" :wind="16" c="24° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Thurs Day" mont="January" :numberOfmont="25" typeWeather="Overcast" :wind="19" c="25° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Frie Day" mont="January" :numberOfmont="26" typeWeather="Overcast" :wind="14" c="26° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Satur Day" mont="January" :numberOfmont="27" typeWeather="Overcast" :wind="12" c="10° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
  <DayWeather day="Sun Day" mont="January" :numberOfmont="28" typeWeather="Overcast" :wind="10" c="18° / 33°" time="23:24 PM / 11:02 AM" :humidity="57" :visibility="24" pressure="1,010 hPa"/>
    
  <!-- provine and city for user can choose -->

  <div class="block mt-[30px] justify-around w-[850px] shadow-2xl h-[340px] text-center pl-[25px] ">
    <h4 class="text-[18px] p-[10px]">
      Other city and provine
    </h4><hr>
    <br>
    <div class="mt-6">
    <!-- Grid of Provinces -->
    <div class="grid grid-cols-3 gap-y-4 gap-x-24 text-center text-blue-400">
      <a
        v-for="city in provines"
        :key="city"
        @click="activeProvine = city"
        class="hover:underline transition duration-300"
        :class="activeProvine === city ? 'font-bold text-blue-600' : ''"
      >
        {{ city }}
      </a>
    </div>

  </div>
  </div>

     <!-- close element block  -->
  </div>


    <!-- this alert about Weather's Phnom phenh -->
     <!-- the alert right you can write the code in the  -->



    <div class="xl:block "> 

        <div class="mt-[30px] ml-[20px] block shadow-2xl w-[270px] mt-[60px] ">

            <h4 class="m-auto text-center text-[18px] p-[10px]">
                Phnom Penh s' weather
            </h4><hr>

            <div class="block">
                <span class="text-[50px] text-center text-blue-400 pt-[5px] pl-[40px] ">
                    <i class="fa-regular fa-cloud">
                    </i>
                    31 °c
                </span>
                <p class="text-[16px] text-center pb-[10px]">It feels like 25 °C</p>
            </div><hr>
            
           <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-solid fa-sun"></i>
                    Sunrise/Sunset
                </p><br>
                <p>
                    23:25 / 11:01
                </p>
            </div><hr>

            <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-solid fa-temperature-arrow-down"></i>
                    Min/Max
                </p><br>
                <p>
                    21 °C / 31 °C
                </p>
            </div><hr>

            <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-solid fa-droplet"></i>
                    Humidity
                </p><br>
                <p>
                    65%
                </p>
            </div><hr>

            <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-regular fa-clock"></i>
                    Pressure
                </p><br>
                <p>
                    1,011 hPa
                </p>
            </div><hr>

            <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-solid fa-eye"></i>
                    Visibility
                </p><br>
                <p>
                    24 km
                </p>
            </div><hr>

            <div class="flex justify-between text-center text-[16px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]">
                <p>
                    <i class="fa-solid fa-wind"></i>
                    Wind
                </p><br>
                <p>
                    14 km/h
                </p>
            </div>
        </div>

    <!-- section about air quality -->

        <div class="mt-[30px] ml-[20px] block shadow-2xl w-[270px] mt-[30px] h-[290px]">
            <h4 class="m-auto text-center text-[18px] p-[10px]">
                Air quality
            </h4>
            <hr><br>
            <div class="rounded-md border-[1px] border-solid-[1px] w-[50px] h-[30px] bg-green-100 border-green-300 ml-[8px] mb-[10px] mr-[8px] mt-[8px] text-[16px]">
                <p class="m-auto text-center text-black-50">
                    good
                </p>
            </div>
            <p class="text-[16px] pt-[2px] pb-[10px] pl-[8px] pr-[8px]">
                Satisfactory air quality, minimal pollution, low risk
            </p>
            <div class=" pb-[10px] pl-[8px] pr-[8px] flex justify-between">
                <p> CO2 0 </p>
                <p> CO 0 </p>
                <p> NH3 0 </p>
            </div>
            <div class=" pb-[10px] pl-[8px] pr-[8px] flex justify-between">
                <p> NO2 0   </p>
                <p> O3 0  </p>
                <p> PM10 0  </p>
            </div>
            <div class=" pb-[10px] pl-[8px] pr-[8px] flex justify-between">
                <p> PM25 0    </p>
                <p> SO2 0   </p>
                <p> CH4 0   </p>
            </div>
        </div>

        <!-- alert about Sunrise / Sunset -->

        <div class="mt-[30px] ml-[20px] block shadow-2xl w-[270px] mt-[30px] h-[120px]">
            <h4 class="m-auto text-center text-[18px] p-[10px]">
                Sunrise / Sunset
            </h4><hr>
            <div class="pb-[20px] pl-[8px] pr-[8px] pt-[20px] flex justify-between">
                <p>
                    <i class="fa-solid fa-sun text-yellow-500"></i>
                    23:24
                </p>
                <p>
                    <i class="fa-solid fa-sun text-yellow-500"></i>
                    11:02
                </p>
            </div>
        </div>

        <!--map show-->

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242985.66671281788!2d104.72503006256734!3d11.57931744297473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1769658656652!5m2!1sen!2skh" width="270px" height="225px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-[30px] ml-[20px] block shadow-2xl w-[270px]"></iframe>

    </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      weather: {
        lowest: {
          temp: 21,
          date: 'January 29'
        },
        highest: {
          temp: 35,
          date: 'February 02'
        },
        rainChance: {
          percent: 7,
          date: 'February 04'
        },
        precipitation: '0 mm',
        humidity: '55.71%',
        sunshine: '10.7 hours'
      }
    }
  }
}

</script>


