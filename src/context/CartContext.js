import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';

const CART_STORAGE_KEY = 'gatsby-ecommerce-cart';

const defaultState = {
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  registerOpenMiniCart: () => () => {},
};

export const CartContext = createContext(defaultState);

const getStoredCart = () => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {}
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const openMiniCartRef = useRef(null);

  useEffect(() => {
    setItems(getStoredCart());
  }, []);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const registerOpenMiniCart = useCallback((callback) => {
    openMiniCartRef.current = callback;
    return () => { openMiniCartRef.current = null; };
  }, []);

  const addToCart = useCallback((product) => {
    const id = `${product.name || 'Product'}-${product.image || ''}-${Date.now()}`;
    const color = product.colorOptions?.[0]?.title || product.color || '—';
    const size = product.sizeOptions?.[0] || product.size || '—';
    setItems((prev) => [
      ...prev,
      {
        id,
        image: product.image,
        alt: product.alt || '',
        name: product.name || 'Product',
        price: product.price ?? 0,
        color,
        size,
        quantity: 1,
      },
    ]);
    if (openMiniCartRef.current) openMiniCartRef.current();
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const next = Math.max(1, Number(quantity) || 1);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: next } : item))
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        registerOpenMiniCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
