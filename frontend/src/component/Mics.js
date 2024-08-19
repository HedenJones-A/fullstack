import React, { useState } from 'react';
import './css/Home.css';
import './css/Mic.css';
import logo from './images/logo.jpg';
import elite from './images/file.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Mic() {
    const navigate = useNavigate();
    const [selectedRate, setSelectedRate] = useState(''); // State to track selected rate

    const handleRateChange = (event) => {
        setSelectedRate(event.target.value);
    };

    return (
        <div>
            <div className='home_container'>
                <nav className='home_nav'>
                    <img className='home_logo' src={logo} alt='Logo'></img>
                </nav>
                <img className='comp_name' src={elite} alt='Elite'></img>
                <div className='log_noti'>
                    <div className='cart'>
                        <ShoppingCartIcon />
                    </div>
                    <div className='noti'>
                        <NotificationsActiveIcon />
                    </div>
                    <div className='profile'>
                        <AccountCircleIcon />
                    </div>
                    <button type="button" className="btn btn-info" onClick={() => navigate('/')}>Logout</button>
                </div>
            </div>

            <div className='mic_container'>
                <h2>Microphone Renting</h2>
                <div className='mic_features'>
                    <h3>Features</h3>
                    <ul>
                        <li>High-quality audio recording</li>
                        <li>Noise cancellation technology</li>
                        <li>Various types of microphones</li>
                        <li>Stands and mounts included</li>
                        <li>On-site technical support</li>
                    </ul>
                </div>
                <div className='mic_pricing'>
                    <h3>Pricing</h3>
                    <select value={selectedRate} onChange={handleRateChange} className='pricing-dropdown'>
                        <option value="" disabled>Select a pricing option</option>
                        <option value="20">Hourly Rate: $20</option>
                        <option value="80">Half-Day Rate: $80</option>
                        <option value="150">Full-Day Rate: $150</option>
                        <option value="900">Weekly Rate: $900</option>
                    </select>
                    
                    <input
                        type='text'
                        className='pricing-input'
                        value={selectedRate}
                        placeholder='Selected Rate'
                        readOnly
                    />
                </div>
                <button className='book-now' onClick={() => navigate('/booking')}>Book Now</button>
            </div>

            <Footer />
        </div>
    );
}

export default Mic;
