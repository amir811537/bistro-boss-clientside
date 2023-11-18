// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bistro-boss-auth-4dc64.firebaseapp.com",
  projectId: "bistro-boss-auth-4dc64",
  storageBucket: "bistro-boss-auth-4dc64.appspot.com",
  messagingSenderId: "613557579156",
  appId: "1:613557579156:web:9a83b06a61ae2a315c3381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;