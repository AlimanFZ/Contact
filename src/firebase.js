import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIryCI4X7gPqLU12qs-HlBHQ7CCRAn8F8",
  authDomain: "contact-3ee50.firebaseapp.com",
  databaseURL: "https://contact-3ee50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-3ee50",
  storageBucket: "contact-3ee50.appspot.com",
  messagingSenderId: "191611062873",
  appId: "1:191611062873:web:cec25f073899e661acbf48",
  measurementId: "G-H7EQHK6GYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
