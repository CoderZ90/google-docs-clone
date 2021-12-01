import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYszSBNB6g3XQcJb8_mykb7F95wYFBgKI",
  authDomain: "docs-clone-4b793.firebaseapp.com",
  projectId: "docs-clone-4b793",
  storageBucket: "docs-clone-4b793.appspot.com",
  messagingSenderId: "709715886056",
  appId: "1:709715886056:web:f4d360ece1f39ea1c2ae5d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export { db };