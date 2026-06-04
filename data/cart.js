export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

export function addToCart(productId){
  // This will store the matching item if it exists in the cart
    let matchingItem;

    // Loop through cart to check if product already exists
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem; // found existing item
      }
    });

    // If product already in cart → increase quantity
    if (matchingItem) {
      matchingItem.quantity += 1;

    } else {
      // If not in cart → add new item
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);

    }
  });

  cart = newCart
}
