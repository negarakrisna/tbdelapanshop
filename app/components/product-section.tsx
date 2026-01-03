import ProductCard, { Product } from "./product-card";

export default function ProductSection({
  title,
  products,
  seeAllUrl,
}: {
  title: string;
  products: Product[];
  seeAllUrl?: string;
}) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        {seeAllUrl && (
          <a
            href={seeAllUrl}
            target="_blank"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Lihat Semua →
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
