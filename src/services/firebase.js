import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVa706_C-iXHsyUP91srpJFUQv2ce7hLc",
  authDomain: "coordinate-development.firebaseapp.com",
  projectId: "coordinate-development",
  storageBucket: "coordinate-development.appspot.com",
  messagingSenderId: "1095100547441",
  appId: "1:1095100547441:web:cd3379303e332ce812f6d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {app, auth, db}