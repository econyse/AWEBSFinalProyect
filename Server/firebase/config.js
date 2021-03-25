const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyA22TIrZa-rOY-at7yonbwNb9pOEvbpySo",
    authDomain: "finalproject-67cb8.firebaseapp.com",
    projectId: "finalproject-67cb8",
    storageBucket: "finalproject-67cb8.appspot.com",
    messagingSenderId: "885111161110",
    appId: "1:885111161110:web:f20df485f1bc117a225037"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var timestamp = firebase.firestore.FieldValue.serverTimestamp;
// var auth = firebase.auth();

module.exports = { firestore, firebase, timestamp };