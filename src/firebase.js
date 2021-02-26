import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRNkck74_KS5M4HyEgFQaVNWEkqawPMKE",
    authDomain: "clone-16429.firebaseapp.com",
    projectId: "clone-16429",
    storageBucket: "clone-16429.appspot.com",
    messagingSenderId: "291982663556",
    appId: "1:291982663556:web:fc9d1de18597412f8107d1",
    measurementId: "G-QWCZBV2HCN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}