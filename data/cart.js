export const cart = [];

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
