import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Workout } from "./pages/index";


import "./App.css";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
              <Route path="/workout" element={<Workout />} />
          </Routes>
      <div className="bg-bubble-1"></div>
      <div className="bg-bubble-2"></div>
    </div>
  );
}

export default App;


