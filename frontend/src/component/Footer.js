import React from 'react';
import './css/Footer.css';
import emailjs from 'emailjs-com';

function Footer() {
    function sendMail(e) {
        e.preventDefault();

        let params = {
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs
            .send("service_5m3zsib", "template_j88d4ip", params, "hbkLZdCO8NaAgtgDx")
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message Sent Successfully!');
                    // Optionally reset the form fields
                    document.getElementById("contact-form").reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('An error occurred, Please try again');
                }
            );
    }

    return (
        <div>
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
                        <form id='contact-form' onSubmit={sendMail}>
                            <input type='email' id='email' name='email' className='text-input contact-input' placeholder='Your email address...' required />
                            <textarea id='message' rows='4' name='message' className='text-input contact-input' placeholder='Your message...' required></textarea>
                            <button onClick={sendMail} className='btn btn-big contact-btn'>
                                 Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className='footer-bottom'>
                    &copy; elitehaven.com | Designed by Elite Haven
                </div>
            </footer>
        </div>
    );
}

export default Footer;
