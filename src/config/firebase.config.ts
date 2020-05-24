import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAXNn7Nwj4bQjuG0L9MgRQnMX5lptPmId4",
  authDomain: "coronavirusfreeapp.firebaseapp.com",
  databaseURL: "https://coronavirusfreeapp.firebaseio.com",
  projectId: "coronavirusfreeapp",
  storageBucket: "coronavirusfreeapp.appspot.com",
  messagingSenderId: "878990087278",
  appId: "1:878990087278:web:6dd6a3e8c800f9bcd4027f",
  measurementId: "G-6KEKY8Q98G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;