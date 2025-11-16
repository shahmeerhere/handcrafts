"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaFilter } from "react-icons/fa";
import { useCart } from "../context/CartContext";

// Updated products data
const products = [
  {
    id: 1,
    name: "Aurora Sneakers",
    brand: "Handcrafts",
    subcategory: "Casual",
    category: "Men's Shoes",
    colors: {
      black: { name: "Black", hex: "#000000", image: "/products/aurora-black.jpg" },
      white: { name: "White", hex: "#FFFFFF", image: "/products/aurora-white.jpg" },
    },
    originalPrice: 7500,
    discountedPrice: 6200,
    discount: 17,
    rating: 4.5,
    reviews: 120,
    featured: true,
    bestseller: false,
  },
  {
    id: 2,
    name: "Luna Heels",
    brand: "Handcrafts",
    subcategory: "Party",
    category: "Women's Shoes",
    colors: {
      red: { name: "Red", hex: "#FF0000", image: "/products/luna-red.jpg" },
      nude: { name: "Nude", hex: "#F5E1D0", image: "/products/luna-nude.jpg" },
    },
    originalPrice: 9200,
    discountedPrice: 8200,
    discount: 11,
    rating: 4.8,
    reviews: 85,
    featured: false,
    bestseller: true,
  },
  {
    id: 3,
    name: "Mini Trek Kids",
    brand: "Handcrafts",
    subcategory: "Outdoor",
    category: "Kids' Shoes",
    colors: {
      blue: { name: "Blue", hex: "#1E90FF", image: "/products/mini-trek-blue.jpg" },
      green: { name: "Green", hex: "#32CD32", image: "/products/mini-trek-green.jpg" },
    },
    originalPrice: 4500,
    discountedPrice: 4000,
    discount: 11,
    rating: 4.2,
    reviews: 40,
    featured: true,
    bestseller: true,
  },
  {
    id: 4,
    name: "Classic Loafers",
    brand: "Handcrafts",
    subcategory: "Formal",
    category: "Men's Shoes",
    colors: {
      brown: { name: "Brown", hex: "#8B4513", image: "/products/classic-brown.jpg" },
      black: { name: "Black", hex: "#000000", image: "/products/classic-black.jpg" },
    },
    originalPrice: 6800,
    discountedPrice: 6000,
    discount: 12,
    rating: 4.6,
    reviews: 70,
    featured: false,
    bestseller: true,
  },
  {
    id: 5,
    name: "Eclipse Sandals",
    brand: "Handcrafts",
    subcategory: "Casual",
    category: "Women's Shoes",
    colors: {
      tan: { name: "Tan", hex: "#D2B48C", image: "/products/eclipse-tan.jpg" },
      black: { name: "Black", hex: "#000000", image: "/products/eclipse-black.jpg" },
    },
    originalPrice: 5300,
    discountedPrice: 4800,
    discount: 9,
    rating: 4.3,
    reviews: 55,
    featured: true,
    bestseller: false,
  }
];

// Helper functions
const getFeaturedProducts = () => products.filter(p => p.featured);
const getBestsellerProducts = () => products.filter(p => p.bestseller);

const App = () => {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, shoe) => {
      acc[shoe.id] = Object.keys(shoe.colors)[0];
      return acc;
    }, {})
  );
  const [wishlist, setWishlist] = useState(new Set());
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const { addToCart } = useCart();

  const handleColorChange = (shoeId, colorKey) => {
    setSelectedColors(prev => ({ ...prev, [shoeId]: colorKey }));
  };

  const handleAddToCart = (shoe) => {
    const selectedColor = selectedColors[shoe.id];
    addToCart(shoe, selectedColor, 'M', 1);
    alert(`${shoe.name} added to cart!`);
  };

  const handleWishlist = (shoeId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(shoeId)) newWishlist.delete(shoeId);
      else newWishlist.add(shoeId);
      return newWishlist;
    });
  };

  // Filter products
  let filteredProducts = products;
  if (filter === 'featured') filteredProducts = getFeaturedProducts();
  else if (filter === 'bestsellers') filteredProducts = getBestsellerProducts();
  else if (filter === 'men') filteredProducts = products.filter(p => p.category === "Men's Shoes");
  else if (filter === 'women') filteredProducts = products.filter(p => p.category === "Women's Shoes");
  else if (filter === 'kids') filteredProducts = products.filter(p => p.category === "Kids' Shoes");
  else if (filter === 'accessories') filteredProducts = products.filter(p => p.category === "Accessories");

  // Sort products
  if (sortBy === 'price-low') filteredProducts = [...filteredProducts].sort((a, b) => a.discountedPrice - b.discountedPrice);
  else if (sortBy === 'price-high') filteredProducts = [...filteredProducts].sort((a, b) => b.discountedPrice - a.discountedPrice);
  else if (sortBy === 'rating') filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'newest') filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Collection</h2>
          <p className="text-gray-600 text-center mb-6">Discover the perfect pair for every occasion</p>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mb-8">
            <div className="flex flex-wrap items-center space-x-4">
              <span className="text-gray-700 font-medium">Filter:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">All Products</option>
                <option value="featured">Featured</option>
                <option value="bestsellers">Bestsellers</option>
                <option value="men">Men's Shoes</option>
                <option value="women">Women's Shoes</option>
                <option value="kids">Kids' Shoes</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(shoe => {
            const selectedColor = selectedColors[shoe.id];
            const isWishlisted = wishlist.has(shoe.id);

            return (
              <div key={shoe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${shoe.id}`}>
                    <img
                      src={shoe.colors[selectedColor]?.image || shoe.colors[Object.keys(shoe.colors)[0]].image}
                      alt={`${shoe.name} in ${selectedColor}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Quick Actions */}
                  <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleWishlist(shoe.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <FaHeart className="w-4 h-4" />
                    </button>
                    <Link
                      href={`/products/${shoe.id}`}
                      className="w-8 h-8 rounded-full bg-white text-gray-600 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <FaEye className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {shoe.discount > 0 && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {shoe.discount}% OFF
                      </span>
                    )}
                    {shoe.featured && (
                      <span className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    {shoe.bestseller && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Bestseller
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg text-black mb-1">{shoe.name}</h3>
                    <p className="text-sm text-gray-600">{shoe.brand}</p>
                    <p className="text-xs text-gray-500">{shoe.subcategory}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(shoe.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({shoe.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-black">
                      Rs. {shoe.discountedPrice.toLocaleString()}
                    </span>
                    {shoe.originalPrice > shoe.discountedPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rs. {shoe.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Color Selection */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {Object.entries(shoe.colors).map(([colorKey, colorData]) => (
                      <button
                        key={colorKey}
                        onClick={() => handleColorChange(shoe.id, colorKey)}
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedColor === colorKey ? "border-black" : "border-gray-300"
                        } transition-all duration-200`}
                        style={{ backgroundColor: colorData.hex }}
                        aria-label={`Select ${colorData.name} color for ${shoe.name}`}
                      />
                    ))}
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(shoe)}
                    className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <FaFilter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
            <button
              onClick={() => setFilter('all')}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
