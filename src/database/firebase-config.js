import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, onSnapshot, query, serverTimestamp, setDoc, updateDoc, where, arrayRemove, arrayUnion } from 'firebase/firestore'
import env from "../config/env";

const firebaseConfig = {
  apiKey: env.DEV_BACKEND_URL_API_KEY,
  authDomain: env.DEV_BACKEND_URL_AUTH_DOMAIN,
  projectId: env.DEV_BACKEND_URL_PROJECT_ID,
  storageBucket: env.DEV_BACKEND_URL_STORAGE_BUCKET,
  messagingSenderId: env.DEV_BACKEND_URL_MEASUREMENT_ID,
  appId: env.DEV_BACKEND_URL_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)