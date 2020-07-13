import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_cxoYgvKjxdJULhJKETNPLixs00JuNJdJlq';

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name="Garak's Clothiers Ltd."
            billingAddress
            shippingAddress
            image='https://s4.aconvert.com/convert/p3r68-cdx67/a2lz7-b8d8l.svg'
            description={`Your total is € ${price}`}
            currency='EUR'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
