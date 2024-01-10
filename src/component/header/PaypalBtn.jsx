import React, { useEffect, useRef } from 'react';
import './paystyle.css'

function PayPalButton({ amount }) {
    const paypalRef = useRef();
console.log(amount);
    useEffect(() => {
        let paypalButtons;
        if (window.paypal) {

            paypalButtons = window.paypal.Buttons({
                style: {
                    layout: 'vertical',
                    color: 'white',
                    shape: 'rect',
                  
             
                },
                fundingSource: window.paypal.FUNDING.PAYPAL, 
                // Only show PayPal as a funding source
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: 'youtube',
                            amount: {
                                currency_code: 'USD',
                                value: amount
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    alert('Transaction Successful!');
                },
                onError: (err) => {
                    console.error(err);
                    alert('Transaction failed. Please try again.');
                }
            })
            paypalButtons.render(paypalRef.current);
        }
        return () => {
            if (paypalButtons) {
                paypalButtons.close(); // Close the paypal buttons to cleanup
            }
        }
    }, [amount]);

    return (
        <div className='flex border-2 border-red' ref={paypalRef}></div>
    );
}

export default PayPalButton;
