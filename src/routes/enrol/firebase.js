import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfHs3gLpD4BYq6oxP52jHWUQ0EQoIrAa4",
    authDomain: "c-stemp-633c9.firebaseapp.com",
    databaseURL: "https://c-stemp-633c9-default-rtdb.firebaseio.com",
    projectId: "c-stemp-633c9",
    storageBucket: "c-stemp-633c9.appspot.com",
    messagingSenderId: "910939648799",
    appId: "1:910939648799:web:35686d905e8fc8e3b3362a",
    measurementId: "G-EMSLTL3Z9H"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;