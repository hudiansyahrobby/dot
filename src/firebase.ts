import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCtYDQudFuMi1sYTdenZqcCgMMfNKpRw10',
  authDomain: 'dothiring.firebaseapp.com',
  projectId: 'dothiring',
  storageBucket: 'dothiring.appspot.com',
  messagingSenderId: '919477046306',
  appId: '1:919477046306:web:7ceb3e7c4aecc13a4b8e7b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
