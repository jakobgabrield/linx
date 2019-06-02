import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBEu5ylEfFC7dVEVlU2vd1EL_5dhb6K1Tw",
  authDomain: "linx-a1c16.firebaseapp.com",
  databaseURL: "https://linx-a1c16.firebaseio.com",
  projectId: "linx-a1c16",
  storageBucket: "linx-a1c16.appspot.com",
  messagingSenderId: "49022842790",
  appId: "1:49022842790:web:cb062773990c809c"
};

const fire = firebase.initializeApp(config);

export default fire;
