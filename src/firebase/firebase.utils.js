import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpphNHAnskgbloNQILb11FoN8RO5t6hNI",
    authDomain: "ecommerce-79cfe.firebaseapp.com",
    databaseURL: "https://ecommerce-79cfe.firebaseio.com",
    projectId: "ecommerce-79cfe",
    storageBucket: "ecommerce-79cfe.appspot.com",
    messagingSenderId: "190386289315",
    appId: "1:190386289315:web:12216807317f59a375dd16",
    measurementId: "G-0CV1JM0NVE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;