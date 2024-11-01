// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
let analytics: Analytics | undefined;
const db = getFirestore(app); // Initialize Firestore

// Check if analytics is supported before initializing
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics, db };
