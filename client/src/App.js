import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Signup } from "./pages/signup/Signup";
import LoginPage from "./pages/login/Login";
import Test from "./components/extra/AuthButton"

import './App.css';
import {Home} from'./pages'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/test" element={<Test/>} />
          </Routes>

        {/* <Home/> */}
        </BrowserRouter>

      </AuthProvider>
      
      
    </div>
  );
}

export default App;
