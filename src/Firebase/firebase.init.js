// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbIKqLyPXwjM0rvT8iZ0DVTBD-V_XMoEo",
  authDomain: "dragon-current-news.firebaseapp.com",
  projectId: "dragon-current-news",
  storageBucket: "dragon-current-news.firebasestorage.app",
  messagingSenderId: "479646443114",
  appId: "1:479646443114:web:270ce4769ccf7ee43fcc13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;