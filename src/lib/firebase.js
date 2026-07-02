import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "", 
  authDomain: "portafolio-10805.firebaseapp.com",
  projectId: "portafolio-10805",
  storageBucket: "portafolio-10805.firebasestorage.app",
  messagingSenderId: "1078012840052",
  appId: "1:1078012840052:web:e74efabb107337144b6921"
};

const esCliente = typeof window !== "undefined";

const app = esCliente 
  ? (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
  : null;

export const db = esCliente ? getFirestore(app) : {};
export const auth = esCliente ? getAuth(app) : {};