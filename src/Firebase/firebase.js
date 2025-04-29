import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTJpPGdZbz2InxtPWCUsh6P-X-KF3YGQk",
  authDomain: "travelgameagency.firebaseapp.com",
  projectId: "travelgameagency",
  storageBucket: "travelgameagency.appspot.com",
  messagingSenderId: "465824052309",
  appId: "1:465824052309:web:fe05077ec5c695750e90dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
