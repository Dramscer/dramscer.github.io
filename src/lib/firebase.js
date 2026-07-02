import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY, 
  authDomain: "portafolio-10805.firebaseapp.com",
  projectId: "portafolio-10805",
  storageBucket: "portafolio-10805.firebasestorage.app",
  messagingSenderId: "1078012840052",
  appId: "1:1078012840052:web:e74efabb107337144b6921"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);