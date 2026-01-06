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
  shopeeUrl?: string; // masih boleh ada di JSON, tapi kita gak pakai untuk klik utama
};

const WA_NUMBER = "6282244113366";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

function buildWaLink(p: Product) {
  const harga = typeof p.discountPrice === "number" ? p.discountPrice : p.price;

  const message =
    `Halo kak 👋\n` +
    `Saya tertarik produk ini:\n\n` +
    `🛒 ${p.title}\n` +
    `💰 Rp ${rupiah(harga)}\n\n` +
    `Mohon info stok & cara order ya.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductCard({ p }: { p: Product }) {
  const img = p.image?.startsWith("/") ? p.image : "/" + (p.image || "").replace(/^public\//, "");
  const waLink = buildWaLink(p);

  const openWa = () => {
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openWa}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openWa();
      }}
      className="w-full overflow-hidden rounded-2xl border bg-white shadow hover:shadow-md transition text-left cursor-pointer"
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={img} alt={p.title} fill className="object-cover" />
        {p.discountLabel && (
          <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            {p.discountLabel}
          </span>
        )}
      </div>

      <div className="p-3">
        {p.brand && (
          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold text-blue-700">
            {p.brand}
          </span>
        )}

        <h3 className="mt-2 line-clamp-2 text-sm font-semibold">{p.title}</h3>

        <div className="mt-2">
          {typeof p.discountPrice === "number" ? (
            <>
              <div className="text-blue-700 font-bold">Rp. {rupiah(p.discountPrice)}</div>
              <div className="text-xs text-slate-400 line-through">Rp. {rupiah(p.price)}</div>
            </>
          ) : (
            <div className="text-blue-700 font-bold">Rp. {rupiah(p.price)}</div>
          )}
        </div>

        {/* Link kecil (bukan button) supaya gak ada nested button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // biar gak double open karena parent juga clickable
          className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          Chat WhatsApp →
        </a>
      </div>
    </div>
  );
}
