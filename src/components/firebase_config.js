// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaYrhtsbE0muptOOBNYybCYr2IDPkVA2U",
  authDomain: "first-auth-2e9b8.firebaseapp.com",
  projectId: "first-auth-2e9b8",
  storageBucket: "first-auth-2e9b8.appspot.com",
  messagingSenderId: "778712085375",
  appId: "1:778712085375:web:4ca2c431fcfb1ebe44604a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth};