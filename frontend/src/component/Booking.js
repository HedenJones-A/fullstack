import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';
import Footer from './Footer';
import { useUser } from './UserContext';
import QRCode from 'qrcode.react'; // Import QR code component
import './css/Booking.css'; // Import CSS file for styles

function Booking() {
    const [bookings, setBookings] = useState([]); // State to store booking details
    const { user } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payloadString = localStorage.getItem("Payload");
                const payload = JSON.parse(payloadString);
                const userEmail = payload.sub;

                const response = await axios.get(`http://localhost:7777/management/booking/${userEmail}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.length > 0) {
                    setBookings(response.data); // Set all booking details from the response
                } else {
                    console.error('No bookings found for this user.');
                }
            } catch (error) {
                console.error('Error fetching booking data:', error);
            }
        };

        fetchData();
    }, [user.token]); // Use user.token as a dependency

    useEffect(() => {
        // Log bookings state when it changes
        console.log('Bookings state:', bookings);
    }, [bookings]);

    return (
        <div>
            <Nav />
            <h1>Booking Details</h1>
            {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                    <div key={index} className="booking-container">
                        <div className="booking-details">
                            <h2>Booking ID: {booking.booking_id}</h2>
                            <p><strong>Username:</strong> {booking.username}</p>
                            <p><strong>Duration Rent:</strong> {new Date(booking.duration_rent).toLocaleDateString()}</p>
                            <p><strong>Duration Return:</strong> {new Date(booking.duration_return).toLocaleDateString()}</p>
                            <div className="qr-code">
                                <QRCode 
                                    value={`Booking ID: ${booking.booking_id}\nUsername: ${booking.username}\nDuration Rent: ${new Date(booking.duration_rent).toLocaleDateString()}\nDuration Return: ${new Date(booking.duration_return).toLocaleDateString()}`} 
                                />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading booking details...</p>
            )}
            <Footer />
        </div>
    );
}

export default Booking;
