import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPBIMUinmz8xqJxlpyr-NTUmnBUhJ2Q5I",
  authDomain: "dub-city.firebaseapp.com",
  databaseURL: "https://dub-city.firebaseio.com",
  projectId: "dub-city",
  storageBucket: "dub-city.appspot.com",
  messagingSenderId: "263438304244",
  appId: "1:263438304244:web:8906d1b5bc01f4c5"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
export { firebaseMatches };
