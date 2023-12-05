// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcult-9AFqrBPMZqIlhnt4FiC2b8wrOVc",
  authDomain: "reactapplication-ec797.firebaseapp.com",
  projectId: "reactapplication-ec797",
  storageBucket: "reactapplication-ec797.appspot.com",
  messagingSenderId: "788554860244",
  appId: "1:788554860244:web:683da503196116fee71d41"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(firebaseConfig);
export const FIRESTORE_DB = getFirestore(firebaseConfig);