import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAT7RwpqqGClcHkBL91x9cf7J2iEeCh43w",
    authDomain: "useful-link-list.firebaseapp.com",
    projectId: "useful-link-list",
    storageBucket: "useful-link-list.appspot.com",
    messagingSenderId: "1085471896639",
    appId: "1:1085471896639:web:2431325325cd64bf5d748a"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }