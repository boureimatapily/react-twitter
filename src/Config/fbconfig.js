import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyB9sIGOPZPiI4aRh3n5YEu7wRA79lBn0eY",
  authDomain: "covid-care-a267c.firebaseapp.com",
  databaseURL: "https://covid-care-a267c.firebaseio.com",
  projectId: "covid-care-a267c",
  storageBucket: "covid-care-a267c.appspot.com",
  messagingSenderId: "783260378487",
  appId: "1:783260378487:web:ccaa9783f729e1246c2d72"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
  // firebase.functions()
  const storage = firebase.storage();
  const auth = firebase.auth()
  const db = firebase.firestore();

  export { auth, storage, db,  firebase as default };