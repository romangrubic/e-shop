// Adding multiple item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check if item already exist in cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );
    // If exists, ups the quantity for 1
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // If item doesn't exist, it will push to array and set quantity to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
