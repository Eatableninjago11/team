import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBOFjGx0lJDmI9ej06yOft76mV9juQp4E0",
  authDomain: "team-b2fa9.firebaseapp.com",
  projectId: "team-b2fa9",
  storageBucket: "team-b2fa9.appspot.com",
  messagingSenderId: "1028076616517",
  appId: "1:1028076616517:web:f688eda277cd39e5eb9c2c"
};


var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();