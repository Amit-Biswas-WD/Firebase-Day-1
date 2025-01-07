// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIFWGXvy1WUUUFqQGZrRryGU0V5ugWcwY",
  authDomain: "fir-day-1-d5b5e.firebaseapp.com",
  projectId: "fir-day-1-d5b5e",
  storageBucket: "fir-day-1-d5b5e.firebasestorage.app",
  messagingSenderId: "766174441853",
  appId: "1:766174441853:web:97b29c5efe699581571c14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
