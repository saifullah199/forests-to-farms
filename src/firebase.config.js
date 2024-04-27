// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx6t4vhJGVMJXY611_NE61aU_uMJq8fKY",
  authDomain: "forests-to-farms.firebaseapp.com",
  projectId: "forests-to-farms",
  storageBucket: "forests-to-farms.appspot.com",
  messagingSenderId: "1005360787592",
  appId: "1:1005360787592:web:8c491859a3fccf34d52f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;