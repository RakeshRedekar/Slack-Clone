// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQpwxWt8IMfV2-eJ-65b7aX0wjJTwwCyo",
  authDomain: "slack-clone-73cd8.firebaseapp.com",
  projectId: "slack-clone-73cd8",
  storageBucket: "slack-clone-73cd8.appspot.com",
  messagingSenderId: "911535985498",
  appId: "1:911535985498:web:d7e6b3966d4072f0e0d963",
  measurementId: "G-SN00051B2S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
