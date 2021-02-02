import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyDQ3gcdh7TUM9j6niI8n16MAElQJPM5V88",
    authDomain: "crwn-clothing-db-bc26e.firebaseapp.com",
    projectId: "crwn-clothing-db-bc26e",
    storageBucket: "crwn-clothing-db-bc26e.appspot.com",
    messagingSenderId: "595285943032",
    appId: "1:595285943032:web:81640b4d688f1dbf5e510d",
    measurementId: "G-E1W9PPVQHM"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error){
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
 }
