// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC01lqWbfECTwCmAfZxL6NFusvbwEYyMfA",
  authDomain: "resume-c7c3e.firebaseapp.com",
  projectId: "resume-c7c3e",
  storageBucket: "resume-c7c3e.firebasestorage.app",
  messagingSenderId: "53936613424",
  appId: "1:53936613424:web:6b6289cff214a1fbeaa5f5",
  measurementId: "G-8TFF48H24Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };