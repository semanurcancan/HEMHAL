import { initializeApp } from "firebase/app";
import {getFirestore, collection } from 'firebase/firestore'
import {getStorage, ref } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyChpRAtpi5dd_zn6t6zlQrtacc8lZ0qvYs",
  authDomain: "hemhal-app.firebaseapp.com",
  projectId: "hemhal-app",
  storageBucket: "hemhal-app.appspot.com",
  messagingSenderId: "930543444939",
  appId: "1:930543444939:web:bed5a22ae313ddf3a68c4e",
  measurementId: "G-NRHYZ6GQNC"
};


initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore()
//const collectionUser = collection(db, "users");
 export default db;