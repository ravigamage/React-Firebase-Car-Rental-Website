import React, { useState } from "react";
import "../styles/LoginSignup.css";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import user_icons from '../components/asst/person.png';
import email_icons from '../components/asst/email.png';
import password_icons from '../components/asst/password.png';
import swal from 'sweetalert';
import '../styles/SweetAlert.css'; // Import your custom SweetAlert styles
import { useAuth } from './AuthContext';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      swal({
        title: "Account created successfully!",
        text: "Success!",
        icon: "success",
        button: "Ok",
        className: "custom-swal-success" // Apply custom class
      });
      console.log("Account created");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        swal({
          title: "Email already in use",
          text: "You already have an account. Please log in instead.",
          icon: "warning",
          button: "Ok",
          className: "custom-swal-warning" // Apply custom class
        });
      } else {
        setError(err.message);
      }
    }
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      swal({
        title: "Logged in successfully!",
        text: "Welcome back!",
        icon: "success",
        button: "Ok",
        className: "custom-swal-success" // Apply custom class
      }).then(() => {
        if (email === "chanukaravishan2001@gmail.com") {
          window.location.href = '/Adpanel'; // Redirect to the admin page
        } else {
          window.location.href = '/home'; // Redirect to the home page
        }
      });
      console.log("Logged in successfully");
    } catch (err) {
      console.log(err);
      setError(err.message); 
      swal({
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        icon: "error",
        button: "Ok",
        className: "custom-swal-error" // Apply custom class
      });
    }
  }

  return (
    <div className="login-signup-wrapper">
      <div className="login-signup-container">
        <div className="form-wrapper">
          <div className="login-signup-header">
            <div className="login-signup-text">{action}</div>
            <div className="login-signup-underline"></div>
          </div>
          <div className="login-signup-inputs">
            {action === "Login" ? null : (
              <div className="login-signup-input">
                <img src={user_icons} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="login-signup-input">
              <img src={email_icons} alt="" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-signup-input">
              <img src={password_icons} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="login-signup-error">{error}</div>}
            <div className="login-signup-submit-container">
              <div
                className={action === "Login" ? "login-signup-submit login-signup-gray" : "login-signup-submit"}
                onClick={() => {
                  if (action === "Sign Up") {
                    handleSignup();
                  } else {
                    setAction("Sign Up");
                  }
                }}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "login-signup-submit login-signup-gray" : "login-signup-submit"}
                onClick={() => {
                  if (action === "Login") {
                    handleLogin();
                  } else {
                    setAction("Login");
                  }
                }}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
