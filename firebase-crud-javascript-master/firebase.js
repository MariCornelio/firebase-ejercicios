// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyAZFq6oOYfbBKQyYod-S9_-0J2cEePEeIM",
  authDomain: "fir-javascript-crud-bf6df.firebaseapp.com",
  projectId: "fir-javascript-crud-bf6df",
  storageBucket: "fir-javascript-crud-bf6df.appspot.com",
  messagingSenderId: "677108059560",
  appId: "1:677108059560:web:eb6b7e5458e1b894a0619d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


export const saveTask = (title, description) =>
  addDoc(collection(db, "task"), { title, description });

// busca una colleccion de documento, se creo para usarlo en vez del ongetstask
// esto se probó antes
export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "task"), callback);

// eliminar un solo documento no una coleccion
export const deletTask = id => deleteDoc(doc(db, 'task', id))

// buscando solo un documento para poder editarlo
export const getTask = id => getDoc(doc(db, 'task', id));

// actuaizar datos necesitas 2 cosas el Id de la tarea y los nuevos campos
// newFields es un objeto
export const updatetask = (id, newFields) => updateDoc(doc(db, 'task', id), newFields);