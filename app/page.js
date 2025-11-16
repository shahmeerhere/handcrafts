"use client";

import React from "react";
import Section from "./section/page";
import StructuredData from "./components/StructuredData";
import Image from "next/image";
  import { Menu, Search, ShoppingCart, User } from 'lucide-react'; // Example icons

export default function LandingPage() {

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("You are now subscribed to Handcrafts!");
  };



// Helper component for the Category/Product Cards
const ProductCard = ({ title, price }) => (
  <div className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition">
    <div className="w-full h-48 bg-gray-200 mb-3 rounded-md">
      {/*  */}
    </div>
    <p className="font-medium text-gray-800">{title}</p>
    <p className="text-sm font-bold text-red-600">${price}</p>
  </div>
);

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="store" />

      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black font-sans min-h-screen">

        {/* Hero Section */}
        <section
          className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/comps/heropic.jpeg')" }}
        >
          {/* Natural Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-green-700/30 to-yellow-200/20 z-0"></div>

          <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-lg mb-4">
              Handcrafts
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
              Discover authentic handcrafted treasures. Each piece is designed to bring character, elegance, and uniqueness to your lifestyle.
            </p>
            <button className="group mt-4 px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/20 text-white font-semibold tracking-wide flex items-center gap-3 hover:bg-white/30 transition duration-300">
              Explore Collections
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white transition-colors duration-300">
                <path d="M12 2l2.5 7.5L22 9l-5 4 1.5 7L12 16l-6.5 4 1.5-7-5-4 7.5-1.5L12 2z" />
              </svg>
            </button>
          </div>
        </section>


        {/* 🖼️ Showcase Section with Fixed Background */}
        <section
          className="relative w-full h-[70vh] mt-12 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed rounded-lg"
          style={{ backgroundImage: 'url("/1.jpg")' }} // Set the image path here
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">Handcrafts</h2>
            <p className="text-md md:text-lg mt-1">For those who value true craftsmanship</p>
          </div>
        </section>



        {/* Product Highlights */}
        <section className="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-12">
          {[
            { img: "/2.jpg", title: "Wooden Decor", desc: "Elegant handcrafted pieces for your home and office, unique and full of character." },
            { img: "/3.jpg", title: "Artisan Accessories", desc: "Handcrafted accessories designed with care for gifting or personal collection." },
            { img: "/4.jpg", title: "Gift Items", desc: "Unique gifts and collectibles that tell a story and celebrate artisan skill." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">

              {/* Image */}
              <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={item.img}       // use proper path (from /public)
                  alt={item.title}     // SEO-friendly alt text
                  fill                 // cover the container
                  className="object-cover"
                  quality={100}        // high quality
                  priority={idx === 0} // optionally prioritize the first image
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>

            </div>
          ))}
        </section>

        {/* Announcement Bar */}
        <div className="bg-gray-800 text-white text-center py-3 font-semibold text-lg">
          20% off all handcrafted items – Limited Time Offer!
        </div>

        {/* Newsletter / Subscription */}
        <section className="max-w-3xl mx-auto mt-12 mb-12 p-6 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-6 text-gray-700">Subscribe to receive the latest handcrafted collections and exclusive offers.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full md:w-2/3 p-3 rounded-lg border border-gray-300"
            />
            <button type="submit" className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition">
              Subscribe
            </button>
          </form>
        </section>

        {/* Contact / Product Info */}
        <section className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Contact & Product Details</h3>
            <p className="text-gray-700 mb-4">
              For inquiries about our handcrafted products, custom orders, or collaborations, reach out to us at <a href="mailto:info@handcrafts.com" className="text-black underline">info@handcrafts.com</a>.
            </p>
            <p className="text-gray-700">
              Every product is crafted with care and authenticity. Our artisans use traditional techniques combined with modern aesthetics to create timeless pieces.
            </p>
          </div>
          <div className="md:w-1/2 aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            <span>Image Placeholder</span>
          </div>
        </section>

      </div>
    </>
  );
}
