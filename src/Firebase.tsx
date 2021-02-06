import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCB5t-FsPctUmlYT8-OVowgH6zfrK2k6Dc",
  authDomain: "todo-app-e1d26.firebaseapp.com",
  projectId: "todo-app-e1d26",
  storageBucket: "todo-app-e1d26.appspot.com",
  messagingSenderId: "937979130962",
  appId: "1:937979130962:web:c8ef8ddbcd829a09e2db8b",
  measurementId: "G-57KPKBQHCZ",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
