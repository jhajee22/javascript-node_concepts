//Problem Statement

//You are developing an order processing system for an e-commerce platform.
//  Since fetching order details from the database takes time,
//  you must use a callback function to execute specific operations after retrieving the order.

// 🔹 Requirements:
// 1️⃣ Implement a function fetchOrderDetails(orderId, callback) that simulates fetching order details
//  (orderId, customerName, amount, status) with a 2-second delay using setTimeout().
// 2️⃣ After fetching the order data, the function should call the provided callback function with the order details.
// 3️⃣ Perform the following operations as callbacks after fetching order data:

// Send Order Confirmation Email → Print "Dear [Customer Name], your order #[Order ID] has been confirmed!"
// Update Order Status to Shipped → Print "Order #[Order ID] has been shipped!"
// Calculate Discount if Amount > ₹5000 → Print "Discount applied on Order #[Order ID]!"
//  if the order amount is greater than ₹5000.
// 4️⃣ Call fetchOrderDetails() with different callbacks for different orders.

//Solution