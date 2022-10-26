// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.React_App_apiKey,
//     authDomain: process.env.React_App_authDomain,
//     projectId: process.env.React_App_projectId,
//     storageBucket: process.env.React_App_storageBucket,
//     messagingSenderId: process.env.React_App_messagingSenderId,
//     appId: process.env.React_App_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyDWXohUnlmVP4tmumjzkusKxxoGr9iXgI8",
    authDomain: "proacademy-304a9.firebaseapp.com",
    projectId: "proacademy-304a9",
    storageBucket: "proacademy-304a9.appspot.com",
    messagingSenderId: "338010946510",
    appId: "1:338010946510:web:863b2596e0aa4375c9899f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;