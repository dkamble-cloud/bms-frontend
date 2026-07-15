  import React from "react";
  import "./Navbar.css";
  import { FaSearch, FaBars } from "react-icons/fa";
  

  function Navbar() {
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

          <button className="signin-btn">
            Sign In
          </button>

           <button className="signin-btn">
            Register
          </button>

          <FaBars className="menu-icon" />

        </div>

      </nav>
    );
  }

  export default Navbar;