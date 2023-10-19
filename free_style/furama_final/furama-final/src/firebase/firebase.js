// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc44z5ERaOrVCIGje4NGfnbs8YDjeq6y4",
  authDomain: "furama-final.firebaseapp.com",
  projectId: "furama-final",
  storageBucket: "furama-final.appspot.com",
  messagingSenderId: "12528585598",
  appId: "1:12528585598:web:16c10825453ffd4a7cc12f",
  measurementId: "G-TEFMH1HCQG"
};
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const analytics = getAnalytics(app);
export default storage;
