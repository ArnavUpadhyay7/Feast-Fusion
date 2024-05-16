import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MGeY5QzsgJrG3a5PGV8_uuM_z1VRj4w",
  authDomain: "feast-fusion.firebaseapp.com",
  projectId: "feast-fusion",
  storageBucket: "feast-fusion.appspot.com",
  messagingSenderId: "957570373467",
  appId: "1:957570373467:web:10290d2bff70f22528ec7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();