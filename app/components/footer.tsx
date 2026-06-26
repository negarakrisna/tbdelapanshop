import { SITE } from "../config/site";

export default function Footer() {
  const waMessage = `Halo Admin ${SITE.name}, saya ingin bertanya mengenai produk.`;

  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <img
          src="/data/images/logo/logo-header-tbdelapanshop.png"
          alt={SITE.name}
          className="h-8 w-auto"
        />

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          {SITE.description}
        </p>

        <div className="mt-6 grid gap-5 text-sm text-slate-700 md:grid-cols-3">
          <div>
            <div className="font-bold text-slate-900">Alamat</div>
            <p className="mt-2 leading-7">{SITE.address}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-blue-600 hover:underline"
            >
              Buka Lokasi di Google Maps →
            </a>
          </div>

          <div>
            <div className="font-bold text-slate-900">WhatsApp</div>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                waMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-blue-600 hover:underline"
            >
              Chat Admin via WhatsApp →
            </a>
          </div>

          <div>
            <div className="font-bold text-slate-900">Jam Operasional</div>
            <p className="mt-2 leading-7">{SITE.workingHours}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-sm text-slate-500">
          © 2026 {SITE.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}