// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT8PDi_UlgGv1PO2_uVaIpVPQU3_r6Z9U",
  authDomain: "admin-panel-21779.firebaseapp.com",
  projectId: "admin-panel-21779",
  storageBucket: "admin-panel-21779.appspot.com",
  messagingSenderId: "134814457358",
  appId: "1:134814457358:web:fc08fd6c1812cee6db665f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Authentication Configuration
const firebaseConfigAuth = {
  apiKey: "AIzaSyBaBY82FwYCRZfRiY-NXuxj4kEG0vzlTf8",
  authDomain: "authentication-1a1df.firebaseapp.com",
  projectId: "authentication-1a1df",
  storageBucket: "authentication-1a1df.appspot.com",
  messagingSenderId: "222221333411",
  appId: "1:222221333411:web:549cc14176d6d9b116e016"
};

// Initialize Firebase Authentication
const authApp = initializeApp(firebaseConfigAuth, "authApp");
const auth = getAuth(authApp);

export { db, auth };
