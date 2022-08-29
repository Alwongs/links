import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDr-e6pkTxomWPdA-31gc2isGUj3ISJRos",
    authDomain: "links-note.firebaseapp.com",
    projectId: "links-note",
    storageBucket: "links-note.appspot.com",
    messagingSenderId: "805363142242",
    appId: "1:805363142242:web:aa699f8f4ae0fbd15b8b3b"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }