import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7pH7P5Qw9KvTmykf4ZuDpuJgn_TQp0M4",
  authDomain: "fir-30fab.firebaseapp.com",
  projectId: "fir-30fab",
  storageBucket: "fir-30fab.appspot.com",
  messagingSenderId: "21332565479",
  appId: "1:21332565479:web:078c85d7408a5363b33142",
  measurementId: "G-J0LVYDS0BR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);
