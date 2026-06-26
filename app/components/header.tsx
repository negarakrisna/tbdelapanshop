"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "../lib/cart";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(totalQty);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("focus", updateCartCount);
    window.addEventListener("cart-changed", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("focus", updateCartCount);
      window.removeEventListener("cart-changed", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" aria-label="Home" className="inline-flex items-center">
          <img
            src="/data/images/logo/logo-header-tbdelapanshop.png"
            alt="TBDelapanShop"
            className="h-8 w-auto"
          />
        </Link>

        <Link
          href="/keranjang"
          aria-label="Keranjang"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50"
        >
          <img
            src="/data/images/icons/cart.png"
            alt="Keranjang"
            className="h-6 w-6 object-contain"
          />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}