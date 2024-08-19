import React from 'react'
import './css/Home.css'
import './css/Camera.css'
import logo from './images/logo.jpg';
import elite from './images/file.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Camers() {
    const navigate = useNavigate();
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

            

            <div className='camera_container'>
                <h2>Camera Renting</h2>
                <div className='camera_features'>
                    <h3>Features</h3>
                    <ul>
                        <li>High-resolution cameras</li>
                        <li>Variety of lenses</li>
                        <li>Professional tripods</li>
                        <li>Lighting kits</li>
                        <li>On-site support</li>
                    </ul>
                </div>
                <div className='camera_pricing'>
                    <h3>Pricing</h3>
                    <ul>
                        <li>Hourly Rate: $30</li>
                        <li>Half-Day Rate: $120</li>
                        <li>Full-Day Rate: $200</li>
                        <li>Weekly Rate: $1200</li>
                    </ul>
                </div>
                <button className='book-now' onClick={() => navigate(`/cart/${102}`)}>Book Now</button>
            </div>

            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-section about'>
                        <h2 className='logo-text'><span>Elite</span> Haven</h2>
                        <p>
                            Elite Haven is a leading firm in providing quality and value to our customers.
                            We like what we do.
                        </p>
                        <div className='contact'>
                            <span><i className='fas fa-phone'></i> &nbsp; 123-456-789</span>
                            <span><i className='fas fa-envelope'></i> &nbsp; info@elitehaven.com</span>
                        </div>
                    </div>

                    <div className='footer-section links'>
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <a href='#'><li>Events</li></a>
                            <a href='#'><li>Team</li></a>
                            <a href='#'><li>Mentors</li></a>
                            <a href='#'><li>Gallery</li></a>
                            <a href='#'><li>Terms and Conditions</li></a>
                        </ul>
                    </div>

                    <div className='footer-section contact-form'>
                        <h2>Contact us</h2>
                        <br />
                        <form action='#' method='post'>
                            <input type='email' name='email' className='text-input contact-input' placeholder='Your email address...' />
                            <textarea rows='4' name='message' className='text-input contact-input' placeholder='Your message...'></textarea>
                            <button type='submit' className='btn btn-big contact-btn'>
                                <i className='fas fa-envelope'></i> Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className='footer-bottom'>
                    &copy; elitehaven.com | Designed by Elite Haven
                </div>
            </footer>
        </div>
    )
}

export default Camers;
