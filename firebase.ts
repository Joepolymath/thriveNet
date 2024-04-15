// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNP1zd0my8S1iIkdjZ8_t0met8pMhKeLQ',
  authDomain: 'thrive-net.firebaseapp.com',
  projectId: 'thrive-net',
  storageBucket: 'thrive-net.appspot.com',
  messagingSenderId: '57874370933',
  appId: '1:57874370933:web:0c80fa0af6d0b12d84c33c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
