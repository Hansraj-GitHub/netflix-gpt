// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCubwK5wqoxmNAdY-s9Q0z-4gmwvW5QwfY",
  authDomain: "netflixgpt-bb105.firebaseapp.com",
  projectId: "netflixgpt-bb105",
  storageBucket: "netflixgpt-bb105.appspot.com",
  messagingSenderId: "723610624371",
  appId: "1:723610624371:web:26aa33bd79a68671802506",
  measurementId: "G-4F9BLTP0X7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();