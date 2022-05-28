import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./global-styles";
import { Firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ Firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
