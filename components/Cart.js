"use client"
import Link from 'next/link';
import React, { useState } from 'react';
  import { useEffect } from 'react';

export default function Cart() {

    // Initialize cartItems in local state
    const [cartItems, setCartItems] = useState([
      { name: "Tomato Basil Soup", price: 12 },
      { name: "Chicken Corn Soup", price: 15 },
      { name: "Chicken Noodle Soup", price: 15 },
      { name: "Caeser Salad", price: 7 },
      { name: "Cobb Salad", price: 5 },
      { name: "Russian Salad", price: 7 },
      { name: "Garlic Bread", price: 6 },
      { name: "Fruit Charcuterie board", price: 12 },
      { name: "Sausage Cream Cheese Dip", price: 12 },
      { name: "Spring Rolls", price: 15 },
      { name: "Chicken Steak", price: 25 },
      { name: "Lamb Chops", price: 55 },
      { name: "Chicken Parmesan", price: 45 },
      { name: "Garlic Butter & Shrimp Pasta", price: 32 },
      { name: "Vegetable Risotto", price: 32 },
      { name: "Chocolate Lava Cake", price: 12 },
      { name: "Creme Brulee", price: 18 },
      { name: "Tiramisu Cake", price: 23 },
      { name: "Fresh Lemonade", price: 5 },
      { name: "Berry Blast Lemonade", price: 5 },
      { name: "Hibiscus Iced tea", price: 5 },
      { name: "Mint Mojito Mocktail", price: 5 },
      { name: "Mango Iced Tea", price: 5 }
    ]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

useEffect(() => {
  // Clear cart on page load or set cart to empty
  localStorage.removeItem('cart');
}, []);

   // Function to remove an item
   const removeItem = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  // Calculate the total price
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setShowCheckout(true); // Show the checkout form
  };

  const handleOrderConfirm = (e) => {
    e.preventDefault();
    setIsOrderConfirmed(true); // Show confirmation message
    setShowCheckout(false); // Hide the checkout form
  };

 // Function to clear the cart
 const clearCart = () => {
  setCartItems([]); // Clear all items in the cart
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="w-full max-w-md bg-white p-4 rounded shadow-lg">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => removeItem(item)} className=''>Remove</button>
            </div>
          ))}
          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className=''>Checkout</button>
          <button onClick={clearCart} >Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

{showCheckout && (
        <CheckoutForm onSubmit={handleOrderConfirm} onClose={() => setShowCheckout(false)} />
      )}

      {isOrderConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p>Your order has been taken and will be delivered within 1 hour!</p>
            <button onClick={() => setIsOrderConfirmed(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CheckoutForm({ onSubmit, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, phone, address, cardNumber, expiry } = formData;
    
    // Check if all required fields are filled
    if (!name || !phone || !address) {
      alert("Please fill in your name, phone, and address.");
      return false;
    }
    
    // If payment method is 'card', validate card information as well
    if (paymentMethod === "card" && (!cardNumber || !expiry)) {
      alert("Please enter your card details.");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e); // Proceed with the order if validation passes
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Enter Your Information</h2>
        
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full mb-2 p-2 border rounded" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full mb-2 p-2 border rounded" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full mb-2 p-2 border rounded" />

        <label className="block mt-2 mb-1">Payment Method</label>
        <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full mb-2 p-2 border rounded">
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>

        {paymentMethod === "card" && (
          <>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="Expiry Date" className="w-full mb-2 p-2 border rounded" />
          </>
        )}

        <button type="submit">Place Order</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
