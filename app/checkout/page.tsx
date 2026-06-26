"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem, getCart } from "../lib/cart";

const WA_NUMBER = "6282245266060";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

function itemPrice(item: CartItem) {
  return typeof item.product.discountPrice === "number"
    ? item.product.discountPrice
    : item.product.price;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((sum, item) => {
    return sum + itemPrice(item) * item.qty;
  }, 0);

  const checkoutToWhatsapp = () => {
    const itemsText = cart
      .map((item, index) => {
        const price = itemPrice(item);
        return `${index + 1}. ${item.product.title}
Qty: ${item.qty}
Harga: Rp ${rupiah(price)}
Subtotal: Rp ${rupiah(price * item.qty)}`;
      })
      .join("\n\n");

    const message = `Halo TB Delapan.

Saya ingin memesan:

${itemsText}

Subtotal Barang:
Rp ${rupiah(total)}

Catatan:
Ongkir belum termasuk dan mohon dihitungkan admin.

Data Pembeli:
Nama: ${name}
No HP: ${phone}
Alamat: ${address}
Catatan Tambahan: ${note || "-"}`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <Link
        href="/keranjang"
        className="mb-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Kembali ke Keranjang
      </Link>

      <h1 className="text-2xl font-bold text-slate-900">Checkout</h1>

      {cart.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          Keranjang masih kosong.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_360px]">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Data Pembeli</h2>

            <div className="mt-5 grid gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nomor HP / WhatsApp"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Alamat lengkap pengiriman"
                rows={4}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Catatan tambahan, contoh: warna, patokan rumah, jam kirim"
                rows={3}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </section>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Ringkasan Pesanan</h2>

            <div className="mt-4 space-y-3">
              {cart.map((item) => {
                const price = itemPrice(item);

                return (
                  <div key={item.product.id} className="text-sm">
                    <div className="font-semibold text-slate-900">
                      {item.product.title}
                    </div>
                    <div className="mt-1 text-slate-600">
                      {item.qty} x Rp. {rupiah(price)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal Barang</span>
                <span className="font-bold">Rp. {rupiah(total)}</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
              Ongkir belum termasuk dan akan dikonfirmasi admin.
            </div>

            <button
              type="button"
              onClick={checkoutToWhatsapp}
              disabled={!name || !phone || !address}
              className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Kirim Pesanan via WhatsApp
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}