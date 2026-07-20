import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import RecommendedMovies from './components/RecommendedMovies/RecommendedMovies';
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<RecommendedMovies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      <Footer />

    </>

  )

}

export default App;