<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const router = useRouter();
const store = useStore();
const email = ref("");
const emailx = ref("");
const enterPw = ref("");
const confirmPw = ref("");
const confirmPwx = ref("");
const error = ref(false);
const error1 = ref("");

const RegisterEmail = () => {
  
  try {
    error.value = false;
    if (enterPw.value !== confirmPw.value) {
      error.value = true;
      return;
    }
    const { user } = createUserWithEmailAndPassword(
      auth,
      email.value,
      enterPw.value
    );
    store.user = user;
  } catch (e) {
    error.value = true;
  }
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  router.push("/purchase");
};

const LoginEmail = async () => {
  signInWithEmailAndPassword(auth, emailx.value, confirmPwx.value)
    .then(() => {
      router.push("/purchase");
    })
    .catch((error) => {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          error1.value = "Please enter a valid email";
          return;
        case "auth/user-not-found":
          error1.value =
            "Sorry, we can't find an account with this email address. Please try again or create a new account.";
          return;
        case "auth/wrong-password":
          error1.value =
            "Incorrect password. Please try again or reset password";
          return;
      }
    });
};
</script>

<template>
  <div class="auth">
    <div class="login">
      <div class="LoginWithGoogle">
        <h1>Login With Your Google</h1>
        <button class="LoginEmail" @click="registerViaGoogle()">Google</button>
      </div>

      <div class="ResigsterWithEmail">
        <h1>Register With Your Email</h1>
        <form class="RegisterEmail" @submit.prevent="RegisterEmail()">
          <input type="email" v-model="email" placeholder="Enter Email" />
          <input
            type="password"
            v-model="enterPw"
            placeholder="Enter Password"
          />
          <input
            type="password"
            v-model="confirmPw"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Register" />
        </form>
        <p v-if="error" class="DoesNotMatch" style="color: red">
          Passwords don't match or too short!
        </p>
      </div>

      <div class="LoginWithEmail">
        <h1>Login With Your Email</h1>
        <form class="LoginEmail" @submit.prevent="LoginEmail()">
          <input type="email" v-model="emailx" placeholder="Enter Email" />
          <input
            type="password"
            v-model="confirmPwx"
            placeholder="Enter Password"
          />
          <input type="submit" value="login" />
        </form>
        <p v-if="error1" class="InvalidEmailOrPw" style="color: red">
          {{ error1 }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  gap: 5rem;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
}

hr {
  border: none;
  border-top: 1px solid #cccccc;
  margin: 20px 0;
}
</style>
