import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBcfd1Vcl2PFKuDWVOqwu7nvnlfzbrjCAc",
    authDomain: "clothes-d7276.firebaseapp.com",
    projectId: "clothes-d7276",
    storageBucket: "clothes-d7276.appspot.com",
    messagingSenderId: "307922559717",
    appId: "1:307922559717:web:4c71eafb557a90608c2a0c",
    measurementId: "G-T32SGF3VTD"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app); 
  
  export { db, storage, auth ,app};
