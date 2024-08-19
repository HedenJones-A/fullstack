import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, MenuItem, FormControl, InputLabel, Select, TextField, Button } from '@mui/material';

function Cart() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState('Hourly Rate');
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState('');
    const [total, setTotal] = useState();

    // Define pricing options in INR
    const conversionRate = 83; // Example conversion rate: 1 USD = 83 INR
    const pricingOptions = {
        'Hourly Rate': 50 * conversionRate,
        'Half-Day Package': 180 * conversionRate,
        'Full-Day Package': 350 * conversionRate,
        'Weekly Package': 2000 * conversionRate,
    };

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const res = await axios.get(`http://localhost:7777/cart/${id}`);
                setDetails(res.data);
                console.log('Fetched cart data:', res.data); // Log the response data directly
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, [id]);

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleCalculate = () => {
        const pricePerPackage = pricingOptions[selectedPackage];
        const totalPrice = pricePerPackage * quantity;
        setTotalAmount(totalPrice);
    };

    const handlePayment = () => {
        // Replace this with actual payment handling logic
        console.log('Proceeding to payment with amount:', totalAmount);
        navigate(`/pay/${totalAmount}`);
        // Example: Redirect to a payment gateway or send data to your backend
        // window.location.href = `https://paymentgateway.com/checkout?amount=${totalAmount}`;
        // Or you might want to use a library to handle payments, like Stripe or PayPal
    };

    return (
        <div>
            <Nav />
            <Container style={{ padding: '20px' }}>
                <Grid container spacing={4}>
                    {details && details.length > 0 ? (
                        details.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card style={{ display: 'flex', flexDirection: 'column', minHeight: '150px' }}>
                                    <CardContent>
                                        <Typography variant="h5">{item.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" align="center" style={{ width: '100%' }}>
                            Your cart is empty.
                        </Typography>
                    )}
                </Grid>
                <div style={{ marginTop: '40px' }}>
                    <FormControl fullWidth style={{ marginBottom: '20px' }}>
                        <InputLabel id="pricing-select-label">Select Pricing Package</InputLabel>
                        <Select
                            labelId="pricing-select-label"
                            id="pricing-select"
                            value={selectedPackage}
                            onChange={handlePackageChange}
                        >
                            {Object.keys(pricingOptions).map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option} - ₹{pricingOptions[option].toLocaleString('en-IN')}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        fullWidth
                        style={{ marginBottom: '20px' }}
                        inputProps={{ min: 1 }}
                    />
                    <TextField
                        label="Total Amount"
                        value={`₹${totalAmount.toLocaleString('en-IN')}`}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        style={{ marginBottom: '20px' }}
                        onChange={(e) => setTotal(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleCalculate}
                        fullWidth
                        style={{
                            marginBottom: '20px',
                            backgroundColor: '#4caf50', // Green
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#388e3c', // Darker green
                            },
                        }}
                    >
                        Calculate Total
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handlePayment}
                        fullWidth
                        disabled={totalAmount === ''}
                        style={{
                            backgroundColor: '#f44336', // Red
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#c62828', // Darker red
                            },
                        }}
                    >
                        Pay Now
                    </Button>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Cart;
