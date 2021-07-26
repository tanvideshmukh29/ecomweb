import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsOoWOIGQjbdSH4K-y2ejRgaJENVaTvMI",
  authDomain: "clone-d7720.firebaseapp.com",
  projectId: "clone-d7720",
  storageBucket: "clone-d7720.appspot.com",
  messagingSenderId: "391433866191",
  appId: "1:391433866191:web:e70adc07aba5046d72e0ba",
  measurementId: "G-Z44Q2ZJBNL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };