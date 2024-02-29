// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.ENV.FIREBASE_API_KEY,
    authDomain: "auth-evergreen.firebaseapp.com",
    projectId: "auth-evergreen",
    storageBucket: "auth-evergreen.appspot.com",
    messagingSenderId: "885527172736",
    appId: "1:885527172736:web:0786e785b9271fe8f1f865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;