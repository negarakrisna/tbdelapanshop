import ProductCard from "./components/product-card";
import { getProducts } from "./lib/products";

export default function Home() {
  const list = getProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}