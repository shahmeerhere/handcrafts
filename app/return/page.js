"use client"

import React from "react"

const ReturnsPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
          Returns & Exchanges
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          We want you to be fully satisfied with your purchase. If not, we
          provide an easy return and exchange process.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Returns accepted within 14 days of delivery</li>
          <li>Items must be unworn, undamaged, and in original packaging</li>
          <li>Refunds issued to original payment method or store credit</li>
          <li>Exchanges available for size or color variations</li>
        </ul>
        <p className="text-gray-700 mt-6">
          To initiate a return, please contact our support team with your order
          number.
        </p>
      </div>
    </section>
  )
}

export default ReturnsPage
