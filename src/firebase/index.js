import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7pH7P5Qw9KvTmykf4ZuDpuJgn_TQp0M4",
  authDomain: "fir-30fab.firebaseapp.com",
  projectId: "fir-30fab",
  storageBucket: "fir-30fab.appspot.com",
  messagingSenderId: "21332565479",
  appId: "1:21332565479:web:424f5d6fa74a0b22b33142",
  measurementId: "G-M376SYJ6DS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(config);
export const firestore = getFirestore(config);