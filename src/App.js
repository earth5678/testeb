import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Users from './Components/User'
import UserCreate from "./Components/UserCreate"
import UserUpdate from "./Components/UserUpdate"
import './App.css';

export default function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<UserCreate />} />
          <Route path='/update/:id' element={<UserUpdate />} />
        </Routes>
      </div>
  );
}