import React, { useState } from 'react';
import axios from 'axios';
import './css/Ai.css';
import './css/Home.css';
import logo from './images/logo.jpg';
import elite from './images/file.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Ai = () => {
  const [question, setQuestions] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  async function generateAnswer() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBurLOQKo06VgF5LQAvPYt2W5R7EL5ZQ8g",
        method: "post",
        data: { "contents": [{ "parts": [{ "text": `${question} in single string chat without comments` }] }] },
      });
      const answer = response.data.candidates[0].content.parts[0].text;
      setChatHistory([...chatHistory, { question, answer }]);
      setQuestions("");
    } catch (error) {
      console.error("Error generating answer:", error);
    }
  }

  return (
    <div>
      

      <button className="chat-toggle-button" onClick={() => setIsChatOpen(!isChatOpen)}>
        {isChatOpen ? <CloseIcon className="close-icon" /> : <ChatIcon />}
      </button>

      {isChatOpen && (
        <div className="chat-container">
          <h1 className="chat-title">Chat Box</h1>
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-message">
                <div className="user-message">
                  <strong>You:</strong> {chat.question}
                </div>
                <div className="ai-response">
                  <strong>AI:</strong> {chat.answer}
                </div>
              </div>
            ))}
          </div>
          <textarea
            className="chat-input"
            value={question}
            onChange={(e) => setQuestions(e.target.value)}
            placeholder="Type your question here..."
            rows="3"
            style={{ fontSize: '20px' }}
          ></textarea>
          <button className="chat-button" onClick={generateAnswer}>Explore</button>
        </div>
      )}
     
    </div>
  );
};

export default Ai;
