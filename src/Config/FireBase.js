// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider ,signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASmXUK2lAl91ajebftv-TeOAFrLOII5U4",
  authDomain: "egtos-firebase-auth.firebaseapp.com",
  projectId: "egtos-firebase-auth",
  storageBucket: "egtos-firebase-auth.appspot.com",
  messagingSenderId: "461811566271",
  appId: "1:461811566271:web:8fc8f76a34c6915e84680a",
  measurementId: "G-R8XNDN443Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// initialization 2 methods ,1st is auth and getFirestore
const auth = getAuth();
const db = getFirestore();
const logout = signOut(auth);


export {auth,db,logout,provider};