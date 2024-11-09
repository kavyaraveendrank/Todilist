// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6IPTvy0FjOJue00cVfBn-eDVgewODmh0",
  authDomain: "todolist-3a7e4.firebaseapp.com",
  projectId: "todolist-3a7e4",
  storageBucket: "todolist-3a7e4.firebasestorage.app",
  messagingSenderId: "204333488408",
  appId: "1:204333488408:web:71eed052c782c28035266d",
  measurementId: "G-N1SLC7X1WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);