console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from './order-handler.js';

// Select Elements:
const orderForm = document.getElementById("order-form");
const summaryDiv = document.getElementById("order-summary");
// The Submit Function (handleOrderSubmit):
function handleOrderSubmit(event) {
  event.preventDefault();
  const orderData = orderHandler.getOrderInputs();
  summaryDiv.textContent = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`;
}
// The Init Function:
function init() {
  console.log("App Initialized");
  orderForm.addEventListener("submit", handleOrderSubmit);
}
// Start the App:
document.addEventListener("DOMContentLoaded", init);