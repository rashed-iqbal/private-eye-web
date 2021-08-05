import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyBj7os3z2Jllz_eozWttIjyjYmTI_rbyrE",
  authDomain: "privateeyelite.firebaseapp.com",
  projectId: "privateeyelite",
  storageBucket: "privateeyelite.appspot.com",
  messagingSenderId: "575425771906",
  appId: "1:575425771906:web:e7aefeec18dadc50eff79b"
});

// Firebase auth
const auth = app.auth();
const firestoreDb = app.firestore();

export { auth, firestoreDb, firebase };
