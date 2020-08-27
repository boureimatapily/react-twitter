import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDss5CB4GzWYs3Q2IZFbwLY-nVOhni54HA",
  authDomain: "susumarket-422e3.firebaseapp.com",
  databaseURL: "https://susumarket-422e3.firebaseio.com",
  projectId: "susumarket-422e3",
  storageBucket: "susumarket-422e3.appspot.com",
  messagingSenderId: "903857271492",
  appId: "1:903857271492:web:a311c75f69f2c8a46a4f91"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
  // firebase.functions()
  const storage = firebase.storage();
  const auth = firebase.auth()
  const db = firebase.firestore();

  export { auth, storage, db,  firebase as default };