"use client";
import React from "react";
import Link from "next/link";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // ✅ fixed path

export default function CartPage() {
  const { items, total, itemCount, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <FaShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items yet.</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{itemCount} item(s) in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.cartId} className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
                  
                  {/* Product Image */}
                  <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0 mb-4 md:mb-0">
                    <img
                      src={item.image || "https://placehold.co/300x200/000000/ffffff?text=No+Image"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-black mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-600">
                      <span>
                        Color: <span className="font-medium capitalize">{item.color}</span>
                      </span>
                      <span>
                        Size: <span className="font-medium">{item.size}</span>
                      </span>
                    </div>
                  </div>

                  {/* Price & Quantity */}
                  <div className="text-center md:text-right mt-4 md:mt-0">
                    <div className="text-lg font-bold text-black mb-2">
                      Rs. {item.price.toLocaleString()}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
                      <button
                        onClick={() => updateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-500 hover:text-red-700 text-sm flex items-center space-x-1 justify-center md:justify-end"
                    >
                      <FaTrash className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">Rs. {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Rs. 0</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/checkout"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/"
                  className="w-full border border-gray-300 text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
