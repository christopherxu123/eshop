// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXYTUHI8gTethsQZzgLQleV7-gQOxBsXU",
    authDomain: "eshop-9ee06.firebaseapp.com",
    projectId: "eshop-9ee06",
    storageBucket: "eshop-9ee06.appspot.com",
    messagingSenderId: "480518282126",
    appId: "1:480518282126:web:f7e6ee0dc9e3315cece2df",
    measurementId: "G-D43VBWJRXM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };