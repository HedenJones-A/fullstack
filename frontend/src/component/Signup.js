import React, { useState } from 'react';
import axios from 'axios';
import './css/Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("MEMBER");

  const handleSignup = async () => {
    if (firstName === "" || email === "" || password === "" || lastName === "") {
      setError("All fields are required.");
      return;
    }
    setError("");

    try {
      const res = await axios.post("http://localhost:7777/security/register", {
        firstName,
        lastName,
        email,
        password,
        role
      });

      if (res.status === 200) {
        alert("Registration Successful");
        navigate("/security/authenticate");
      } else {
        alert("Registration Failed. User may already exist.");
      }
    } catch (err) {
      console.log("Error", err);
      alert("Invalid username/password or other error occurred.");
    }
  };

  return (
    <div>
      <div className='signup_container'>
        <h1>Sign Up</h1>
        <form>
          <input 
            type="text"
            placeholder='First Name' 
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}
            required
          />
          <input 
            type='text'
            placeholder='Last Name' 
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required 
          />
          <input 
            type="email"
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
          />
          <input 
            type='password' 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required 
          />
          {error && <div className="error">{error}</div>}
          <button 
            type="button" 
            className="btn btn-info" 
            onClick={handleSignup}
            disabled={!firstName || !email || !password || !lastName}
          >
            Sign up
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Signup;
