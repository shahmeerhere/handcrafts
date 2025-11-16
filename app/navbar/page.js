"use client";

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/SearchBar";

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["Jewelry", "/jewelry"],
    ["Decor", "/home-decor"],
    ["Art", "/art"],
    ["Acc.", "/acc"],
    ["New", "/newarrival"],
    ["Sale", "/onsale"],
    ["Workshops", "/workshops"],
    ["About Us", "/about"]
  ];

  const loginLink = "/admin/login"; // always points here

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 backdrop-blur-md border-b border-gray-200/50 shadow z-50">
      <div className="flex justify-between items-center h-[70px] px-4 md:px-6">
        {/* Site Name */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif text-black hover:text-gray-700 transition-colors"
        >
          HANDCRAFTS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="uppercase text-gray-800 font-medium text-sm px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Cart Icon */}
          <Link href="/cart" className="relative text-black">
            <FaShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold text-[10px] md:text-xs">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Login / Admin Icon */}
          <Link href={loginLink} className="text-black">
            <FaRegUser className="w-5 h-5 md:w-6 md:h-6" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-1 py-3 bg-gray-50 border-t border-gray-200 animate-fade-in-up">
          {navLinks.map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="uppercase block text-gray-800 font-medium text-sm px-3 py-1 rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile login link */}
          <li>
            <Link
              href={loginLink}
              className="uppercase block text-gray-800 font-medium text-sm px-3 py-1 rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login / Admin
            </Link>
          </li>
        </ul>
      )}

      {/* SearchBar */}
      <div className="px-4 pb-3 md:pb-0">
        <div className="w-full max-w-md mx-auto md:max-w-lg text-black">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
