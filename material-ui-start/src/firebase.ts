
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "event-rsvp-application.firebaseapp.com",
  projectId: "event-rsvp-application",
  storageBucket: "event-rsvp-application.appspot.com",
  messagingSenderId: "694186631191",
  appId: "1:694186631191:web:1982aa09e9638cbd457c52",
  measurementId: "G-K8LG60G3LE"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
