// Import necessary Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByjeBkCd_UiiBmmD_8RpDW311jbeQqOJU",
  authDomain: "auth-web-app-ff957.firebaseapp.com",
  projectId: "auth-web-app-ff957",
  storageBucket: "auth-web-app-ff957.firebasestorage.app",
  messagingSenderId: "252030760799",
  appId: "1:252030760799:web:1809840928f372806828ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In function
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Email/Password Sign-In function
const emailSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { auth, googleSignIn, emailSignIn };
