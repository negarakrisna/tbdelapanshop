// app/components/header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
        <Link href="/" aria-label="Home" className="inline-flex items-center">
          <img
            src="/data/images/logo/logo-header-tbdelapanshop.png"
            alt="TBDelapanShop"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
