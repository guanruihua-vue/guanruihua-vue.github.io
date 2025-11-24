<script setup lang="ts">
import { openUrl } from '@/assets'
</script>

<template>
  <div class="study-tailwindcss flex flex-col gap-2">
    <h3 @click="() => openUrl('https://tailwindcss.com/docs/installation/using-vite')">tailwindcss</h3>
    <el-button>aaaa</el-button>
    <button class="bg-sky-500 hover:bg-sky-700 p-2 border-hidden rounded-xl">Save changes</button>
  </div>
</template>
