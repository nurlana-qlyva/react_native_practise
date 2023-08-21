import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYHJ_0l3WUG3Zml76XV0QFdStJG5fBACA",
  authDomain: "mobile-app-8c651.firebaseapp.com",
  projectId: "mobile-app-8c651",
  storageBucket: "mobile-app-8c651.appspot.com",
  messagingSenderId: "381020166098",
  appId: "1:381020166098:web:6b31bd63b2b836fd549a0b",
  measurementId: "G-WTH21K4KTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
