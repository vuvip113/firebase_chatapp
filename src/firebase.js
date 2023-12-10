import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBorFK-F8zBg89mqVHu17IXIxcC-xMe3B0",
  authDomain: "vanitaschat.firebaseapp.com",
  projectId: "vanitaschat",
  storageBucket: "vanitaschat.appspot.com",
  messagingSenderId: "871941838888",
  appId: "1:871941838888:web:0e93fd2bea4000b0ed7d1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
