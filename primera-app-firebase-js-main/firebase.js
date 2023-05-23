
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// import { } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARWWOgf_02-YOtJrRoTCFc81sbqDT6WSg",
  authDomain: "todo-8ff15.firebaseapp.com",
  projectId: "todo-8ff15",
  storageBucket: "todo-8ff15.appspot.com",
  messagingSenderId: "890624635047",
  appId: "1:890624635047:web:1dca157433f38d6eff2b82"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

// // inicializando autentificacion
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// auth.languageCode = 'en';


// export function login() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }



