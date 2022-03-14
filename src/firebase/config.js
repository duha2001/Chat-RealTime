// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDznO84BOWGM-pq9U1vFWAHQNzDMMdhHM8",
  authDomain: "chat-app-80ca9.firebaseapp.com",
  projectId: "chat-app-80ca9",
  storageBucket: "chat-app-80ca9.appspot.com",
  messagingSenderId: "779121049853",
  appId: "1:779121049853:web:6c0f7916b4ed4cbcc1be94",
  measurementId: "G-0NY8G0RCHB",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth };
export default firebase;
