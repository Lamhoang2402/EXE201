"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/features/products/types/product.types";
import { findAuthAccount } from "@/shared/constants/auth";
import type { CartItem, User } from "@/shared/types/store.types";

type AppContextValue = {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isLoginOpen: boolean;
  loginRedirect: string | null;
  openLogin: (redirect?: string) => void;
  closeLogin: () => void;
  user: User | null;
  isAdmin: boolean;
  isAuthReady: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const CART_KEY = "flow-cart";
const AUTH_KEY = "flow-auth";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function loadUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as User;
    if (!parsed.role) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRedirect, setLoginRedirect] = useState<string | null>(null);

  useEffect(() => {
    setCart(loadCart());
    setUser(loadUser());
    setIsAuthReady(true);
  }, []);

  useEffect(() => {
    if (!isAuthReady) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, isAuthReady]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart],
  );

  const addToCart = useCallback((product: Product, size: string) => {
    const key = `${product.id}-${size}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { key, product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.key === key ? { ...item, quantity } : item)),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const login = useCallback((email: string, password: string) => {
    const account = findAuthAccount(email, password);
    if (!account) return false;

    const nextUser: User = {
      email: account.email,
      name: account.name,
      role: account.role,
    };
    setUser(nextUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(nextUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const openLogin = useCallback((redirect?: string) => {
    setLoginRedirect(redirect ?? null);
    setIsLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setIsLoginOpen(false);
    setLoginRedirect(null);
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      isSearchOpen,
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
      isLoginOpen,
      loginRedirect,
      openLogin,
      closeLogin,
      user,
      isAdmin: user?.role === "admin",
      isAuthReady,
      login,
      logout,
    }),
    [
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      isSearchOpen,
      isLoginOpen,
      loginRedirect,
      openLogin,
      closeLogin,
      user,
      isAuthReady,
      login,
      logout,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
