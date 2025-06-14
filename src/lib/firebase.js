// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUSzEKoA8-naKU1EMuWo1VTYOt07RrW2s",
  authDomain:  "register-smartscan.firebaseapp.com",
  projectId: "register-smartscan",
  storageBucket: "register-smartscan.firebasestorage.app",
  messagingSenderId: "609133386315",
  appId: "1:609133386315:web:399c6a75436b1424d44bce"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore & Auth exports
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
