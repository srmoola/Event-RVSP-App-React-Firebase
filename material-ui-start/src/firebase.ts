
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAL00ueSe9rMSEXufpbLpjMcw9Oc7tWsZs",
  authDomain: "event-rsvp-application.firebaseapp.com",
  projectId: "event-rsvp-application",
  storageBucket: "event-rsvp-application.appspot.com",
  messagingSenderId: "694186631191",
  appId: "1:694186631191:web:1982aa09e9638cbd457c52",
  measurementId: "G-K8LG60G3LE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);