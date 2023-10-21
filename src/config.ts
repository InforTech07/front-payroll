// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx4RFvRea-T5wfxP3PiJEXsGJ65sbht_4",
  authDomain: "payroll-app-b4b72.firebaseapp.com",
  projectId: "payroll-app-b4b72",
  storageBucket: "payroll-app-b4b72.appspot.com",
  messagingSenderId: "697594709206",
  appId: "1:697594709206:web:84901f13dded87a196f577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


export const config = {
    nextAuthUrl: process.env.NEXTAUTH_URL || "https://main.d34sc4zffkrzrb.amplifyapp.com/",
    nextAuthSecret: process.env.NEXTAUTH_SECRET || "secret",
    API_URL: process.env.API_URL || "http://localhost:8000/api/v1/",
    //API_URL: "http://18.216.107.32/api/v1/",
    //API_URL: "https://api-platform-payroll.onrender.com/api/v1/",
    API_URL_STORE: "https://fakestoreapi.com/products",
    ENVIROMENT: process.env.NODE_ENV || "development",
};