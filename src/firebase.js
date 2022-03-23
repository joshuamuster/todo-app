import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDSGWNsoeLBlsu34luqojeqONri4u9VMnQ",
   authDomain: "todoapp-a4323.firebaseapp.com",
   projectId: "todoapp-a4323",
   storageBucket: "todoapp-a4323.appspot.com",
   messagingSenderId: "1027373055099",
   appId: "1:1027373055099:web:a12a2c7060c9b6c35b76de",
   measurementId: "G-4J8R299YBR",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
