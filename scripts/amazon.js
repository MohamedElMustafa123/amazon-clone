import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

// This will store ALL the HTML for every product as one big string
// We start empty and keep adding to it inside the loop
let productsHTML = '';

// Loop through each product in the products array
products.forEach((product) => {

  // Add (+=) new HTML for EACH product
  // Backticks (` `) allow us to use ${} to insert JavaScript values
  productsHTML += `
    <div class="product-container">

      <!-- Product image -->
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}"> <!-- dynamically insert image -->
      </div>

      <!-- Product name -->
      <div class="product-name limit-text-to-2-lines">
        ${product.name} <!-- dynamically insert name -->
      </div>

      <!-- Product rating -->
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
          <!-- stars * 10 converts 4.5 → 45 (used in file name) -->

        <div class="product-rating-count link-primary">
          ${product.rating.count} <!-- number of reviews -->
        </div>
      </div>

      <!-- Product price -->
      <div class="product-price">
        ${(product.priceCents / 100).toFixed(2)}
        <!-- convert cents → dollars and always show 2 decimal places -->
      </div>

      <!-- Quantity dropdown -->
      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <!-- Hidden "Added" message -->
      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <!-- Add to Cart button -->
      <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
        <!-- data-product-id stores the product ID inside the button -->
        Add to Cart
      </button>

    </div>
  `;
});

// Insert ALL generated HTML into the page
// This replaces the content inside .js-products-grid
document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCartQuantity (){
   // Calculate total quantity in cart
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity; // add each item's quantity
    });

    // Update cart number in the UI
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// Select ALL "Add to Cart" buttons
document.querySelectorAll('.js-add-to-cart').forEach((button) => {

  // Add click event to EACH button
  button.addEventListener('click', () => {
    // Get the product ID from the button's data attribute
    // IMPORTANT: should be dataset.productId (not dataset.Id)
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

  });
});