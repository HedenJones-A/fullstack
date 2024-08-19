import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import Nav from './Nav';
import Footer from './Footer';
import './css/Profile.css';

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(0);
  const { user } = useUser();

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const payloadString = localStorage.getItem("Payload");
        const payload = JSON.parse(payloadString);
        const userEmail = payload.sub; // Assuming payload.sub contains the email
        
        const res = await axios.get(`http://localhost:7777/management/profile/${userEmail}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log(res.data); // Debugging: Check the response data
        setId(res.data.id);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.username);
        setPassword(res.data.password);
      } catch (err) {
        console.error('Error fetching user profile:', err.response ? err.response.data : err.message);
      }
    };

    getUser();
  }, [user.token]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      console.log("Token:", user.token); // Debugging: Check the token
      console.log("ID:", id); // Debugging: Check the ID

      const res = await axios.put(
        "http://localhost:7777/management/profile/edit",
        {
          id,         // Ensure ID is included
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res.data); // Debugging: Check the response
      setIsEditing(false); // Disable edit mode after a successful save
    } catch (err) {
      console.error("Error saving profile:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <Nav />

      <div className="container">
        <h1>PROFILE</h1>
        <div className="profile-form">
          {isEditing ? (
            <button type="button" onClick={handleSave} className="btn btn-success">SAVE</button>
          ) : (
            <button type="button" onClick={handleEdit} className="btn btn-warning">EDIT</button>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Username</span>
            <input 
              type="text" 
              className="form-control" 
              value={email} 
              placeholder="Username" 
              aria-label="Username" 
              aria-describedby="basic-addon1" 
              disabled={!isEditing}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Firstname</span>
            <input 
              type="text" 
              className="form-control" 
              value={firstName} 
              placeholder="Firstname" 
              aria-label="Firstname" 
              aria-describedby="basic-addon1" 
              disabled={!isEditing}
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Lastname</span>
            <input 
              type="text" 
              className="form-control" 
              value={lastName} 
              placeholder="Lastname" 
              aria-label="Lastname" 
              aria-describedby="basic-addon1" 
              disabled={!isEditing}
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          {/* <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Password</span>
            <input 
              type={isEditing ? "text" : "password"} 
              className="form-control" 
              value={password} 
              placeholder="Password" 
              aria-label="Password" 
              aria-describedby="basic-addon1" 
              disabled={!isEditing}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
