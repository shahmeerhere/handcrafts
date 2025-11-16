"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { searchProducts } from '../data/products';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = searchProducts(query);
      setResults(searchResults.slice(0, 5)); // Limit to 5 results
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Redirect to search results page
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search for shoes, brands, categories..."
            className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (query.length > 2) && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={product.colors[Object.keys(product.colors)[0]]?.image || "https://placehold.co/300x200/000000/ffffff?text=No+Image"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-black">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.brand} • {product.category}</p>
                    <p className="text-sm font-semibold text-black">
                      Rs. {product.discountedPrice.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
              <div className="border-t border-gray-200 p-3">
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  className="text-black font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  View all results for "{query}"
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No products found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
