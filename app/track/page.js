"use client"

import React, { useState } from "react"

const TrackPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [status, setStatus] = useState(null)

  const handleTrack = () => {
    if (trackingNumber.trim() === "") {
      setStatus("Please enter a valid tracking number.")
    } else {
      // Placeholder – ideally integrate real API
      setStatus(`Your order with tracking #${trackingNumber} is in transit 🚚`)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
          Track Your Order
        </h1>
        <p className="text-gray-700 mb-6">
          Enter your tracking number below to check your order status.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={handleTrack}
            className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all"
          >
            Track
          </button>
        </div>
        {status && <p className="mt-6 text-gray-800">{status}</p>}

        {/* Maintenance Notice */}
        <p className="mt-12 text-sm text-gray-500 italic">
          Tracking service is temporarily down — we’re working on it.
        </p>
      </div>
    </section>
  )
}

export default TrackPage
