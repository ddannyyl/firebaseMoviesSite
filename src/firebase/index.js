// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7pH7P5Qw9KvTmykf4ZuDpuJgn_TQp0M4",
  authDomain: "fir-30fab.firebaseapp.com",
  projectId: "fir-30fab",
  storageBucket: "fir-30fab.appspot.com",
  messagingSenderId: "21332565479",
  appId: "1:21332565479:web:424f5d6fa74a0b22b33142",
  measurementId: "G-M376SYJ6DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);