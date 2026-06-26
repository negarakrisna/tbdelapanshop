import { Product } from "../types/product";

export type CartItem = {
  product: Product;
  qty: number;
};

const CART_KEY = "tbdelapan_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartChanged();
}

export function notifyCartChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cart-changed"));
  }
}

export function addToCart(product: Product, qty: number) {
  const cart = getCart();

  const existingIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingIndex >= 0) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({ product, qty });
  }

  saveCart(cart);
}