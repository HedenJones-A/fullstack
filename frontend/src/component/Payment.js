import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, TextField, Button, Box } from '@mui/material';

function Payment() {
    const { total } = useParams(); // Extract the 'total' value from URL parameters
    const [userid,setUserid]=useState("");
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (window.Razorpay) {
            var options = {
                key: 'rzp_test_AWrlyaXOO9ncih',
                key_secret: 'iExGzM7nCvTIo41Rk4iV9kye',
                amount: total * 100, // Amount should be in paise (1 INR = 100 paise)
                currency: 'INR',
                name: 'Elite Haven',
                description: 'for testing purpose',
                handler: function (response) {
                    alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
                },
                prefill: {
                    name: 'Heden',
                    email: 'hedenjones4@gmail.com',
                    contact: '9344485923',
                },
                notes: {
                    address: 'Razorpay Corporate office',
                },
                theme: {
                    color: '#3399cc',
                },
            };
            var pay = new window.Razorpay(options);
            pay.open();
            {/*const res=axios.post("http://localhost:7777/management/booking/",{pay,userid})*/}
        } else {
            alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
        }
    };

    return (
        <div>
            <Nav />
            <Container
                maxWidth="sm"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh', // Adjust if necessary
                    padding: '20px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <TextField
                        label="Amount"
                        value={`₹${Number(total).toLocaleString('en-IN')}`}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        sx={{
                            marginBottom: '20px',
                            '& .MuiInputBase-root': {
                                borderRadius: '4px',
                                borderColor: '#ccc',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc',
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{
                            backgroundColor: '#f44336', // Red background color
                            '&:hover': {
                                backgroundColor: '#d32f2f', // Darker red on hover
                            },
                        }}
                    >
                        Pay Now
                    </Button>
                </Box>
            </Container>
            <Footer />
        </div>
    );
}

export default Payment;
