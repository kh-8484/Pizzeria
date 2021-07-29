import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoCZGmvTIOBKcP23-qAs48_jy9rslMpmk",
  authDomain: "pizzeria-75053.firebaseapp.com",
  databaseURL: "https://pizzeria-75053.firebaseio.com",
  projectId: "pizzeria-75053",
  storageBucket: "pizzeria-75053.appspot.com",
  messagingSenderId: "1050172870253",
  appId: "1:1050172870253:web:f420841c08db79badab964",
  measurementId: "G-7L0CF8DLNN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
