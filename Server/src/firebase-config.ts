// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require('dotenv').config()

export const firebaseConfig = {
  apiKey: process.env.NEXT_AUTH_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_AUTH_PROJECT_ID,
  storageBucket: process.env.NEXT_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_AUTH_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_AUTH_APP_ID,
  measurementId: process.env.NEXT_AUTH_MEASUREMENT_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app