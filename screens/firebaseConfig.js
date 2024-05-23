// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de importar getFirestore

// Configuración de tu aplicación web de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjf06OhOtDp_rxT_0jE6R7Ciarv_5Mj6s",
  authDomain: "get-in-tec-2.firebaseapp.com",
  projectId: "get-in-tec-2",
  storageBucket: "get-in-tec-2.appspot.com",
  messagingSenderId: "1033756072919",
  appId: "1:1033756072919:web:6554e9e332275276bac992"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };