import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyCj4lDHmu7BRl_d4Si8CvCsaKX2KalhNoU",
    authDomain: "crwn-db-8f278.firebaseapp.com",
    projectId: "crwn-db-8f278",
    storageBucket: "crwn-db-8f278.appspot.com",
    messagingSenderId: "1048468534787",
    appId: "1:1048468534787:web:5d51a2c22126b1af810036",
    measurementId: "G-R9D0BT8DY4"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
