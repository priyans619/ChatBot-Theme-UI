import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/Theme";
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
