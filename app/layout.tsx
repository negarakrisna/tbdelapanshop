// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "TBDelapanShop Landing",
  description: "TBDelapanShop Landing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
