import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUgnLrpn2X-ZRgSarp7YMiJpYU2-qXR2w",
  authDomain: "uw-friend-finder.firebaseapp.com",
  projectId: "uw-friend-finder",
  storageBucket: "uw-friend-finder.appspot.com",
  messagingSenderId: "437213582893",
  appId: "1:437213582893:web:f483a9a850cb92f1f44aa4",
  measurementId: "G-LSTYNVWJBD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
