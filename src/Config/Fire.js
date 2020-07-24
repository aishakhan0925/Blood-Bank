import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCs575xWYbm19w97NQdI3k8BG0KLrs5lxk",
  authDomain: "blood-bank-86352.firebaseapp.com",
  databaseURL: "https://blood-bank-86352.firebaseio.com",
  projectId: "blood-bank-86352",
  storageBucket: "blood-bank-86352.appspot.com",
  messagingSenderId: "198583215640",
  appId: "1:198583215640:web:fa20472cb6089052e0c56d",
  measurementId: "G-ELYJMGZ92J",
};

const fire = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.database();

export default fire;
