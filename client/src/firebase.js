// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBfn6bm2e940TdsMTBsshPGOnVpsgQIds",
  authDomain: "assistant-19eb5.firebaseapp.com",
  projectId: "assistant-19eb5",
  storageBucket: "assistant-19eb5.appspot.com",
  messagingSenderId: "154457702662",
  appId: "1:154457702662:web:6ff022ca5dbff256aade87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);