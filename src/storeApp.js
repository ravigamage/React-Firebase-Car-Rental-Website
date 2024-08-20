// storageApp.js
import { initializeApp } from "firebase/app";
import { getStorage,ref, getDownloadURL } from "firebase/storage";

// Configuration for storage
const firebaseConfigStorage = {
  apiKey: "AIzaSyCbiL8Aqt3PS-8g3fldU2VXBbRGyUZim-0",
  authDomain: "car-details-9f609.firebaseapp.com",
  projectId: "car-details-9f609",
  storageBucket: "car-details-9f609.appspot.com",
  messagingSenderId: "531456707002",
  appId: "1:531456707002:web:8024536cc71bfcbfdbf583"
};

// Initialize Firebase Storage
const storageApp = initializeApp(firebaseConfigStorage, "storageApp");
const storage = getStorage(storageApp);

export { storage,ref,getDownloadURL };
