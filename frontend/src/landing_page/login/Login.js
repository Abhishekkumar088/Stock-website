import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Fix 1: missing CSS import
import "../signup/Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`, // ✅ Fix 2: was 4000, signup uses 3002
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({ email: "", password: "" }); // ✅ Fix 3: reset only on success
         setTimeout(() => {
             window.location.href = "https://stock-website-dashboard.netlify.app/";
}, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form_container">
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" value={email}
            placeholder="Enter your email" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password}
            placeholder="Enter your password" onChange={handleOnChange} />
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;