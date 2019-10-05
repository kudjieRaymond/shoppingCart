import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
