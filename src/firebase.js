import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/databse";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCJWxHctZvSBU7TmxhiUVOtrwVGjZR-ojY",
    authDomain: "react-slack-aafdb.firebaseapp.com",
    databaseURL: "https://react-slack-aafdb.firebaseio.com",
    projectId: "react-slack-aafdb",
    storageBucket: "react-slack-aafdb.appspot.com",
    messagingSenderId: "1043523845545",
    appId: "1:1043523845545:web:3f54830084c75a6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;