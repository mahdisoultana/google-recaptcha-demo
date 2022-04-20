import React, { useState } from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import UserProvider, { useUserContext } from "../context/UserProvider";
function App() {
  const [info] = useUserContext();
  console.log(info);
  return info.authenticated ? <Home /> : <Login />;
}

export default App;
