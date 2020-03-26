import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE__APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

export function firebaseListener(callback) {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log("User log in success", user);
        callback(true, user);
      } else {
        // console.log("User log in failed", user);
        callback(false);
      }
    },
    // function(error) {
    //   console.log(error);
    // }
	);
}

export const ref = firebase.database().ref();

