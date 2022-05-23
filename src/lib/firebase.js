// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAeD06X_Vyq1bIHX9DrgKsFaPo-Vfyf4o",
  authDomain: "netflixclone-e1f7e.firebaseapp.com",
  projectId: "netflixclone-e1f7e",
  storageBucket: "netflixclone-e1f7e.appspot.com",
  messagingSenderId: "417578012994",
  appId: "1:417578012994:web:b29846dac71e97084578db",
  measurementId: "G-ZLRG2LY1F3",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let instance;
export default function getFirebase() {
  if (typeof window !== undefined) {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
