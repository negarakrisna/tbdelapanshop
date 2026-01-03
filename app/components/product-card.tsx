"use client";

import Image from "next/image";

export type Product = {
  id: string;
  title: string;
  brand?: string;
  price: number;
  discountPrice?: number;
  discountLabel?: string;
  image: string;
  shopeeUrl: string;
};

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

export default function ProductCard({ p }: { p: Product }) {
  const img =
    p.image?.startsWith("/") ? p.image : "/" + p.image.replace(/^public\//, "");

  return (
    <button
      onClick={() => window.open(p.shopeeUrl, "_blank")}
      className="w-full overflow-hidden rounded-2xl border bg-white shadow hover:shadow-md transition text-left"
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={img} alt={p.title} fill className="object-cover" />
        {p.discountLabel && (
          <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            {p.discountLabel}
          </span>
        )}
      </div>

      <div className="p-4">
        {p.brand && (
          <span className="mb-2 inline-block rounded-full border px-2 py-1 text-xs font-semibold text-blue-600">
            {p.brand}
          </span>
        )}

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold">{p.title}</h3>

        <div className="mt-3">
          {p.discountPrice ? (
            <>
              <div className="text-xs text-slate-400 line-through">
                Rp. {rupiah(p.price)}
              </div>
              <div className="font-bold text-blue-600">
                Rp. {rupiah(p.discountPrice)}
              </div>
            </>
          ) : (
            <div className="font-bold text-blue-600">
              Rp. {rupiah(p.price)}
            </div>
          )}
        </div>

        <div className="mt-3 text-xs font-semibold text-blue-600">
          Beli di Shopee →
        </div>
      </div>
    </button>
  );
}
