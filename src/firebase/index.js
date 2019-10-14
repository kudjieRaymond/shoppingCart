import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
	apiKey: "AIzaSyCPUggHUDd5LfxT3rdNyusQneqgxht-FOM",
	authDomain: "shopping-cart-ad2f4.firebaseapp.com",
	databaseURL: "https://shopping-cart-ad2f4.firebaseio.com",
	projectId: "shopping-cart-ad2f4",
	storageBucket: "",
	messagingSenderId: "666656963862",
	appId: "1:666656963862:web:f2a76918e9d6f0c2226437",
	measurementId: "G-L2GXZ9LLDL"
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

