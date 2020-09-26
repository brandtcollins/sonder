import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import NoteContextProvider from "./context/NoteContext";

ReactDOM.render(
  <React.StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
