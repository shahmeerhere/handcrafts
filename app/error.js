"use client";
import { useEffect } from 'react';
import Link from 'next/link';
// import { FaExclamationTriangle, FaHome, FaRefresh } from 'react-icons/fa';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            {/* <FaExclamationTriangle className="w-16 h-16 text-red-500" /> */}
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened. Our team has been notified 
            and is working to fix this issue.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
          >
            {/* <FaRefresh className="w-4 h-4" /> */}
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
          >
            {/* <FaHome className="w-4 h-4" /> */}
            <span>Go to Homepage</span>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Still having trouble?</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/faq"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-sm font-semibold text-red-800 mb-2">Error Details:</h3>
            <pre className="text-xs text-red-700 whitespace-pre-wrap break-words">
              {error?.message || 'Unknown error occurred'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
