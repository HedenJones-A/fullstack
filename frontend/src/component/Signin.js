import React, { useState } from 'react';
import './css/Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserContext';

function Signin({ onLogin }) { // Accept onLogin as a prop
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser();

  // Function to decode Base64URL encoded strings
  function base64UrlDecode(base64Url) {
    // Replace URL-safe characters to standard Base64 characters
    base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // Decode Base64 string
    const base64 = atob(base64Url);
    // Decode UTF-8
    try {
      return decodeURIComponent(
        base64
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    } catch (err) {
      return base64;
    }
  }
const handleSignin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }
    setError("");
    try {
      const res = await axios.post("http://localhost:7777/security/authenticate", {
        email, password
      });
      const token = res.data.access_token;
      console.log(token);
      localStorage.setItem("token",token)
     
      setUser(token);
      const [header, payload, signature] = token.split('.');
      const decodedHeader = base64UrlDecode(header);
      const decodedPayload = base64UrlDecode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      const headerObject = JSON.parse(decodedHeader);
      localStorage.setItem('Header', JSON.stringify(headerObject));
      localStorage.setItem('Payload', JSON.stringify(payloadObject));
      // const token = "your-generated-token";
      const expiresAt = new Date().getTime() + 3600 * 1000; // Token expires in 1 hour

      // localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", expiresAt);

      onLogin({ email, token });
      navigate('/home');
    } catch (err) {
      console.log(err);
      setError("An error occurred during sign in");
    }
  };

  return (
    <div>
      <div>
        {/* <img src='1.jpg' alt='Description of Image'></img> */}
        <div className='signin_container'>
          <h1>Sign in</h1>
          <form onSubmit={handleSignin}>
            <input 
              type='text' 
              required 
              placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input 
              type='password' 
              required 
              placeholder='Password' 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && <div className="error">{error}</div>}
            <button 
              type="submit" 
              className="btn btn-info"
              disabled={!email || !password}
            >
              Sign in
            </button>
          </form>
          <br />
          <h4>OR</h4>
          <button 
            type="button" 
            onClick={() => navigate('/security/register')} 
            className="btn btn-info"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
