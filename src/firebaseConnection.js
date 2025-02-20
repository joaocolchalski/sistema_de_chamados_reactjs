// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAr2MfRC3m7jZZnnHCE5PBIC_hzHCLlj50",
    authDomain: "sistemachamadosreactjs.firebaseapp.com",
    projectId: "sistemachamadosreactjs",
    storageBucket: "sistemachamadosreactjs.firebasestorage.app",
    messagingSenderId: "263016363352",
    appId: "1:263016363352:web:173372ddab95ab657a612d",
    measurementId: "G-ZWP33BBXGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }