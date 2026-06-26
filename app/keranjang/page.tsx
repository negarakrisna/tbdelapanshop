"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem, getCart, saveCart } from "../lib/cart";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

function itemPrice(item: CartItem) {
  return typeof item.product.discountPrice === "number"
    ? item.product.discountPrice
    : item.product.price;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateCart = (nextCart: CartItem[]) => {
    setCart(nextCart);
    saveCart(nextCart);
  };

  const increaseQty = (productId: string) => {
    updateCart(
      cart.map((item) =>
        item.product.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (productId: string) => {
    updateCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    updateCart(cart.filter((item) => item.product.id !== productId));
  };

  const total = cart.reduce((sum, item) => {
    return sum + itemPrice(item) * item.qty;
  }, 0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <Link
        href="/"
        className="mb-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Lanjut Belanja
      </Link>

      <h1 className="text-2xl font-bold text-slate-900">Keranjang Belanja</h1>

      {cart.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          Keranjang masih kosong.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_360px]">
          <section className="space-y-4">
            {cart.map((item) => {
              const price = itemPrice(item);
              const image = item.product.images?.[0] || "/file.svg";

              return (
                <div
                  key={item.product.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <img
                      src={image}
                      alt={item.product.title}
                      className="h-24 w-24 rounded-xl object-contain"
                    />

                    <div className="flex-1">
                      <h2 className="line-clamp-2 font-bold text-slate-900">
                        {item.product.title}
                      </h2>

                      <div className="mt-2 font-bold text-blue-700">
                        Rp. {rupiah(price)}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
                          <button
                            type="button"
                            onClick={() => decreaseQty(item.product.id)}
                            className="h-9 w-9 font-bold"
                          >
                            -
                          </button>

                          <div className="flex h-9 w-11 items-center justify-center border-x border-slate-200 text-sm font-bold">
                            {item.qty}
                          </div>

                          <button
                            type="button"
                            onClick={() => increaseQty(item.product.id)}
                            className="h-9 w-9 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="text-sm font-semibold text-red-600"
                        >
                          Hapus
                        </button>
                      </div>

                      <div className="mt-3 text-sm text-slate-600">
                        Subtotal:{" "}
                        <span className="font-bold text-slate-900">
                          Rp. {rupiah(price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Ringkasan Belanja</h2>

            <div className="mt-4 flex justify-between text-sm">
              <span>Subtotal Barang</span>
              <span className="font-bold">Rp. {rupiah(total)}</span>
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
              Ongkir belum termasuk dan akan dikonfirmasi admin.
            </div>

            <Link
              href="/checkout"
              className="mt-5 block w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-bold text-white"
>
              Lanjut Checkout
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}