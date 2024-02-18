// import firebase from "firebase/compat/app";
// import firebase from 'firebase/app';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDL4HpRZsFWWGSWzbRlDZ9XvkGPIwddewA",
    authDomain: "snapchat-clone-7fd57.firebaseapp.com",
    projectId: "snapchat-clone-7fd57",
    storageBucket: "snapchat-clone-7fd57.appspot.com",
    messagingSenderId: "119377076274",
    appId: "1:119377076274:web:43deff1abdf96670abdc2b"
  };
  
  // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const storage = firebase.storage()

const provider =  new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider}

