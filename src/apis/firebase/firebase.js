import 'firebase/auth';
import firebaseConfig from '../../configs/firebase.config';
import * as firebase from "firebase/app"

firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signOut = function() {
    return firebase.auth().signOut();
}

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(googleProvider);
}