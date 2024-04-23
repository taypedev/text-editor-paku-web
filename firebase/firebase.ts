// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf_LS5Dd50K5nAGNTRJgPTLgbyb0N1894",
  authDomain: "test-apps-paku.firebaseapp.com",
  projectId: "test-apps-paku",
  storageBucket: "test-apps-paku.appspot.com",
  messagingSenderId: "933321738857",
  appId: "1:933321738857:web:288a01e915a520a20d70f8",
  measurementId: "G-4QP1NB8JLJ",
};

// Initialize Firebase
export const appFirestore = initializeApp(firebaseConfig);
export const firestoreApp = getFirestore();
const analytics = getAnalytics(appFirestore);
