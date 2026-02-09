<script setup>
      defineProps({
            Location: String
      })
</script>

<template>
      <div class="h-screen flex items-center justify-center">
            <div class="p-5 rounded-md bg-[#eee] hover:bg-sky-500 hover:text-[#fff]">{{ Location }}</div>
      </div>
</template>
