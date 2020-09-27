import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NoteContextProvider from "./context/NoteContext";
import LoginContextProvider from "./context/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <NoteContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </NoteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
