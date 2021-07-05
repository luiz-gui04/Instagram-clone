import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuRo6FyNV1Ixp9Y8Nlpjt4mmg2SnAQvWs",
  authDomain: "instagram-clone-webmaster.firebaseapp.com",
  projectId: "instagram-clone-webmaster",
  storageBucket: "instagram-clone-webmaster.appspot.com",
  messagingSenderId: "397079541895",
  appId: "1:397079541895:web:260c12c49f6a6948f9a022",
  measurementId: "G-1JPRCJ8HGX"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export{db, auth, storage, functions};