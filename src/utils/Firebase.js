import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyDHeFTmErwchuHIylTRiVBI4Y36nFtKpkI",
  authDomain: "private-eye-998d0.firebaseapp.com",
  databaseURL: "https://private-eye-998d0-default-rtdb.firebaseio.com",
  projectId: "private-eye-998d0",
  storageBucket: "private-eye-998d0.appspot.com",
  messagingSenderId: "592182706409",
  appId: "1:592182706409:web:761d072dbb8fe193247078",
});

// Firebase auth
const auth = app.auth();
const firestoreDb = app.firestore();

export { auth, firestoreDb, firebase };
