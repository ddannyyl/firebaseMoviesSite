<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const store = useStore();

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};
</script>

<template>
  <div class="title">
    <h1>Fakeflix</h1>
  </div>
  <div>
    <div class="cart">
      <button @click="router.push('/cart')">Cart</button>
    </div>
    <div v-if="store.movies" class="tiles">
      <div v-for="movie in store.movies" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
.title {
  text-align: center;
  background-color: #3c8efa;
  padding: 20px;
}

h1 {
  color: #ffffff;
}

.cart {
  text-align: right;
  margin-bottom: 20px;
}

button {
  background-color: #f80539;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-image: linear-gradient(to bottom, #ffafbd, #ffc3a0);
}

.tile {
  position: relative;
}

img {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}
</style>
