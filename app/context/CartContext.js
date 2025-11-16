"use client";
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
        item.color === action.payload.color && 
        item.size === action.payload.size
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            item.color === action.payload.color && 
            item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
      
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
      
    case 'UPDATE_TOTALS':
      return {
        ...state,
        total: action.payload.total,
        itemCount: action.payload.itemCount
      };
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  // Calculate totals whenever items change
  useEffect(() => {
    const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    
    dispatch({ type: 'UPDATE_TOTALS', payload: { total, itemCount } });
  }, [state.items]);

  const addToCart = (product, color, size, quantity = 1) => {
    const cartId = `${product.id}-${color}-${size}`;
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        cartId,
        id: product.id,
        name: product.name,
        price: product.discountedPrice,
        originalPrice: product.originalPrice,
        image: product.colors[color]?.image || product.images[0],
        color,
        size,
        quantity,
        brand: product.brand
      }
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};