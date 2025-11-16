"use client"

import React, { useState } from "react"

const faqs = [
    {
        question: "Are your products 100% handmade?",
        answer:
            "Yes. Each item is meticulously handcrafted by skilled artisans, ensuring unique quality and attention to detail.",
    },
    {
        question: "What materials do you use?",
        answer:
            "We source premium, sustainable materials such as natural wood, leather, and organic fabrics, ensuring durability and authenticity.",
    },
    {
        question: "Can I customize a product?",
        answer:
            "Absolutely. Many of our items can be customized in size, color, or design to match your personal taste or gifting needs.",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Shipping times vary depending on your location, typically between 5-15 business days. International orders may take slightly longer.",
    },
    {
        question: "Do you offer worldwide shipping?",
        answer:
            "Yes. We ship globally and ensure each product is carefully packaged to prevent damage during transit.",
    },
    {
        question: "What is your return or exchange policy?",
        answer:
            "We accept returns or exchanges within 14 days for unused products. Please contact our support team for assistance.",
    },
    {
        question: "Are your products limited edition?",
        answer:
            "Yes. Many of our products are produced in limited quantities to maintain exclusivity and craftsmanship quality.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, we provide a tracking number via email so you can monitor its delivery status in real-time.",
    },
]


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-serif text-center text-gray-900 mb-10">
                    Frequently Asked Questions
                </h2>

                {/* FAQs */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="font-medium text-gray-800">{faq.question}</span>
                                <span className="text-gray-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
