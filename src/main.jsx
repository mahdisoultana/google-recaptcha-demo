import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "../context/UserProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      {" "}
      <App />
    </UserProvider>
  </React.StrictMode>,
);
