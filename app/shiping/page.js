"use client"

import React from "react"

const ShippingPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
                    Shipping Information
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                    We provide worldwide shipping with express and standard delivery
                    options. Orders are processed within 2–3 business days and carefully
                    packaged in our signature MORVA royal packaging.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Standard Shipping: 5–7 business days</li>
                    <li>Express Shipping: 2–3 business days</li>
                    <li>Free shipping on orders over $250</li>
                    <li>Tracking number provided for every order</li>
                </ul>
            </div>
        </section>
    )
}

export default ShippingPage
