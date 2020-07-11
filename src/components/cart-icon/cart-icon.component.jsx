import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
);

// Setting state in Redux
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Taking state from Redux
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
