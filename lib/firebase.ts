import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBB1S0zA3lMADHm02sKHDs0tBtI-dN6yVE",
  authDomain: "meif-2facd.firebaseapp.com",
  projectId: "meif-2facd",
  storageBucket: "meif-2facd.firebasestorage.app",
  messagingSenderId: "385605595552",
  appId: "1:385605595552:web:955d9ef7ac793f79a4b4c5",
  measurementId: "G-Y3E9PJVH3R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);