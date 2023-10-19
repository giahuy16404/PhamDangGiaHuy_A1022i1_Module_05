// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2YuLMPgV8XyFG7rK-IeyDxARSFDgGCvw",
  authDomain: "reactjs-furama-img.firebaseapp.com",
  projectId: "reactjs-furama-img",
  storageBucket: "reactjs-furama-img.appspot.com",
  messagingSenderId: "189336964420",
  appId: "1:189336964420:web:17428c0923634089c45b11",
  measurementId: "G-Y3W3KFSWXP",
};
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
