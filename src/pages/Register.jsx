import { useState } from "react";
import "./Register.css";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const names = formData.fullName.trim().split(" ");

    const request = {
      firstName: names[0],
      lastName: names.slice(1).join(" "),
      email: formData.email,
      password: formData.password,
    };

    try {

      const response = await registerUser(request);

      const message = await response.text();

      if (response.ok) {

        alert(message);

        navigate("/login");

      } else {

        alert(message);

      }

    } catch (error) {

      console.error(error);

      alert("Unable to connect to the server.");

    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>BookMyShow</h1>
        <p className="subtitle">Create your account</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
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

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;