import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import FloatingWhatsapp from "./components/floating-whatsapp";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "TB Delapan Shop | Toko Bangunan & Mesin Teknik Lamongan",
    template: "%s | TB Delapan Shop",
  },

  description:
    "TB Delapan Shop (TB Delapan LMG / TB Delapan Teknik) merupakan toko bangunan di Lamongan yang menyediakan mesin teknik & perlengkapan bangunan berkualitas dengan harga kompetitif. Melayani pengiriman ke seluruh Indonesia.",

  keywords: [
    "TB Delapan Shop",
    "TB Delapan",
    "TB Delapan LMG",
    "TB Delapan Teknik",
    "TBDelapanLMG",
    "TBDelapanTeknik",

    "Toko Bangunan Delapan",
    "Toko Bangunan Delapan Lamongan",
    "Toko Bangunan Delapan Teknik",

    "Putra TB Delapan",
    "Putra Toko Bangunan Delapan",
    "PutraTBDelapan",

    "Toko Bangunan",
    "Mesin Teknik",
    "Perlengkapan Bangunan",
    "Peralatan Teknik",
    "Alat Teknik",
    "Perkakas",

    "Lamongan",
    "Kabupaten Lamongan",
    "Jawa Timur",
    "Indonesia",
  ],

  authors: [{ name: "TB Delapan Shop" }],

  creator: "TB Delapan Shop",

  publisher: "TB Delapan Shop",

  metadataBase: new URL("https://tbdelapanshop.my.id"),

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TB Delapan Shop",
    description:
      "TB Delapan Shop merupakan toko bangunan yang menyediakan mesin teknik & perlengkapan bangunan berkualitas.",

    url: "https://tbdelapanshop.my.id",

    siteName: "TB Delapan Shop",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TB Delapan Shop",

    description:
      "TB Delapan Shop menyediakan mesin teknik & perlengkapan bangunan berkualitas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/fbevents.js"
        />

        <Script id="fb-pixel">
          {`
            window.fbq = window.fbq || function(){fbq.callMethod?
            fbq.callMethod.apply(fbq, arguments):fbq.queue.push(arguments)};
            if(!window._fbq) window._fbq = window.fbq;
            fbq.push = fbq;
            fbq.loaded = true;
            fbq.version = '2.0';
            fbq.queue = [];

            fbq('init', '1444816726741400');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className="bg-white text-slate-900">
        <Header />

        {children}

        <FloatingWhatsapp />
       <Footer />
      </body>
    </html>
  );
}