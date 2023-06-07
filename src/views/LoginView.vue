<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUser,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc } from "@firebase/firestore";

const router = useRouter();
const store = useStore();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value != passwordTwo.value) {
    alert("Incorrect passwords, they do not match");
    return;
  }
};

const { user } = await createUser(auth, email.value, passwordOne.value);
store.user = user;
router.push("/purchase");

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};
const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  const { cart } = (await getDoc(doc(firestore, "carts", user.email))).data();
  store.cart = cart;
  router.push("/purchase");
};
</script>

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
