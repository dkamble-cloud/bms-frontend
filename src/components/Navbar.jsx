import React from "react";
import "./Navbar.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/profileApi";


function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleProfile = async () => {

    try {

      const response = await getProfile();

      const message = await response.text();

      if (response.ok) {
        alert(message);
      } else {
        alert("Unauthorized");
      }

    } catch (error) {

      console.error(error);
      alert("Unable to connect to the server");

    }

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);

    navigate("/login");
  };


  return (
    <nav className="navbar">

      {/* Left Section */}
      <div className="navbar-left">

        <img
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt="BookMyShow"
          className="logo"
        />


        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">

        <select className="location">
          <option>Indore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Pune</option>
        </select>

        {!isLoggedIn && (
          <>
            <button
              className="signin-btn"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>

            <button
              className="signin-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}

        {isLoggedIn && (
          <>
            <button
              className="signin-btn"
              onClick={handleProfile}
            >
              Profile
            </button>

            <button
              className="signin-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

        <FaBars className="menu-icon" />

      </div>

    </nav>
  );
}

export default Navbar;