// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // require("dotenv").config();
// // Import the functions you need from the SDKs you need

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA8yuhQ2jcFBAekIY5agfgkxGRl8AulMBc",

  authDomain: "ss-manufacturer.firebaseapp.com",

  projectId: "ss-manufacturer",

  storageBucket: "ss-manufacturer.appspot.com",

  messagingSenderId: "1020984266499",

  appId: "1:1020984266499:web:04e9ccf23d4055c2ee6336"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);

export default auth;
