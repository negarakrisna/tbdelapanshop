"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

export default function ProductCard({ p }: { p: Product }) {
  const coverImage = p.images?.[0] || "/file.svg";
  const harga =
    typeof p.discountPrice === "number" ? p.discountPrice : p.price;

  return (
    <Link
      href={`/produk/${p.slug}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Gambar Produk */}
      <div className="relative aspect-square bg-white p-4">
        <Image
          src={coverImage}
          alt={p.title}
          fill
          className="object-contain"
        />

        {p.discountLabel && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            {p.discountLabel}
          </span>
        )}
      </div>

      {/* Informasi Produk */}
      <div className="p-4">
        {p.brand && (
          <span className="inline-flex items-center rounded-full border border-blue-500 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
            {p.brand}
          </span>
        )}

        <h3 className="mt-3 line-clamp-2 min-h-[44px] text-sm font-semibold text-slate-800">
          {p.title}
        </h3>

        <div className="mt-3">
          {typeof p.discountPrice === "number" ? (
            <>
              <div className="text-xl font-bold text-blue-700">
                Rp. {rupiah(harga)}
              </div>

              <div className="text-xs text-slate-400 line-through">
                Rp. {rupiah(p.price)}
              </div>
            </>
          ) : (
            <div className="text-xl font-bold text-blue-700">
              Rp. {rupiah(harga)}
            </div>
          )}
        </div>

        <div className="mt-4 text-sm font-semibold text-blue-600">
          Lihat Produk →
        </div>
      </div>
    </Link>
  );
}