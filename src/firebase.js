import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYt9wF974eMJ8HpgfrvUqhibIN8fHV5Us",
  authDomain: "instagram-clone-react-31430.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-31430.firebaseio.com",
  projectId: "instagram-clone-react-31430",
  storageBucket: "instagram-clone-react-31430.appspot.com",
  messagingSenderId: "857260190303",
  appId: "1:857260190303:web:ee57b6566dd207114689ea",
  measurementId: "G-DFT4PGMZ0M" 
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
