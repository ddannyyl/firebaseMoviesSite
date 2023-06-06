<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const movies = (
  await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: "f986b47ac3895e05d9614e10bd9e88c0",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

store.movies = movies.results.map((movie) => {
  return {
    id: movie.id,
    poster: movie.poster_path,
  };
});
</script>

<template>
  <div>
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped></style>
