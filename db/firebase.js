// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbSYvgxKEe4T7IyHW7PNNkmQ3gjEwrKkA",
  authDomain: "online-manga.firebaseapp.com",
  projectId: "online-manga",
  storageBucket: "online-manga.appspot.com",
  messagingSenderId: "581011070986",
  appId: "1:581011070986:web:4d1e6221d9aef87442fff3",
  measurementId: "G-XXF7RGRKJ4"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore;


export { db, auth, firestore }; 

