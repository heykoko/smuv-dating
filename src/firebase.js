import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBq1Vltju0e9tfOf-4cvPgxRCFDhdKlT_E",
    authDomain: "smuv-dccd2.firebaseapp.com",
    projectId: "smuv-dccd2",
    storageBucket: "smuv-dccd2.appspot.com",
    messagingSenderId: "813558550223",
    appId: "1:813558550223:web:054f49291256d0f362b1ba",
    measurementId: "G-Y6F6RZ1FGF"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;