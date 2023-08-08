import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCe16URF-j3IBgTcJl-iEJgOTIQFnCKY78",
    authDomain: "swym-assignment.firebaseapp.com",
    projectId: "swym-assignment",
    storageBucket: "swym-assignment.appspot.com",
    messagingSenderId: "828302635800",
    appId: "1:828302635800:web:90d2522bb29597f892646d",
    measurementId: "G-C7DL6XT37H"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()