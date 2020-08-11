// Adding multiple item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check if item already exist in cart
    const existingCartItem = cartItems.find(
        (cartItem) =>
            cartItem.id === cartItemToAdd.id &&
            cartItem.size === cartItemToAdd.size
    );
    // If exists, ups the quantity for 1
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id &&
            cartItem.size === cartItemToAdd.size
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // If item doesn't exist, it will push to array and set quantity to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) =>
            cartItem.id === cartItemToRemove.id &&
            cartItem.size === cartItemToRemove.size
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) =>
                cartItem.id + cartItem.size !==
                cartItemToRemove.id + cartItemToRemove.size
        );
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id &&
        cartItem.size === cartItemToRemove.size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
