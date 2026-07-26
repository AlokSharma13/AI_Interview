
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-74220.firebaseapp.com",
  projectId: "interviewiq-74220",
  storageBucket: "interviewiq-74220.firebasestorage.app",
  messagingSenderId: "450548489979",
  appId: "1:450548489979:web:f8189bf6b17e91a16f1a5e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }