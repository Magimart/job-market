import { initializeApp,  } from "firebase/app";
 
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  appId: import.meta.env.VITE_APP_APPID,
};

 initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const jobsCollection = collection(db, "jobs");

export { 
  auth, 
   db, 
   jobsCollection 
};




























