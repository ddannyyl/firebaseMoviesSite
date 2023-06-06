<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    alert("Invalid username/password!");
  }
};
</script>

<template>
  <div class="login">
    <div class="comp">
      <h1>Fakeflix</h1>
      <h3>Login to explore and purchase</h3>
    </div>

    <form class="login-container" @submit.prevent="login()">
      <input
        class="username"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="pass"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input class="ent" type="submit" value="Login" />
    </form>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background-color: #a8e0ee;
  padding: 20px;
}

.comp {
  text-align: center;
  margin-bottom: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.username,
.pass,
.ent {
  margin-bottom: 10px;
  width: 100%;
}
.ent {
  background-color: #20ec05;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
}
</style>
