<script setup lang="ts">
import Routes from '@/routes'
import './index.css'
import { ref } from 'vue'
const fold = ref(false)
</script>

<template>
  <div class="main-layout" :class="{ fold }">
    <div class="main-layout-header">
      <div class="main-layout-header-left">
        <svg
          class="main-layout-header-left-fold-icon"
          :class="{ fold }"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          @click="fold = !fold">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M19 5h-14" />
            <path d="M19 12h-9" />
            <path d="M19 19h-14" />
            <path d="M7 9l-3 3l3 3" />
          </g>
        </svg>
        <h3 class="main-layout-header-title">{{ $route.name === 'index' ? '' : $route.name }}</h3>
      </div>
      <div class="main-layout-header-controls">
        <el-button link @click="$router.push('/')">Home</el-button>
        <el-button link @click="$router.back()">Back</el-button>
      </div>
    </div>
    <div class="main-layout-aside">
      <div class="main-layout-aside-item" v-for="route in Routes" :key="route.name">{{ route.name }}</div>
    </div>
    <div class="main-layout-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
