
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFisQpWqZwYM08cf23XkIyIc2DtW1U-t4",
  authDomain: "my-open-ai.firebaseapp.com",
  projectId: "my-open-ai",
  storageBucket: "my-open-ai.appspot.com",
  messagingSenderId: "543352068419",
  appId: "1:543352068419:web:487ba9878f639f64fc37f6"
};

// Initialize Firebase
const app =!getApps().length?initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}