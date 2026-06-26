"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../types/product";
import QuantitySelector from "./quantity-selector";
import { addToCart } from "../lib/cart";
import { SITE } from "../config/site";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

export default function ProductPurchase({ product }: { product: Product }) {
  const router = useRouter();

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const harga =
    typeof product.discountPrice === "number"
      ? product.discountPrice
      : product.price;

  const subtotal = harga * qty;

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    router.push("/checkout");
  };

  const handleChatWhatsapp = () => {
    const message = `Halo Admin ${SITE.name} 👋

Saya ingin bertanya mengenai produk ini:

${product.title}

Mohon info stok dan cara ordernya.`;

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      {product.brand && (
        <span className="inline-flex rounded-full border border-blue-500 px-3 py-1 text-xs font-semibold text-blue-700">
          {product.brand}
        </span>
      )}

      <h1 className="mt-4 text-xl font-bold leading-snug text-slate-900 md:text-2xl">
        {product.title}
      </h1>

      <div className="mt-5">
        <div className="text-2xl font-bold text-blue-700 md:text-3xl">
          Rp. {rupiah(harga)}
        </div>

        {typeof product.discountPrice === "number" && (
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-slate-400 line-through">
              Rp. {rupiah(product.price)}
            </span>

            {product.discountLabel && (
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">
                {product.discountLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
        <div className="font-semibold text-slate-900">Ongkir belum termasuk</div>
        <div className="mt-1">
          Ongkir akan dikonfirmasi admin setelah alamat pengiriman diterima.
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <div className="font-semibold text-slate-900">Status Produk</div>
        <div className="mt-1">
          {product.isAvailable === false ? "Stok habis" : "Tersedia"}
        </div>
      </div>

      <div className="mt-5">
        <QuantitySelector value={qty} onChange={setQty} />
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-semibold text-slate-500">Subtotal</div>
        <div className="mt-1 text-2xl font-bold text-blue-700">
          Rp. {rupiah(subtotal)}
        </div>
      </div>

      {added && (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-semibold text-green-700">
          Produk berhasil ditambahkan ke keranjang.
        </div>
      )}

      <div className="mt-6 grid gap-3">
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={product.isAvailable === false}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Beli Sekarang
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={product.isAvailable === false}
          className="rounded-xl border border-blue-600 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
        >
          Tambah Keranjang
        </button>

        <button
          type="button"
          onClick={handleChatWhatsapp}
          className="rounded-xl border border-green-500 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
        >
          Chat WhatsApp
        </button>
      </div>
    </section>
  );
}