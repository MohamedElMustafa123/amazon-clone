import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js'; //this runs the code in the file without importing
// import '../data/backend-practice.js'

loadProducts(() =>{
  renderOrderSummary();
  renderPaymentSummary();
});
