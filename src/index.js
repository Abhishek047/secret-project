import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "./index.css";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxHcadlStgsZNMcoB9cR0WTWYsgtIzKqU",
    authDomain: "app-thoughts.firebaseapp.com",
    databaseURL: "https://app-thoughts.firebaseio.com",
    projectId: "app-thoughts",
    storageBucket: "app-thoughts.appspot.com",
    messagingSenderId: "402023576952",
    appId: "1:402023576952:web:db2178b4530b355ea6848d",
    measurementId: "G-J20JYB90E2",
};

initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
