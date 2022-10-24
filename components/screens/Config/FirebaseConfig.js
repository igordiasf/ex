import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBylvmvhBAExJYVSKWEBXP9I8pSXRsQwIE",
  authDomain: "auth-ex.firebaseapp.com",
  projectId: "auth-ex",
  storageBucket: "auth-gnb.appspot.com",
  messagingSenderId: "468395637083",
  appId: "1:468395637083:web:d0799f9292a39b7641c28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
