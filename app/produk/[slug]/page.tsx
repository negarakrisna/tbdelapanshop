import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../lib/products";
import ProductGallery from "../../components/product-gallery";
import ProductPurchase from "../../components/product-purchase";
import ProductDetailSections from "../../components/product-detail-sections";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 16px" }}>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: 20,
          fontSize: 14,
          fontWeight: 600,
          color: "#2563eb",
          textDecoration: "none",
        }}
      >
        ← Kembali
      </Link>

      <div className="product-detail-layout">
        <ProductGallery product={product} />
        <ProductPurchase product={product} />
      </div>

      <ProductDetailSections product={product} />
    </main>
  );
}