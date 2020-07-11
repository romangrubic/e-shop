import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

// Selector for hidden property in header component
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

// Selector for quantity in cart icon component
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
            0
        )
);
