// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCenTncmLWmI2MnYdUStITtypKH07LHJlY",
  authDomain: "mmco-5233f.firebaseapp.com",
  projectId: "mmco-5233f",
  storageBucket: "mmco-5233f.appspot.com",
  messagingSenderId: "62998520231",
  appId: "1:62998520231:web:2d52bda386e174a9b9d682",
  measurementId: "G-T7NYVCE0NW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
