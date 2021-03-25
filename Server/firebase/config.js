const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var timestamp = firebase.firestore.FieldValue.serverTimestamp;
// var auth = firebase.auth();

module.exports = { firestore, firebase, timestamp };
