<script setup lang="ts">
import Routes from '../routes'
</script>

<template>
  <div class="home-page">
    <div v-for="route in Routes" :key="route.name">
      <h2>{{ route.name }}</h2>
      <router-link v-for="item in route.children" :key="item.name" :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  a {
    color: #eee;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #fff;
    }
  }
}
</style>
