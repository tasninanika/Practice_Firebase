// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPxAMew-sLMbvyblsDFKndbUDbdulG5g",
  authDomain: "practice-firebase-a.firebaseapp.com",
  projectId: "practice-firebase-a",
  storageBucket: "practice-firebase-a.firebasestorage.app",
  messagingSenderId: "415035077673",
  appId: "1:415035077673:web:6085731aa5ac64a2651838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;