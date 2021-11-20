import * as firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyC9xbEM0q0yRGc_rqoA_K0I5fwm-eY3iNQ",
    authDomain: "react-crud-6e97e.firebaseapp.com",
    databaseURL: "https://react-crud-6e97e-default-rtdb.firebaseio.com",
    projectId: "react-crud-6e97e",
    storageBucket: "react-crud-6e97e.appspot.com",
    messagingSenderId: "583364045478",
    appId: "1:583364045478:web:69931535ea3839ecf26267",
    measurementId: "G-EPQVB5K2S0"
  };
  
  // Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default  fireDb.database().ref();