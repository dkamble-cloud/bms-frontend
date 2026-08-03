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
import AdminDashboard from "./pages/admin/Dashboard";
import ManagerDashboard from "./pages/manager/Dashboard";
import AddMovie from "./pages/admin/AddMovie";
import MovieList from "./pages/admin/MovieList";
import EditMovie from "./pages/admin/EditMovie";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <>

      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<RecommendedMovies />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-movie" element={<AddMovie />} />
        <Route path="/admin/movies" element={<MovieList />} />
        <Route path="/admin/edit-movie/:id" element={<EditMovie />} />
      </Routes>

      <Footer />
    </>

  )

}

export default App;