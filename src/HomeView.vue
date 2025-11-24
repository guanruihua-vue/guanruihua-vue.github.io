<script setup lang="ts">
import Routes from './routes'
</script>

<template>
  <div class="home-page">
    <router-link v-for="item in Routes" :key="item.name" :to="item.path">{{ item.title }}</router-link>
  </div>
</template>

<style scoped lang="scss">
.home-page{
  a{
    color: #eee;
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: #fff;
    }
  }
}
</style>
