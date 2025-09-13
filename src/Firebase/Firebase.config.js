// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi6u8vyg9QI7RwiqIm5zkuETGoTGXSJIs",
  authDomain: "email-pass-auth-firebase-14f8f.firebaseapp.com",
  projectId: "email-pass-auth-firebase-14f8f",
  storageBucket: "email-pass-auth-firebase-14f8f.firebasestorage.app",
  messagingSenderId: "948678971720",
  appId: "1:948678971720:web:a5f5bfd8ee93454635e37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;