import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selector';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem
                    key={cartItem.id + cartItem.size}
                    cartItem={cartItem}
                />
            ))}
            <div className='total'>
                <span>Total: €{total} </span>
            </div>
            <StripeCheckoutButton className='button' price={total} />
            <div className='test-warning'>
                * Please use the following test credit card for payment *
                <br /> 4242 4242 4242 4242 - EXp: 05/25 - CVV: 123
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
