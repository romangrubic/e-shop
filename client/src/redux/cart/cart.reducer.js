import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    size: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            console.log(action.payload);
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) =>
                        cartItem.id + cartItem.size !==
                        action.payload.id + action.payload.size
                ),
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
        case CartActionTypes.SELECT_SIZE:
            return {
                ...state,
                size: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
