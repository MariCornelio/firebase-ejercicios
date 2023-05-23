// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCt_yHmo4zKkGUtZ9FVgeR5Sxs_F0-iGqs',
  authDomain: 'fir-auth-f7d5c.firebaseapp.com',
  projectId: 'fir-auth-f7d5c',
  storageBucket: 'fir-auth-f7d5c.appspot.com',
  messagingSenderId: '498710437208',
  appId: '1:498710437208:web:ac5b39df0a1d97b888992d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// autenticacion
// la aplicacion tiene ahora una forma de importar
export const auth = getAuth(app);
