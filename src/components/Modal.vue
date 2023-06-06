<script setup>
import axios from "axios";
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "bb0dace26955fb991dd7a90dd8395c7d",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button @click="$emit('toggleModal')">X</button>
        <div v-if="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <div class="tit">
            <h1>{{ movie.title }}</h1>
          </div>

          <div class="info">
            <h2>{{ movie.release_date }}</h2>
            <h2>{{ movie.overview }}</h2>
            <h3
              class="but"
              @click="store.addToCart(movie.poster_path, movie.title)"
            >
              Buy
            </h3>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.tit {
  position: relative;
  left: 50%;
}
.info {
  width: 60%;
  position: relative;
  font-size: small;
  display: flex;
  flex-direction: column;
  left: 250px;
  bottom: 350px;
}
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #ffffff99;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #5db4dd;
  border-radius: 2px;
  width: clamp(300px, 100%, 1000px);
  height: 70vh;
  position: relative;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #3b444b;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 200px;
}
.but {
  cursor: pointer;
}
</style>
