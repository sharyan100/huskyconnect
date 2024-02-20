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
  apiKey: "AIzaSyBDzyjFk8OirTT_tg84XW6Czbit4i2Fizk",
  authDomain: "huskyconnect-807a6.firebaseapp.com",
  databaseURL: "https://huskyconnect-807a6-default-rtdb.firebaseio.com",
  projectId: "huskyconnect-807a6",
  storageBucket: "huskyconnect-807a6.appspot.com",
  messagingSenderId: "58371412457",
  appId: "1:58371412457:web:e42a58f3f8e61851a73b78"
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
