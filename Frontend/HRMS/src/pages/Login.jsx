import React, { useState } from "react";
import "./styles/login.css";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //prevents the default submission of forms
    event.preventDefault();

    if (!email || !password) {
      setError("Please Enter both email and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        /*  alert("Successfully logged in"); */
        console.log(response);

        const { user, token } = response.data;
        const role = response.data.user.role;

        login(user);
        localStorage.setItem("token", token);

        if (role === "admin"){
          navigate("/admin-dashboard")
        }else{
          navigate("/employee-dashboard")
        }
      }
    } catch (error) {
      const success = error.response?.data?.success;
      const errMsg = error.response?.data?.error;
      if (success === false) {
        setError(errMsg);
      } else {
        setError("Server Error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <h1 className="title">Human Resource Management System</h1>

      <form onSubmit={handleSubmit}>
        <div className="headings">
          <h2 className="form_h2">Login form</h2>
          <p className="form_para">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          {error && <p className="errorMsg">{error}</p>}
        </div>

        <div className="form_details">
          <div className="email_div">
            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="email_div">
            <label className="password" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="short_forms">
          <label>
            <input type="checkbox" />
            <span> Remember Me</span>
          </label>
          <a href="#">Forget password?</a>
        </div>
        <div className="btn_div">
          <button className="submit_btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
