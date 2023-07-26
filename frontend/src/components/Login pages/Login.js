import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((res) => {
        if (res.data.status === 1) {
          console.log("log in successful");
          alert("User logged in successfully");
          navigate("/homepage");
        } else if (res.data.status === 0) {
          alert("Incorrect password");
        } else {
          setErrorMessage("User does not exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="containers">
        <div className="wrapper">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="showPassword">
              <label htmlFor="showPassword">
                <input
                  type="checkbox"
                  name="showPassword"
                  checked={showPassword}
                  className="form-control rounded-0"
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </label>
            </div>
            <div className="footer">
              <button type="submit" className="button">
                Login
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
          <div className="footer">
            <p>Don't have an account?</p>
            <Link to="/register" className="link">
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
