import { Product } from "../types/product";

export default function ProductDetailSections({
  product,
}: {
  product: Product;
}) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Deskripsi Produk</h2>

      {product.description?.overview && (
        <p className="mt-3 leading-7 text-slate-700">
          {product.description.overview}
        </p>
      )}

      {product.description?.features?.length ? (
        <div className="mt-6">
          <h3 className="font-bold text-slate-900">Fitur Unggulan</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-slate-700">
            {product.description.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {product.description?.package?.length ? (
        <div className="mt-6">
          <h3 className="font-bold text-slate-900">Kelengkapan</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-slate-700">
            {product.description.package.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {product.specifications &&
      Object.keys(product.specifications).length > 0 ? (
        <div className="mt-6">
          <h3 className="font-bold text-slate-900">Spesifikasi</h3>

          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-2 border-b border-slate-200 last:border-b-0"
              >
                <div className="bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                  {key}
                </div>
                <div className="p-3 text-sm text-slate-700">{value}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}