import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6wKUi-LgFZcZYk7QoGPRvnJIT8nIc-yc",
  authDomain: "disney-plus-clone-288b5.firebaseapp.com",
  projectId: "disney-plus-clone-288b5",
  storageBucket: "disney-plus-clone-288b5.firebasestorage.app",
  messagingSenderId: "537237081644",
  appId: "1:537237081644:web:4ca6d4df7fa82c273b4b89",
  measurementId: "G-BB55HX5WMH",
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
