import React from 'react';
import axios from 'axios'; // Import Axios
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';



const StripeButton = ({amount}) => {
    const handleCheckout = async () => {
        console.log(amount);
        try {
         
            const response = await axios.post('https://nftapi-production-405a.up.railway.app/create-stripe-session',{
                amount:amount
            });
            // https://nftapi-production-405a.up.railway.app/
            const { sessionId } = response.data;

            // Redirect to the vanilla app for payment with the session ID
            window.location.href = `https://socialtoolspro.net/?session=${sessionId}`;
        } catch (error) {
            console.error("Error creating Stripe session:", error);
        }
    };

    return (
        <Button onClick={handleCheckout} variant="outlined" sx={{ margin: '0.5rem 1rem' }} startIcon={<CreditCardIcon />} >
            Credit Card
        </Button>

    );
};

export default StripeButton;
