"use client";
import React from 'react';
import { FaTruck, FaClock, FaShieldAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FaTruck className="w-16 h-16 text-black mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600">Everything you need to know about our shipping and delivery</p>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">FREE SHIPPING ON ALL ORDERS!</h2>
          <p className="text-green-100">No minimum purchase required. Free delivery to your doorstep.</p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center  hover:scale-105 transition-transform duration-300 ">
            <FaTruck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Standard Delivery</h3>
            <p className="text-gray-600 mb-4">3-5 business days</p>
            <p className="text-sm text-gray-500">Free shipping on all orders</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaClock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Express Delivery</h3>
            <p className="text-gray-600 mb-4">1-2 business days</p>
            <p className="text-sm text-gray-500">Rs. 500 additional charge</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaShieldAlt className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Same Day Delivery</h3>
            <p className="text-gray-600 mb-4">Within 4-6 hours</p>
            <p className="text-sm text-gray-500">Rs. 1000 additional charge (Karachi only)</p>
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <FaMapMarkerAlt className="w-6 h-6 mr-3" />
            Delivery Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Major Cities (Free Delivery)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Karachi</li>
                <li>• Lahore</li>
                <li>• Islamabad</li>
                <li>• Rawalpindi</li>
                <li>• Faisalabad</li>
                <li>• Multan</li>
                <li>• Peshawar</li>
                <li>• Quetta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Other Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Delivery available nationwide</li>
                <li>• Additional charges may apply</li>
                <li>• Delivery time: 5-7 business days</li>
                <li>• Contact us for specific areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Processing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Order Processing</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-black">Order Confirmation</h3>
                <p className="text-gray-600">You'll receive an email confirmation within minutes of placing your order.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-black">Order Processing</h3>
                <p className="text-gray-600">We prepare your order for shipment within 1-2 business days.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-black">Shipping</h3>
                <p className="text-gray-600">Your order is shipped and you'll receive tracking information.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-black">Delivery</h3>
                <p className="text-gray-600">Your order arrives at your doorstep safely and securely.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Track Your Order</h2>
          <p className="text-gray-600 mb-4">
            Once your order is shipped, you'll receive a tracking number via email and SMS.
            You can track your package in real-time using our tracking system.
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Tracking Number Format:</strong> MORVA-XXXXXXXXXX
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Tracking URL:</strong> <a href="/track" className="text-blue-600 hover:underline">morva.com/track</a>
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about shipping or delivery, our customer service team is here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <FaPhone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-black">Phone</p>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-black">Email</p>
                <p className="text-gray-600">support@morva.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
