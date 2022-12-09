import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR65kqwKV1vOBq1j42fZudwZTxR8skrH8",
  authDomain: "fir-e61b5.firebaseapp.com",
  projectId: "fir-e61b5",
  storageBucket: "fir-e61b5.appspot.com",
  messagingSenderId: "640633048860",
  appId: "1:640633048860:web:fc1813dc7b72d42b99b4d9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

