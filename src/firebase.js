import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAqTyz46F7Q1Wy6i-_lHlam8lVWiXQ1TnE",
  authDomain: "zenon-stroyinvest.firebaseapp.com",
  databaseURL: "https://zenon-stroyinvest.firebaseio.com",
  projectId: "zenon-stroyinvest",
  storageBucket: "",
  messagingSenderId: "195121958416",
  appId: "1:195121958416:web:712303972b580cad"
};
firebase.initializeApp(config);

export default firebase;

export const functions = firebase.functions();
