// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWRSJg3xAYH6vA0hlSBVE2Ge5UDmQSVcE",
  authDomain: "netflix-clone-demo-eda3d.firebaseapp.com",
  projectId: "netflix-clone-demo-eda3d",
  storageBucket: "netflix-clone-demo-eda3d.appspot.com",
  messagingSenderId: "757234460708",
  appId: "1:757234460708:web:c1bf33db54d5f8772b50b1",
  measurementId: "G-78BTMFLR1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
