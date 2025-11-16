"use client";
import React from 'react';
import { FaUndo, FaCheckCircle, FaTimesCircle, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FaUndo className="w-16 h-16 text-black mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4">Return & Exchange Policy</h1>
          <p className="text-xl text-gray-600">Hassle-free returns and exchanges for your peace of mind</p>
        </div>

        {/* 30-Day Return Policy Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">30-DAY RETURN POLICY</h2>
          <p className="text-green-100">Return or exchange any item within 30 days of purchase</p>
        </div>

        {/* Return Conditions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Return Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-600 flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                Items Eligible for Return
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Unworn shoes in original condition</li>
                <li>• Original packaging and tags intact</li>
                <li>• Within 30 days of purchase</li>
                <li>• Size exchanges for different sizes</li>
                <li>• Defective or damaged items</li>
                <li>• Wrong items sent by mistake</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-600 flex items-center">
                <FaTimesCircle className="w-5 h-5 mr-2" />
                Items Not Eligible
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Worn or used shoes</li>
                <li>• Items without original packaging</li>
                <li>• Custom or personalized items</li>
                <li>• Items purchased on sale (final sale)</li>
                <li>• Items damaged by customer</li>
                <li>• Items returned after 30 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">How to Return or Exchange</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-black">Contact Us</h3>
                <p className="text-gray-600">Email us at returns@morva.com or call +92 300 1234567 to initiate your return.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-black">Get Return Authorization</h3>
                <p className="text-gray-600">We'll provide you with a Return Authorization Number (RAN) and return instructions.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-black">Package Your Items</h3>
                <p className="text-gray-600">Pack the items securely in the original packaging with all tags and accessories.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-black">Ship Your Return</h3>
                <p className="text-gray-600">Send the package to our return center using the provided shipping label.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold text-black">Receive Refund/Exchange</h3>
                <p className="text-gray-600">Once processed, you'll receive your refund or exchange within 5-7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Return Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <FaUndo className="w-6 h-6 mr-3 text-blue-600" />
              Refund
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Full refund to original payment method</li>
              <li>• Processing time: 5-7 business days</li>
              <li>• Free return shipping</li>
              <li>• Refund amount excludes original shipping</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <FaShieldAlt className="w-6 h-6 mr-3 text-green-600" />
              Exchange
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Exchange for different size or color</li>
              <li>• Price difference will be adjusted</li>
              <li>• Free exchange shipping</li>
              <li>• New item shipped within 2-3 days</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <FaClock className="w-6 h-6 mr-3" />
            Return Timeline
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-black">Return Request</span>
              <span className="text-gray-600">Immediate</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-black">Return Authorization</span>
              <span className="text-gray-600">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-black">Package Received</span>
              <span className="text-gray-600">3-5 business days</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-black">Quality Inspection</span>
              <span className="text-gray-600">1-2 business days</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium text-black">Refund/Exchange Processed</span>
              <span className="text-gray-600">5-7 business days</span>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-yellow-800">
            <li>• All returns must be authorized before shipping</li>
            <li>• Return shipping is free for authorized returns</li>
            <li>• Items must be in original, unworn condition</li>
            <li>• Custom or personalized items cannot be returned</li>
            <li>• Sale items marked as "Final Sale" cannot be returned</li>
            <li>• We reserve the right to refuse returns that don't meet our conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
