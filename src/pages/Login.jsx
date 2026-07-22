import { useState } from "react";
import "./Login.css";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUser(formData);

      console.log("Status:", response.status);

      const data = await response.json();

      console.log("Response:", data);

      if (response.ok) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        setIsLoggedIn(true);

        console.log("Stored Token:", localStorage.getItem("token"));

        alert("Login Successful");

        if (data.role === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (data.role === "THEATRE_MANAGER") {
          navigate("/manager/dashboard");
        } else {
          navigate("/");
        }

      } else {

        alert("Invalid Email or Password");

      }

    } catch (error) {

      console.error(error);

      alert("Unable to connect to the server");

    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>BookMyShow</h1>
        <p className="subtitle">Welcome Back 👋</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account? <a href="/register">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;