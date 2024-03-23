// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuH45Sg0gQPAjBFj598jlNo7gtqCcaNrE",
  authDomain: "netflixgpt-efaf8.firebaseapp.com",
  projectId: "netflixgpt-efaf8",
  storageBucket: "netflixgpt-efaf8.appspot.com",
  messagingSenderId: "582335755821",
  appId: "1:582335755821:web:7c68a29dfcab023a212aa4",
  measurementId: "G-CC6452ZZMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
