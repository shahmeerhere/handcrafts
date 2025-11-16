"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCreditCard, FaWallet, FaCcVisa, FaCcMastercard, FaCcPaypal, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    jazzcashNumber: "",
    easypaisaNumber: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Here you would integrate real payment APIs (Stripe, JazzCash, Easypaisa)
    // For now, just simulate a success
    const order = {
      id: Math.floor(Math.random() * 1000000),
      items,
      total,
      paymentMethod,
      customer: { ...formData },
      date: new Date().toLocaleString(),
    };
    setOrderDetails(order);
    setOrderPlaced(true);
    clearCart();
  };

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <FaWallet className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Please add items to proceed to checkout.</p>
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <FaShoppingBag className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Thank You for Your Order!</h2>
          <p className="text-gray-700 mb-4">
            Your order <span className="font-semibold">#{orderDetails.id}</span> has been placed successfully.
          </p>
          <p className="text-gray-600 mb-6">Payment method: <span className="font-medium">{orderDetails.paymentMethod.toUpperCase()}</span></p>
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">Checkout</h1>
          <p className="text-gray-600">{itemCount} item(s) in your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing & Shipping */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Billing & Shipping Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["name", "email", "phone", "city", "postalCode", "address"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                ))}
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-3">
                {/* Local Banking */}
                <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${paymentMethod === "local" ? "border-black bg-gray-50" : "border-gray-300"}`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="local"
                      checked={paymentMethod === "local"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Local Banking</span>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/comps/jazzcash.png" className="w-6 h-6" alt="JazzCash" />
                    <img src="/comps/easypaisa.png" className="w-6 h-6" alt="Easypaisa" />
                  </div>
                </label>

                {paymentMethod === "local" && (
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="jazzcashNumber"
                      placeholder="JazzCash Mobile Number"
                      value={formData.jazzcashNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                    <input
                      type="text"
                      name="easypaisaNumber"
                      placeholder="Easypaisa Mobile Number"
                      value={formData.easypaisaNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                  </div>
                )}

                {/* Credit / Debit Card */}
                <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${paymentMethod === "card" ? "border-black bg-gray-50" : "border-gray-300"}`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Credit / Debit Card</span>
                  </div>
                  <div className="flex space-x-2">
                    <FaCcVisa className="w-5 h-5 text-gray-600" />
                    <FaCcMastercard className="w-5 h-5 text-gray-600" />
                    <FaCcPaypal className="w-5 h-5 text-gray-600" />
                  </div>
                </label>

                {paymentMethod === "card" && (
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="Expiry (MM/YY)"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                    <input
                      type="text"
                      name="cardCVC"
                      placeholder="CVC"
                      value={formData.cardCVC}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    />
                  </div>
                )}

                {/* COD */}
                <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${paymentMethod === "cod" ? "border-black bg-gray-50" : "border-gray-300"}`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Cash on Delivery</span>
                  </div>
                  <FaShoppingBag className="w-5 h-5 text-gray-600" />
                </label>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex justify-between">
                    <span className="text-gray-600">{item.name} x {item.quantity}</span>
                    <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Secure payment guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
