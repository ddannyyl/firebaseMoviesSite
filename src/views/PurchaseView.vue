<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "../components/Modal.vue";

const router = useRouter();
const genre = ref(28);
const search = ref("");
const movies = ref(null);
const page = ref(1);
const currentURL = ref("");
const totalPages = ref(0);
const showModal = ref(false);
const selectedRecordId = ref(0);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

const getTMDBData = async (url, options, page) => {
  movies.value = (
    await axios.get(url, {
      params: {
        api_key: "bb0dace26955fb991dd7a90dd8395c7d",
        region: "US",
        language: "en",
        include_adult: false,
        page,
        ...options,
      },
    })
  ).data;
  totalPages.value = movies.value.total_pages;
  currentURL.value = url;
};
</script>

<template>
  <div>
    <div class="controls">
      <div>
        <input
          type="search"
          placeholder="Enter search items"
          v-model="search"
        />
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/search/movie', {
              query: search,
            })
          "
        >
          Search
        </button>
      </div>
      <div>
        <select v-model="genre">
          <option value="28">Action</option>
          <option value="10751">Family</option>
          <option value="878">Science Fiction</option>
          <option value="12">Adventure</option>
          <option value="14">Fantasy</option>
          <option value="16">Animation</option>
          <option value="53">Thriller</option>
          <option value="35">Comedy</option>
          <option value="27">Horror</option>
          <option value="80">Crime</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="18">Drama</option>
          <option value="10749">Romance</option>
        </select>
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/discover/movie', {
              with_genres: genre,
            })
          "
        >
          Get
        </button>
        <button @click="router.push('/cart')">Cart</button>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="
          getTMDBData(
            currentURL,
            {
              query: search,
            },
            page === 1 ? 1 : page--
          )
        "
      >
        Prev
      </button>
      <p>{{ `Page ${page} of ${totalPages}` }}</p>
      <button
        @click="
          getTMDBData(
            currentURL,
            {
              query: search,
            },
            page >= totalPages ? totalPages : ++page
          )
        "
      >
        Next
      </button>
    </div>
    <div v-if="movies" class="tiles">
      <div v-for="movie in movies.results" :key="movie.id" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

img {
  width: 200px;
}

.pagination {
  display: flex;
  gap: 1rem;
}

.controls {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
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
  background-color: #e082c9;
  color: rgb(0, 0, 0);
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
