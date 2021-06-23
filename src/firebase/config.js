import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTsm99gbn2bxAS6eWg9B5_A7naAAlCLA4",
    authDomain: "ccuplus-d0639.firebaseapp.com",
    projectId: "ccuplus-d0639",
    storageBucket: "ccuplus-d0639.appspot.com",
    messagingSenderId: "806809694205",
    appId: "1:806809694205:web:9e1b0fee4cffbaa4f4b394"
  };

  firebase.initializeApp(firebaseConfig)

//init firestore service
const postsFirestore = firebase.firestore()
const timestamp  = firebase.firestore.FieldValue.serverTimestamp()
const projectAuth = firebase.auth()
const increment = firebase.firestore.FieldValue.increment(1);
const Decrement = firebase.firestore.FieldValue.increment(-1);

export {postsFirestore,timestamp,projectAuth,increment,Decrement}