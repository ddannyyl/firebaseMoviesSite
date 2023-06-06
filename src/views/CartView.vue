<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div>
    <div class="top">
      <h1>FakeFlix</h1>
      <h3>Purchases</h3>
    </div>
  </div>
  <div class="buy">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 20rem;
}

.buy {
  display: grid;
  position: relative;
  color: aliceblue;
  grid-template-columns: repeat(5, 1fr);
  background-image: linear-gradient(to bottom, #06beb6, #48b1bf);
}

.top {
  text-align: center;
  color: aliceblue;
  background-color: rgb(6, 86, 140);
}
</style>
