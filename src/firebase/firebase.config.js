// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFVLRCEHosZFh_Y1NVymWj2-VCMe9aN8",
  authDomain: "britto-shop.firebaseapp.com",
  projectId: "britto-shop",
  storageBucket: "britto-shop.firebasestorage.app",
  messagingSenderId: "1016440927773",
  appId: "1:1016440927773:web:fa5f78c7b8caba379278f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
