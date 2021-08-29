import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfcE-9jfyr2gECpMVDOobPHuJIc_dzWFc",
    authDomain: "react-blog-q.firebaseapp.com",
    projectId: "react-blog-q",
    storageBucket: "react-blog-q.appspot.com",
    messagingSenderId: "449346632546",
    appId: "1:449346632546:web:e2e915d010f829f44c4a3b"
  };

let instance;

const getFirebaseInstance = () => {
    if (instance) {
        return instance;
    } else {
        instance = firebase.initializeApp(FirebaseConfig);
        return instance;
    }
}

export default getFirebaseInstance;