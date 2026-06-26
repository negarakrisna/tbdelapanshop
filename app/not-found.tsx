import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-12">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="text-5xl">😕</div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          Halaman tidak ditemukan
        </h1>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin sudah
          dipindahkan.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}