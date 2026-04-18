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
import type { Product } from "@/lib/types";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  /** Increments on every `addItem` — use for cart icon / toast animations */
  addSequence: number;
  /** Set briefly after add for toast copy; cleared automatically */
  lastAddedProductName: string | null;
  addItem: (product: Product, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeLine: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [addSequence, setAddSequence] = useState(0);
  const [lastAddedProductName, setLastAddedProductName] = useState<string | null>(null);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.product.id === product.id);
      if (i === -1) {
        return [...prev, { product, quantity }];
      }
      const next = [...prev];
      next[i] = {
        ...next[i],
        quantity: next[i].quantity + quantity,
      };
      return next;
    });
    setAddSequence((n) => n + 1);
    setLastAddedProductName(product.name);
  }, []);

  useEffect(() => {
    if (addSequence === 0) return;
    const t = window.setTimeout(() => setLastAddedProductName(null), 2800);
    return () => window.clearTimeout(t);
  }, [addSequence]);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.product.id !== productId));
      return;
    }
    setLines((prev) =>
      prev.map((l) =>
        l.product.id === productId ? { ...l, quantity } : l,
      ),
    );
  }, []);

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== productId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = lines.reduce(
      (sum, l) => sum + l.product.price * l.quantity,
      0,
    );
    return {
      lines,
      itemCount,
      subtotal,
      addSequence,
      lastAddedProductName,
      addItem,
      setQuantity,
      removeLine,
      clear,
    };
  }, [lines, addSequence, lastAddedProductName, addItem, setQuantity, removeLine, clear]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
