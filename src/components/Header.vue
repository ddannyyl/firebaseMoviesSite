<script setup>
import { useRouter } from "vue-router";
import logo from "./logo.png";

const router = useRouter();
</script>

<template>
  <div class="login">
    <button @click="router.push('/login')">Login</button>
  </div>
  <div class="header-container">
    <div class="logo">
      <img class="image" :src="logo" alt="Logo" />
    </div>
    <div class="title">
      <h1>FakeFlix</h1>
    </div>
  </div>
  <div class="searchbar">
    <input type="text" placeholder="Email address" name="email" />
    <button>Go</button>
  </div>
</template>


<style scoped>
.title {
  font-size: 24px;
}
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
}

.image {
  width: 80px;
  height: 80px;
}

.login {
  justify-content: right;
  height: 5rem;
  padding: 2px;
}
.login > button {
  position: absolute;
  top: 5em;
  right: 5em;
}
</style>
