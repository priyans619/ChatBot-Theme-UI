import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
