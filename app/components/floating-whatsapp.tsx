"use client";

import { SITE } from "../config/site";

export default function FloatingWhatsapp() {
  const openWhatsapp = () => {
    const message = `Halo Admin ${SITE.name} 👋

Saya sedang melihat website ${SITE.name} dan ingin bertanya mengenai produk.

Mohon bantuannya.

Terima kasih.`;

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsapp}
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:scale-110 hover:bg-green-600"
    >
      <img
        src="/data/images/icons/wa.png"
        alt="WhatsApp"
        className="h-8 w-8 object-contain"
      />
    </button>
  );
}