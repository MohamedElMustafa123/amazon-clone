class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if(!this.cartItems){
      this.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems))
  }

  addToCart(productId){
  // This will store the matching item if it exists in the cart
    let matchingItem;

    // Loop through cart to check if product already exists
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem; // found existing item
      }
    });

    // If product already in cart → increase quantity
    if (matchingItem) {
      matchingItem.quantity += 1;

    } else {
      // If not in cart → add new item
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();

  }

  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem);

      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  }

  updateDeliveryOption (productId, deliveryOptionId) {
    let matchingItem;

    // Loop through cart to check if product already exists
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem; // found existing item
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  } 
}

const cart = new Cart('cart-oop'); //class use similar syntax as a function instead we use the word new infront of it. this line generates a new object
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart)
