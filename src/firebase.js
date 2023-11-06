import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC12w0PN7LFq8kLgRJ1YlcOqkBMV6uAKu8",
  authDomain: "we-chat-7bda4.firebaseapp.com",
  projectId: "we-chat-7bda4",
  storageBucket: "we-chat-7bda4.appspot.com",
  messagingSenderId: "389209753750",
  appId: "1:389209753750:web:8c97f15cd4fc706f4a9ab7",
  measurementId: "G-41LHV28HKP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db= getFirestore();