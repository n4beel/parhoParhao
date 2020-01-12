import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize firebase
const config = {
    apiKey: "AIzaSyDkzV8QtZrgnQr1dtAkVQEpAQfFKv8ScAs",
    authDomain: "parho-parhao.firebaseapp.com",
    databaseURL: "https://parho-parhao.firebaseio.com",
    projectId: "parho-parhao",
    storageBucket: "parho-parhao.appspot.com",
    messagingSenderId: "755457345179",
    appId: "1:755457345179:web:34a9f3509ac1607b99e83e"
};

firebase.initializeApp(config);

export default firebase;