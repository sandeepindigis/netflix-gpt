// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAGt2lZigice7wMpChHZHa7tw2YmxW8oM",
  authDomain: "netflixgpt-886ca.firebaseapp.com",
  projectId: "netflixgpt-886ca",
  storageBucket: "netflixgpt-886ca.firebasestorage.app",
  messagingSenderId: "492082254969",
  appId: "1:492082254969:web:e2d7188ff87f8ccbb430a8",
  measurementId: "G-NGKBM2GDHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
