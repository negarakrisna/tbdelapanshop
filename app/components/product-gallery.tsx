"use client";

import { useState } from "react";
import { Product } from "../types/product";

export default function ProductGallery({ product }: { product: Product }) {
  const images = Array.from(
    new Set(product.images?.length ? product.images : ["/file.svg"])
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <section
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: "white",
          borderRadius: 12,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={activeImage}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {images.length > 1 && (
        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
          }}
        >
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              style={{
                aspectRatio: "1 / 1",
                border:
                  activeIndex === index
                    ? "2px solid #2563eb"
                    : "1px solid #e2e8f0",
                borderRadius: 12,
                background: "white",
                padding: 4,
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={`${product.title} ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}