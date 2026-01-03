// app/page.tsx
import products from "@/public/data/products.json";

type Product = {
  id: string;
  title: string;
  brand: string;
  price: number;
  discountPrice: number;
  discountLabel: string;
  image: string;
  shopeeUrl: string; // kalau ternyata namanya beda, bilang, aku sesuaikan
};

function formatRupiah(n: number) {
  // format sederhana tanpa Intl biar aman
  const s = Math.round(n).toString();
  const parts: string[] = [];
  for (let i = s.length; i > 0; i -= 3) {
    parts.unshift(s.substring(Math.max(0, i - 3), i));
  }
  return `Rp. ${parts.join(".")}`;
}

export default function HomePage() {
  const items = (products as unknown as Product[]).slice(0, 13);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((p) => (
            <a
              key={p.id}
              href={p.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-2 transition hover:shadow-sm"
            >
              {/* image */}
              <div className="aspect-square overflow-hidden rounded-lg bg-slate-50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* content */}
              <div className="mt-2 space-y-1">
                {/* brand kecil */}
                <p className="inline-flex max-w-full rounded-full border border-blue-600 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                  {p.brand}
                </p>

                {/* title */}
                <p className="line-clamp-2 text-xs font-medium text-slate-900">
                  {p.title}
                </p>

                {/* harga */}
                {p.discountPrice > 0 && p.discountPrice < p.price ? (
                  <div className="space-y-0.5">
                    <p className="text-[11px] text-slate-400 line-through">
                      {formatRupiah(p.price)}
                    </p>
                    <p className="text-sm font-bold text-blue-600">
                      {formatRupiah(p.discountPrice)}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm font-bold text-blue-600">
                    {formatRupiah(p.price)}
                  </p>
                )}

                <p className="text-[11px] font-semibold text-blue-600">
                  Beli di Shopee →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
