// Comprehensive product database for MORVA shoe store
export const products = [
  // Men's Collection
  {
    id: 1,
    name: "Trail Bernard",
    brand: "MORVA",
    category: "Men's Shoes",
    subcategory: "Hiking & Outdoor",
    originalPrice: 12999,
    discountedPrice: 8999,
    discount: 31,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true,
    bestseller: true,
    description: "Premium leather trail shoes designed for the modern adventurer. Built with comfort and style in mind, these shoes offer superior support for all-day wear.",
    features: [
      "Premium leather construction",
      "Breathable mesh lining",
      "Cushioned insole",
      "Durable rubber outsole",
      "Water-resistant upper",
      "Available in multiple colors"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: {
      red: {
        name: "Crimson Red",
        image: "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe",
        hex: "#ff0000"
      },
      black: {
        name: "Midnight Black",
        image: "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe",
        hex: "#000000"
      },
      beige: {
        name: "Desert Beige",
        image: "https://placehold.co/600x400/f5f5dc/000000?text=Beige+Shoe",
        hex: "#f5f5dc"
      },
    },
    images: [
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+1",
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+2", 
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+3",
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+4"
    ],
    specifications: {
      "Material": "Premium Leather",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "350g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 2,
    name: "Eliss Zeox",
    brand: "MORVA",
    category: "Women's Shoes",
    subcategory: "Casual",
    originalPrice: 10999,
    discountedPrice: 7999,
    discount: 27,
    rating: 4.8,
    reviews: 95,
    inStock: true,
    featured: true,
    bestseller: false,
    description: "Elegant and sophisticated shoes that blend comfort with contemporary style. Perfect for both professional and casual settings.",
    features: [
      "Luxury leather upper",
      "Memory foam insole",
      "Flexible sole design",
      "Easy slip-on style",
      "Handcrafted details",
      "Lightweight construction"
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    colors: {
      black: {
        name: "Classic Black",
        image: "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe",
        hex: "#000000"
      },
      red: {
        name: "Bold Red",
        image: "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe",
        hex: "#ff0000"
      },
      navy: {
        name: "Navy Blue",
        image: "https://placehold.co/600x400/000080/ffffff?text=Navy+Shoe",
        hex: "#000080"
      }
    },
    images: [
      "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe+1",
      "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe+2",
      "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe+3"
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Sole": "Synthetic",
      "Closure": "Slip-on",
      "Weight": "280g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 3,
    name: "Ross Zeox",
    brand: "MORVA",
    category: "Men's Shoes",
    subcategory: "Formal",
    originalPrice: 11999,
    discountedPrice: 8499,
    discount: 29,
    rating: 4.3,
    reviews: 87,
    inStock: true,
    featured: false,
    bestseller: false,
    description: "Classic formal shoes that combine traditional craftsmanship with modern comfort. Perfect for business meetings and special occasions.",
    features: [
      "Oxford style design",
      "Premium leather upper",
      "Leather sole",
      "Hand-stitched details",
      "Comfortable fit",
      "Timeless elegance"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: {
      beige: {
        name: "Desert Beige",
        image: "https://placehold.co/600x400/f5f5dc/000000?text=Beige+Shoe",
        hex: "#f5f5dc"
      },
      black: {
        name: "Midnight Black",
        image: "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe",
        hex: "#000000"
      },
      brown: {
        name: "Rich Brown",
        image: "https://placehold.co/600x400/8b4513/ffffff?text=Brown+Shoe",
        hex: "#8b4513"
      }
    },
    images: [
      "https://placehold.co/600x400/f5f5dc/000000?text=Beige+Shoe+1",
      "https://placehold.co/600x400/f5f5dc/000000?text=Beige+Shoe+2",
      "https://placehold.co/600x400/f5f5dc/000000?text=Beige+Shoe+3"
    ],
    specifications: {
      "Material": "Full Grain Leather",
      "Sole": "Leather",
      "Closure": "Lace-up",
      "Weight": "420g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 4,
    name: "Urban Runner",
    brand: "MORVA",
    category: "Men's Shoes",
    subcategory: "Athletic",
    originalPrice: 8999,
    discountedPrice: 6499,
    discount: 28,
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true,
    bestseller: true,
    description: "High-performance running shoes designed for urban environments. Perfect for daily workouts and city running.",
    features: [
      "Breathable mesh upper",
      "Cushioned midsole",
      "Lightweight design",
      "Flexible outsole",
      "Moisture-wicking lining",
      "Shock absorption"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: {
      blue: {
        name: "Ocean Blue",
        image: "https://placehold.co/600x400/0000ff/ffffff?text=Blue+Shoe",
        hex: "#0000ff"
      },
      grey: {
        name: "Charcoal Grey",
        image: "https://placehold.co/600x400/808080/ffffff?text=Grey+Shoe",
        hex: "#808080"
      },
      white: {
        name: "Pure White",
        image: "https://placehold.co/600x400/ffffff/000000?text=White+Shoe",
        hex: "#ffffff"
      }
    },
    images: [
      "https://placehold.co/600x400/0000ff/ffffff?text=Blue+Shoe+1",
      "https://placehold.co/600x400/0000ff/ffffff?text=Blue+Shoe+2",
      "https://placehold.co/600x400/0000ff/ffffff?text=Blue+Shoe+3"
    ],
    specifications: {
      "Material": "Mesh & Synthetic",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "320g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 5,
    name: "Aero Glide",
    brand: "MORVA",
    category: "Women's Shoes",
    subcategory: "Athletic",
    originalPrice: 9999,
    discountedPrice: 7499,
    discount: 25,
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
    bestseller: true,
    description: "Lightweight athletic shoes designed for women who demand both style and performance. Perfect for gym workouts and outdoor activities.",
    features: [
      "Lightweight construction",
      "Breathable upper",
      "Cushioned insole",
      "Flexible sole",
      "Fashion-forward design",
      "All-day comfort"
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    colors: {
      white: {
        name: "Pearl White",
        image: "https://placehold.co/600x400/ffffff/000000?text=White+Shoe",
        hex: "#ffffff"
      },
      green: {
        name: "Forest Green",
        image: "https://placehold.co/600x400/008000/ffffff?text=Green+Shoe",
        hex: "#008000"
      },
      orange: {
        name: "Sunset Orange",
        image: "https://placehold.co/600x400/ffa500/000000?text=Orange+Shoe",
        hex: "#ffa500"
      },
      pink: {
        name: "Rose Pink",
        image: "https://placehold.co/600x400/ffc0cb/000000?text=Pink+Shoe",
        hex: "#ffc0cb"
      }
    },
    images: [
      "https://placehold.co/600x400/ffffff/000000?text=White+Shoe+1",
      "https://placehold.co/600x400/ffffff/000000?text=White+Shoe+2",
      "https://placehold.co/600x400/ffffff/000000?text=White+Shoe+3"
    ],
    specifications: {
      "Material": "Mesh & Synthetic",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "280g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 6,
    name: "Sport Max",
    brand: "MORVA",
    category: "Men's Shoes",
    subcategory: "Athletic",
    originalPrice: 12999,
    discountedPrice: 9999,
    discount: 23,
    rating: 4.4,
    reviews: 178,
    inStock: true,
    featured: false,
    bestseller: false,
    description: "High-performance sports shoes designed for serious athletes. Built for speed, comfort, and durability.",
    features: [
      "Advanced cushioning technology",
      "Breathable mesh upper",
      "Lightweight design",
      "Durable rubber outsole",
      "Shock absorption",
      "Professional grade"
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: {
      yellow: {
        name: "Electric Yellow",
        image: "https://placehold.co/600x400/ffff00/000000?text=Yellow+Shoe",
        hex: "#ffff00"
      },
      black: {
        name: "Midnight Black",
        image: "https://placehold.co/600x400/000000/ffffff?text=Black+Shoe",
        hex: "#000000"
      },
      red: {
        name: "Racing Red",
        image: "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe",
        hex: "#ff0000"
      }
    },
    images: [
      "https://placehold.co/600x400/ffff00/000000?text=Yellow+Shoe+1",
      "https://placehold.co/600x400/ffff00/000000?text=Yellow+Shoe+2",
      "https://placehold.co/600x400/ffff00/000000?text=Yellow+Shoe+3"
    ],
    specifications: {
      "Material": "Synthetic & Mesh",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "340g",
      "Origin": "Pakistan"
    }
  },
  // Kids Collection
  {
    id: 7,
    name: "Kids Explorer",
    brand: "MORVA",
    category: "Kids' Shoes",
    subcategory: "Casual",
    originalPrice: 4999,
    discountedPrice: 3499,
    discount: 30,
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
    bestseller: true,
    description: "Comfortable and durable shoes designed for active kids. Perfect for school, play, and everyday adventures.",
    features: [
      "Easy-to-wear design",
      "Durable construction",
      "Comfortable fit",
      "Fun colors",
      "Easy to clean",
      "Non-slip sole"
    ],
    sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    colors: {
      blue: {
        name: "Sky Blue",
        image: "https://placehold.co/600x400/87ceeb/000000?text=Blue+Shoe",
        hex: "#87ceeb"
      },
      pink: {
        name: "Bubblegum Pink",
        image: "https://placehold.co/600x400/ffb6c1/000000?text=Pink+Shoe",
        hex: "#ffb6c1"
      },
      green: {
        name: "Lime Green",
        image: "https://placehold.co/600x400/32cd32/000000?text=Green+Shoe",
        hex: "#32cd32"
      }
    },
    images: [
      "https://placehold.co/600x400/87ceeb/000000?text=Blue+Shoe+1",
      "https://placehold.co/600x400/87ceeb/000000?text=Blue+Shoe+2",
      "https://placehold.co/600x400/87ceeb/000000?text=Blue+Shoe+3"
    ],
    specifications: {
      "Material": "Synthetic",
      "Sole": "Rubber",
      "Closure": "Velcro",
      "Weight": "180g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 8,
    name: "Kids Runner",
    brand: "MORVA",
    category: "Kids' Shoes",
    subcategory: "Athletic",
    originalPrice: 5999,
    discountedPrice: 4299,
    discount: 28,
    rating: 4.5,
    reviews: 67,
    inStock: true,
    featured: false,
    bestseller: false,
    description: "Lightweight running shoes for active kids. Designed for comfort and performance during sports and play.",
    features: [
      "Lightweight design",
      "Breathable upper",
      "Cushioned sole",
      "Easy to put on",
      "Durable construction",
      "Fun styling"
    ],
    sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    colors: {
      red: {
        name: "Fire Red",
        image: "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe",
        hex: "#ff0000"
      },
      purple: {
        name: "Royal Purple",
        image: "https://placehold.co/600x400/800080/ffffff?text=Purple+Shoe",
        hex: "#800080"
      },
      orange: {
        name: "Sunset Orange",
        image: "https://placehold.co/600x400/ffa500/000000?text=Orange+Shoe",
        hex: "#ffa500"
      }
    },
    images: [
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+1",
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+2",
      "https://placehold.co/600x400/ff0000/ffffff?text=Red+Shoe+3"
    ],
    specifications: {
      "Material": "Mesh & Synthetic",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Weight": "200g",
      "Origin": "Pakistan"
    }
  },
  // Accessories
  {
    id: 9,
    name: "Premium Shoe Care Kit",
    brand: "MORVA",
    category: "Accessories",
    subcategory: "Shoe Care",
    originalPrice: 2999,
    discountedPrice: 1999,
    discount: 33,
    rating: 4.8,
    reviews: 45,
    inStock: true,
    featured: false,
    bestseller: false,
    description: "Complete shoe care kit to keep your MORVA shoes looking brand new. Includes leather conditioner, brush, and polish.",
    features: [
      "Leather conditioner",
      "Soft bristle brush",
      "Shoe polish",
      "Microfiber cloth",
      "Easy to use",
      "Long-lasting results"
    ],
    sizes: ["One Size"],
    colors: {
      black: {
        name: "Classic Black",
        image: "https://placehold.co/600x400/000000/ffffff?text=Care+Kit",
        hex: "#000000"
      }
    },
    images: [
      "https://placehold.co/600x400/000000/ffffff?text=Care+Kit+1",
      "https://placehold.co/600x400/000000/ffffff?text=Care+Kit+2",
      "https://placehold.co/600x400/000000/ffffff?text=Care+Kit+3"
    ],
    specifications: {
      "Material": "Various",
      "Weight": "500g",
      "Origin": "Pakistan"
    }
  },
  {
    id: 10,
    name: "Comfort Insoles",
    brand: "MORVA",
    category: "Accessories",
    subcategory: "Insoles",
    originalPrice: 1999,
    discountedPrice: 1499,
    discount: 25,
    rating: 4.7,
    reviews: 78,
    inStock: true,
    featured: false,
    bestseller: true,
    description: "Premium comfort insoles designed to provide extra cushioning and support for all-day comfort.",
    features: [
      "Memory foam technology",
      "Arch support",
      "Moisture-wicking",
      "Anti-bacterial",
      "Universal fit",
      "Long-lasting comfort"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: {
      blue: {
        name: "Ocean Blue",
        image: "https://placehold.co/600x400/0000ff/ffffff?text=Insoles",
        hex: "#0000ff"
      }
    },
    images: [
      "https://placehold.co/600x400/0000ff/ffffff?text=Insoles+1",
      "https://placehold.co/600x400/0000ff/ffffff?text=Insoles+2"
    ],
    specifications: {
      "Material": "Memory Foam",
      "Weight": "100g",
      "Origin": "Pakistan"
    }
  }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = () => {
  return products.filter(product => product.bestseller);
};

export const getProductsBySubcategory = (subcategory) => {
  return products.filter(product => product.subcategory === subcategory);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.subcategory.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};

export const getSubcategories = (category) => {
  const subcategories = [...new Set(
    products
      .filter(product => product.category === category)
      .map(product => product.subcategory)
  )];
  return subcategories;
};
